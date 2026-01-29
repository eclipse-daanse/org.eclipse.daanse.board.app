<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script setup lang="ts">
import { computed, shallowRef, watch } from 'vue';
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables';
import { container } from 'org.eclipse.daanse.board.app.lib.core';
import {
  identifier as variableIdentifier,
  type VariableRepository
} from 'org.eclipse.daanse.board.app.lib.repository.variable';
import { VariableInput } from 'org.eclipse.daanse.board.app.ui.vue.variable.components';

const { config, connections } = defineProps<{
  config: any;
  dataSources: any;
  connections: any;
}>();

const connectionsFiltered = computed(() => {
  return connections.filter((c: any) => c.type === 'rest');
});

const mqttConnectionsFiltered = computed(() => {
  return connections.filter((c: any) => c.type === 'mqtt');
});

// Variable Support - get synchronously so wrappers are initialized before VariableInput renders
let variableRepository: VariableRepository | null = null;
try {
  variableRepository = container.get<VariableRepository>(variableIdentifier);
} catch (error) {
  console.warn('VariableRepository not found in container:', error);
}

// Initialize history config if not present
if (!config.history) {
  config.history = {
    enabled: false,
    timeRange: {},
    resultTime: {},
    phenomenonTime: {}
  };
}

// Ensure nested objects exist
if (!config.history.timeRange) config.history.timeRange = {};
if (!config.history.resultTime) config.history.resultTime = {};
if (!config.history.phenomenonTime) config.history.phenomenonTime = {};

// Auto-enable history if time filters are configured (for backwards compatibility with old configs)
if (config.history.enabled === undefined) {
  const hasTimeFilters =
    config.history.timeRange?.start || config.history.timeRange?.startVariable ||
    config.history.timeRange?.end || config.history.timeRange?.endVariable ||
    config.history.phenomenonTime?.start || config.history.phenomenonTime?.startVariable ||
    config.history.phenomenonTime?.end || config.history.phenomenonTime?.endVariable ||
    config.history.resultTime?.start || config.history.resultTime?.startVariable ||
    config.history.resultTime?.end || config.history.resultTime?.endVariable;
  config.history.enabled = hasTimeFilters ? true : false;
}

// Helper to initialize a wrapper from config (synchronously)
const initWrapper = (wrapper: VariableWrapper<string>, value?: string, variableName?: string) => {
  if (variableName && variableRepository) {
    const variable = variableRepository.getVariable(variableName);
    if (variable) {
      wrapper.setTo(variable);
      return;
    }
  }
  if (value) {
    wrapper.value = value;
  }
};

// Create VariableWrapper refs for each time field
// Using shallowRef to prevent Vue from deeply unwrapping the VariableWrapper class
// Initialize synchronously so VariableInput sees the correct isSet state
const timeRangeStart = shallowRef(new VariableWrapper<string>());
initWrapper(timeRangeStart.value, config.history.timeRange?.start, config.history.timeRange?.startVariable);

const timeRangeEnd = shallowRef(new VariableWrapper<string>());
initWrapper(timeRangeEnd.value, config.history.timeRange?.end, config.history.timeRange?.endVariable);

const phenomenonTimeStart = shallowRef(new VariableWrapper<string>());
initWrapper(phenomenonTimeStart.value, config.history.phenomenonTime?.start, config.history.phenomenonTime?.startVariable);

const phenomenonTimeEnd = shallowRef(new VariableWrapper<string>());
initWrapper(phenomenonTimeEnd.value, config.history.phenomenonTime?.end, config.history.phenomenonTime?.endVariable);

const resultTimeStart = shallowRef(new VariableWrapper<string>());
initWrapper(resultTimeStart.value, config.history.resultTime?.start, config.history.resultTime?.startVariable);

const resultTimeEnd = shallowRef(new VariableWrapper<string>());
initWrapper(resultTimeEnd.value, config.history.resultTime?.end, config.history.resultTime?.endVariable);

// Helper to sync wrapper changes back to config
const createWatcher = (
  wrapper: typeof timeRangeStart,
  getConfigObj: () => any,
  startKey: string,
  variableKey: string
) => {
  watch(wrapper, (w) => {
    const configObj = getConfigObj();
    if (w.isSet && w.variable) {
      configObj[variableKey] = w.variable;
      configObj[startKey] = undefined;
    } else {
      configObj[startKey] = w.value;
      configObj[variableKey] = undefined;
    }
  }, { deep: true });
};

// Setup watchers to sync back to config
createWatcher(timeRangeStart, () => config.history.timeRange, 'start', 'startVariable');
createWatcher(timeRangeEnd, () => config.history.timeRange, 'end', 'endVariable');
createWatcher(phenomenonTimeStart, () => config.history.phenomenonTime, 'start', 'startVariable');
createWatcher(phenomenonTimeEnd, () => config.history.phenomenonTime, 'end', 'endVariable');
createWatcher(resultTimeStart, () => config.history.resultTime, 'start', 'startVariable');
createWatcher(resultTimeEnd, () => config.history.resultTime, 'end', 'endVariable');

</script>

<template>
  <div class="ogcsta-settings">
    <!-- Connection Selection -->
    <div class="setting-group">
      <VaSelect
        v-model="config.connection"
        label="Connection"
        :options="connectionsFiltered"
        text-by="name"
        value-by="uid"
      />
    </div>

    <!-- MQTT Connection Selection -->
    <div class="setting-group">
      <VaSelect
        v-model="config.mqttConnection"
        label="MQTT Connection (optional, for realtime updates)"
        :options="mqttConnectionsFiltered"
        text-by="name"
        value-by="uid"
        clearable
      />
    </div>

    <!-- History Configuration -->
    <va-collapse v-model="config.history.enabled" icon="history" header="Historical Data Configuration">
      <div class="history-settings">

        <!-- Time Range Configuration -->
        <div class="setting-group">
          <h4>Time Range Filter</h4>

          <VariableInput v-model="timeRangeStart" label="Start Time">
            <template #default="{ value, change }">
              <va-input
                :model-value="value"
                @update:model-value="change({ target: { value: $event } })"
                label="Start Time"
                placeholder="ISO 8601 DateTime"
                class="w-full"
              />
            </template>
          </VariableInput>

          <VariableInput v-model="timeRangeEnd" label="End Time">
            <template #default="{ value, change }">
              <va-input
                :model-value="value"
                @update:model-value="change({ target: { value: $event } })"
                label="End Time"
                placeholder="ISO 8601 DateTime"
                class="w-full"
              />
            </template>
          </VariableInput>
        </div>

        <!-- Phenomenon Time Configuration -->
        <div class="setting-group">
          <h4>Phenomenon Time Filter</h4>

          <VariableInput v-model="phenomenonTimeStart" label="Start Time">
            <template #default="{ value, change }">
              <va-input
                :model-value="value"
                @update:model-value="change({ target: { value: $event } })"
                label="Start Time"
                placeholder="ISO 8601 DateTime"
                class="w-full"
              />
            </template>
          </VariableInput>

          <VariableInput v-model="phenomenonTimeEnd" label="End Time">
            <template #default="{ value, change }">
              <va-input
                :model-value="value"
                @update:model-value="change({ target: { value: $event } })"
                label="End Time"
                placeholder="ISO 8601 DateTime"
                class="w-full"
              />
            </template>
          </VariableInput>
        </div>

        <!-- Result Time Configuration -->
        <div class="setting-group">
          <h4>Result Time Filter</h4>

          <VariableInput v-model="resultTimeStart" label="Start Time">
            <template #default="{ value, change }">
              <va-input
                :model-value="value"
                @update:model-value="change({ target: { value: $event } })"
                label="Start Time"
                placeholder="ISO 8601 DateTime"
                class="w-full"
              />
            </template>
          </VariableInput>

          <VariableInput v-model="resultTimeEnd" label="End Time">
            <template #default="{ value, change }">
              <va-input
                :model-value="value"
                @update:model-value="change({ target: { value: $event } })"
                label="End Time"
                placeholder="ISO 8601 DateTime"
                class="w-full"
              />
            </template>
          </VariableInput>
        </div>

        <!-- Additional History Settings -->
        <div class="setting-group">
          <h4>Query Settings</h4>

          <va-select
            v-model="config.history.orderBy"
            :options="[
              { text: 'Phenomenon Time (Descending)', value: 'phenomenonTime desc' },
              { text: 'Phenomenon Time (Ascending)', value: 'phenomenonTime asc' },
              { text: 'Result Time (Descending)', value: 'resultTime desc' },
              { text: 'Result Time (Ascending)', value: 'resultTime asc' }
            ]"
            label="Order By"
            clearable
          />

          <va-input
            v-model.number="config.history.limit"
            label="Limit (max records)"
            type="number"
            :min="1"
            :max="10000"
            placeholder="100"
          />

          <va-checkbox
            v-model="config.useCurrentLocationInsteadOfHistorical"
            label="Use current locations instead of historical locations"
          >
            <template #label>
              <span>Use current locations instead of historical locations</span>
              <div style="font-size: 0.75rem; color: var(--va-text-secondary); margin-top: 0.25rem;">
                Reuse already loaded current locations instead of fetching historical locations via API
              </div>
            </template>
          </va-checkbox>
        </div>
      </div>
    </va-collapse>
  </div>
</template>

<style scoped>
.ogcsta-settings {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.history-settings {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
}

.setting-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.setting-group h4 {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--va-text-primary);
  border-bottom: 1px solid var(--va-background-border);
  padding-bottom: 0.5rem;
}

.w-full {
  width: 100%;
}
</style>
