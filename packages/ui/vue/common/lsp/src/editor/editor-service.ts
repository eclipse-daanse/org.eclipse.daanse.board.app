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
  autocompletion,
  closeBrackets,
  closeBracketsKeymap,
  completionKeymap,
} from '@codemirror/autocomplete'
import {
  defaultKeymap,
  history,
  historyKeymap,
  indentWithTab,
} from '@codemirror/commands'
import {
  bracketMatching,
  foldGutter,
  foldKeymap,
  indentOnInput,
  indentUnit,
} from '@codemirror/language'
import { lintGutter, lintKeymap } from '@codemirror/lint'
import { languageServerSupport } from '@codemirror/lsp-client'
import { highlightSelectionMatches, searchKeymap } from '@codemirror/search'
import { EditorState, type Extension } from '@codemirror/state'
import {
  EditorView,
  drawSelection,
  dropCursor,
  highlightActiveLine,
  highlightActiveLineGutter,
  highlightSpecialChars,
  keymap,
  lineNumbers,
  rectangularSelection,
} from '@codemirror/view'
import {
  startLanguageClient,
  type LanguageDescriptor,
} from 'org.eclipse.daanse.board.app.lib.lsp.core'
import { toFileUri } from '../state/editor-session.js'
import { editorTheme } from './theme.js'

export interface EditorHandle {
  readonly view: EditorView
  setDocument(
    language: LanguageDescriptor,
    uri: string,
    text: string,
  ): Promise<void>
  destroy(): void
}

function extensionsFor(
  language: LanguageDescriptor,
  uri: string,
  client: Parameters<typeof languageServerSupport>[0],
  extra: Extension[],
): Extension[] {
  return [
    lineNumbers(),
    highlightActiveLineGutter(),
    highlightSpecialChars(),
    history(),
    foldGutter(),
    drawSelection(),
    dropCursor(),
    EditorState.allowMultipleSelections.of(true),
    indentOnInput(),
    indentUnit.of('    '),
    bracketMatching(),
    closeBrackets(),
    rectangularSelection(),
    highlightActiveLine(),
    highlightSelectionMatches(),
    lintGutter(),
    keymap.of([
      ...closeBracketsKeymap,
      ...defaultKeymap,
      ...searchKeymap,
      ...historyKeymap,
      ...foldKeymap,
      ...completionKeymap,
      ...lintKeymap,
      indentWithTab,
    ]),

    // One language per editor. The theme is shared: every language package
    // emits the same token categories.
    language.support(),
    editorTheme(),

    autocompletion({ activateOnTyping: true }),

    // Whatever the consumer attaches — the playground supplies cube
    // metadata completion from the same cache its sidebar reads. Passed in
    // rather than imported, because that source needs a cube connection
    // and this package has no business knowing about one. CodeMirror
    // merges extra sources with the LSP's own rather than replacing it,
    // which is what keeps grammar keywords and metadata in one list.
    ...extra,

    languageServerSupport(client, toFileUri(uri), language.id),
  ]
}

export async function createEditor(options: {
  parent: HTMLElement
  language: LanguageDescriptor
  uri: string
  text: string
  extensions?: Extension[]
  onUpdate?: (view: EditorView, docChanged: boolean) => void
}): Promise<EditorHandle> {
  const extra = options.extensions ?? []
  let client = await startLanguageClient(options.language)

  const listener = EditorView.updateListener.of(update => {
    // Diagnostics arrive as a state-field change rather than a doc change,
    // so this cannot be narrowed to `update.docChanged` — the caller is
    // told which kind it was instead.
    options.onUpdate?.(update.view, update.docChanged)
  })

  let view = new EditorView({
    parent: options.parent,
    state: EditorState.create({
      doc: options.text,
      extensions: [
        ...extensionsFor(options.language, options.uri, client, extra),
        listener,
      ],
    }),
  })

  return {
    get view() {
      return view
    },
    async setDocument(language: LanguageDescriptor, uri: string, text: string) {
      client = await startLanguageClient(language)
      const parent = view.dom.parentElement!
      view.destroy()
      view = new EditorView({
        parent,
        state: EditorState.create({
          doc: text,
          extensions: [
            ...extensionsFor(language, uri, client, extra),
            listener,
          ],
        }),
      })
    },
    destroy() {
      view.destroy()
    },
  }
}
