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
  /** What it is for, in the words someone changing it would use. */
  role: string
  kind: TokenKind
}

export interface TokenGroup {
  id: string
  label: string
  /** Why these belong together - shown above the group. */
  note?: string
  tokens: TokenSpec[]
}

export const TOKEN_GROUPS: TokenGroup[] = [
  {
    id: 'surfaces',
    label: 'Flächen',
    note: 'Von hinten nach vorn: der Grund, die Panels darauf, die Dinge darin.',
    tokens: [
      { name: 'color-bg', role: 'Grundfläche der App, Editorflächen, Eingabefelder', kind: 'color' },
      { name: 'color-pane', role: 'Panels, Topbar, Aktivitätsleiste, Widgets', kind: 'color' },
      { name: 'color-raised', role: 'Knöpfe, Tabellenköpfe, Chips, Abzeichen', kind: 'color' },
      { name: 'color-canvas', role: 'Boardfläche hinter den Widgets', kind: 'color' },
      { name: 'color-divider', role: 'Panelkanten, Trenner, Tabellenlinien', kind: 'color' },
      { name: 'color-outline', role: 'Umrisse bedienbarer Dinge', kind: 'color' },
    ],
  },
  {
    id: 'text',
    label: 'Text und Akzent',
    note: 'Jede Farbe hier wurde gegen die Fläche gemessen, auf der sie sitzt.',
    tokens: [
      { name: 'color-fg', role: 'Fließtext und Beschriftungen', kind: 'color' },
      { name: 'color-dim', role: 'Zweitrangiger Text, Kennzahlen, Panelüberschriften', kind: 'color' },
      { name: 'color-accent', role: 'Auswahl, aktive Zustände, Hauptknopf', kind: 'color' },
      { name: 'color-onAccent', role: 'Text auf der Akzentfläche', kind: 'color' },
      { name: 'color-brand', role: 'Daanse-Marke als Text', kind: 'color' },
      { name: 'color-brandFill', role: 'Daanse-Marke als Fläche', kind: 'color' },
      { name: 'color-onBrand', role: 'Text auf der Markenfläche', kind: 'color' },
    ],
  },
  {
    id: 'state',
    label: 'Zustand',
    note: 'Nur für Zustände. Wer sie dekorativ verbraucht, kann später nichts mehr melden.',
    tokens: [
      { name: 'color-ok', role: 'Im Rahmen, verbunden, erfolgreich', kind: 'color' },
      { name: 'color-warn', role: 'Braucht Aufmerksamkeit', kind: 'color' },
      { name: 'color-err', role: 'Außerhalb des Rahmens, fehlgeschlagen', kind: 'color' },
    ],
  },
  {
    id: 'syntax',
    label: 'MDX-Syntax',
    note: 'Hervorhebung im Abfrage-Editor und in der Workbench.',
    tokens: [
      { name: 'color-kw', role: 'Schlüsselwörter', kind: 'color' },
      { name: 'color-measure', role: 'Kennzahlen', kind: 'color' },
      { name: 'color-member', role: 'Elemente', kind: 'color' },
      { name: 'color-fn', role: 'Funktionen', kind: 'color' },
    ],
  },
  {
    id: 'type',
    label: 'Schrift',
    note: 'Zwei Familien: eine für die Oberfläche, eine für alles, was gezählt oder gemessen wird.',
    tokens: [
      { name: 'font-sans', role: 'Oberflächenschrift', kind: 'font' },
      { name: 'font-mono', role: 'Zahlen, Namen von Ständen, Code', kind: 'font' },
      { name: 'text-xs', role: 'Abzeichen, Zähler, Statuszeile', kind: 'length' },
      { name: 'text-sm', role: 'Zweitrangige Oberfläche, Reiter, Tabellen', kind: 'length' },
      { name: 'text-base', role: 'Standard: Baumzeilen, Formulare, Knöpfe', kind: 'length' },
      { name: 'text-lg', role: 'Überschriften in Panels, Leerzustände', kind: 'length' },
      { name: 'text-xl', role: 'Kennzahlen im Board', kind: 'length' },
    ],
  },
  {
    id: 'shape',
    label: 'Form',
    tokens: [
      { name: 'radius-xs', role: 'Abzeichen, kleine Knöpfe', kind: 'length' },
      { name: 'radius-sm', role: 'Panels, Karten, Eingabefelder', kind: 'length' },
      { name: 'radius-md', role: 'Dialoge', kind: 'length' },
      { name: 'radius-lg', role: 'Große Flächen', kind: 'length' },
      { name: 'shadow-e1', role: 'Angehoben: Knöpfe, Chips', kind: 'shadow' },
      { name: 'shadow-e2', role: 'Schwebend: Menüs, Einblendungen', kind: 'shadow' },
      { name: 'shadow-e3', role: 'Über allem: Dialoge', kind: 'shadow' },
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
