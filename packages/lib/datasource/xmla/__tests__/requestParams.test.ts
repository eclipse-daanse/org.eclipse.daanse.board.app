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
import { requestParamsFrom } from '../src/classes'

/*
 * What a source's configuration may hold where the request belongs: nothing
 * for one created with a connection and a cube, the text "{}" for one made
 * while the create form still asked for it, or an object a widget built.
 */
describe('requestParamsFrom', () => {
  const empty = { rows: [], columns: [], measures: [], filters: [], pages: [], chapters: [] }

  it('starts a source without request parameters from an empty query', () => {
    expect(requestParamsFrom(undefined)).toEqual(empty)
  })

  it('reads the text a create form stored', () => {
    expect(requestParamsFrom('{}')).toEqual(empty)
    expect(requestParamsFrom('')).toEqual(empty)
    expect(requestParamsFrom('{"rows":[{"id":"r"}]}')).toEqual({ ...empty, rows: [{ id: 'r' }] })
  })

  it('takes text that is not a request as an empty one', () => {
    expect(requestParamsFrom('rows please')).toEqual(empty)
    expect(requestParamsFrom(42)).toEqual(empty)
  })

  it('completes an object in place, so the configuration keeps sharing it', () => {
    const held = { rows: [{ id: 'r' }] } as Record<string, unknown>
    const params = requestParamsFrom(held)
    expect(params).toBe(held)
    expect(held).toEqual({ ...empty, rows: [{ id: 'r' }] })
  })
})
