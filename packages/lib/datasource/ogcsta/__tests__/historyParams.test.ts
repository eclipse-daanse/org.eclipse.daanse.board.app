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

import { describe, test, expect } from 'vitest'
import { OgcStaStore } from '../src/classes/OgcSta'

/*
 * The query parameters a history request is built with.
 *
 * Reached through the private method on purpose: what is checked is the
 * one branch that decides whether a stored value reaches the endpoint,
 * and going through getData would need a connection, a repository and an
 * endpoint to answer.
 */
function paramsFor(historyConfig: Record<string, unknown>) {
  const store = new OgcStaStore()
  return (store as unknown as {
    getHistoryQueryParams: (config: unknown) => Record<string, unknown>
  }).getHistoryQueryParams(historyConfig)
}

describe('history query parameters', () => {
  test('passes an order the settings asked for', () => {
    const params = paramsFor({ enabled: true, orderBy: 'phenomenonTime desc' })

    expect(params.$orderby).toBe('phenomenonTime desc')
  })

  /*
   * A board saved while the settings stored the whole option object
   * rather than the order inside it (#1191). Passing that on would send
   * "[object Object]" as $orderby, and the endpoint would reject the
   * request - so the history would stop working rather than merely come
   * back in the server's own order.
   */
  test('ignores an order a board kept as an object', () => {
    const params = paramsFor({
      enabled: true,
      orderBy: { text: 'Newest first', value: 'phenomenonTime desc' },
    })

    expect(params.$orderby).toBeUndefined()
  })

  test('asks for no particular order where none was set', () => {
    expect(paramsFor({ enabled: true }).$orderby).toBeUndefined()
    expect(paramsFor({ enabled: true, orderBy: '' }).$orderby).toBeUndefined()
  })
})
