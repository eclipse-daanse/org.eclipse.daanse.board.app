<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
-->

<template>
  <div class="auto-update-settings">
    <h3>Auto-update Configuration</h3>

    <div class="refresh-setting">
      <label>Observation Refresh Time: {{ getRefreshTimeLabel(renderer.ObservationrefreshTime || 0) }}</label>

      <va-slider
        :model-value="renderer.ObservationrefreshTime || 0"
        @update:model-value="updateRefreshTime"
        :min="0"
        :max="30"
        :step="1"
        :show-ticks="true"
        color="primary"
        class="refresh-slider"
      />

      <div class="slider-labels">
        <span>Never</span>
        <span>1s</span>
        <span>15s</span>
        <span>30s</span>
      </div>
    </div>

    <div class="refresh-info">
      <div class="info-item">
        <span class="label">Current Setting:</span>
        <span class="value">{{ getRefreshTimeLabel(renderer.ObservationrefreshTime || 0) }}</span>
      </div>

      <div class="info-item" v-if="renderer.lastUpdate">
        <span class="label">Last Update:</span>
        <span class="value">{{ formatLastUpdate(renderer.lastUpdate) }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import type { IRenderer } from '../../api/Renderer';

const renderer = defineModel<IRenderer>({ required: true });

let debounceTimeout: NodeJS.Timeout | null = null;

const updateRefreshTime = (value: number) => {
  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }

  debounceTimeout = setTimeout(() => {
    renderer.value.ObservationrefreshTime = value;
  }, 300);
};

const getRefreshTimeLabel = (seconds: number): string => {
  if (seconds === 0) return 'Never';
  return `${seconds}s`;
};

const formatLastUpdate = (timestamp: number): string => {
  return new Date(timestamp).toLocaleString('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};
</script>

<style scoped>
.auto-update-settings {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.auto-update-settings h3 {
  margin: 0;
  color: var(--va-text-primary);
  font-size: 1.1rem;
  font-weight: 600;
}

.refresh-setting {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.refresh-setting label {
  font-weight: 500;
  color: var(--va-text-primary);
  font-size: 0.9rem;
}

.refresh-slider {
  margin: 0.5rem 0;
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--va-text-secondary);
  margin-top: 0.5rem;
}

.refresh-info {
  background: var(--va-background-secondary);
  border: 1px solid var(--va-background-border);
  border-radius: 6px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-item .label {
  font-weight: 500;
  color: var(--va-text-secondary);
  font-size: 0.9rem;
}

.info-item .value {
  font-weight: 600;
  color: var(--va-text-primary);
  font-size: 0.9rem;
}
</style>
