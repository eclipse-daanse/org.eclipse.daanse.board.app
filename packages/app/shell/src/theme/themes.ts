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
 * The themes that ship with the app.
 *
 * Each one is a complete set of values for the tokens declared in
 * tokens.ts - no theme inherits from another, because a half-defined theme
 * leaves one palette's text on another palette's ground. Anything a theme
 * does not need to state (the compatibility aliases) is derived when it is
 * applied.
 */

export interface Theme {
  id: string
  name: string
  /** One line: what this theme is for. */
  note: string
  /** Whether the ground is dark - the app tells the browser via color-scheme. */
  dark: boolean
  tokens: Record<string, string>
}

const SANS_BARLOW = "'Barlow', system-ui, -apple-system, 'Segoe UI', sans-serif"
const MONO_JETBRAINS = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace"
const MONO_PLEX = "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace"

/** Sizes and shapes shared by the themes that don't set their own. */
const TYPE_SCALE = {
  'text-xs': '11px',
  'text-sm': '12px',
  'text-base': '13px',
  'text-lg': '15px',
  'text-xl': '24px',
}

export const THEMES: Theme[] = [
  {
    id: 'messwarte',
    name: 'Messwarte',
    note: 'Dunkler Grund, Zahlen als hellstes Element. Für Boards, die stundenlang laufen.',
    dark: true,
    tokens: {
      ...TYPE_SCALE,
      'color-bg': '#121820',
      'color-pane': '#1a222c',
      'color-raised': '#232d39',
      'color-canvas': '#0e141b',
      'color-divider': '#2a3541',
      'color-outline': '#3c4959',

      'color-fg': '#dfe8ef',
      'color-dim': '#8b9bab',
      'color-accent': '#4fa3d1',
      'color-onAccent': '#08131c',
      'color-brand': '#d8a13c',
      'color-brandFill': '#d8a13c',
      'color-onBrand': '#14100a',
      'color-ok': '#5fb98a',
      'color-warn': '#d8a13c',
      'color-err': '#e2766a',

      'color-kw': '#4fa3d1',
      'color-measure': '#d8a13c',
      'color-member': '#5fb98a',
      'color-fn': '#c294d8',

      'font-sans': SANS_BARLOW,
      'font-mono': MONO_JETBRAINS,

      'radius-xs': '2px',
      'radius-sm': '3px',
      'radius-md': '4px',
      'radius-lg': '6px',
      'shadow-e1': '0 1px 2px rgba(0, 0, 0, 0.45)',
      'shadow-e2': '0 2px 8px rgba(0, 0, 0, 0.45)',
      'shadow-e3': '0 8px 24px rgba(0, 0, 0, 0.5)',
    },
  },
  {
    id: 'messwarte-hell',
    name: 'Messwarte hell',
    note: 'Dieselbe Gestaltung auf blassem Grund - für die Stunden am Editor.',
    dark: false,
    tokens: {
      ...TYPE_SCALE,
      'color-bg': '#eef1f4',
      'color-pane': '#f7f9fb',
      'color-raised': '#ffffff',
      'color-canvas': '#e2e7ec',
      'color-divider': '#d3dae1',
      'color-outline': '#b3bec9',

      'color-fg': '#16202a',
      'color-dim': '#55646f',
      'color-accent': '#1f6690',
      'color-onAccent': '#ffffff',
      'color-brand': '#8a6206',
      'color-brandFill': '#c08a10',
      'color-onBrand': '#14100a',
      'color-ok': '#1f6f4a',
      'color-warn': '#8a5a0c',
      'color-err': '#b02a1c',

      'color-kw': '#1f6690',
      'color-measure': '#8a5a0c',
      'color-member': '#1f6f4a',
      'color-fn': '#7b3fa0',

      'font-sans': SANS_BARLOW,
      'font-mono': MONO_JETBRAINS,

      'radius-xs': '2px',
      'radius-sm': '3px',
      'radius-md': '4px',
      'radius-lg': '6px',
      'shadow-e1': '0 1px 2px rgba(22, 32, 42, 0.14)',
      'shadow-e2': '0 2px 8px rgba(22, 32, 42, 0.14)',
      'shadow-e3': '0 8px 24px rgba(22, 32, 42, 0.14)',
    },
  },
  {
    id: 'kartenblatt',
    name: 'Kartenblatt',
    note: 'Papierweiß mit Grünstich, Petrol statt Blau, rechte Winkel. Ein Board als Blatt.',
    dark: false,
    tokens: {
      ...TYPE_SCALE,
      'color-bg': '#eef0ea',
      'color-pane': '#f8f9f5',
      'color-raised': '#ffffff',
      'color-canvas': '#e3e6dd',
      'color-divider': '#d2d8c9',
      'color-outline': '#b4bda8',

      'color-fg': '#1d2721',
      'color-dim': '#5f6d62',
      'color-accent': '#0f6b63',
      'color-onAccent': '#f4f7f1',
      'color-brand': '#8a6a12',
      'color-brandFill': '#0f6b63',
      'color-onBrand': '#f4f7f1',
      'color-ok': '#0f6b63',
      'color-warn': '#8a6a12',
      'color-err': '#9e3524',

      'color-kw': '#0f6b63',
      'color-measure': '#8a6a12',
      'color-member': '#3c6b32',
      'color-fn': '#6b4a8a',

      'font-sans': "'Source Sans 3', system-ui, -apple-system, 'Segoe UI', sans-serif",
      'font-mono': MONO_PLEX,

      'radius-xs': '0px',
      'radius-sm': '0px',
      'radius-md': '0px',
      'radius-lg': '0px',
      'shadow-e1': 'none',
      'shadow-e2': '0 2px 6px rgba(29, 39, 33, 0.12)',
      'shadow-e3': '0 8px 20px rgba(29, 39, 33, 0.14)',
    },
  },
  {
    id: 'werkbank',
    name: 'Werkbank',
    note: 'Warmes Papiergrau, das Daanse-Gold tragend, Blau nur für die Auswahl.',
    dark: false,
    tokens: {
      ...TYPE_SCALE,
      'color-bg': '#f1efe9',
      'color-pane': '#fbfaf7',
      'color-raised': '#ffffff',
      'color-canvas': '#e5e2d9',
      'color-divider': '#dcd8cd',
      'color-outline': '#bfb9a9',

      'color-fg': '#242219',
      'color-dim': '#635e50',
      'color-accent': '#8a6206',
      'color-onAccent': '#fdfbf4',
      'color-brand': '#8a6206',
      'color-brandFill': '#c08a10',
      'color-onBrand': '#241f10',
      'color-ok': '#1f6f4a',
      'color-warn': '#8a5a0c',
      'color-err': '#b02a1c',

      'color-kw': '#2b5599',
      'color-measure': '#8a5a0c',
      'color-member': '#1f6f4a',
      'color-fn': '#7b3fa0',

      'font-sans': SANS_BARLOW,
      'font-mono': MONO_PLEX,

      'radius-xs': '3px',
      'radius-sm': '6px',
      'radius-md': '8px',
      'radius-lg': '12px',
      'shadow-e1': '0 1px 2px rgba(36, 34, 25, 0.12)',
      'shadow-e2': '0 2px 8px rgba(36, 34, 25, 0.12)',
      'shadow-e3': '0 8px 24px rgba(36, 34, 25, 0.14)',
    },
  },
]

export const DEFAULT_THEME_ID = 'messwarte'

export function themeById(id: string): Theme | undefined {
  return THEMES.find((t) => t.id === id)
}
