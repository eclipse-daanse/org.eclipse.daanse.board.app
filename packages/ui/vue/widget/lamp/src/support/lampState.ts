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
 * What a lamp is, read out of whatever its settings and its datasource
 * hold - kept apart from the component so the reading can be tested
 * without mounting one.
 */
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'

/** The wrapped settings with the value the model gives them. */
export const WRAPPED: Record<string, string> = {
  on: 'false',
  brightness: '100',
  color: '',
  colorTemperature: '2700',
  radius: '',
  lightShape: 'round',
  direction: '90',
  angle: '60',
  lightsWidgets: 'false',
  stateField: '',
}

/** The state a lamp shows and sends. */
export interface LampState {
  on: boolean
  brightness: number
  /** As set; empty where the colour temperature decides. */
  color: string
  colorTemperature: number
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

/** What a wrapper - or a plain value standing where one belongs - holds, as text. */
export function textOf(slot: unknown): string {
  const value = slot && typeof slot === 'object' && 'value' in (slot as any) ? (slot as any).value : slot
  return value === undefined || value === null ? '' : String(value)
}

/** A number, or the fallback where the text holds none. */
export function numberOf(text: unknown, fallback: number): number {
  if (text === '' || text === null || text === undefined) return fallback
  const n = typeof text === 'number' ? text : parseFloat(String(text))
  return Number.isFinite(n) ? n : fallback
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

/**
 * Whether a value means on. A variable or a source may say it in words:
 * true, on, yes and 1 are on; false, off, no, 0 and nothing are off.
 * Anything else is undefined - it says nothing about on or off.
 */
export function switchOf(value: unknown): boolean | undefined {
  if (typeof value === 'boolean') return value
  if (typeof value === 'number') return value > 0
  const text = String(value ?? '').trim().toLowerCase()
  if (['true', 'on', 'yes', '1'].includes(text)) return true
  if (['false', 'off', 'no', '0', ''].includes(text)) return false
  return undefined
}

/**
 * What a datasource's value says about the lamp, merged over the state it
 * would otherwise have. A word switches it (the text 1 and 0 too); a
 * number is its brightness, and on while it is above 0; an object may
 * carry on, brightness, color and colorTemperature. What the value does
 * not say stays as it was.
 */
export function stateFromSource(value: unknown, base: LampState): LampState {
  if (value === undefined || value === null) return base
  if (typeof value === 'object' && !Array.isArray(value)) {
    const given = value as Record<string, unknown>
    const on = 'on' in given ? switchOf(given.on) : undefined
    return {
      on: on ?? base.on,
      brightness: 'brightness' in given ? clamp(numberOf(given.brightness, base.brightness), 0, 100) : base.brightness,
      color: typeof given.color === 'string' ? given.color : base.color,
      colorTemperature:
        'colorTemperature' in given ? numberOf(given.colorTemperature, base.colorTemperature) : base.colorTemperature,
    }
  }
  const brightness = (n: number): LampState => {
    const clamped = clamp(n, 0, 100)
    return { ...base, on: clamped > 0, brightness: clamped }
  }
  if (typeof value === 'number') return Number.isFinite(value) ? brightness(value) : base
  const on = switchOf(value)
  if (on !== undefined) return { ...base, on }
  const n = Number(String(value).trim())
  return Number.isFinite(n) ? brightness(n) : base
}

/**
 * The colour of a black body at a temperature in kelvin, as CSS - the
 * approximation by Tanner Helland, good enough for a lamp on a board.
 */
export function kelvinToColor(kelvin: number): string {
  const t = clamp(Number.isFinite(kelvin) ? kelvin : 2700, 1000, 40000) / 100
  const red = t <= 66 ? 255 : 329.698727446 * Math.pow(t - 60, -0.1332047592)
  const green = t <= 66 ? 99.4708025861 * Math.log(t) - 161.1195681661 : 288.1221695283 * Math.pow(t - 60, -0.0755148492)
  const blue = t >= 66 ? 255 : t <= 19 ? 0 : 138.5177312231 * Math.log(t - 10) - 305.0447927307
  const channel = (c: number) => Math.round(clamp(c, 0, 255))
  return `rgb(${channel(red)}, ${channel(green)}, ${channel(blue)})`
}

/** The colour the light is drawn in: the colour where one is set, the temperature's otherwise. */
export function lightColorOf(state: LampState): string {
  return state.color.trim() || kelvinToColor(state.colorTemperature)
}

/** Whether two states are the same, as a rule would tell them apart. */
export function sameState(a: LampState, b: LampState): boolean {
  return a.on === b.on && a.brightness === b.brightness && a.color === b.color && a.colorTemperature === b.colorTemperature
}
