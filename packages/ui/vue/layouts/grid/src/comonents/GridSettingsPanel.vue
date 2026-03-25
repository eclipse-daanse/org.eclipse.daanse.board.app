<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<template>
  <div class="grid-settings">
    <h4 class="grid-settings-title">Grid Settings</h4>

    <va-input
      class="field"
      label="Row Height (px)"
      :model-value="settings.rowHeight"
      @update:model-value="update('rowHeight', Number($event))"
      type="number"
      :min="10"
      :max="200"
    />

    <h4 class="grid-settings-subtitle">Columns per Breakpoint</h4>

    <div class="cols-grid">
      <va-input
        v-for="bp in breakpointKeys"
        :key="bp"
        :label="`${bp} (≥${breakpointWidths[bp]}px)`"
        :model-value="settings.cols[bp]"
        @update:model-value="updateCol(bp, Number($event))"
        type="number"
        :min="1"
        :max="48"
        class="col-input"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { type GridSettingsI, DEFAULT_GRID_SETTINGS, BREAKPOINTS } from '../GridSettings'

const model = defineModel<Record<string, any>>()

const breakpointKeys = ['lg', 'md', 'sm', 'xs', 'xxs'] as const
const breakpointWidths = BREAKPOINTS

const settings = computed<GridSettingsI>(() => {
  const s = model.value ?? {}
  return {
    rowHeight: s.rowHeight ?? DEFAULT_GRID_SETTINGS.rowHeight,
    cols: { ...DEFAULT_GRID_SETTINGS.cols, ...s.cols }
  }
})

function update(key: string, value: any) {
  model.value = { ...model.value, [key]: value }
}

function updateCol(bp: string, value: number) {
  const cols = { ...settings.value.cols, [bp]: value }
  model.value = { ...model.value, cols }
}
</script>

<style scoped>
.grid-settings {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.grid-settings-title {
  font-size: 14px;
  font-weight: 600;
  margin: 0;
}

.grid-settings-subtitle {
  font-size: 13px;
  font-weight: 500;
  margin: 8px 0 0 0;
}

.cols-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.col-input {
  width: 100%;
}
</style>
