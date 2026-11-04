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

import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, h } from 'vue'
import { mount, type VueWrapper } from '@vue/test-utils'
import { identifier as PAGE_REPOSITORY, type StoredWidget } from 'org.eclipse.daanse.board.app.lib.api.page'
import { WorkspaceFactory, type LayoutItem, type Page } from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { useMoveableLayout } from '../composables/useMovableLayout'
import { useClipboardStore } from '../composables/useClipboardStore'
import { COPIED_NOTICE_MS, useClipboardShortcuts, type BoardPoint } from '../composables/useClipboardShortcuts'
import ClipboardNotice from '../components/ClipboardNotice.vue'

/*
 * Ctrl+C and Ctrl+V on the board (#1225): a copied widget is pasted once
 * per press, beside the original when the pointer is not on the board -
 * and a field being typed into keeps its keys to itself.
 */

const factory = () => WorkspaceFactory.eINSTANCE

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
  page.widgets.push(widget)
  const item = factory().createLayoutItem()
  Object.assign(item, { id: 'w1', x: 48, y: 96, z: 1, width: 100, height: 100 })
  page.layout.push(item)
  return page
}

let mounted: VueWrapper | undefined

/** An editor as far as the clipboard goes: the base layout and its keys. */
let shortcuts!: ReturnType<typeof useClipboardShortcuts>

function editorOn(page: Page, pointer: () => BoardPoint | undefined = () => undefined) {
  let layout!: ReturnType<typeof useMoveableLayout>
  mounted = mount(
    defineComponent({
      setup() {
        layout = useMoveableLayout('p1', () => 24)
        shortcuts = useClipboardShortcuts({
          target: () => 'w1',
          copy: (uid) => layout.copyWidget(uid),
          paste: (at) => layout.pasteWidget(at?.x, at?.y),
          pointer,
        })
        return () => h('div')
      },
    }),
    { global: { provide: { [PAGE_REPOSITORY as unknown as symbol]: pages(page) } } },
  )
  return layout
}

function press(key: string, target: EventTarget = window) {
  target.dispatchEvent(new KeyboardEvent('keydown', { key, ctrlKey: true, bubbles: true, cancelable: true }))
}

const placements = (page: Page) =>
  page.layout.toArray().map((item: LayoutItem) => ({ id: item.id, x: item.x, y: item.y }))

afterEach(() => {
  vi.useRealTimers()
  mounted?.unmount()
  mounted = undefined
  useClipboardStore().clear()
  document.body.innerHTML = ''
})

describe('Ctrl+C and Ctrl+V on the board', () => {
  it('pastes a copied widget once, beside the original', () => {
    const page = boardWithOneWidget()
    editorOn(page)

    press('c')
    press('v')

    const placed = placements(page)
    expect(placed).toHaveLength(2)
    expect(placed[1]).toMatchObject({ x: 72, y: 120 })
    expect(placed[1].id).not.toBe('w1')
  })

  it('puts a second paste beside the first, not on top of it', () => {
    const page = boardWithOneWidget()
    editorOn(page)

    press('c')
    press('v')
    press('v')

    expect(placements(page).slice(1).map(({ x, y }) => ({ x, y }))).toEqual([
      { x: 72, y: 120 },
      { x: 96, y: 144 },
    ])
  })

  it('pastes at the pointer while it is over the board', () => {
    const page = boardWithOneWidget()
    editorOn(page, () => ({ x: 240, y: 312 }))

    press('c')
    press('v')

    expect(placements(page)[1]).toMatchObject({ x: 240, y: 312 })
  })

  it('leaves the board alone while a text field has the keys', () => {
    const page = boardWithOneWidget()
    editorOn(page)
    const field = document.createElement('input')
    document.body.appendChild(field)

    press('c')
    press('v', field)

    expect(placements(page)).toHaveLength(1)
  })

  it('does not copy from a text field either', () => {
    const page = boardWithOneWidget()
    editorOn(page)
    const field = document.createElement('textarea')
    document.body.appendChild(field)

    press('c', field)

    expect(useClipboardStore().hasClipboard).toBe(false)
  })

  it('pastes nothing before anything was copied', () => {
    const page = boardWithOneWidget()
    editorOn(page)

    press('v')

    expect(placements(page)).toHaveLength(1)
  })
})

describe('the notice after a copy', () => {
  it('says how to paste, for a while', () => {
    vi.useFakeTimers()
    editorOn(boardWithOneWidget())
    expect(shortcuts.copiedNotice.value).toBe(false)

    press('c')
    expect(shortcuts.copiedNotice.value).toBe(true)

    vi.advanceTimersByTime(COPIED_NOTICE_MS)
    expect(shortcuts.copiedNotice.value).toBe(false)
  })

  it('shows for a copy from the menu as well', () => {
    editorOn(boardWithOneWidget())

    shortcuts.copy('w1')

    expect(shortcuts.copiedNotice.value).toBe(true)
  })

  it('goes once the widget is pasted', () => {
    editorOn(boardWithOneWidget())

    press('c')
    press('v')

    expect(shortcuts.copiedNotice.value).toBe(false)
  })

  it('names the key and the right click', () => {
    const translator = {
      t: (key: string, values?: Record<string, string>) =>
        key === 'layoutsBase:Clipboard.copied' ? `Kopiert – ${values?.shortcut} oder Rechtsklick aufs Board` : 'Strg+V',
    }
    const notice = mount(ClipboardNotice, {
      props: { shown: true },
      global: { provide: { i18n: translator, i18next: translator } },
    })

    expect(notice.get('[role="status"]').text()).toContain('Rechtsklick')
    notice.unmount()
  })
})

describe('the paste in the top bar', () => {
  it('learns from the root element that there is something to paste', () => {
    editorOn(boardWithOneWidget())
    expect(document.documentElement.hasAttribute('data-board-clipboard')).toBe(false)

    press('c')
    expect(document.documentElement.getAttribute('data-board-clipboard')).toBe('full')

    useClipboardStore().clear()
    expect(document.documentElement.hasAttribute('data-board-clipboard')).toBe(false)
  })

  it('pastes beside the original when it asks', () => {
    const page = boardWithOneWidget()
    editorOn(page, () => ({ x: 240, y: 312 }))

    press('c')
    window.dispatchEvent(new CustomEvent('daanse:board-paste'))

    const placed = placements(page)
    expect(placed).toHaveLength(2)
    expect(placed[1]).toMatchObject({ x: 72, y: 120 })
  })
})
