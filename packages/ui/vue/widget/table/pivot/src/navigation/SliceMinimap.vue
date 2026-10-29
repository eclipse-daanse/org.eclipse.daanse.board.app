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
 * Every slice at a glance: pages across, chapters down, each cell coloured
 * by the slice's value. Click selects; Shift, Ctrl or Cmd adds to the
 * selection. The arrow keys move, Enter selects, Shift+Enter adds.
 */
import { computed, nextTick, ref } from 'vue'
import {
  positionsOf,
  sliceValue,
  type Cellset,
  type CellsetPosition,
  type SliceRef,
  type SliceValue,
} from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import { formatSliceValue, heatColor, scaleMatrix } from './values'
import type { ScaleNormalization } from './store'
import { sliceId } from './store'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'

const { t } = useTranslation('tablePivot')

const props = withDefaults(
  defineProps<{
    cellset: Cellset
    current?: SliceRef | null
    selection?: SliceRef[]
    /** Slices to mark besides the current one - A and B in compare, each in its colour. */
    marks?: { slice: SliceRef; label: string; tone?: 'a' | 'b' }[]
    measure?: string
    normalization?: ScaleNormalization
    diverging?: boolean
    limit?: number
    label?: string
  }>(),
  {
    current: null,
    selection: () => [],
    marks: () => [],
    normalization: 'global',
    diverging: true,
    limit: 200,
  },
)

const gridLabel = computed(() => props.label ?? t('Navigation.slices'))

const emit = defineEmits<{
  /** The cell goes along, for whoever opens something at it. */
  select: [slice: SliceRef, cell?: HTMLElement]
  toggle: [slice: SliceRef]
  hover: [axis: 2 | 3, key: string | null]
}>()

const search = ref('')
const pages = computed(() => positionsOf(props.cellset, 2))
// Three axes: one row of pages, no chapters.
const chapters = computed<(CellsetPosition | null)[]>(() =>
  props.cellset.axes.length > 3 ? positionsOf(props.cellset, 3) : [null],
)
const tooMany = computed(() => pages.value.length > props.limit || chapters.value.length > props.limit)

const matches = (p: CellsetPosition | null) =>
  !p || !search.value || p.label.toLowerCase().includes(search.value.trim().toLowerCase())
const shownPages = computed(() => {
  const list = pages.value.filter(matches)
  return tooMany.value && !search.value ? list.slice(0, props.limit) : list
})
const shownChapters = computed(() => {
  const list = chapters.value.filter(matches)
  // A search that matches only pages keeps every chapter, and the other way round.
  const result = list.length ? list : chapters.value
  return tooMany.value && !search.value ? result.slice(0, props.limit) : result
})

const sliceAt = (page: CellsetPosition, chapter: CellsetPosition | null): SliceRef => ({
  axis2: page.index,
  axis3: chapter ? chapter.index : -1,
})

const values = computed<SliceValue[][]>(() =>
  shownChapters.value.map(chapter =>
    shownPages.value.map(page => sliceValue(props.cellset, sliceAt(page, chapter), props.measure)),
  ),
)
const colours = computed(() =>
  scaleMatrix(
    values.value.map(row => row.map(v => v.value)),
    props.normalization,
    props.diverging,
  ),
)

const isCurrent = (slice: SliceRef) => !!props.current && sliceId(props.current) === sliceId(slice)
const isSelected = (slice: SliceRef) => props.selection.some(s => sliceId(s) === sliceId(slice))
const marksOf = (slice: SliceRef) => props.marks.filter(m => sliceId(m.slice) === sliceId(slice))

const describe = (page: CellsetPosition, chapter: CellsetPosition | null, value: SliceValue) =>
  `${[page.label, chapter?.label].filter(Boolean).join(' · ')}: ${formatSliceValue(value)}` +
  (value.kind === 'sum' ? t('Navigation.sumOfVisible') : '')

const activate = (slice: SliceRef, event: MouseEvent | KeyboardEvent, cell?: HTMLElement) => {
  if (event.shiftKey || event.ctrlKey || event.metaKey) emit('toggle', slice)
  else emit('select', slice, cell ?? ((event.target as HTMLElement | null)?.closest('td') ?? undefined))
}

/* Roving focus: one cell is in the tab order, the arrows move it. */
const focus = ref({ row: 0, column: 0 })
const grid = ref<HTMLElement | null>(null)
const move = async (event: KeyboardEvent) => {
  const { row, column } = focus.value
  const rows = shownChapters.value.length
  const columns = shownPages.value.length
  const next = {
    ArrowRight: { row, column: Math.min(columns - 1, column + 1) },
    ArrowLeft: { row, column: Math.max(0, column - 1) },
    ArrowDown: { row: Math.min(rows - 1, row + 1), column },
    ArrowUp: { row: Math.max(0, row - 1), column },
    Home: { row, column: 0 },
    End: { row, column: columns - 1 },
  }[event.key]
  if (next) {
    event.preventDefault()
    focus.value = next
    await nextTick()
    grid.value?.querySelector<HTMLElement>(`[data-cell="${next.row}:${next.column}"]`)?.focus()
  } else if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    const page = shownPages.value[column]
    const cell = grid.value?.querySelector<HTMLElement>(`[data-cell="${row}:${column}"]`) ?? undefined
    if (page) activate(sliceAt(page, shownChapters.value[row]), event, cell)
  }
}
</script>

<template>
  <div class="minimap">
    <input
      v-if="tooMany"
      v-model="search"
      class="minimap__search"
      type="search"
      :placeholder="t('Navigation.searchGrid', { pages: pages.length, chapters: chapters.length })"
      :aria-label="t('Navigation.searchIn', { label: gridLabel })"
    />
    <div class="minimap__scroll">
      <table ref="grid" class="minimap__grid" role="grid" :aria-label="gridLabel" @keydown="move">
        <thead>
          <tr>
            <th class="minimap__corner" aria-hidden="true"></th>
            <th
              v-for="page in shownPages"
              :key="page.key"
              scope="col"
              class="minimap__head"
              :title="page.label"
              @mouseenter="emit('hover', 2, page.key)"
              @mouseleave="emit('hover', 2, null)"
            >
              {{ page.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(chapter, r) in shownChapters" :key="chapter?.key ?? 'none'">
            <th
              scope="row"
              class="minimap__head minimap__head--row"
              :title="chapter?.label"
              @mouseenter="chapter && emit('hover', 3, chapter.key)"
              @mouseleave="emit('hover', 3, null)"
            >
              {{ chapter?.label ?? '' }}
            </th>
            <td
              v-for="(page, c) in shownPages"
              :key="page.key"
              role="gridcell"
              class="minimap__cell"
              :class="[{
                'is-current': isCurrent(sliceAt(page, chapter)),
                'is-selected': isSelected(sliceAt(page, chapter)),
                'is-empty': values[r][c].value === null,
                'is-sum': values[r][c].kind === 'sum',
              }, marksOf(sliceAt(page, chapter)).map(m => m.tone && `is-mark-${m.tone}`)]"
              :style="{ backgroundColor: heatColor(colours[r][c]) }"
              :data-cell="`${r}:${c}`"
              :tabindex="focus.row === r && focus.column === c ? 0 : -1"
              :aria-selected="isCurrent(sliceAt(page, chapter)) || isSelected(sliceAt(page, chapter))"
              :aria-label="describe(page, chapter, values[r][c])"
              :title="describe(page, chapter, values[r][c])"
              @click="activate(sliceAt(page, chapter), $event)"
              @focus="focus = { row: r, column: c }"
            >
              <span class="minimap__value">{{ formatSliceValue(values[r][c]) }}</span>
              <span v-if="marksOf(sliceAt(page, chapter)).length" class="minimap__mark">
                <span v-for="m in marksOf(sliceAt(page, chapter))" :key="m.label" :class="m.tone && `tone-${m.tone}`">{{ m.label }}</span>
              </span>
              <span v-if="isSelected(sliceAt(page, chapter))" class="minimap__check" aria-hidden="true">✓</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.minimap {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-height: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-fg);
}

.minimap__search {
  padding: 0.25rem 0.5rem;
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  background: var(--color-raised);
  color: var(--color-fg);
}

.minimap__scroll {
  overflow: auto;
  max-height: 100%;
}

.minimap__grid {
  border-collapse: separate;
  border-spacing: 2px;
}

/*
 * The headers stay while the grid scrolls, above the cells: those are
 * positioned (for their marks), and would otherwise be drawn over them.
 */
.minimap__head {
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-pane);
  /* An edge where cells pass under it; a border would scroll away with the collapse. */
  box-shadow: 0 1px 0 var(--color-divider);
  color: var(--color-dim);
  font-weight: 600;
  white-space: nowrap;
  max-width: 8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0.125rem 0.25rem;
}

/* A row's header stays at the left only - at the top it would pile onto the column headers. */
.minimap__head--row {
  top: auto;
  left: 0;
  z-index: 1;
  text-align: right;
  box-shadow: 1px 0 0 var(--color-divider);
}

/* The corner stays both ways, over both. */
.minimap__corner {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 3;
  background: var(--color-pane);
}

.minimap__cell {
  position: relative;
  min-width: 3.5rem;
  padding: 0.25rem;
  text-align: right;
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
  border: 1px solid transparent;
  border-radius: var(--radius-xs);
  cursor: pointer;
}

.minimap__cell:focus-visible {
  outline: 2px solid var(--color-outline);
  outline-offset: 1px;
}

.minimap__cell.is-current {
  border-color: var(--color-fg);
  box-shadow: inset 0 0 0 1px var(--color-fg);
}

/* Empty is hatched, so it does not read as a pale value. */
.minimap__cell.is-empty {
  background-image: repeating-linear-gradient(45deg, var(--color-divider) 0 1px, transparent 1px 6px);
  color: var(--color-dim);
}

.minimap__cell.is-sum .minimap__value {
  font-style: italic;
}

.minimap__mark {
  position: absolute;
  top: 1px;
  left: 3px;
  font-weight: 700;
  font-family: var(--font-sans);
}

/* A and B of a comparison, each in its own colour - neither the heat's nor the difference's. */
.minimap__cell.is-mark-a {
  box-shadow: inset 0 0 0 2px var(--compare-a, var(--color-fn));
}

.minimap__cell.is-mark-b {
  box-shadow: inset 0 0 0 2px var(--compare-b, var(--color-warn));
}

.minimap__cell.is-mark-a.is-mark-b {
  box-shadow:
    inset 0 0 0 2px var(--compare-a, var(--color-fn)),
    inset 0 0 0 4px var(--compare-b, var(--color-warn));
}

.minimap__mark .tone-a {
  color: var(--compare-a, var(--color-fn));
}

.minimap__mark .tone-b {
  color: var(--compare-b, var(--color-warn));
}

.minimap__check {
  position: absolute;
  bottom: 0;
  left: 3px;
}
</style>
