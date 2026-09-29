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
 * Checks that need no model.
 *
 * The editor does not know the model's tables, columns and measures, so it
 * checks only what a document says about itself: that the functions it
 * calls exist and are called with a count of arguments they take, that no
 * name is declared twice where DAX forbids it, and that START AT does not
 * outrun ORDER BY. Types are not checked: whether `Sales` is a table or a
 * column is a fact about the model.
 */
import type { ValidationAcceptor, ValidationChecks } from 'langium'
import {
  isColumnDefinition,
  isMeasureDefinition,
  isParameterDefinition,
  isRowExpression,
  isTableDefinition,
  isVariableDefinition,
  type DaxAstType,
  type Definition,
  type EvaluateStatement,
  type FunctionCall,
  type QueryDocument,
  type VarExpression,
} from './generated/ast.js'
import { lookupFunction } from './dax-functions.js'
import { nameKey } from './dax-scope.js'

export class DaxValidator {
  /**
   * An unknown function is a warning, not an error: the catalogue is
   * Microsoft's reference, and an engine may know a function it does not
   * list. A wrong argument count is an error, with the engine's message.
   */
  checkFunctionCall(call: FunctionCall, accept: ValidationAcceptor): void {
    const entry = lookupFunction(call.name)
    if (!entry) {
      accept(
        'warning',
        `'${call.name}' is not a function in the DAX reference.`,
        {
          node: call,
          property: 'name',
        },
      )
      return
    }
    const given = call.arguments.length
    if (given < entry.minArgs) {
      accept(
        'error',
        `Too few arguments were passed to the ${entry.name} function. The minimum argument count for the function is ${entry.minArgs}.`,
        { node: call, property: 'name' },
      )
    } else if (entry.maxArgs !== undefined && given > entry.maxArgs) {
      accept(
        'error',
        `Too many arguments were passed to the ${entry.name} function. The maximum argument count for the function is ${entry.maxArgs}.`,
        { node: call, property: 'name' },
      )
    }
  }

  /** `VAR a = 1 VAR a = 2 RETURN a` - one block cannot declare a name twice. */
  checkVariablesAreUnique(
    block: VarExpression,
    accept: ValidationAcceptor,
  ): void {
    const seen = new Set<string>()
    for (const variable of block.variables) {
      if (!variable.name) continue
      const key = nameKey(variable.name)
      if (seen.has(key)) {
        accept(
          'error',
          `The variable '${variable.name}' is already declared in this block.`,
          {
            node: variable,
            property: 'name',
          },
        )
      }
      seen.add(key)
    }
  }

  /**
   * One DEFINE clause declares each measure, column, table, variable and
   * parameter once. A measure and a column are told apart by their table:
   * `'A'[x]` and `'B'[x]` are two names.
   */
  checkDefinitionsAreUnique(
    query: QueryDocument,
    accept: ValidationAcceptor,
  ): void {
    const seen = new Set<string>()
    for (const definition of query.definitions) {
      if (!definition.name) continue
      const key = definitionKey(definition)
      if (seen.has(key)) {
        accept(
          'error',
          `${definitionLabel(definition)} is already defined in this query.`,
          {
            node: definition,
            property: 'name',
          },
        )
      }
      seen.add(key)
    }
  }

  /**
   * START AT gives a starting value for the ORDER BY columns, in order.
   * Fewer values than columns is allowed, more is not.
   *
   * DIVERGENCE: the reference parser demands exactly one value per column
   * and throws otherwise. Microsoft documents the looser rule (START AT:
   * "There can be as many arguments in the START AT statement as there are
   * in the ORDER BY statement, but not more.").
   */
  checkStartAt(statement: EvaluateStatement, accept: ValidationAcceptor): void {
    if (statement.startAt.length === 0) return
    // `START AT (1, "x")`, the reference parser's form, arrives as one row.
    const only =
      statement.startAt.length === 1 ? statement.startAt[0] : undefined
    const values =
      only && isRowExpression(only)
        ? only.values.length
        : statement.startAt.length
    if (values > statement.orderBy.length) {
      accept(
        'error',
        `START AT has ${values} values but ORDER BY has ${statement.orderBy.length} ${statement.orderBy.length === 1 ? 'column' : 'columns'}; it may have fewer, not more.`,
        { node: statement, property: 'startAt' },
      )
    }
  }
}

function definitionKey(definition: Definition): string {
  if (isMeasureDefinition(definition) || isColumnDefinition(definition)) {
    return `column:${nameKey(definition.table)}:${nameKey(definition.name)}`
  }
  if (isTableDefinition(definition)) return `table:${nameKey(definition.name)}`
  if (isVariableDefinition(definition)) return `var:${nameKey(definition.name)}`
  if (isParameterDefinition(definition))
    return `param:${nameKey(definition.name)}`
  return 'unknown'
}

function definitionLabel(definition: Definition): string {
  if (isMeasureDefinition(definition) || isColumnDefinition(definition)) {
    return `'${definition.table}'[${definition.name}]`
  }
  if (isParameterDefinition(definition)) return `@${definition.name}`
  return definition.name
}

export function registerValidationChecks(services: {
  validation: {
    ValidationRegistry: {
      register(checks: ValidationChecks<DaxAstType>, thisObj: unknown): void
    }
  }
}): void {
  const validator = new DaxValidator()
  const checks: ValidationChecks<DaxAstType> = {
    FunctionCall: validator.checkFunctionCall,
    VarExpression: validator.checkVariablesAreUnique,
    QueryDocument: validator.checkDefinitionsAreUnique,
    EvaluateStatement: validator.checkStartAt,
  }
  services.validation.ValidationRegistry.register(checks, validator)
}
