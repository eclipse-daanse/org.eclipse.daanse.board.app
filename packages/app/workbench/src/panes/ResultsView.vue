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
  What a run answered. A cellset is drawn by the board's pivot table, or as
  a plain grid, a list with one line per cell, or the answer as it came.
  Which axis runs across and which down is not fixed to axis 0 and 1: each
  axis is a chip, and dragging it to Columns, Rows or Slices re-projects the
  same cells without asking the server again. Pages and chapters are picked
  from dropdowns.
-->
<script setup lang="ts">
import { computed, inject, provide, ref, watch } from 'vue'
import { DButton, DIcon, DTabs } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { PivotTable, RowsetGrid, SlicePicker } from 'org.eclipse.daanse.board.app.ui.vue.common.xmla'
import {
  axisOptions,
  cellsetToCsv,
  combinationsOf,
  getCell,
  getSlice,
  permuteAxes,
  pivotSlice,
  positionsOf,
  type Cellset,
  type SliceRef,
} from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import { WORKBENCH, type RunResult } from '../state/workbench'
import ChartView from './ChartView.vue'

const props = defineProps<{ result: RunResult | null }>()
const emit = defineEmits<{ (event: 'open-statement', text: string): void }>()

// i18n-keys: workbench:Results.zone.*
const wb = inject(WORKBENCH)!
const { t } = useTranslation('workbench')

/* The pivot table's drillthrough asks "the datasource" for its connection. */
provide('datasource', computed(() => ({ getConnection: () => wb.connection() })))

/* Held by the workbench: this view is unmounted while another output tab is up. */
const view = wb.resultView
const views = computed(() => [
  { id: 'pivot', label: t('Results.pivot') },
  { id: 'grid', label: t('Results.grid') },
  { id: 'chart', label: t('Results.chart') },
  { id: 'list', label: t('Results.list') },
  { id: 'raw', label: t('Results.raw') },
])

const cellset = computed<Cellset | null>(() => (props.result?.kind === 'cellset' ? (props.result.cellset ?? null) : null))

/* ---- axis order ---------------------------------------------------- */

const order = ref<number[]>([])
const slice = ref<SliceRef>({ axis2: -1, axis3: -1 })
/*
 * The position chosen on each axis of the answer, by the axis's own number:
 * an axis moved from pages to chapters keeps the slice it showed.
 */
const chosen = ref<Record<number, number>>({})
watch(
  cellset,
  value => {
    chosen.value = {}
    order.value = value ? value.axes.map((_, i) => i) : []
    slice.value = { axis2: value && value.axes.length > 2 ? 0 : -1, axis3: value && value.axes.length > 3 ? 0 : -1 }
  },
  { immediate: true },
)
const turned = computed(() => (cellset.value && order.value.length === cellset.value.axes.length ? permuteAxes(cellset.value, order.value) : cellset.value))

// From 3 on servers disagree on the names (SECTIONS or CHAPTERS); the number is certain.
const AXIS_NAMES = ['COLUMNS', 'ROWS', 'PAGES']
const axisName = (ordinal: number) => AXIS_NAMES[ordinal] ?? `AXIS(${ordinal})`
const chip = (ordinal: number) => ({
  ordinal,
  label: `${axisName(ordinal)} · ${positionsOf(cellset.value!, ordinal).length}`,
})
const zones = computed(() => {
  if (!cellset.value) return null
  return {
    columns: order.value.slice(0, 1).map(chip),
    rows: order.value.slice(1, 2).map(chip),
    slices: order.value.slice(2).map(chip),
  }
})

function place(ordinal: number, zone: 'columns' | 'rows' | 'slices') {
  const next = [...order.value]
  const from = next.indexOf(ordinal)
  const to = zone === 'columns' ? 0 : zone === 'rows' ? 1 : Math.max(2, from)
  if (from < 0 || from === to) return
  ;[next[from], next[to]] = [next[to], next[from]]
  order.value = next
}

function swap() {
  if (order.value.length < 2) return
  place(order.value[1], 'columns')
}

let dragged: number | null = null
const startDrag = (ordinal: number) => (dragged = ordinal)
const dropOn = (zone: 'columns' | 'rows' | 'slices') => {
  if (dragged !== null) place(dragged, zone)
  dragged = null
}

/* ---- slices: pages and chapters of the turned cellset --------------- */

const sliced = computed(() => (turned.value?.axes.length ?? 0) > 2)
const tooMany = computed(() => (turned.value?.axes.length ?? 0) > 4)
const pageOptions = computed(() => (turned.value && sliced.value ? axisOptions(positionsOf(turned.value, 2)) : []))
const chapterOptions = computed(() => (turned.value && turned.value.axes.length > 3 ? axisOptions(positionsOf(turned.value, 3)) : undefined))
watch(order, () => {
  const at = (place: number) => ((turned.value?.axes.length ?? 0) > place ? (chosen.value[order.value[place]] ?? 0) : -1)
  slice.value = { axis2: at(2), axis3: at(3) }
})

function choose(place: 2 | 3, index: number) {
  chosen.value = { ...chosen.value, [order.value[place]]: index }
  slice.value = place === 2 ? { ...slice.value, axis2: index } : { ...slice.value, axis3: index }
}

const EMPTY_PARAMS = { rows: [], columns: [], measures: [], properties: [], showRowsProperties: false, showColumnsProperties: false }
const pivotData = computed(() => {
  if (!turned.value || tooMany.value) return null
  try {
    return pivotSlice(turned.value, slice.value, EMPTY_PARAMS)
  } catch (error) {
    console.warn('The pivot table cannot show this answer', error)
    return null
  }
})

const matrix = computed(() => (turned.value && !tooMany.value ? getSlice(turned.value, slice.value) : null))

/* `SELECT {} ON COLUMNS`: an answer with an axis that holds nothing has no cell to draw. */
const noPositions = computed(() => !!cellset.value?.axes.some(axis => axis.positions.length === 0))

const cellCount = computed(() => (cellset.value ? Object.keys(cellset.value.cells).length : 0))
const shape = computed(() => cellset.value?.axes.map((axis, i) => `${axisName(i)} ${axis.positions.length}`).join(' × ') ?? '')

/* One line per cell, a column per axis: what more than two axes read as. */
const listRows = computed(() => {
  const c = turned.value
  if (!c) return []
  const rows: Record<string, unknown>[] = []
  const columns = positionsOf(c, 0)
  const rest = c.axes.length > 1 ? combinationsOf(c, 1) : [[]]
  for (const tail of rest) {
    for (const column of columns) {
      const coords = [column.index, ...tail]
      const cell = getCell(c, coords)
      const row: Record<string, unknown> = {}
      coords.forEach((at, axis) => (row[axisName(axis)] = c.axes[axis].positions[at]?.label ?? ''))
      row.Value = cell?.value ?? ''
      row.Formatted = cell?.formatted ?? ''
      rows.push(row)
    }
    if (rows.length > 50000) break
  }
  return rows
})

function download() {
  if (!turned.value) return
  const blob = new Blob([cellsetToCsv(turned.value)], { type: 'text/csv;charset=utf-8' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = 'mdx-results.csv'
  link.click()
  URL.revokeObjectURL(link.href)
}

/* ---- writeback, through the board's pivot table -------------------- */

const writing = ref(false)
async function writeback(statement: string, rerun: boolean) {
  writing.value = true
  try {
    await wb.execute(statement)
    if (rerun) await wb.run()
  } catch (error) {
    wb.notify('Notice.writebackFailed', 'error', { error: error instanceof Error ? error.message : String(error) })
  } finally {
    writing.value = false
  }
}

const elapsed = ref(0)
let ticker: ReturnType<typeof setInterval> | undefined
watch(
  () => props.result?.status,
  status => {
    if (ticker) clearInterval(ticker)
    if (status === 'running') {
      const started = props.result!.startedAt
      ticker = setInterval(() => (elapsed.value = Date.now() - started), 100)
    }
  },
  { immediate: true },
)

const rawText = computed(() => {
  if (!props.result?.response) return ''
  const text = JSON.stringify(props.result.response, null, 2)
  return text.length > 400000 ? `${text.slice(0, 400000)}\n…` : text
})
</script>

<template>
  <div class="results">
    <p v-if="!result" class="results__empty">{{ t('Results.nothing') }}</p>

    <div v-else-if="result.status === 'running'" class="results__state" role="status">
      <span class="results__spinner" aria-hidden="true" />
      {{ t('Results.running', { seconds: (elapsed / 1000).toFixed(1) }) }}
      <DButton size="sm" intent="quiet" @click="wb.abort(wb.activeTab.value)">{{ t('Editor.stop') }}</DButton>
    </div>

    <div v-else-if="result.status === 'error'" class="results__error" role="alert">
      <strong>{{ t('Results.failed') }}</strong>
      <pre>{{ result.error }}</pre>
    </div>

    <p v-else-if="result.status === 'aborted'" class="results__empty">{{ t('Results.aborted', { ms: result.durationMs }) }}</p>

    <p v-else-if="result.kind === 'empty'" class="results__empty">{{ t('Results.noCellset', { ms: result.durationMs }) }}</p>

    <RowsetGrid
      v-else-if="result.kind === 'rows'"
      :rows="result.rows ?? []"
      :columns="result.columns"
      :title="t('Results.rowsTitle', { ms: result.durationMs })"
      file-name="mdx-rows"
    />

    <template v-else-if="cellset">
      <div class="results__bar">
        <DTabs v-model="view" :tabs="views" :label="t('Results.view')" />
        <span class="results__summary">{{ t('Results.summary', { ms: result.durationMs, cells: cellCount, shape }) }}</span>
        <DButton size="sm" intent="quiet" @click="download"><DIcon name="download" size="sm" /> CSV</DButton>
      </div>

      <div v-if="zones && cellset.axes.length > 1" class="results__axes">
        <div v-for="zone in (['columns', 'rows', 'slices'] as const)" :key="zone" class="axis-zone" @dragover.prevent @drop="dropOn(zone)">
          <span class="axis-zone__label">{{ t(`Results.zone.${zone}`) }}</span>
          <span
            v-for="axis in zones[zone]"
            :key="axis.ordinal"
            class="axis-chip"
            draggable="true"
            @dragstart="startDrag(axis.ordinal)"
          >{{ axis.label }}</span>
          <span v-if="!zones[zone].length" class="axis-zone__empty">—</span>
        </div>
        <DButton size="sm" intent="quiet" :title="t('Results.swap')" @click="swap">⇅</DButton>
        <SlicePicker
          v-if="sliced && !tooMany"
          :pages="pageOptions"
          :chapters="chapterOptions"
          :page="slice.axis2"
          :chapter="slice.axis3"
          @update:page="(i: number) => choose(2, i)"
          @update:chapter="(i: number) => choose(3, i)"
        />
      </div>

      <p v-if="tooMany && view !== 'list' && view !== 'raw'" class="results__empty">{{ t('Results.tooManyAxes') }}</p>

      <p v-else-if="noPositions && view !== 'raw'" class="results__empty">{{ t('Results.emptyAxis', { ms: result.durationMs }) }}</p>

      <div v-else class="results__body" :class="{ 'results__body--busy': writing }">
        <PivotTable
          v-if="view === 'pivot' && pivotData"
          :model-value="pivotData"
          :cube-name="result.cube"
          @on-cell-edit="(e: any) => writeback(e.query, true)"
          @on-edit-mode-changed="(editing: boolean) => editing && writeback('BEGIN TRANSACTION', false)"
          @on-commit-transaction="writeback('COMMIT TRANSACTION', true)"
          @on-rollback-transaction="writeback('ROLLBACK TRANSACTION', true)"
          @on-expand="wb.notify('Notice.expandDesigner')"
        />
        <table v-else-if="view === 'grid' && matrix" class="grid">
          <thead>
            <tr>
              <th />
              <th v-for="column in matrix.columns" :key="column.key" :title="column.key">{{ column.label }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, r) in matrix.cells" :key="r">
              <th :title="matrix.rows[r]?.key">{{ matrix.rows[r]?.label ?? '' }}</th>
              <td v-for="(cell, c) in row" :key="c" :title="cell ? String(cell.value) : ''">{{ cell?.formatted ?? '' }}</td>
            </tr>
          </tbody>
        </table>
        <ChartView v-else-if="view === 'chart' && matrix" :matrix="matrix" />
        <RowsetGrid v-else-if="view === 'list'" :rows="listRows" file-name="mdx-cells" />
        <pre v-else-if="view === 'raw'" class="raw">{{ rawText }}</pre>
      </div>
    </template>
  </div>
</template>

<style scoped>
.results {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  font-size: var(--text-sm);
}

.results__empty,
.results__state {
  margin: 0;
  padding: 12px;
  color: var(--color-dim);
  display: flex;
  align-items: center;
  gap: 8px;
}

.results__error {
  padding: 10px 12px;
  color: var(--color-err);
  overflow: auto;
}

.results__error pre {
  margin: 6px 0 0;
  white-space: pre-wrap;
  font-family: var(--font-mono);
  color: var(--color-fg);
}

.results__spinner {
  width: 14px;
  height: 14px;
  border: 2px solid var(--color-divider);
  border-top-color: var(--color-accent);
  border-radius: 50%;
  animation: wb-spin 700ms linear infinite;
}

@keyframes wb-spin {
  to {
    transform: rotate(360deg);
  }
}

.results__bar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 2px 8px;
  border-bottom: 1px solid var(--color-divider);
  flex: none;
}

.results__summary {
  margin-left: auto;
  color: var(--color-dim);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.results__axes {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 4px 8px;
  border-bottom: 1px solid var(--color-divider);
  flex: none;
}

.axis-zone {
  display: flex;
  align-items: center;
  gap: 4px;
  min-height: 24px;
  padding: 1px 6px;
  border: 1px dashed var(--color-outline);
  border-radius: var(--radius-sm);
}

.axis-zone__label {
  color: var(--color-dim);
  font-size: var(--text-xs);
  text-transform: uppercase;
}

.axis-zone__empty {
  color: var(--color-dim);
}

.axis-chip {
  padding: 1px 6px;
  border-radius: var(--radius-xs);
  background: var(--color-raised);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  cursor: grab;
}

.results__body {
  flex: 1;
  min-height: 0;
  overflow: auto;
}

.results__body--busy {
  opacity: 0.5;
  pointer-events: none;
}

.grid {
  border-collapse: collapse;
  font-family: var(--font-mono);
}

.grid th,
.grid td {
  padding: 3px 8px;
  border: 1px solid var(--color-divider);
  white-space: nowrap;
}

.grid thead th,
.grid tbody th {
  background: var(--color-raised);
  text-align: left;
  font-weight: 600;
}

.grid td {
  text-align: right;
}

.raw {
  margin: 0;
  padding: 8px;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  white-space: pre;
}
</style>
