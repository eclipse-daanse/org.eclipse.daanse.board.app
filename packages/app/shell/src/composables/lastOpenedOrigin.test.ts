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
 * The two links in the chain that makes #1200 work, neither of which was
 * tested.
 *
 * Save writes the board back where it came from. It can only do that
 * because the origin outlives the reload: useKeepLastOpened writes it
 * down beside the board on every change, and useLastOpenedState hands it
 * back on the way up. If either link drops the origin, Save asks where
 * the board belongs - which is the defect, arriving from further away.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { defineComponent } from 'vue'
import { mount } from '@vue/test-utils'
import {
  WorkspaceImpl,
  BoardImpl,
  ConnectionImpl,
  identifier as WORKSPACE_ID,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { useLastOpenedState } from './useLastOpenedState'
import { useKeepLastOpened } from './useKeepLastOpened'
import { useWorkspaceOrigin } from './useWorkspaceFile'

const ORIGIN = {
  placeUri: 'folder://boards/',
  entryUri: 'folder://boards/sparky.json',
  name: 'Sparky',
}

beforeEach(() => {
  localStorage.clear()
  useWorkspaceOrigin().value = undefined
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
  localStorage.clear()
})

describe('what a reload comes back to', () => {
  /*
   * The origin is three strings. It survives only because it is written
   * as part of the remembered state and read back out of it.
   */
  it('hands back the origin it was given', () => {
    const { remember, recall } = useLastOpenedState()

    remember({ boardId: 'b1', name: 'Sparky', data: { kept: true }, origin: ORIGIN })

    expect(recall()).toEqual({
      boardId: 'b1',
      name: 'Sparky',
      data: { kept: true },
      origin: ORIGIN,
    })
  })

  /* A board that was never stored has none, and that is not a failure. */
  it('hands back a state without an origin unchanged', () => {
    const { remember, recall } = useLastOpenedState()

    remember({ boardId: 'b1', data: {} })

    expect(recall()?.origin).toBeUndefined()
    expect(recall()?.boardId).toBe('b1')
  })

  it('answers nothing where nothing was remembered', () => {
    expect(useLastOpenedState().recall()).toBeUndefined()
  })

  /* Cleared site data, a private window, a full quota: forgetful, not
    broken. */
  it('answers nothing rather than throwing on unreadable storage', () => {
    localStorage.setItem('daanse.board.lastOpened', 'not json')

    expect(() => useLastOpenedState().recall()).not.toThrow()
    expect(useLastOpenedState().recall()).toBeUndefined()
  })
})

describe('keeping it in step', () => {
  function board() {
    const workspace = new WorkspaceImpl()
    const held = new BoardImpl()
    held.id = 'b1'
    held.name = 'Sparky'
    workspace.board = held
    return workspace
  }

  function watching(workspace: WorkspaceImpl) {
    return mount(
      defineComponent({
        setup() {
          useKeepLastOpened()
          return () => null
        },
      }),
      { global: { provide: { [WORKSPACE_ID as symbol]: workspace } } },
    )
  }

  /*
   * The write that #1200 depends on: the board changes, and the origin
   * goes down with it. Written once when the board was opened, a save
   * after any later change would find no origin at all.
   */
  it('writes the origin down when the board changes', async () => {
    const workspace = board()
    useWorkspaceOrigin().value = { ...ORIGIN }
    watching(workspace)

    workspace.connections.push(new ConnectionImpl())
    await vi.advanceTimersByTimeAsync(1000)

    expect(useLastOpenedState().recall()?.origin).toEqual(ORIGIN)
  })

  /* Storing a board for the first time sets the origin and nothing else;
    that alone has to reach storage. */
  it('writes it down when the origin itself changes', async () => {
    const workspace = board()
    watching(workspace)

    useWorkspaceOrigin().value = { ...ORIGIN }
    await vi.advanceTimersByTimeAsync(1000)

    expect(useLastOpenedState().recall()?.origin).toEqual(ORIGIN)
  })

  /* A burst of changes is one write, not one per change. */
  it('waits for the changes to stop', async () => {
    const workspace = board()
    useWorkspaceOrigin().value = { ...ORIGIN }
    watching(workspace)

    workspace.connections.push(new ConnectionImpl())
    await vi.advanceTimersByTimeAsync(400)
    expect(useLastOpenedState().recall()).toBeUndefined()

    workspace.connections.push(new ConnectionImpl())
    await vi.advanceTimersByTimeAsync(1000)
    expect(useLastOpenedState().recall()?.boardId).toBe('b1')
  })
})
