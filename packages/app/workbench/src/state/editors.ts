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
 * One editor session per query tab: the document the MDX language server
 * knows, its parse trees and the caret, as ui.vue.common.lsp models them.
 * The tree models live here rather than in the structure pane, so switching
 * tabs keeps each tab's open branches and its selection.
 */

import { shallowReactive, shallowRef, type InjectionKey, type ShallowRef } from 'vue'
import type { EditorView } from '@codemirror/view'
import { MDX_LANGUAGE } from 'org.eclipse.daanse.board.app.lib.lsp.lang.mdx'
import {
  createAstTreeModel,
  createEditorSession,
  diagnosticsOf,
  type AstTreeModel,
  type DiagnosticEntry,
  type EditorSession,
} from 'org.eclipse.daanse.board.app.ui.vue.common.lsp'
import { readStored, writeStored } from './storage'
import type { QueryTab } from './workbench'

/** What the Editor component exposes, for the toolbar and the panes to drive it. */
export interface EditorControl {
  getText(): string
  setText(text: string): void
  insertAtCursor(text: string, caret?: number): void
  applyEdits(edits: Array<{ from: number; to: number; insert: string }>): void
  select(from: number, to?: number, focus?: boolean): void
  focus(): void
  view(): EditorView | undefined
}

export interface TabEditor {
  session: EditorSession
  ast: AstTreeModel
  cst: AstTreeModel
  control: ShallowRef<EditorControl | null>
  ready: ShallowRef<boolean>
  diagnostics: ShallowRef<DiagnosticEntry[]>
  /** What the editor reports after every update: caret, diagnostics. */
  onUpdate(view: EditorView): void
}

export function createEditors() {
  const editors = shallowReactive(new Map<string, TabEditor>())
  const depth = readStored<number | 'all'>('treeDepth', 7)

  function editorFor(tab: QueryTab): TabEditor {
    let editor = editors.get(tab.id)
    if (!editor) {
      const session = createEditorSession({ language: MDX_LANGUAGE, uri: tab.uri, text: tab.text })
      editor = {
        session,
        ast: createAstTreeModel(session, { mode: 'ast', depth }),
        cst: createAstTreeModel(session, { mode: 'cst', depth }),
        control: shallowRef(null),
        ready: shallowRef(false),
        diagnostics: shallowRef<DiagnosticEntry[]>([]),
        onUpdate(view: EditorView) {
          session.setView(view)
          const next = diagnosticsOf(view.state)
          const now = this.diagnostics.value
          // Every keystroke updates; only a changed list is a change.
          if (next.length !== now.length || next.some((d, i) => d.message !== now[i].message || d.from !== now[i].from)) {
            this.diagnostics.value = next
          }
        },
      }
      editors.set(tab.id, editor)
    }
    return editor
  }

  /*
   * The problem whose fixes were asked for from the editor (Ctrl+.): the
   * bottom pane brings the Problems tab up with it selected. A new object
   * every time, so asking twice for the same problem still arrives.
   */
  const fixesWanted = shallowRef<{ entry: DiagnosticEntry } | null>(null)

  /** Asks for the fixes of the problem under the caret; false when there is none. */
  function showFixes(tab: QueryTab): boolean {
    const editor = editors.get(tab.id)
    const view = editor?.control.value?.view()
    if (!editor || !view) return false
    const at = view.state.selection.main.head
    const entry = editor.diagnostics.value.find(d => d.from <= at && at <= d.to)
    if (!entry) return false
    fixesWanted.value = { entry }
    return true
  }

  function forget(tabId: string) {
    editors.get(tabId)?.session.dispose()
    editors.delete(tabId)
  }

  return {
    language: MDX_LANGUAGE,
    editorFor,
    forget,
    fixesWanted,
    showFixes,
    rememberDepth: (value: number | 'all') => writeStored('treeDepth', value),
  }
}

export type Editors = ReturnType<typeof createEditors>

export const EDITORS: InjectionKey<Editors> = Symbol('workbench editors')
