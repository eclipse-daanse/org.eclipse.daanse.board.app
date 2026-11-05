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

import { describe, it, expect } from 'vitest'
import { kelvinToColor, lightColorOf, stateFromSource, switchOf, type LampState } from '../support/lampState'

const base: LampState = { on: false, brightness: 80, color: '', colorTemperature: 2700 }

describe('a lamp state', () => {
  it('understands on and off in words', () => {
    expect(switchOf('ON')).toBe(true)
    expect(switchOf('1')).toBe(true)
    expect(switchOf('off')).toBe(false)
    expect(switchOf('')).toBe(false)
    expect(switchOf('maybe')).toBeUndefined()
  })

  it('takes from a source only what it says', () => {
    expect(stateFromSource(undefined, base)).toBe(base)
    expect(stateFromSource('on', base)).toEqual({ ...base, on: true })
    expect(stateFromSource(0, base)).toEqual({ ...base, on: false, brightness: 0 })
    expect(stateFromSource('55', base)).toEqual({ ...base, on: true, brightness: 55 })
    expect(stateFromSource({ colorTemperature: 5000 }, base)).toEqual({ ...base, colorTemperature: 5000 })
    expect(stateFromSource('maybe', base)).toBe(base)
  })

  it('is warm at low temperatures and cool at high ones', () => {
    expect(kelvinToColor(2000)).toMatch(/^rgb\(255, \d+, \d+\)$/)
    const [, , warmBlue] = kelvinToColor(2000).match(/\d+/g)!.map(Number)
    const [coolRed, , coolBlue] = kelvinToColor(10000).match(/\d+/g)!.map(Number)
    expect(warmBlue).toBeLessThan(150)
    expect(coolBlue).toBe(255)
    expect(coolRed).toBeLessThan(255)
  })

  it('is drawn in its colour where one is set, in its temperature otherwise', () => {
    expect(lightColorOf({ ...base, color: ' red ' })).toBe('red')
    expect(lightColorOf(base)).toBe(kelvinToColor(2700))
  })
})
