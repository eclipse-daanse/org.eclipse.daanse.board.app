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
import { fits } from 'org.eclipse.daanse.board.app.lib.core'
import { DATA_TYPE_BY_SOURCE, DEFAULT_DATA_TYPE, dataTypeFor } from '../dataTypes'

/*
 * What a valhalla source answers, as its own registration declares it
 * (packages/ui/vue/datasource/valhalla/src/index.ts).
 */
const VALHALLA_ANSWERS = ['geojson', 'object', 'string']

/** What the map declares it reads, as its provider does. */
const MAP_READS = ['object', 'OGCSTAData', 'geojson']

describe('which shape the map asks each source for', () => {
  it('asks a routing source for the route, not for an envelope it cannot read', () => {
    expect(dataTypeFor('valhalla')).toBe('geojson')
  })

  /*
   * The defect this closes: valhalla was missing from the mapping, so it
   * fell through to OGCSTAData - which valhalla does not answer. Asked for
   * a shape it has no branch for, its store hands back the whole envelope
   * (summary, legs, waypoints and the geometry among them), and no
   * renderer on the map reads that.
   */
  it('asks for a shape the source actually answers', () => {
    for (const source of Object.keys(DATA_TYPE_BY_SOURCE)) {
      expect(MAP_READS).toContain(dataTypeFor(source))
    }
    expect(VALHALLA_ANSWERS).toContain(dataTypeFor('valhalla'))
  })

  it('keeps SensorThings for a kind of source it has never heard of', () => {
    expect(dataTypeFor('something-new')).toBe(DEFAULT_DATA_TYPE)
    expect(dataTypeFor(undefined)).toBe(DEFAULT_DATA_TYPE)
    expect(dataTypeFor('')).toBe(DEFAULT_DATA_TYPE)
  })

  /*
   * And the other half: declaring the shape is what gets the map offered
   * for such a source at all (#1183). Without geojson among its reads,
   * the map asks valhalla for geojson and is never suggested for one.
   */
  it('is offered for a source whose geography it can draw', () => {
    expect(fits(MAP_READS, VALHALLA_ANSWERS)).toBe(true)
    expect(MAP_READS).toContain(dataTypeFor('valhalla'))
  })
})
