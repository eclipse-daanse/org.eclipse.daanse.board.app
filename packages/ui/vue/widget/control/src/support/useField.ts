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

/*
 * What a field does the same way for text and for numbers: what is typed
 * is a draft until it is committed - Enter, or leaving the field - and only
 * then written, with change. While typing, input says what stands in the
 * field, at most every THROTTLE_MS; Enter sends submit after the commit.
 * Escape drops the draft. Outside of typing the field shows the variable.
 */
import { computed, onUnmounted, ref, type Ref } from 'vue'

export const THROTTLE_MS = 100

/** A draft read as a value: ok false where it is none the field takes. */
export interface Parsed {
  ok: boolean
  value?: unknown
}

export interface FieldOptions {
  /** What the variable holds now. */
  current: () => unknown
  /** How a held value is shown in the field. */
  display: (value: unknown) => string
  /** What a draft is as a value. */
  parse: (text: string) => Parsed
  disabled: Ref<boolean>
  operate: (value: unknown) => boolean
  send: (event: string, value: unknown, previousValue: unknown) => void
}

export function useField(options: FieldOptions) {
  const editing = ref(false)
  const draft = ref('')

  /* What the field shows: the draft while typing, else what the variable holds. */
  const text = computed(() => (editing.value ? draft.value : options.display(options.current())))

  let sentAt = 0
  let timer: ReturnType<typeof setTimeout> | undefined

  const typed = () => {
    const parsed = options.parse(draft.value)
    return parsed.ok ? parsed.value : draft.value
  }

  function announce(): void {
    timer = undefined
    sentAt = Date.now()
    options.send('input', typed(), options.current())
  }

  function cancelInput(): void {
    if (timer) clearTimeout(timer)
    timer = undefined
  }

  function typing(event: Event): void {
    const input = event.target as HTMLInputElement
    if (options.disabled.value) {
      input.value = text.value
      return
    }
    editing.value = true
    draft.value = input.value
    const wait = THROTTLE_MS - (Date.now() - sentAt)
    if (wait <= 0) announce()
    else if (!timer) timer = setTimeout(announce, wait)
  }

  /* Writes the draft where it is a value the field takes; else the field goes back to the variable. */
  function commit(): void {
    if (!editing.value) return
    cancelInput()
    const parsed = options.parse(draft.value)
    editing.value = false
    if (parsed.ok) options.operate(parsed.value)
  }

  function submit(): void {
    if (options.disabled.value) return
    const previousValue = options.current()
    commit()
    options.send('submit', options.current(), previousValue)
  }

  function drop(): void {
    cancelInput()
    editing.value = false
  }

  onUnmounted(cancelInput)

  return { text, editing, typing, commit, submit, drop }
}
