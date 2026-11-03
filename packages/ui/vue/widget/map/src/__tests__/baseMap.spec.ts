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
import { creditIsStale, isRetired, renewBaseMap } from '../baseMap'
import { MapSettingsImpl } from '../gen/MapSettingsImpl'

/*
 * No EPackage is built here. The defaults this checks are field
 * initialisers on the generated class; only eClass() would need the
 * package, and nothing here asks for it.
 */

const RETIRED = 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
const OWN = 'https://tiles.example.test/{z}/{x}/{y}.png'

/** What the model says a new map starts with. */
const fresh = new MapSettingsImpl()

describe('bringing a stored background forward', () => {
  /*
   * The board this exists for: saved while every map drew from CARTO,
   * which now answers "API KEY REQUIRED". The new default never reaches
   * it, because a default only applies where there is no value.
   */
  it('replaces the retired address', () => {
    const renewed = renewBaseMap({ baseMapUrl: RETIRED, attribution: '' })

    expect(renewed.baseMapUrl).toBe(fresh.baseMapUrl)
    expect(renewed.baseMapUrl).toContain('openstreetmap.org')
  })

  /* Somebody's own tile server is none of this function's business. */
  it('keeps an address of one\'s own', () => {
    expect(renewBaseMap({ baseMapUrl: OWN, attribution: 'Our own tiles' })).toEqual({})
  })

  it('leaves a board that is already current alone', () => {
    expect(renewBaseMap({ baseMapUrl: fresh.baseMapUrl, attribution: fresh.attribution })).toEqual({})
  })

  /*
   * An empty value is not a stored address - the model's default applies
   * by itself, and there is nothing to replace.
   */
  it('has nothing to do where no address was stored', () => {
    expect(renewBaseMap({})).toEqual({})
    expect(renewBaseMap({ baseMapUrl: '' })).toEqual({})
  })

  describe('and the credit that goes with it', () => {
    it('supplies one where the board had none', () => {
      const renewed = renewBaseMap({ baseMapUrl: RETIRED, attribution: '' })

      expect(renewed.attribution).toBe(fresh.attribution)
      expect(renewed.attribution).toContain('OpenStreetMap')
    })

    it('replaces one that credits the retired tiles', () => {
      const renewed = renewBaseMap({ baseMapUrl: RETIRED, attribution: '© CARTO, © OpenStreetMap' })

      expect(renewed.attribution).toBe(fresh.attribution)
    })

    /*
     * A credit someone wrote stays, even beside a replaced address: it
     * may name the data rather than the tiles.
     */
    it('keeps a credit of their own', () => {
      const renewed = renewBaseMap({ baseMapUrl: RETIRED, attribution: 'Data: City of Jena' })

      expect(renewed.baseMapUrl).toBe(fresh.baseMapUrl)
      expect(renewed.attribution).toBeUndefined()
    })
  })

  describe('recognising what is retired', () => {
    it('knows the address by where it comes from, whatever the style', () => {
      expect(isRetired(RETIRED)).toBe(true)
      expect(isRetired('https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png')).toBe(true)
      expect(isRetired(OWN)).toBe(false)
      expect(isRetired(undefined)).toBe(false)
    })

    it('treats a missing or empty credit as one to supply', () => {
      expect(creditIsStale(undefined)).toBe(true)
      expect(creditIsStale('')).toBe(true)
      expect(creditIsStale('   ')).toBe(true)
      expect(creditIsStale('Data: City of Jena')).toBe(false)
    })
  })

  /* The model is the one place the address is declared. */
  it('takes its values from the model, not from a copy beside it', () => {
    expect(renewBaseMap({ baseMapUrl: RETIRED }).baseMapUrl).toBe(new MapSettingsImpl().baseMapUrl)
  })
})
