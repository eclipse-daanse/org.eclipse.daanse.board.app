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
  The functions a server offers, from MDSCHEMA_FUNCTIONS: filterable,
  grouped by interface, library or origin. A row drags into the editor as
  the call it stands for; a click asks the host to show every overload.
-->
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { entryGroupLabel, groupFunctions, insertionOf, representativeOf, signatureOf, type FunctionEntry, type FunctionGrouping, type FunctionRow } from './functions'

const props = defineProps<{ functions: FunctionRow[] }>()
const emit = defineEmits<{
  (event: 'info', entry: FunctionEntry): void
  (event: 'insert', text: string, caret?: number): void
}>()

const { t } = useTranslation('xmla')

const filter = ref('')
const groupBy = ref<FunctionGrouping>('KIND')
const closed = ref<string[]>([])

const entries = computed(() => groupFunctions(props.functions))
const shown = computed(() => {
  const needle = filter.value.trim().toLowerCase()
  if (!needle) return entries.value
  return entries.value.filter(
    e =>
      e.name.toLowerCase().includes(needle) ||
      e.description.toLowerCase().includes(needle) ||
      e.overloads.some(o => String(o.PARAMETER_LIST ?? '').toLowerCase().includes(needle)),
  )
})
const groups = computed(() => {
  const byGroup = new Map<string, FunctionEntry[]>()
  for (const entry of shown.value) {
    const raw = entryGroupLabel(entry, groupBy.value)
    const label = groupBy.value === 'KIND' ? (raw === 'dot' ? t('Functions.kindDot') : t('Functions.kindCall')) : raw || t('Functions.ungrouped')
    byGroup.set(label, [...(byGroup.get(label) ?? []), entry])
  }
  return [...byGroup.entries()].sort(([a], [b]) => a.localeCompare(b))
})

function toggle(group: string) {
  closed.value = closed.value.includes(group) ? closed.value.filter(g => g !== group) : [...closed.value, group]
}

function drag(event: DragEvent, entry: FunctionEntry) {
  event.dataTransfer?.setData('text/plain', insertionOf(entry).text)
  if (event.dataTransfer) event.dataTransfer.effectAllowed = 'copy'
}

/*
 * A click opens the info, a double click inserts. The click waits for the
 * double click it may be part of - else both fire, and the dialog the
 * first click opened is closed by the second.
 */
let pending: ReturnType<typeof setTimeout> | null = null
const DOUBLE_CLICK_MS = 250

function clicked(entry: FunctionEntry) {
  if (pending) clearTimeout(pending)
  pending = setTimeout(() => {
    pending = null
    emit('info', entry)
  }, DOUBLE_CLICK_MS)
}

function doubleClicked(entry: FunctionEntry) {
  if (pending) clearTimeout(pending)
  pending = null
  const { text, caret } = insertionOf(entry)
  emit('insert', text, caret)
}
</script>

<template>
  <div class="functions">
    <div class="functions__bar">
      <input v-model="filter" type="search" class="functions__filter" :placeholder="t('Functions.filter')" />
      <select v-model="groupBy" class="functions__group" :aria-label="t('Functions.groupBy')">
        <option value="KIND">{{ t('Functions.byKind') }}</option>
        <option value="INTERFACE_NAME">{{ t('Functions.byInterface') }}</option>
        <option value="LIBRARY_NAME">{{ t('Functions.byLibrary') }}</option>
        <option value="ORIGIN">{{ t('Functions.byOrigin') }}</option>
      </select>
    </div>
    <p v-if="!functions.length" class="functions__empty">{{ t('Functions.none') }}</p>
    <div class="functions__list">
      <section v-for="[group, list] in groups" :key="group">
        <button type="button" class="functions__head" :aria-expanded="!closed.includes(group) || !!filter" @click="toggle(group)">
          <span>{{ closed.includes(group) && !filter ? '▸' : '▾' }} {{ group }}</span>
          <span class="functions__count">{{ list.length }}</span>
        </button>
        <template v-if="!closed.includes(group) || filter">
          <div
            v-for="entry in list"
            :key="entry.name"
            class="functions__row"
            draggable="true"
            tabindex="0"
            :title="entry.description"
            @dragstart="drag($event, entry)"
            @click="clicked(entry)"
            @keydown.enter="emit('info', entry)"
            @dblclick="doubleClicked(entry)"
          >
            <span class="functions__name">ƒ {{ entry.name }}</span>
            <span class="functions__params">{{ signatureOf(representativeOf(entry)) }}</span>
            <span v-if="entry.overloads.length > 1" class="functions__overloads">{{ t('Functions.overloads', { count: entry.overloads.length }) }}</span>
          </div>
        </template>
      </section>
    </div>
  </div>
</template>

<style scoped>
.functions {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  font-size: var(--text-sm);
}

.functions__bar {
  display: flex;
  gap: 6px;
  padding: 6px 8px;
}

.functions__filter,
.functions__group {
  font: inherit;
  padding: 3px 6px;
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm);
  background: var(--color-bg);
  color: var(--color-fg);
}

.functions__filter {
  flex: 1;
  min-width: 0;
}

.functions__empty {
  margin: 8px;
  color: var(--color-dim);
}

.functions__list {
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 0 4px 8px;
}

.functions__head {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 4px 6px;
  border: 0;
  background: none;
  color: var(--color-dim);
  font: inherit;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
}

.functions__count {
  font-weight: 400;
}

.functions__row {
  display: flex;
  gap: 8px;
  align-items: baseline;
  padding: 2px 8px 2px 18px;
  cursor: grab;
  border-radius: var(--radius-xs);
}

.functions__row:hover,
.functions__row:focus-visible {
  background: var(--color-raised);
  outline: none;
}

.functions__name {
  color: var(--color-fn, var(--color-accent));
  font-family: var(--font-mono);
  white-space: nowrap;
}

.functions__overloads {
  margin-left: auto;
  color: var(--color-dim);
  font-size: var(--text-xs);
  white-space: nowrap;
}

.functions__params {
  color: var(--color-dim);
  font-family: var(--font-mono);
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
