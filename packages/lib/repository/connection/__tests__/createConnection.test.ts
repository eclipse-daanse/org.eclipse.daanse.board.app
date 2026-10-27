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
import * as workspace from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { wireRepositories } from '../../../../../test/support/wiring'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('createConnection outside a secure context', () => {
  /*
   * Over plain http on a LAN address crypto.randomUUID does not exist, and
   * this was the first call the board made into it while starting up.
   */
  test('creates a connection with a v4 uid when crypto.randomUUID is missing', () => {
    vi.stubGlobal('crypto', {
      getRandomValues: <T extends ArrayBufferView>(array: T) => webcrypto.getRandomValues(array as never) as T,
    })
    const { connectionRepository } = wireRepositories(workspace)

    const connection = connectionRepository.createConnection('rest')

    expect(connection.uid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/)
    expect(connectionRepository.getConnectionModel(connection.uid)).toBe(connection)
  })
})
