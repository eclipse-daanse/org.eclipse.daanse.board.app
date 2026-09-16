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
 * Which languages there are, and which one is in use.
 *
 * The list is what i18next actually holds texts for, not a table kept
 * somewhere. A language pack is a bundle and can arrive at any time, so a
 * hand-written list of languages would be wrong the moment somebody
 * deploys one - and would offer a language that then shows nothing but
 * keys. Reading the store means a pack that lands adds its language here
 * by existing.
 */
import { computed, inject, onMounted, type ComputedRef, type Ref } from 'vue'
import { useTranslation } from './useTranslation'

interface Store {
  data?: Record<string, unknown>
}

interface Translator {
  language?: string
  languages?: readonly string[]
  store?: Store
  changeLanguage?(lng: string): Promise<unknown> | unknown
}

const PROVIDED = 'i18n'
/* Survives a reload; the choice is the person's, not the session's. */
const REMEMBERED = 'daanse.board.language'

export interface Language {
  /** The tag, as i18next knows it. */
  tag: string
  /** What to call it, in its own language: 'de' reads as "Deutsch". */
  label: string
}

export interface LanguageChoice {
  available: ComputedRef<Language[]>
  current: Ref<string | undefined>
  choose: (tag: string) => void
}

/** 'de' -> 'Deutsch', in its own language, without a table to maintain. */
function nameOf(tag: string): string {
  try {
    const display = new Intl.DisplayNames([tag], { type: 'language' })
    const name = display.of(tag)
    if (name && name !== tag) return name.charAt(0).toUpperCase() + name.slice(1)
  } catch {
    // an environment without Intl.DisplayNames, or a tag it does not know
  }
  return tag.toUpperCase()
}

export function useLanguage(): LanguageChoice {
  const i18n = inject<Translator | undefined>(PROVIDED, undefined)
  const { language, revision } = useTranslation()

  const available = computed<Language[]>(() => {
    /*
     * The revision, not the language: a pack for a language nobody is
     * using leaves the language alone, and that is exactly the case this
     * list has to notice.
     */
    void revision.value
    const held = Object.keys(i18n?.store?.data ?? {})
    return held.sort().map((tag) => ({ tag, label: nameOf(tag) }))
  })

  function choose(tag: string) {
    try {
      localStorage.setItem(REMEMBERED, tag)
    } catch {
      // private window, or storage turned off: the choice holds for this session
    }
    i18n?.changeLanguage?.(tag)
  }

  /*
   * Applied on mount rather than where i18next is set up: the packs are
   * bundles and are not all there when it initialises, and asking for a
   * language before its texts exist just falls back.
   */
  onMounted(() => {
    let remembered: string | null = null
    try {
      remembered = localStorage.getItem(REMEMBERED)
    } catch {
      remembered = null
    }
    if (remembered && remembered !== i18n?.language) i18n?.changeLanguage?.(remembered)
  })

  return { available, current: language, choose }
}
