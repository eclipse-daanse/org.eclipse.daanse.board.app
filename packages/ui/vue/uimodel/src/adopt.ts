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

/** What one calls itself once it has been serialised. */
const WRAPPER_TYPE = 'VARIABLEWRAPPER'

/** An object that can say what it is - what the composer needs. */
export function isModelled(value: unknown): value is EObject {
  return typeof (value as EObject | undefined)?.eClass === 'function'
}

/*
 * What a generated instance keeps for EMF rather than for the widget.
 *
 * These are written out with everything else when a workspace is stored,
 * and they mean nothing on the way back: the resource, container and
 * adapters belong to the instance that was serialised, not to this one.
 */
const BOOKKEEPING = new Set([
  '_eResource',
  '_eContainer',
  '_eContainerFeature',
  '_eProxyURI',
  '_eAdapters',
  '_eDeliver',
  'eSettings',
])

/**
 * The feature a stored key stands for, or nothing if it stands for none.
 *
 * A settings object that has been through storage comes back the way it
 * was serialised: a generated class keeps its values in _-prefixed fields
 * behind the setters, and those are what get written out. Reading the
 * plain name off them puts each value back through the setter it came
 * from.
 */
function featureFor(name: string): string | undefined {
  if (BOOKKEEPING.has(name)) return undefined
  return name.startsWith('_') ? name.slice(1) : name
}

/**
 * A wrapper that has been through storage, rebuilt.
 *
 * Serialising one writes its private _value out alongside its type, so what
 * comes back is a plain object that looks like a wrapper and behaves like
 * nothing. Wrapping it again would put that whole object where the value
 * belongs, and the widget would render "[object Object]".
 */
function asWrapper(value: unknown): VariableWrapper<unknown> | undefined {
  if (!value || typeof value !== 'object') return undefined
  const held = value as Record<string, unknown>
  if (held.type !== WRAPPER_TYPE) return undefined

  const rebuilt = new VariableWrapper(held._value)
  if (typeof held.variable === 'string') rebuilt.variable = held.variable
  return rebuilt
}

/**
 * Copies a stored settings object into a fresh instance from the factory.
 *
 * Everything is carried over, not just what the model declares. A widget's
 * settings hold more than the form shows - which data source it reads,
 * state a widget keeps for itself - and the class describes what can be
 * edited, not everything the object is. Dropping the rest silently cut the
 * widget off from its data.
 *
 * Values are assigned through the plain setters, which is what makes this
 * work at all - the generated classes keep them, so a VariableWrapper that
 * came out of storage lands in the field it belongs to, unchanged.
 */
export function adopt<T extends EObject>(instance: T, stored: unknown): T {
  if (!stored || typeof stored !== 'object') return instance

  const source = stored as Record<string, unknown>
  const target = instance as unknown as Record<string, unknown>

  for (const [stored, value] of Object.entries(source)) {
    const name = featureFor(stored)
    if (!name) continue
    /* A plain key wins over the _-prefixed one for the same feature */
    if (stored.startsWith('_') && name in source) continue
    try {
      target[name] = asWrapper(value) ?? value
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
    if (!name) continue

    let typeName: string | undefined
    try {
      typeName = (feature as any).getEReferenceType?.()?.getName?.()
    } catch {
      // Untyped or not a reference - nothing to build
      continue
    }
    if (typeName !== WRAPPER_CLASS) continue

    const held = target[name]
    if (held instanceof VariableWrapper) continue

    try {
      /*
       * A board saved before this field became a wrapper holds the plain
       * value, and adopt copies it across as it stands. Leaving it there
       * would give the widget a string where it reads .value, so the value
       * is kept and moved inside a wrapper rather than dropped.
       */
      target[name] = new VariableWrapper(held)
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
