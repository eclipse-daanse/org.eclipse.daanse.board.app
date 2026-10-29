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
import BoardsHome from '../BoardsHome.vue'
import en from '../../../i18n/en.json'

const push = vi.fn()

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
function setUp({ connections = 0, datasources = 0, pages = [] as string[], board = true } = {}) {
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

  const pageRepo = {
    getAllPageIds: () => pages,
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
      provide: { [WORKSPACE]: workspace, i18n: translator },
      stubs: { BoardFloorplan: true },
    },
  })
  return { wrapper, workspace }
}

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

  it('opens a board with no pages on its data, instead of doing nothing', async () => {
    const { wrapper } = setUp({ connections: 2 })
    await flushPromises()

    const open = wrapper.findAll('button').find((b) => b.text() === en.Boards.open.action)
    expect(open).toBeDefined()
    await open!.trigger('click')

    /* It used to need a page id it did not have, and fall through silently. */
    expect(push).toHaveBeenCalledWith('/datasources')
  })

  it('opens a board that has pages on a page', async () => {
    const { wrapper } = setUp({ pages: ['p1'] })
    await flushPromises()

    const open = wrapper.findAll('button').find((b) => b.text() === en.Boards.open.action)
    await open!.trigger('click')

    expect(push).toHaveBeenCalledWith('/page/p1')
  })

  it('treats a board with connections and no pages as open all the same', async () => {
    const { wrapper } = setUp({ connections: 2 })
    await flushPromises()

    expect(wrapper.text()).not.toContain(en.Boards.empty.title)
    expect(wrapper.text()).toContain('Sparky')
  })
})
