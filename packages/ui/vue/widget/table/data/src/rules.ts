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

/*
 * The table's own rules (#1265): which rows are shown, and which colour a
 * cell gets. The rules are modelled (DataTableColorRule, DataTableFilterRule);
 * a stored board hands them over as plain objects and the settings dialog
 * as modelled ones, so they are read here by their feature names.
 */

import {
  DataTableCondition,
  getDataTableCondition,
  getDataTableConditionByLiteral,
} from './gen/DataTableCondition'
import { DataTableColorTarget, getDataTableColorTarget, getDataTableColorTargetByLiteral } from './gen/DataTableColorTarget'
import { DataTableFilterMatch, getDataTableFilterMatch, getDataTableFilterMatchByLiteral } from './gen/DataTableFilterMatch'

export type Row = Record<string, unknown>

/** A rule as far as matching reads it. */
export interface RuleLike {
  column?: string
  condition?: string
  value?: string
  valueTo?: string
}

export interface ColorRuleLike extends RuleLike {
  color?: string
  textColor?: string
  target?: string
}

/** The colour of a cell: its background and, where it can be said, its text. */
export interface CellColor {
  background: string
  text?: string
}

/** A list as a stored board holds it (an array) or a live one (an EList). */
export const listOf = <T>(held: unknown): T[] =>
  held && typeof held !== 'string' && typeof (held as any)[Symbol.iterator] === 'function'
    ? Array.from(held as Iterable<T>)
    : []

/* The model holds the name (EQUALS); a hand-written board may hold the literal (equals). */
export const conditionOf = (held: unknown): DataTableCondition =>
  getDataTableConditionByLiteral(String(held ?? '')) ??
  getDataTableCondition(String(held ?? '')) ??
  DataTableCondition.EQUALS

export const targetOf = (held: unknown): DataTableColorTarget =>
  getDataTableColorTargetByLiteral(String(held ?? '')) ??
  getDataTableColorTarget(String(held ?? '')) ??
  DataTableColorTarget.CELL

export const matchOf = (held: unknown): DataTableFilterMatch =>
  getDataTableFilterMatchByLiteral(String(held ?? '')) ??
  getDataTableFilterMatch(String(held ?? '')) ??
  DataTableFilterMatch.ALL

const isEmpty = (value: unknown) => value === undefined || value === null || String(value).trim() === ''

const asNumber = (value: unknown): number | undefined => {
  if (isEmpty(value) || typeof value === 'boolean') return undefined
  const number = Number(value)
  return Number.isFinite(number) ? number : undefined
}

/* Numbers by size where both are numbers, everything else as text. */
const compare = (left: unknown, right: unknown): number => {
  const [a, b] = [asNumber(left), asNumber(right)]
  if (a !== undefined && b !== undefined) return a - b
  return String(left ?? '').localeCompare(String(right ?? ''), undefined, { numeric: true })
}

/**
 * Whether a row meets a rule. `resolve` puts the current values of
 * variables into the rule's values ({name}).
 */
export function matches(rule: RuleLike, row: Row, resolve: (text: string) => string = (t) => t): boolean {
  const column = String(rule.column ?? '')
  if (!column) return false
  const cell = row[column]
  const value = resolve(String(rule.value ?? ''))
  switch (conditionOf(rule.condition)) {
    case DataTableCondition.EMPTY:
      return isEmpty(cell)
    case DataTableCondition.NOT_EQUALS:
      return isEmpty(cell) || compare(cell, value) !== 0
    case DataTableCondition.CONTAINS:
      return !isEmpty(cell) && String(cell).toLocaleLowerCase().includes(value.toLocaleLowerCase())
    case DataTableCondition.GREATER_THAN:
      return !isEmpty(cell) && compare(cell, value) > 0
    case DataTableCondition.LESS_THAN:
      return !isEmpty(cell) && compare(cell, value) < 0
    case DataTableCondition.BETWEEN: {
      const to = resolve(String(rule.valueTo ?? ''))
      return !isEmpty(cell) && compare(cell, value) >= 0 && compare(cell, to) <= 0
    }
    default:
      return !isEmpty(cell) && compare(cell, value) === 0
  }
}

/**
 * The rows the filter rules let through, in their order. A rule without a
 * column says nothing and is left out; without any rule every row passes.
 */
export function filterRows(rows: Row[], rules: unknown, match: unknown, resolve?: (text: string) => string): Row[] {
  const active = listOf<RuleLike>(rules).filter((rule) => !!String(rule?.column ?? ''))
  if (!active.length) return rows
  const any = matchOf(match) === DataTableFilterMatch.ANY
  return rows.filter((row) =>
    any ? active.some((rule) => matches(rule, row, resolve)) : active.every((rule) => matches(rule, row, resolve)),
  )
}

/* Dark text on a light colour, light text on a dark one; a colour that is
  not written in hex keeps the table's text colour. */
export const textOn = (color: string): string | undefined => {
  const hex = color.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)?.[1]
  if (!hex) return undefined
  const full = hex.length === 3 ? hex.replace(/./g, (c) => c + c) : hex
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16))
  return 0.299 * r + 0.587 * g + 0.114 * b > 150 ? '#1a1a1a' : '#ffffff'
}

/**
 * The colour of one cell: the first colour rule that paints it - a cell
 * rule on its column, or a row rule - and otherwise the colour the source
 * sent with its value. The table's rules win over the source.
 */
export function cellColor(
  row: Row,
  column: string,
  rules: unknown,
  sourceColors: Record<string, Record<string, string>> | undefined,
  resolve?: (text: string) => string,
): CellColor | undefined {
  for (const rule of listOf<ColorRuleLike>(rules)) {
    const background = String(rule?.color ?? '').trim()
    if (!background) continue
    if (targetOf(rule.target) === DataTableColorTarget.CELL && rule.column !== column) continue
    if (!matches(rule, row, resolve)) continue
    const text = String(rule.textColor ?? '').trim() || textOn(background)
    return text ? { background, text } : { background }
  }
  const value = row[column]
  if (value === undefined || value === null) return undefined
  const background = sourceColors?.[column]?.[String(value)]
  if (!background) return undefined
  const text = textOn(background)
  return text ? { background, text } : { background }
}

/** Every value of the rules, for the variables they name. */
export function ruleTexts(...ruleLists: unknown[]): string[] {
  return ruleLists.flatMap((rules) =>
    listOf<RuleLike>(rules).flatMap((rule) => [String(rule?.value ?? ''), String(rule?.valueTo ?? '')]),
  )
}
