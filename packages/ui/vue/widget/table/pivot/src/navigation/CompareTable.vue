<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script lang="ts">
/** In pixels: the columns from the row headers on, the rows from the column headers on. */
export interface TableSizes {
  columns: number[]
  rows: number[]
}
</script>

<script setup lang="ts">
/*
 * One side of a comparison, or the difference between the two. Rows and
 * columns come aligned by unique name; which of them show is decided by
 * the caller, so all tables of one comparison line up.
 */
import { computed, ref, watch } from 'vue'
import {
  difference,
  isSignificant,
  numericValue,
  type AlignedTable,
  type CellValue,
} from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import type { DiffType } from './store'
import { formatPercent, formatSigned } from './values'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'

const { t } = useTranslation('tablePivot')

const props = defineProps<{
  aligned: AlignedTable
  kind: 'a' | 'b' | 'diff'
  title: string
  rows: number[]
  columns: number[]
  diffType: DiffType
  threshold: number
  /** The same for all the tables of one comparison, so their cells line up; none: as the content wants. */
  sizes: TableSizes | null
}>()

const table = ref<HTMLTableElement | null>(null)

/** The size each column and row takes as drawn. */
function measure(): TableSizes | null {
  const el = table.value
  if (!el) return null
  const head = el.tHead?.rows[0]
  return {
    columns: head ? [...head.cells].map(cell => cell.getBoundingClientRect().width) : [],
    rows: [...el.rows].map(row => row.getBoundingClientRect().height),
  }
}

defineExpose({ measure })

const tableStyle = computed(() =>
  props.sizes
    ? {
        tableLayout: 'fixed' as const,
        width: `${props.sizes.columns.reduce((sum, w) => sum + w, 0)}px`,
        // Room to spare goes to every table alike: they are as wide as each other.
        minWidth: '100%',
      }
    : undefined,
)
const rowStyle = (i: number) => (props.sizes?.rows[i] ? { height: `${props.sizes.rows[i]}px` } : undefined)

/** Shared between the tables of one comparison: they scroll as one. */
const scroll = defineModel<{ top: number; left: number }>('scroll', { default: () => ({ top: 0, left: 0 }) })

const body = ref<HTMLElement | null>(null)
let applying = false
watch(scroll, position => {
  const el = body.value
  if (!el || (el.scrollTop === position.top && el.scrollLeft === position.left)) return
  applying = true
  el.scrollTop = position.top
  el.scrollLeft = position.left
  requestAnimationFrame(() => (applying = false))
})
const onScroll = () => {
  if (applying || !body.value) return
  scroll.value = { top: body.value.scrollTop, left: body.value.scrollLeft }
}

const side = (r: number, c: number): CellValue | null =>
  (props.kind === 'b' ? props.aligned.b : props.aligned.a)[r]?.[c] ?? null

const diffAt = (r: number, c: number) =>
  difference(numericValue(props.aligned.a[r]?.[c] ?? null), numericValue(props.aligned.b[r]?.[c] ?? null))

interface Shown {
  text: string
  /** Read out besides the colour: up, down, unchanged. */
  sign: '▲' | '▼' | '=' | ''
  tone: 'up' | 'down' | 'none'
  faint: boolean
  style?: Record<string, string>
}

const shown = computed<Shown[][]>(() =>
  props.rows.map(r =>
    props.columns.map(c => {
      if (props.kind !== 'diff') {
        const cell = side(r, c)
        return {
          text: cell?.formatted ?? '',
          sign: '',
          tone: 'none',
          faint: false,
          style: cell
            ? {
                ...(cell.foreColor ? { color: cssColor(cell.foreColor) } : {}),
                ...(cell.backColor ? { backgroundColor: cssColor(cell.backColor) } : {}),
              }
            : undefined,
        }
      }
      const a = numericValue(props.aligned.a[r]?.[c] ?? null)
      const b = numericValue(props.aligned.b[r]?.[c] ?? null)
      const diff = diffAt(r, c)
      if (diff.absolute === null) {
        // One side empty: nothing to subtract. Both empty: nothing at all.
        return { text: a === null && b === null ? '' : t('Navigation.notAvailable'), sign: '', tone: 'none', faint: true }
      }
      const parts = [] as string[]
      if (props.diffType !== 'percent') parts.push(formatSigned(diff.absolute))
      if (props.diffType !== 'absolute') parts.push(diff.percent === null ? t('Navigation.notAvailable') : formatPercent(diff.percent))
      const sign = diff.absolute > 0 ? '▲' : diff.absolute < 0 ? '▼' : '='
      return {
        text: props.diffType === 'both' ? `${parts[0]} (${parts[1]})` : parts[0],
        sign,
        tone: diff.absolute > 0 ? 'up' : diff.absolute < 0 ? 'down' : 'none',
        faint: !isSignificant(diff, props.threshold),
      }
    }),
  ),
)

/* Read as CellsArea reads FORE_COLOR and BACK_COLOR, so a cell looks the same in both tables. */
function cssColor(value: string): string {
  const n = parseInt(value)
  return Number.isNaN(n) ? value : `#${n.toString(16).padStart(6, '0')}`
}
</script>

<template>
  <section class="compare-table" :aria-label="title">
    <header class="compare-table__title" :class="`compare-table__title--${kind}`">{{ title }}</header>
    <div ref="body" class="compare-table__body" @scroll="onScroll">
      <table ref="table" :style="tableStyle">
        <colgroup v-if="sizes">
          <col v-for="(width, i) in sizes.columns" :key="i" :style="{ width: `${width}px` }" />
        </colgroup>
        <thead>
          <tr :style="rowStyle(0)">
            <th></th>
            <th v-for="c in columns" :key="aligned.columns[c].key" scope="col">{{ aligned.columns[c].label }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(r, i) in rows" :key="aligned.rows[r]?.key ?? r" :style="rowStyle(i + 1)">
            <th scope="row">{{ aligned.rows[r]?.label ?? '' }}</th>
            <td
              v-for="(c, j) in columns"
              :key="aligned.columns[c].key"
              :class="[`tone-${shown[i][j].tone}`, { faint: shown[i][j].faint }]"
              :style="shown[i][j].style"
            >
              <span v-if="shown[i][j].sign" class="sign" aria-hidden="true">{{ shown[i][j].sign }}</span>
              {{ shown[i][j].text }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>
.compare-table {
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg);
}

.compare-table__title {
  padding: 0.25rem 0;
  font-weight: 600;
  color: var(--color-dim);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* A and B in the colours their slices are marked with above. */
.compare-table__title--a {
  color: var(--compare-a, var(--color-fn));
  box-shadow: inset 0 -2px 0 var(--compare-a, var(--color-fn));
}

.compare-table__title--b {
  color: var(--compare-b, var(--color-warn));
  box-shadow: inset 0 -2px 0 var(--compare-b, var(--color-warn));
}

.compare-table__body {
  overflow: auto;
  min-height: 0;
  flex: 1;
  border: 1px solid var(--color-divider);
}

table {
  border-collapse: collapse;
}

th,
td {
  padding: 0.25rem 0.5rem;
  border-bottom: 1px solid var(--color-divider);
  white-space: nowrap;
}

thead th {
  position: sticky;
  top: 0;
  background: var(--color-pane);
  color: var(--color-dim);
  text-align: right;
}

tbody th {
  position: sticky;
  left: 0;
  background: var(--color-pane);
  text-align: left;
  font-weight: 500;
}

td {
  text-align: right;
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
}

.tone-up {
  color: var(--color-ok);
}

.tone-down {
  color: var(--color-err);
}

.faint {
  opacity: 0.55;
}

.sign {
  margin-right: 0.25rem;
  font-size: var(--text-xs);
}
</style>
