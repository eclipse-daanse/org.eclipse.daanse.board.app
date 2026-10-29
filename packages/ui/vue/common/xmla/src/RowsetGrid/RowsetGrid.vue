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
  Rows of any shape - a Discover rowset, a drillthrough, a DMV - as a table:
  every column any row has, headers that sort (ascending, descending, as
  received), nested values folded away, and a CSV of all of them. Only the
  first `limit` rows are drawn; the export carries every row.
-->
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { DButton, DIcon } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { columnLabel, columnsOf, rowsToCsv } from 'org.eclipse.daanse.board.app.lib.datasource.xmla'

const props = withDefaults(
  defineProps<{
    rows: Record<string, unknown>[]
    columns?: string[]
    /** Shown above the table: the rowset and its restrictions, say. */
    title?: string
    /** The CSV's file name, without the extension. */
    fileName?: string
    limit?: number
  }>(),
  { limit: 2000, fileName: 'rows' },
)

const emit = defineEmits<{ (event: 'select', row: Record<string, unknown>): void }>()
const { t } = useTranslation('xmla')

const shownColumns = computed(() => props.columns ?? columnsOf(props.rows))
const sortBy = ref<string | null>(null)
const descending = ref(false)
watch(() => props.rows, () => (sortBy.value = null))

function compare(a: unknown, b: unknown): number {
  const x = Number(a)
  const y = Number(b)
  if (a !== '' && b !== '' && Number.isFinite(x) && Number.isFinite(y)) return x - y
  return String(a ?? '').localeCompare(String(b ?? ''), undefined, { numeric: true })
}

const sorted = computed(() => {
  const column = sortBy.value
  if (!column) return props.rows
  const order = descending.value ? -1 : 1
  return [...props.rows].sort((a, b) => order * compare(a[column], b[column]))
})
const visible = computed(() => sorted.value.slice(0, props.limit))

/* Ascending, descending, back to the order the server sent. */
function toggle(column: string) {
  if (sortBy.value !== column) {
    sortBy.value = column
    descending.value = false
  } else if (!descending.value) {
    descending.value = true
  } else {
    sortBy.value = null
  }
}

/* An empty element reads as an object with nothing in it: that is an empty cell, not a nested one. */
function isNested(value: unknown) {
  return value !== null && typeof value === 'object' && Object.keys(value as object).length > 0
}

function short(value: unknown) {
  const text = value === null || value === undefined || typeof value === 'object' ? '' : String(value)
  return text.length > 160 ? `${text.slice(0, 160)}…` : text
}

function download() {
  // In the order on screen: a sorted grid exports sorted.
  const blob = new Blob([rowsToCsv(sorted.value, shownColumns.value)], { type: 'text/csv;charset=utf-8' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = `${props.fileName}.csv`
  link.click()
  URL.revokeObjectURL(link.href)
}
</script>

<template>
  <div class="rowset">
    <div class="rowset__bar">
      <span class="rowset__title">{{ title }}</span>
      <span class="rowset__count">{{ t('Rowset.count', { count: rows.length }) }}</span>
      <span v-if="rows.length > limit" class="rowset__count">{{ t('Rowset.limited', { limit }) }}</span>
      <DButton size="sm" intent="quiet" :disabled="!rows.length" @click="download">
        <DIcon name="download" size="sm" /> CSV
      </DButton>
    </div>
    <div class="rowset__scroll">
      <table v-if="rows.length" class="rowset__table">
        <thead>
          <tr>
            <th v-for="column in shownColumns" :key="column" :aria-sort="sortBy === column ? (descending ? 'descending' : 'ascending') : 'none'">
              <button type="button" class="rowset__sort" :title="column" @click="toggle(column)">
                {{ columnLabel(column) }}
                <span v-if="sortBy === column" aria-hidden="true">{{ descending ? '▼' : '▲' }}</span>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in visible" :key="index" @click="emit('select', row)">
            <td v-for="column in shownColumns" :key="column">
              <details v-if="isNested(row[column])">
                <summary>{{ t('Rowset.nested', { count: Array.isArray(row[column]) ? (row[column] as unknown[]).length : 1 }) }}</summary>
                <pre>{{ JSON.stringify(row[column], null, 2) }}</pre>
              </details>
              <template v-else>{{ short(row[column]) }}</template>
            </td>
          </tr>
        </tbody>
      </table>
      <p v-else class="rowset__empty">{{ t('Rowset.empty') }}</p>
    </div>
  </div>
</template>

<style scoped>
.rowset {
  display: flex;
  flex-direction: column;
  min-height: 0;
  height: 100%;
}

.rowset__bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 8px;
  border-bottom: 1px solid var(--color-divider);
  font-size: var(--text-sm);
  flex: none;
}

.rowset__title {
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.rowset__count {
  color: var(--color-dim);
  white-space: nowrap;
}

.rowset__bar > :last-child {
  margin-left: auto;
}

.rowset__scroll {
  flex: 1;
  min-height: 0;
  overflow: auto;
}

.rowset__table {
  border-collapse: collapse;
  font-size: var(--text-sm);
  font-family: var(--font-mono);
}

.rowset__table th {
  position: sticky;
  top: 0;
  background: var(--color-raised);
  border-bottom: 1px solid var(--color-divider);
  text-align: left;
  z-index: 1;
}

.rowset__sort {
  border: 0;
  background: none;
  color: var(--color-fg);
  font: inherit;
  font-weight: 600;
  padding: 4px 8px;
  cursor: pointer;
  white-space: nowrap;
}

.rowset__table td {
  padding: 3px 8px;
  border-bottom: 1px solid var(--color-divider);
  vertical-align: top;
  white-space: nowrap;
}

.rowset__table tbody tr:hover {
  background: var(--color-raised);
  cursor: pointer;
}

.rowset__table pre {
  margin: 0;
  white-space: pre-wrap;
}

.rowset__empty {
  margin: 0;
  padding: 12px;
  color: var(--color-dim);
}
</style>
