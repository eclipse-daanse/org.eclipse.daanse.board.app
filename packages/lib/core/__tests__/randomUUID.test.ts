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

import { webcrypto } from 'node:crypto'
import { afterEach, describe, expect, test, vi } from 'vitest'
import { randomUUID } from '../src'

const V4 = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/

/** What a page served over plain http sees: no randomUUID, getRandomValues still there. */
function insecureContextCrypto() {
  return { getRandomValues: <T extends ArrayBufferView>(array: T) => webcrypto.getRandomValues(array as never) as T }
}

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('randomUUID', () => {
  test('uses crypto.randomUUID where the context offers it', () => {
    const native = vi.fn(() => '00000000-0000-4000-8000-000000000000')
    vi.stubGlobal('crypto', { randomUUID: native, getRandomValues: webcrypto.getRandomValues.bind(webcrypto) })

    expect(randomUUID()).toBe('00000000-0000-4000-8000-000000000000')
    expect(native).toHaveBeenCalledOnce()
  })

  test('builds a version 4 id from getRandomValues outside a secure context', () => {
    vi.stubGlobal('crypto', insecureContextCrypto())

    const ids = Array.from({ length: 200 }, () => randomUUID())
    for (const id of ids) expect(id).toMatch(V4)
    expect(new Set(ids).size).toBe(ids.length)
  })

  test('sets the version and variant bits whatever the random bytes are', () => {
    vi.stubGlobal('crypto', { getRandomValues: <T extends Uint8Array>(array: T) => array.fill(0xff) })
    expect(randomUUID()).toBe('ffffffff-ffff-4fff-bfff-ffffffffffff')

    vi.stubGlobal('crypto', { getRandomValues: <T extends Uint8Array>(array: T) => array.fill(0) })
    expect(randomUUID()).toBe('00000000-0000-4000-8000-000000000000')
  })
})
