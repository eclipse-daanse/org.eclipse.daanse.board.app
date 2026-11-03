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
import { identifier as DATASOURCE_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { identifier as WIDGET_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.widget'
import {
  DatasourceImpl,
  identifier as WORKSPACE,
  WorkspaceImpl,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import AddWidgetWindow from '../AddWidgetWindow.vue'

/* vuedraggable wants a real drag environment; the list it is given is
  what matters here, so it is rendered as a plain list. */
vi.mock('vuedraggable', () => ({
  default: {
    name: 'Draggable',
    props: ['list', 'group', 'itemKey'],
    template: `<div class="draggable">
      <template v-for="element in list" :key="element.type">
        <slot name="item" :element="element" />
      </template>
    </div>`,
  },
}))

const WIDGETS = {
  datatable: { name: 'DataTable', icon: 'data:,table', reads: ['DataTable'] },
  gauge: { name: 'Gauge', icon: 'data:,gauge', reads: ['object'] },
  markdown: { name: 'Markdown', icon: 'data:,md', reads: 'none' },
}

/** What each source type answers, as its registration declares it. */
const ANSWERS: Record<string, string[]> = {
  csv: ['DataTable', 'string'],
  rest: ['DataTable', 'object', 'string'],
}

function setUp(widgets: Record<string, unknown> = WIDGETS) {
  const workspace = new WorkspaceImpl()
  for (const [uid, name, type] of [
    ['ds1', 'Auslastung', 'csv'],
    ['ds2', 'Posts', 'rest'],
  ]) {
    const source = new DatasourceImpl()
    source.uid = uid
    source.name = name
    source.type = type
    workspace.datasources.push(source)
  }

  return mount(AddWidgetWindow, {
    global: {
      provide: {
        [WORKSPACE as symbol]: workspace,
        [WIDGET_REPOSITORY as symbol]: {
          getAllWidgets: () => widgets,
          onChange: () => () => {},
        },
        [DATASOURCE_REPOSITORY as symbol]: {
          getDatasourceIdentifiers: (type: string) => ({ answers: ANSWERS[type] }),
        },
      },
    },
  })
}

/** The widget entries the palette is currently offering. */
function offered(wrapper: ReturnType<typeof mount>) {
  return wrapper.findAll('.widgets_grid-name').map((each) => each.text())
}

/*
 * Picked by the words it shows, not by the value: DSelect numbers its
 * options and maps back internally, so the option values are indices.
 */
async function pick(wrapper: ReturnType<typeof mount>, label: string) {
  const select = wrapper.find('select')
  const option = select.findAll('option').find((each) => each.text().includes(label))
  if (!option) throw new Error(`no option "${label}"`)
  await select.setValue(option.element.value)
  await flushPromises()
}

describe('AddWidgetWindow', () => {
  it('offers every widget while no source is picked', async () => {
    const wrapper = setUp()
    await flushPromises()

    expect(offered(wrapper)).toEqual(['DataTable', 'Gauge', 'Markdown'])
  })

  /*
   * The point of #1184's second half: the palette asked nothing about the
   * data, so a widget was dragged onto a board and then told where to read
   * from, in a second dialog, from a list of every source there is.
   */
  it('offers only what can show the picked source', async () => {
    const wrapper = setUp()
    await pick(wrapper, 'Auslastung')

    /* csv answers DataTable and string - not object, which the gauge reads. */
    expect(offered(wrapper)).toEqual(['DataTable'])

    await pick(wrapper, 'Posts')
    expect(offered(wrapper)).toEqual(['DataTable', 'Gauge'])
  })

  it('never offers a widget that shows no data at all', async () => {
    const wrapper = setUp()
    await pick(wrapper, 'Posts')

    expect(offered(wrapper)).not.toContain('Markdown')
  })

  /*
   * What the board reads off a dropped item. The grid editor has taken a
   * datasourceId from one since before anything put one there.
   */
  it('sends the picked source along with what is dragged', async () => {
    const wrapper = setUp()
    await flushPromises()

    const withoutSource = (wrapper.vm as any).computedWidgets as Array<Record<string, unknown>>
    expect(withoutSource.every((each) => each.datasourceId === undefined)).toBe(true)

    await pick(wrapper, 'Posts')
    const withSource = (wrapper.vm as any).computedWidgets as Array<Record<string, unknown>>
    expect(withSource.length).toBeGreaterThan(0)
    expect(withSource.every((each) => each.datasourceId === 'ds2')).toBe(true)
  })

  /* Registered afresh rather than taken away mid-flight: the palette
    re-reads its widgets when a registration changes, not when a test
    mutates the map it was handed. */
  it('says so when nothing fits', async () => {
    const wrapper = setUp({ gauge: WIDGETS.gauge })
    await pick(wrapper, 'Auslastung')

    /* csv answers DataTable and string; the gauge reads object. */
    expect(offered(wrapper)).toEqual([])
    expect(wrapper.find('.add_widget_window__none').exists()).toBe(true)
  })
})
