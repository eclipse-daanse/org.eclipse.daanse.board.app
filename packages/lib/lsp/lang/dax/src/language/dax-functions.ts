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
 * The DAX functions Microsoft documents, looked up by name.
 *
 * The list itself is generated - scripts/refresh-functions.mjs reads it off
 * the DAX reference - so nothing here is typed from the documentation by
 * hand. This file only gives it a shape and an index.
 */
import { DAX_FUNCTION_LIST } from './generated-functions/functions.js'

export type DaxFunctionCategory =
  | 'aggregation'
  | 'datetime'
  | 'filter'
  | 'financial'
  | 'info'
  | 'information'
  | 'logical'
  | 'math'
  | 'other'
  | 'parentchild'
  | 'relationship'
  | 'statistical'
  | 'table'
  | 'text'
  | 'timeintelligence'

export interface DaxFunction {
  /** Upper-cased, as DAX names are case-insensitive: `PERCENTILE.INC`. */
  readonly name: string
  readonly category: DaxFunctionCategory
  readonly minArgs: number
  /** Absent when the syntax repeats an argument (`[, <filter>]…`). */
  readonly maxArgs?: number
  /** Every syntax line the reference gives; several for an overload. */
  readonly syntax: readonly string[]
  /** The sentence the reference page opens with. */
  readonly summary: string
  /** The page under https://learn.microsoft.com/en-us/dax/. */
  readonly href: string
  /** Whether the Eclipse Daanse engine can execute it. */
  readonly daanse?: boolean
}

const BY_NAME = new Map(DAX_FUNCTION_LIST.map(entry => [entry.name, entry]))

export function lookupFunction(name: string): DaxFunction | undefined {
  return BY_NAME.get(name.toUpperCase())
}

export function allFunctions(): readonly DaxFunction[] {
  return DAX_FUNCTION_LIST
}

export function referenceUrl(entry: DaxFunction): string {
  return `https://learn.microsoft.com/en-us/dax/${entry.href}`
}

/** "no arguments", "1 arg", "2–3 args", "1+ args". */
export function arityLabel(entry: DaxFunction): string {
  const { minArgs, maxArgs } = entry
  if (maxArgs === 0) return 'no arguments'
  if (maxArgs === undefined) return `${minArgs}+ args`
  if (minArgs === maxArgs) return minArgs === 1 ? '1 arg' : `${minArgs} args`
  return `${minArgs}–${maxArgs} args`
}
