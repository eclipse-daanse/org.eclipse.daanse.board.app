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
 * Down from the top, as in a calendar: chapters first, then pages, then
 * the table. "By axes" takes each axis in one step; "by hierarchy" steps
 * through an axis level by level - a year, its quarters - where the axis
 * holds parents with their children.
 */
import { computed, ref, watch } from 'vue'
import {
  axisTree,
  positionsOf,
  type AxisTreeNode,
  type Cellset,
  type CellsetPosition,
  type SliceRef,
} from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import type { NavigationStore } from './store'
import { formatSliceValue, heatColor, memberValue, scaleMatrix } from './values'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'

const { t } = useTranslation('tablePivot')

const props = defineProps<{
  cellset: Cellset
  store: NavigationStore
  limit?: number
}>()

const emit = defineEmits<{ hover: [axis: 2 | 3, key: string | null] }>()

type Axis = 2 | 3
/** Chapters first: they are the outer loop of the cellset. */
const order = computed<Axis[]>(() => (props.cellset.axes.length > 3 ? [3, 2] : [2]))

interface AxisPath {
  /** The parents stepped into, top down - only ever filled by hierarchy. */
  chain: number[]
  /** The position chosen on this axis, once it is. */
  chosen: number | null
}

const path = ref<Record<Axis, AxisPath>>({ 2: { chain: [], chosen: null }, 3: { chain: [], chosen: null } })
const depth = computed(() => props.store.cascadeDepth.value)
const search = ref('')

const trees = computed(() => ({
  2: axisTree(positionsOf(props.cellset, 2)),
  3: axisTree(positionsOf(props.cellset, 3)),
}))

function ancestors(axis: Axis, index: number): number[] {
  const walk = (nodes: AxisTreeNode[], trail: number[]): number[] | null => {
    for (const node of nodes) {
      if (node.position.index === index) return trail
      const found = walk(node.children, [...trail, node.position.index])
      if (found) return found
    }
    return null
  }
  return walk(trees.value[axis], []) ?? []
}

/** The path that shows a slice: every axis chosen, the chain leading to it. */
function pathTo(slice: SliceRef): Record<Axis, AxisPath> {
  const at = (axis: Axis, index: number): AxisPath =>
    index < 0
      ? { chain: [], chosen: null }
      : { chain: depth.value === 'hierarchy' ? ancestors(axis, index) : [], chosen: index }
  return { 2: at(2, slice.axis2), 3: at(3, slice.axis3) }
}

// Arriving from another mode, or the slice changed from outside: show it.
watch(
  () => [props.store.state.slice.axis2, props.store.state.slice.axis3, props.cellset],
  () => {
    const { axis2, axis3 } = props.store.state.slice
    // Nothing chosen yet anywhere: start at the top, as a calendar does.
    if (!props.store.state.touched) return
    const done = order.value.every(a => path.value[a].chosen !== null)
    const same = path.value[2].chosen === axis2 && path.value[3].chosen === axis3
    if (!done || !same) path.value = pathTo(props.store.state.slice)
  },
  { immediate: true },
)

// Switching the variant keeps what was chosen; a half-walked chain does not survive "by axes".
watch(depth, () => {
  for (const axis of order.value) {
    const step = path.value[axis]
    path.value[axis] =
      step.chosen !== null
        ? { chosen: step.chosen, chain: depth.value === 'hierarchy' ? ancestors(axis, step.chosen) : [] }
        : { chosen: null, chain: depth.value === 'hierarchy' ? step.chain : [] }
  }
})

const currentAxis = computed<Axis | null>(() => order.value.find(a => path.value[a].chosen === null) ?? null)

const fixed = computed(() => ({
  axis2: path.value[2].chosen ?? undefined,
  axis3: path.value[3].chosen ?? undefined,
}))

interface Tile {
  position: CellsetPosition
  /** Steps further down instead of choosing. */
  descends: boolean
  /** The parent itself, chosen as a whole. */
  whole: boolean
}

const tiles = computed<Tile[]>(() => {
  const axis = currentAxis.value
  if (axis === null) return []
  if (depth.value === 'axes') {
    return positionsOf(props.cellset, axis).map(position => ({ position, descends: false, whole: false }))
  }
  const chain = path.value[axis].chain
  let nodes = trees.value[axis]
  for (const index of chain) nodes = nodes.find(n => n.position.index === index)?.children ?? []
  const parent = chain.length ? positionsOf(props.cellset, axis)[chain[chain.length - 1]] : null
  return [
    ...(parent ? [{ position: parent, descends: false, whole: true }] : []),
    ...nodes.map(node => ({ position: node.position, descends: node.children.length > 0, whole: false })),
  ]
})

const tooMany = computed(() => tiles.value.length > (props.limit ?? 200))
const shownTiles = computed(() => {
  const term = search.value.trim().toLowerCase()
  const list = term ? tiles.value.filter(t => t.position.label.toLowerCase().includes(term)) : tiles.value
  return tooMany.value && !term ? list.slice(0, props.limit ?? 200) : list
})

const tileValues = computed(() =>
  shownTiles.value.map(tile =>
    memberValue(props.cellset, currentAxis.value!, tile.position.index, fixed.value, props.store.measure.value),
  ),
)
const tileColours = computed(() =>
  scaleMatrix(
    [tileValues.value.map(v => v.value)],
    props.store.scaleNormalization.value === 'column' ? 'global' : props.store.scaleNormalization.value,
    true,
  )[0],
)

/** The slice a tile stands for: its own axis set, the other as chosen or as it was. */
function sliceOf(axis: Axis, index: number): SliceRef {
  const current = props.store.state.slice
  return {
    axis2: axis === 2 ? index : path.value[2].chosen ?? current.axis2,
    axis3: axis === 3 ? index : path.value[3].chosen ?? current.axis3,
  }
}

function open(tile: Tile, event: MouseEvent) {
  const axis = currentAxis.value
  if (axis === null) return
  if (event.shiftKey || event.ctrlKey || event.metaKey) {
    // A and B to compare: a third pushes out the first.
    props.store.toggleSelection(sliceOf(axis, tile.position.index), 2)
    return
  }
  search.value = ''
  if (tile.descends) {
    path.value[axis] = { chain: [...path.value[axis].chain, tile.position.index], chosen: null }
    return
  }
  path.value[axis] = { ...path.value[axis], chosen: tile.position.index }
  if (currentAxis.value === null) props.store.select(sliceOf(axis, tile.position.index))
}

interface Crumb {
  label: string
  /** What going back here leaves of the path. */
  restore: () => void
}

const crumbs = computed<Crumb[]>(() => {
  const list: Crumb[] = [
    {
      label: t('Navigation.overview'),
      restore: () => {
        path.value = { 2: { chain: [], chosen: null }, 3: { chain: [], chosen: null } }
      },
    },
  ]
  for (const [i, axis] of order.value.entries()) {
    const step = path.value[axis]
    const earlier = order.value.slice(0, i)
    const keepEarlier = () => {
      const kept = { 2: { chain: [], chosen: null }, 3: { chain: [], chosen: null } } as Record<Axis, AxisPath>
      for (const a of earlier) kept[a] = { ...path.value[a] }
      return kept
    }
    step.chain.forEach((index, depthIndex) => {
      list.push({
        label: positionsOf(props.cellset, axis)[index].label,
        restore: () => {
          const kept = keepEarlier()
          kept[axis] = { chain: step.chain.slice(0, depthIndex + 1), chosen: null }
          path.value = kept
        },
      })
    })
    if (step.chosen !== null && !step.chain.includes(step.chosen)) {
      list.push({
        label: positionsOf(props.cellset, axis)[step.chosen].label,
        restore: () => {
          const kept = keepEarlier()
          kept[axis] = { chain: step.chain, chosen: step.chosen }
          path.value = kept
        },
      })
    }
  }
  return list
})

const axisName = (axis: Axis) => (axis === 3 ? t('Navigation.chapters') : t('Navigation.pages'))
</script>

<template>
  <div class="cascade">
    <div class="cascade__bar">
      <nav class="cascade__crumbs" :aria-label="t('Navigation.path')">
        <template v-for="(crumb, i) in crumbs" :key="i">
          <span v-if="i" aria-hidden="true">›</span>
          <button
            type="button"
            class="cascade__crumb"
            :aria-current="i === crumbs.length - 1 ? 'location' : undefined"
            @click="crumb.restore()"
          >
            {{ crumb.label }}
          </button>
        </template>
      </nav>
      <span v-if="store.state.selection.length" class="cascade__selection">
        {{ t('Navigation.selectedCount', { count: store.state.selection.length }) }}
        <button
          v-if="store.state.selection.length >= 2"
          type="button"
          class="cascade__compare"
          @click="store.compareSelection()"
        >
          {{ t('Navigation.compareSelected') }}
        </button>
        <button type="button" @click="store.clearSelection()">{{ t('Navigation.clear') }}</button>
      </span>
      <div class="cascade__depth" role="radiogroup" :aria-label="t('Navigation.steps')">
        <label>
          <input type="radio" :checked="depth === 'axes'" @change="store.setCascadeDepth('axes')" /> {{ t('Navigation.depth.axes') }}
        </label>
        <label>
          <input type="radio" :checked="depth === 'hierarchy'" @change="store.setCascadeDepth('hierarchy')" /> {{ t('Navigation.depth.hierarchy') }}
        </label>
      </div>
    </div>

    <div v-if="currentAxis !== null" class="cascade__level">
      <div class="cascade__level-title">{{ axisName(currentAxis) }}</div>
      <input
        v-if="tooMany"
        v-model="search"
        type="search"
        class="cascade__search"
        :placeholder="t('Navigation.search', { count: tiles.length })"
        :aria-label="t('Navigation.searchMembers')"
      />
      <ul class="cascade__tiles" role="list">
        <li v-for="(tile, i) in shownTiles" :key="`${tile.whole}:${tile.position.key}`">
          <button
            type="button"
            class="cascade__tile"
            :class="{ 'is-empty': tileValues[i].value === null, 'is-whole': tile.whole }"
            :style="{ backgroundColor: heatColor(tileColours[i]) }"
            :title="t('Navigation.tileTitle', { label: tile.position.label, value: formatSliceValue(tileValues[i]) })"
            @click="open(tile, $event)"
            @mouseenter="emit('hover', currentAxis!, tile.position.key)"
            @mouseleave="emit('hover', currentAxis!, null)"
          >
            <span class="cascade__label">
              {{ tile.whole ? `${tile.position.label} (gesamt)` : tile.position.label }}
              <span v-if="tile.descends" :aria-label="t('Navigation.hasChildren')">▸</span>
            </span>
            <span class="cascade__value">{{ formatSliceValue(tileValues[i]) }}</span>
            <span
              v-if="store.isSelected(sliceOf(currentAxis, tile.position.index))"
              class="cascade__check"
              :aria-label="t('Navigation.selectedForComparison')"
            >✓</span>
          </button>
        </li>
      </ul>
    </div>

    <div v-else class="cascade__table">
      <slot name="table" />
    </div>
  </div>
</template>

<style scoped>
.cascade {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-height: 0;
  height: 100%;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg);
}

.cascade__bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.cascade__crumbs {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;
  color: var(--color-dim);
}

.cascade__crumb {
  background: none;
  border: none;
  padding: 0.125rem 0.25rem;
  color: var(--color-accent);
  cursor: pointer;
  border-radius: var(--radius-xs);
}

.cascade__crumb[aria-current] {
  color: var(--color-fg);
  font-weight: 600;
}

.cascade__crumb:focus-visible,
.cascade__tile:focus-visible {
  outline: 2px solid var(--color-outline);
  outline-offset: 1px;
}

.cascade__selection {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  color: var(--color-dim);
}

.cascade__selection button {
  padding: 0 0.375rem;
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  background: var(--color-raised);
  color: var(--color-fg);
  cursor: pointer;
}

.cascade__selection .cascade__compare {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.cascade__depth {
  display: flex;
  gap: 0.75rem;
  color: var(--color-dim);
}

.cascade__level {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-height: 0;
  overflow: auto;
}

.cascade__level-title {
  color: var(--color-dim);
  font-weight: 600;
}

.cascade__search {
  max-width: 16rem;
  padding: 0.25rem 0.5rem;
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  background: var(--color-raised);
  color: var(--color-fg);
}

.cascade__tiles {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  gap: 0.375rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.cascade__tile {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  color: var(--color-fg);
  cursor: pointer;
  text-align: left;
}

.cascade__tile.is-whole {
  border-style: dashed;
}

.cascade__tile.is-empty {
  background-image: repeating-linear-gradient(45deg, var(--color-divider) 0 1px, transparent 1px 6px);
  color: var(--color-dim);
}

.cascade__value {
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
}

.cascade__check {
  position: absolute;
  top: 0.25rem;
  right: 0.375rem;
}

.cascade__table {
  min-height: 0;
  flex: 1;
  overflow: auto;
}
</style>
