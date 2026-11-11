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
 * ********************************************************************/

import { describe, expect, it } from 'vitest'
import { boxMeetsHull, clearance, homeDistance, hullOf, layoutOrder, scaleFit } from '../cube-view'

/* The cube's silhouette, as the labels must keep clear of it: a diamond around (100, 100). */
const DIAMOND = hullOf([
  { x: 100, y: 50 },
  { x: 150, y: 100 },
  { x: 100, y: 150 },
  { x: 50, y: 100 },
  { x: 100, y: 100 },
])

describe('the labels of the cube', () => {
  it('keep clear of the cube by its outline, the inner corners of the cube left out', () => {
    expect(DIAMOND).toHaveLength(4)
  })

  it('meet the cube where they lie over it', () => {
    expect(boxMeetsHull({ x: 100, y: 100, w: 20, h: 10 }, DIAMOND)).toBe(true)
    expect(boxMeetsHull({ x: 150, y: 100, w: 20, h: 10 }, DIAMOND)).toBe(true)
  })

  it('do not, where they only lie inside the square around it', () => {
    // Inside the bounding box, beyond the diagonal edge: a box test would call this a hit.
    expect(boxMeetsHull({ x: 140, y: 60, w: 16, h: 10 }, DIAMOND)).toBe(false)
    expect(boxMeetsHull({ x: 200, y: 100, w: 20, h: 10 }, DIAMOND)).toBe(false)
  })
})

describe('two labels of one axis', () => {
  const before = { x: 100, y: 100, w: 120, h: 14 }

  it('stay where they are once they clear each other', () => {
    expect(clearance(before, { x: 100, y: 130, w: 60, h: 14 }, 0.7, 0.7)).toBe(0)
  })

  it('are pushed along a slanting edge only until apart up, not their whole width', () => {
    // Down and to the right at 45 degrees: apart up (16px) comes long before apart across (94px).
    const t = clearance(before, { x: 104, y: 104, w: 60, h: 14 }, Math.SQRT1_2, Math.SQRT1_2)
    expect(t).toBeCloseTo((16 - 4) / Math.SQRT1_2)
  })

  it('are pushed by their boxes, so a wider label that reaches into the one before still clears it', () => {
    // A wide label stood further out sits beside the one before rather than past it.
    const box = { x: 150, y: 108, w: 160, h: 14 }
    const t = clearance(before, box, 0.2, 0.98)
    const moved = { ...box, x: box.x + 0.2 * t, y: box.y + 0.98 * t }
    expect(Math.abs(moved.x - before.x) * 2 >= moved.w + before.w || Math.abs(moved.y - before.y) * 2 >= moved.h + before.h).toBe(true)
  })
})

describe('the axes of the cube, as their labels are laid out', () => {
  it('give the axis of the fewest members its room first, so two measures do not lose one to a dozen products', () => {
    const products = Array.from({ length: 12 }, (_, i) => `Product ${i}`)
    const stores = Array.from({ length: 9 }, (_, i) => `Store ${i}`)
    expect(layoutOrder([products, stores, ['Unit Sales', 'Store Sales']])).toEqual([2, 1, 0])
  })

  it('keep their own order where they are alike', () => {
    expect(layoutOrder([['a', 'b'], ['c', 'd'], ['e', 'f']])).toEqual([0, 1, 2])
  })
})

describe('the camera of the cube', () => {
  const sees = (distance: number, fov: number, aspect: number) => {
    // The half angles the cube takes up and across, seen from that far.
    const up = (fov / 2) * (Math.PI / 180)
    const across = Math.atan(Math.tan(up) * aspect)
    return Math.min(up, across) >= Math.asin(1 / distance) - 1e-9
  }

  it('stands as far back in a wide tile as its height asks', () => {
    expect(homeDistance(1, 32, 800, 400)).toBeCloseTo(1 / Math.sin((16 * Math.PI) / 180))
  })

  it('stands further back in a tile taller than it is wide, so the cube is not cut at its sides', () => {
    const tall = homeDistance(1, 32, 200, 420)
    expect(tall).toBeGreaterThan(homeDistance(1, 32, 800, 400) * 1.5)
    expect(sees(tall, 32, 200 / 420)).toBe(true)
  })

  it('leaves the scale its room beside the cube', () => {
    const room = 60
    const distance = homeDistance(1, 32, 200, 420, room)
    expect(distance).toBeGreaterThan(homeDistance(1, 32, 200, 420))
    expect(sees(distance, 32, (200 - room) / 420)).toBe(true)
  })
})

describe('the scale beside the cube', () => {
  /* The scale's top, its two numbers and their gaps counted (34 px), standing at its middle in a view of a height. */
  const top = (height: number, above = 0) => {
    const { bar, shift } = scaleFit(height, above)
    return height / 2 + shift - (bar + 34) / 2
  }

  it('keeps its full length where the view has room, with or without a title', () => {
    expect(scaleFit(600).bar).toBe(120)
    expect(scaleFit(600, 28).bar).toBe(120)
  })

  it('stands below the title in a small tile, so its top number does not lie over it', () => {
    // A 260 x 180 tile under a title: the full-height scale reached up to 15 px, into the title's 28.
    expect(top(180)).toBeLessThan(28)
    expect(top(180, 28)).toBeGreaterThanOrEqual(28)
    expect(top(180, 28) + scaleFit(180, 28).bar + 34).toBeLessThanOrEqual(180)
  })
})
