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
 * Opening a board from an address (#1424): the case of a board served
 * next to the app, on a device that has no other way to get it.
 */

import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineComponent } from 'vue'
import { mount } from '@vue/test-utils'
import {
  identifier as WORKSPACE_ID,
  WorkspaceImpl,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { identifier as SETTINGS_MANAGER } from 'org.eclipse.daanse.board.app.lib.api.settings'
import { useOpenBoardFromUrl } from './useOpenBoardFromUrl'
import { useWorkspaceFile, useWorkspaceOrigin } from './useWorkspaceFile'
import { useLastOpenedState } from './useLastOpenedState'

const PAGE = 'http://pi.local:8080/'
const WS = 'http://org.eclipse.daanse.board.app.lib.model.workspace#'

const board = (id: string, name: string) =>
  JSON.stringify({
    eClass: `${WS}//Workspace`,
    board: { eClass: `${WS}//Board`, id, name, pages: [] },
  })

/** A server holding the boards given, by full address or by path on the page's origin. */
function server(boards: Record<string, string>) {
  return vi.fn(async (href: string) => {
    const text = boards[href] ?? boards[new URL(href).pathname]
    return text === undefined
      ? { ok: false, status: 404, text: async () => '' }
      : { ok: true, status: 200, text: async () => text }
  })
}

function setUp({
  config = {},
  boards = {},
  open,
}: {
  config?: Record<string, unknown>
  boards?: Record<string, string>
  /** A board already open, as a stored state */
  open?: string
} = {}) {
  const workspace = new WorkspaceImpl()
  const fetch = server(boards)
  let api!: ReturnType<typeof useOpenBoardFromUrl>
  const host = defineComponent({
    setup() {
      api = useOpenBoardFromUrl({ fetch: fetch as never })
      if (open) useWorkspaceFile().load(open)
      return () => null
    },
  })
  mount(host, {
    global: {
      provide: {
        [WORKSPACE_ID]: workspace,
        [SETTINGS_MANAGER]: {
          getSettings: async (path: string[]) =>
            path.reduce<any>((held, step) => held?.[step], config),
        },
      },
    },
  })
  return { workspace, fetch, api }
}

afterEach(() => {
  localStorage.clear()
  useWorkspaceOrigin().value = undefined
})

describe('?board=<url>', () => {
  it('opens the board the address names, as a board kept nowhere yet', async () => {
    useWorkspaceOrigin().value = { placeUri: 'file://localhost', entryUri: 'x', name: 'old' }
    const { workspace, api } = setUp({ boards: { '/boards/smart-home.json': board('b7', 'Smart Home') } })

    const id = await api.openAtStart(`${PAGE}board/b1?board=boards/smart-home.json`, true)

    expect(id).toBe('b7')
    expect(workspace.board?.name).toBe('Smart Home')
    /* Saving it must ask where, not write over the state open before. */
    expect(useWorkspaceOrigin().value).toBeUndefined()
    expect(useLastOpenedState().recall()?.boardId).toBe('b7')
    expect(api.failure.value).toBeUndefined()
  })

  it('wins over the deployment board', async () => {
    const { workspace, api } = setUp({
      config: { initWithConfigurationURI: { enabled: true, url: '/boards/default.json' } },
      boards: { '/boards/a.json': board('a', 'A'), '/boards/default.json': board('d', 'Default') },
    })

    await api.openAtStart(`${PAGE}?board=/boards/a.json`, true)

    expect(workspace.board?.id).toBe('a')
  })

  it('refuses another origin, says so, and fetches nothing', async () => {
    const { fetch, api, workspace } = setUp()

    const id = await api.openAtStart(`${PAGE}?board=https://elsewhere.example/b.json`, true)

    expect(id).toBeUndefined()
    expect(fetch).not.toHaveBeenCalled()
    expect(workspace.board).toBeFalsy()
    expect(api.failure.value).toEqual({
      url: 'https://elsewhere.example/b.json',
      reason: expect.stringMatching(/not allowed/),
    })
  })

  it('takes another origin the deployment lists', async () => {
    const { api, workspace } = setUp({
      config: { boards: { allowedOrigins: ['https://boards.example'] } },
      boards: { 'https://boards.example/r.json': board('r', 'Remote') },
    })

    expect(await api.openAtStart(`${PAGE}?board=https://boards.example/r.json`, true)).toBe('r')
    expect(workspace.board?.name).toBe('Remote')
  })

  it('leaves the open board in place when what it fetches is no board', async () => {
    const { workspace, api } = setUp({
      open: board('mine', 'Mine'),
      boards: { '/boards/broken.json': '{"no":"board"}' },
    })

    await api.openAtStart(`${PAGE}?board=/boards/broken.json`, false)

    expect(workspace.board?.id).toBe('mine')
    expect(api.failure.value?.reason).toBe('not a board')
  })

  it('says which status the server answered with', async () => {
    const { api } = setUp()

    await api.openAtStart(`${PAGE}?board=/boards/gone.json`, true)

    expect(api.failure.value?.reason).toBe('HTTP 404')
  })
})

describe('initWithConfigurationURI', () => {
  const config = { initWithConfigurationURI: { enabled: true, url: 'boards/default.json' } }
  const boards = { '/boards/default.json': board('d', 'Default') }

  it('opens the deployment board where nothing is open', async () => {
    const { workspace, api } = setUp({ config, boards })

    expect(await api.openAtStart(`${PAGE}board/x`, true)).toBe('d')
    expect(workspace.board?.name).toBe('Default')
  })

  /* A reload must not throw away the board one was working on. */
  it('leaves an open board alone', async () => {
    const { workspace, api, fetch } = setUp({ config, boards, open: board('mine', 'Mine') })

    expect(await api.openAtStart(PAGE, false)).toBeUndefined()
    expect(fetch).not.toHaveBeenCalled()
    expect(workspace.board?.id).toBe('mine')
  })

  it('does nothing when it is switched off', async () => {
    const { api, fetch } = setUp({
      config: { initWithConfigurationURI: { enabled: false, url: 'boards/default.json' } },
      boards,
    })

    expect(await api.openAtStart(PAGE, true)).toBeUndefined()
    expect(fetch).not.toHaveBeenCalled()
  })
})

/* A link must not cost the only copy of a board. */
describe('a board kept nowhere else', () => {
  it('stays open, and the link waits until it is saved', async () => {
    const { workspace, api, fetch } = setUp({
      open: board('mine', 'Mine'),
      boards: { '/boards/a.json': board('a', 'A') },
    })
    useLastOpenedState().remember({ boardId: 'mine', name: 'Mine', data: board('mine', 'Mine') })

    expect(api.holdsUnkeptBoard()).toBe(true)
    expect(await api.openAtStart(`${PAGE}?board=/boards/a.json`, false)).toBeUndefined()
    expect(fetch).not.toHaveBeenCalled()
    expect(workspace.board?.id).toBe('mine')
    expect(api.failure.value?.kind).toBe('unkept')
  })

  it('is replaced by the link once it is stored somewhere', async () => {
    const { workspace, api } = setUp({ boards: { '/boards/a.json': board('a', 'A') } })
    useLastOpenedState().remember({
      boardId: 'mine',
      data: board('mine', 'Mine'),
      origin: { placeUri: 'file://localhost', entryUri: 'file://localhost/mine.json', name: 'mine' },
    })

    expect(await api.openAtStart(`${PAGE}?board=/boards/a.json`, true)).toBe('a')
    expect(workspace.board?.id).toBe('a')
  })
})
