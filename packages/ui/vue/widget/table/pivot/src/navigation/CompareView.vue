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
 * Two slices against each other: side by side, side by side with the
 * difference, or the difference alone. With three or more selected, one
 * is the baseline and the others are stepped through against it.
 */
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import {
  alignSlices,
  changes,
  getSlice,
  positionsOf,
  type Cellset,
  type SliceRef,
} from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import { sliceId, type CompareLayout, type DiffType, type NavigationStore } from './store'
import CompareTable, { type TableSizes } from './CompareTable.vue'
import SliceMinimap from './SliceMinimap.vue'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'

const { t } = useTranslation('tablePivot')
// i18n-keys: tablePivot:Navigation.layout.*
// i18n-keys: tablePivot:Navigation.diff.*

const props = defineProps<{
  cellset: Cellset
  store: NavigationStore
  threshold: number
  hideUnchanged: boolean
  diverging: boolean
  limit: number
}>()

const emit = defineEmits<{
  'update:threshold': [value: number]
  'update:hideUnchanged': [value: boolean]
  hover: [axis: 2 | 3, key: string | null]
}>()

const labelOf = (slice: SliceRef | null) => {
  if (!slice) return '–'
  return [positionsOf(props.cellset, 2)[slice.axis2]?.label, positionsOf(props.cellset, 3)[slice.axis3]?.label]
    .filter(Boolean)
    .join(' · ')
}

/* ---- against a baseline */

const selection = computed(() => props.store.state.selection)
const withBaseline = computed(() => selection.value.length >= 3)
const baseline = computed(
  () => props.store.state.compare.baseline ?? (withBaseline.value ? selection.value[0] : null),
)
const others = computed(() =>
  baseline.value ? selection.value.filter(s => sliceId(s) !== sliceId(baseline.value!)) : [],
)
const otherAt = ref(0)
watch(others, list => {
  if (otherAt.value >= list.length) otherAt.value = 0
})

const pair = computed(() =>
  withBaseline.value && baseline.value
    ? { a: baseline.value, b: others.value[otherAt.value] ?? null }
    : props.store.comparePair.value,
)

/* ---- picking */

const picking = ref<'a' | 'b'>('a')
const pick = (slice: SliceRef) => {
  props.store.setCompare(picking.value, slice)
  picking.value = picking.value === 'a' ? 'b' : 'a'
}
const marks = computed(() =>
  [
    pair.value.a && { slice: pair.value.a, label: 'A', tone: 'a' as const },
    pair.value.b && { slice: pair.value.b, label: 'B', tone: 'b' as const },
  ].filter((m): m is { slice: SliceRef; label: string; tone: 'a' | 'b' } => !!m),
)

/* ---- the tables */

const aligned = computed(() =>
  pair.value.a && pair.value.b
    ? alignSlices(getSlice(props.cellset, pair.value.a), getSlice(props.cellset, pair.value.b))
    : null,
)
const rowIndexes = computed(() => {
  const table = aligned.value
  if (!table) return []
  const all = table.a.map((_, i) => i)
  return props.hideUnchanged ? all.filter(r => changes(table, r, null)) : all
})
const columnIndexes = computed(() => {
  const table = aligned.value
  if (!table) return []
  const all = table.columns.map((_, i) => i)
  return props.hideUnchanged ? all.filter(c => changes(table, null, c)) : all
})

const scroll = ref({ top: 0, left: 0 })
const layout = computed(() => props.store.compareLayout.value)
const diffType = computed(() => props.store.diffType.value)

/*
 * Each table drawn at its natural size, then measured: every column as
 * wide, every row as high, as the largest of its counterparts in the other
 * tables. Cell for cell they line up, so they scroll as one.
 */
const tableA = ref<InstanceType<typeof CompareTable> | null>(null)
const tableB = ref<InstanceType<typeof CompareTable> | null>(null)
const tableDiff = ref<InstanceType<typeof CompareTable> | null>(null)
const sizes = ref<TableSizes | null>(null)

async function syncSizes() {
  sizes.value = null
  await nextTick()
  const measured = [tableA.value, tableB.value, tableDiff.value]
    .map(table => table?.measure())
    .filter((m): m is TableSizes => !!m)
  if (!measured.length) return
  const largest = (of: (m: TableSizes) => number[]) =>
    of(measured[0]).map((_, i) => Math.max(...measured.map(m => of(m)[i] ?? 0)))
  sizes.value = { columns: largest(m => m.columns), rows: largest(m => m.rows) }
}
watch([aligned, rowIndexes, columnIndexes, layout, diffType], syncSizes, { flush: 'post' })
onMounted(syncSizes)

const layouts = computed(() =>
  (['side-by-side', 'side-by-side-diff', 'diff-only'] as CompareLayout[]).map(value => ({
    value,
    label: t(`Navigation.layout.${value}`),
  })),
)
const diffTypes = computed(() =>
  (['absolute', 'percent', 'both'] as DiffType[]).map(value => ({ value, label: t(`Navigation.diff.${value}`) })),
)
</script>

<template>
  <div class="compare">
    <div class="compare__controls">
      <div class="compare__layouts" role="radiogroup" :aria-label="t('Navigation.layoutLabel')">
        <label v-for="option in layouts" :key="option.value">
          <input type="radio" :checked="layout === option.value" @change="store.setCompareLayout(option.value)" />
          {{ option.label }}
        </label>
      </div>
      <label>
        {{ t('Navigation.difference') }}
        <select :value="diffType" @change="store.setDiffType(($event.target as HTMLSelectElement).value as DiffType)">
          <option v-for="option in diffTypes" :key="option.value" :value="option.value">{{ option.label }}</option>
        </select>
      </label>
      <label>
        {{ t('Navigation.threshold') }}
        <input
          type="number"
          min="0"
          step="1"
          :value="threshold"
          class="compare__threshold"
          @change="emit('update:threshold', Number(($event.target as HTMLInputElement).value) || 0)"
        />
      </label>
      <label>
        <input
          type="checkbox"
          :checked="hideUnchanged"
          @change="emit('update:hideUnchanged', ($event.target as HTMLInputElement).checked)"
        />
        {{ t('Navigation.hideUnchanged') }}
      </label>
    </div>

    <div class="compare__pick">
      <div class="compare__pair">
        <template v-if="withBaseline">
          <label>
            {{ t('Navigation.baseline') }}
            <select
              :value="baseline ? sliceId(baseline) : ''"
              @change="store.setBaseline(selection.find(s => sliceId(s) === ($event.target as HTMLSelectElement).value) ?? null)"
            >
              <option v-for="s in selection" :key="sliceId(s)" :value="sliceId(s)">{{ labelOf(s) }}</option>
            </select>
          </label>
          <span>{{ t('Navigation.against') }}</span>
          <button type="button" :disabled="otherAt === 0" :aria-label="t('Navigation.previous')" @click="otherAt--">◀</button>
          <strong>{{ labelOf(pair.b) }}</strong>
          <span class="compare__count">({{ otherAt + 1 }}/{{ others.length }})</span>
          <button type="button" :disabled="otherAt >= others.length - 1" :aria-label="t('Navigation.next')" @click="otherAt++">▶</button>
        </template>
        <template v-else>
          <div role="radiogroup" :aria-label="t('Navigation.selectionSets')">
            <label><input v-model="picking" type="radio" value="a" /> <span class="compare__side--a">A:</span> <strong>{{ labelOf(pair.a) }}</strong></label>
            <label><input v-model="picking" type="radio" value="b" /> <span class="compare__side--b">B:</span> <strong>{{ labelOf(pair.b) }}</strong></label>
          </div>
          <button type="button" @click="store.swapCompare()">A ⇄ B</button>
        </template>
      </div>
      <SliceMinimap
        :cellset="cellset"
        :marks="marks"
        :selection="selection"
        :measure="store.measure.value"
        :normalization="store.scaleNormalization.value"
        :diverging="diverging"
        :limit="limit"
        :label="t('Navigation.pickComparison')"
        @select="pick"
        @toggle="store.toggleSelection"
        @hover="(axis, key) => emit('hover', axis, key)"
      />
    </div>

    <p v-if="!aligned" class="compare__empty">{{ t('Navigation.pickTwo') }}</p>
    <div v-else class="compare__tables" :class="`compare__tables--${layout}`">
      <template v-if="layout !== 'diff-only'">
        <CompareTable
          ref="tableA"
          v-model:scroll="scroll"
          :aligned="aligned"
          kind="a"
          :title="`A: ${labelOf(pair.a)}`"
          :rows="rowIndexes"
          :columns="columnIndexes"
          :diff-type="diffType"
          :threshold="threshold"
          :sizes="sizes"
        />
        <CompareTable
          ref="tableB"
          v-model:scroll="scroll"
          :aligned="aligned"
          kind="b"
          :title="`B: ${labelOf(pair.b)}`"
          :rows="rowIndexes"
          :columns="columnIndexes"
          :diff-type="diffType"
          :threshold="threshold"
          :sizes="sizes"
        />
      </template>
      <CompareTable
        v-if="layout !== 'side-by-side'"
        ref="tableDiff"
        v-model:scroll="scroll"
        :aligned="aligned"
        kind="diff"
        title="B − A"
        :rows="rowIndexes"
        :columns="columnIndexes"
        :diff-type="diffType"
        :threshold="threshold"
        :sizes="sizes"
      />
    </div>
  </div>
</template>

<style scoped>
.compare {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  min-height: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg);
}

.compare__controls,
.compare__pair,
.compare__layouts,
.compare__pair [role='radiogroup'] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
}

.compare select,
.compare__threshold,
.compare button {
  padding: 0.125rem 0.375rem;
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  background: var(--color-raised);
  color: var(--color-fg);
}

.compare button {
  cursor: pointer;
}

.compare button:disabled {
  color: var(--color-dim);
  cursor: default;
}

.compare__threshold {
  width: 4.5rem;
}

.compare__pick {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  max-height: 40%;
  min-height: 0;
}

.compare__side--a {
  color: var(--compare-a, var(--color-fn));
  font-weight: 700;
}

.compare__side--b {
  color: var(--compare-b, var(--color-warn));
  font-weight: 700;
}

.compare__count {
  color: var(--color-dim);
}

.compare__empty {
  color: var(--color-dim);
}

.compare__tables {
  display: grid;
  gap: 0.5rem;
  flex: 1;
  min-height: 0;
}

.compare__tables--side-by-side {
  grid-template-columns: 1fr 1fr;
}

.compare__tables--side-by-side-diff {
  grid-template-columns: 1fr 1fr 1fr;
}

.compare__tables--diff-only {
  grid-template-columns: 1fr;
}
</style>
