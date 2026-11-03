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

import { describe, expect, it, vi, beforeEach } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { identifier as DATASOURCE_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { identifier as PAGE_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.page'
import { identifier as WIDGET_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.widget'
import {
  BoardImpl,
  DatasourceImpl,
  identifier as WORKSPACE,
  PageImpl,
  WorkspaceImpl,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import NewWidgetDialog from '../NewWidgetDialog.vue'
import { useNewWidget } from '@/composables/useNewWidget'

const push = vi.fn()
vi.mock('vue-router', () => ({ useRouter: () => ({ push }) }))

/*
 * Four widgets, enough to tell the question apart from its answer: two
 * that read what a csv source answers, one that reads something else,
 * and one that reads nothing at all.
 */
const WIDGETS = {
  datatable: { name: 'DataTable', icon: 'data:,table', reads: ['DataTable'] },
  sample: { name: 'Sample', icon: 'data:,sample', reads: ['string'] },
  pivot: { name: 'Pivot', icon: 'data:,pivot', reads: ['PivotTable'] },
  markdown: { name: 'Markdown', icon: 'data:,md', reads: 'none' },
}

const addWidget = vi.fn()

/* Unmounted between tests: a dialog left standing keeps teleporting into
  the body, and the next test would read the one before it. */
let mounted: Array<{ unmount: () => void }> = []

/*
 * The real model, not a shape that looks like it: useEList attaches an
 * EContentAdapter and walks eContents, which a plain array has not got.
 */
function workspaceWith(pages: Array<{ id: string; name: string }>) {
  const workspace = new WorkspaceImpl()

  const source = new DatasourceImpl()
  source.uid = 'ds1'
  source.name = 'Auslastung'
  source.type = 'csv'
  workspace.datasources.push(source)

  const board = new BoardImpl()
  board.id = 'b1'
  for (const each of pages) {
    const page = new PageImpl()
    page.id = each.id
    page.name = each.name
    board.pages.push(page)
  }
  workspace.board = board

  return workspace
}

/** What a csv source type declares it answers. */
const CSV = ['DataTable', 'string']

/** A type that has not declared anything, which is not the same as none. */
const UNDECLARED = undefined

/* Both spelled out at every call: a default would swallow UNDECLARED,
  which is one of the cases under test. */
function setUp(answers: string[] | undefined, pages = [{ id: 'p1', name: 'Erste' }]) {
  const workspace = workspaceWith(pages)

  const wrapper = mount(NewWidgetDialog, {
    global: {
      provide: {
        [WORKSPACE as symbol]: workspace,
        [DATASOURCE_REPOSITORY as symbol]: {
          getDatasourceIdentifiers: () => ({ answers }),
        },
        [WIDGET_REPOSITORY as symbol]: {
          getAllWidgets: () => WIDGETS,
          onChange: () => () => {},
        },
        [PAGE_REPOSITORY as symbol]: {
          addWidget,
          getPage: () => ({ layout: { toArray: () => [{ y: 0, height: 150 }] } }),
        },
      },
    },
  })
  mounted.push(wrapper)
  return wrapper
}

/*
 * The dialog teleports to the body, so it is read from the document
 * rather than from the wrapper.
 */
function tiles(): HTMLElement[] {
  return [...document.querySelectorAll('.tile')] as HTMLElement[]
}

function tileNames(): string[] {
  return tiles().map((tile) => tile.textContent?.trim() ?? '')
}

function button(text: string): HTMLButtonElement {
  const found = [...document.querySelectorAll('button')].find((b) => b.textContent?.includes(text))
  if (!found) throw new Error(`no button "${text}"`)
  return found as HTMLButtonElement
}

function shown(): string {
  return document.querySelector('[role="dialog"]')?.textContent ?? ''
}

/* The dialog is module scope, like the one that makes a source. */
function open() {
  useNewWidget().show('ds1')
}

function close() {
  useNewWidget().open.value = false
}

describe('NewWidgetDialog', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    close()
    for (const wrapper of mounted) wrapper.unmount()
    mounted = []
  })

  it('offers the widgets that read what this source answers, and no others', async () => {
    setUp(CSV)
    open()
    await flushPromises()

    expect(tileNames()).toEqual(['DataTable', 'Sample'])
  })

  /*
   * The point of #1183: a widget that shows no data is not somewhere to
   * put a source, and one reading a shape this source does not answer
   * would stand there empty.
   */
  it('leaves out what reads nothing and what reads another shape', async () => {
    setUp(CSV)
    open()
    await flushPromises()

    expect(tileNames().length).toBeGreaterThan(0)
    expect(tileNames()).not.toContain('Markdown')
    expect(tileNames()).not.toContain('Pivot')
  })

  it('says so when the source type has not declared what it answers', async () => {
    setUp(UNDECLARED)
    open()
    await flushPromises()

    expect(tiles()).toHaveLength(0)
    expect(document.querySelector('.note')).not.toBeNull()
  })

  it('creates the widget on the page, with the source already set', async () => {
    setUp(CSV)
    open()
    await flushPromises()

    tiles()[0].click()
    await flushPromises()
    button('Wizard.create').click()
    await flushPromises()

    expect(addWidget).toHaveBeenCalledTimes(1)
    const [pageId, widget, placement] = addWidget.mock.calls[0]
    expect(pageId).toBe('p1')
    expect(widget.type).toBe('datatable')
    expect(widget.config.datasourceId).toBe('ds1')
    /* Below what is already there rather than on top of it, and clear of
      the palette, which docks top left and would hide it entirely. */
    expect(placement.y).toBe(150)
    expect(placement.x).toBeGreaterThanOrEqual(240)
  })

  it('goes to the page it put the widget on', async () => {
    setUp(CSV)
    open()
    await flushPromises()

    tiles()[0].click()
    await flushPromises()
    button('Wizard.create').click()
    await flushPromises()

    expect(push).toHaveBeenCalledWith('/board/b1/pages/p1/edit')
  })

  /* Where a widget goes is part of making one, so it is always asked -
    including on a board that has a single page today. */
  it('asks which page, however many there are', async () => {
    setUp(['DataTable'], [{ id: 'p1', name: 'Erste' }])
    open()
    await flushPromises()
    expect(document.querySelector('select')).not.toBeNull()

    close()
    await flushPromises()
    for (const wrapper of mounted) wrapper.unmount()
    mounted = []

    setUp(['DataTable'], [
      { id: 'p1', name: 'Erste' },
      { id: 'p2', name: 'Zweite' },
    ])
    open()
    await flushPromises()
    const options = [...document.querySelectorAll('select option')].map((o) => o.textContent?.trim())
    expect(options).toEqual(['Erste', 'Zweite'])
  })

  it('puts the widget on the page that was picked', async () => {
    setUp(CSV, [
      { id: 'p1', name: 'Erste' },
      { id: 'p2', name: 'Zweite' },
    ])
    open()
    await flushPromises()

    tiles()[0].click()
    const select = document.querySelector('select') as HTMLSelectElement
    select.value = [...select.options].find((o) => o.textContent?.includes('Zweite'))!.value
    select.dispatchEvent(new Event('change'))
    await flushPromises()

    button('Wizard.create').click()
    await flushPromises()

    expect(addWidget.mock.calls[0][0]).toBe('p2')
    expect(push).toHaveBeenCalledWith('/board/b1/pages/p2/edit')
  })

  it('has nothing to offer when the board has no page', async () => {
    setUp(['DataTable'], [])
    open()
    await flushPromises()

    expect(tiles()).toHaveLength(0)
    expect(shown()).toContain('NewWidget.noPages')
  })
})
