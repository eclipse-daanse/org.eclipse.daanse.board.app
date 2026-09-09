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

import {
  inject,
  provide,
  ref,
  shallowRef,
  type InjectionKey,
  type Ref,
} from 'vue'
import type { EditorView } from '@codemirror/view'
import type { Position, Range } from 'vscode-languageserver-types'
import type {
  AstRequestParams,
  AstTreeResult,
  LanguageDescriptor,
} from 'org.eclipse.daanse.board.app.lib.lsp.core'
import {
  AST_REQUEST,
  getLanguageClient,
} from 'org.eclipse.daanse.board.app.lib.lsp.core'

const DEBOUNCE_MS = 300

export interface EditorSession {
  language: Ref<LanguageDescriptor>
  uri: Ref<string>
  text: Ref<string>
  cursorPosition: Ref<Position | null>

  ast: Ref<AstTreeResult | null>
  astLoading: Ref<boolean>
  astStale: Ref<boolean>
  astError: Ref<string | null>

  setView(view: EditorView | undefined): void
  revealRange(range: Range): void
  refreshAst(): Promise<void>
  scheduleAstRefresh(): void
  dispose(): void
}

export const EDITOR_SESSION: InjectionKey<EditorSession> = Symbol(
  'olap-editor session',
)

export function createEditorSession(options: {
  language: LanguageDescriptor
  uri: string
  text?: string
}): EditorSession {
  const language = ref(options.language) as Ref<LanguageDescriptor>
  const uri = ref(options.uri)
  const text = ref(options.text ?? '')
  const cursorPosition = ref<Position | null>(null)

  const ast = ref<AstTreeResult | null>(null)
  const astLoading = ref(false)
  const astStale = ref(false)
  const astError = ref<string | null>(null)

  // Shallow: CodeMirror's view is a large object graph and must not be proxied.
  const view = shallowRef<EditorView | undefined>()
  let timer: ReturnType<typeof setTimeout> | undefined
  let token = 0

  async function refreshAst(): Promise<void> {
    const current = ++token
    const client = getLanguageClient(language.value.id)
    if (!client) {
      astError.value = `The ${language.value.label} language server is not connected.`
      return
    }
    astLoading.value = true
    try {
      const result = await client.request<AstRequestParams, AstTreeResult>(
        AST_REQUEST,
        {
          textDocument: { uri: toFileUri(uri.value) },
        },
      )
      // A slower earlier request must not overwrite a newer parse.
      if (current !== token) return
      ast.value = result
      astError.value = null
      astStale.value = false
    } catch (error) {
      if (current !== token) return
      astError.value = error instanceof Error ? error.message : String(error)
    } finally {
      if (current === token) astLoading.value = false
    }
  }

  function scheduleAstRefresh(): void {
    astStale.value = true
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => void refreshAst(), DEBOUNCE_MS)
  }

  return {
    language,
    uri,
    text,
    cursorPosition,
    ast,
    astLoading,
    astStale,
    astError,
    setView(next) {
      view.value = next
      if (!next) {
        cursorPosition.value = null
        return
      }
      const head = next.state.selection.main.head
      const line = next.state.doc.lineAt(head)
      const position = { line: line.number - 1, character: head - line.from }
      // Assigning a fresh object on every keystroke would wake the
      // caret watcher in `useAstTree` whether or not the caret moved.
      const current = cursorPosition.value
      if (
        current?.line !== position.line ||
        current?.character !== position.character
      ) {
        cursorPosition.value = position
      }
    },
    revealRange(range) {
      const instance = view.value
      if (!instance) return
      const doc = instance.state.doc
      if (range.start.line >= doc.lines || range.end.line >= doc.lines) return
      // A server may report a character past the end of its line — an
      // exclusive end column on the last character, say. CodeMirror
      // throws on an out-of-range selection, so clamp to the line.
      const offsetIn = (position: Position): number => {
        const docLine = doc.line(position.line + 1)
        return Math.min(docLine.from + position.character, docLine.to)
      }
      // `scrollIntoView` without `focus`: the click came from the tree,
      // and taking focus away would break scrolling through nodes.
      instance.dispatch({
        selection: { anchor: offsetIn(range.start), head: offsetIn(range.end) },
        scrollIntoView: true,
      })
    },
    refreshAst,
    scheduleAstRefresh,
    dispose() {
      if (timer) clearTimeout(timer)
      token++
      view.value = undefined
      ast.value = null
    },
  }
}

export function provideEditorSession(session: EditorSession): EditorSession {
  provide(EDITOR_SESSION, session)
  return session
}

export function useEditorSession(): EditorSession {
  const session = inject(EDITOR_SESSION)
  if (!session) {
    throw new Error(
      'No editor session provided. Call provideEditorSession() in a parent component.',
    )
  }
  return session
}

/**
 * Turns a workspace path into a real `file://` URI.
 *
 * LSP identifies documents by URI and Langium's `ServiceRegistry` resolves the
 * language by parsing that URI and looking at the file extension. A bare path
 * parses to a URI with no scheme, no language is found, and the server
 * silently ignores the document — the client still connects, so the only
 * symptom is that nothing ever produces a diagnostic or a completion.
 */
export function toFileUri(uri: string): string {
  return /^[a-z][a-z\d+.-]*:/i.test(uri)
    ? uri
    : `file://${uri.startsWith('/') ? '' : '/'}${uri}`
}

export function rangeContains(range: Range, position: Position): boolean {
  const afterStart =
    position.line > range.start.line ||
    (position.line === range.start.line &&
      position.character >= range.start.character)
  const beforeEnd =
    position.line < range.end.line ||
    (position.line === range.end.line &&
      position.character <= range.end.character)
  return afterStart && beforeEnd
}
