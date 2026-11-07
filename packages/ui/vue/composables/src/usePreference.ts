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

/**
 * A preference of the reader, not of the board (#1291).
 *
 * Kept in this browser's storage, so it follows the person rather than the
 * board they open, and a board cannot turn it on for them. Shared by every
 * component that asks - one value per key in the page - and followed
 * across tabs through the storage event.
 */
import { ref, type Ref } from 'vue'

/**
 * Advanced editing: forms that can show what they compile to also offer
 * the raw text, for readers who want to go further than the form. Off
 * unless the reader turns it on.
 */
export const ADVANCED_EDITING = 'daanse.board.advancedEditing'

const held = new Map<string, Ref<boolean>>()

function read(key: string, fallback: boolean): boolean {
  try {
    const stored = globalThis.localStorage?.getItem(key)
    return stored === null || stored === undefined ? fallback : stored === 'on'
  } catch {
    // Private windows and cleared site data are normal, not an error
    return fallback
  }
}

let listening = false
function listen() {
  if (listening || typeof window === 'undefined') return
  listening = true
  window.addEventListener('storage', (event) => {
    const preference = event.key ? held.get(event.key) : undefined
    if (preference) preference.value = event.newValue === 'on'
  })
}

/** The preference under this key, and a way to set it. */
export function usePreference(key: string, fallback = false): { value: Ref<boolean>; set: (on: boolean) => void } {
  listen()
  let preference = held.get(key)
  if (!preference) {
    preference = ref(read(key, fallback))
    held.set(key, preference)
  }
  const value = preference
  return {
    value,
    set: (on: boolean) => {
      value.value = on
      try {
        globalThis.localStorage?.setItem(key, on ? 'on' : 'off')
      } catch {
        // Remembering is a convenience; failing to must not break the app
      }
    },
  }
}
