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

import { beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import {
  identifier as WORKSPACE,
  WorkspaceImpl,
  BoardImpl,
  PageImpl,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { NAVIGATION_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.navigation'
import Rail from '../Rail.vue'
import en from '../../../i18n/en.json'

const push = vi.fn()
let routeName = 'board'
let params: Record<string, string> = {}

vi.mock('vue-router', () => ({
  useRoute: () => ({ get name() { return routeName }, get params() { return params } }),
  useRouter: () => ({ push }),
}))

const translator = {
  language: 'en',
  t: (key: string) => {
    const text = key
      .replace(/^shell:/, '')
      .split('.')
      .reduce<any>((held, step) => held?.[step], en)
    return typeof text === 'string' ? text : key
  },
}

/*
 * What a module contributes, in the order the registry hands it over -
 * sorted by `order`, which is what puts variables before events.
 */
const MODULE_AREAS = [
  {
    id: 'config',
    label: 'shell:Nav.variables',
    description: 'shell:Nav.variablesDesc',
    icon: 'settings',
    route: '/configuration',
    routeName: 'config',
    order: 10,
  },
  {
    id: 'eventmanager',
    label: 'eventmanager:Nav.label',
    icon: 'event',
    route: '/events',
    routeName: 'events',
    order: 15,
  },
]

function setUp({ pages = ['Wasser', 'Strom'], areas = MODULE_AREAS, attachTo = undefined as any } = {}) {
  const workspace = new WorkspaceImpl()
  const board = new BoardImpl()
  board.id = 'b1'
  board.name = 'Caradog'
  for (const name of pages) {
    const page = new PageImpl()
    page.id = name.toLowerCase()
    page.name = name
    board.pages.add(page)
  }
  workspace.board = board

  const wrapper = mount(Rail, {
    global: {
      provide: {
        [WORKSPACE]: workspace,
        [NAVIGATION_REGISTRY]: { getAllNavigationItemsArray: () => areas },
        i18n: translator,
      },
      stubs: { DIcon: true },
    },
    ...(attachTo ? { attachTo } : {}),
  })
  return { wrapper, workspace }
}

beforeEach(() => {
  push.mockClear()
  routeName = 'board'
  params = {}
})

describe('the rail', () => {
  it('lists the areas in the order one builds a board in', async () => {
    const { wrapper } = setUp()
    await flushPromises()

    const labels = wrapper.findAll('.ri__label').map((each) => each.text())
    expect(labels).toEqual([
      en.Rail.overview,
      en.Rail.data,
      en.Rail.pages,
      en.Nav.variables,
      'eventmanager:Nav.label',
    ])
  })

  it('leads to the board itself, not to one of its dashboards', async () => {
    const { wrapper } = setUp()
    await flushPromises()

    await wrapper.findAll('.ri')[0].trigger('click')

    expect(push).toHaveBeenCalledWith('/board/b1')
  })

  /* ----------------------------------------------- open or not */

  it('opens on the pointer and closes again once an area is picked', async () => {
    const { wrapper } = setUp()
    await flushPromises()

    const panel = wrapper.find('.rail__panel')
    expect(panel.classes()).not.toContain('rail__panel--open')

    await panel.trigger('mouseenter')
    expect(panel.classes()).toContain('rail__panel--open')

    /* The pointer is still on the panel here, which is why :hover alone
      would have held it open over the screen one just asked for. */
    await wrapper.findAll('.ri')[1].trigger('click')
    expect(panel.classes()).not.toContain('rail__panel--open')

    await panel.trigger('mouseleave')
    await panel.trigger('mouseenter')
    expect(panel.classes()).toContain('rail__panel--open')
  })

  /* On the keyboard the menu is where one still is: collapsing it would
    hide the row the focus is standing on. Telling the two apart is what
    :focus-visible is for - a click focuses a button too. */
  it('stays open while the keyboard is in it', async () => {
    const { wrapper } = setUp({ attachTo: document.body })
    await flushPromises()

    const panel = wrapper.find('.rail__panel')
    const area = wrapper.findAll('.ri')[1]
    ;(area.element as HTMLElement).focus()
    await area.trigger('focusin')
    expect(panel.classes()).toContain('rail__panel--open')

    await area.trigger('click')
    expect(panel.classes()).toContain('rail__panel--open')
  })

  it('says what each area is for', async () => {
    const { wrapper } = setUp()
    await flushPromises()

    expect(wrapper.text()).toContain(en.Rail.overviewDesc)
    expect(wrapper.text()).toContain(en.Nav.variablesDesc)
  })

  /* A module that names no sentence simply has none - the row is still a row. */
  it('leaves out a sentence a module did not give it', async () => {
    const { wrapper } = setUp()
    await flushPromises()

    const rows = wrapper.findAll('.ri')
    expect(rows[4].find('.ri__desc').exists()).toBe(false)
    expect(rows[3].find('.ri__desc').exists()).toBe(true)
  })

  it('marks the pages area while a page is open', async () => {
    routeName = 'page'
    params = { pageid: 'strom' }
    const { wrapper } = setUp()
    await flushPromises()

    expect(wrapper.findAll('.ri')[2].classes()).toContain('on')
  })

  /*
   * A board that arrives after the rail was drawn replaces
   * workspace.board, which an adapter on the board that was there would
   * never hear of - the overview would then point at the board before.
   */
  it('points at the board that is open, not the one that was', async () => {
    const { wrapper, workspace } = setUp()
    await flushPromises()

    const other = new BoardImpl()
    other.id = 'b2'
    workspace.board = other
    await flushPromises()

    await wrapper.findAll('.ri')[0].trigger('click')
    expect(push).toHaveBeenCalledWith('/board/b2')
  })
})
