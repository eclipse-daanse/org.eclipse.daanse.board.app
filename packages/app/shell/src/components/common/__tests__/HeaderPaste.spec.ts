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

import { afterEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount, type VueWrapper } from '@vue/test-utils'
import {
  identifier as WORKSPACE,
  WorkspaceImpl,
  BoardImpl,
  PageImpl,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import Header from '../Header.vue'

/*
 * "Einfügen" in the top bar (#1225): there while a copied widget waits to
 * be pasted, and asking the board for the paste when pressed. The board
 * says it holds one on the root element; that is all the bar reads.
 */

let routeName = 'pageEdit'

vi.mock('vue-router', () => ({
  useRoute: () => ({
    get name() {
      return routeName
    },
    params: { pageid: 'p1' },
    get path() {
      return routeName === 'pageEdit' ? '/board/b1/p1/edit' : '/board/b1/p1'
    },
  }),
  useRouter: () => ({ push: vi.fn() }),
}))

const translator = { language: 'en', t: (key: string) => key }

let wrapper: VueWrapper | undefined

function mountHeader() {
  const workspace = new WorkspaceImpl()
  const board = new BoardImpl()
  board.id = 'b1'
  const page = new PageImpl()
  page.id = 'p1'
  page.name = 'Wasser'
  board.pages.add(page)
  workspace.board = board

  wrapper = mount(Header, {
    global: {
      provide: { [WORKSPACE]: workspace, i18n: translator },
      stubs: { DIcon: true },
    },
  })
  return wrapper
}

const pasteEntry = () => wrapper!.find('[data-test="header-paste"]')

afterEach(() => {
  wrapper?.unmount()
  wrapper = undefined
  document.documentElement.removeAttribute('data-board-clipboard')
  routeName = 'pageEdit'
})

describe('pasting from the top bar', () => {
  it('is not offered while nothing was copied', async () => {
    mountHeader()
    await flushPromises()

    expect(pasteEntry().exists()).toBe(false)
  })

  it('appears after a copy', async () => {
    mountHeader()
    await flushPromises()

    document.documentElement.setAttribute('data-board-clipboard', 'full')
    await flushPromises()

    expect(pasteEntry().exists()).toBe(true)
  })

  it('asks the board for the paste', async () => {
    document.documentElement.setAttribute('data-board-clipboard', 'full')
    mountHeader()
    await flushPromises()
    const asked = vi.fn()
    window.addEventListener('daanse:board-paste', asked)

    await pasteEntry().trigger('click')

    expect(asked).toHaveBeenCalledTimes(1)
    window.removeEventListener('daanse:board-paste', asked)
  })

  it('is not offered outside the editor', async () => {
    routeName = 'page'
    document.documentElement.setAttribute('data-board-clipboard', 'full')
    mountHeader()
    await flushPromises()

    expect(pasteEntry().exists()).toBe(false)
  })
})
