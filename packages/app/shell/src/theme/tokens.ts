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
 * The design system, declared rather than scattered.
 *
 * Every token the app paints with is listed here once, with the role it
 * plays. main.css still carries a full set as the starting values, so the
 * app renders before any script runs; this catalogue is what lets a theme
 * be swapped or a single value overridden at runtime.
 *
 * A token is only in this list if changing it changes how the app looks.
 * Compatibility aliases (--color-primary and friends) follow the tokens
 * they mirror and are derived, not configured.
 */

export type TokenKind = 'color' | 'length' | 'shadow' | 'font'

export interface TokenSpec {
  /** The CSS custom property, without the leading dashes. */
  name: string
  /** What it is for, in the words someone changing it would use - a translation key. */
  role: string
  kind: TokenKind
}

export interface TokenGroup {
  id: string
  /** A translation key, like every text here. */
  label: string
  /** Why these belong together - shown above the group. */
  note?: string
  tokens: TokenSpec[]
}

export const TOKEN_GROUPS: TokenGroup[] = [
  {
    id: 'surfaces',
    label: 'shell:Tokens.group.surfaces.label',
    note: 'shell:Tokens.group.surfaces.note',
    tokens: [
      { name: 'color-bg', role: 'shell:Tokens.role.colorBg', kind: 'color' },
      { name: 'color-pane', role: 'shell:Tokens.role.colorPane', kind: 'color' },
      { name: 'color-raised', role: 'shell:Tokens.role.colorRaised', kind: 'color' },
      { name: 'color-canvas', role: 'shell:Tokens.role.colorCanvas', kind: 'color' },
      { name: 'color-divider', role: 'shell:Tokens.role.colorDivider', kind: 'color' },
      { name: 'color-outline', role: 'shell:Tokens.role.colorOutline', kind: 'color' },
    ],
  },
  {
    id: 'text',
    label: 'shell:Tokens.group.text.label',
    note: 'shell:Tokens.group.text.note',
    tokens: [
      { name: 'color-fg', role: 'shell:Tokens.role.colorFg', kind: 'color' },
      { name: 'color-dim', role: 'shell:Tokens.role.colorDim', kind: 'color' },
      { name: 'color-accent', role: 'shell:Tokens.role.colorAccent', kind: 'color' },
      { name: 'color-onAccent', role: 'shell:Tokens.role.colorOnAccent', kind: 'color' },
      { name: 'color-brand', role: 'shell:Tokens.role.colorBrand', kind: 'color' },
      { name: 'color-brandFill', role: 'shell:Tokens.role.colorBrandFill', kind: 'color' },
      { name: 'color-onBrand', role: 'shell:Tokens.role.colorOnBrand', kind: 'color' },
    ],
  },
  {
    id: 'state',
    label: 'shell:Tokens.group.state.label',
    note: 'shell:Tokens.group.state.note',
    tokens: [
      { name: 'color-ok', role: 'shell:Tokens.role.colorOk', kind: 'color' },
      { name: 'color-warn', role: 'shell:Tokens.role.colorWarn', kind: 'color' },
      { name: 'color-err', role: 'shell:Tokens.role.colorErr', kind: 'color' },
    ],
  },
  {
    id: 'syntax',
    label: 'shell:Tokens.group.syntax.label',
    note: 'shell:Tokens.group.syntax.note',
    tokens: [
      { name: 'color-kw', role: 'shell:Tokens.role.colorKw', kind: 'color' },
      { name: 'color-measure', role: 'shell:Tokens.role.colorMeasure', kind: 'color' },
      { name: 'color-member', role: 'shell:Tokens.role.colorMember', kind: 'color' },
      { name: 'color-fn', role: 'shell:Tokens.role.colorFn', kind: 'color' },
    ],
  },
  {
    id: 'type',
    label: 'shell:Tokens.group.type.label',
    note: 'shell:Tokens.group.type.note',
    tokens: [
      { name: 'font-sans', role: 'shell:Tokens.role.fontSans', kind: 'font' },
      { name: 'font-mono', role: 'shell:Tokens.role.fontMono', kind: 'font' },
      { name: 'text-xs', role: 'shell:Tokens.role.textXs', kind: 'length' },
      { name: 'text-sm', role: 'shell:Tokens.role.textSm', kind: 'length' },
      { name: 'text-base', role: 'shell:Tokens.role.textBase', kind: 'length' },
      { name: 'text-lg', role: 'shell:Tokens.role.textLg', kind: 'length' },
      { name: 'text-xl', role: 'shell:Tokens.role.textXl', kind: 'length' },
    ],
  },
  {
    id: 'shape',
    label: 'shell:Tokens.group.shape.label',
    tokens: [
      { name: 'radius-xs', role: 'shell:Tokens.role.radiusXs', kind: 'length' },
      { name: 'radius-sm', role: 'shell:Tokens.role.radiusSm', kind: 'length' },
      { name: 'radius-md', role: 'shell:Tokens.role.radiusMd', kind: 'length' },
      { name: 'radius-lg', role: 'shell:Tokens.role.radiusLg', kind: 'length' },
      { name: 'shadow-e1', role: 'shell:Tokens.role.shadowE1', kind: 'shadow' },
      { name: 'shadow-e2', role: 'shell:Tokens.role.shadowE2', kind: 'shadow' },
      { name: 'shadow-e3', role: 'shell:Tokens.role.shadowE3', kind: 'shadow' },
    ],
  },
]

/** Every token name, flat - for validation and for reading the current values. */
export const TOKEN_NAMES: string[] = TOKEN_GROUPS.flatMap((g) => g.tokens.map((t) => t.name))

const SPEC_BY_NAME = new Map(
  TOKEN_GROUPS.flatMap((g) => g.tokens).map((t) => [t.name, t] as const),
)

export function specOf(name: string): TokenSpec | undefined {
  return SPEC_BY_NAME.get(name)
}

/**
 * Aliases kept for components that still ask for the old names. They follow
 * their source token, so a theme never has to list them.
 */
export const TOKEN_ALIASES: Record<string, string> = {
  'color-primary': 'color-accent',
  'color-info': 'color-accent',
  'color-secondary': 'color-dim',
  'color-success': 'color-ok',
  'color-warning': 'color-warn',
  'color-danger': 'color-err',
  'color-backgroundPrimary': 'color-bg',
  'color-backgroundSecondary': 'color-pane',
  'color-backgroundElement': 'color-raised',
  'color-backgroundBorder': 'color-divider',
  'color-textPrimary': 'color-fg',
  'color-daanse_blue': 'color-accent',
  'color-daanse_grey': 'color-fg',
}
