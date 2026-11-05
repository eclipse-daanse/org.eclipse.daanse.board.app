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
 * A page's light: the ambient light it is modelled with, and the light
 * sources its lamps announce while they are on screen (#1242).
 *
 * The ambient light is part of the page, like its weather, and starts out
 * the way a weather does: every wrapper in place, holding the value of a
 * page without any lighting.
 *
 * A light source is not part of the page. A lamp is a widget and lives in
 * a bundle of its own; the layer that draws the light lives in the layout.
 * Neither knows the other, and both know this package - so the light is
 * handed over on the application's event bus with the names below, the
 * same way the weather region's drawing mode is asked for.
 */
import { VariableWrapper } from 'org.eclipse.daanse.board.app.lib.variables'
import { LightingImpl } from './gen/LightingImpl'
import type { Lighting } from './gen/Lighting'

export const LIGHTING_DEFAULTS = {
  ambient: 100,
} as const

export function createLighting(): Lighting {
  const lighting = new LightingImpl()
  lighting.ambient = new VariableWrapper<number>(LIGHTING_DEFAULTS.ambient)
  return lighting
}

/**
 * Puts a wrapper, holding its default, into every setting a stored
 * lighting came back without, and says whether it had to - the same as
 * completeWeather, for the same reason.
 */
export function completeLighting(lighting: Lighting): boolean {
  const fresh = createLighting() as unknown as Record<string, unknown>
  const held = lighting as unknown as Record<string, unknown>
  let completed = false
  for (const key of Object.keys(LIGHTING_DEFAULTS)) {
    if (held[key]) continue
    held[key] = fresh[key]
    completed = true
  }
  return completed
}

/**
 * The ambient light a setting means, from 0 to 100. A variable may deliver
 * text; anything that is not a number is the default, full daylight, so a
 * broken variable leaves the page as it would be without lighting.
 */
export function ambientOf(value: unknown): number {
  if (value === '' || value === null || value === undefined) return LIGHTING_DEFAULTS.ambient
  const n = Number(value)
  if (!Number.isFinite(n)) return LIGHTING_DEFAULTS.ambient
  return Math.min(100, Math.max(0, n))
}

/* ------------------------------------------------------------ light sources */

/** The two shapes a light can fall in. */
export type LightShape = 'round' | 'cone'

/**
 * One light as a lamp announces it.
 *
 * Its place is given relative to the lamp's widget, never in pixels: the
 * layer measures the widget, so the light follows the widget when it is
 * moved or resized, whoever moves it.
 */
export interface LightSourceSpec {
  /** The widget the light belongs to; one light per widget. */
  widgetId: string
  /** Off, the light is announced all the same and draws nothing. */
  on: boolean
  /** Where in the widget the light comes from, 0 (left) to 1 (right). */
  x: number
  /** Where in the widget the light comes from, 0 (top) to 1 (bottom). */
  y: number
  /** How far the light reaches, in pixels. */
  radius: number
  /** Any CSS colour the canvas understands. */
  color: string
  /** How strong the light is, 0 to 1. */
  intensity: number
  shape: LightShape
  /** Where a cone points, in degrees: 0 is to the right, 90 down. */
  direction: number
  /** How wide a cone opens, in degrees. */
  angle: number
  /** Whether the light falls on the widgets too, not only on the page behind them. */
  lightsWidgets: boolean
}

/*
 * The names on the event bus. Not of the shape ns:Key, which the text
 * checks would take for a text.
 */

/** A lamp announces its light, or announces it again changed: a LightSourceSpec. */
export const ANNOUNCE_LIGHT = 'announceLight'

/** A lamp takes its light away: `{ widgetId }`. */
export const WITHDRAW_LIGHT = 'withdrawLight'

/**
 * A layer that starts after the lamps asks them to announce again, with
 * no payload. A lamp answers with ANNOUNCE_LIGHT.
 */
export const LIGHTS_WANTED = 'lightsWanted'

export interface WithdrawLightEvent {
  widgetId: string
}
