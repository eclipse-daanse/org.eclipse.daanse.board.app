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
import { onMounted, onUnmounted, ref } from 'vue'
import { PASTE_REQUEST_EVENT, useClipboardStore } from './useClipboardStore'

/** A point on the board, in the board's own pixels. */
export interface BoardPoint {
  x: number
  y: number
}

/**
 * What a layout tells the shortcuts about itself. Every layout places a
 * widget its own way; the keys, and when they are left alone, are the
 * same for all of them - which is why they live here (#1225).
 */
export interface ClipboardShortcutOptions {
  /** The widget Ctrl+C copies - the one picked, or none. */
  target: () => string | undefined
  /** Copies a widget onto the clipboard. */
  copy: (uid: string) => void
  /**
   * Pastes what the clipboard holds: at the point given, or - given none -
   * beside the widget it was copied from.
   */
  paste: (at: BoardPoint | undefined) => void
  /** Where the pointer is on the board, or nothing when it is not over it. */
  pointer: () => BoardPoint | undefined
}

/**
 * Whether a key pressed here was meant for the text being typed.
 *
 * Ctrl+V in a settings field pastes into the field; taking it for the
 * board would paste a widget while someone fills in a title.
 */
export function isTextEntry(target: EventTarget | null): boolean {
  const element = target as HTMLElement | null
  if (!element || typeof element.closest !== 'function') return false
  if (element.isContentEditable) return true
  return Boolean(element.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])'))
}

/**
 * Ctrl/Cmd+C copies the picked widget, Ctrl/Cmd+V pastes it.
 *
 * Listened for on the window while the editor is mounted, the same way the
 * undo keys are: focus is wherever it was last clicked, rarely on the board.
 */
/** How long the notice after a copy stays up. */
export const COPIED_NOTICE_MS = 4000

export function useClipboardShortcuts(options: ClipboardShortcutOptions) {
  const clipboard = useClipboardStore()

  /*
   * A copy changes nothing one can see, so it says what it did and where
   * the way to paste is - the right click on the board was told to nobody.
   * Every copy, by key or from a menu, goes through here for that reason.
   */
  const copiedNotice = ref(false)
  let noticeTimer: ReturnType<typeof setTimeout> | undefined

  const hideNotice = () => {
    clearTimeout(noticeTimer)
    noticeTimer = undefined
    copiedNotice.value = false
  }

  const copy = (uid: string) => {
    options.copy(uid)
    if (!clipboard.hasClipboard) return
    clearTimeout(noticeTimer)
    copiedNotice.value = true
    noticeTimer = setTimeout(hideNotice, COPIED_NOTICE_MS)
  }

  const paste = (at: BoardPoint | undefined) => {
    if (!clipboard.hasClipboard) return
    /* Pasted: the way to paste has been found, the notice has done its job. */
    hideNotice()
    options.paste(at)
  }

  function onKey(event: KeyboardEvent) {
    if (!(event.ctrlKey || event.metaKey) || event.altKey || event.shiftKey) return
    if (event.defaultPrevented || isTextEntry(event.target)) return

    const key = event.key.toLowerCase()
    if (key === 'c') {
      /* Text marked on a widget is copied as text, as anywhere else. */
      if (window.getSelection?.()?.toString()) return
      const uid = options.target()
      if (!uid) return
      event.preventDefault()
      copy(uid)
    } else if (key === 'v') {
      if (!clipboard.hasClipboard) return
      event.preventDefault()
      paste(options.pointer())
    }
  }

  /* "Einfügen" in the top bar: the pointer is up there, not on the board. */
  const onPasteRequest = () => paste(undefined)

  onMounted(() => {
    window.addEventListener('keydown', onKey)
    window.addEventListener(PASTE_REQUEST_EVENT, onPasteRequest)
  })
  onUnmounted(() => {
    window.removeEventListener('keydown', onKey)
    window.removeEventListener(PASTE_REQUEST_EVENT, onPasteRequest)
    hideNotice()
  })

  return { copy, paste, copiedNotice, hideNotice }
}
