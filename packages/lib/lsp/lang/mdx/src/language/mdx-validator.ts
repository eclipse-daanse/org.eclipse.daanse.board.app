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

import type { ValidationAcceptor, ValidationChecks } from 'langium'
import type {
  AxisClause,
  CellPropertyList,
  CreateStatement,
  Expression,
  FunctionCall,
  MdxAstType,
  PropertyAssignment,
  SelectStatement,
  WithMember,
  WithSet,
} from './generated/ast.js'
import {
  isNameReference,
  isNumberLiteral,
  isSetExpression,
  isStringLiteral,
  isUnaryExpression,
} from './generated/ast.js'
import {
  CALCULATED_MEMBER_PROPERTIES,
  CELL_PROPERTIES,
  DEPRECATED_MEMBER_PROPERTIES,
  lookupFunction,
} from './mdx-functions.js'
import { argumentSlotCount } from './mdx-call-slots.js'
import { identifierBody, splitMemberPath } from './mdx-member-path.js'

const MAX_AXIS = 127

const MAX_IDENTIFIER_LENGTH = 100

const MIN_SOLVE_ORDER = -8181
const MAX_SOLVE_ORDER = 65535

const RESERVED_KEYWORDS = new Set([
  'ABSOLUTE',
  'ADDCALCULATEDMEMBERS',
  'AFTER',
  'AGGREGATE',
  'ALL',
  'AND',
  'AS',
  'ASC',
  'AXIS',
  'BASC',
  'BDESC',
  'BEFORE',
  'BEFORE_AND_AFTER',
  'BOTTOMCOUNT',
  'BOTTOMPERCENT',
  'BOTTOMSUM',
  'BY',
  'CALCULATE',
  'CALCULATED',
  'CALCULATION',
  'CALL',
  'CAPTION',
  'CASE',
  'CAST',
  'CELL',
  'CHAPTERS',
  'CHILDREN',
  'CLOSINGPERIOD',
  'COLUMNS',
  'COUSIN',
  'CREATE',
  'CUBE',
  'CURRENTCUBE',
  'CURRENTMEMBER',
  'DESC',
  'DESCENDANTS',
  'DIMENSION',
  'DISTINCT',
  'DRILLDOWNLEVEL',
  'DRILLTHROUGH',
  'DROP',
  'ELSE',
  'EMPTY',
  'END',
  'EXISTING',
  'EXPLAIN',
  'FILTER',
  'FIRSTROWSET',
  'FREEZE',
  'FROM',
  'GLOBAL',
  'HIDDEN',
  'HIERARCHY',
  'IS',
  'LEAVES',
  'LEVEL',
  'MAXROWS',
  'MEASURE',
  'MEMBER',
  'MEMBERS',
  'NON',
  'NOT',
  'NULL',
  'ON',
  'OR',
  'ORDER',
  'PAGES',
  'PARENT',
  'PLAN',
  'PROPERTIES',
  'RECURSIVE',
  'REFRESH',
  'RETURN',
  'ROWS',
  'SCOPE',
  'SECTIONS',
  'SELECT',
  'SELF',
  'SELF_AND_AFTER',
  'SELF_AND_BEFORE',
  'SELF_BEFORE_AFTER',
  'SESSION',
  'SET',
  'SOLVE_ORDER',
  'SUBCUBE',
  'THEN',
  'THIS',
  'TYPED',
  'UNION',
  'UPDATE',
  'USE_EQUAL_ALLOCATION',
  'USE_EQUAL_INCREMENT',
  'USE_WEIGHTED_ALLOCATION',
  'USE_WEIGHTED_INCREMENT',
  'VISUAL',
  'VISUALTOTALS',
  'WHEN',
  'WHERE',
  'WITH',
  'XOR',
])

export function registerValidationChecks(services: {
  validation: {
    ValidationRegistry: {
      register(checks: ValidationChecks<MdxAstType>, thisObj: unknown): void
    }
  }
}): void {
  const validator = new MdxValidator()
  const checks: ValidationChecks<MdxAstType> = {
    SelectStatement: [
      validator.checkAxisOrdinals,
      validator.checkSlicerIsNotASet,
    ],
    AxisClause: validator.checkAxisTargetIsInteger,
    CellPropertyList: validator.checkCellProperties,
    CreateStatement: [
      validator.checkCreateTargetsCurrentCube,
      validator.checkDeclarationName,
    ],
    WithMember: validator.checkDeclarationName,
    WithSet: validator.checkDeclarationName,
    PropertyAssignment: [
      validator.checkKnownProperty,
      validator.checkSolveOrder,
      validator.checkScopeIsolation,
    ],
    FunctionCall: validator.checkFunctionCall,
  }
  services.validation.ValidationRegistry.register(checks, validator)
}

export class MdxValidator {
  checkAxisOrdinals = (
    select: SelectStatement,
    accept: ValidationAcceptor,
  ): void => {
    const seen = new Map<number, AxisClause>()
    select.axes.forEach((axis, index) => {
      const ordinal = axisOrdinal(axis, index)
      if (ordinal === undefined) {
        return
      }
      if (ordinal > MAX_AXIS || ordinal < 0) {
        accept(
          'error',
          `Axis ordinal must be between 0 and ${MAX_AXIS}, but was ${ordinal}.`,
          {
            node: axis,
            property: 'target',
          },
        )
        return
      }
      if (seen.has(ordinal)) {
        accept('error', `Axis ${ordinal} is specified more than once.`, {
          node: axis,
          property: 'target',
        })
      }
      seen.set(ordinal, axis)
    })

    // Gaps are only detectable when every ordinal is statically known.
    if (seen.size === select.axes.length && seen.size > 0) {
      const ordinals = [...seen.keys()].sort((a, b) => a - b)
      for (let expected = 0; expected < ordinals.length; expected++) {
        if (ordinals[expected] !== expected) {
          accept(
            'error',
            `Axis ${expected} is missing. Axes must be specified contiguously starting at 0.`,
            { node: seen.get(ordinals[expected])!, property: 'target' },
          )
          break
        }
      }
    }
  }

  checkAxisTargetIsInteger = (
    axis: AxisClause,
    accept: ValidationAcceptor,
  ): void => {
    const target = axis.target
    if (
      !target ||
      (target.$type !== 'OrdinalAxis' && target.$type !== 'AxisFunction')
    ) {
      return
    }
    const value = constantNumber(target.ordinal)
    if (value !== undefined && !Number.isInteger(value)) {
      accept('error', `Axis ordinal must be an integer, but was ${value}.`, {
        node: axis,
        property: 'target',
      })
    }
  }

  /**
   * The slicer fixes coordinates; passing a multi-member set silently
   * aggregates it, which is rarely what the author meant.
   */
  checkSlicerIsNotASet = (
    select: SelectStatement,
    accept: ValidationAcceptor,
  ): void => {
    const slicer = select.slicer
    if (slicer && isSetExpression(slicer) && slicer.items.length > 1) {
      accept(
        'warning',
        'The WHERE slicer fixes a coordinate. A set with more than one member is aggregated implicitly; wrap it in Aggregate() to make that explicit.',
        { node: select, property: 'slicer' },
      )
    }
  }

  checkCellProperties = (
    list: CellPropertyList,
    accept: ValidationAcceptor,
  ): void => {
    list.properties.forEach((property, index) => {
      if (!CELL_PROPERTIES.has((property ?? '').toUpperCase())) {
        accept('warning', `Unknown cell property '${property}'.`, {
          node: list,
          property: 'properties',
          index,
        })
      }
    })
  }

  checkCreateTargetsCurrentCube = (
    statement: CreateStatement,
    accept: ValidationAcceptor,
  ): void => {
    const name = statement.name
    if (!name || statement.kind !== 'MEMBER') {
      return
    }
    const segments = splitMemberPath(name)
    // A bare name (`Measures.Foo`) is created in the current cube implicitly.
    if (segments.length < 3) {
      return
    }
    const first = segments[0].toUpperCase()
    if (first !== 'CURRENTCUBE' && first !== '[CURRENTCUBE]') {
      accept(
        'warning',
        `Specifying a cube other than the connected one causes an error at execution time. Use CURRENTCUBE instead of '${segments[0]}'.`,
        { node: statement, property: 'name' },
      )
    }
  }

  checkKnownProperty = (
    assignment: PropertyAssignment,
    accept: ValidationAcceptor,
  ): void => {
    const name = (assignment.name ?? '').toUpperCase()
    if (DEPRECATED_MEMBER_PROPERTIES.has(name)) {
      accept(
        'warning',
        `The '${assignment.name}' property is deprecated; avoid setting it.`,
        {
          node: assignment,
          property: 'name',
        },
      )
      return
    }
    if (!CALCULATED_MEMBER_PROPERTIES.has(name)) {
      accept(
        'warning',
        `Unknown calculated member property '${assignment.name}'.`,
        {
          node: assignment,
          property: 'name',
        },
      )
    }
  }

  checkSolveOrder = (
    assignment: PropertyAssignment,
    accept: ValidationAcceptor,
  ): void => {
    if ((assignment.name ?? '').toUpperCase() !== 'SOLVE_ORDER') {
      return
    }
    const value = constantNumber(assignment.value)
    if (value === undefined) {
      return
    }
    if (value < MIN_SOLVE_ORDER || value > MAX_SOLVE_ORDER) {
      accept(
        'error',
        `SOLVE_ORDER must be between ${MIN_SOLVE_ORDER} and ${MAX_SOLVE_ORDER}, but was ${value}.`,
        { node: assignment, property: 'value' },
      )
    } else if (value < 0) {
      accept(
        'warning',
        'Negative solve orders are reserved for system algorithms such as Custom Rollup. Use a positive integer.',
        { node: assignment, property: 'value' },
      )
    } else if (!Number.isInteger(value)) {
      accept('error', `SOLVE_ORDER must be an integer, but was ${value}.`, {
        node: assignment,
        property: 'value',
      })
    }
  }

  checkScopeIsolation = (
    assignment: PropertyAssignment,
    accept: ValidationAcceptor,
  ): void => {
    if ((assignment.name ?? '').toUpperCase() !== 'SCOPE_ISOLATION') {
      return
    }
    const value = assignment.value
    const literal = isNameReference(value)
      ? value.member.$refText
      : isStringLiteral(value)
        ? unquote(value.value)
        : undefined
    if (literal?.toUpperCase() !== 'CUBE') {
      accept('error', 'SCOPE_ISOLATION accepts only the value CUBE.', {
        node: assignment,
        property: 'value',
      })
    }
  }

  checkFunctionCall = (
    call: FunctionCall,
    accept: ValidationAcceptor,
  ): void => {
    if (!call.name) {
      return
    }
    const signature = lookupFunction(call.name)
    if (!signature) {
      accept('warning', `Unknown MDX function '${call.name}'.`, {
        node: call,
        property: 'name',
      })
      return
    }
    const count = argumentSlotCount(call)
    if (count < signature.minArgs) {
      accept(
        'error',
        `'${call.name}' expects at least ${signature.minArgs} argument(s), but got ${count}.`,
        { node: call, property: 'name' },
      )
    } else if (signature.maxArgs !== undefined && count > signature.maxArgs) {
      accept(
        'error',
        `'${call.name}' expects at most ${signature.maxArgs} argument(s), but got ${count}.`,
        { node: call, property: 'name' },
      )
    }
    if (signature.discouraged) {
      accept('warning', signature.discouraged, { node: call, property: 'name' })
    }
  }

  checkDeclarationName = (
    node: WithMember | WithSet | CreateStatement,
    accept: ValidationAcceptor,
  ): void => {
    const name = node.name
    if (!name) {
      return
    }
    const segments = splitMemberPath(name)
    for (const [index, segment] of segments.entries()) {
      const delimited = segment.startsWith('[')
      const body = identifierBody(segment)
      // A leading CURRENTCUBE is the required spelling, not a misuse of a
      // reserved word.
      if (index === 0 && !delimited && body.toUpperCase() === 'CURRENTCUBE') {
        continue
      }
      if (body.length === 0 || body.length > MAX_IDENTIFIER_LENGTH) {
        accept(
          'error',
          `Identifier '${segment}' must contain from 1 through ${MAX_IDENTIFIER_LENGTH} characters.`,
          { node, property: 'name' },
        )
      } else if (!delimited && RESERVED_KEYWORDS.has(body.toUpperCase())) {
        accept(
          'warning',
          `'${segment}' is a reserved keyword. Delimit it as [${body}] to use it as an object name.`,
          { node, property: 'name' },
        )
      }
    }
  }
}

function axisOrdinal(axis: AxisClause, _position: number): number | undefined {
  const target = axis.target
  if (!target) {
    return undefined
  }
  switch (target.$type) {
    case 'NamedAxis':
      return ['COLUMNS', 'ROWS', 'PAGES', 'SECTIONS', 'CHAPTERS'].indexOf(
        (target.name ?? '').toUpperCase(),
      )
    case 'AxisFunction':
    case 'OrdinalAxis':
      return constantNumber(target.ordinal)
    default:
      return undefined
  }
}

function constantNumber(
  expression: Expression | undefined,
): number | undefined {
  if (!expression) {
    return undefined
  }
  if (isNumberLiteral(expression)) {
    return expression.value
  }
  if (
    isUnaryExpression(expression) &&
    (expression.operator === '-' || expression.operator === '+')
  ) {
    const inner = constantNumber(expression.operand)
    return inner === undefined
      ? undefined
      : expression.operator === '-'
        ? -inner
        : inner
  }
  return undefined
}

function unquote(value: string): string {
  if (value.length >= 2 && (value[0] === "'" || value[0] === '"')) {
    return value.slice(1, -1)
  }
  return value
}
