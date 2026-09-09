<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { Extension } from '@codemirror/state'
import type { EditorView } from '@codemirror/view'
import type { LanguageDescriptor } from 'org.eclipse.daanse.board.app.lib.lsp.core'
import { createEditor, type EditorHandle } from '../editor/editor-service.js'

const props = defineProps<{
  language: LanguageDescriptor
  uri: string
  text: string
  extensions?: Extension[]
}>()

const emit = defineEmits<{
  (event: 'ready'): void
  (event: 'error', message: string): void
  (event: 'update', view: EditorView): void
  (event: 'textChanged', text: string): void
}>()

const container = ref<HTMLDivElement | null>(null)
const status = ref<'starting' | 'ready' | 'failed'>('starting')
const errorMessage = ref('')

let handle: EditorHandle | undefined

onMounted(async () => {
  if (!container.value) {
    return
  }
  try {
    handle = await createEditor({
      parent: container.value,
      language: props.language,
      uri: props.uri,
      text: props.text,
      extensions: props.extensions,
      onUpdate: (view, docChanged) => {
        emit('update', view)
        if (docChanged) emit('textChanged', view.state.doc.toString())
      },
    })
    status.value = 'ready'
    emit('ready')
    emit('update', handle.view)
    emit('textChanged', handle.view.state.doc.toString())
  } catch (error) {
    status.value = 'failed'
    errorMessage.value = error instanceof Error ? error.message : String(error)
    emit('error', errorMessage.value)
  }
})

watch(
  () => [props.uri, props.language] as const,
  async ([uri, language]) => {
    if (status.value !== 'ready' || !handle) {
      return
    }
    await handle.setDocument(language, uri, props.text)
    emit('update', handle.view)
    emit('textChanged', handle.view.state.doc.toString())
  },
)

onBeforeUnmount(() => {
  handle?.destroy()
  handle = undefined
})

// --- Drag-drop from the metadata tree -------------------------------------
// Tree rows put their XMLA unique name on the drag's `text/plain` payload; it
// is already a valid, bracket-quoted MDX reference, so it can be spliced in
// verbatim.
//
// CodeMirror's own `dropCursor()` shows the insertion point while dragging;
// the drop itself is handled here so the payload is inserted as text rather
// than treated as an editor-internal move.

function onDragOver(event: DragEvent) {
  if (!event.dataTransfer) return
  event.preventDefault()
  event.dataTransfer.dropEffect = 'copy'
}

function onDrop(event: DragEvent) {
  const text = event.dataTransfer?.getData('text/plain')
  const view = handle?.view
  if (!text || !view) return
  event.preventDefault()

  const pos =
    view.posAtCoords({ x: event.clientX, y: event.clientY }) ??
    view.state.selection.main.head
  view.dispatch({
    changes: { from: pos, insert: text },
    selection: { anchor: pos + text.length },
  })
  view.focus()
}
</script>

<template>
  <div class="editor-shell" @dragover="onDragOver" @drop="onDrop">
    <div ref="container" class="editor-host"></div>
    <div v-if="status === 'starting'" class="editor-overlay">
      <span class="spinner" aria-hidden="true"></span>
      Starting the MDX language server…
    </div>
    <div
      v-else-if="status === 'failed'"
      class="editor-overlay editor-overlay--error"
    >
      <strong>The editor failed to start.</strong>
      <code>{{ errorMessage }}</code>
    </div>
  </div>
</template>

<style scoped>
.editor-shell {
  position: relative;
  height: 100%;
  min-height: 0;
  overflow: hidden;
}

.editor-host {
  height: 100%;
  min-height: 0;
}

.editor-host :deep(.cm-editor) {
  height: 100%;
}

.editor-host :deep(.cm-editor.cm-focused) {
  outline: none;
}

.editor-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
  background: var(--surface);
  color: var(--text-muted);
  font-size: 0.9rem;
  text-align: center;
  padding: 1.5rem;
}

.editor-overlay--error {
  color: var(--danger);
}

.editor-overlay code {
  max-width: 40rem;
  font-size: 0.8rem;
  color: var(--text-muted);
  white-space: pre-wrap;
  word-break: break-word;
}

.spinner {
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .spinner {
    animation: none;
  }
}
</style>
