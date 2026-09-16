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
 * Translation that notices when translations arrive.
 *
 * A bundle can be deployed at any time - a widget somebody adds today, the
 * language pack for it tomorrow - so the texts a screen needs are not
 * necessarily there when that screen first renders. The plain
 * `i18n.t(key)` every component used is a function call: Vue runs it once
 * while rendering and has no reason to run it again, so a pack that landed
 * afterwards stayed invisible until a reload, and switching language did
 * nothing at all.
 *
 * This counts the events i18next already emits - a bundle added, the
 * language changed - and reads that counter inside `t`. That is the whole
 * trick: the counter is a reactive dependency of every render that
 * translates anything, so late texts reach the screen that needed them.
 */
import { getCurrentScope, inject, onScopeDispose, ref, type Ref } from 'vue'

/** What this needs of i18next - not the whole interface. */
interface Translator {
  t(key: string, options?: Record<string, unknown>): string
  language?: string
  on?(event: string, handler: () => void): void
  off?(event: string, handler: () => void): void
  store?: {
    on?(event: string, handler: () => void): void
    off?(event: string, handler: () => void): void
  }
}

/* The key the i18next plugin provides under. */
const PROVIDED = 'i18n'

export interface Translation {
  /** Translates a key, and re-runs when what it translates changes. */
  t: (key: string, options?: Record<string, unknown>) => string
  /** The language in use, as a ref, so a label can show it. */
  language: Ref<string | undefined>
  /** Whether anything is there to translate with. */
  available: boolean
}

/**
 * @param namespace prefixed to bare keys, so a widget can write its own
 *   keys without repeating its namespace on every one of them.
 */
export function useTranslation(namespace?: string): Translation {
  const i18n = inject<Translator | undefined>(PROVIDED, undefined)

  /* Bumped by every event that can change what a key translates to. */
  const changed = ref(0)
  const language = ref<string | undefined>(i18n?.language)

  const onChange = () => {
    changed.value += 1
    language.value = i18n?.language
  }

  /*
   * `added` fires when a resource bundle arrives - which is exactly the
   * late language pack this exists for. `languageChanged` covers the
   * switch. Both are optional: a stub translator has neither, and asking
   * for one should not be a reason to fail.
   */
  i18n?.on?.('languageChanged', onChange)
  i18n?.store?.on?.('added', onChange)
  i18n?.store?.on?.('removed', onChange)

  if (getCurrentScope()) {
    onScopeDispose(() => {
      i18n?.off?.('languageChanged', onChange)
      i18n?.store?.off?.('added', onChange)
      i18n?.store?.off?.('removed', onChange)
    })
  }

  const t = (key: string, options?: Record<string, unknown>) => {
    /* The dependency. Without this read the rest is a plain function
       again and nothing re-renders. */
    void changed.value
    if (!i18n) return key
    const full = namespace && !key.includes(':') ? `${namespace}:${key}` : key
    return i18n.t(full, options)
  }

  return { t, language, available: !!i18n }
}
