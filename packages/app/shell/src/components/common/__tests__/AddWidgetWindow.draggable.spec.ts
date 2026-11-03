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
 * The palette against the real draggable (#1165).
 *
 * AddWidgetWindow.spec.ts stubs vuedraggable, which renders the item slot
 * whatever is in it - so it never saw that draggable itself demands
 * exactly one child there. A comment above the row is a node like any
 * other, and one of those turned every row into the text "Item slot must
 * have only one child". The whole palette rendered as an error message,
 * and the only test that caught it was in another file, about something
 * else.
 *
 * So: one test that mounts the thing as the application does.
 */

import { describe, expect, it } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import {
  DatasourceImpl,
  WorkspaceImpl,
  identifier as WORKSPACE,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { identifier as WIDGET_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.widget'
import { identifier as DATASOURCE_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import AddWidgetWindow from '../AddWidgetWindow.vue'

const WIDGETS = {
  datatable: { name: 'DataTable', icon: 'data:,table', reads: ['DataTable'] },
  gauge: { name: 'Gauge', icon: 'data:,gauge', reads: ['object'] },
}

function setUp() {
  const workspace = new WorkspaceImpl()
  const source = new DatasourceImpl()
  source.uid = 'ds1'
  source.name = 'Auslastung'
  source.type = 'csv'
  workspace.datasources.push(source)

  return mount(AddWidgetWindow, {
    global: {
      provide: {
        [WORKSPACE as symbol]: workspace,
        [WIDGET_REPOSITORY as symbol]: {
          getAllWidgets: () => WIDGETS,
          onChange: () => () => {},
        },
        [DATASOURCE_REPOSITORY as symbol]: {
          getDatasourceIdentifiers: () => ({ answers: ['DataTable', 'string'] }),
        },
        [identifiers.TINY_EMITTER]: { emit: () => {}, on: () => {}, off: () => {} },
      },
    },
  })
}

describe('the palette, mounted the way the application mounts it', () => {
  it('draws its rows rather than a complaint about the item slot', async () => {
    const wrapper = setUp()
    await flushPromises()

    expect(wrapper.text()).not.toContain('Item slot')
    expect(wrapper.findAll('button.widgets_grid-item')).toHaveLength(2)
    expect(wrapper.text()).toContain('DataTable')
    expect(wrapper.text()).toContain('Gauge')
  })

  /* Both halves of what the row is: draggable as it always was, and a
    button so it can be reached without a pointer. */
  it('keeps each row draggable and a button at once', async () => {
    const wrapper = setUp()
    await flushPromises()

    for (const row of wrapper.findAll('.widgets_grid-item')) {
      expect(row.element.tagName).toBe('BUTTON')
      expect(row.attributes('draggable')).toBe('true')
    }
  })
})
