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
 * The few words the controls say themselves - "Schließen" on a dialog, the
 * search field of the icon picker.
 *
 * The same mechanism as useTranslation in ui.vue.composables, cut down to
 * what a control needs: the design system depends on nothing but Vue, and
 * pulling the composables in for a dozen labels would drag every API
 * bundle they reach in with them. Texts live under the 'controls'
 * namespace; with no translator or no pack yet, the English text given at
 * the call is shown - English being the language every pack falls back
 * to - so a control never shows a bare key.
 */
import { getCurrentInstance, getCurrentScope, onMounted, onScopeDispose, ref } from 'vue'

interface Translator {
  t(key: string, options?: Record<string, unknown>): string
  exists?(key: string, options?: Record<string, unknown>): boolean
  on?(event: string, handler: () => void): void
  off?(event: string, handler: () => void): void
  store?: {
    on?(event: string, handler: () => void): void
    off?(event: string, handler: () => void): void
  }
}

const NAMESPACE = 'controls'

export function useText() {
  const host = getCurrentInstance()
  const read = (): Translator | undefined => {
    const provides = host?.appContext?.provides as Record<string, Translator> | undefined
    return provides?.['i18n'] ?? provides?.['I18next']
  }

  const changed = ref(0)
  const bump = () => (changed.value += 1)
  let listening: Translator | undefined
  const listen = () => {
    const i18n = read()
    if (!i18n || listening === i18n) return
    listening = i18n
    i18n.on?.('languageChanged', bump)
    i18n.store?.on?.('added', bump)
    bump()
  }
  listen()
  if (host) onMounted(listen)
  if (getCurrentScope()) {
    onScopeDispose(() => {
      listening?.off?.('languageChanged', bump)
      listening?.store?.off?.('added', bump)
    })
  }

  /**
   * @param fallback shown while no pack holds the key. Its placeholders are
   *   written {name}, not {{name}}: the call sits in a template, where a
   *   double brace would end the interpolation it is written in.
   */
  return (key: string, fallback: string, options?: Record<string, unknown>): string => {
    void changed.value
    const i18n = read()
    const full = `${NAMESPACE}:${key}`
    if (!i18n || (i18n.exists && !i18n.exists(full))) {
      return fallback.replace(/\{(\w+)\}/g, (_, name) => String(options?.[name] ?? ''))
    }
    return i18n.t(full, options)
  }
}
