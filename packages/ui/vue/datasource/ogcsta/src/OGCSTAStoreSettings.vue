<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables';
import { container } from 'org.eclipse.daanse.board.app.lib.core';
import {
  identifier as variableIdentifier,
  type VariableRepository
} from 'org.eclipse.daanse.board.app.lib.repository.variable';

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

// Variable Support
const variableRepository = ref<VariableRepository | null>(null);

// Available variables
const availableVariables = computed(() => {
  if (!variableRepository.value) return [];
  return variableRepository.value.getAllVariables()
    .map(([name, v]: [string, any]) => v)
    .filter((v: any) => {
      console.log(v)
      return v.value && typeof v.value === 'string'
    })
    .map((v: any) => ({ name: v.name, value: v.value }));
});

// Initialize history config if not present
if (!config.history) {
  config.history = {
    enabled: false,
    timeRange: {},
    resultTime: {},
    phenomenonTime: {}
  };
}

// Initialize variable repository
onMounted(() => {
  try {
    variableRepository.value = container.get<VariableRepository>(variableIdentifier);
  } catch (error) {
    console.warn('VariableRepository not found in container:', error);
  }
});

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

          <div class="time-config-row">
            <va-date-input
              v-model="config.history.timeRange.start"
              label="Start Time"
            />
            <va-select
              v-model="config.history.timeRange.startVariable"
              :options="availableVariables"
              label="Or use Start Variable"
              text-by="name"
              value-by="name"
              clearable
            />
          </div>

          <div class="time-config-row">
            <va-date-input
              v-model="config.history.timeRange.end"
              label="End Time"
            />
            <va-select
              v-model="config.history.timeRange.endVariable"
              :options="availableVariables"
              label="Or use End Variable"
              text-by="name"
              value-by="name"
              clearable
            />
          </div>
        </div>

        <!-- Phenomenon Time Configuration -->
        <div class="setting-group">
          <h4>Phenomenon Time Filter</h4>

          <div class="time-config-row">
            <va-date-input
              v-model="config.history.phenomenonTime.start"
              label="Start Time"
            />
            <va-select
              v-model="config.history.phenomenonTime.startVariable"
              :options="availableVariables"
              label="Or use Start Variable"
              text-by="name"
              value-by="name"
              clearable
            />
          </div>

          <div class="time-config-row">
            <va-date-input
              v-model="config.history.phenomenonTime.end"
              label="End Time"
            />
            <va-select
              v-model="config.history.phenomenonTime.endVariable"
              :options="availableVariables"
              label="Or use End Variable"
              text-by="name"
              value-by="name"
              clearable
            />
          </div>
        </div>

        <!-- Result Time Configuration -->
        <div class="setting-group">
          <h4>Result Time Filter</h4>

          <div class="time-config-row">
            <va-date-input
              v-model="config.history.resultTime.start"
              label="Start Time"
            />
            <va-select
              v-model="config.history.resultTime.startVariable"
              :options="availableVariables"
              label="Or use Start Variable"
              text-by="name"
              value-by="name"
              clearable
            />
          </div>

          <div class="time-config-row">
            <va-date-input
              v-model="config.history.resultTime.end"
              label="End Time"
            />
            <va-select
              v-model="config.history.resultTime.endVariable"
              :options="availableVariables"
              label="Or use End Variable"
              text-by="name"
              value-by="name"
              clearable
            />
          </div>
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

.time-config-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  align-items: end;
}

@media (max-width: 768px) {
  .time-config-row {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
}
</style>
