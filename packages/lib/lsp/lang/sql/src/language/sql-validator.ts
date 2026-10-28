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

/**
 * What the editor reports beyond parse errors.
 *
 * One rule decides what belongs here: **report what PostgreSQL rejects and what
 * is decidable without a schema.** This package has no catalogue - it never
 * learns what tables or columns exist - so `SELECT nosuchcolumn FROM t` is
 * correctly silent, and anything whose verdict depends on the catalogue is a
 * warning rather than an error.
 *
 * Every check names the behaviour it mirrors, and `test/corpus/` holds the
 * transcript from a real server for the ones a statement can demonstrate.
 */

import {
  AstUtils,
  CstUtils,
  type AstNode,
  type ValidationAcceptor,
  type ValidationChecks,
} from 'langium'
import type {
  AliasedExpression,
  BareOperator,
  ColumnReference,
  FunctionCall,
  IntervalLiteral,
  MergeWhenClause,
  QualifiedOperator,
  QueryStatement,
  SelectCore,
  SqlAstType,
  SqlModel,
  StringLiteral,
  TypeName,
  WindowFrame,
  WithClause,
} from './generated/ast.js'
import {
  isColumnReference,
  isFunctionCall,
  isNumberLiteral,
  isSelectCore,
  isSetOperation,
} from './generated/ast.js'
import { lookupFunction } from './generated-postgres/functions.js'
import { RESERVED_NOT_IN_GRAMMAR } from './generated-postgres/keywords.js'
import { OPERATORS } from './generated-postgres/operators.js'

export function registerSqlValidation(services: {
  validation: {
    ValidationRegistry: {
      register(checks: ValidationChecks<SqlAstType>, thisObj: unknown): void
    }
  }
}): void {
  const validator = new SqlValidator()
  const checks: ValidationChecks<SqlAstType> = {
    SqlModel: validator.checkStatementSeparators,
    FunctionCall: [
      validator.checkKnownFunction,
      validator.checkFunctionArity,
      validator.checkAggregateOnlyClauses,
    ],
    SelectCore: [
      validator.checkDuplicateAliases,
      validator.checkAggregatePlacement,
      validator.checkGroupByOrdinals,
      validator.checkGroupedColumns,
    ],
    QueryStatement: [
      validator.checkOrderByOrdinals,
      validator.checkDistinctOn,
      validator.checkLimitCount,
      validator.checkLockingClause,
    ],
    WithClause: validator.checkRecursiveDeclared,
    ColumnReference: [
      validator.checkReservedWord,
      validator.checkWildcardPlacement,
    ],
    AliasedExpression: validator.checkTrailingJunkAfterNumber,
    StringLiteral: validator.checkAdjacentStrings,
    WindowFrame: validator.checkFrameBounds,
    MergeWhenClause: validator.checkMergeBySource,
    BareOperator: validator.checkOperatorExists,
    IntervalLiteral: validator.checkIntervalLiteralFields,
    QualifiedOperator: validator.checkQualifiedOperatorExists,
    TypeName: validator.checkIntervalFields,
  }
  services.validation.ValidationRegistry.register(checks, validator)
}

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

interface CallName {
  name: string
  qualified: boolean
}

function callName(call: FunctionCall): CallName | undefined {
  const parts = call.callee?.name.parts
  if (!parts || parts.length === 0) return undefined
  return { name: parts[parts.length - 1], qualified: parts.length > 1 }
}

/**
 * `pg_proc.prokind`, which is why this is exact rather than a hand-kept list:
 * `a` is an aggregate, `w` a window function. A call written with OVER is a
 * window call whatever the function is.
 */
function callKind(call: FunctionCall): 'aggregate' | 'window' | undefined {
  if (call.over) return 'window'
  const name = callName(call)
  if (!name || name.qualified) return undefined
  const kind = lookupFunction(name.name)?.kind
  if (kind === 'a') return 'aggregate'
  if (kind === 'w') return 'window'
  return undefined
}

/** The aggregate and window calls directly inside an expression. */
function callsIn(node: AstNode | undefined): FunctionCall[] {
  if (!node) return []
  return [...AstUtils.streamAst(node)].filter(isFunctionCall)
}

function columnKey(reference: ColumnReference): string {
  return reference.name.parts.join('.').toLowerCase()
}

/** The leftmost SELECT of a set operation - the one whose select list counts. */
function leftmostCore(statement: QueryStatement): SelectCore | undefined {
  let node: AstNode | undefined = statement.query
  while (node) {
    if (isSelectCore(node)) return node
    if (isSetOperation(node)) {
      node = node.left
    } else if (node.$type === 'ParenthesizedQuery') {
      node = (node as unknown as { query: QueryStatement }).query.query
    } else {
      return undefined
    }
  }
  return undefined
}

export class SqlValidator {
  // -------------------------------------------------------------------------
  // Statements
  // -------------------------------------------------------------------------

  /**
   * Statements must be separated by `;`. The grammar cannot require it - see
   * the note on `SqlModel` in `sql.langium` - and without the separator two
   * statements read as one document with no complaint: `SELECT select FROM t`
   * parses as `SELECT` followed by `select FROM t`, because a target list may
   * be empty.
   *
   * The evidence is the text between one statement and the next, which is where
   * the `;` would be.
   */
  checkStatementSeparators(model: SqlModel, accept: ValidationAcceptor): void {
    const text = model.$cstNode?.root.fullText
    if (!text) return
    for (let index = 0; index + 1 < model.statements.length; index++) {
      const end = model.statements[index].$cstNode?.end
      const start = model.statements[index + 1].$cstNode?.offset
      if (end === undefined || start === undefined) continue
      if (text.slice(end, start).includes(';')) continue
      accept('error', 'syntax error: statements must be separated by ";".', {
        node: model.statements[index + 1],
      })
    }
  }

  // -------------------------------------------------------------------------
  // Functions
  // -------------------------------------------------------------------------

  /**
   * A warning, not an error, and that is the difference from the MySQL package:
   * PostgreSQL resolves an unqualified name through `search_path`, so a function
   * this catalogue has never heard of is routinely a perfectly good
   * user-defined one. Deciding needs the catalogue; saying nothing would hide
   * the typo that is the common case.
   */
  checkKnownFunction(call: FunctionCall, accept: ValidationAcceptor): void {
    const name = callName(call)
    if (!name || name.qualified) return
    if (lookupFunction(name.name)) return
    accept(
      'warning',
      `No built-in function named '${name.name}'. If it is one of your own, this is fine - nothing here reads the catalogue.`,
      { node: call, property: 'callee' },
    )
  }

  /**
   * Argument *count*, never argument types: an overload is chosen by type, and
   * types need the catalogue. A call matches when some overload could take this
   * many arguments, counting its defaults and its variadic tail.
   */
  checkFunctionArity(call: FunctionCall, accept: ValidationAcceptor): void {
    const name = callName(call)
    if (!name || name.qualified || call.star) return
    const entry = lookupFunction(name.name)
    if (!entry) return
    const count = call.arguments.length
    const fits = entry.overloads.some(overload => {
      if (overload.variadic) return count >= Math.max(overload.args - 1, 0)
      return count >= overload.args - overload.defaults && count <= overload.args
    })
    if (fits) return
    const accepted = [
      ...new Set(
        entry.overloads.flatMap(overload =>
          overload.variadic
            ? [`${Math.max(overload.args - 1, 0)} or more`]
            : Array.from(
                { length: overload.defaults + 1 },
                (_, i) => `${overload.args - i}`,
              ),
        ),
      ),
    ].join(', ')
    accept(
      'error',
      `function ${name.name} takes ${accepted} argument(s), not ${count}.`,
      { node: call },
    )
  }

  /**
   * `FILTER (WHERE ...)` and `WITHIN GROUP (ORDER BY ...)` belong to aggregates.
   * `prokind` answers this exactly, so a user-defined aggregate this catalogue
   * does not know is left alone rather than reported wrongly.
   */
  checkAggregateOnlyClauses(
    call: FunctionCall,
    accept: ValidationAcceptor,
  ): void {
    const name = callName(call)
    if (!name || name.qualified) return
    const entry = lookupFunction(name.name)
    if (!entry) return
    if (call.filter && entry.kind !== 'a') {
      accept(
        'error',
        `FILTER is only allowed on an aggregate, and ${name.name} is not one.`,
        { node: call, property: 'filter' },
      )
    }
    if (call.withinGroup && entry.kind !== 'a') {
      accept(
        'error',
        `WITHIN GROUP is only allowed on an ordered-set aggregate, and ${name.name} is not one.`,
        { node: call, property: 'withinGroup' },
      )
    }
  }

  // -------------------------------------------------------------------------
  // SELECT
  // -------------------------------------------------------------------------

  /** `table name "x" specified more than once`. Names fold to lower case. */
  checkDuplicateAliases(select: SelectCore, accept: ValidationAcceptor): void {
    const seen = new Set<string>()
    for (const source of select.from) {
      for (const node of [source, ...AstUtils.streamAllContents(source)]) {
        const alias = aliasOf(node)
        if (!alias) continue
        const key = alias.name.toLowerCase()
        if (seen.has(key)) {
          accept(
            'error',
            `table name "${alias.name}" specified more than once.`,
            { node: alias.node },
          )
        }
        seen.add(key)
      }
    }
  }

  /**
   * Where an aggregate or a window function may not stand. PostgreSQL rejects
   * all four with 42803, and none of them needs a schema to see.
   */
  checkAggregatePlacement(
    select: SelectCore,
    accept: ValidationAcceptor,
  ): void {
    const report = (node: FunctionCall, clause: string) => {
      const kind = callKind(node)
      if (!kind) return
      accept(
        'error',
        `${kind === 'aggregate' ? 'aggregate functions' : 'window functions'} are not allowed in ${clause}.`,
        { node },
      )
    }
    for (const call of callsIn(select.where)) report(call, 'WHERE')
    for (const item of select.groupBy) {
      for (const call of callsIn(item)) report(call, 'GROUP BY')
    }
    for (const source of select.from) {
      for (const node of AstUtils.streamAst(source)) {
        if (node.$type !== 'JoinOn') continue
        for (const call of callsIn(node)) report(call, 'JOIN conditions')
      }
    }
    // A window function may not appear in HAVING either; an aggregate may.
    for (const call of callsIn(select.having)) {
      if (callKind(call) === 'window') report(call, 'HAVING')
    }
  }

  checkGroupByOrdinals(select: SelectCore, accept: ValidationAcceptor): void {
    checkOrdinals(select.groupBy, select.selections.length, 'GROUP BY', accept)
  }

  checkOrderByOrdinals(
    statement: QueryStatement,
    accept: ValidationAcceptor,
  ): void {
    const core = leftmostCore(statement)
    if (!core) return
    checkOrdinals(statement.orderings, core.selections.length, 'ORDER BY', accept)
  }

  /**
   * A warning, because the exemption PostgreSQL grants is the one thing here
   * that needs a schema: a column functionally dependent on a grouped primary
   * key is allowed, and nothing in this package knows what the keys are.
   */
  checkGroupedColumns(select: SelectCore, accept: ValidationAcceptor): void {
    if (select.groupBy.length === 0) return
    const grouped = new Set(
      select.groupBy
        .map(item =>
          item.$type === 'ExpressionGrouping' &&
          isColumnReference(item.expression)
            ? columnKey(item.expression)
            : undefined,
        )
        .filter((key): key is string => key !== undefined),
    )
    select.selections.forEach((selection, index) => {
      if (selection.$type !== 'AliasedExpression') return
      if (callsIn(selection.expression).some(call => callKind(call))) return
      for (const node of AstUtils.streamAst(selection.expression)) {
        if (!isColumnReference(node) || node.name.wildcard) continue
        if (grouped.has(columnKey(node))) continue
        accept(
          'warning',
          `column "${node.name.parts.join('.')}" must appear in the GROUP BY clause or be used in an aggregate function - unless it is functionally dependent on a grouped key, which needs a schema to decide.`,
          { node: select, property: 'selections', index },
        )
        return
      }
    })
  }

  /** `SELECT DISTINCT ON expressions must match initial ORDER BY expressions`. */
  checkDistinctOn(
    statement: QueryStatement,
    accept: ValidationAcceptor,
  ): void {
    const core = leftmostCore(statement)
    const on = core?.distinct?.on
    if (!core || !on || on.length === 0) return
    if (statement.orderings.length === 0) return
    const text = (node: AstNode | undefined) =>
      node?.$cstNode?.text.replace(/\s+/g, ' ').toLowerCase()
    for (const [index, expression] of on.entries()) {
      const ordering = statement.orderings[index]
      if (ordering && text(expression) === text(ordering.expression)) continue
      accept(
        'error',
        'SELECT DISTINCT ON expressions must match initial ORDER BY expressions.',
        { node: core.distinct!, property: 'on', index },
      )
      return
    }
  }

  /** The page allows one LIMIT or FETCH and one OFFSET, in either order. */
  checkLimitCount(
    statement: QueryStatement,
    accept: ValidationAcceptor,
  ): void {
    const count = (type: string) =>
      statement.limits.filter(limit => limit.$type === type).length
    const limits = count('LimitClause') + count('FetchClause')
    if (limits > 1) {
      accept('error', 'multiple LIMIT clauses not allowed.', {
        node: statement,
        property: 'limits',
      })
    }
    if (count('OffsetClause') > 1) {
      accept('error', 'multiple OFFSET clauses not allowed.', {
        node: statement,
        property: 'limits',
      })
    }
  }

  /** `FOR UPDATE is not allowed with ...` - each of these is 0A000 or 42601. */
  checkLockingClause(
    statement: QueryStatement,
    accept: ValidationAcceptor,
  ): void {
    if (statement.lockings.length === 0) return
    const core = leftmostCore(statement)
    const report = (what: string) => {
      accept('error', `FOR UPDATE is not allowed with ${what}.`, {
        node: statement,
        property: 'lockings',
      })
    }
    if (isSetOperation(statement.query)) report('UNION/INTERSECT/EXCEPT')
    if (!core) return
    if (core.distinct) report('DISTINCT clause')
    if (core.groupBy.length > 0) report('GROUP BY clause')
    if (core.having) report('HAVING clause')
    if (core.selections.some(selection =>
      selection.$type === 'AliasedExpression' &&
      callsIn(selection.expression).some(call => callKind(call) === 'aggregate'),
    )) {
      report('aggregate functions')
    }
  }

  // -------------------------------------------------------------------------
  // Windows
  // -------------------------------------------------------------------------

  /**
   * `frame start cannot be UNBOUNDED FOLLOWING` and its three siblings: a frame
   * must run forwards, which is decided from the two bounds alone.
   */
  checkFrameBounds(frame: WindowFrame, accept: ValidationAcceptor): void {
    const bound = (node: AstNode | undefined) =>
      node?.$type === 'UnboundedBound'
        ? (node as unknown as { direction: string }).direction
        : node?.$type === 'OffsetBound'
          ? (node as unknown as { direction: string }).direction
          : undefined
    const unbounded = (node: AstNode | undefined) =>
      node?.$type === 'UnboundedBound'

    if (unbounded(frame.start) && bound(frame.start) === 'FOLLOWING') {
      accept('error', 'frame start cannot be UNBOUNDED FOLLOWING.', {
        node: frame,
        property: 'start',
      })
    }
    if (unbounded(frame.end) && bound(frame.end) === 'PRECEDING') {
      accept('error', 'frame end cannot be UNBOUNDED PRECEDING.', {
        node: frame,
        property: 'end',
      })
    }
    if (
      frame.end &&
      bound(frame.start) === 'FOLLOWING' &&
      bound(frame.end) === 'PRECEDING'
    ) {
      accept('error', 'frame starting from following row cannot end with row before it.', {
        node: frame,
        property: 'end',
      })
    }
  }

  // -------------------------------------------------------------------------
  // MERGE
  // -------------------------------------------------------------------------

  /** `BY SOURCE` and `BY TARGET` qualify NOT MATCHED only. */
  checkMergeBySource(
    clause: MergeWhenClause,
    accept: ValidationAcceptor,
  ): void {
    if (!clause.by || clause.notMatched) return
    accept(
      'error',
      `WHEN MATCHED BY ${clause.by} is not allowed: only NOT MATCHED takes BY SOURCE or BY TARGET.`,
      { node: clause, property: 'by' },
    )
  }

  // -------------------------------------------------------------------------
  // Names, literals and operators
  // -------------------------------------------------------------------------

  /**
   * The other half of matching PostgreSQL's identifier rules. The grammar
   * reserves a word only when some rule spells it; the words the server reserves
   * and no rule mentions are caught here, where they would otherwise pass as
   * bare names.
   */
  checkReservedWord(
    reference: ColumnReference,
    accept: ValidationAcceptor,
  ): void {
    const parent = reference.$container
    if (isFunctionCall(parent) && parent.callee === reference) return
    for (const part of sourceParts(reference)) {
      const word = part.trim()
      if (isQuoted(word)) continue
      if (!RESERVED_NOT_IN_GRAMMAR.has(word.toLowerCase())) continue
      accept(
        'error',
        `syntax error at or near "${word}": it is a reserved word in PostgreSQL 18 and must be quoted to be used as a name.`,
        { node: reference, property: 'name' },
      )
    }
  }

  /**
   * `t.*` is row expansion, and PostgreSQL allows it in more places than MySQL
   * does - `f(t.*)` and `ROW(t.*)` are both valid. What it is not is a value in
   * an ordinary expression.
   */
  checkWildcardPlacement(
    reference: ColumnReference,
    accept: ValidationAcceptor,
  ): void {
    if (!reference.name.wildcard) return
    const parent = reference.$container
    if (parent?.$type === 'AliasedExpression') return
    if (parent?.$type === 'RowConstructor') return
    if (parent?.$type === 'PositionalArgument') return
    accept(
      'error',
      'a qualified wildcard is only allowed in a select list, a row constructor, or a function argument.',
      { node: reference, property: 'name' },
    )
  }

  /**
   * `SELECT 1a` - a numeric literal followed with no space by a word.
   * PostgreSQL 15 made this an error ("trailing junk after numeric literal").
   *
   * Here the two lex apart and the word is a perfectly good bare column label,
   * so `1a` parses as `1 AS a` and means something else entirely. Nothing in
   * the AST says so; the adjacency of the two tokens is the only evidence.
   */
  checkTrailingJunkAfterNumber(
    aliased: AliasedExpression,
    accept: ValidationAcceptor,
  ): void {
    if (!aliased.alias || !isNumberLiteral(aliased.expression)) return
    const expression = aliased.expression.$cstNode
    const root = AstUtils.findRootNode(aliased)?.$cstNode
    if (!expression || !root) return
    // `AS` between them means the alias was written on purpose.
    const next = CstUtils.findLeafNodeAtOffset(root, expression.end)
    if (!next || next.offset !== expression.end) return
    accept('error', 'trailing junk after numeric literal.', {
      node: aliased,
      property: 'alias',
    })
  }

  /**
   * Two string literals concatenate only with a newline between them (4.1.2.1);
   * written on one line the server reports a syntax error. That is a lexical
   * rule the grammar cannot state, so the offsets are what decide it.
   */
  checkAdjacentStrings(
    literal: StringLiteral,
    accept: ValidationAcceptor,
  ): void {
    const cst = literal.$cstNode
    if (!cst) return
    // The leaves of a `values+=SCONST+` node are the string tokens themselves,
    // in source order, which is all this needs.
    const tokens = [...CstUtils.flattenCst(cst)]
    for (let index = 1; index < tokens.length; index++) {
      const between = cst.root.fullText.slice(
        tokens[index - 1].end,
        tokens[index].offset,
      )
      if (/[\n\r]/.test(between)) continue
      accept(
        'error',
        'syntax error: adjacent string literals concatenate only when a newline separates them.',
        { node: literal, property: 'values', index },
      )
      return
    }
  }

  /** The lexer takes any run of operator characters; this asks if it exists. */
  checkOperatorExists(
    operator: BareOperator,
    accept: ValidationAcceptor,
  ): void {
    if (OPERATORS.has(operator.name)) return
    accept('error', `operator does not exist: ${operator.name}.`, {
      node: operator,
      property: 'name',
    })
  }

  checkQualifiedOperatorExists(
    operator: QualifiedOperator,
    accept: ValidationAcceptor,
  ): void {
    // Only `pg_catalog` is this catalogue's business; another schema's
    // operators are as unknowable as its functions.
    const schema = operator.schema.at(-1)?.toLowerCase()
    if (schema && schema !== 'pg_catalog') return
    if (OPERATORS.has(operator.name)) return
    accept('error', `operator does not exist: ${operator.name}.`, {
      node: operator,
      property: 'name',
    })
  }

  /**
   * `DAY TO SECOND` is an interval qualifier; `SECOND TO DAY` is not. The
   * grammar accepts any pair - spelling the seven valid ones out gave prefixes
   * no lookahead could separate - so the order is checked here.
   */
  checkIntervalFields(type: TypeName, accept: ValidationAcceptor): void {
    const base = type.base
    if (base?.$type !== 'IntervalType') return
    const invalid = invalidIntervalFields(
      (base as unknown as { fields?: string }).fields,
    )
    if (invalid) {
      accept('error', `invalid INTERVAL qualifier: ${invalid}.`, {
        node: type,
        property: 'base',
      })
    }
  }

  /**
   * The same rule on the literal spelling, where the qualifier follows the
   * string (`INTERVAL '1' DAY TO SECOND`) rather than the type name.
   */
  checkIntervalLiteralFields(
    literal: IntervalLiteral,
    accept: ValidationAcceptor,
  ): void {
    const invalid = invalidIntervalFields(literal.fields)
    if (invalid) {
      accept('error', `invalid INTERVAL qualifier: ${invalid}.`, {
        node: literal,
        property: 'fields',
      })
    }
  }

  // -------------------------------------------------------------------------
  // CTEs
  // -------------------------------------------------------------------------

  /**
   * A warning, unlike the MySQL package's error: without RECURSIVE the name
   * does not refer to the CTE at all, it refers to whatever table of that name
   * exists - which is a catalogue question. The common case is still a missing
   * RECURSIVE, and saying so is worth a warning.
   */
  checkRecursiveDeclared(clause: WithClause, accept: ValidationAcceptor): void {
    if (clause.recursive) return
    clause.ctes.forEach((cte, index) => {
      const self = cte.name.toLowerCase()
      for (const node of AstUtils.streamAst(cte.query)) {
        if (node.$type !== 'NamedTable') continue
        const parts = (node as unknown as { table: { parts: string[] } }).table
          .parts
        if (parts.length === 1 && parts[0].toLowerCase() === self) {
          accept(
            'warning',
            `"${cte.name}" refers to itself; without RECURSIVE after WITH this reads as a table of the same name.`,
            { node: clause, property: 'ctes', index },
          )
          return
        }
      }
    })
  }
}

// ---------------------------------------------------------------------------
// Local helpers
// ---------------------------------------------------------------------------

interface Alias {
  name: string
  node: AstNode
}

function aliasOf(node: AstNode): Alias | undefined {
  const typed = node as AstNode & {
    alias?: { name?: string }
    table?: { parts: string[] }
  }
  if (
    node.$type !== 'NamedTable' &&
    node.$type !== 'DerivedTable' &&
    node.$type !== 'TableFunction' &&
    node.$type !== 'RowsFromTable' &&
    node.$type !== 'JsonTableFunction'
  ) {
    return undefined
  }
  // An unaliased table is referred to by its own name, which is why
  // `FROM t, t` is the same error as `FROM t1 AS x, t2 AS x`.
  const name = typed.alias?.name ?? typed.table?.parts.at(-1)
  return name ? { name, node: typed } : undefined
}

function sourceParts(reference: ColumnReference): string[] {
  const text = reference.name.$cstNode?.text
  return text ? text.split('.') : []
}

function isQuoted(part: string): boolean {
  return part.trimStart().charAt(0) === '"'
}

/**
 * `DAY TO SECOND` is a qualifier; `SECOND TO DAY` is not. The grammar accepts
 * any pair - spelling the seven valid ones out gave prefixes no lookahead could
 * separate - so the order is decided here. Returns the offending qualifier,
 * readably, or nothing when the pair is good.
 *
 * A data-type rule's value is its tokens concatenated with nothing between
 * them, so `day to second` arrives as `daytosecond`. No unit name contains
 * `TO`, which makes splitting on it unambiguous.
 */
function invalidIntervalFields(fields: string | undefined): string | undefined {
  if (!fields) return undefined
  const parts = fields.toUpperCase().replace(/\s+/g, '').split('TO')
  if (parts.length !== 2) return undefined
  const order = ['YEAR', 'MONTH', 'DAY', 'HOUR', 'MINUTE', 'SECOND']
  const [from, to] = parts.map(part => order.indexOf(part))
  if (from >= 0 && to >= 0 && from < to) return undefined
  return `${parts[0]} TO ${parts[1]}`
}

function checkOrdinals(
  items: readonly (AstNode & { expression?: AstNode })[],
  selectionCount: number,
  clause: string,
  accept: ValidationAcceptor,
): void {
  items.forEach((item, index) => {
    const expression = item.expression
    if (!expression || !isNumberLiteral(expression)) return
    const ordinal = expression.value
    if (!Number.isInteger(ordinal)) return
    if (ordinal >= 1 && ordinal <= selectionCount) return
    accept(
      'error',
      `${clause} position ${ordinal} is not in select list.`,
      { node: item, property: 'expression', index },
    )
  })
}
