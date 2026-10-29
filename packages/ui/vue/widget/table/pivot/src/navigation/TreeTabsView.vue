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
 * Chapters as a tree on the left, pages as tabs on top. A page axis that
 * runs through time can be a timeline instead - a ruler of its periods,
 * with back, forward and play; the reader switches between the two.
 */
import { computed, nextTick, onUnmounted, ref, watch } from 'vue'
import {
  axisOptions,
  axisTree,
  isTimeAxis,
  positionsOf,
  type AxisMetadata,
  type Cellset,
} from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import type { NavigationStore } from './store'
import AxisTreeItem from './AxisTreeItem.vue'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'

const { t } = useTranslation('tablePivot')

const props = withDefaults(defineProps<{
  cellset: Cellset
  store: NavigationStore
  metadata?: AxisMetadata
  /** A time axis as a timeline; tabs when off. */
  timeline?: boolean
}>(), { timeline: true })

const emit = defineEmits<{
  hover: [axis: 2 | 3, key: string | null]
  'update:timeline': [value: boolean]
}>()

const PLAY_STEP_MS = 1500

const pages = computed(() => positionsOf(props.cellset, 2))
const hasChapters = computed(() => props.cellset.axes.length > 3)
const tree = computed(() => axisTree(positionsOf(props.cellset, 3)))
const isTime = computed(() => isTimeAxis(pages.value, props.metadata ?? {}))
const asTimeline = computed(() => isTime.value && props.timeline)

const slice = computed(() => props.store.state.slice)
const selectPage = (axis2: number) => props.store.select({ ...slice.value, axis2 })
const selectChapter = (axis3: number) => props.store.select({ ...slice.value, axis3 })

/* ---- the tree */

const expanded = ref(new Set<number>())
// The way to the current chapter is open, so it can be seen.
watch(
  () => [slice.value.axis3, tree.value],
  () => {
    const walk = (nodes: typeof tree.value, trail: number[]): number[] | null => {
      for (const node of nodes) {
        if (node.position.index === slice.value.axis3) return trail
        const found = walk(node.children, [...trail, node.position.index])
        if (found) return found
      }
      return null
    }
    for (const index of walk(tree.value, []) ?? []) expanded.value.add(index)
  },
  { immediate: true },
)
const toggle = (index: number) => {
  const next = new Set(expanded.value)
  if (next.has(index)) next.delete(index)
  else next.add(index)
  expanded.value = next
}

const treeElement = ref<HTMLElement | null>(null)
const focusedChapter = ref(slice.value.axis3)
const visibleChapters = () =>
  [...(treeElement.value?.querySelectorAll<HTMLElement>('[role="treeitem"]') ?? [])]

const onTreeKey = async (event: KeyboardEvent) => {
  const items = visibleChapters()
  const at = items.findIndex(el => Number(el.dataset.index) === focusedChapter.value)
  const index = focusedChapter.value
  const go = async (to: HTMLElement | undefined) => {
    if (!to) return
    focusedChapter.value = Number(to.dataset.index)
    await nextTick()
    to.focus()
  }
  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      return go(items[at + 1])
    case 'ArrowUp':
      event.preventDefault()
      return go(items[at - 1])
    case 'ArrowRight':
      event.preventDefault()
      if (!expanded.value.has(index)) toggle(index)
      return
    case 'ArrowLeft':
      event.preventDefault()
      if (expanded.value.has(index)) toggle(index)
      return
    case 'Enter':
    case ' ':
      event.preventDefault()
      selectChapter(index)
  }
}

/* ---- the tabs */

const tabsElement = ref<HTMLElement | null>(null)
const onTabKey = async (event: KeyboardEvent) => {
  const at = pages.value.findIndex(p => p.index === slice.value.axis2)
  const to = { ArrowRight: at + 1, ArrowLeft: at - 1, Home: 0, End: pages.value.length - 1 }[event.key]
  if (to === undefined || !pages.value[to]) return
  event.preventDefault()
  selectPage(pages.value[to].index)
  await nextTick()
  tabsElement.value?.querySelector<HTMLElement>('[aria-selected="true"]')?.focus()
}

// The current tab stays in view however long the strip.
watch(
  () => slice.value.axis2,
  async () => {
    await nextTick()
    tabsElement.value?.querySelector<HTMLElement>('[aria-selected="true"]')?.scrollIntoView?.({ block: 'nearest', inline: 'nearest' })
  },
)

/* ---- the timeline */

const step = (by: number) => {
  const at = pages.value.findIndex(p => p.index === slice.value.axis2)
  const next = pages.value[at + by]
  if (next) selectPage(next.index)
  return !!next
}
const playing = ref(false)
let timer: ReturnType<typeof setInterval> | undefined
const stop = () => {
  playing.value = false
  clearInterval(timer)
}
const play = () => {
  if (playing.value) return stop()
  playing.value = true
  timer = setInterval(() => {
    if (!step(1)) stop()
  }, PLAY_STEP_MS)
}
onUnmounted(stop)

/* A period's depth sets its tick: years tall and named, months short. */
const depths = computed(() => new Map(axisOptions(pages.value).map(o => [o.index, o.depth])))
const depthOf = (index: number) => depths.value.get(index) ?? 0
const current = computed(() => pages.value.find(p => p.index === slice.value.axis2))

const rulerElement = ref<HTMLElement | null>(null)
const onRulerKey = (event: KeyboardEvent) => {
  const last = pages.value.length - 1
  const at = pages.value.findIndex(p => p.index === slice.value.axis2)
  const to = { ArrowRight: at + 1, ArrowUp: at + 1, ArrowLeft: at - 1, ArrowDown: at - 1, Home: 0, End: last }[event.key]
  if (to === undefined) return
  event.preventDefault()
  stop()
  const page = pages.value[Math.max(0, Math.min(to, last))]
  if (page) selectPage(page.index)
}

// The current period stays in view on a long ruler.
watch(
  () => [slice.value.axis2, asTimeline.value],
  async () => {
    if (!asTimeline.value) return
    await nextTick()
    rulerElement.value?.querySelector<HTMLElement>('.is-current')?.scrollIntoView?.({ block: 'nearest', inline: 'nearest' })
  },
  { immediate: true },
)

const isFirst = computed(() => pages.value[0]?.index === slice.value.axis2)
const isLast = computed(() => pages.value[pages.value.length - 1]?.index === slice.value.axis2)
</script>

<template>
  <div class="tree-tabs" :class="{ 'tree-tabs--no-tree': !hasChapters }">
    <ul
      v-if="hasChapters"
      ref="treeElement"
      class="tree-tabs__tree"
      role="tree"
      :aria-label="t('Navigation.chapters')"
      @keydown="onTreeKey"
    >
      <AxisTreeItem
        v-for="node in tree"
        :key="node.position.key"
        :node="node"
        :level="1"
        :current="slice.axis3"
        :expanded="expanded"
        :focused="focusedChapter"
        @select="selectChapter($event); focusedChapter = $event"
        @toggle="toggle"
        @hover="emit('hover', 3, $event)"
      />
    </ul>

    <div class="tree-tabs__main">
      <div v-if="isTime" class="tree-tabs__bar">
        <div v-if="asTimeline" class="tree-tabs__timeline" role="group" :aria-label="t('Navigation.timeline')">
          <button type="button" :disabled="isFirst" :aria-label="t('Navigation.back')" @click="stop(); step(-1)">◀</button>
          <button type="button" :aria-pressed="playing" :aria-label="playing ? t('Navigation.pause') : t('Navigation.play')" @click="play">
            {{ playing ? '⏸' : '▶' }}
          </button>
          <button type="button" :disabled="isLast" :aria-label="t('Navigation.forward')" @click="stop(); step(1)">▶▶</button>
          <strong class="tree-tabs__period">{{ current?.label }}</strong>
        </div>
        <div class="tree-tabs__switch" role="radiogroup" :aria-label="t('Navigation.pages')">
          <label>
            <input type="radio" :checked="asTimeline" @change="emit('update:timeline', true)" />
            {{ t('Navigation.asTimeline') }}
          </label>
          <label>
            <input type="radio" :checked="!asTimeline" @change="stop(); emit('update:timeline', false)" />
            {{ t('Navigation.asTabs') }}
          </label>
        </div>
      </div>

      <!-- The timeline: every period a tick on one line, the current one marked. -->
      <div
        v-if="asTimeline"
        ref="rulerElement"
        class="tree-tabs__ruler"
        role="slider"
        tabindex="0"
        :aria-label="t('Navigation.pages')"
        :aria-valuemin="0"
        :aria-valuemax="pages.length - 1"
        :aria-valuenow="pages.findIndex(p => p.index === slice.axis2)"
        :aria-valuetext="current?.label"
        @keydown="onRulerKey"
      >
        <span
          v-for="page in pages"
          :key="page.key"
          class="tree-tabs__tick"
          :class="[`is-depth-${Math.min(depthOf(page.index), 2)}`, { 'is-current': page.index === slice.axis2 }]"
          :title="page.label"
          @click="stop(); selectPage(page.index)"
          @mouseenter="emit('hover', 2, page.key)"
          @mouseleave="emit('hover', 2, null)"
        >
          <span class="tree-tabs__mark" aria-hidden="true" />
          <span class="tree-tabs__tick-label">{{ page.label }}</span>
        </span>
      </div>

      <template v-else>
        <div
          ref="tabsElement"
          class="tree-tabs__tabs"
          role="tablist"
          :aria-label="t('Navigation.pages')"
          @keydown="onTabKey"
        >
          <button
            v-for="page in pages"
            :key="page.key"
            type="button"
            role="tab"
            class="tree-tabs__tab"
            :aria-selected="page.index === slice.axis2"
            :tabindex="page.index === slice.axis2 ? 0 : -1"
            :title="page.label"
            @click="selectPage(page.index)"
            @mouseenter="emit('hover', 2, page.key)"
            @mouseleave="emit('hover', 2, null)"
          >
            {{ page.label }}
          </button>
        </div>

        <!-- The overflow: every page, for when the strip is longer than the widget. -->
        <select
          v-if="pages.length > 8"
          class="tree-tabs__more"
          :value="slice.axis2"
          :aria-label="t('Navigation.allPages')"
          @change="selectPage(Number(($event.target as HTMLSelectElement).value))"
        >
          <option v-for="page in pages" :key="page.key" :value="page.index">{{ page.label }}</option>
        </select>
      </template>

      <div class="tree-tabs__table" role="tabpanel">
        <slot name="table" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.tree-tabs {
  display: grid;
  grid-template-columns: minmax(9rem, 14rem) 1fr;
  gap: 0.75rem;
  height: 100%;
  min-height: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg);
}

.tree-tabs--no-tree {
  grid-template-columns: 1fr;
}

.tree-tabs__tree {
  margin: 0;
  padding: 0.25rem;
  overflow: auto;
  border-right: 1px solid var(--color-divider);
}

.tree-tabs__main {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  min-width: 0;
  min-height: 0;
}

.tree-tabs__bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.tree-tabs__timeline {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.tree-tabs__period {
  margin-left: 0.5rem;
  font-weight: 600;
}

.tree-tabs__switch {
  display: flex;
  margin-left: auto;
  gap: 0.75rem;
  color: var(--color-dim);
  font-size: var(--text-xs);
}

.tree-tabs__timeline button {
  padding: 0.125rem 0.5rem;
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  background: var(--color-raised);
  color: var(--color-fg);
  cursor: pointer;
}

.tree-tabs__timeline button:disabled {
  color: var(--color-dim);
  cursor: default;
}

.tree-tabs__tabs {
  display: flex;
  gap: 0.125rem;
  overflow-x: auto;
  border-bottom: 1px solid var(--color-divider);
  scrollbar-width: thin;
}

.tree-tabs__tab {
  flex: none;
  padding: 0.25rem 0.625rem;
  border: none;
  border-bottom: 2px solid transparent;
  background: none;
  color: var(--color-dim);
  cursor: pointer;
  white-space: nowrap;
}

.tree-tabs__tab[aria-selected='true'] {
  color: var(--color-fg);
  border-bottom-color: var(--color-accent);
  font-weight: 600;
}

.tree-tabs__tab:focus-visible,
.tree-tabs__timeline button:focus-visible,
.tree-tabs__more:focus-visible {
  outline: 2px solid var(--color-outline);
  outline-offset: -2px;
}

/* The ruler: one line, a tick per period, taller and named for the larger periods. */
.tree-tabs__ruler {
  display: flex;
  align-items: flex-start;
  overflow-x: auto;
  padding: 0 0.25rem 0.25rem;
  background: linear-gradient(var(--color-divider), var(--color-divider)) 0 0.875rem / 100% 1px no-repeat;
  scrollbar-width: thin;
  outline: none;
}

.tree-tabs__ruler:focus-visible {
  outline: 2px solid var(--color-outline);
  outline-offset: 2px;
}

.tree-tabs__tick {
  flex: 1 0 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem;
  min-width: 2.5rem;
  color: var(--color-dim);
  cursor: pointer;
}

.tree-tabs__mark {
  width: 1px;
  height: 0.75rem;
  margin-top: 0.5rem;
  background: var(--color-dim);
}

.tree-tabs__tick.is-depth-0 .tree-tabs__mark {
  height: 1.25rem;
  margin-top: 0.25rem;
  width: 2px;
  background: var(--color-fg);
}

.tree-tabs__tick.is-depth-2 .tree-tabs__mark {
  height: 0.5rem;
  margin-top: 0.625rem;
}

.tree-tabs__tick-label {
  font-size: var(--text-xs);
  white-space: nowrap;
}

.tree-tabs__tick.is-depth-0 .tree-tabs__tick-label {
  color: var(--color-fg);
  font-weight: 600;
}

.tree-tabs__tick:hover .tree-tabs__tick-label {
  color: var(--color-fg);
}

/* The current period: a dot on the line and its name in the accent. */
.tree-tabs__tick.is-current .tree-tabs__mark {
  width: 0.75rem;
  height: 0.75rem;
  margin-top: 0.5rem;
  border-radius: 50%;
  background: var(--color-accent);
  box-shadow: 0 0 0 2px var(--color-pane);
}

.tree-tabs__tick.is-current .tree-tabs__tick-label {
  color: var(--color-accent);
  font-weight: 600;
}

.tree-tabs__more {
  align-self: flex-end;
  padding: 0.125rem 0.25rem;
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  background: var(--color-raised);
  color: var(--color-fg);
}

.tree-tabs__table {
  flex: 1;
  min-height: 0;
  overflow: auto;
}
</style>
