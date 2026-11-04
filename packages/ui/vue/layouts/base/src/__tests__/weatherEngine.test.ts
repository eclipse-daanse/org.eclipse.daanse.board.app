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
import { LIMITS, MELT, WeatherEngine, depthAt, type WeatherLayerSettings } from '../weather/engine'

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
  it('stops a snow flake on a top edge and adds it to the snow there', () => {
    const e = engine(SNOW)
    drop(e, 150, 195, 200)

    e.step(0.05, SNOW)

    expect(e.particles).toHaveLength(0)
    const heights = e.profiles.get('w1')!.heights
    const bin = Math.floor((150 - WIDGET.x) / LIMITS.bin)
    expect(heights[bin]).toBeGreaterThan(0)
    expect(heights[bin + 1]).toBeGreaterThan(0)
    expect(heights[bin + 10]).toBe(0)
  })

  it('lets snow lie only so deep', () => {
    const e = engine(SNOW)
    const profile = e.profiles.get('w1')!
    const bin = Math.floor((150 - WIDGET.x) / LIMITS.bin)
    for (let i = 0; i < 400; i++) {
      /* Just above whatever lies there already */
      drop(e, 150, WIDGET.y - profile.heights[bin] - 5, 200)
      e.step(0.05, SNOW)
      e.particles.length = 0
    }
    expect(profile.heights[bin]).toBeCloseTo(depthAt(profile, bin), 4)
    expect(Math.max(...profile.heights)).toBeLessThanOrEqual(LIMITS.depth)
  })

  it('melts snow to a steady depth below the cap while it snows', () => {
    const e = engine(SNOW)
    const profile = e.profiles.get('w1')!
    const bin = Math.floor((150 - WIDGET.x) / LIMITS.bin)
    /* One small flake a second on one column: it brings 0.2 px a second */
    const snowFor = (seconds: number) => {
      for (let s = 0; s < seconds; s++) {
        drop(e, 150, WIDGET.y - profile.heights[bin] - 5, 200, 0.4)
        for (let i = 0; i < 20; i++) e.step(0.05, SNOW)
        e.particles.length = 0
      }
    }
    snowFor(300)
    const settled = profile.heights[bin]
    snowFor(100)

    const steady = 0.2 / MELT.snowing
    expect(settled).toBeLessThan(depthAt(profile, bin))
    expect(settled).toBeGreaterThan(steady * 0.8)
    expect(settled).toBeLessThan(steady * 1.2)
    expect(Math.abs(profile.heights[bin] - settled)).toBeLessThan(steady * 0.05)
  })

  it('melts snow faster once the weather is no longer snow', () => {
    const left = (after: WeatherLayerSettings) => {
      const e = engine(SNOW)
      const profile = e.profiles.get('w1')!
      profile.heights.fill(8)
      for (let i = 0; i < 40; i++) e.step(0.05, after) // two seconds
      return profile.heights[25]
    }
    const stillSnowing = left(SNOW)
    const turnedToRain = left(RAIN)
    expect(stillSnowing).toBeLessThan(8)
    expect(turnedToRain).toBeLessThan(stillSnowing / 2)
  })

  it('keeps snow on a short widget to a share of its height', () => {
    const e = new WeatherEngine(middle)
    e.setViewport(0, 0, 400, 600)
    e.setObstacles([{ id: 'thin', x: 0, y: 100, width: 200, height: 20 }])
    const profile = e.profiles.get('thin')!
    expect(depthAt(profile, 25)).toBeCloseTo(20 * LIMITS.depthShare)
  })

  it('bursts a rain drop into splashes on a top edge', () => {
    const e = engine(RAIN)
    drop(e, 150, 190, 800)

    e.step(0.05, RAIN)

    expect(e.particles).toHaveLength(0)
    expect(e.splashes.length).toBeGreaterThanOrEqual(2)
    for (const splash of e.splashes) expect(splash.vy).toBeLessThan(0)
    expect(Math.max(...e.profiles.get('w1')!.heights)).toBe(0)
  })

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

  it('shakes the snow off a widget that moved', () => {
    const e = engine(SNOW)
    drop(e, 150, 195, 200)
    e.step(0.05, SNOW)
    expect(Math.max(...e.profiles.get('w1')!.heights)).toBeGreaterThan(0)

    e.setObstacles([{ ...WIDGET, x: 140 }])

    expect(Math.max(...e.profiles.get('w1')!.heights)).toBe(0)
    expect(e.profiles.get('w1')!.rect.x).toBe(140)
    /* What lay there falls, from where the edge was */
    expect(e.particles.length).toBeGreaterThan(0)
    expect(e.particles.every((p) => p.y <= WIDGET.y)).toBe(true)
  })

  it('keeps the snow on a widget that only grew taller', () => {
    const e = engine(SNOW)
    drop(e, 150, 195, 200)
    e.step(0.05, SNOW)
    e.setObstacles([{ ...WIDGET, height: 300 }])
    expect(Math.max(...e.profiles.get('w1')!.heights)).toBeGreaterThan(0)
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

  it('draws nothing outside a rectangle region', () => {
    const region = { x: 150, y: 100, width: 120, height: 200 }
    const e = new WeatherEngine(Math.random)
    e.setViewport(0, 0, 400, 600)
    e.setRegion(region)
    const settings = { ...SNOW, intensity: 100, wind: 60 }
    for (let i = 0; i < 200; i++) e.step(0.05, settings)
    expect(e.particles.length).toBeGreaterThan(0)

    /* Every point drawn, and the clip it is drawn in */
    const points: Array<[number, number]> = []
    const clips: number[][] = []
    let clipped = false
    const ctx = new Proxy({} as Record<string, unknown>, {
      get: (target, key) => {
        if (key in target) return target[key as string]
        return (...args: number[]) => {
          if (key === 'rect' && !clipped) clips.push(args)
          if (key === 'clip') clipped = true
          if (key === 'restore') clipped = false
          if (key === 'arc') points.push([args[0], args[1]])
        }
      },
      set: (target, key, value) => ((target[key as string] = value), true),
    }) as unknown as CanvasRenderingContext2D
    e.draw({ back: ctx, front: ctx }, settings)

    expect(points.length).toBeGreaterThan(0)
    for (const [x, y] of points) {
      expect(x).toBeGreaterThanOrEqual(region.x)
      expect(x).toBeLessThanOrEqual(region.x + region.width)
      expect(y).toBeGreaterThanOrEqual(region.y)
      expect(y).toBeLessThanOrEqual(region.y + region.height)
    }
    expect(clips).toContainEqual([region.x, region.y, region.width, region.height])
    for (const p of e.particles) {
      expect(p.x).toBeGreaterThanOrEqual(region.x)
      expect(p.x).toBeLessThanOrEqual(region.x + region.width)
    }
  })

  it('draws only inside the union of a drawn region\'s shapes', () => {
    const e = new WeatherEngine(Math.random)
    e.setViewport(0, 0, 400, 600)
    /* Two shapes with a gap between them, and a triangle drawn the other way round */
    e.setRegion([
      { kind: 'rectangle', x: 0, y: 0, width: 100, height: 300 },
      { kind: 'ellipse', x: 200, y: 0, width: 100, height: 300 },
      { kind: 'polygon', points: [{ x: 300, y: 400 }, { x: 400, y: 600 }, { x: 400, y: 400 }] },
    ])
    expect(e.region).toEqual({ x: 0, y: 0, width: 400, height: 600 })
    const settings = { ...SNOW, intensity: 100 }
    for (let i = 0; i < 100; i++) e.step(0.05, settings)

    /* A particle in the gap, outside every shape, and one in each shape */
    e.particles.length = 0
    drop(e, 150, 150, 0)
    drop(e, 50, 150, 0)
    drop(e, 250, 150, 0)
    drop(e, 385, 420, 0)
    /* Inside the ellipse's box, outside the ellipse */
    drop(e, 205, 5, 0)

    const points: Array<[number, number]> = []
    const traced: string[] = []
    let rule: unknown
    const ctx = new Proxy({} as Record<string, unknown>, {
      get: (target, key) => {
        if (key in target) return target[key as string]
        return (...args: unknown[]) => {
          if (key === 'arc') points.push([args[0] as number, args[1] as number])
          if (key === 'rect' || key === 'ellipse') traced.push(key)
          if (key === 'clip') rule = args[0]
        }
      },
      set: (target, key, value) => ((target[key as string] = value), true),
    }) as unknown as CanvasRenderingContext2D
    e.draw({ back: null, front: ctx }, settings)

    expect(points).toEqual([[50, 150], [250, 150], [385, 420]])
    expect(traced).toEqual(['rect', 'ellipse'])
    expect(rule).toBe('nonzero')
    /* The triangle was turned round to go the way the others go */
    const triangle = e.regionShapes[2] as { points: { x: number; y: number }[] }
    expect(triangle.points[0]).toEqual({ x: 400, y: 400 })
  })

  it('lets everything pass the widgets by when the weather does not affect them', () => {
    const off = { ...SNOW, affectsWidgets: false }
    const e = engine(off)
    drop(e, 150, 195, 200)
    for (let i = 0; i < 4; i++) e.step(0.05, off)

    expect(e.particles).toHaveLength(1)
    expect(e.particles[0].y).toBeGreaterThan(WIDGET.y)
    expect(Math.max(...e.profiles.get('w1')!.heights)).toBe(0)

    /* And rain does not splash */
    const rainOff = { ...RAIN, affectsWidgets: false }
    const r = engine(rainOff)
    drop(r, 150, 190, 800)
    r.step(0.05, rainOff)
    expect(r.splashes).toHaveLength(0)
    expect(r.particles).toHaveLength(1)
  })
})
