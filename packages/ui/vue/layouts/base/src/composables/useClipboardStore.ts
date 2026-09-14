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
import { ref } from 'vue'
import type { StoredWidget, StoredLayoutItem } from 'org.eclipse.daanse.board.app.lib.api.page'

/**
 * What was copied, as plain data.
 *
 * A snapshot rather than the modelled objects: a clipboard holds a copy,
 * and pasting one twice has to make two widgets.
 */
export interface IClipboardItem {
  widget: Omit<StoredWidget, 'uid'>
  layout: Omit<StoredLayoutItem, 'id'>
}

/*
 * One clipboard for the whole application, at module scope.
 *
 * It is the last thing that needed a store, and a store is more than it
 * needs: one value, read and written from two places, living as long as
 * the tab does. Copying on one board and pasting on another works because
 * this ref is the module's, not a component's.
 */
const clipboardItem = ref<IClipboardItem | null>(null)

/**
 * The clipboard, as the two callers already ask for it.
 *
 * Getters rather than refs: a store unwrapped its refs on the way out, so
 * `clipboard.hasClipboard` read as a boolean in a template and in a
 * condition. Handing back the refs themselves would have left both places
 * reading an object that is always truthy - and saying nothing about it.
 */
export function useClipboardStore() {
  return {
    get clipboardItem() {
      return clipboardItem.value
    },
    get hasClipboard() {
      return clipboardItem.value !== null
    },
    copy(widget: Omit<StoredWidget, 'uid'>, layout: Omit<StoredLayoutItem, 'id'>) {
      clipboardItem.value = { widget, layout }
    },
    paste() {
      return clipboardItem.value
    },
    clear() {
      clipboardItem.value = null
    },
  }
}
