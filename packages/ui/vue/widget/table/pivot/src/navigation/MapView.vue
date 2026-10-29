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
/* The table, and beside it the map of every slice, the current one outlined. */
import { computed } from 'vue'
import type { Cellset } from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import type { NavigationStore, ScaleNormalization } from './store'
import SliceMinimap from './SliceMinimap.vue'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'

const { t } = useTranslation('tablePivot')
// i18n-keys: tablePivot:Navigation.scale.*

defineProps<{
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
</script>

<template>
  <div class="map">
    <div class="map__table">
      <slot name="table" />
    </div>
    <aside class="map__panel" :aria-label="t('Navigation.sliceOverview')">
      <div class="map__scale" role="radiogroup" :aria-label="t('Navigation.colourScale')">
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
      </div>
      <SliceMinimap
        :cellset="cellset"
        :current="store.state.slice"
        :selection="store.state.selection"
        :measure="store.measure.value"
        :normalization="store.scaleNormalization.value"
        :diverging="diverging"
        :limit="limit"
        :label="t('Navigation.slices')"
        @select="store.select"
        @toggle="store.toggleSelection"
        @hover="(axis, key) => emit('hover', axis, key)"
      />
      <p v-if="store.state.selection.length" class="map__selection">
        {{ t('Navigation.selectedCount', { count: store.state.selection.length }) }}
        <button v-if="store.state.selection.length >= 2" type="button" @click="store.compareSelection()">
          {{ t('Navigation.compareSelected') }}
        </button>
        <button type="button" @click="store.clearSelection()">{{ t('Navigation.clear') }}</button>
      </p>
    </aside>
  </div>
</template>

<style scoped>
.map {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(12rem, 40%);
  gap: 0.75rem;
  height: 100%;
  min-height: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg);
}

.map__table {
  min-width: 0;
  min-height: 0;
  overflow: auto;
}

.map__panel {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  min-height: 0;
  overflow: hidden;
  border-left: 1px solid var(--color-divider);
  padding-left: 0.75rem;
}

.map__scale {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  color: var(--color-dim);
  font-size: var(--text-xs);
}

.map__selection {
  margin: 0;
  color: var(--color-dim);
  font-size: var(--text-xs);
}

.map__selection button {
  margin-left: 0.5rem;
  padding: 0 0.375rem;
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  background: var(--color-raised);
  color: var(--color-fg);
  cursor: pointer;
}
</style>
