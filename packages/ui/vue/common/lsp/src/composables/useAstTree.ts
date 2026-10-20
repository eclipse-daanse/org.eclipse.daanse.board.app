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
 * Two sources, one shape. **AST mode** renders the parse tree the session
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
} from 'org.eclipse.daanse.board.app.lib.lsp.core'
import {
  rangeContains,
  toFileUri,
  useEditorSession,
  type EditorSession,
} from '../state/editor-session.js'

export type AstTreeMode = 'ast' | 'outline'

export interface AstTreeRow {
  id: string
  label: string
  detail?: string
  kind: AstTreeNode['kind'] | 'symbol'
  range?: Range
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
    children: node.children.map(toRow),
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

export function createAstTreeModel(session: EditorSession): AstTreeModel {
  const mode = ref<AstTreeMode>('ast')
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

  function seedExpansion(seeds: AstTreeRow[], depth = 0) {
    if (depth >= INITIAL_DEPTH) return
    for (const row of seeds) {
      if (row.children.length === 0) continue
      expanded.add(row.id)
      seedExpansion(row.children, depth + 1)
    }
  }

  function applyRows(next: AstTreeRow[]) {
    rows.value = next
    const seed = `${session.uri.value} ${mode.value}`
    if (seed !== lastSeed) {
      lastSeed = seed
      expanded.clear()
      activeId.value = null
      seedExpansion(next)
    }
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
  watch([session.ast, mode, session.uri], () => void rebuild(), {
    immediate: true,
  })

  // Caret moves reveal the innermost row containing it.
  watch(session.cursorPosition, position => {
    if (!position || rows.value.length === 0) return
    const path = pathToPosition(rows.value, position)
    if (path.length === 0) return
    for (const row of path.slice(0, -1)) expanded.add(row.id)
    activeId.value = path[path.length - 1].id
  })

  return {
    mode,
    outlineAvailable,
    rows,
    activeId,
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
      if (row.range) session.revealRange(row.range)
      if (row.children.length === 0) return
      if (expanded.has(row.id)) expanded.delete(row.id)
      else expanded.add(row.id)
    },
  }
}

export function provideAstTree(session?: EditorSession): AstTreeModel {
  const model = createAstTreeModel(session ?? useEditorSession())
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
