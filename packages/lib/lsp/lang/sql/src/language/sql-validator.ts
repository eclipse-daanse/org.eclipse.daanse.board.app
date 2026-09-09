/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

import {
  AstUtils,
  type AstNode,
  type ValidationAcceptor,
  type ValidationChecks,
} from 'langium'
import type {
  ColumnReference,
  FunctionCall,
  MultiTableDelete,
  SelectCore,
  SelectStatement,
  SqlAstType,
  UpdateStatement,
  WithClause,
} from './generated/ast.js'
import {
  isColumnReference,
  isFunctionCall,
  isNumberLiteral,
} from './generated/ast.js'
import { lookupFunction } from './generated-mysql/functions.js'
import { RESERVED_NOT_IN_GRAMMAR } from './generated-mysql/keywords.js'

export function registerSqlValidation(services: {
  validation: {
    ValidationRegistry: {
      register(checks: ValidationChecks<SqlAstType>, thisObj: unknown): void
    }
  }
}): void {
  const validator = new SqlValidator()
  const checks: ValidationChecks<SqlAstType> = {
    FunctionCall: [validator.checkKnownFunction, validator.checkFunctionArity],
    SelectCore: [
      validator.checkDuplicateAliases,
      validator.checkNoAggregateInWhere,
      validator.checkGroupByOrdinals,
      validator.checkModifiers,
      validator.checkOnlyFullGroupBy,
    ],
    SelectStatement: [
      validator.checkOrderByOrdinals,
      validator.checkSingleInto,
    ],
    WithClause: validator.checkRecursiveDeclared,
    ColumnReference: [
      validator.checkReservedWord,
      validator.checkWildcardPlacement,
    ],
    UpdateStatement: validator.checkMultiTableUpdate,
    MultiTableDelete: validator.checkMultiTableDelete,
  }
  services.validation.ValidationRegistry.register(checks, validator)
}

function callName(
  call: FunctionCall,
): { name: string; qualified: boolean } | undefined {
  if (call.name) return { name: call.name, qualified: false }
  const parts = call.callee?.name.parts
  if (!parts || parts.length === 0) return undefined
  return { name: parts[parts.length - 1], qualified: parts.length > 1 }
}

function aggregateOrWindow(
  call: FunctionCall,
): 'aggregate' | 'window' | undefined {
  if (call.over) return 'window'
  const name = callName(call)
  if (!name || name.qualified) return undefined
  const fn = lookupFunction(name.name)
  if (fn?.kind === 'aggregate') return 'aggregate'
  if (fn?.kind === 'window') return 'window'
  return undefined
}

function sourceParts(reference: ColumnReference): string[] {
  const text = reference.name.$cstNode?.text
  return text ? text.split('.') : []
}

function isQuoted(part: string): boolean {
  const first = part.trimStart().charAt(0)
  return first === '`' || first === '"'
}

export class SqlValidator {
  checkKnownFunction(call: FunctionCall, accept: ValidationAcceptor): void {
    const name = callName(call)
    if (!name || name.qualified) return
    if (lookupFunction(name.name)) return
    accept(
      'error',
      `Unknown MySQL function '${name.name}'. If this is a stored routine, qualify it with its schema.`,
      { node: call, property: call.name ? 'name' : 'callee' },
    )
  }

  checkFunctionArity(call: FunctionCall, accept: ValidationAcceptor): void {
    const name = callName(call)
    if (!name || name.qualified) return
    const fn = lookupFunction(name.name)
    if (!fn || fn.minArgs === null) return
    // `COUNT(*)` and the window functions that take no arguments are
    // spelled without an argument list; neither is an arity error.
    if (call.star) return
    const count = call.arguments.length
    const max = fn.maxArgs
    if (count < fn.minArgs || (max !== null && count > max)) {
      const expected =
        max === null
          ? `at least ${fn.minArgs}`
          : max === fn.minArgs
            ? `${fn.minArgs}`
            : `${fn.minArgs} to ${max}`
      accept(
        'error',
        `Incorrect parameter count in the call to native function '${fn.name}': expected ${expected}, got ${count}.`,
        { node: call },
      )
    }
  }

  checkDuplicateAliases(select: SelectCore, accept: ValidationAcceptor): void {
    const seen = new Map<string, AstNode>()
    for (const source of select.from) {
      for (const factor of AstUtils.streamAllContents(source)) {
        const alias = aliasOf(factor)
        if (!alias) continue
        const key = alias.name.toLowerCase()
        if (seen.has(key)) {
          accept('error', `Not unique table/alias: '${alias.name}'.`, {
            node: alias.node,
            property: 'alias',
          })
        } else {
          seen.set(key, alias.node)
        }
      }
      const alias = aliasOf(source)
      if (alias) {
        const key = alias.name.toLowerCase()
        if (seen.has(key)) {
          accept('error', `Not unique table/alias: '${alias.name}'.`, {
            node: alias.node,
            property: 'alias',
          })
        } else {
          seen.set(key, alias.node)
        }
      }
    }
  }

  checkNoAggregateInWhere(
    select: SelectCore,
    accept: ValidationAcceptor,
  ): void {
    if (!select.where) return
    for (const node of AstUtils.streamAst(select.where)) {
      if (!isFunctionCall(node)) continue
      const kind = aggregateOrWindow(node)
      if (kind === 'aggregate') {
        accept('error', 'Invalid use of group function in WHERE.', { node })
      } else if (kind === 'window') {
        accept(
          'error',
          'You cannot use the window function here; use a subquery or HAVING.',
          {
            node,
          },
        )
      }
    }
  }

  checkGroupByOrdinals(select: SelectCore, accept: ValidationAcceptor): void {
    checkOrdinals(
      select.groupBy,
      select.selections.length,
      'group statement',
      accept,
    )
  }

  checkOrderByOrdinals(
    statement: SelectStatement,
    accept: ValidationAcceptor,
  ): void {
    const core = leftmostCore(statement)
    if (!core) return
    checkOrdinals(
      statement.orderings,
      core.selections.length,
      'order clause',
      accept,
    )
  }

  checkModifiers(select: SelectCore, accept: ValidationAcceptor): void {
    const seen = new Set<string>()
    select.modifiers.forEach((modifier, index) => {
      const key = modifier.toUpperCase()
      if (seen.has(key)) {
        accept('error', `Duplicate '${key}' in the select modifiers.`, {
          node: select,
          property: 'modifiers',
          index,
        })
      }
      seen.add(key)
      if (key === 'SQL_CALC_FOUND_ROWS') {
        accept(
          'warning',
          'SQL_CALC_FOUND_ROWS is deprecated as of MySQL 8.0.17.',
          {
            node: select,
            property: 'modifiers',
            index,
          },
        )
      }
    })
    if (seen.has('ALL') && (seen.has('DISTINCT') || seen.has('DISTINCTROW'))) {
      accept('error', 'ALL and DISTINCT cannot both be given.', {
        node: select,
        property: 'modifiers',
      })
    }
  }

  checkOnlyFullGroupBy(select: SelectCore, accept: ValidationAcceptor): void {
    if (select.groupBy.length === 0 || select.rollup) return
    const grouped = new Set(
      select.groupBy
        .map(item =>
          isColumnReference(item.expression)
            ? columnKey(item.expression)
            : undefined,
        )
        .filter((key): key is string => key !== undefined),
    )
    select.selections.forEach((selection, index) => {
      if (selection.$type !== 'AliasedExpression') return
      for (const node of AstUtils.streamAst(selection.expression)) {
        if (isFunctionCall(node) && aggregateOrWindow(node)) return
      }
      for (const node of AstUtils.streamAst(selection.expression)) {
        if (!isColumnReference(node) || node.name.wildcard) continue
        if (grouped.has(columnKey(node))) continue
        accept(
          'warning',
          `'${node.name.parts.join('.')}' is neither aggregated nor in GROUP BY; ` +
            'ONLY_FULL_GROUP_BY rejects this unless the column is functionally dependent on the grouping.',
          { node: select, property: 'selections', index },
        )
        return
      }
    })
  }

  checkSingleInto(
    statement: SelectStatement,
    accept: ValidationAcceptor,
  ): void {
    const cores = [...AstUtils.streamAst(statement.query)].filter(
      (node): node is SelectCore => node.$type === 'SelectCore',
    )
    const count =
      (statement.into ? 1 : 0) +
      (statement.trailingInto ? 1 : 0) +
      cores.filter(core => core.into).length
    if (count > 1) {
      accept('error', 'A statement may have only one INTO clause.', {
        node: statement,
      })
    }
  }

  checkRecursiveDeclared(clause: WithClause, accept: ValidationAcceptor): void {
    if (clause.recursive) return
    for (const cte of clause.ctes) {
      const self = cte.name.toLowerCase()
      for (const node of AstUtils.streamAst(cte.query)) {
        if (node.$type !== 'NamedTable') continue
        const parts = (node as unknown as { table: { parts: string[] } }).table
          .parts
        if (parts.length === 1 && parts[0].toLowerCase() === self) {
          accept(
            'error',
            `Recursive Common Table Expression '${cte.name}' should contain RECURSIVE after WITH.`,
            { node: clause, property: 'ctes', index: clause.ctes.indexOf(cte) },
          )
          return
        }
      }
    }
  }

  checkReservedWord(
    reference: ColumnReference,
    accept: ValidationAcceptor,
  ): void {
    // A reserved word is allowed as a *function* name when a `(` follows
    // immediately - MySQL's lexer has the same special case, and
    // `RANK() OVER (...)` reaches here as a call whose callee is this node.
    const parent = reference.$container
    if (isFunctionCall(parent) && parent.callee === reference) return
    const parts = sourceParts(reference)
    for (const part of parts) {
      const word = part.trim()
      if (isQuoted(word)) continue
      if (!RESERVED_NOT_IN_GRAMMAR.has(word.toUpperCase())) continue
      accept(
        'error',
        `'${word.toUpperCase()}' is a reserved word in MySQL 8.4 and must be quoted to be used as an identifier.`,
        { node: reference, property: 'name' },
      )
    }
  }

  checkWildcardPlacement(
    reference: ColumnReference,
    accept: ValidationAcceptor,
  ): void {
    if (!reference.name.wildcard) return
    const parent = reference.$container
    if (
      parent?.$type === 'AliasedExpression' &&
      parent.$container.$type === 'SelectCore'
    )
      return
    accept('error', 'A qualified wildcard is only allowed in a select list.', {
      node: reference,
      property: 'name',
    })
  }

  checkMultiTableUpdate(
    statement: UpdateStatement,
    accept: ValidationAcceptor,
  ): void {
    if (statement.targets.length === 1 && statement.targets[0].$type !== 'Join')
      return
    if (statement.orderings.length > 0) {
      accept(
        'error',
        'Incorrect usage of UPDATE and ORDER BY: multi-table UPDATE cannot be ordered.',
        {
          node: statement,
          property: 'orderings',
        },
      )
    }
    if (statement.limit) {
      accept(
        'error',
        'Incorrect usage of UPDATE and LIMIT: multi-table UPDATE cannot be limited.',
        {
          node: statement,
          property: 'limit',
        },
      )
    }
  }

  checkMultiTableDelete(
    statement: MultiTableDelete,
    accept: ValidationAcceptor,
  ): void {
    if (statement.orderings.length > 0) {
      accept(
        'error',
        'Incorrect usage of DELETE and ORDER BY: multi-table DELETE cannot be ordered.',
        {
          node: statement,
          property: 'orderings',
        },
      )
    }
    if (statement.limit) {
      accept(
        'error',
        'Incorrect usage of DELETE and LIMIT: multi-table DELETE cannot be limited.',
        {
          node: statement,
          property: 'limit',
        },
      )
    }
  }
}

function columnKey(reference: ColumnReference): string {
  return reference.name.parts.join('.').toLowerCase()
}

interface Alias {
  name: string
  node: AstNode & { alias?: string }
}

function aliasOf(node: AstNode): Alias | undefined {
  if (node.$type !== 'NamedTable' && node.$type !== 'DerivedTable')
    return undefined
  const typed = node as AstNode & {
    alias?: string
    table?: { parts: string[] }
  }
  // An unaliased table is referred to by its own name, and MySQL reports the
  // same 1066 for `FROM t, t`.
  const name = typed.alias ?? typed.table?.parts.at(-1)
  return name ? { name, node: typed } : undefined
}

function leftmostCore(statement: SelectStatement): SelectCore | undefined {
  let node: AstNode | undefined = statement.query
  while (node) {
    if (node.$type === 'SelectCore') return node as SelectCore
    if (node.$type === 'SetOperation') {
      node = (node as unknown as { left: AstNode }).left
    } else if (node.$type === 'ParenthesizedQuery') {
      node = (node as unknown as { query: SelectStatement }).query.query
    } else {
      return undefined
    }
  }
  return undefined
}

function checkOrdinals(
  items: readonly (AstNode & { expression: AstNode })[],
  selectionCount: number,
  clause: string,
  accept: ValidationAcceptor,
): void {
  items.forEach((item, index) => {
    const expression = item.expression
    if (!isNumberLiteral(expression)) return
    const ordinal = expression.value
    if (!Number.isInteger(ordinal)) return
    if (ordinal >= 1 && ordinal <= selectionCount) return
    accept('error', `Unknown column '${ordinal}' in '${clause}'.`, {
      node: item,
      property: 'expression',
      index,
    })
  })
}
