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
  The bottom pane: the result of the open tab, a rowset the explorer
  brought up, the open tab's problems, the history of runs and the log of
  every request.
-->
<script setup lang="ts">
import { computed, inject, ref, shallowRef, watch } from 'vue'
import { DTabs } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { DiagnosticsPanel, type DiagnosticEntry } from 'org.eclipse.daanse.board.app.ui.vue.common.lsp'
import { RowsetGrid } from 'org.eclipse.daanse.board.app.ui.vue.common.xmla'
import { WORKBENCH } from '../state/workbench'
import { EDITORS } from '../state/editors'
import ResultsView from './ResultsView.vue'
import HistoryView from './HistoryView.vue'
import LogView from './LogView.vue'
import QuickFixes from '../components/QuickFixes.vue'

const props = defineProps<{ rowset: { title: string; rows: Record<string, unknown>[]; fileName: string } | null }>()

const wb = inject(WORKBENCH)!
const editors = inject(EDITORS)!
const { t } = useTranslation('workbench')

type Tab = 'results' | 'rowset' | 'problems' | 'history' | 'log'
const tab = ref<Tab>('results')

const editor = computed(() => (wb.activeTab.value ? editors.editorFor(wb.activeTab.value) : null))
const diagnostics = computed(() => editor.value?.diagnostics.value ?? [])
const errors = computed(() => diagnostics.value.filter(d => d.severity === 'error').length)

const tabs = computed(() => [
  { id: 'results', label: t('Bottom.results') },
  ...(props.rowset ? [{ id: 'rowset', label: t('Bottom.rowset'), count: props.rowset.rows.length }] : []),
  { id: 'problems', label: t('Bottom.problems'), count: diagnostics.value.length || undefined },
  { id: 'history', label: t('Bottom.history'), count: wb.history.value.length || undefined },
  { id: 'log', label: t('Bottom.log'), count: wb.exchanges.value.length || undefined },
])

/* A run brings its result to the front; a rowset from the explorer, its rows. */
watch(() => wb.activeTab.value?.result?.startedAt, started => {
  if (started) tab.value = 'results'
})
watch(() => props.rowset, rowset => {
  if (rowset) tab.value = 'rowset'
})

/* Shallow: compared by identity with the list's entries, which a deep ref would proxy. */
const selected = shallowRef<DiagnosticEntry | null>(null)

/* Ctrl+. in the editor: the problem under the caret, with its fixes. */
watch(editors.fixesWanted, wanted => {
  if (!wanted) return
  tab.value = 'problems'
  selected.value = wanted.entry
})
function select(entry: DiagnosticEntry) {
  selected.value = selected.value === entry ? null : entry
  editor.value?.control.value?.select(entry.from, entry.to, true)
}
</script>

<template>
  <section class="bottom" :aria-label="t('Bottom.title')">
    <DTabs v-model="tab" class="bottom__tabs" :tabs="tabs" :label="t('Bottom.title')" />
    <span v-if="errors" class="bottom__errors">{{ t('Bottom.errors', { count: errors }) }}</span>
    <div class="bottom__body">
      <ResultsView v-if="tab === 'results'" :result="wb.activeTab.value?.result ?? null" />
      <RowsetGrid
        v-else-if="tab === 'rowset' && rowset"
        :rows="rowset.rows"
        :title="rowset.title"
        :file-name="rowset.fileName"
      />
      <DiagnosticsPanel
        v-else-if="tab === 'problems'"
        :diagnostics="diagnostics"
        :ready="!!editor?.ready.value"
        :selected="selected"
        @select="select"
      >
        <template #details="{ diagnostic }">
          <QuickFixes :diagnostic="diagnostic" />
        </template>
      </DiagnosticsPanel>
      <HistoryView v-else-if="tab === 'history'" />
      <LogView v-else-if="tab === 'log'" />
    </div>
  </section>
</template>

<style scoped>
.bottom {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  background: var(--color-pane);
  color: var(--color-fg);
}

.bottom__tabs {
  flex: none;
  padding: 0 8px;
  border-bottom: 1px solid var(--color-divider);
}

.bottom__errors {
  position: absolute;
  top: 6px;
  right: 10px;
  color: var(--color-err);
  font-size: var(--text-xs);
}

.bottom__body {
  flex: 1;
  min-height: 0;
  overflow: hidden;
  background: var(--color-bg);
}
</style>
