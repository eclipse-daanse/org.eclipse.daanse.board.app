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

import { describe, expect, it } from 'vitest'
import { WeatherKind } from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { WeatherEngine, LIMITS, type WeatherLayerSettings } from '../weather/engine'

/* Always the middle: deterministic, and never far (0.5 >= the far share) */
const middle = () => 0.5

const SNOW: WeatherLayerSettings = { kind: WeatherKind.SNOW, intensity: 0, wind: 0, color: '' }
const RAIN: WeatherLayerSettings = { kind: WeatherKind.RAIN, intensity: 0, wind: 0, color: '' }

const WIDGET = { id: 'w1', x: 100, y: 200, width: 200, height: 100 }

/** An engine over a 400 x 600 board with one widget and nothing falling yet. */
function engine(settings: WeatherLayerSettings) {
  const e = new WeatherEngine(middle)
  e.setViewport(0, 0, 400, 600)
  e.setObstacles([WIDGET])
  e.step(0, settings) // the first step fills the sky; at intensity 0, with nothing
  return e
}

/** Puts one near particle straight above a point, falling. */
function drop(e: WeatherEngine, x: number, y: number, vy: number, size = 2) {
  e.particles.push({ x, y, px: x, py: y, vx: 0, vy, size, far: false, phase: 0 })
}

describe('the weather engine', () => {
  it('ends a falling particle on a top edge of a widget', () => {
    const e = engine(RAIN)
    drop(e, 150, 190, 800)
    e.step(0.05, RAIN)
    expect(e.particles).toHaveLength(0)
  })

  it('lets a particle beside a widget fall past it', () => {
    const e = engine(SNOW)
    drop(e, 50, 195, 200)
    e.step(0.05, SNOW)
    expect(e.particles).toHaveLength(1)
  })

  it('makes more particles the higher the intensity', () => {
    const count = (intensity: number) => {
      const e = new WeatherEngine(middle)
      e.setViewport(0, 0, 400, 600)
      const settings = { ...SNOW, intensity }
      e.step(0, settings)
      const before = e.spawned
      for (let i = 0; i < 20; i++) e.step(0.05, settings)
      return e.spawned - before
    }
    expect(count(0)).toBe(0)
    expect(count(80)).toBeGreaterThan(count(20) * 3)
  })

  it('never holds more particles than the cap', () => {
    const e = new WeatherEngine(Math.random)
    e.setViewport(0, 0, 4000, 3000)
    const settings = { ...SNOW, intensity: 100 }
    for (let i = 0; i < 200; i++) e.step(0.05, settings)
    expect(e.particles.length).toBeLessThanOrEqual(LIMITS.particles)
  })
})
