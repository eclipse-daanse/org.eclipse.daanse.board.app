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
 * #1275: what a chart takes from the board around it - the colours and
 * the font of the theme instead of the grey Chart.js brings - and how its
 * settings arrive once they went through the variable wrappers.
 */

import { onMounted, onUnmounted, ref } from 'vue'

export interface ThemeTokens {
  fg: string
  dim: string
  divider: string
  raised: string
  font: string
}

/* What the chart drew with before; used where the page defines no token. */
export const FALLBACK_TOKENS: ThemeTokens = {
  fg: '#666666',
  dim: '#666666',
  divider: 'rgba(0, 0, 0, 0.1)',
  raised: 'rgba(0, 0, 0, 0.8)',
  font: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
}

/** The theme tokens as they are now on the document. */
export function readThemeTokens(root: Element | null = typeof document === 'undefined' ? null : document.documentElement): ThemeTokens {
  if (!root || typeof getComputedStyle !== 'function') return FALLBACK_TOKENS
  const style = getComputedStyle(root)
  const token = (name: string, fallback: string) => style.getPropertyValue(name).trim() || fallback
  return {
    fg: token('--color-fg', FALLBACK_TOKENS.fg),
    dim: token('--color-dim', FALLBACK_TOKENS.dim),
    divider: token('--color-divider', FALLBACK_TOKENS.divider),
    raised: token('--color-raised', FALLBACK_TOKENS.raised),
    font: token('--font-sans', FALLBACK_TOKENS.font),
  }
}

/**
 * The theme tokens, read again when the theme changes: a switch of the
 * theme attribute or class on the document, or of the system's colour
 * scheme. A canvas does not follow CSS by itself.
 */
export function useThemeTokens() {
  const tokens = ref<ThemeTokens>(readThemeTokens())
  /* Only a real change: a new object rebuilds the options, and with them the chart. */
  const refresh = () => {
    const next = readThemeTokens()
    const held = tokens.value
    if ((Object.keys(next) as (keyof ThemeTokens)[]).some((key) => next[key] !== held[key])) tokens.value = next
  }
  let observer: MutationObserver | undefined
  let scheme: MediaQueryList | undefined
  onMounted(() => {
    refresh()
    if (typeof MutationObserver !== 'undefined') {
      observer = new MutationObserver(refresh)
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'class', 'style'] })
    }
    scheme = typeof matchMedia === 'function' ? matchMedia('(prefers-color-scheme: dark)') : undefined
    scheme?.addEventListener?.('change', refresh)
  })
  onUnmounted(() => {
    observer?.disconnect()
    scheme?.removeEventListener?.('change', refresh)
  })
  return tokens
}

/*
 * A setting after the variable wrappers: they hand every value on as
 * text, so false arrives as "false" - which is truthy, and a chart whose
 * annotations were not in edit mode drew them dashed and draggable.
 */
export const isOn = (value: unknown): boolean => value === true || value === 'true'

/** A number setting after the wrappers, or the fallback where there is none. */
export const numberOf = (value: unknown, fallback: number): number => {
  if (value === undefined || value === null || value === '') return fallback
  const number = Number(value)
  return Number.isFinite(number) ? number : fallback
}
