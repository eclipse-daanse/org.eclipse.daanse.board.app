<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script setup lang="ts">
import { computed, reactive, watch, ref } from 'vue';
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

// Create a reactive object holding all VariableWrappers
// This approach mirrors how TextSettings works - VariableWrappers as properties of a reactive object
const timeWrappers = reactive({
  timeRangeStart: new VariableWrapper<string>(),
  timeRangeEnd: new VariableWrapper<string>(),
  phenomenonTimeStart: new VariableWrapper<string>(),
  phenomenonTimeEnd: new VariableWrapper<string>(),
  resultTimeStart: new VariableWrapper<string>(),
  resultTimeEnd: new VariableWrapper<string>()
});

// Initialize wrappers from config
initWrapper(timeWrappers.timeRangeStart, config.history.timeRange?.start, config.history.timeRange?.startVariable);
initWrapper(timeWrappers.timeRangeEnd, config.history.timeRange?.end, config.history.timeRange?.endVariable);
initWrapper(timeWrappers.phenomenonTimeStart, config.history.phenomenonTime?.start, config.history.phenomenonTime?.startVariable);
initWrapper(timeWrappers.phenomenonTimeEnd, config.history.phenomenonTime?.end, config.history.phenomenonTime?.endVariable);
initWrapper(timeWrappers.resultTimeStart, config.history.resultTime?.start, config.history.resultTime?.startVariable);
initWrapper(timeWrappers.resultTimeEnd, config.history.resultTime?.end, config.history.resultTime?.endVariable);

// Helper to sync wrapper changes back to config
const createWatcher = (
  getWrapper: () => VariableWrapper<string>,
  getConfigObj: () => any,
  startKey: string,
  variableKey: string
) => {
  watch(getWrapper, (w) => {
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
createWatcher(() => timeWrappers.timeRangeStart, () => config.history.timeRange, 'start', 'startVariable');
createWatcher(() => timeWrappers.timeRangeEnd, () => config.history.timeRange, 'end', 'endVariable');
createWatcher(() => timeWrappers.phenomenonTimeStart, () => config.history.phenomenonTime, 'start', 'startVariable');
createWatcher(() => timeWrappers.phenomenonTimeEnd, () => config.history.phenomenonTime, 'end', 'endVariable');
createWatcher(() => timeWrappers.resultTimeStart, () => config.history.resultTime, 'start', 'startVariable');
createWatcher(() => timeWrappers.resultTimeEnd, () => config.history.resultTime, 'end', 'endVariable');

// Helper to parse ISO 8601 datetime string to Date
const parseIsoToDate = (isoString: string | undefined): Date | null => {
  if (!isoString) return null;
  const date = new Date(isoString);
  return isNaN(date.getTime()) ? null : date;
};

// Helper to format Date to ISO 8601 datetime string with UTC timezone
const formatToIso = (date: Date | null, time: Date | null): string => {
  if (!date) return '';
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = (time?.getHours() || 0).toString().padStart(2, '0');
  const minutes = (time?.getMinutes() || 0).toString().padStart(2, '0');
  const seconds = (time?.getSeconds() || 0).toString().padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
};

// Create datetime picker computed for a wrapper
const createDateTimeComputed = (getWrapper: () => VariableWrapper<string>) => {
  const dateValue = ref<Date | null>(parseIsoToDate(getWrapper().value));
  const timeValue = ref<Date | null>(parseIsoToDate(getWrapper().value));

  // Watch wrapper value changes (from variable updates)
  watch(() => getWrapper().value, (newVal) => {
    dateValue.value = parseIsoToDate(newVal);
    timeValue.value = parseIsoToDate(newVal);
  });

  const updateWrapper = () => {
    getWrapper().value = formatToIso(dateValue.value, timeValue.value);
  };

  return { dateValue, timeValue, updateWrapper };
};

// Create datetime pickers for all time fields
const timeRangeStartDT = createDateTimeComputed(() => timeWrappers.timeRangeStart);
const timeRangeEndDT = createDateTimeComputed(() => timeWrappers.timeRangeEnd);
const phenomenonTimeStartDT = createDateTimeComputed(() => timeWrappers.phenomenonTimeStart);
const phenomenonTimeEndDT = createDateTimeComputed(() => timeWrappers.phenomenonTimeEnd);
const resultTimeStartDT = createDateTimeComputed(() => timeWrappers.resultTimeStart);
const resultTimeEndDT = createDateTimeComputed(() => timeWrappers.resultTimeEnd);

</script>

<template>
  <div class="ogcsta-settings-wrapper">
    <va-scroll-container class="ogcsta-scroll-container" vertical>
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

          <VariableInput v-model="timeWrappers.timeRangeStart" label="Start Time">
            <template #default="{ value, change }">
              <div class="datetime-picker-group">
                <va-date-input
                  v-model="timeRangeStartDT.dateValue.value"
                  label="Start Date"
                  @update:model-value="timeRangeStartDT.updateWrapper()"
                />
                <va-time-input
                  v-model="timeRangeStartDT.timeValue.value"
                  label="Start Time"
                  @update:model-value="timeRangeStartDT.updateWrapper()"
                />
              </div>
            </template>
          </VariableInput>

          <VariableInput v-model="timeWrappers.timeRangeEnd" label="End Time">
            <template #default="{ value, change }">
              <div class="datetime-picker-group">
                <va-date-input
                  v-model="timeRangeEndDT.dateValue.value"
                  label="End Date"
                  @update:model-value="timeRangeEndDT.updateWrapper()"
                />
                <va-time-input
                  v-model="timeRangeEndDT.timeValue.value"
                  label="End Time"
                  @update:model-value="timeRangeEndDT.updateWrapper()"
                />
              </div>
            </template>
          </VariableInput>
        </div>

        <!-- Phenomenon Time Configuration -->
        <div class="setting-group">
          <h4>Phenomenon Time Filter</h4>

          <VariableInput v-model="timeWrappers.phenomenonTimeStart" label="Start Time">
            <template #default="{ value, change }">
              <div class="datetime-picker-group">
                <va-date-input
                  v-model="phenomenonTimeStartDT.dateValue.value"
                  label="Start Date"
                  @update:model-value="phenomenonTimeStartDT.updateWrapper()"
                />
                <va-time-input
                  v-model="phenomenonTimeStartDT.timeValue.value"
                  label="Start Time"
                  @update:model-value="phenomenonTimeStartDT.updateWrapper()"
                />
              </div>
            </template>
          </VariableInput>

          <VariableInput v-model="timeWrappers.phenomenonTimeEnd" label="End Time">
            <template #default="{ value, change }">
              <div class="datetime-picker-group">
                <va-date-input
                  v-model="phenomenonTimeEndDT.dateValue.value"
                  label="End Date"
                  @update:model-value="phenomenonTimeEndDT.updateWrapper()"
                />
                <va-time-input
                  v-model="phenomenonTimeEndDT.timeValue.value"
                  label="End Time"
                  @update:model-value="phenomenonTimeEndDT.updateWrapper()"
                />
              </div>
            </template>
          </VariableInput>
        </div>

        <!-- Result Time Configuration -->
        <div class="setting-group">
          <h4>Result Time Filter</h4>

          <VariableInput v-model="timeWrappers.resultTimeStart" label="Start Time">
            <template #default="{ value, change }">
              <div class="datetime-picker-group">
                <va-date-input
                  v-model="resultTimeStartDT.dateValue.value"
                  label="Start Date"
                  @update:model-value="resultTimeStartDT.updateWrapper()"
                />
                <va-time-input
                  v-model="resultTimeStartDT.timeValue.value"
                  label="Start Time"
                  @update:model-value="resultTimeStartDT.updateWrapper()"
                />
              </div>
            </template>
          </VariableInput>

          <VariableInput v-model="timeWrappers.resultTimeEnd" label="End Time">
            <template #default="{ value, change }">
              <div class="datetime-picker-group">
                <va-date-input
                  v-model="resultTimeEndDT.dateValue.value"
                  label="End Date"
                  @update:model-value="resultTimeEndDT.updateWrapper()"
                />
                <va-time-input
                  v-model="resultTimeEndDT.timeValue.value"
                  label="End Time"
                  @update:model-value="resultTimeEndDT.updateWrapper()"
                />
              </div>
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
    </va-scroll-container>
  </div>
</template>

<style scoped>
.ogcsta-settings-wrapper {
  position: relative;
  height: 100%;
}

.ogcsta-scroll-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.ogcsta-settings {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
}

.history-settings {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0.5rem;
}

.setting-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 0;
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

.datetime-picker-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

:deep(.va-collapse__body-wrapper) {
  overflow: visible !important;
}

.datetime-picker-group > * {
  flex: 1;
  min-width: 0;
}
</style>
