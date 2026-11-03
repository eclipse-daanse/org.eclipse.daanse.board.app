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
import { readWith } from '../formats'

/* As the catalogue serves them: an authority URI without its brackets. */
const BASE = 'http://publications.europa.eu/resource/authority/file-type'
const CSV = `${BASE}/CSV`
const JSON_FT = `${BASE}/JSON`
const GEOJSON = `${BASE}/GEOJSON`
const XMLA = `${BASE}/XMLA`
const WMS = `${BASE}/WMS`

describe('how a found endpoint is read', () => {
  /*
   * The defect this closes: GEOJSON was in neither of the two switch
   * statements, so a found GeoJSON distribution offered a button that
   * made no connection and no source, and said nothing about it.
   */
  it('reads a GeoJSON distribution over rest, like the catalogue does', () => {
    expect(readWith(GEOJSON)).toEqual({ connection: 'rest', source: 'rest' })
  })

  it('still reads the formats it read before', () => {
    expect(readWith(CSV)).toEqual({ connection: 'rest', source: 'csv', config: { separators: ',' } })
    expect(readWith(JSON_FT)).toEqual({ connection: 'rest', source: 'rest' })
    expect(readWith(XMLA)).toEqual({ connection: 'xmla', source: 'xmla' })
  })

  /* A format we have no source for answers nothing, rather than guessing. */
  it('says nothing for a format it cannot read', () => {
    expect(readWith(WMS)).toBeUndefined()
    expect(readWith('')).toBeUndefined()
    expect(readWith(undefined)).toBeUndefined()
  })

  /*
   * Every entry names a connection and a source. Half an entry is what
   * produced a connection with nothing reading it.
   */
  it('answers both halves wherever it answers at all', () => {
    for (const format of [CSV, JSON_FT, GEOJSON, XMLA]) {
      const reads = readWith(format)
      expect(reads?.connection).toBeTruthy()
      expect(reads?.source).toBeTruthy()
    }
  })
})
