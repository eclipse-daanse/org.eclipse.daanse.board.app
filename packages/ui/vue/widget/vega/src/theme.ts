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
 * The chart in the colours and type of the board (#1287).
 *
 * The shell sets --color-* and --font-* on <html> for each of its themes;
 * a Vega config is built from what they resolve to there, because Vega
 * draws on a canvas, where var() means nothing. The fallbacks are the dark
 * theme, which is what a host without tokens shows. The config is the
 * base: what the recipe or a spec says of its own wins over it.
 */

/** Reads a custom property as it resolves on <html>; empty when unset. */
export type TokenReader = (name: string) => string

export function documentTokens(): TokenReader {
  if (typeof document === 'undefined') return () => ''
  const style = getComputedStyle(document.documentElement)
  return (name) => style.getPropertyValue(name).trim()
}

/** Whether the host is dark: the shell says so on <html>; without a word, it is. */
export function hostIsDark(): boolean {
  if (typeof document === 'undefined') return true
  return document.documentElement.getAttribute('data-theme') !== 'light'
}

const DARK = { fg: '#cccccc', dim: '#8b9bab', divider: '#2b2b2b', accent: '#4fa3d1' }
const LIGHT = { fg: '#1f2328', dim: '#59636e', divider: '#d1d9e0', accent: '#0969da' }
const SANS = "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"

/** A CSS length in pixels: px as it stands, rem and em against the root font size. */
export function pixels(length: string, fallback: number, rootPx = 16): number {
  const match = /^(-?[\d.]+)\s*(px|rem|em)?$/.exec(length.trim())
  if (!match) return fallback
  const value = Number(match[1])
  if (!Number.isFinite(value)) return fallback
  return match[2] === 'rem' || match[2] === 'em' ? value * rootPx : value
}

/** The Vega-Lite config of the board's current theme. */
export function themeConfig(read: TokenReader = documentTokens(), dark = hostIsDark()): Record<string, unknown> {
  const base = dark ? DARK : LIGHT
  const token = (name: string, fallback: string) => read(name) || fallback
  const fg = token('--color-fg', base.fg)
  const dim = token('--color-fg-muted', '') || token('--color-dim', base.dim)
  const divider = token('--color-divider', base.divider)
  const accent = token('--color-accent', base.accent)
  const font = token('--font-sans', SANS)
  const small = pixels(read('--text-xs'), 11)
  const normal = pixels(read('--text-sm'), 12)

  const text = { labelColor: dim, titleColor: fg, labelFont: font, titleFont: font, labelFontSize: small, titleFontSize: normal }
  return {
    background: 'transparent',
    font,
    title: { color: fg, subtitleColor: dim, font, fontSize: normal + 2 },
    axis: { ...text, domainColor: divider, tickColor: divider, gridColor: divider },
    legend: { ...text },
    header: { ...text },
    view: { stroke: divider },
    /* One series takes the accent; several take the categorical scheme. */
    mark: { color: accent },
    text: { color: fg, font },
  }
}
