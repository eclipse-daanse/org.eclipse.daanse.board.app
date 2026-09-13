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
/*
 * Rows of data, as they came back.
 *
 * For looking at what a source returns - a preview, not a report. It
 * takes the rows and works out the columns from the first of them, which
 * is what every place that shows one already wanted; a caller that knows
 * better says so.
 *
 * Deliberately without sorting, paging or selection. Five previews asked
 * for a table and none of them asked for any of that.
 */
import { computed } from 'vue'

/**
 * The row that is picked, when the table is one you pick from.
 *
 * Left undefined by a table nobody picks from, which is most of them - a
 * preview is read, not chosen from.
 */
const selected = defineModel<Record<string, unknown> | undefined>('selected')

const props = withDefaults(
  defineProps<{
    items: Array<Record<string, unknown>>
    /** The columns to show; without it, the keys of the first row. */
    columns?: Array<string | { key: string; label?: string }>
    /** Shown in place of the table when there are no rows. */
    empty?: string
    /** Rows answer a click and the chosen one is marked. */
    selectable?: boolean
  }>(),
  { empty: 'Keine Zeilen', selectable: false },
)

interface Column {
  key: string
  label: string
}

const columns = computed<Column[]>(() => {
  if (props.columns?.length) {
    return props.columns.map((column) =>
      typeof column === 'string'
        ? { key: column, label: column }
        : { key: column.key, label: column.label ?? column.key },
    )
  }
  const first = props.items?.[0]
  return first ? Object.keys(first).map((key) => ({ key, label: key })) : []
})

/** A cell as text. An object in one is shown, not swallowed. */
function cell(row: Record<string, unknown>, key: string): string {
  const value = row?.[key]
  if (value === undefined || value === null) return ''
  return typeof value === 'object' ? JSON.stringify(value) : String(value)
}
</script>

<template>
  <div class="table">
    <table v-if="items?.length && columns.length">
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in items"
          :key="index"
          :class="{ 'row--pick': selectable, 'row--on': selectable && row === selected }"
          :aria-selected="selectable ? row === selected : undefined"
          @click="selectable && (selected = row)"
        >
          <td v-for="column in columns" :key="column.key" :title="cell(row, column.key)">
            {{ cell(row, column.key) }}
          </td>
        </tr>
      </tbody>
    </table>

    <p v-else class="table__empty">{{ empty }}</p>
  </div>
</template>

<style scoped>
.table {
  width: 100%;
  height: 100%;
  overflow: auto;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg);
}

table {
  width: 100%;
  border-collapse: collapse;
}

/*
 * The head stays put: the point of the thing is to scroll through rows
 * and still know which column is which.
 */
th {
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 6px 10px;
  text-align: left;
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-dim);
  background-color: var(--color-raised);
  border-bottom: 1px solid var(--color-divider);
}

td {
  padding: 5px 10px;
  max-width: 28ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-bottom: 1px solid var(--color-divider);
}

tbody tr:hover {
  background-color: color-mix(in srgb, var(--color-pane) 60%, transparent);
}

.row--pick {
  cursor: pointer;
}

/* Marked by a rule down its side rather than a fill: a fill of the accent
   would fight the hover, and both have to be readable at once. */
.row--on td:first-child {
  box-shadow: inset 2px 0 0 var(--color-accent);
}

.row--on td {
  background-color: color-mix(in srgb, var(--color-accent) 12%, transparent);
}

.table__empty {
  margin: 0;
  padding: 14px 10px;
  color: var(--color-dim);
}
</style>
