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
  The query as the language server prints it: the formatter's canonical
  layout of the open tab, read-only, refreshed as the text changes. Where
  the server cannot reprint the text - it does not parse - this says so.
-->
<script setup lang="ts">
import { inject, onBeforeUnmount, ref, watch } from 'vue'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { getLanguageClient } from 'org.eclipse.daanse.board.app.lib.lsp.core'
import { toFileUri } from 'org.eclipse.daanse.board.app.ui.vue.common.lsp'
import { WORKBENCH } from '../state/workbench'
import { EDITORS, type TabEditor } from '../state/editors'

const props = defineProps<{ editor: TabEditor }>()
const wb = inject(WORKBENCH)!
const editors = inject(EDITORS)!
const { t } = useTranslation('workbench')

const text = ref('')
const state = ref<'loading' | 'ok' | 'unavailable' | 'errors'>('loading')
let timer: ReturnType<typeof setTimeout> | undefined

interface TextEdit {
  range: { start: { line: number; character: number }; end: { line: number; character: number } }
  newText: string
}

/* The edits applied to a copy of the text, last first so earlier offsets hold. */
function applied(source: string, edits: TextEdit[]): string {
  const lines = source.split('\n')
  const offset = (p: { line: number; character: number }) =>
    lines.slice(0, p.line).reduce((sum, line) => sum + line.length + 1, 0) + p.character
  return [...edits]
    .map(e => ({ from: offset(e.range.start), to: offset(e.range.end), insert: e.newText }))
    .sort((a, b) => b.from - a.from)
    .reduce((acc, e) => acc.slice(0, e.from) + e.insert + acc.slice(e.to), source)
}

async function refresh() {
  const tab = wb.activeTab.value
  const client = getLanguageClient(editors.language.id)
  if (!tab || !client) return
  if ((props.editor.session.ast.value?.parserErrors ?? 0) > 0) {
    state.value = 'errors'
    return
  }
  try {
    client.sync()
    const edits = await client.request<any, TextEdit[] | null>('textDocument/formatting', {
      textDocument: { uri: toFileUri(tab.uri) },
      options: { tabSize: 2, insertSpaces: true },
    })
    text.value = applied(tab.text, edits ?? [])
    state.value = 'ok'
  } catch {
    state.value = 'unavailable'
  }
}

watch(
  () => [wb.activeTab.value?.text, props.editor.session.ast.value],
  () => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(refresh, 300)
  },
  { immediate: true },
)
onBeforeUnmount(() => timer && clearTimeout(timer))
</script>

<template>
  <div class="unparse">
    <p v-if="state === 'errors'" class="unparse__note">{{ t('Unparse.errors') }}</p>
    <p v-else-if="state === 'unavailable'" class="unparse__note">{{ t('Unparse.unavailable') }}</p>
    <pre v-else-if="state === 'ok'" class="unparse__text">{{ text }}</pre>
  </div>
</template>

<style scoped>
.unparse {
  height: 100%;
  overflow: auto;
  background: var(--color-bg);
}

.unparse__note {
  margin: 10px;
  color: var(--color-dim);
  font-size: var(--text-sm);
}

.unparse__text {
  margin: 0;
  padding: 8px 10px;
  font-family: var(--font-mono);
  font-size: 13px;
  white-space: pre;
}
</style>
