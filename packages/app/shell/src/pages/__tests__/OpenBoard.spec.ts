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

vi.mock('vue-router', () => ({
  useRoute: () => ({ params }),
  useRouter: () => ({ push, replace }),
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

    expect(wrapper.text()).toContain(en.Board.noPages.title)
    expect(wrapper.text()).toContain('1 connections')
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
