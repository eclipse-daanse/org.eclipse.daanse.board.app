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
 * Cube metadata in the editor, beside the language server: completion of
 * the cube's names, what a name is on hover, and each kind of name in its
 * own colour. The server knows the grammar and the functions; the names
 * of a cube need a live connection, which is the host's - so the host hands
 * in a source and these extensions ask it (README, "Completion").
 *
 * Plain CodeMirror, no Langium: this runs beside the editor.
 */

import type { Completion, CompletionContext, CompletionResult } from '@codemirror/autocomplete'
import { EditorState, RangeSetBuilder, type Extension } from '@codemirror/state'
import { startCompletion } from '@codemirror/autocomplete'
import { Decoration, EditorView, ViewPlugin, hoverTooltip, keymap, type DecorationSet, type ViewUpdate } from '@codemirror/view'
import { parseMdxCompletionContext } from './mdx-reference-parser.js'

export type MdxMetadataKind = 'cube' | 'dimension' | 'hierarchy' | 'level' | 'member' | 'measure' | 'set' | 'kpi'

export interface MdxMetadataItem {
  uniqueName: string
  caption: string
  kind: MdxMetadataKind
  description?: string
  /** A member's level: its alternatives are the members of the same one. */
  level?: string
  /** A member's parent, where the server said: where its siblings are asked for. */
  parent?: string
}

export interface MdxFunctionItem {
  name: string
  signature: string
  description?: string
}

export interface MdxMetadataSource {
  /** What is known now; called on every completion and hover, so cheap. */
  items(): MdxMetadataItem[]
  cubes(): MdxMetadataItem[]
  functions(): MdxFunctionItem[]
  /** Members under a hierarchy, level or member, fetched when completion reaches them. */
  children?(uniqueName: string): Promise<MdxMetadataItem[]>
  /** Bumped when the cube changes, so the highlighting redraws. */
  version?(): number
}

const SEGMENT = /\[(?:[^\]]|\]\])*\]/g
/* A bracketed name with its continuations: [A].[B], [A].&[1], [A].[B].&[1]&[2]. */
const CHAIN = /\[(?:[^\]]|\]\])*\](?:\.&?\[(?:[^\]]|\]\])*\](?:&\[(?:[^\]]|\]\])*\])*|&\[(?:[^\]]|\]\])*\])*/g

const key = (name: string) => name.toLowerCase()

/** The items by lower-case unique name; rebuilt only when the list is another one. */
function indexer(source: MdxMetadataSource) {
  let last: MdxMetadataItem[] | null = null
  let map = new Map<string, MdxMetadataItem>()
  return () => {
    const items = source.items()
    if (items !== last) {
      last = items
      map = new Map()
      // A measure is also a member of [Measures]; the more specific kind wins.
      for (const item of items) {
        const known = map.get(key(item.uniqueName))
        if (!known || known.kind === 'member') map.set(key(item.uniqueName), item)
      }
    }
    return map
  }
}

/*
 * The cubes by name, both as the server spells the unique name and as the
 * bracketed caption a query writes after FROM.
 */
function cubeIndexer(source: MdxMetadataSource) {
  let last: MdxMetadataItem[] | null = null
  let map = new Map<string, MdxMetadataItem>()
  return () => {
    const cubes = source.cubes()
    if (cubes !== last) {
      last = cubes
      map = new Map()
      for (const cube of cubes) {
        map.set(key(bracketed(cube.uniqueName)), cube)
        map.set(key(bracketed(cube.caption)), cube)
      }
    }
    return map
  }
}

const bracketed = (name: string) => (name.startsWith('[') ? name : `[${name.replace(/]/g, ']]')}]`)

/* A name right after FROM is a cube - `FROM [Sales]`, `FROM\n  [Sales]`. */
const AFTER_FROM = /\bFROM\s*$/i

function cubeAfterFrom(cubes: Map<string, MdxMetadataItem>, before: string, chain: string): MdxMetadataItem | null {
  if (!AFTER_FROM.test(before)) return null
  return cubes.get(key(chain)) ?? null
}

/*
 * How well a name answers what was typed: the name itself first, then
 * names that start with it - the shorter the closer - then the rest, so
 * `[Sa` puts [Sales] above [Sales Ragged]. A fraction, so that it only
 * breaks ties between options the filter scores alike.
 */
function closeness(typed: string, label: string): number {
  const t = key(typed)
  const l = key(label)
  if (!t) return 0
  if (l === t || l === `${t}]`) return 2
  if (l.startsWith(t)) return 1 + 1 / (l.length + 1)
  return 0
}

function segments(name: string): string[] {
  return name.match(SEGMENT) ?? []
}

/** The items exactly one segment below a prefix. */
function childrenOf(items: Iterable<MdxMetadataItem>, prefix: string): MdxMetadataItem[] {
  const head = key(prefix) + '.'
  const depth = segments(prefix).length + 1
  const found: MdxMetadataItem[] = []
  for (const item of items) {
    const name = key(item.uniqueName)
    if (name.startsWith(head) && segments(item.uniqueName).length === depth) found.push(item)
  }
  return found
}

const ORDER: Record<MdxMetadataKind, number> = { measure: 0, hierarchy: 1, level: 2, member: 3, set: 4, kpi: 5, dimension: 6, cube: 7 }
const TYPES: Record<MdxMetadataKind, string> = {
  cube: 'class',
  dimension: 'namespace',
  hierarchy: 'type',
  level: 'enum',
  member: 'constant',
  measure: 'variable',
  set: 'property',
  kpi: 'variable',
}

/*
 * Puts the whole name in place of what was typed - and swallows the `]`
 * closeBrackets added when the `[` was typed, which would otherwise be left
 * dangling after the name.
 */
function insertName(name: string, chainStart?: number) {
  return (view: EditorView, _completion: Completion, from: number, to: number) => {
    const start = chainStart ?? from
    const end = view.state.doc.sliceString(to, to + 1) === ']' ? to + 1 : to
    view.dispatch({ changes: { from: start, to: end, insert: name }, selection: { anchor: start + name.length }, userEvent: 'input.complete' })
  }
}

/*
 * The label is what CodeMirror filters on, from where the completion
 * starts: the whole name for a chain, the bracketed caption for a fresh
 * bracket. What the list shows can be shorter.
 */
function option(item: MdxMetadataItem, label: string, chainStart?: number): Completion {
  return {
    label,
    detail: item.kind,
    info: item.description ? `${item.uniqueName}\n${item.description}` : item.uniqueName,
    apply: insertName(item.uniqueName, chainStart),
    type: TYPES[item.kind],
    boost: -ORDER[item.kind],
  }
}

const lastSegment = (name: string) => {
  const all = segments(name)
  return all[all.length - 1] ?? name
}

/** The name a chain stands for minus its last segment: where its siblings live. */
function parentOf(name: string): string {
  const all = segments(name)
  return all.slice(0, -1).join('.')
}

/*
 * Alternatives: asked for on a complete name (Ctrl+Space, Alt+M), the
 * objects of the same kind beside it - the other measures for a measure,
 * the other levels of the hierarchy, the members next to a member - each
 * replacing the whole name.
 */
async function alternatives(
  source: MdxMetadataSource,
  map: Map<string, MdxMetadataItem>,
  context: CompletionContext,
): Promise<CompletionResult | null> {
  const line = context.state.doc.lineAt(context.pos)
  const chain = chainAt(line.text, context.pos - line.from)
  if (!chain || context.pos - line.from === chain.from) return null
  const item = resolve(map, chain.text)
  if (!item || key(item.uniqueName) !== key(chain.text)) return null
  const parent = parentOf(item.uniqueName)
  /*
   * A member's name does not say where it sits: [Gender].[F] names no
   * parent, and [Gender].[All Gender] shares its prefix one level up. The
   * level does, and the parent - where the server sent them.
   */
  const sameLevel = (other: MdxMetadataItem) => !item.level || !other.level || key(other.level) === key(item.level)
  let siblings = parent
    ? childrenOf(map.values(), parent).filter(other => other.kind === item.kind)
    : [...map.values()].filter(other => other.kind === item.kind)
  const askUnder = item.parent ?? parent
  if (item.kind === 'member' && source.children && askUnder) {
    try {
      const fetched = await source.children(askUnder)
      const seen = new Set(siblings.map(s => key(s.uniqueName)))
      siblings = [...siblings, ...fetched.filter(f => !seen.has(key(f.uniqueName)))]
    } catch {
      // The loaded ones are still offered.
    }
  }
  siblings = siblings.filter(sameLevel)
  const from = line.from + chain.from
  const to = line.from + chain.to
  return {
    from,
    to,
    filter: false,
    options: siblings.map(other => ({
      label: lastSegment(other.uniqueName),
      detail: other.kind,
      info: other.uniqueName,
      type: TYPES[other.kind],
      boost: key(other.uniqueName) === key(item.uniqueName) ? 1 : 0,
      apply: other.uniqueName,
    })),
  }
}

export function mdxMetadataCompletion(source: MdxMetadataSource) {
  const index = indexer(source)
  return async (context: CompletionContext): Promise<CompletionResult | null> => {
    if (context.explicit) {
      const offered = await alternatives(source, index(), context)
      if (offered) return offered
    }
    const line = context.state.doc.lineAt(context.pos)
    const before = line.text.slice(0, context.pos - line.from)
    const parsed = parseMdxCompletionContext(before, before.length)
    if (parsed.kind === 'none' || parsed.kind === 'fresh-word' || parsed.kind === 'after-on') return null

    if (parsed.kind === 'after-from') {
      const cubes = source.cubes()
      if (!cubes.length) return null
      const typed = before.slice(parsed.wordRange.start)
      return {
        from: line.from + parsed.wordRange.start,
        options: cubes.map(cube => {
          const label = bracketed(cube.caption)
          return { ...option(cube, label), boost: closeness(typed, label) }
        }),
      }
    }

    // bracket-chain
    const partial = before.slice(parsed.wordRange.start)
    // After a dot a bare word is a function: the server's part.
    if (partial && !partial.startsWith('[')) return null
    if (!partial && !context.explicit && !before.endsWith('.')) return null
    /*
     * The completion starts at the segment being typed and is filtered on
     * it; applying it puts the whole unique name over the whole chain.
     */
    const from = line.from + parsed.wordRange.start
    const chainStart = line.from + parsed.chainRange.start
    const map = index()

    if (parsed.isMeasuresChain) {
      const measures = [...map.values()].filter(item => item.kind === 'measure')
      return { from, options: measures.map(m => option(m, lastSegment(m.uniqueName), chainStart)) }
    }

    if (!parsed.chain.length) {
      // A fresh bracket: anything with a name, the whole name put in.
      const options = [...map.values()]
        .filter(item => item.kind !== 'member' || segments(item.uniqueName).length <= 2)
        .map(item => option(item, `[${item.caption.replace(/]/g, ']]')}]`, chainStart))
      return { from, options }
    }

    const prefix = parsed.chain.join('.')
    let found = childrenOf(map.values(), prefix)
    if (source.children && !found.some(item => item.kind === 'member')) {
      try {
        const fetched = await source.children(prefix)
        if (context.aborted) return null
        const seen = new Set(found.map(item => key(item.uniqueName)))
        found = [...found, ...fetched.filter(item => !seen.has(key(item.uniqueName)))]
      } catch {
        // Members are a bonus; the levels below are still offered.
      }
    }
    if (!found.length) return null
    return { from, options: found.map(item => option(item, lastSegment(item.uniqueName), chainStart)) }
  }
}

/* ---- hover ----------------------------------------------------------- */

/** The longest chain prefix the cube knows, for a chain under the pointer. */
function resolve(map: Map<string, MdxMetadataItem>, chain: string): MdxMetadataItem | null {
  const parts = chain.split(/\.(?=&?\[)/)
  for (let n = parts.length; n > 0; n--) {
    const found = map.get(key(parts.slice(0, n).join('.')))
    if (found) return found
  }
  return null
}

/*
 * The part of a chain up to and including the segment at an offset in it:
 * over `[Gender]` in `[Gender].[F]` that is `[Gender]`, over `[F]` the whole.
 */
function segmentAt(chain: string, offset: number): { from: number; to: number; prefix: string } {
  const parts = chain.split(/\.(?=&?\[)/)
  let from = 0
  for (const part of parts) {
    const to = from + part.length
    if (offset <= to) return { from, to, prefix: chain.slice(0, to) }
    from = to + 1
  }
  return { from: 0, to: chain.length, prefix: chain }
}

function chainAt(text: string, offset: number): { from: number; to: number; text: string } | null {
  for (const match of text.matchAll(CHAIN)) {
    const from = match.index ?? 0
    const to = from + match[0].length
    if (offset >= from && offset <= to) return { from, to, text: match[0] }
  }
  return null
}

const WORD = /[A-Za-z_][\w]*/g

/**
 * The cube object a position names: the segment under it with what comes
 * before - `[Gender]` in `[Gender].[F]` is the dimension, `[F]` the member -
 * or the cube for the name after FROM. What the hover describes.
 */
export function mdxMetadataAt(source: MdxMetadataSource) {
  const index = indexer(source)
  const cubes = cubeIndexer(source)
  return (state: EditorState, pos: number): { from: number; to: number; item: MdxMetadataItem } | null => {
    const line = state.doc.lineAt(pos)
    const chain = chainAt(line.text, pos - line.from)
    if (!chain) return null
    const start = line.from + chain.from
    const cube = cubeAfterFrom(cubes(), state.doc.sliceString(Math.max(0, start - 200), start), chain.text)
    if (cube) return { from: start, to: line.from + chain.to, item: cube }
    const segment = segmentAt(chain.text, pos - start)
    const item = resolve(index(), segment.prefix)
    return item ? { from: start + segment.from, to: start + segment.to, item } : null
  }
}

export function mdxMetadataHover(source: MdxMetadataSource): Extension {
  const nameAt = mdxMetadataAt(source)
  return hoverTooltip((view, pos) => {
    const line = view.state.doc.lineAt(pos)
    const at = pos - line.from
    if (chainAt(line.text, at)) {
      const named = nameAt(view.state, pos)
      if (!named) return null
      const { item } = named
      return {
        pos: named.from,
        end: named.to,
        above: true,
        create: () => tooltip(item.caption, `${item.kind} · ${item.uniqueName}`, item.description),
      }
    }
    for (const match of line.text.matchAll(WORD)) {
      const from = match.index ?? 0
      const to = from + match[0].length
      if (at < from || at > to) continue
      const name = match[0].toLowerCase()
      const fns = source.functions().filter(f => f.name.toLowerCase() === name)
      if (!fns.length) return null
      return {
        pos: line.from + from,
        end: line.from + to,
        above: true,
        create: () => tooltip(fns[0].name, fns.map(f => f.signature).join('\n'), fns[0].description),
      }
    }
    return null
  })
}

function tooltip(title: string, detail: string, description?: string) {
  const dom = document.createElement('div')
  dom.className = 'cm-mdx-hover'
  const head = dom.appendChild(document.createElement('strong'))
  head.textContent = title
  const code = dom.appendChild(document.createElement('code'))
  code.textContent = detail
  if (description) {
    const text = dom.appendChild(document.createElement('p'))
    text.textContent = description
  }
  return { dom }
}

/* ---- names in colour ----------------------------------------------- */

const marks: Record<MdxMetadataKind, Decoration> = Object.fromEntries(
  (['cube', 'dimension', 'hierarchy', 'level', 'member', 'measure', 'set', 'kpi'] as MdxMetadataKind[]).map(kind => [
    kind,
    Decoration.mark({ class: `cm-mdx-${kind}` }),
  ]),
) as Record<MdxMetadataKind, Decoration>

export function mdxMetadataHighlight(source: MdxMetadataSource): Extension {
  const index = indexer(source)
  const cubes = cubeIndexer(source)
  const build = (view: EditorView): DecorationSet => {
    const builder = new RangeSetBuilder<Decoration>()
    const map = index()
    const cubeMap = cubes()
    if (!map.size && !cubeMap.size) return builder.finish()
    for (const { from, to } of view.visibleRanges) {
      const text = view.state.doc.sliceString(from, to)
      for (const match of text.matchAll(CHAIN)) {
        const start = from + (match.index ?? 0)
        const before = view.state.doc.sliceString(Math.max(0, start - 200), start)
        const item = cubeAfterFrom(cubeMap, before, match[0]) ?? resolve(map, match[0])
        if (!item) continue
        builder.add(start, start + match[0].length, marks[item.kind])
      }
    }
    return builder.finish()
  }
  const plugin = ViewPlugin.fromClass(
    class {
      decorations: DecorationSet
      private version: number | undefined
      constructor(view: EditorView) {
        this.decorations = build(view)
        this.version = source.version?.()
      }
      update(update: ViewUpdate) {
        const version = source.version?.()
        if (update.docChanged || update.viewportChanged || version !== this.version) {
          this.version = version
          this.decorations = build(update.view)
        }
      }
    },
    { decorations: plugin => plugin.decorations },
  )
  /*
   * The mark wraps the tokens the syntax highlighter has already coloured;
   * those spans carry their own colour, so the kind's colour is set on
   * them too, or every bracketed name looks the same.
   */
  const theme = EditorView.baseTheme({
    '.cm-mdx-measure, .cm-mdx-measure *': { color: 'var(--color-measure, #d8a13c)' },
    '.cm-mdx-member, .cm-mdx-member *': { color: 'var(--color-member, #5fb98a)' },
    '.cm-mdx-level, .cm-mdx-level *, .cm-mdx-hierarchy, .cm-mdx-hierarchy *': { color: 'var(--color-accent, #4fa3d1)' },
    '.cm-mdx-dimension, .cm-mdx-dimension *': { color: 'var(--color-accent, #4fa3d1)', fontStyle: 'italic' },
    '.cm-mdx-set, .cm-mdx-set *, .cm-mdx-kpi, .cm-mdx-kpi *': { color: 'var(--color-fn, #c294d8)' },
    '.cm-mdx-cube, .cm-mdx-cube *': { color: 'var(--color-brand, #d8a13c)' },
    '.cm-mdx-hover': { padding: '4px 8px', maxWidth: '420px', fontSize: '12px' },
    '.cm-mdx-hover code': { display: 'block', whiteSpace: 'pre-wrap', opacity: '0.8', margin: '2px 0' },
    '.cm-mdx-hover p': { margin: '4px 0 0' },
  })
  return [plugin, theme]
}

/** Completion, hover and colour for one source - what a host attaches to the editor. */
export function mdxMetadata(source: MdxMetadataSource): Extension {
  /*
   * Made once: CodeMirror matches a running query to its source by
   * identity, and a source made afresh per lookup never gets its answer
   * shown - it stays pending for ever.
   */
  const data = [{ autocomplete: mdxMetadataCompletion(source) }]
  return [
    EditorState.languageData.of(() => data),
    // Alt+M, as in the MDX workbench: the alternatives to the name under the caret.
    keymap.of([{ key: 'Alt-m', run: startCompletion }]),
    mdxMetadataHover(source),
    mdxMetadataHighlight(source),
  ]
}
