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

import { HighlightStyle, syntaxHighlighting } from '@codemirror/language'
import { EditorView } from '@codemirror/view'
import { tags } from '@lezer/highlight'
import type { Extension } from '@codemirror/state'

/*
 * The editor follows the host's theme. The board shell sets --color-* and
 * --font-mono for its dark and light themes, and the editor reads them
 * live - a hard-coded palette was a black box on a light page. The
 * fallbacks are that palette: what a host without tokens, the workbench
 * among them, has always shown.
 */
const token = (name: string, fallback: string) => `var(${name}, ${fallback})`
const mix = (color: string, percent: number) =>
  `color-mix(in srgb, ${color} ${percent}%, transparent)`

const mono = token(
  '--font-mono',
  "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace",
)

const palette = {
  background: token('--color-bg', '#1f1f1f'),
  surface: token('--color-pane', '#181818'),
  foreground: token('--color-fg', '#cccccc'),
  dim: token('--color-dim', '#8b9bab'),
  accent: token('--color-accent', '#4fa3d1'),
  border: token('--color-divider', '#2b2b2b'),
  warn: token('--color-warn', '#d8a13c'),
  error: token('--color-err', '#e2766a'),
  /* The shell's "MDX syntax" tokens; the fallbacks tell the categories apart on their own. */
  keyword: token('--color-kw', '#c586c0'),
  member: token('--color-member', '#9cdcfe'),
  measure: token('--color-measure', '#4fc1ff'),
  fn: token('--color-fn', '#dcdcaa'),
  comment: token('--color-dim', '#6a9955'),
  string: token('--color-warn', '#ce9178'),
  number: token('--color-measure', '#b5cea8'),
  operator: token('--color-dim', '#9d9d9d'),
}

/** Whether the host is dark: the shell says so on <html>; without a word, it is. */
export function hostIsDark(): boolean {
  if (typeof document === 'undefined') return true
  return document.documentElement.getAttribute('data-theme') !== 'light'
}

function baseTheme(dark: boolean): Extension {
  return EditorView.theme(
    {
      '&': {
        color: palette.foreground,
        backgroundColor: palette.background,
        height: '100%',
        fontSize: '13px',
      },
      '.cm-scroller': {
        fontFamily: mono,
        lineHeight: '1.5',
      },
      '.cm-content': { caretColor: palette.foreground },
      '.cm-cursor, .cm-dropCursor': { borderLeftColor: palette.foreground },
      /*
       * As deep as the base theme's own rule: a shallower selector lost to it
       * while the editor had focus, and the selection was all but invisible
       * exactly while somebody was selecting.
       */
      '&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-content ::selection':
        { backgroundColor: mix(palette.accent, 40) },
      '.cm-selectionLayer .cm-selectionBackground': {
        backgroundColor: mix(palette.accent, 22),
      },
      '.cm-activeLine': { backgroundColor: mix(palette.foreground, 7) },
      '.cm-gutters': {
        backgroundColor: palette.background,
        color: palette.dim,
        border: 'none',
      },
      '.cm-activeLineGutter': { backgroundColor: mix(palette.foreground, 7) },
      '.cm-specialChar': { color: palette.error },
      '&.cm-focused .cm-matchingBracket': {
        backgroundColor: mix(palette.accent, 30),
        outline: `1px solid ${mix(palette.accent, 60)}`,
      },
      '&.cm-focused .cm-nonmatchingBracket': {
        backgroundColor: mix(palette.error, 30),
      },
      '.cm-searchMatch': {
        backgroundColor: mix(palette.warn, 35),
        outline: `1px solid ${mix(palette.warn, 70)}`,
      },
      '.cm-searchMatch.cm-searchMatch-selected': {
        backgroundColor: mix(palette.warn, 60),
      },
      '.cm-selectionMatch': { backgroundColor: mix(palette.accent, 20) },
      '.cm-tooltip': {
        backgroundColor: palette.surface,
        border: `1px solid ${palette.border}`,
        color: palette.foreground,
      },
      '.cm-tooltip.cm-tooltip-autocomplete > ul': {
        fontFamily: mono,
        maxHeight: '16rem',
      },
      '.cm-tooltip.cm-tooltip-autocomplete > ul > li[aria-selected]': {
        backgroundColor: mix(palette.accent, 35),
        color: palette.foreground,
      },
      '.cm-completionIcon': { paddingRight: '0.6em', opacity: 0.7 },
      '.cm-completionDetail': {
        marginLeft: '1rem',
        color: palette.dim,
        fontStyle: 'normal',
      },
      /*
       * The panels - search, go to line, rename, references, the lint list -
       * on the host's surfaces. They were hidden altogether, for the one
       * host that lists diagnostics on its own; the keys that open them
       * stayed bound, and what was typed into an invisible field went into
       * the document.
       */
      '.cm-panels': {
        backgroundColor: palette.surface,
        color: palette.foreground,
        fontSize: '12px',
      },
      '.cm-panels.cm-panels-top': { borderBottom: `1px solid ${palette.border}` },
      '.cm-panels.cm-panels-bottom': { borderTop: `1px solid ${palette.border}` },
      '.cm-panel input, .cm-panel button, .cm-panel select': {
        font: 'inherit',
        color: palette.foreground,
        backgroundColor: palette.background,
        backgroundImage: 'none',
        border: `1px solid ${palette.border}`,
        borderRadius: '3px',
      },
      '.cm-panel button': { cursor: 'pointer' },
      '.cm-panel button:hover': { backgroundColor: mix(palette.accent, 20) },
      '.cm-panel button[name="close"]': { border: 'none', backgroundColor: 'transparent' },
      '.cm-panel.cm-search label': { marginLeft: '0.6em' },
      '.cm-panel-lint ul [aria-selected]': {
        backgroundColor: mix(palette.accent, 25),
      },
      '.cm-panel.cm-dialog': { padding: '4px 8px' },
    },
    { dark },
  )
}

/** The dark base theme, as it stands; prefer editorTheme(), which asks the host. */
export const editorBaseTheme = baseTheme(true)

const tokenHighlightStyle = HighlightStyle.define([
  { tag: tags.comment, color: palette.comment, fontStyle: 'italic' },
  { tag: tags.keyword, color: palette.keyword },
  { tag: tags.operator, color: palette.operator },
  { tag: tags.string, color: palette.string },
  { tag: tags.number, color: palette.number },
  // Delimited identifiers — `[Measures]`, `[Order Quantity]`.
  { tag: tags.variableName, color: palette.member },
  // Key qualifiers — `&[Mountain-200]` — and the contextual `This`.
  { tag: tags.atom, color: palette.measure },
  // Axis names and positional flags.
  { tag: tags.typeName, color: palette.accent },
  { tag: tags.function(tags.variableName), color: palette.fn },
  { tag: tags.propertyName, color: palette.fn },
])

export function editorTheme(dark: boolean = hostIsDark()): Extension {
  return [baseTheme(dark), syntaxHighlighting(tokenHighlightStyle)]
}
