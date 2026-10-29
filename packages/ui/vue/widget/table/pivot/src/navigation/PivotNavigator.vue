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
 * A cellset with pages - and maybe chapters - and the ways through them.
 * The mode is switched in the header; the place stays where it is.
 */
import type { AxisMetadata, Cellset } from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import { MODES, type NavigationMode, type NavigationSettings, type NavigationStore } from './store'
import CascadeView from './CascadeView.vue'
import CompareView from './CompareView.vue'
import MapView from './MapView.vue'
import MatrixView from './MatrixView.vue'
import TreeTabsView from './TreeTabsView.vue'
import StandardView from './StandardView.vue'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'

const { t } = useTranslation('tablePivot')
// i18n-keys: tablePivot:Navigation.modes.*

defineProps<{
  cellset: Cellset
  store: NavigationStore
  metadata?: AxisMetadata
}>()

const settings = defineModel<NavigationSettings>('settings', { required: true })

const emit = defineEmits<{ hover: [axis: 2 | 3, key: string | null] }>()

</script>

<template>
  <div class="navigator">
    <header class="navigator__header">
      <div class="navigator__modes" role="tablist" :aria-label="t('Navigation.view')">
        <button
          v-for="mode in MODES"
          :key="mode"
          type="button"
          role="tab"
          class="navigator__mode"
          :aria-selected="store.mode.value === mode"
          @click="store.setMode(mode)"
        >
          {{ t(`Navigation.modes.${mode}`) }}
        </button>
      </div>
      <label v-if="store.measures.value.length > 1" class="navigator__measure">
        {{ t('Navigation.colourBy') }}
        <select :value="store.measure.value" @change="store.setMeasure(($event.target as HTMLSelectElement).value)">
          <option v-for="m in store.measures.value" :key="m.uniqueName" :value="m.uniqueName">{{ m.caption }}</option>
        </select>
      </label>
    </header>

    <div class="navigator__body" role="tabpanel">
      <StandardView v-if="store.mode.value === 'standard'" :cellset="cellset" :store="store">
        <template #table><slot name="table" /></template>
      </StandardView>
      <CascadeView
        v-else-if="store.mode.value === 'cascade'"
        :cellset="cellset"
        :store="store"
        :limit="settings.matrixLimit ?? 200"
        @hover="(axis, key) => emit('hover', axis, key)"
      >
        <template #table><slot name="table" /></template>
      </CascadeView>
      <MapView
        v-else-if="store.mode.value === 'map'"
        :diverging="settings.divergingScale ?? true"
        @update:diverging="settings.divergingScale = $event"
        :cellset="cellset"
        :store="store"
        :limit="settings.matrixLimit ?? 200"
        @hover="(axis, key) => emit('hover', axis, key)"
      >
        <template #table><slot name="table" /></template>
      </MapView>
      <MatrixView
        v-else-if="store.mode.value === 'matrix'"
        :diverging="settings.divergingScale ?? true"
        @update:diverging="settings.divergingScale = $event"
        :cellset="cellset"
        :store="store"
        :limit="settings.matrixLimit ?? 200"
        @hover="(axis, key) => emit('hover', axis, key)"
      >
        <template #table="table"><slot name="table" v-bind="table" /></template>
      </MatrixView>
      <TreeTabsView
        v-else-if="store.mode.value === 'tree-tabs'"
        :cellset="cellset"
        :store="store"
        :metadata="metadata"
        :timeline="settings.timeline ?? true"
        @update:timeline="settings.timeline = $event"
        @hover="(axis, key) => emit('hover', axis, key)"
      >
        <template #table><slot name="table" /></template>
      </TreeTabsView>
      <CompareView
        v-else
        :threshold="settings.significanceThreshold ?? 5"
        :hide-unchanged="settings.hideUnchanged ?? false"
        @update:threshold="settings.significanceThreshold = $event"
        @update:hide-unchanged="settings.hideUnchanged = $event"
        :cellset="cellset"
        :store="store"
        :diverging="settings.divergingScale ?? true"
        :limit="settings.matrixLimit ?? 200"
        @hover="(axis, key) => emit('hover', axis, key)"
      />
    </div>
  </div>
</template>

<style scoped>
.navigator {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  min-height: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg);
}

.navigator__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.navigator__modes {
  display: inline-flex;
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.navigator__mode {
  padding: 0.25rem 0.75rem;
  border: none;
  background: var(--color-raised);
  color: var(--color-dim);
  cursor: pointer;
}

.navigator__mode + .navigator__mode {
  border-left: 1px solid var(--color-divider);
}

.navigator__mode[aria-selected='true'] {
  background: color-mix(in srgb, var(--color-accent) 25%, var(--color-raised));
  color: var(--color-fg);
  font-weight: 600;
}

.navigator__mode:focus-visible {
  outline: 2px solid var(--color-outline);
  outline-offset: -2px;
}

.navigator__measure {
  color: var(--color-dim);
}

.navigator__measure select {
  margin-left: 0.25rem;
  padding: 0.125rem 0.375rem;
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  background: var(--color-raised);
  color: var(--color-fg);
}

.navigator__body {
  flex: 1;
  min-height: 0;
}
</style>
