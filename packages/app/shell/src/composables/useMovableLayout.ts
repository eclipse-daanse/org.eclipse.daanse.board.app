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
}

import { ref, type Ref } from 'vue'
import type { OnDrag, OnResize } from 'vue3-moveable'

export function useMoveableLayout(localLayoutItems: Ref<ILayoutItem[]>) {
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
    const dropX = clientX - left
    const dropY = clientY - top

    return { dropX, dropY }
  }

  const processDragOverCoordinates = (event: DragEvent, container: HTMLElement) => {
    const { clientX, clientY } = event
    const { left, top } = container.getBoundingClientRect()
    const ghostX = clientX - left
    const ghostY = clientY - top

    ghostPlaceholder.value.x = ghostX - ghostPlaceholder.value.width / 2
    ghostPlaceholder.value.y = ghostY - ghostPlaceholder.value.height / 2
    ghostPlaceholder.value.visible = true
  }

  const hidePlaceholder = () => {
    ghostPlaceholder.value.visible = false
  }

  const getInitialStyle = (id: string) => {
    const item = localLayoutItems.value.find((item: ILayoutItem) => item.id === id)
    if (!item) return {}

    return {
      width: `${item.width}px`,
      height: `${item.height}px`,
      transform: `translate(${item.x}px, ${item.y}px)`,
      'z-index': item.z,
    }
  }

  const getMovableControlStyles = (id: string) => {
    const item = localLayoutItems.value.find((item: ILayoutItem) => item.id === id)
    if (!item) return {}

    return {
      'z-index': item.z,
    }
  }

  const drag = (id: string, e: OnDrag) => {
    const item = localLayoutItems.value.find((item: ILayoutItem) => item.id === id)
    if (!item) return

    item.x = e.translate[0]
    item.y = e.translate[1]

    e.target.style.transform = e.transform
  }

  const resize = (id: string, e: OnResize) => {
    const item = localLayoutItems.value.find((item: ILayoutItem) => item.id === id)
    if (!item) return

    item.width = e.width
    item.height = e.height
    item.x = e.drag.translate[0]
    item.y = e.drag.translate[1]

    e.target.style.width = `${e.width}px`
    e.target.style.height = `${e.height}px`
    e.target.style.transform = e.drag.transform
  }

  const moveUp = (id: string) => {
    const item = localLayoutItems.value.find((item: ILayoutItem) => item.id === id)
    if (!item) return

    item.z += 1
  }

  const moveToTop = (id: string) => {
    const zIndexMax = Math.max(...localLayoutItems.value.map((item: ILayoutItem) => item.z))
    const item = localLayoutItems.value.find((item: ILayoutItem) => item.id === id)
    if (!item) return

    item.z = zIndexMax + 1
  }

  const moveDown = (id: string) => {
    const item = localLayoutItems.value.find((item: ILayoutItem) => item.id === id)
    if (!item) return

    item.z -= 1
  }

  const moveToBottom = (id: string) => {
    const zIndexMin = Math.min(...localLayoutItems.value.map((item: ILayoutItem) => item.z))
    const item = localLayoutItems.value.find((item: ILayoutItem) => item.id === id)
    if (!item) return

    item.z = zIndexMin - 1
  }

  return {
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
  }
}
