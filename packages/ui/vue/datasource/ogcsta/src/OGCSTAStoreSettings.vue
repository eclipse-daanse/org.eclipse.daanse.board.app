<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script setup lang="ts">
import { DButton, DCheckbox, DColorInput, DDateInput, DIcon, DInput, DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { inject, computed, reactive, watch, ref } from 'vue';
import { VariableWrapper, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables';
import {
  identifier as variableIdentifier,
  type VariableRepository
} from 'org.eclipse.daanse.board.app.lib.api.variable';
import { VariableInput } from 'org.eclipse.daanse.board.app.ui.vue.variable.components';

const { config, connections } = defineProps<{
  config: any;
  dataSources: any;
  connections: any;
}>();

const { t } = useTranslation('datasourceOgcsta')

const connectionsFiltered = computed(() => {
  return connections.filter((c: any) => c.type === 'rest');
});

const mqttConnectionsFiltered = computed(() => {
  return connections.filter((c: any) => c.type === 'mqtt');
});

// Variable Support - get synchronously so wrappers are initialized before VariableInput renders
// Optional dependency: absent repository degrades features, not the widget
const variableRepository: VariableRepository | null =
  inject<VariableRepository>(variableIdentifier) ?? null;
if (!variableRepository) {
  console.warn('VariableRepository not provided');
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

// Clear helpers for time filters
const clearTimeRange = () => {
  timeWrappers.timeRangeStart.value = '';
  timeWrappers.timeRangeEnd.value = '';
  config.history.timeRange = {};
};

const clearPhenomenonTime = () => {
  timeWrappers.phenomenonTimeStart.value = '';
  timeWrappers.phenomenonTimeEnd.value = '';
  config.history.phenomenonTime = {};
};

const clearResultTime = () => {
  timeWrappers.resultTimeStart.value = '';
  timeWrappers.resultTimeEnd.value = '';
  config.history.resultTime = {};
};

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

/*
 * The latest values view (#1264), modelled as OGCSTALatestValues. Stored
 * as plain JSON like the rest of this configuration, so it is written as
 * plain objects here; a view that is switched off is not stored at all.
 */
type Mapping = { code?: string; label?: string; color?: string };
type Column = { suffix?: string; label?: string; part?: string; mappings?: Mapping[] };
type View = { thingNames?: string[]; nameColumn?: string; idColumn?: string; columns?: Column[] };

const view = ref<View | null>(config.latestValues ? reactive(config.latestValues as View) : null);

const toggleView = () => {
  if (view.value) {
    delete config.latestValues;
    view.value = null;
    return;
  }
  config.latestValues = { thingNames: [], nameColumn: 'name', idColumn: '', columns: [] };
  view.value = reactive(config.latestValues as View);
};

/* One name pattern per line. */
const thingNamesText = computed({
  get: () => (view.value?.thingNames ?? []).join('\n'),
  set: (text: string) => {
    if (!view.value) return;
    view.value.thingNames = text.split('\n').map((line) => line.trim()).filter(Boolean);
  },
});

const parts = computed(() => [
  { text: t('Ogcsta.latest.partResult'), value: 'result' },
  { text: t('Ogcsta.latest.partTime'), value: 'phenomenonTime' },
]);

const addColumn = () => {
  if (!view.value) return;
  (view.value.columns ??= []).push({ suffix: '', label: '', part: 'result', mappings: [] });
};

const removeColumn = (index: number) => view.value?.columns?.splice(index, 1);

const addMapping = (column: Column) => (column.mappings ??= []).push({ code: '', label: '', color: '' });

const removeMapping = (column: Column, index: number) => column.mappings?.splice(index, 1);

</script>

<template>
  <div class="ogcsta-settings-wrapper">
    <div class="ogcsta-scroll-container">
      <div class="ogcsta-settings">
        <!-- Connection Selection -->
        <div class="setting-group">
          <DSelect
            v-model="config.connection"
            :label="t('Settings.connection')"
            :options="connectionsFiltered"
            label-key="name"
            value-key="uid"
            clearable
          />
        </div>

        <!-- MQTT Connection Selection -->
        <div class="setting-group">
          <DSelect
            v-model="config.mqttConnection"
            :label="t('Ogcsta.mqtt')"
            :options="mqttConnectionsFiltered"
            label-key="name"
            value-key="uid"
            clearable
          />
        </div>

        <!-- Latest values view: a table of things, a column per datastream. -->
        <details class="history latest" :open="!!view">
          <summary class="history__head" @click.prevent="toggleView">
            <DIcon name="table" size="sm" tone="color-dim" />{{ t('Ogcsta.latest.title') }}
          </summary>
          <div v-if="view" class="history-settings">
            <DInput
              v-model="thingNamesText"
              :label="t('Ogcsta.latest.thingNames')"
              :hint="t('Ogcsta.latest.thingNamesHint')"
              :rows="2"
            />
            <DInput v-model="view.nameColumn" :label="t('Ogcsta.latest.nameColumn')" :hint="t('Ogcsta.latest.emptyNoColumn')" />
            <DInput v-model="view.idColumn" :label="t('Ogcsta.latest.idColumn')" :hint="t('Ogcsta.latest.emptyNoColumn')" />

            <div v-for="(column, index) in view.columns" :key="index" class="setting-group latest__column">
              <div class="filter-header">
                <h4>{{ t('Ogcsta.latest.column', { index: index + 1 }) }}</h4>
                <DButton intent="danger" size="sm" :title="t('Ogcsta.latest.removeColumn')" @click="removeColumn(index)">
                  <DIcon name="delete" size="sm" />
                </DButton>
              </div>
              <DInput v-model="column.suffix" :label="t('Ogcsta.latest.suffix')" :hint="t('Ogcsta.latest.suffixHint')" />
              <DInput v-model="column.label" :label="t('Ogcsta.latest.label')" />
              <DSelect
                v-model="column.part"
                :label="t('Ogcsta.latest.part')"
                :options="parts"
                label-key="text"
                value-key="value"
              />
              <template v-if="column.part !== 'phenomenonTime'">
                <div v-for="(mapping, at) in column.mappings" :key="at" class="latest__mapping">
                  <DInput v-model="mapping.code" :label="t('Ogcsta.latest.code')" />
                  <DInput v-model="mapping.label" :label="t('Ogcsta.latest.shownAs')" />
                  <DColorInput v-model="mapping.color" :label="t('Ogcsta.latest.color')" />
                  <DButton intent="danger" size="sm" :title="t('Ogcsta.latest.removeMapping')" @click="removeMapping(column, at)">
                    <DIcon name="delete" size="sm" />
                  </DButton>
                </div>
                <DButton size="sm" @click="addMapping(column)">{{ t('Ogcsta.latest.addMapping') }}</DButton>
              </template>
            </div>
            <DButton size="sm" @click="addColumn">{{ t('Ogcsta.latest.addColumn') }}</DButton>
          </div>
        </details>

        <!-- History Configuration -->
        <!-- A disclosure, which the browser already has. Its open state is
            the setting it guards, so opening it turns history on. -->
        <details class="history" :open="config.history.enabled">
          <summary class="history__head" @click.prevent="config.history.enabled = !config.history.enabled">
            <DIcon name="history" size="sm" tone="color-dim" />{{ t('Ogcsta.history') }}
          </summary>
          <div class="history-settings">

        <!-- Time Range Configuration -->
        <div class="setting-group">
          <div class="filter-header">
            <h4>{{ t('Ogcsta.timeRange') }}</h4>
            <DButton intent="danger"
              size="sm"
              @click="clearTimeRange"
              :title="t('Ogcsta.clearTimeRange')">
  <DIcon name="delete" size="sm" />
</DButton>
          </div>

          <VariableInput v-model="timeWrappers.timeRangeStart" :label="t('Ogcsta.startTime')">
            <template #default="{ value, change }">
              <div class="datetime-picker-group">
                <DDateInput
                  v-model="timeRangeStartDT.dateValue.value"
                  :label="t('Ogcsta.startDate')"
                  @update:model-value="timeRangeStartDT.updateWrapper()"
                />
                <DDateInput mode="time"
                  v-model="timeRangeStartDT.timeValue.value"
                  :label="t('Ogcsta.startTime')"
                  @update:model-value="timeRangeStartDT.updateWrapper()"
                />
              </div>
            </template>
          </VariableInput>

          <VariableInput v-model="timeWrappers.timeRangeEnd" :label="t('Ogcsta.endTime')">
            <template #default="{ value, change }">
              <div class="datetime-picker-group">
                <DDateInput
                  v-model="timeRangeEndDT.dateValue.value"
                  :label="t('Ogcsta.endDate')"
                  @update:model-value="timeRangeEndDT.updateWrapper()"
                />
                <DDateInput mode="time"
                  v-model="timeRangeEndDT.timeValue.value"
                  :label="t('Ogcsta.endTime')"
                  @update:model-value="timeRangeEndDT.updateWrapper()"
                />
              </div>
            </template>
          </VariableInput>
        </div>

        <!-- Phenomenon Time Configuration -->
        <div class="setting-group">
          <div class="filter-header">
            <h4>{{ t('Ogcsta.phenomenonTime') }}</h4>
            <DButton intent="danger"
              size="sm"
              @click="clearPhenomenonTime"
              :title="t('Ogcsta.clearPhenomenonTime')">
  <DIcon name="delete" size="sm" />
</DButton>
          </div>

          <VariableInput v-model="timeWrappers.phenomenonTimeStart" :label="t('Ogcsta.startTime')">
            <template #default="{ value, change }">
              <div class="datetime-picker-group">
                <DDateInput
                  v-model="phenomenonTimeStartDT.dateValue.value"
                  :label="t('Ogcsta.startDate')"
                  @update:model-value="phenomenonTimeStartDT.updateWrapper()"
                />
                <DDateInput mode="time"
                  v-model="phenomenonTimeStartDT.timeValue.value"
                  :label="t('Ogcsta.startTime')"
                  @update:model-value="phenomenonTimeStartDT.updateWrapper()"
                />
              </div>
            </template>
          </VariableInput>

          <VariableInput v-model="timeWrappers.phenomenonTimeEnd" :label="t('Ogcsta.endTime')">
            <template #default="{ value, change }">
              <div class="datetime-picker-group">
                <DDateInput
                  v-model="phenomenonTimeEndDT.dateValue.value"
                  :label="t('Ogcsta.endDate')"
                  @update:model-value="phenomenonTimeEndDT.updateWrapper()"
                />
                <DDateInput mode="time"
                  v-model="phenomenonTimeEndDT.timeValue.value"
                  :label="t('Ogcsta.endTime')"
                  @update:model-value="phenomenonTimeEndDT.updateWrapper()"
                />
              </div>
            </template>
          </VariableInput>
        </div>

        <!-- Result Time Configuration -->
        <div class="setting-group">
          <div class="filter-header">
            <h4>{{ t('Ogcsta.resultTime') }}</h4>
            <DButton intent="danger"
              size="sm"
              @click="clearResultTime"
              :title="t('Ogcsta.clearResultTime')">
  <DIcon name="delete" size="sm" />
</DButton>
          </div>

          <VariableInput v-model="timeWrappers.resultTimeStart" :label="t('Ogcsta.startTime')">
            <template #default="{ value, change }">
              <div class="datetime-picker-group">
                <DDateInput
                  v-model="resultTimeStartDT.dateValue.value"
                  :label="t('Ogcsta.startDate')"
                  @update:model-value="resultTimeStartDT.updateWrapper()"
                />
                <DDateInput mode="time"
                  v-model="resultTimeStartDT.timeValue.value"
                  :label="t('Ogcsta.startTime')"
                  @update:model-value="resultTimeStartDT.updateWrapper()"
                />
              </div>
            </template>
          </VariableInput>

          <VariableInput v-model="timeWrappers.resultTimeEnd" :label="t('Ogcsta.endTime')">
            <template #default="{ value, change }">
              <div class="datetime-picker-group">
                <DDateInput
                  v-model="resultTimeEndDT.dateValue.value"
                  :label="t('Ogcsta.endDate')"
                  @update:model-value="resultTimeEndDT.updateWrapper()"
                />
                <DDateInput mode="time"
                  v-model="resultTimeEndDT.timeValue.value"
                  :label="t('Ogcsta.endTime')"
                  @update:model-value="resultTimeEndDT.updateWrapper()"
                />
              </div>
            </template>
          </VariableInput>
        </div>

        <!-- Additional History Settings -->
        <div class="setting-group">
          <h4>{{ t('Ogcsta.query') }}</h4>

          <DSelect
            v-model="config.history.orderBy"
            :options="[
              { text: t('Ogcsta.order.phenomenonDesc'), value: 'phenomenonTime desc' },
              { text: t('Ogcsta.order.phenomenonAsc'), value: 'phenomenonTime asc' },
              { text: t('Ogcsta.order.resultDesc'), value: 'resultTime desc' },
              { text: t('Ogcsta.order.resultAsc'), value: 'resultTime asc' }
            ]"
            :label="t('Ogcsta.orderBy')"
            label-key="text"
            value-key="value"
            clearable
          />

          <DInput
            v-model.number="config.history.limit"
            :label="t('Ogcsta.limit')"
            type="number"
            :min="1"
            :max="10000"
            placeholder="100"
          />

          <DCheckbox
            v-model="config.useCurrentLocationInsteadOfHistorical"
            :label="t('Ogcsta.currentLocations')"
          >
            <template #label>
              <span>{{ t('Ogcsta.currentLocationsLong') }}</span>
              <div style="font-size: 0.75rem; color: var(--color-dim); margin-top: 0.25rem;">
                {{ t('Ogcsta.currentLocationsHint') }}
              </div>
            </template>
          </DCheckbox>
        </div>
      </div>
        </details>
      </div>
    </div>
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

.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-divider);
  padding-bottom: 0.5rem;
}

.filter-header h4 {
  margin: 0;
  border-bottom: none;
  padding-bottom: 0;
}

.setting-group h4 {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-fg);
  border-bottom: 1px solid var(--color-divider);
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

.datetime-picker-group > * {
  flex: 1;
  min-width: 0;
}

.history {
  border-top: 1px solid var(--color-divider);
  padding-top: 8px;
}

.latest__mapping {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  gap: 0.5rem;
  align-items: end;
}

.history__head {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-fg);
}
</style>
