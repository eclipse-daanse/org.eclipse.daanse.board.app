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
import type { DataSelection } from 'org.eclipse.daanse.board.app.lib.model.workspace'

/**
 * What was copied, as plain data.
 *
 * A snapshot rather than the modelled objects: a clipboard holds a copy,
 * and pasting one twice has to make two widgets.
 */
export interface IClipboardItem {
  widget: Omit<StoredWidget, 'uid'>
  layout: Omit<StoredLayoutItem, 'id'>
  /**
   * The part of its source's answer the widget takes (#1216) - a copy of
   * its own, made when it was copied, so a later edit of the original
   * does not reach what is pasted.
   */
  selection?: DataSelection
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

/*
 * How often what is held has been pasted. A paste that has no pointer to
 * go to lands beside the original, and the next one beside that - not
 * all of them on the same spot, where they look like one widget.
 */
let timesPasted = 0

/*
 * Whether there is something to paste, said on the root element.
 *
 * The top bar offers "Einfügen" while there is (#1225), and the top bar is
 * the shell's, a different bundle - the same way the snap switch travels
 * the other way, an attribute rather than a module both would have to
 * depend on. The bar asks for a paste with the event below.
 */
export const CLIPBOARD_ATTRIBUTE = 'data-board-clipboard'
export const PASTE_REQUEST_EVENT = 'daanse:board-paste'

function announce() {
  if (typeof document === 'undefined') return
  if (clipboardItem.value) document.documentElement.setAttribute(CLIPBOARD_ATTRIBUTE, 'full')
  else document.documentElement.removeAttribute(CLIPBOARD_ATTRIBUTE)
}

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
    /** Pastes made since the last copy. */
    get timesPasted() {
      return timesPasted
    },
    copy(widget: Omit<StoredWidget, 'uid'>, layout: Omit<StoredLayoutItem, 'id'>, selection?: DataSelection) {
      clipboardItem.value = { widget, layout, selection }
      timesPasted = 0
      announce()
    },
    paste() {
      if (clipboardItem.value) timesPasted += 1
      return clipboardItem.value
    },
    clear() {
      clipboardItem.value = null
      timesPasted = 0
      announce()
    },
  }
}
