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
 * What every control of this package does the same way: reading its
 * settings, writing its variable, sending its events and offering its
 * actions. Each control adds only what it shows and how it is operated.
 */
import { computed, inject, onMounted, onUnmounted, toRaw, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import { useEObject, VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import type { TinyEmitter } from 'tiny-emitter'
import {
  EVENT_ACTIONS_REGISTRY,
  type EventActionsRegistry,
  type WidgetActionInterfaceImpl,
} from 'org.eclipse.daanse.board.app.lib.api.events'
import type { ControlSettings } from '../gen/ControlSettings'
import { ControlPayloadImpl } from '../gen/ControlPayloadImpl'

/* The wrapped settings every control shares, with the value the model gives them. */
export const SHARED_WRAPPED: Record<string, string> = {
  label: '',
  color: '#2563eb',
  textColor: '#ffffff',
  fontSize: '14',
  disabled: 'false',
}

/*
 * A board stores a wrapper as plain JSON - an object with a `value` and no
 * methods - and one never set is missing. Both are made into wrappers here,
 * once, rather than guarded at every read.
 */
export function wrap(held: unknown, fallback: string): VariableWrapper<string> {
  if (held instanceof VariableWrapper) return held
  if (held && typeof held === 'object' && 'value' in (held as any)) {
    const made = new VariableWrapper((held as any).value)
    if ((held as any).variable) made.variable = (held as any).variable
    return made
  }
  return new VariableWrapper(held === undefined || held === null ? fallback : String(held))
}

/** What a wrapper - or a plain value standing where one belongs - holds, as it is. */
export function rawOf(slot: unknown): unknown {
  return slot && typeof slot === 'object' && 'value' in (slot as any) ? (slot as any).value : slot
}

/** The same, as text: empty where nothing is held. */
export function textOf(slot: unknown): string {
  const value = rawOf(slot)
  return value === undefined || value === null ? '' : String(value)
}

/** A number out of a wrapper, or the fallback where it holds none. */
export function numberOf(slot: unknown, fallback: number): number {
  const parsed = parseFloat(textOf(slot))
  return Number.isFinite(parsed) ? parsed : fallback
}

/** Whether two values a control writes are the same, whatever type the variable keeps them in. */
export function sameValue(a: unknown, b: unknown): boolean {
  if (Array.isArray(a) || Array.isArray(b)) return JSON.stringify(a) === JSON.stringify(b)
  return textOf(a) === textOf(b)
}

/** A list setting as an array, whether it is an EList or plain JSON. */
export function listOf<T = any>(list: unknown): T[] {
  if (!list) return []
  if (typeof (list as any).toArray === 'function') return (list as any).toArray()
  return Array.isArray(list) ? (list as T[]) : []
}

export interface ControlOptions<T extends ControlSettings> {
  /** The widget type, as events and actions are registered under it. */
  type: string
  /** The wrapped settings of this control beyond the shared ones. */
  wrapped: Record<string, string>
  /** Makes the settings where the board gave none. */
  create: () => T
  /** What the control can be told to do from elsewhere. */
  api: WidgetActionInterfaceImpl
}

export function useControl<T extends ControlSettings>(
  config: Ref<T>,
  widgetId: Ref<string | undefined> | undefined,
  options: ControlOptions<T>,
) {
  /*
   * The settings, watched rather than read off the model prop (#1203): a
   * replaced wrapper is an eSet on this instance, which only an adapter on
   * the instance itself hears. A value written into a wrapper reaches the
   * control through wrapperReactivity, a change in a contained list
   * through the adapter's descent.
   */
  const settings = useEObject<T>(() => config.value)

  const eventBus = inject<TinyEmitter>(identifiers.TINY_EMITTER)!
  const actionsRegistry = inject<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY)!
  const route = useRoute()
  const pageId = (route?.params?.pageid as string) || ''

  /** What a setting holds, whatever shape it arrived in. */
  const held = (key: string): string => textOf((settings.value as any)?.[key])
  const raw = (key: string): unknown => rawOf((settings.value as any)?.[key])

  const label = computed(() => held('label'))
  const color = computed(() => held('color') || SHARED_WRAPPED.color)
  const textColor = computed(() => held('textColor') || SHARED_WRAPPED.textColor)
  /* A bare number is pixels; anything else is taken as CSS says it. */
  const fontSize = computed(() => {
    const given = held('fontSize').trim() || SHARED_WRAPPED.fontSize
    return /^\d+(\.\d+)?$/.test(given) ? `${given}px` : given
  })
  const disabled = computed(() => held('disabled').trim().toLowerCase() === 'true')

  /*
   * Writes into a wrapper's own value, which is what an action is for.
   *
   * On the raw instance: whoever handed the settings in may have handed a
   * reactive proxy of them, and a write through it reaches the wrapper's
   * adapters as proxies too, which breaks them.
   */
  function put(key: string, value: unknown): void {
    const own = toRaw(config.value) as any
    const slot = toRaw(own?.[key])
    if (slot instanceof VariableWrapper) slot.value = value
    else own[key] = new VariableWrapper(value)
  }

  /** The variable a target wrapper follows, while it follows one. */
  function variableOf(key: string): { value: unknown } | undefined {
    const target = toRaw((config.value as any)?.[key])
    return target instanceof VariableWrapper ? target.reference : undefined
  }

  /** What the target holds now: the variable it follows, or its own value. */
  const current = (key = 'target'): unknown => raw(key)

  /*
   * Writes the control's value. Into the variable the target follows, not
   * into the wrapper - a value written into a bound wrapper by hand
   * releases its binding, and the control would write into itself. A
   * target that follows no variable keeps the value itself, so a control
   * without a variable still has a state to show.
   */
  function write(value: unknown, key = 'target'): void {
    const variable = variableOf(key)
    if (variable) variable.value = value
    else put(key, value)
  }

  /** Sends one of the control's events with the modelled payload. */
  function send(event: string, value: unknown, previousValue: unknown): void {
    if (!widgetId?.value) return
    const payload = new ControlPayloadImpl()
    payload.widgetId = widgetId.value
    payload.timestamp = Date.now()
    payload.value = value
    payload.previousValue = previousValue
    const type = `widget:${options.type}:${event}`
    eventBus.emit(type, { type, widgetId: widgetId.value, payload })
  }

  /*
   * What a user does: writes the value and says so with change - unless
   * the control is disabled, or the value is the one already there.
   */
  function operate(value: unknown, key = 'target'): boolean {
    if (disabled.value) return false
    const previousValue = current(key)
    if (sameValue(previousValue, value)) return false
    write(value, key)
    send('change', value, previousValue)
    return true
  }

  onMounted(() => {
    if (widgetId?.value) actionsRegistry.registerInstance(widgetId.value, options.api, options.type, pageId)
    if (!config.value) config.value = options.create()
    for (const [key, fallback] of Object.entries({ ...SHARED_WRAPPED, ...options.wrapped })) {
      ;(config.value as any)[key] = wrap((config.value as any)[key], fallback)
    }
  })

  onUnmounted(() => {
    if (widgetId?.value) actionsRegistry.unregisterInstance(widgetId.value)
  })

  return {
    settings,
    held,
    raw,
    label,
    color,
    textColor,
    fontSize,
    disabled,
    put,
    variableOf,
    current,
    write,
    send,
    operate,
  }
}
