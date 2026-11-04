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

import { describe, expect, it } from 'vitest'
import { defineComponent, h } from 'vue'
import { mount } from '@vue/test-utils'
import { identifier as PAGE_REPOSITORY, type StoredWidget } from 'org.eclipse.daanse.board.app.lib.api.page'
import {
  FilterOperator,
  SelectionPick,
  WorkspaceFactory,
  type Page,
  type Widget,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { useMoveableLayout } from '../composables/useMovableLayout'
import { useClipboardStore } from '../composables/useClipboardStore'

/*
 * A widget copied and pasted keeps the part of its source's answer it
 * takes (#1216) - as a selection of its own, not one shared with the
 * widget it was copied from.
 */

const factory = () => WorkspaceFactory.eINSTANCE

/** The page registry, as far as adding a widget to one page goes. */
function pages(page: Page) {
  return {
    getPage: () => page,
    addWidget(_pageId: string, stored: StoredWidget, placement: Record<string, number>) {
      const widget = factory().createWidget()
      widget.uid = stored.uid
      widget.type = stored.type
      widget.config = stored.config as never
      widget.wrapperConfig = stored.wrapperConfig as never
      page.widgets.push(widget)
      const item = factory().createLayoutItem()
      item.id = stored.uid
      Object.assign(item, { x: 0, y: 0, z: 0, width: 100, height: 100, ...placement })
      page.layout.push(item)
      return widget
    },
    removeWidget() {},
    saveWidget() {},
    setBoard() {},
  }
}

function boardWithOneWidget() {
  const page = factory().createPage()
  page.id = 'p1'
  const widget = factory().createWidget()
  widget.uid = 'w1'
  widget.type = 'TextWidget'
  widget.config = { datasourceId: 'ds', settings: {} } as never

  const selection = factory().createDataSelection()
  selection.path = 'readings'
  selection.pick = SelectionPick.FIRST
  selection.fields.push('value')
  const filter = factory().createDataFilter()
  filter.field = 'type'
  filter.operator = FilterOperator.EQUALS
  filter.value = 'temperature'
  selection.filters.push(filter)
  widget.selection = selection

  page.widgets.push(widget)
  const item = factory().createLayoutItem()
  Object.assign(item, { id: 'w1', x: 0, y: 0, z: 1, width: 100, height: 100 })
  page.layout.push(item)
  return { page, widget }
}

function layoutOn(page: Page) {
  let layout!: ReturnType<typeof useMoveableLayout>
  mount(
    defineComponent({
      setup() {
        layout = useMoveableLayout('p1')
        return () => h('div')
      },
    }),
    { global: { provide: { [PAGE_REPOSITORY as unknown as symbol]: pages(page) } } },
  )
  return layout
}

describe('copying a widget', () => {
  it('pastes it with the same selection', () => {
    const { page } = boardWithOneWidget()
    const layout = layoutOn(page)

    layout.copyWidget('w1')
    const uid = layout.pasteWidget(10, 10)!

    const pasted = page.widgets.toArray().find((w: Widget) => w.uid === uid)!
    const selection = pasted.selection!
    expect(selection.path).toBe('readings')
    expect(selection.pick).toBe(SelectionPick.FIRST)
    expect(selection.fields.toArray()).toEqual(['value'])
    expect(selection.filters.size()).toBe(1)
    expect(selection.filters.get(0).value).toBe('temperature')
    useClipboardStore().clear()
  })

  /*
   * Known: the generated setter of a single containment reference stores
   * the value and notifies, but does not make the widget its container -
   * only loading a stored board does. A defect of emfts-codegen,
   * eclipse-fennec/emf.ts.codegen#61; this turns green, and has to be made
   * a plain it, once it is
   * fixed.
   */
  it.fails('makes the pasted widget the container of its selection', () => {
    const { page } = boardWithOneWidget()
    const layout = layoutOn(page)

    layout.copyWidget('w1')
    const uid = layout.pasteWidget(10, 10)!
    const pasted = page.widgets.toArray().find((w: Widget) => w.uid === uid)!

    expect(pasted.selection!.eContainer()).toBe(pasted)
    useClipboardStore().clear()
  })

  it('gives the pasted widget a selection of its own', () => {
    const { page, widget } = boardWithOneWidget()
    const layout = layoutOn(page)

    layout.copyWidget('w1')
    /* Changed after copying: what is pasted is what was copied. */
    widget.selection!.filters.get(0).value = 'humidity'
    const firstUid = layout.pasteWidget(10, 10)
    const secondUid = layout.pasteWidget(20, 20)
    const first = page.widgets.toArray().find((w: Widget) => w.uid === firstUid)!
    const second = page.widgets.toArray().find((w: Widget) => w.uid === secondUid)!

    expect(first.selection!.filters.get(0).value).toBe('temperature')
    expect(first.selection).not.toBe(second.selection)
    first.selection!.path = 'elsewhere'
    expect(second.selection!.path).toBe('readings')
    expect(widget.selection!.path).toBe('readings')
    useClipboardStore().clear()
  })

  it('pastes a widget without a selection without one', () => {
    const { page, widget } = boardWithOneWidget()
    widget.selection = undefined as never
    const layout = layoutOn(page)

    layout.copyWidget('w1')
    const uid = layout.pasteWidget(10, 10)
    const pasted = page.widgets.toArray().find((w: Widget) => w.uid === uid)!

    expect(pasted.selection).toBeFalsy()
    useClipboardStore().clear()
  })
})
