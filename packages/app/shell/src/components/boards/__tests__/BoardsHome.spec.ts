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
import { flushPromises, mount } from '@vue/test-utils'
import {
  identifier as WORKSPACE,
  WorkspaceImpl,
  BoardImpl,
  ConnectionImpl,
  DatasourceImpl,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import {
  identifier as RepoManagerId,
  type Repository,
} from 'org.eclipse.daanse.board.app.lib.api.persistence'
import BoardsHome from '../BoardsHome.vue'
import NewBoardDialog from '../NewBoardDialog.vue'
import { useWorkspaceOrigin } from '../../../composables/useWorkspaceFile'
import en from '../../../i18n/en.json'

const push = vi.fn()


/*
 * The services useWorkspaceFile asks for and goes on without - each is
 * used through ?. there. The shell provides them from the service
 * registry; left out here, each mount logged one Vue warning per service,
 * with the workspace printed in full (#1404). Provided as absent, which is
 * what the board is opened with in this test.
 */
const withoutServices = Object.fromEntries(
  [
    'ConnectionRepository',
    'DatasourceRepository',
    'VariableRepository',
    'VariableWrapperFactory',
    'EventManager',
    'RepositoryRegistry',
  ].map((service) => [Symbol.for(service), undefined]),
)

vi.mock('vue-router', () => ({
  useRoute: () => ({ query: {} }),
  useRouter: () => ({ push }),
}))

const translator = {
  language: 'en',
  t: (key: string, options?: Record<string, unknown>) => {
    const text = key
      .replace(/^shell:/, '')
      .split('.')
      .reduce<any>((held, step) => held?.[step], en)
    if (typeof text !== 'string') return key
    return Object.entries(options ?? {}).reduce(
      (filled, [name, value]) => filled.split(`{{${name}}}`).join(String(value)),
      text,
    )
  },
}

/*
 * A workspace as a stored state leaves it: a board, whatever connections
 * and sources came with it, and - for an exploration state - no pages.
 */
function setUp({
  connections = 0,
  datasources = 0,
  pages = [] as string[],
  board = true,
  places = true,
} = {}) {
  const workspace = new WorkspaceImpl()
  if (board) {
    const held = new BoardImpl()
    held.id = 'b1'
    held.name = 'Sparky'
    workspace.board = held
  }

  for (let at = 0; at < connections; at++) {
    const connection = new ConnectionImpl()
    connection.uid = `c${at}`
    workspace.connections.add(connection)
  }
  for (let at = 0; at < datasources; at++) {
    const source = new DatasourceImpl()
    source.uid = `d${at}`
    workspace.datasources.add(source)
  }

  /* One place that can be written to, unless the case is a build with none. */
  const written: Array<Record<string, unknown>> = []
  const place = {
    uri: 'file:///states',
    name: 'Browser',
    create: async (entry: Record<string, unknown>) => {
      written.push(entry)
    },
  } as unknown as Repository

  const registered: Array<Record<string, unknown>> = []
  const pageRepo = {
    getAllPageIds: () => pages,
    registerPage: (page: Record<string, unknown>) => {
      registered.push(page)
      /* What the registry does: a page needs a board, so one appears. */
      if (!workspace.board) {
        const made = new BoardImpl()
        made.id = 'made'
        workspace.board = made
      }
    },
    getPage: (id: string) => ({
      id,
      name: id,
      layout: { toArray: () => [] },
      widgets: { toArray: () => [] },
    }),
    getDefaultPage: () => undefined,
  }

  const wrapper = mount(BoardsHome, {
    props: { pageRepo, layoutRepo: {} },
    global: {
      provide: {
        ...withoutServices,
        [WORKSPACE]: workspace,
        [RepoManagerId]: {
          getAvailableReposetories: async () => (places ? [place] : []),
        },
        i18n: translator,
      },
      stubs: { BoardFloorplan: true },
    },
    attachTo: document.body,
  })
  return { wrapper, workspace, written, registered }
}

/** The dialog teleports to the body, so it is read from there. */
const inDialog = (selector: string) => document.body.querySelector(selector)

describe('the board overview', () => {
  it('shows the open board, and that is what decides - not whether it has pages', async () => {
    const { wrapper } = setUp({ connections: 3, datasources: 1 })
    await flushPromises()

    const text = wrapper.text()
    expect(text).toContain('Sparky')
    /* The screen for "nothing open", which this is not. */
    expect(text).not.toContain(en.Boards.empty.title)
  })

  it('counts what the board holds, not only what lies on its pages', async () => {
    const { wrapper } = setUp({ connections: 3, datasources: 1 })
    await flushPromises()

    const text = wrapper.text()
    expect(text).toContain('3 connections')
    expect(text).toContain('1 sources')
  })

  it('offers only the way to open one when no board is open', async () => {
    const { wrapper } = setUp({ board: false })
    await flushPromises()

    expect(wrapper.text()).toContain(en.Boards.empty.title)
    const labels = wrapper.findAll('button').map((b) => b.text())
    expect(labels).toContain(en.Boards.empty.openStored)
  })

  it("opens the board at its own address, pages or not", async () => {
    const { wrapper } = setUp({ connections: 2 })
    await flushPromises()

    const open = wrapper.findAll('button').find((b) => b.text() === en.Boards.open.action)
    expect(open).toBeDefined()
    await open!.trigger('click')

    /* It used to need a page id it did not have, and fall through silently. */
    expect(push).toHaveBeenCalledWith('/board/b1')
  })

  it('opens a board that has pages at the same address', async () => {
    const { wrapper } = setUp({ pages: ['p1'] })
    await flushPromises()

    const open = wrapper.findAll('button').find((b) => b.text() === en.Boards.open.action)
    await open!.trigger('click')

    expect(push).toHaveBeenCalledWith('/board/b1')
  })

  it('treats a board with connections and no pages as open all the same', async () => {
    const { wrapper } = setUp({ connections: 2 })
    await flushPromises()

    expect(wrapper.text()).not.toContain(en.Boards.empty.title)
    expect(wrapper.text()).toContain('Sparky')
  })
})


/*
 * Making a board.
 *
 * Both decisions - what it is called, where it is kept - used to be made
 * later or never: the name never, the place at the first save, which is
 * where a dialog had no business being (#1174).
 */
describe('making a board', () => {
  it('asks before it makes anything', async () => {
    const { wrapper, registered } = setUp({ board: false })
    await flushPromises()

    const create = wrapper
      .findAll('button')
      .find((each) => each.text() === en.Boards.empty.create)
    await create!.trigger('click')
    await flushPromises()

    expect(registered).toHaveLength(0)
    expect(inDialog('[role="dialog"]')).toBeTruthy()
  })

  it('names the board and writes it where it was told', async () => {
    const { wrapper, workspace, written, registered } = setUp({ board: false })
    await flushPromises()

    useWorkspaceOrigin().value = undefined
    /* Through the dialog, which is how a person reaches it. */
    wrapper.findComponent(NewBoardDialog).vm.$emit('create', 'Caradog', {
      uri: 'file:///states',
      name: 'Browser',
      create: async (entry: Record<string, unknown>) => {
        written.push(entry)
      },
    } as unknown as Repository)
    await flushPromises()

    expect(registered).toHaveLength(1)
    expect(workspace.board!.name).toBe('Caradog')
    expect(written).toHaveLength(1)
    expect(String(written[0].uri)).toBe('file:///Caradog.json')

    /* And now there is somewhere for every later save to go. */
    expect(useWorkspaceOrigin().value?.name).toBe('Caradog')
  })

  /* A board that cannot be kept anywhere is still a board. */
  it('makes the board even where nothing can be written to', async () => {
    const { wrapper, workspace, written, registered } = setUp({ board: false, places: false })
    await flushPromises()

    useWorkspaceOrigin().value = undefined
    wrapper.findComponent(NewBoardDialog).vm.$emit('create', 'Caradog', undefined)
    await flushPromises()

    expect(registered).toHaveLength(1)
    expect(workspace.board!.name).toBe('Caradog')
    expect(written).toHaveLength(0)
    expect(useWorkspaceOrigin().value).toBeUndefined()
  })
})
