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
 * What a click on Save does with each answer (#1200).
 *
 * saveInPlace used to answer false for three different reasons, and this
 * could only do one thing with that: open storage and ask where the
 * board belongs - for a board that had been stored in a folder an hour
 * ago, and whose folder is still remembered.
 */

import { beforeEach, describe, expect, it, vi } from 'vitest'

let outcome: string[] = []
const saveInPlace = vi.fn(async () => outcome.shift() ?? 'saved')
const origin = { value: undefined as { placeUri: string; entryUri: string; name: string } | undefined }

vi.mock('./useWorkspaceFile', () => ({
  useWorkspaceFile: () => ({ saveInPlace }),
  useWorkspaceOrigin: () => origin,
}))

const shown: Array<unknown> = []
vi.mock('./useStorageDialog', () => ({
  useStorageDialog: () => ({
    show: (on?: unknown) => shown.push(on),
  }),
}))

const reconnect = vi.fn(async (_uri: string) => ({ uri: 'folder://boards/' }) as unknown)
vi.mock('org.eclipse.daanse.board.app.lib.persistence.filesystem', () => ({
  reconnect: (uri: string) => reconnect(uri),
}))

const { useStoreBoard, reportStoreFailure } = await import('./useStoreBoard')

const FOLDER = {
  placeUri: 'folder://boards/',
  entryUri: 'folder://boards/sparky.json',
  name: 'Sparky',
}

beforeEach(() => {
  vi.clearAllMocks()
  outcome = []
  shown.length = 0
  origin.value = { ...FOLDER }
})

describe('a click on Save', () => {
  it('writes in place and says so, without opening storage', async () => {
    outcome = ['saved']
    const { store, stored } = useStoreBoard()

    await store()

    expect(stored.value).toBe(true)
    expect(shown).toEqual([])
  })

  /*
   * The reload case: the folder handle is still in IndexedDB, and this
   * click is the gesture that may ask for it back.
   */
  it('asks for the folder back when the place is not connected', async () => {
    outcome = ['place-unreachable', 'saved']
    const { store, stored } = useStoreBoard()

    await store()

    expect(reconnect).toHaveBeenCalledWith('folder://boards/')
    expect(saveInPlace).toHaveBeenCalledTimes(2)
    expect(stored.value).toBe(true)
    expect(shown).toEqual([])
  })

  it('opens storage on that place when asking for it back fails', async () => {
    outcome = ['place-unreachable', 'place-unreachable']
    reconnect.mockResolvedValueOnce(undefined)
    const { store } = useStoreBoard()

    await store()

    expect(shown).toEqual([{ placeUri: FOLDER.placeUri, name: FOLDER.name }])
  })

  /* A board that was never stored has nothing to reconnect to. */
  it('opens storage without asking for a folder when there is no origin', async () => {
    origin.value = undefined
    outcome = ['no-origin']
    const { store } = useStoreBoard()

    await store()

    expect(reconnect).not.toHaveBeenCalled()
    expect(shown).toEqual([undefined])
  })

  /*
   * The state is gone from a place that is there. Nothing to reconnect,
   * but the place and the name are still worth filling in.
   */
  it('opens storage on the place when the state is gone', async () => {
    outcome = ['entry-gone']
    const { store } = useStoreBoard()

    await store()

    expect(reconnect).not.toHaveBeenCalled()
    expect(shown).toEqual([{ placeUri: FOLDER.placeUri, name: FOLDER.name }])
  })

  /* The browser ends the transient activation after a few seconds, so
    nothing may be awaited between the click and the request. */
  it('awaits nothing between the failed save and the request', async () => {
    outcome = ['place-unreachable', 'saved']
    const order: string[] = []
    saveInPlace.mockImplementation(async () => {
      order.push('save')
      return outcome.shift() ?? 'saved'
    })
    reconnect.mockImplementation(async () => {
      order.push('reconnect')
      return { uri: 'folder://boards/' }
    })

    await useStoreBoard().store()

    expect(order).toEqual(['save', 'reconnect', 'save'])
  })

  it('does not run twice at once', async () => {
    outcome = ['saved', 'saved']
    const { store } = useStoreBoard()

    await Promise.all([store(), store()])

    expect(saveInPlace).toHaveBeenCalledTimes(1)
  })

  /*
   * Making a board stores it straight away, and that write can fail -
   * for a folder that refuses, say. The person is then taken to a board
   * they believe is stored, and only the console knew otherwise (#1200).
   */
  it('shows a failure reported from elsewhere', async () => {
    const { failed } = useStoreBoard()
    expect(failed.value).toBe('')

    reportStoreFailure('the folder refused')

    expect(failed.value).toBe('the folder refused')
  })

  /* The state is shared, so the next save clears what the last one said. */
  it('clears it on the next save', async () => {
    reportStoreFailure('the folder refused')
    outcome = ['saved']

    const { store, failed } = useStoreBoard()
    await store()

    expect(failed.value).toBe('')
  })
})
