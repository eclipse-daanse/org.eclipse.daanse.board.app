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
 * A pivot table's settings as its model, whatever shape they were stored in.
 *
 * A board puts a widget's settings into Widget.config as they come out of
 * storage: parsed JSON, the right values in a plain object. The settings
 * component writes into that object, and nothing sees it - a plain object
 * has no notifications, and Widget.config is an attribute, so the board's
 * adapter does not look inside it either. A view chosen in the settings
 * reached the widget only when it was mounted again.
 *
 * A PivotTableImpl announces every feature that is set. Holding one, the
 * settings, the preview and the widget on the board follow the same object
 * through EMF, the way every other setting reaches a widget.
 */
import { VariableWrapper } from 'org.eclipse.daanse.board.app.lib.variables'
import type { PivotTable } from './gen/PivotTable'
import { PivotTableImpl } from './gen/PivotTableImpl'
import { LevelStyleImpl } from './gen/LevelStyleImpl'
import { ConditionalFormatImpl } from './gen/ConditionalFormatImpl'

/** What a generated instance keeps for EMF; meaningless once stored. */
const BOOKKEEPING = new Set([
  '_eResource',
  '_eContainer',
  '_eContainerFeature',
  '_eProxyURI',
  '_eAdapters',
  '_eDeliver',
  'eSettings',
])

/** What a stored wrapper calls itself. */
const WRAPPER_TYPE = 'VARIABLEWRAPPER'

/** The classes the settings' lists hold, by list. */
const ENTRIES: Record<string, () => object> = {
  rowLevelStyles: () => new LevelStyleImpl(),
  columnLevelStyles: () => new LevelStyleImpl(),
  conditionalFormats: () => new ConditionalFormatImpl(),
}

export function isModelled(value: unknown): boolean {
  return typeof (value as { eClass?: unknown } | undefined)?.eClass === 'function'
}

interface ListLike {
  add(entry: unknown): unknown
  clear(): void
}

const isList = (value: unknown): value is ListLike =>
  typeof (value as ListLike | undefined)?.add === 'function' &&
  typeof (value as ListLike | undefined)?.clear === 'function'

/**
 * A stored value as the feature it goes into takes it.
 *
 * A wrapper the variable factory could not restore - one that was empty -
 * arrives as the plain object it was written as, and a board from before a
 * setting became a wrapper carries the bare value; both become a wrapper,
 * or the settings would have nothing to bind and the widget nothing to read.
 */
function asFeatureValue(current: unknown, value: unknown): unknown {
  if (!(current instanceof VariableWrapper) || value instanceof VariableWrapper) return value
  if (value && typeof value === 'object') {
    const held = value as Record<string, unknown>
    if (held.type !== WRAPPER_TYPE) return value
    const rebuilt = new VariableWrapper(held._value ?? held.value)
    if (typeof held.variable === 'string') rebuilt.variable = held.variable
    return rebuilt
  }
  return new VariableWrapper(value)
}

/** Copies stored values onto a modelled instance, feature by feature. */
function fill<T extends object>(target: T, stored: unknown): T {
  if (!stored || typeof stored !== 'object') return target
  const source = stored as Record<string, unknown>
  const into = target as unknown as Record<string, unknown>

  for (const [key, value] of Object.entries(source)) {
    if (BOOKKEEPING.has(key)) continue
    // A generated instance written out by its fields keeps them behind "_".
    const name = key.startsWith('_') ? key.slice(1) : key
    if (key.startsWith('_') && name in source) continue

    const current = into[name]
    if (isList(current)) {
      // A list feature has a getter only: its entries go into the list it has.
      const entries = typeof (value as { toArray?: () => unknown[] })?.toArray === 'function'
        ? (value as { toArray: () => unknown[] }).toArray()
        : Array.isArray(value) ? value : []
      const make = ENTRIES[name]
      if (!make) continue
      for (const entry of entries) {
        try {
          current.add(isModelled(entry) ? entry : fill(make(), entry))
        } catch {
          // An entry the list refuses was not one of its own
        }
      }
      continue
    }
    try {
      into[name] = asFeatureValue(current, value)
    } catch {
      // A derived or read-only feature was never a stored value
    }
  }
  return target
}

/**
 * The settings as a PivotTable instance: handed back as they are when they
 * already are one, else a new instance with every stored value in it.
 *
 * Everything stored is carried over, the model's features and what lies
 * beside them - an old board's datasourceId - alike.
 */
export function modelledSettings(stored: unknown): PivotTable {
  if (isModelled(stored)) return stored as PivotTable
  return fill(new PivotTableImpl(), stored) as PivotTable
}
