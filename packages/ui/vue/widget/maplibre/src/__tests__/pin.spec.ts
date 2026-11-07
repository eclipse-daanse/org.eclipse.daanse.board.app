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

import { describe, it, expect } from 'vitest'
import { pinImage, rgbOf } from '../pin'

const pixel = (image: ReturnType<typeof pinImage>, x: number, y: number) =>
  Array.from(image.data.slice((y * image.width + x) * 4, (y * image.width + x) * 4 + 4))

describe('the pin of a sensor (#1273)', () => {
  it('reads the colours a board writes', () => {
    expect(rgbOf('#E53935')).toEqual([229, 57, 53])
    expect(rgbOf('#fff')).toEqual([255, 255, 255])
    expect(rgbOf('#1E88E533')).toEqual([30, 136, 229])
    expect(rgbOf('red')).toEqual([158, 158, 158])
  })

  it('is a drop in the colour, with a white eye, a dark outline, and nothing around it', () => {
    const image = pinImage('#E53935')
    expect([image.width, image.height]).toEqual([48, 64])
    expect(pixel(image, 0, 0)[3]).toBe(0)
    expect(pixel(image, 2, 60)[3]).toBe(0)
    expect(pixel(image, 24, 22)).toEqual([255, 255, 255, 255])
    expect(pixel(image, 24, 34)).toEqual([229, 57, 53, 255])
    const edge = pixel(image, 6, 22)
    expect(edge[0]).toBeLessThan(80)
    expect(edge[3]).toBeGreaterThan(200)
    // The tip reaches down to where the pin stands.
    expect(pixel(image, 24, 60)[3]).toBeGreaterThan(0)
  })
})
