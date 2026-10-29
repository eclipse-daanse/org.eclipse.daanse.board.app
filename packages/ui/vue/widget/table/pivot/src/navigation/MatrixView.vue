<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
-->

<script setup lang="ts">
/*
 * Every slice as the whole view - pages across, chapters down, each cell
 * the slice's value - and a slice's own table over it, in a popover at the
 * cell it was opened from. The map's grid with the table on demand: for a
 * reader who compares slices first and reads one now and then.
 */
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { positionsOf, type Cellset, type SliceRef } from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import type { NavigationStore, ScaleNormalization } from './store'
import SliceMinimap from './SliceMinimap.vue'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'

const { t } = useTranslation('tablePivot')
// i18n-keys: tablePivot:Navigation.scale.*

const props = defineProps<{
  cellset: Cellset
  store: NavigationStore
  diverging: boolean
  limit: number
}>()

const emit = defineEmits<{
  'update:diverging': [value: boolean]
  hover: [axis: 2 | 3, key: string | null]
}>()

const normalizations = computed(() =>
  (['global', 'row', 'column'] as ScaleNormalization[]).map(value => ({ value, label: t(`Navigation.scale.${value}`) })),
)

/* ---- the popover */

const POPOVER_WIDTH = 640
const MARGIN = 8

const openFrom = ref<HTMLElement | null>(null)
const popover = ref<HTMLElement | null>(null)
const at = ref({ left: 0, top: 0 })

const title = computed(() => {
  const { axis2, axis3 } = props.store.state.slice
  return [positionsOf(props.cellset, 2)[axis2]?.label, positionsOf(props.cellset, 3)[axis3]?.label]
    .filter(Boolean)
    .join(' · ')
})

/* Beside the cell, on the side with room, inside the window. */
function place() {
  const cell = openFrom.value
  if (!cell) return
  const box = cell.getBoundingClientRect()
  const width = Math.min(POPOVER_WIDTH, window.innerWidth - 2 * MARGIN)
  const height = popover.value?.offsetHeight ?? 0
  let left = box.right + MARGIN
  if (left + width > window.innerWidth - MARGIN) left = box.left - width - MARGIN
  left = Math.max(MARGIN, Math.min(left, window.innerWidth - width - MARGIN))
  const top = Math.max(MARGIN, Math.min(box.top, window.innerHeight - height - MARGIN))
  at.value = { left, top }
}

async function open(slice: SliceRef, cell?: HTMLElement) {
  props.store.select(slice)
  openFrom.value = cell ?? null
  await nextTick()
  place()
  popover.value?.focus()
}

function close() {
  const cell = openFrom.value
  openFrom.value = null
  // Back where the reader was, for the keyboard.
  cell?.focus()
}

/*
 * The table's own menu and dialogs are drawn over the page, not inside the
 * popover; choosing in them is still working in the table.
 */
const TABLE_OVERLAYS = '.pivotContextMenu, [role="dialog"], .scrim'

function onDocument(event: MouseEvent) {
  const target = event.target as Node
  if (popover.value?.contains(target) || openFrom.value?.contains(target)) return
  if (target instanceof Element && target.closest(TABLE_OVERLAYS)) return
  close()
}

function onKey(event: KeyboardEvent) {
  // With a dialog of the table open, Escape closes that dialog, not the popover under it.
  if (event.key === 'Escape' && !document.querySelector('[aria-modal="true"]')) close()
}

/* Listening only while it is open. */
watch(openFrom, (cell, before) => {
  if (cell && !before) {
    document.addEventListener('mousedown', onDocument, true)
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', place)
  } else if (!cell) {
    document.removeEventListener('mousedown', onDocument, true)
    document.removeEventListener('keydown', onKey)
    window.removeEventListener('resize', place)
  }
})

// A table that grows once its data is there moves the popover back inside the window.
watch(() => props.store.state.slice, () => nextTick(place), { deep: true })

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', onDocument, true)
  document.removeEventListener('keydown', onKey)
  window.removeEventListener('resize', place)
})
</script>

<template>
  <div class="matrix">
    <div class="matrix__scale" role="radiogroup" :aria-label="t('Navigation.colourScale')">
      <label v-for="option in normalizations" :key="option.value">
        <input
          type="radio"
          :checked="store.scaleNormalization.value === option.value"
          @change="store.setScaleNormalization(option.value)"
        />
        {{ option.label }}
      </label>
      <label>
        <input
          type="checkbox"
          :checked="diverging"
          @change="emit('update:diverging', ($event.target as HTMLInputElement).checked)"
        />
        {{ t('Navigation.aroundZero') }}
      </label>
      <span v-if="store.state.selection.length" class="matrix__selection">
        {{ t('Navigation.selectedCount', { count: store.state.selection.length }) }}
        <button v-if="store.state.selection.length >= 2" type="button" @click="store.compareSelection()">
          {{ t('Navigation.compareSelected') }}
        </button>
        <button type="button" @click="store.clearSelection()">{{ t('Navigation.clear') }}</button>
      </span>
    </div>

    <SliceMinimap
      class="matrix__grid"
      :cellset="cellset"
      :current="openFrom ? store.state.slice : null"
      :selection="store.state.selection"
      :measure="store.measure.value"
      :normalization="store.scaleNormalization.value"
      :diverging="diverging"
      :limit="limit"
      :label="t('Navigation.slices')"
      @select="open"
      @toggle="store.toggleSelection"
      @hover="(axis, key) => emit('hover', axis, key)"
    />

    <Teleport to="body">
      <section
        v-if="openFrom"
        ref="popover"
        class="matrix-popover"
        role="dialog"
        :aria-label="title"
        tabindex="-1"
        :style="{ left: `${at.left}px`, top: `${at.top}px` }"
      >
        <header class="matrix-popover__header">
          <strong class="matrix-popover__title">{{ title }}</strong>
          <button type="button" class="matrix-popover__close" :aria-label="t('Navigation.close')" @click="close">✕</button>
        </header>
        <div class="matrix-popover__table">
          <!-- compact: the table in a popover is drawn smaller than on the board. -->
          <slot name="table" :compact="true" />
        </div>
      </section>
    </Teleport>
  </div>
</template>

<style scoped>
.matrix {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  min-height: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg);
}

.matrix__scale {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-dim);
  font-size: var(--text-xs);
}

.matrix__selection button {
  margin-left: 0.5rem;
  padding: 0 0.375rem;
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  background: var(--color-raised);
  color: var(--color-fg);
  cursor: pointer;
}

.matrix__grid {
  flex: 1;
  min-height: 0;
}

/* Over the board, not inside the widget's box: the table needs the room. */
.matrix-popover {
  position: fixed;
  z-index: 40000;
  display: flex;
  flex-direction: column;
  width: min(640px, calc(100vw - 16px));
  max-height: min(70vh, calc(100vh - 16px));
  background-color: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-e3, 0 8px 24px rgba(0, 0, 0, 0.5));
  font-family: var(--font-sans);
  color: var(--color-fg);
  outline: none;
}

.matrix-popover__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.375rem 0.5rem 0.375rem 0.75rem;
  border-bottom: 1px solid var(--color-divider);
  font-size: var(--text-sm);
}

.matrix-popover__close {
  padding: 0 0.375rem;
  border: 0;
  background: none;
  color: var(--color-dim);
  cursor: pointer;
}

.matrix-popover__close:hover,
.matrix-popover__close:focus-visible {
  color: var(--color-fg);
}

.matrix-popover__table {
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 0.25rem;
}
</style>
