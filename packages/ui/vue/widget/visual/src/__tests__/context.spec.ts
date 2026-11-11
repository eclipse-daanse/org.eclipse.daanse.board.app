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
import { homeOf, HOME_VIEW, shapeOf } from '../drawing'
import { brightness, onDark, PALETTES } from '../palettes'
import { LOOK, SALES, option, problem } from './fixtures'

describe('what every kind is drawn with', () => {
  it('stands the camera back in a tile narrower than the home view was set for, and no nearer in a wider one', () => {
    const tile = { small: false, showScale: true }
    expect(homeOf({ ...tile, aspect: 0 })).toEqual(HOME_VIEW)
    expect(homeOf({ ...tile, aspect: 3 })).toEqual(HOME_VIEW)
    expect(homeOf({ ...tile, aspect: 0.8 }).distance).toBe(HOME_VIEW.distance * 2)
    // A small tile gives up a good share of its width to the scale beside the box.
    expect(homeOf({ small: true, showScale: true, aspect: 1.6 }).distance).toBeGreaterThan(HOME_VIEW.distance)
    expect(homeOf({ small: true, showScale: false, aspect: 1.6 })).toEqual(HOME_VIEW)
  })

  it('keeps the 3D box inside its margins, and turns it home for the tile it is in', () => {
    const box = option('bars3d', SALES, { title: 'Sales', aspect: 0.8 }).grid3D
    expect([box.width, box.height, box.top, box.right]).toEqual(['auto', 'auto', 24, 72])
    expect(box.viewControl.distance).toBe(HOME_VIEW.distance * 2)
  })

  it('turns a pale-to-dark scale round on a dark board, so the highest value does not sink into it', () => {
    const light = option('bars3d', SALES, { palette: 'mono' }).visualMap.inRange.color
    const dark = option('bars3d', SALES, { palette: 'mono', textColor: '#eeeeee' }).visualMap.inRange.color
    expect(light).toEqual(PALETTES.mono.scale)
    // Its palest colour is now the highest; the darkest, lifted or not, would sink and is left out.
    expect(dark.at(-1)).toBe(PALETTES.mono.scale[0])
    expect(dark).toHaveLength(PALETTES.mono.scale.length - 1)
    // Its own colours, low to high, none lifted out of order.
    const steps = dark.map((colour: string) => brightness(colour))
    expect(steps).toEqual([...steps].sort((a, b) => a - b))
    // A scale that already ends bright is left as it is.
    expect(option('bars3d', SALES, { palette: 'aurora', textColor: '#eeeeee' }).visualMap.inRange.color).toEqual(onDark(PALETTES.aurora).scale)
  })

  it('gives a small tile a shorter scale', () => {
    expect(option('bars3d', SALES, { small: true }).visualMap.itemHeight).toBe(60)
    expect(option('bars3d', SALES).visualMap.itemHeight).toBe(120)
  })

  it('lifts the darkest colours of a palette on a dark board, and leaves a light board alone', () => {
    const set = (textColor: string) => option('bars3d', SALES, { palette: 'mono', textColor }).color as string[]
    expect(set('#222222')).toEqual(PALETTES.mono.set)
    for (const colour of set('#eeeeee')) expect(brightness(colour)).toBeGreaterThanOrEqual(70)
  })

  it('tells drawings apart by their parts and how many of each, so a merge never keeps a part the new one lacks', () => {
    expect(shapeOf({ series: [{}, {}], title: {} })).toBe(shapeOf({ title: { text: 'x' }, series: [{ a: 1 }, {}] }))
    expect(shapeOf({ series: [{}, {}] })).not.toBe(shapeOf({ series: [{}] }))
    expect(shapeOf({ series: [{}], calendar: [{}] })).not.toBe(shapeOf({ series: [{}] }))
  })

  it('lifts a scale on a dark board without changing which of two neighbouring stops is the brighter', () => {
    for (const palette of Object.values(PALETTES)) {
      const before = palette.scale.map((colour) => brightness(colour))
      const after = onDark(palette).scale.map((colour) => brightness(colour))
      for (let i = 1; i < before.length; i++) expect(Math.sign(after[i] - after[i - 1])).toBe(Math.sign(before[i] - before[i - 1]))
      for (const b of after) expect(b).toBeGreaterThanOrEqual(70)
    }
  })

  it('hides a title taken away, since a redraw of the same kind is merged into the last one', () => {
    expect(option('bars3d', SALES, { title: 'Sales' }).title).toMatchObject({ show: true, text: 'Sales' })
    expect(option('bars3d', SALES).title).toEqual({ show: false, text: '' })
  })

  it('says a query found nothing where every cell came back empty', () => {
    expect(problem('bars3d', { headers: ['C', 'a', 'b'], rows: [['x', null, null], ['y', null, null]] })).toBe('noValues')
    expect(LOOK.small).toBe(false)
  })
})
