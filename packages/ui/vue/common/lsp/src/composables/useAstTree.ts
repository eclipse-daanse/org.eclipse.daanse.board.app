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
 * The AST panel's model.
 *
 * Three sources, one shape. **CST mode** renders the concrete syntax tree of
 * the same parse - every token under the rule that consumed it, comments
 * included - with chains of single-child rules folded into one row.
 * **AST mode** renders the parse tree the session
 * already holds: every node, the property slot it occupies in its parent, and
 * its source range — for any language. **Outline mode** asks for standard
 * document symbols, which a language server may narrow to the statements and
 * declarations worth navigating by; not every language has such a provider, so
 * the descriptor says whether the mode is offered at all (`hasOutline`).
 *
 * Both collapse into `AstTreeRow`, so `AstTreeNode.vue` renders one thing and
 * the sync code has one implementation. Rows are matched to the caret by
 * range, because document symbols carry nothing else.
 *
 * The `langium/ast` request is *not* owned here — the session owns it and the
 * debounce, because a consumer may need the parse whether or not this panel is
 * mounted. The outline fetch piggybacks on that clock: a fresh parse means the
 * document has settled.
 *
 * Created per session and reached by injection, like the session itself: every
 * recursive row calls `useAstTree()`, and two editors on one page must not
 * share one tree.
 */
import {
  computed,
  inject,
  provide,
  reactive,
  ref,
  watch,
  type ComputedRef,
  type InjectionKey,
  type Ref,
} from 'vue'
import type { DocumentSymbol, Range } from 'vscode-languageserver-types'
import {
  getLanguageClient,
  type AstTreeNode,
  type CstTreeNode,
} from 'org.eclipse.daanse.board.app.lib.lsp.core'
import {
  rangeContains,
  toFileUri,
  useEditorSession,
  type EditorSession,
} from '../state/editor-session.js'

export type AstTreeMode = 'ast' | 'cst' | 'outline'

/** How many levels open by themselves; 'all' opens the whole tree. */
export type AstTreeDepth = number | 'all'

export interface AstTreeRow {
  id: string
  label: string
  detail?: string
  kind: AstTreeNode['kind'] | 'symbol' | 'composite' | 'leaf' | 'hidden'
  range?: Range
  /** Rules folded into this row, outermost first - CST mode only. */
  chain?: string[]
  /** The wire node the row was made from. */
  source?: AstTreeNode | CstTreeNode
  /** The AST row a CST row stands for. */
  astId?: string
  children: AstTreeRow[]
}

const INITIAL_DEPTH = 3

function slotLabel(node: AstTreeNode): string | undefined {
  if (!node.property) return undefined
  return node.index === undefined
    ? node.property
    : `${node.property}[${node.index}]`
}

function toRow(node: AstTreeNode): AstTreeRow {
  const slot = slotLabel(node)
  const label =
    node.kind === 'node'
      ? slot
        ? `${slot}: ${node.label}`
        : node.label
      : (slot ?? node.label)
  return {
    id: node.id,
    label,
    detail: node.kind === 'node' ? undefined : (node.value ?? node.label),
    kind: node.kind,
    range: node.range,
    source: node,
    children: node.children.map(toRow),
  }
}

/*
 * A rule calling a rule calling a rule is one row: the grammar is layered
 * by precedence, so `5` sits under a dozen expression levels, none of which
 * says anything. The row keeps the outermost name, the folded ones in
 * `chain`, and the innermost id - the one whose children it shows.
 */
function cstToRow(node: CstTreeNode): AstTreeRow {
  if (node.kind === 'leaf') {
    return {
      id: node.id,
      label: node.name,
      detail: JSON.stringify(node.text ?? ''),
      kind: node.hidden ? 'hidden' : 'leaf',
      range: node.range,
      source: node,
      children: [],
    }
  }
  const chain = [node.name]
  let inner = node
  let astId = node.astId
  while (inner.children.length === 1 && inner.children[0]!.kind === 'composite') {
    inner = inner.children[0]!
    chain.push(inner.name)
    astId ??= inner.astId
  }
  return {
    id: inner.id,
    label: chain.length > 1 ? `${node.name} ⟩${chain.length - 1}` : node.name,
    detail: `[${node.offset}..${node.offset + node.length})`,
    kind: 'composite',
    range: node.range,
    chain: chain.length > 1 ? chain : undefined,
    source: inner,
    astId,
    children: inner.children.map(cstToRow),
  }
}

function symbolToRow(symbol: DocumentSymbol, id: string): AstTreeRow {
  return {
    id,
    label: symbol.name,
    detail: symbol.detail || undefined,
    kind: 'symbol',
    range: {
      start: {
        line: symbol.range.start.line,
        character: symbol.range.start.character,
      },
      end: {
        line: symbol.range.end.line,
        character: symbol.range.end.character,
      },
    },
    children: (symbol.children ?? []).map((child, index) =>
      symbolToRow(child, `${id}.${index}`),
    ),
  }
}

async function loadOutline(session: EditorSession): Promise<AstTreeRow[]> {
  const client = getLanguageClient(session.language.value.id)
  if (!client) return []
  const symbols = await client.request<
    { textDocument: { uri: string } },
    DocumentSymbol[] | null
  >('textDocument/documentSymbol', {
    textDocument: { uri: toFileUri(session.uri.value) },
  })
  return (symbols ?? [])
    .filter((symbol): symbol is DocumentSymbol => 'range' in symbol)
    .map((symbol, index) => symbolToRow(symbol, `symbol.${index}`))
}

function pathToPosition(
  candidates: AstTreeRow[],
  position: { line: number; character: number },
): AstTreeRow[] {
  for (const row of candidates) {
    const contains = row.range ? rangeContains(row.range, position) : false
    if (contains || !row.range) {
      const inside = pathToPosition(row.children, position)
      if (contains) return [row, ...inside]
      if (inside.length > 0) return [row, ...inside]
    }
  }
  return []
}

export interface AstTreeModel {
  mode: Ref<AstTreeMode>
  outlineAvailable: ComputedRef<boolean>
  rows: Ref<AstTreeRow[]>
  activeId: Ref<string | null>
  /** The row the caret or a click selected. */
  activeRow: ComputedRef<AstTreeRow | null>
  depth: Ref<AstTreeDepth>
  setDepth(next: AstTreeDepth): void
  loading: Ref<boolean>
  outlineLoading: Ref<boolean>
  stale: Ref<boolean>
  parserErrors: ComputedRef<number>
  errorMessage: Ref<string | null>
  setMode(next: AstTreeMode): void
  isExpanded(row: AstTreeRow): boolean
  selectRow(row: AstTreeRow): void
}

export const AST_TREE_MODEL: InjectionKey<AstTreeModel> = Symbol(
  'olap-editor ast tree',
)

export function createAstTreeModel(
  session: EditorSession,
  options: { mode?: AstTreeMode; depth?: AstTreeDepth } = {},
): AstTreeModel {
  const mode = ref<AstTreeMode>(options.mode ?? 'ast')
  const depth = ref<AstTreeDepth>(options.depth ?? INITIAL_DEPTH)
  const byId = new Map<string, AstTreeRow>()
  const rows = ref<AstTreeRow[]>([])
  const expanded = reactive(new Set<string>())
  const activeId = ref<string | null>(null)
  const outlineLoading = ref(false)
  const parserErrors = computed(() => session.ast.value?.parserErrors ?? 0)

  const outlineAvailable = computed(
    () => session.language.value.hasOutline === true,
  )

  let lastSeed = ''
  let outlineToken = 0
  /* Every row id the tree has had: a row new after an edit opens as the depth says. */
  const known = new Set<string>()
  /*
   * A row clicked in the tree stays the marked one while the caret is
   * inside it: the click selects its text, the caret lands at the end of
   * that, and the innermost row there is not what was clicked.
   */
  let clicked: string | null = null

  function seedExpansion(seeds: AstTreeRow[], level = 0, onlyNew = false) {
    if (depth.value !== 'all' && level >= depth.value) return
    for (const row of seeds) {
      if (row.children.length === 0) continue
      if (!onlyNew || !known.has(row.id)) expanded.add(row.id)
      seedExpansion(row.children, level + 1, onlyNew)
    }
  }

  function remember(list: AstTreeRow[]) {
    for (const row of list) {
      known.add(row.id)
      remember(row.children)
    }
  }

  function index(list: AstTreeRow[]) {
    for (const row of list) {
      byId.set(row.id, row)
      index(row.children)
    }
  }

  function applyRows(next: AstTreeRow[]) {
    byId.clear()
    index(next)
    rows.value = next
    const seed = `${session.uri.value} ${mode.value}`
    // An empty first answer is no tree yet: the expansion waits for one.
    if (seed !== lastSeed && next.length > 0) {
      lastSeed = seed
      expanded.clear()
      known.clear()
      activeId.value = null
      clicked = null
      seedExpansion(next)
    } else if (next.length > 0) {
      // Rows the user opened or closed stay so; only rows new to the tree follow the depth.
      seedExpansion(next, 0, true)
    }
    remember(next)
  }

  async function rebuild() {
    if (!session.uri.value) {
      rows.value = []
      return
    }
    if (mode.value === 'ast') {
      applyRows(session.ast.value?.root ? [toRow(session.ast.value.root)] : [])
      return
    }
    if (mode.value === 'cst') {
      if (!session.cstWanted.value) {
        // The first time the tab opens: from now on every parse brings it.
        session.cstWanted.value = true
        void session.refreshAst()
      }
      applyRows(session.cst.value?.root ? [cstToRow(session.cst.value.root)] : [])
      return
    }
    const token = ++outlineToken
    outlineLoading.value = true
    try {
      const next = await loadOutline(session)
      if (token !== outlineToken) return
      applyRows(next)
    } finally {
      if (token === outlineToken) outlineLoading.value = false
    }
  }

  // A language switch can strand the panel in a mode the new language has no
  // provider for; fall back before the rebuild watcher sees it.
  watch(
    outlineAvailable,
    available => {
      if (!available && mode.value === 'outline') mode.value = 'ast'
    },
    { immediate: true },
  )

  // One clock: the session's debounced parse drives both modes.
  watch([session.ast, session.cst, mode, session.uri], () => void rebuild(), {
    immediate: true,
  })

  // Caret moves reveal the innermost row containing it.
  watch(session.cursorPosition, position => {
    if (!position || rows.value.length === 0) return
    const path = pathToPosition(rows.value, position)
    if (path.length === 0) return
    for (const row of path.slice(0, -1)) expanded.add(row.id)
    if (clicked && path.some(row => row.id === clicked)) {
      activeId.value = clicked
      return
    }
    clicked = null
    activeId.value = path[path.length - 1].id
  })

  return {
    mode,
    outlineAvailable,
    rows,
    activeId,
    activeRow: computed(() => {
      // Read rows so the lookup follows a rebuild.
      void rows.value
      return activeId.value ? (byId.get(activeId.value) ?? null) : null
    }),
    depth,
    setDepth: (next: AstTreeDepth) => {
      depth.value = next
      expanded.clear()
      seedExpansion(rows.value)
      // The way to the marked row stays open whatever the depth.
      if (activeId.value && session.cursorPosition.value) {
        for (const row of pathToPosition(rows.value, session.cursorPosition.value).slice(0, -1)) expanded.add(row.id)
      }
    },
    loading: session.astLoading,
    outlineLoading,
    stale: session.astStale,
    parserErrors,
    errorMessage: session.astError,
    setMode: (next: AstTreeMode) => {
      if (next === 'outline' && !outlineAvailable.value) return
      mode.value = next
    },
    isExpanded: (row: AstTreeRow) => expanded.has(row.id),
    selectRow: (row: AstTreeRow) => {
      activeId.value = row.id
      clicked = row.id
      if (row.range) session.revealRange(row.range)
      if (row.children.length === 0) return
      if (expanded.has(row.id)) expanded.delete(row.id)
      else expanded.add(row.id)
    },
  }
}

export function provideAstTree(
  session?: EditorSession,
  options?: { mode?: AstTreeMode; depth?: AstTreeDepth },
): AstTreeModel {
  const model = createAstTreeModel(session ?? useEditorSession(), options)
  provide(AST_TREE_MODEL, model)
  return model
}

export function useAstTree(): AstTreeModel {
  const model = inject(AST_TREE_MODEL)
  if (!model) {
    throw new Error(
      'No AST tree model provided. Call provideAstTree() in a parent component.',
    )
  }
  return model
}
