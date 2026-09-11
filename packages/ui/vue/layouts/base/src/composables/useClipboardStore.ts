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
import type { StoredWidget, StoredLayoutItem } from 'org.eclipse.daanse.board.app.lib.api.page'

/**
 * What was copied, as plain data.
 *
 * A snapshot rather than the modelled objects: a clipboard holds a copy,
 * and pasting one twice has to make two widgets. This is also the one
 * thing here that is genuinely view state and not the workspace - which is
 * why it is still a store.
 */
export interface IClipboardItem {
  widget: Omit<StoredWidget, 'uid'>
  layout: Omit<StoredLayoutItem, 'id'>
}

// Global clipboard store (not per-page) for cross-page copy/paste
export const useClipboardStore = defineStore('widget-clipboard', () => {
  const clipboardItem = ref<IClipboardItem | null>(null)

  const hasClipboard = computed(() => clipboardItem.value !== null)

  const copy = (widget: Omit<StoredWidget, 'uid'>, layout: Omit<StoredLayoutItem, 'id'>) => {
    clipboardItem.value = { widget, layout }
  }

  const paste = () => clipboardItem.value

  const clear = () => {
    clipboardItem.value = null
  }

  return { clipboardItem, hasClipboard, copy, paste, clear }
})
