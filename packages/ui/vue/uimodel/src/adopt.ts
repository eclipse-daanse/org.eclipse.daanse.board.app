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
 * Turning a stored settings object back into a modelled one.
 *
 * A board arrives from storage as parsed JSON: the right fields with the
 * right values, but a plain object. The UI model composer renders from the
 * model - it asks an object for its eClass and walks its structural
 * features - so a plain object is invisible to it.
 *
 * This puts the values into an instance the factory made, rather than
 * casting or wrapping. What comes back is a real EObject with the class it
 * claims to have, and the values that were stored.
 */
import type { EObject } from '@emfts/core'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'

/** The class every settings value goes through. */
const WRAPPER_CLASS = 'VariableWrapper'

/** An object that can say what it is - what the composer needs. */
export function isModelled(value: unknown): value is EObject {
  return typeof (value as EObject | undefined)?.eClass === 'function'
}

/**
 * Copies stored values into a fresh instance from the factory.
 *
 * Only features the class actually declares are taken over: a stored state
 * written by an older version may carry fields the model has since dropped,
 * and those are left behind rather than smuggled in as stray properties.
 *
 * Values are assigned through the plain setters, which is what makes this
 * work at all - the generated classes keep them, so a VariableWrapper that
 * came out of storage lands in the field it belongs to, unchanged.
 */
export function adopt<T extends EObject>(instance: T, stored: unknown): T {
  if (!stored || typeof stored !== 'object') return instance

  const source = stored as Record<string, unknown>
  const target = instance as unknown as Record<string, unknown>

  for (const feature of instance.eClass().getEStructuralFeatures()) {
    const name = feature.getName?.()
    if (!name || !(name in source)) continue
    try {
      target[name] = source[name]
    } catch {
      // A derived or read-only feature cannot be restored, and was never
      // stored as a value in the first place
    }
  }

  return instance
}

/**
 * Gives every wrapper-typed field a wrapper.
 *
 * The generator only initialises the features that carry a default, so a
 * fresh instance has undefined where a value could go - and a field with
 * no wrapper cannot be edited, or even shown. An empty field is a field
 * with an empty value, so it gets one.
 *
 * The hand-written class, not the generated one: the widgets bind through
 * setTo() and read .value, which is behaviour the metamodel does not
 * describe and the generated class therefore does not have.
 */
export function ensureWrappers<T extends EObject>(instance: T): T {
  const target = instance as unknown as Record<string, unknown>

  for (const feature of instance.eClass().getEStructuralFeatures()) {
    const name = feature.getName?.()
    if (!name || target[name] !== undefined) continue

    let typeName: string | undefined
    try {
      typeName = (feature as any).getEReferenceType?.()?.getName?.()
    } catch {
      // Untyped or not a reference - nothing to build
      continue
    }
    if (typeName !== WRAPPER_CLASS) continue

    try {
      target[name] = new VariableWrapper()
    } catch {
      // A read-only feature cannot hold one either
    }
  }

  return instance
}

/**
 * The settings for one widget, as a modelled object.
 *
 * Already-modelled input is handed back untouched: adopting it again would
 * replace the very instance the form is bound to, and every edit made so
 * far would go to an object nothing points at any more.
 */
export function asModel<T extends EObject>(stored: unknown, create: () => T): T {
  return ensureWrappers(isModelled(stored) ? (stored as T) : adopt(create(), stored))
}
