<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<!--
  The fixes the language server offers for one problem - a misspelt
  function replaced by the one it resembles - each applied as one edit.
-->
<script setup lang="ts">
import { inject, onMounted, ref } from 'vue'
import { DButton } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { getLanguageClient } from 'org.eclipse.daanse.board.app.lib.lsp.core'
import { toFileUri, type DiagnosticEntry } from 'org.eclipse.daanse.board.app.ui.vue.common.lsp'
import { WORKBENCH } from '../state/workbench'
import { EDITORS } from '../state/editors'

const props = defineProps<{ diagnostic: DiagnosticEntry }>()

const wb = inject(WORKBENCH)!
const editors = inject(EDITORS)!
const { t } = useTranslation('workbench')

interface TextEdit {
  range: { start: { line: number; character: number }; end: { line: number; character: number } }
  newText: string
}
interface CodeAction {
  title: string
  edit?: { changes?: Record<string, TextEdit[]> }
}

const actions = ref<CodeAction[] | null>(null)

function positionOf(offset: number) {
  const view = editor()?.control.value?.view()
  if (!view) return { line: 0, character: 0 }
  const line = view.state.doc.lineAt(offset)
  return { line: line.number - 1, character: offset - line.from }
}

function editor() {
  return wb.activeTab.value ? editors.editorFor(wb.activeTab.value) : null
}

onMounted(async () => {
  const tab = wb.activeTab.value
  const client = getLanguageClient(editors.language.id)
  if (!tab || !client) {
    actions.value = []
    return
  }
  const range = { start: positionOf(props.diagnostic.from), end: positionOf(props.diagnostic.to) }
  try {
    const answer = await client.request<any, CodeAction[] | null>('textDocument/codeAction', {
      textDocument: { uri: toFileUri(tab.uri) },
      range,
      context: { diagnostics: [{ range, message: props.diagnostic.message, severity: 1 }] },
    })
    actions.value = (answer ?? []).filter(a => a.edit?.changes)
  } catch {
    actions.value = []
  }
})

function apply(action: CodeAction) {
  const tab = wb.activeTab.value
  const view = editor()?.control.value?.view()
  if (!tab || !view) return
  const doc = view.state.doc
  const offset = (p: { line: number; character: number }) => Math.min(doc.line(p.line + 1).from + p.character, doc.length)
  const edits = Object.values(action.edit?.changes ?? {}).flat()
  editor()?.control.value?.applyEdits(edits.map(e => ({ from: offset(e.range.start), to: offset(e.range.end), insert: e.newText })))
}
</script>

<template>
  <div class="fixes">
    <p v-if="actions === null" class="fixes__none">{{ t('Problems.looking') }}</p>
    <p v-else-if="!actions.length" class="fixes__none">{{ t('Problems.noFix') }}</p>
    <DButton v-for="action in actions ?? []" :key="action.title" size="sm" @click="apply(action)">⚡ {{ action.title }}</DButton>
  </div>
</template>

<style scoped>
.fixes {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 4px 0;
}

.fixes__none {
  margin: 0;
  color: var(--color-dim);
  font-size: var(--text-xs);
}
</style>
