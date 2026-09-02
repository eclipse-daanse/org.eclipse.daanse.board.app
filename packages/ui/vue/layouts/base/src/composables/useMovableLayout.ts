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

export interface ILayoutItem {
  id: string
  width: number
  height: number
  x: number
  y: number
  z: number
  /**
   * Which group it belongs to, if any.
   *
   * Widgets that say the same thing together - a chart and the number
   * beside it - are moved and picked as one. Kept on the item rather than
   * in a list of its own, so a group travels with the layout it describes
   * and a widget that is removed takes its membership with it.
   */
  group?: string
}

import { ref } from 'vue'
import type { OnDrag, OnResize } from 'vue3-moveable'
import { useLayoutStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.layout'
import { useWidgetsStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.widgets'
import { useClipboardStore } from './useClipboardStore'
import { cloneDeep } from 'lodash'

/**
 * @param gridSize how far apart the grid is, or 0 to place freely. Read on
 *   every drag rather than passed once, so the switch takes effect at once.
 */
export function useMoveableLayout(pageId: string = '', gridSize: () => number = () => 0) {
  const layoutStore = useLayoutStore(pageId)

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
  const widgetStore = useWidgetsStore(pageId)
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
    const item = layoutStore?.layout?.find((item: ILayoutItem) => item.id === id)
    if (!item) return {}

    return {
      width: `${item.width}px`,
      height: `${item.height}px`,
      transform: `translate(${item.x}px, ${item.y}px)`,
      'z-index': item.z,
    }
  }

  const getMovableControlStyles = (id: string) => {
    const item = layoutStore.layout.find((item: ILayoutItem) => item.id === id)
    if (!item) return {}

    return {
      'z-index': item.z,
    }
  }

  const drag = (id: string, e: OnDrag) => {
    const item = layoutStore.layout.find((item: ILayoutItem) => item.id === id)
    if (!item) return

    item.x = toGrid(e.translate[0])
    item.y = toGrid(e.translate[1])

    // The element follows the value that was stored, not the raw drag
    e.target.style.transform = `translate(${item.x}px, ${item.y}px)`
  }

  const resize = (id: string, e: OnResize) => {
    const item = layoutStore.layout.find((item: ILayoutItem) => item.id === id)
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
    const item = layoutStore.layout.find((item: ILayoutItem) => item.id === id)
    if (!item) return

    item.z += 1
  }

  const moveToTop = (id: string) => {
    const zIndexMax = Math.max(...layoutStore.layout.map((item: ILayoutItem) => item.z))
    const item = layoutStore.layout.find((item: ILayoutItem) => item.id === id)
    if (!item) return

    item.z = zIndexMax + 1
  }

  const moveDown = (id: string) => {
    const item = layoutStore.layout.find((item: ILayoutItem) => item.id === id)
    if (!item) return

    item.z -= 1
  }

  const moveToBottom = (id: string) => {
    const zIndexMin = Math.min(...layoutStore.layout.map((item: ILayoutItem) => item.z))
    const item = layoutStore.layout.find((item: ILayoutItem) => item.id === id)
    if (!item) return

    item.z = zIndexMin - 1
  }

  const addWidget = (type: any, config: any = {}, wrapperConfig: any = {}, layoutConfig: Partial<ILayoutItem> = {}) => {
    const uid = widgetStore.createWidget(type, config, wrapperConfig)

    const defaultLayout: ILayoutItem = {
      id: uid,
      width: layoutConfig.width || 300,
      height: layoutConfig.height || 150,
      x: layoutConfig.x || 0,
      y: layoutConfig.y || 0,
      z: layoutConfig.z || Math.max(...layoutStore.layout.map((item:any) => item.z), 0) + 1,
    }

    layoutStore.layout.push(defaultLayout)
    return uid
  }

  const removeWidget = (id: string) => {
    widgetStore.removeWidget(id)
    const layoutIndex = layoutStore.layout.findIndex((item:any) => item.id === id)
    if (layoutIndex > -1) {
      layoutStore.layout.splice(layoutIndex, 1)
    }
  }

  const copyWidget = (widgetId: string) => {
    const widget = widgetStore.widgets.find((w: any) => w.uid === widgetId)
    const layoutItem = layoutStore.layout.find((l: ILayoutItem) => l.id === widgetId)
    if (widget && layoutItem) {
      clipboardStore.copy(widget, layoutItem)
    }
  }

  const pasteWidget = (x: number, y: number) => {
    const clipboard = clipboardStore.paste()
    if (!clipboard) return null

    const newUid = 'li_' + Math.random().toString(36).substring(7)
    const maxZ = Math.max(...layoutStore.layout.map((item: ILayoutItem) => item.z), 0)

    // Clone widget with new UID
    const newWidget = cloneDeep(clipboard.widget) as any
    newWidget.uid = newUid
    if (newWidget.config?.settings) {
      newWidget.config.settings.name = 'widget_' + newUid
    }

    // Clone layout with new position
    const newLayout: ILayoutItem = {
      ...clipboard.layout,
      id: newUid,
      x: x,
      y: y,
      z: maxZ + 1
    }

    widgetStore.widgets.push(newWidget)
    layoutStore.layout.push(newLayout)
    return newUid
  }

  return {
    layoutStore,
    widgetStore,
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
