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
/*
 * A preference of the reader (#1291): off unless set, kept in this
 * browser, one value per key for every component that asks, and followed
 * when another tab changes it.
 */
import { beforeEach, describe, expect, it } from 'vitest'
import { usePreference } from './usePreference'

beforeEach(() => localStorage.clear())

describe('usePreference', () => {
  it('is off until the reader turns it on, and remembers it', () => {
    const first = usePreference('test.pref.a')
    expect(first.value.value).toBe(false)
    first.set(true)
    expect(localStorage.getItem('test.pref.a')).toBe('on')
    expect(usePreference('test.pref.a').value.value).toBe(true)
  })

  it('is one value for every component that asks', () => {
    const one = usePreference('test.pref.b')
    const two = usePreference('test.pref.b')
    one.set(true)
    expect(two.value.value).toBe(true)
  })

  it('follows another tab', () => {
    const pref = usePreference('test.pref.c')
    window.dispatchEvent(new StorageEvent('storage', { key: 'test.pref.c', newValue: 'on' }))
    expect(pref.value.value).toBe(true)
  })
})
