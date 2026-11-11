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
import { bundleRows, type BuiltBundle, type LoadedBundle } from './bundleRows'

const built = (id: string, version = '1.0.0', included = true): BuiltBundle => ({
  id,
  name: id,
  version,
  included,
})

const loaded = (id: string, state = 'active', version = '1.0.0', error?: string): LoadedBundle => ({
  id,
  version,
  state,
  error,
})

const statusOf = (rows: ReturnType<typeof bundleRows>, id: string) =>
  rows.find((row) => row.id === id)?.status

describe('the bundles, built against loaded', () => {
  it('calls a bundle that runs in the version built active', () => {
    expect(statusOf(bundleRows([built('a')], [loaded('a')]), 'a')).toBe('active')
  })

  it('calls one that is known and not started idle, not a fault', () => {
    expect(statusOf(bundleRows([built('a')], [loaded('a', 'not loaded')]), 'a')).toBe('idle')
  })

  /* The image that held 4 of 154: the build listed them, the loader never heard of them. */
  it('calls a bundle the build left out missing', () => {
    const rows = bundleRows([built('a', '1.0.0', false)], [])
    expect(statusOf(rows, 'a')).toBe('missing')
  })

  it('calls one the build holds and the board does not know missing as well', () => {
    expect(statusOf(bundleRows([built('a')], []), 'a')).toBe('missing')
  })

  it('calls one that would not start failed, and keeps the reason', () => {
    const rows = bundleRows([built('a')], [loaded('a', 'error', '1.0.0', 'boom')])
    expect(rows[0]).toMatchObject({ status: 'failed', error: 'boom' })
  })

  it('notices a bundle running in another version than the one built', () => {
    const rows = bundleRows([built('a', '1.0.0')], [loaded('a', 'active', '1.1.0')])
    expect(rows[0]).toMatchObject({ status: 'differs', built: '1.0.0', loaded: '1.1.0' })
  })

  it('calls what the deployment brought, and the build never had, added', () => {
    expect(statusOf(bundleRows([], [loaded('extra')]), 'extra')).toBe('added')
  })

  it('puts what needs a look before what is fine', () => {
    const rows = bundleRows(
      [built('a'), built('b'), built('c', '1.0.0', false)],
      [loaded('a'), loaded('b', 'error')],
    )
    expect(rows.map((row) => row.id)).toEqual(['b', 'c', 'a'])
  })

  /* Started from sources there is no /versions.json - nothing can be missing then. */
  it('judges by the loader alone where there is no build', () => {
    const rows = bundleRows(undefined, [loaded('a'), loaded('b', 'registered')])
    expect(rows.map((row) => row.status)).toEqual(['active', 'idle'])
  })
})
