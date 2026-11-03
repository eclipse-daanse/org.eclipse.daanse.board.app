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
 * Deliberately without sorting or paging. Five previews asked for a table
 * and none of them asked for either.
 *
 * What it does do, once there are enough rows to need it, is draw only the
 * ones in view. A table that hands the browser every row of every record
 * costs what the answer is large, however little of it anyone looks at:
 * 20,000 rows of 8 columns took 2.3 seconds to reach the screen and left
 * 180,000 nodes in the document (#1182).
 */
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { useText } from './useText'

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
    /** Shown in place of the table when there are no rows; a word of its own when left out. */
    empty?: string
    /** Rows answer a click and the chosen one is marked. */
    selectable?: boolean
  }>(),
  { selectable: false },
)

const t = useText()

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

/*
 * Below this many rows the whole table is drawn.
 *
 * Windowing costs a measurement, a fixed layout and two spacer rows, and
 * under a screenful or two of data it buys nothing back.
 */
const VIRTUAL_FROM = 150

/** Rows kept above and below the view, so a fast scroll finds them drawn. */
const OVERSCAN = 10

/** Until a row has been measured. Replaced by the first real one. */
const ROW_HEIGHT_GUESS = 29

const area = ref<HTMLElement | undefined>()
const scrolled = ref(0)
const viewport = ref(0)
const rowHeight = ref(ROW_HEIGHT_GUESS)

/*
 * Only where there is a height to window against.
 *
 * Without layout - in jsdom, or before the element is in the document -
 * the view is zero rows tall, and a window computed from that would be
 * empty. Drawing everything is then both correct and what the caller
 * would have got anyway.
 */
const windowed = computed(() => props.items?.length >= VIRTUAL_FROM && viewport.value > 0)

const first = computed(() =>
  windowed.value ? Math.max(0, Math.floor(scrolled.value / rowHeight.value) - OVERSCAN) : 0,
)

const shown = computed(() => {
  if (!windowed.value) return props.items ?? []
  const fits = Math.ceil(viewport.value / rowHeight.value) + OVERSCAN * 2
  return props.items.slice(first.value, first.value + fits)
})

/** The rows that are not drawn, as height - so the scrollbar tells the truth. */
const above = computed(() => first.value * rowHeight.value)
const below = computed(() =>
  Math.max(0, (props.items.length - first.value - shown.value.length) * rowHeight.value),
)

function onScroll(event: Event) {
  scrolled.value = (event.target as HTMLElement).scrollTop
}

/*
 * Measured rather than assumed: the row height follows the font and the
 * theme's spacing, and a window built on a wrong number drifts away from
 * the scrollbar as it goes.
 */
function measure() {
  const element = area.value
  if (!element) return
  viewport.value = element.clientHeight
  const row = element.querySelector('tbody tr:not([data-pad])') as HTMLElement | null
  if (row && row.offsetHeight > 0) rowHeight.value = row.offsetHeight
}

let watching: HTMLElement | undefined
const observer =
  typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(() => measure())

watch(
  area,
  (element) => {
    if (watching) observer?.unobserve(watching)
    watching = element
    if (!element) return
    measure()
    observer?.observe(element)
  },
  { immediate: true, flush: 'post' },
)

/* A new answer is a new set of heights, and possibly a shorter table. */
watch(() => props.items, () => measure(), { flush: 'post' })

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <!--
    Not class="table".

    The shell imports Tailwind, which owns that name as a utility meaning
    `display: table`. A scoped style cannot defend against it: it never
    sets `display`, so the utility sets it unopposed - and a table box
    ignores `overflow` and treats `height` as a minimum. The scroll area
    grew to the full height of 20,000 rows, the pane above clipped it,
    and nothing scrolled (#1181).
  -->
  <div ref="area" class="datatable" @scroll.passive="onScroll">
    <!--
      A fixed layout while windowing, because the columns are then measured
      from the rows in view - and those change as it scrolls. Left to work
      the widths out per screenful, the table shifted under the reader.
    -->
    <table
      v-if="items?.length && columns.length"
      :class="{ 'datatable__fixed': windowed }"
      :aria-rowcount="windowed ? items.length + 1 : undefined"
    >
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
        </tr>
      </thead>
      <tbody>
        <!-- The rows above the view, as height rather than as rows. -->
        <tr v-if="above" data-pad aria-hidden="true" :style="{ height: `${above}px` }">
          <td :colspan="columns.length"></td>
        </tr>
        <tr
          v-for="(row, index) in shown"
          :key="first + index"
          :aria-rowindex="windowed ? first + index + 2 : undefined"
          :class="{ 'row--pick': selectable, 'row--on': selectable && row === selected }"
          :aria-selected="selectable ? row === selected : undefined"
          @click="selectable && (selected = row)"
        >
          <td v-for="column in columns" :key="column.key" :title="cell(row, column.key)">
            {{ cell(row, column.key) }}
          </td>
        </tr>
        <tr v-if="below" data-pad aria-hidden="true" :style="{ height: `${below}px` }">
          <td :colspan="columns.length"></td>
        </tr>
      </tbody>
    </table>

    <p v-else class="datatable__empty">{{ empty ?? t('Table.empty', 'No rows') }}</p>
  </div>
</template>

<style scoped>
.datatable {
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

.datatable__fixed {
  table-layout: fixed;
}

/* Height and nothing else: a spacer is the rows that are not there. */
tbody tr[data-pad] td {
  padding: 0;
  border: 0;
}

tbody tr[data-pad]:hover {
  background-color: transparent;
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

.datatable__empty {
  margin: 0;
  padding: 14px 10px;
  color: var(--color-dim);
}
</style>
