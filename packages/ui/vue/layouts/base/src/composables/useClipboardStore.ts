/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
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

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { IWidget } from 'org.eclipse.daanse.board.app.ui.vue.stores.widgets'
import type { ILayoutItem } from './useMovableLayout'

export interface IClipboardItem {
  widget: Omit<IWidget, 'uid'>
  layout: Omit<ILayoutItem, 'id'>
}

// Global clipboard store (not per-page) for cross-page copy/paste
export const useClipboardStore = defineStore('widget-clipboard', () => {
  const clipboardItem = ref<IClipboardItem | null>(null)

  const hasClipboard = computed(() => clipboardItem.value !== null)

  const copy = (widget: IWidget, layout: ILayoutItem) => {
    // Remove uid and id to create clean copies
    const { uid, ...widgetWithoutUid } = widget
    const { id, ...layoutWithoutId } = layout
    clipboardItem.value = {
      widget: widgetWithoutUid as Omit<IWidget, 'uid'>,
      layout: layoutWithoutId as Omit<ILayoutItem, 'id'>
    }
  }

  const paste = () => clipboardItem.value

  const clear = () => {
    clipboardItem.value = null
  }

  return { clipboardItem, hasClipboard, copy, paste, clear }
})
