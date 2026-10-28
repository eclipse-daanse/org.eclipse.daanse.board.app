<!--
Copyright (c) 2026 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
-->

<script setup lang="ts">
/*
 * A plain CodeMirror for the statement the harness runs: MDX coloured by a
 * small stream tokenizer, no language server. Mod-Enter runs it.
 */
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { EditorState } from '@codemirror/state'
import { EditorView, keymap, lineNumbers, highlightActiveLine } from '@codemirror/view'
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands'
import { HighlightStyle, StreamLanguage, bracketMatching, syntaxHighlighting } from '@codemirror/language'
import { tags } from '@lezer/highlight'

const text = defineModel<string>({ required: true })
const emit = defineEmits<{ run: [] }>()

const KEYWORDS = new Set(
  `select from where on with member set as non empty dimension properties cell
  columns rows pages chapters sections axis and or not is null case when then else end
  self before after self_and_before self_and_after before_and_after leaves`
    .split(/\s+/)
    .filter(Boolean),
)

const mdx = StreamLanguage.define<{ comment: boolean }>({
  name: 'mdx',
  startState: () => ({ comment: false }),
  token(stream, state) {
    if (state.comment) {
      if (stream.skipTo('*/')) {
        stream.match('*/')
        state.comment = false
      } else stream.skipToEnd()
      return 'comment'
    }
    if (stream.eatSpace()) return null
    if (stream.match('/*')) {
      state.comment = true
      return 'comment'
    }
    if (stream.match('//') || stream.match('--')) {
      stream.skipToEnd()
      return 'comment'
    }
    // A bracketed name may hold anything but a lone ], which it doubles.
    if (stream.match(/^\[(?:[^\]]|\]\])*\]/)) return 'variableName'
    if (stream.match(/^"(?:[^"]|"")*"/) || stream.match(/^'(?:[^']|'')*'/)) return 'string'
    if (stream.match(/^\d+(\.\d+)?/)) return 'number'
    if (stream.match(/^&?[A-Za-z_][\w]*/)) {
      const word = stream.current().toLowerCase()
      if (KEYWORDS.has(word)) return 'keyword'
      return stream.peek() === '(' ? 'function' : 'name'
    }
    stream.next()
    return 'operator'
  },
  languageData: { commentTokens: { line: '//', block: { open: '/*', close: '*/' } } },
})

const colours = HighlightStyle.define([
  { tag: tags.keyword, color: 'var(--color-accent)', fontWeight: '600' },
  { tag: tags.variableName, color: 'var(--color-fg)' },
  { tag: [tags.function(tags.variableName), tags.name], color: 'var(--color-warn)' },
  { tag: tags.string, color: 'var(--color-ok)' },
  { tag: tags.number, color: 'var(--color-ok)' },
  { tag: tags.comment, color: 'var(--color-dim)', fontStyle: 'italic' },
  { tag: tags.operator, color: 'var(--color-dim)' },
])

const theme = EditorView.theme({
  '&': { height: '100%', fontSize: 'var(--text-sm)', backgroundColor: 'var(--color-bg)', color: 'var(--color-fg)' },
  '.cm-scroller': { fontFamily: 'var(--font-mono)' },
  '.cm-content': { caretColor: 'var(--color-fg)' },
  '.cm-gutters': { backgroundColor: 'var(--color-pane)', color: 'var(--color-dim)', border: 'none' },
  '.cm-activeLine, .cm-activeLineGutter': { backgroundColor: 'color-mix(in srgb, var(--color-raised) 60%, transparent)' },
  '&.cm-focused': { outline: 'none' },
  '&.cm-focused .cm-selectionBackground, .cm-selectionBackground': {
    backgroundColor: 'color-mix(in srgb, var(--color-accent) 30%, transparent)',
  },
})

const host = ref<HTMLElement | null>(null)
let view: EditorView | null = null

onMounted(() => {
  view = new EditorView({
    parent: host.value!,
    state: EditorState.create({
      doc: text.value,
      extensions: [
        lineNumbers(),
        highlightActiveLine(),
        history(),
        bracketMatching(),
        EditorView.lineWrapping,
        mdx,
        syntaxHighlighting(colours),
        theme,
        keymap.of([
          { key: 'Mod-Enter', run: () => (emit('run'), true) },
          ...defaultKeymap,
          ...historyKeymap,
        ]),
        EditorView.updateListener.of(update => {
          if (update.docChanged) text.value = update.state.doc.toString()
        }),
      ],
    }),
  })
})

// Text set from outside (a reset) replaces the document; typing does not loop back.
watch(text, value => {
  if (view && value !== view.state.doc.toString()) {
    view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: value } })
  }
})

onBeforeUnmount(() => view?.destroy())
</script>

<template>
  <div ref="host" class="mdx-editor" />
</template>

<style scoped>
.mdx-editor {
  height: 100%;
  min-height: 0;
  overflow: hidden;
}
</style>
