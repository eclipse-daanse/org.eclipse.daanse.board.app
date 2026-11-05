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

// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { activate } from '../index'

/*
 * #1264: the data tab and the widget palette learn from `answers` what a
 * source gives. A table reads the latest values view of an OGC STA source.
 */
describe('the OGC STA source type', () => {
  it('answers its own shape and a table', () => {
    const registerDatasourceType = vi.fn()
    const services = {
      register: vi.fn(),
      getRequired: () => ({ registerDatasourceType }),
    }

    activate({ services } as any)

    const [type, identifiers] = registerDatasourceType.mock.calls[0]
    expect(type).toBe('ogcsta')
    expect(identifiers.answers).toEqual(['OGCSTAData', 'DataTable'])
  })
})
