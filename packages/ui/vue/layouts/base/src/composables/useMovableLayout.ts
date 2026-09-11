/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *———
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

/**
 * Where a widget sits.
 *
 * The model's, now that the layout is part of the workspace. The name
 * stays: it is what every layout in this repo imports.
 */
export type ILayoutItem = LayoutItem

import { ref } from 'vue'
import type { OnDrag, OnResize } from 'vue3-moveable'
import { useBoard } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import type { LayoutItem, StoredWidget } from 'org.eclipse.daanse.board.app.lib.api.page'
import { useClipboardStore } from './useClipboardStore'
import { cloneDeep } from 'lodash'

/**
 * @param gridSize how far apart the grid is, or 0 to place freely. Read on
 *   every drag rather than passed once, so the switch takes effect at once.
 */
export function useMoveableLayout(pageId: string = '', gridSize: () => number = () => 0) {
  /*
   * One board, both halves. The widgets and their placement used to be two
   * stores, and adding a widget wrote to each in turn - a widget could be
   * on the board and nowhere on it.
   */
  const board = useBoard(pageId)

  /*
   * Lands the value on the grid.
   *
   * The rounding is done here rather than left to Moveable's own snapping:
   * that only catches within a few pixels of a line, so on a 24px grid a
   * widget came to rest wherever it was dropped four times out of five, and
   * the setting felt like it did nothing. Asked to line up with the grid, a
   * widget lines up with it.
   */
  const toGrid = (value: number) => {
    const grid = gridSize()
    return grid > 0 ? Math.round(value / grid) * grid : value
  }
  const clipboardStore = useClipboardStore()

  const ghostPlaceholder = ref({
    x: 0,
    y: 0,
    width: 300,
    height: 150,
    visible: false,
  })

  const processDropCoordinates = (event: DragEvent, container: HTMLElement) => {
    const { clientX, clientY } = event
    const { left, top } = container.getBoundingClientRect()

    // A widget put down lines up the same way one dragged does - otherwise
    // the first thing on a board is the one thing off the grid
    return { dropX: toGrid(clientX - left), dropY: toGrid(clientY - top) }
  }

  const processDragOverCoordinates = (event: DragEvent, container: HTMLElement) => {
    const { clientX, clientY } = event
    const { left, top } = container.getBoundingClientRect()
    const ghostX = clientX - left
    const ghostY = clientY - top

    // The outline shows where it will land, so it lands where the outline is
    ghostPlaceholder.value.x = toGrid(ghostX - ghostPlaceholder.value.width / 2)
    ghostPlaceholder.value.y = toGrid(ghostY - ghostPlaceholder.value.height / 2)
    ghostPlaceholder.value.visible = true
  }

  const hidePlaceholder = () => {
    ghostPlaceholder.value.visible = false
  }

  const getInitialStyle = (id: string) => {
    const item = board.layout.value.find((item: ILayoutItem) => item.id === id)
    if (!item) return {}

    return {
      width: `${item.width}px`,
      height: `${item.height}px`,
      transform: `translate(${item.x}px, ${item.y}px)`,
      'z-index': item.z,
    }
  }

  const getMovableControlStyles = (id: string) => {
    const item = board.layout.value.find((item: ILayoutItem) => item.id === id)
    if (!item) return {}

    return {
      'z-index': item.z,
    }
  }

  const drag = (id: string, e: OnDrag) => {
    const item = board.layout.value.find((item: ILayoutItem) => item.id === id)
    if (!item) return

    item.x = toGrid(e.translate[0])
    item.y = toGrid(e.translate[1])

    // The element follows the value that was stored, not the raw drag
    e.target.style.transform = `translate(${item.x}px, ${item.y}px)`
  }

  const resize = (id: string, e: OnResize) => {
    const item = board.layout.value.find((item: ILayoutItem) => item.id === id)
    if (!item) return

    // Size lands on the grid too: an edge between two dots is as crooked
    // as a corner between them
    item.width = toGrid(e.width)
    item.height = toGrid(e.height)
    item.x = toGrid(e.drag.translate[0])
    item.y = toGrid(e.drag.translate[1])

    e.target.style.width = `${item.width}px`
    e.target.style.height = `${item.height}px`
    e.target.style.transform = `translate(${item.x}px, ${item.y}px)`
  }

  const moveUp = (id: string) => {
    const item = board.layout.value.find((item: ILayoutItem) => item.id === id)
    if (!item) return

    item.z += 1
  }

  const moveToTop = (id: string) => {
    const zIndexMax = Math.max(...board.layout.value.map((item: ILayoutItem) => item.z))
    const item = board.layout.value.find((item: ILayoutItem) => item.id === id)
    if (!item) return

    item.z = zIndexMax + 1
  }

  const moveDown = (id: string) => {
    const item = board.layout.value.find((item: ILayoutItem) => item.id === id)
    if (!item) return

    item.z -= 1
  }

  const moveToBottom = (id: string) => {
    const zIndexMin = Math.min(...board.layout.value.map((item: ILayoutItem) => item.z))
    const item = board.layout.value.find((item: ILayoutItem) => item.id === id)
    if (!item) return

    item.z = zIndexMin - 1
  }

  const addWidget = (type: any, config: any = {}, wrapperConfig: any = {}, layoutConfig: Partial<ILayoutItem> = {}) => {
    const widget: StoredWidget = {
      uid: '',
      type,
      config: { datasourceId: config?.datasourceId, settings: { ...(config?.settings ?? {}) } },
      wrapperConfig,
    }
    return board.addWidget(widget, layoutConfig)
  }

  /* The placement goes with it - that is one call now, not two. */
  const removeWidget = (id: string) => {
    board.removeWidget(id)
  }

  const copyWidget = (widgetId: string) => {
    const widget = board.widgets.value.find((w: { uid?: string }) => w.uid === widgetId)
    const layoutItem = board.layout.value.find((l: ILayoutItem) => l.id === widgetId)
    if (widget && layoutItem) {
      /* A snapshot, feature by feature: a modelled object keeps its values
         in private fields, so spreading one copies _uid, not uid. */
      clipboardStore.copy(
        {
          type: widget.type as string,
          config: cloneDeep(widget.config ?? {}) as StoredWidget['config'],
          wrapperConfig: cloneDeep(widget.wrapperConfig ?? {}) as Record<string, any>,
        },
        {
          x: layoutItem.x,
          y: layoutItem.y,
          z: layoutItem.z,
          width: layoutItem.width,
          height: layoutItem.height,
          group: layoutItem.group,
        },
      )
    }
  }

  const pasteWidget = (x: number, y: number) => {
    const clipboard = clipboardStore.paste()
    if (!clipboard) return null

    const newUid = 'li_' + Math.random().toString(36).substring(7)
    const maxZ = Math.max(...board.layout.value.map((item: ILayoutItem) => item.z), 0)

    const copied = cloneDeep(clipboard.widget)
    const settings = { ...(copied.config?.settings ?? {}), name: 'widget_' + newUid }

    board.addWidget(
      {
        uid: newUid,
        type: copied.type,
        config: { datasourceId: copied.config?.datasourceId, settings },
        wrapperConfig: copied.wrapperConfig,
      },
      { ...clipboard.layout, id: newUid, x, y, z: maxZ + 1 },
    )
    return newUid
  }

  return {
    board,
    clipboardStore,
    ghostPlaceholder,
    processDropCoordinates,
    processDragOverCoordinates,
    hidePlaceholder,
    getInitialStyle,
    getMovableControlStyles,
    drag,
    resize,
    moveUp,
    moveDown,
    moveToTop,
    moveToBottom,
    addWidget,
    removeWidget,
    copyWidget,
    pasteWidget,
  }
}
