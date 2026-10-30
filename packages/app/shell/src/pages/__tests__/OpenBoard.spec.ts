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

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import {
  identifier as WORKSPACE,
  WorkspaceImpl,
  BoardImpl,
  ConnectionImpl,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import OpenBoard from '../OpenBoard.vue'
import en from '../../i18n/en.json'

const replace = vi.fn()
const push = vi.fn()
let params: Record<string, string> = {}

/* resolve() answers for the areas this shell always has; /variables is
  contributed by a module and absent here, which is the case the screen
  has to handle. */
const KNOWN = ['/pages', '/datasources']

vi.mock('vue-router', () => ({
  useRoute: () => ({ params }),
  useRouter: () => ({
    push,
    replace,
    resolve: (path: string) => ({ matched: KNOWN.includes(path) ? [{}] : [] }),
  }),
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

const STORED = {
  eClass: 'http://org.eclipse.daanse.board.app.lib.model.workspace#//Workspace',
  connections: [
    {
      eClass: 'http://org.eclipse.daanse.board.app.lib.model.workspace#//Connection',
      uid: 'c1',
      name: 'govdata',
      type: 'rest',
    },
  ],
}

function setUp({ open = 'b1', asked = 'b1', connections = 1 } = {}) {
  params = asked ? { boardid: asked } : {}
  const workspace = new WorkspaceImpl()
  if (open) {
    const board = new BoardImpl()
    board.id = open
    board.name = 'Sparky'
    workspace.board = board
    for (let at = 0; at < connections; at++) {
      const connection = new ConnectionImpl()
      connection.uid = `c${at}`
      workspace.connections.add(connection)
    }
  }
  const wrapper = mount(OpenBoard, {
    global: {
      provide: { [WORKSPACE]: workspace, i18n: translator },
      stubs: { BoardFloorplan: true },
    },
  })
  return { wrapper, workspace }
}

beforeEach(() => {
  replace.mockClear()
  push.mockClear()
  localStorage.clear()
})

afterEach(() => localStorage.clear())

describe('the open board', () => {
  it('shows the board the address names', async () => {
    const { wrapper } = setUp()
    await flushPromises()

    expect(wrapper.text()).toContain('Sparky')
    expect(replace).not.toHaveBeenCalled()
  })

  it('is a screen in its own right for a board with no pages', async () => {
    const { wrapper } = setUp()
    await flushPromises()

    /* The figures, which is what such a board has instead of pages. */
    const figures = wrapper.findAll('.figure').map((each) => each.text())
    expect(figures.some((each) => each.includes(en.Board.figure.connections))).toBe(true)
    expect(wrapper.text()).toContain(en.Board.noPages.text)
  })

  it('names what it holds rather than only counting it', async () => {
    const { wrapper } = setUp({ connections: 2 })
    await flushPromises()

    const named = wrapper.findAll('.holds__name').map((each) => each.text())
    expect(named).toHaveLength(2)
  })

  it('finds the board again after a reload, from what this browser kept', async () => {
    localStorage.setItem(
      'daanse.board.lastOpened',
      JSON.stringify({ boardId: 'b9', name: 'Sparky', data: STORED }),
    )

    const { workspace } = setUp({ open: '', asked: 'b9' })
    await flushPromises()

    expect(replace).not.toHaveBeenCalled()
    expect(workspace.connections.toArray()).toHaveLength(1)
  })

  it('follows a named connection to it, rather than only naming it', async () => {
    const { wrapper } = setUp({ connections: 2 })
    await flushPromises()

    await wrapper.findAll('.holds__item')[0].trigger('click')

    expect(push).toHaveBeenCalledWith({
      path: '/datasources',
      query: { select: 'c0', kind: 'Connection' },
    })
  })

  it('leads a figure to the area it counts', async () => {
    const { wrapper } = setUp({ connections: 1 })
    await flushPromises()

    const pages = wrapper.findAll('.figure--link').find((each) => each.text().includes('Pages'))
    await pages!.trigger('click')

    expect(push).toHaveBeenCalledWith('/pages')
  })

  it('leaves a figure whose area this shell does not have as a figure', async () => {
    const { wrapper } = setUp({ connections: 1 })
    await flushPromises()

    /* Variables come with a module; without it there is nowhere to go. */
    const asLink = wrapper.findAll('.figure--link').map((each) => each.text())
    expect(asLink.some((each) => each.includes(en.Board.figure.variables))).toBe(false)
    expect(wrapper.text()).toContain(en.Board.figure.variables)
  })

  it('sends a link to a board this browser never opened to the launcher', async () => {
    setUp({ open: '', asked: 'b9' })
    await flushPromises()

    expect(replace).toHaveBeenCalledWith('/')
  })

  it('sends an address naming another board to the launcher', async () => {
    setUp({ open: 'b1', asked: 'b2' })
    await flushPromises()

    expect(replace).toHaveBeenCalledWith('/')
  })
})
