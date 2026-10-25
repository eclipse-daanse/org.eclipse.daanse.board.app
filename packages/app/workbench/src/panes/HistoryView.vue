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
  Every run, newest first: when, against which cube, how long, how it
  ended. A click puts the statement back into the open tab, the arrow opens
  it in a new one, the play button runs it again.
-->
<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { DButton, DIcon } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useFormat, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { WORKBENCH, starterQuery, type HistoryEntry } from '../state/workbench'
import { EDITORS } from '../state/editors'

// i18n-keys: workbench:History.error
// i18n-keys: workbench:History.aborted
const wb = inject(WORKBENCH)!
const editors = inject(EDITORS)!
const { t } = useTranslation('workbench')
const format = useFormat()

const filter = ref('')
const shown = computed(() => {
  const needle = filter.value.trim().toLowerCase()
  return needle ? wb.history.value.filter(e => e.mdx.toLowerCase().includes(needle) || (e.cube ?? '').toLowerCase().includes(needle)) : wb.history.value
})

const oneLine = (mdx: string) => {
  const text = mdx.replace(/\s+/g, ' ').trim()
  return text.length > 140 ? `${text.slice(0, 140)}…` : text
}

/*
 * Into the tab in front only when it holds nothing of its own - empty, the
 * starter query or this very statement. Otherwise a tab of its own: what
 * someone was writing is not overwritten by a look at the history.
 */
function load(entry: HistoryEntry) {
  const tab = wb.activeTab.value
  const text = tab?.text.trim() ?? ''
  const own = text !== '' && text !== entry.mdx.trim() && text !== starterQuery(wb.cube.value).trim()
  if (tab && !own) editors.editorFor(tab).control.value?.setText(entry.mdx)
  else wb.addTab(entry.mdx)
}

function again(entry: HistoryEntry) {
  load(entry)
  void wb.run(wb.activeTab.value, entry.mdx)
}

/* In the language on screen, not the browser's: a German workbench reads 27.10.2026, 14:03:11. */
const time = (ms: number) => format.date(ms, { dateStyle: 'short', timeStyle: 'medium' })
</script>

<template>
  <div class="history">
    <div class="history__bar">
      <input v-model="filter" type="search" class="history__filter" :placeholder="t('History.filter')" />
      <span class="history__count">{{ t('History.count', { count: wb.history.value.length }) }}</span>
      <DButton size="sm" intent="quiet" :disabled="!wb.history.value.length" @click="wb.clearHistory()">{{ t('History.clear') }}</DButton>
    </div>
    <p v-if="!shown.length" class="history__empty">{{ t('History.empty') }}</p>
    <ul v-else class="history__list">
      <li v-for="entry in shown" :key="entry.time + entry.mdx" class="entry" :class="`entry--${entry.outcome}`">
        <button type="button" class="entry__main" :title="entry.mdx" @click="load(entry)">
          <span class="entry__meta">
            <span class="entry__dot" aria-hidden="true" />
            {{ time(entry.time) }}
            <template v-if="entry.cube"> · {{ entry.cube }}</template>
            <template v-if="entry.durationMs !== undefined"> · {{ format.number(entry.durationMs) }} ms</template>
            <template v-if="entry.size !== undefined"> · {{ t('History.size', { count: entry.size }) }}</template>
            <template v-if="entry.outcome !== 'ok'"> · {{ t(`History.${entry.outcome}`) }}</template>
          </span>
          <code class="entry__mdx">{{ oneLine(entry.mdx) }}</code>
          <span v-if="entry.error" class="entry__error">{{ entry.error }}</span>
        </button>
        <DButton size="sm" intent="quiet" :title="t('History.rerun')" @click="again(entry)"><DIcon name="replay" size="sm" /></DButton>
        <DButton size="sm" intent="quiet" :title="t('History.newTab')" @click="wb.addTab(entry.mdx)"><DIcon name="open_in_new" size="sm" /></DButton>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.history {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  font-size: var(--text-sm);
}

.history__bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  border-bottom: 1px solid var(--color-divider);
}

.history__filter {
  flex: 1;
  font: inherit;
  padding: 2px 8px;
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm);
  background: var(--color-bg);
  color: var(--color-fg);
}

.history__count,
.history__empty {
  color: var(--color-dim);
}

.history__empty {
  margin: 12px;
}

.history__list {
  flex: 1;
  min-height: 0;
  overflow: auto;
  margin: 0;
  padding: 0;
  list-style: none;
}

.entry {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 6px;
  border-bottom: 1px solid var(--color-divider);
}

.entry__main {
  display: flex;
  flex-direction: column;
  gap: 1px;
  flex: 1;
  min-width: 0;
  padding: 3px 4px;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.entry__main:hover {
  background: var(--color-raised);
}

.entry__meta {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--color-dim);
  font-size: var(--text-xs);
}

.entry__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-ok);
}

.entry--error .entry__dot {
  background: var(--color-err);
}

.entry--aborted .entry__dot {
  background: var(--color-warn);
}

.entry__mdx {
  font-family: var(--font-mono);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.entry__error {
  color: var(--color-err);
  font-size: var(--text-xs);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
