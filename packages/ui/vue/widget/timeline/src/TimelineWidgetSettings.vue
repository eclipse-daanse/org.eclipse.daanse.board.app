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
  <va-collapse
    v-model="opened.timelineSection"
    icon="timeline"
    :header="t('Timeline Settings')"
  >
    <div class="settings-container">
      <!-- Time Range Mode -->
      <div class="setting-group">
        <va-select
          v-model="timeRangeMode"
          :label="t('Time Range Mode')"
          :options="timeRangeModeOptions"
          text-by="label"
          value-by="value"
          @update:modelValue="onTimeRangeModeChange"
        />
      </div>

      <!-- Relative Time Configuration -->
      <div v-if="timeRangeMode === 'relative' && settings.relativeTime" class="setting-group">
        <label>{{ t('Relative Time Range') }}</label>
        <div class="relative-time-config">
          <div class="relative-time-row">
            <va-input
              v-model.number="settings.relativeTime.offset"
              :label="t('Offset')"
              type="number"
              :min="1"
              :max="10000"
              class="offset-input"
              @update:modelValue="onRelativeTimeChange"
            />
            <va-select
              v-model="settings.relativeTime.unit"
              :options="timeUnitOptions"
              :label="t('Unit')"
              text-by="text"
              value-by="value"
              class="unit-select"
              @update:modelValue="onRelativeTimeChange"
            />
          </div>
          <div class="relative-time-preview">
            {{ t('Now') }} - {{ settings.relativeTime.offset }} {{ t(settings.relativeTime.unit) }} → {{ t('Now') }}
          </div>
        </div>
      </div>

      <!-- Absolute Time Configuration -->
      <template v-if="timeRangeMode === 'absolute'">
        <!-- Timeline Start (earliest time) -->
        <div class="setting-group">
          <label>{{ t('Timeline Start') }}</label>
          <div class="datetime-group">
            <va-date-input
              v-model="timelineMinDate"
              :label="t('Date')"
              @update:modelValue="onTimelineMinDateChange"
            />
            <va-time-input
              v-model="timelineMinTime"
              :label="t('Time')"
              @update:modelValue="onTimelineMinTimeChange"
            />
          </div>
        </div>

        <!-- Timeline End (latest time) -->
        <div class="setting-group">
          <label>{{ t('Timeline End') }}</label>
          <va-checkbox
            v-model="useCurrentTimeAsMax"
            :label="t('Use current time')"
            @update:modelValue="onTimelineEndTypeChange"
          />
          <div v-if="!useCurrentTimeAsMax" class="datetime-group">
            <va-date-input
              v-model="timelineMaxDate"
              :label="t('Date')"
              @update:modelValue="onTimelineMaxDateChange"
            />
            <va-time-input
              v-model="timelineMaxTime"
              :label="t('Time')"
              @update:modelValue="onTimelineMaxTimeChange"
            />
          </div>
        </div>

      </template>

      <!-- Variable Configuration -->
      <div class="setting-group">
        <label>{{ t('Variable Binding') }}</label>
        <div class="variable-config">
          <va-checkbox
            v-model="useStartVariable"
            :label="t('Start time from variable')"
            @update:modelValue="onStartVariableToggle"
          />
          <va-select
            v-if="useStartVariable"
            v-model="settings.rangeStartVariable"
            :options="availableVariables"
            :label="t('Start variable')"
            text-by="name"
            value-by="name"
            @update:modelValue="onVariableChange"
          />
        </div>
        <div class="variable-config">
          <va-checkbox
            v-model="useEndVariable"
            :label="t('End time from variable')"
            @update:modelValue="onEndVariableToggle"
          />
          <va-select
            v-if="useEndVariable"
            v-model="settings.rangeEndVariable"
            :options="availableVariables"
            :label="t('End variable')"
            text-by="name"
            value-by="name"
            @update:modelValue="onVariableChange"
          />
        </div>
      </div>

    </div>
  </va-collapse>

  <!-- Playback Settings -->
  <va-collapse
    v-model="opened.playbackSection"
    icon="play_circle"
    :header="t('Playback')"
  >
    <div class="settings-container">
      <div class="setting-group">
        <va-select
          v-model="settings.stepSize"
          :label="t('Step Size')"
          :options="stepSizeOptions"
          value-by="value"
          @update:modelValue="onSettingsChange"
        />
      </div>

      <div class="setting-group">
        <va-select
          v-model="settings.playbackSpeed"
          :label="t('Playback Speed')"
          :options="speedOptions"
          @update:modelValue="onSettingsChange"
        />
      </div>

      <div class="setting-group">
        <va-checkbox
          v-model="settings.autoPlay"
          :label="t('Auto-play on load')"
          @update:modelValue="onSettingsChange"
        />
      </div>

      <div class="setting-group">
        <va-checkbox
          v-model="settings.fixStartKnob"
          :label="t('Fix start knob at beginning')"
          @update:modelValue="onSettingsChange"
        />
      </div>

      <div class="setting-group">
        <va-checkbox
          v-model="settings.showControls"
          :label="t('Show playback controls')"
          @update:modelValue="onSettingsChange"
        />
      </div>
    </div>
  </va-collapse>

  <!-- Styling Settings -->
  <va-collapse
    v-model="opened.stylingSection"
    icon="palette"
    :header="t('Styling')"
  >
    <div class="settings-container">
      <div class="setting-group">
        <va-color-input
          v-model="settings.rangeStripColor"
          :label="t('Range Strip Color')"
          @update:modelValue="onSettingsChange"
        />
      </div>

      <div class="setting-group">
        <va-checkbox
          v-model="settings.showTimeInfo"
          :label="t('Show time information panel')"
          @update:modelValue="onSettingsChange"
        />
      </div>
    </div>
  </va-collapse>
</template>

<script lang="ts" setup>
import { ref, computed, watch, onMounted, inject } from 'vue';
import type { i18n } from "org.eclipse.daanse.board.app.lib.i18next";
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables';
import { container } from 'org.eclipse.daanse.board.app.lib.core';
import {
  identifier as variableIdentifier,
  type VariableRepository
} from 'org.eclipse.daanse.board.app.lib.repository.variable';

const i18n: i18n | undefined = inject('i18n');
const t = (key: string) => (i18n) ? i18n.t(key) : key;

type RelativeTimeUnit = 'hours' | 'days' | 'weeks' | 'months' | 'years';

interface RelativeTimeConfig {
  enabled: boolean;
  offset: number;
  unit: RelativeTimeUnit;
}

interface TimelineSettings {
  timelineMin?: string;
  timelineMax?: string;
  rangeStart?: string;
  rangeEnd?: string;
  relativeTime?: RelativeTimeConfig;
  rangeStartVariable?: string;
  rangeEndVariable?: string;
  startTime?: string;
  endTime?: string;
  currentTime?: string;
  stepSize?: 'minute' | 'hour' | 'day' | 'week' | 'month';
  playbackSpeed?: number;
  autoPlay?: boolean;
  rangeStripColor?: string;
  fixStartKnob?: boolean;
  showTimeInfo?: boolean;
  showControls?: boolean;
}

const widgetSettings = defineModel<TimelineSettings>({ required: true });

const opened = ref({
  timelineSection: false,
  playbackSection: false,
  stylingSection: false
});

// Time range mode: 'relative' or 'absolute'
const timeRangeMode = ref<'relative' | 'absolute'>('absolute');

const timeRangeModeOptions = [
  { label: 'Relative', value: 'relative' },
  { label: 'Absolute', value: 'absolute' }
];

// Default values
const now = new Date();
const defaultTimelineStart = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
const defaultTimelineEnd = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
const defaultRangeStart = new Date(now.getTime() - 24 * 60 * 60 * 1000);
const defaultRangeEnd = new Date();

const settings = ref<TimelineSettings>({
  timelineMin: defaultTimelineStart.toISOString(),
  timelineMax: defaultTimelineEnd.toISOString(),
  rangeStart: defaultRangeStart.toISOString(),
  rangeEnd: defaultRangeEnd.toISOString(),
  relativeTime: {
    enabled: false,
    offset: 24,
    unit: 'hours'
  },
  stepSize: 'hour',
  playbackSpeed: 1,
  autoPlay: false,
  rangeStripColor: '#d17600',
  fixStartKnob: false,
  showTimeInfo: true,
  showControls: true
});

const useCurrentTimeAsMax = ref(false);

// Separate date and time refs for timeline min/max
const timelineMinDate = ref<Date>();
const timelineMinTime = ref<Date>();
const timelineMaxDate = ref<Date>();
const timelineMaxTime = ref<Date>();

// Variable Support
const variableRepository = ref<VariableRepository | null>(null);
const useStartVariable = ref(false);
const useEndVariable = ref(false);
const rangeStartWrapper = ref(new VariableWrapper<string>(''));
const rangeEndWrapper = ref(new VariableWrapper<string>(''));

// Available variables
const availableVariables = computed(() => {
  if (!variableRepository.value) return [];
  return (variableRepository.value as VariableRepository).getAllVariables()
    .map(([name, variable]: [string, any]) => variable)
    .filter((v: any) => v.value && typeof v.value === 'string')
    .map((v: any) => ({ name: v.name, value: v.value }));
});

const stepSizeOptions = computed(() => [
  { text: '1 Minute', value: 'minute' },
  { text: '1 Hour', value: 'hour' },
  { text: '1 Day', value: 'day' },
  { text: '1 Week', value: 'week' },
  { text: '1 Month', value: 'month' }
]);

const speedOptions = computed(() => [
  { text: '0.25x', value: 0.25 },
  { text: '0.5x', value: 0.5 },
  { text: '1x', value: 1 },
  { text: '2x', value: 2 },
  { text: '4x', value: 4 }
]);

const timeUnitOptions = [
  { text: 'Hours', value: 'hours' },
  { text: 'Days', value: 'days' },
  { text: 'Weeks', value: 'weeks' },
  { text: 'Months', value: 'months' },
  { text: 'Years', value: 'years' }
];

// Time range mode change handler
const onTimeRangeModeChange = () => {
  if (timeRangeMode.value === 'relative') {
    settings.value.relativeTime!.enabled = true;
    applyRelativeTime();
  } else {
    settings.value.relativeTime!.enabled = false;
  }
  onSettingsChange();
};

// Relative time handlers
const onRelativeTimeChange = () => {
  if (settings.value.relativeTime?.enabled) {
    applyRelativeTime();
  }
  onSettingsChange();
};

const calculateRelativeTime = (offset: number, unit: RelativeTimeUnit | { value: string }): { start: Date; end: Date } => {
  const now = new Date();
  const start = new Date(now);
  const safeOffset = Number(offset) || 24;
  const unitValue = typeof unit === 'object' && unit !== null ? (unit as any).value : unit;

  switch (unitValue) {
    case 'hours':
      start.setHours(start.getHours() - safeOffset);
      break;
    case 'days':
      start.setDate(start.getDate() - safeOffset);
      break;
    case 'weeks':
      start.setDate(start.getDate() - (safeOffset * 7));
      break;
    case 'months':
      start.setMonth(start.getMonth() - safeOffset);
      break;
    case 'years':
      start.setFullYear(start.getFullYear() - safeOffset);
      break;
    default:
      start.setHours(start.getHours() - safeOffset);
  }

  return { start, end: now };
};

const applyRelativeTime = () => {
  if (!settings.value.relativeTime?.enabled) return;

  const { start, end } = calculateRelativeTime(
    settings.value.relativeTime.offset,
    settings.value.relativeTime.unit
  );

  const frameDuration = end.getTime() - start.getTime();
  const rangeDuration = frameDuration * 0.2;
  const newRangeEnd = end;
  const newRangeStart = new Date(end.getTime() - rangeDuration);

  settings.value.timelineMin = start.toISOString();
  settings.value.timelineMax = end.toISOString();
  settings.value.rangeStart = newRangeStart.toISOString();
  settings.value.rangeEnd = newRangeEnd.toISOString();

  widgetSettings.value.timelineMin = settings.value.timelineMin;
  widgetSettings.value.timelineMax = settings.value.timelineMax;
  widgetSettings.value.rangeStart = settings.value.rangeStart;
  widgetSettings.value.rangeEnd = settings.value.rangeEnd;

  if (settings.value.rangeStartVariable && variableRepository.value) {
    const startVariable = variableRepository.value.getVariable(settings.value.rangeStartVariable);
    if (startVariable) {
      startVariable.value = settings.value.rangeStart;
    }
  }
  if (settings.value.rangeEndVariable && variableRepository.value) {
    const endVariable = variableRepository.value.getVariable(settings.value.rangeEndVariable);
    if (endVariable) {
      endVariable.value = settings.value.rangeEnd;
    }
  }
};

// Variable handlers
const onStartVariableToggle = () => {
  if (!useStartVariable.value) {
    settings.value.rangeStartVariable = undefined;
  }
  onSettingsChange();
};

const onEndVariableToggle = () => {
  if (!useEndVariable.value) {
    settings.value.rangeEndVariable = undefined;
  }
  onSettingsChange();
};

const onVariableChange = () => {
  if (settings.value.rangeStartVariable && variableRepository.value) {
    const startVar = variableRepository.value.getVariable(settings.value.rangeStartVariable);
    if (startVar) {
      rangeStartWrapper.value.setTo(startVar);
      settings.value.rangeStart = rangeStartWrapper.value.value;
    }
  }

  if (settings.value.rangeEndVariable && variableRepository.value) {
    const endVar = variableRepository.value.getVariable(settings.value.rangeEndVariable);
    if (endVar) {
      rangeEndWrapper.value.setTo(endVar);
      settings.value.rangeEnd = rangeEndWrapper.value.value;
    }
  }

  onSettingsChange();
};

const combineDateTime = (date?: Date, time?: Date): string | undefined => {
  if (!date) return undefined;

  const combined = new Date(date);
  if (time) {
    combined.setHours(time.getHours());
    combined.setMinutes(time.getMinutes());
    combined.setSeconds(time.getSeconds());
  }
  return combined.toISOString();
};

const onTimelineMinDateChange = () => {
  settings.value.timelineMin = combineDateTime(timelineMinDate.value, timelineMinTime.value);
  onSettingsChange();
};

const onTimelineMinTimeChange = () => {
  settings.value.timelineMin = combineDateTime(timelineMinDate.value, timelineMinTime.value);
  onSettingsChange();
};

const onTimelineMaxDateChange = () => {
  settings.value.timelineMax = combineDateTime(timelineMaxDate.value, timelineMaxTime.value);
  onSettingsChange();
};

const onTimelineMaxTimeChange = () => {
  settings.value.timelineMax = combineDateTime(timelineMaxDate.value, timelineMaxTime.value);
  onSettingsChange();
};

const onSettingsChange = () => {
  let actualRangeStart = settings.value.rangeStart;
  let actualRangeEnd = settings.value.rangeEnd;

  if (useStartVariable.value && rangeStartWrapper.value.value) {
    actualRangeStart = rangeStartWrapper.value.value;
  }

  if (useEndVariable.value && rangeEndWrapper.value.value) {
    actualRangeEnd = rangeEndWrapper.value.value;
  }

  const updatedSettings: TimelineSettings = {
    ...settings.value,
    timelineMin: settings.value.timelineMin,
    timelineMax: useCurrentTimeAsMax.value ? new Date().toISOString() : settings.value.timelineMax,
    rangeStart: actualRangeStart,
    rangeEnd: actualRangeEnd,
    relativeTime: settings.value.relativeTime,
    rangeStartVariable: settings.value.rangeStartVariable,
    rangeEndVariable: settings.value.rangeEndVariable,
    stepSize: settings.value.stepSize,
    playbackSpeed: settings.value.playbackSpeed,
    autoPlay: settings.value.autoPlay,
    rangeStripColor: settings.value.rangeStripColor,
    fixStartKnob: settings.value.fixStartKnob,
    showTimeInfo: settings.value.showTimeInfo,
    showControls: settings.value.showControls
  };

  Object.assign(widgetSettings.value, updatedSettings);
};

const onTimelineEndTypeChange = () => {
  if (useCurrentTimeAsMax.value) {
    // Timeline max will be set to current time at runtime
  } else {
    if (!settings.value.timelineMax) {
      settings.value.timelineMax = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
    }
  }
  onSettingsChange();
};

const resetToDefaults = () => {
  const now = new Date();
  const defaultTimelineStart = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const defaultTimelineEnd = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  const defaultRangeStart = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const defaultRangeEnd = new Date();

  settings.value = {
    timelineMin: defaultTimelineStart.toISOString(),
    timelineMax: defaultTimelineEnd.toISOString(),
    rangeStart: defaultRangeStart.toISOString(),
    rangeEnd: defaultRangeEnd.toISOString(),
    relativeTime: {
      enabled: false,
      offset: 24,
      unit: 'hours'
    },
    stepSize: 'hour',
    playbackSpeed: 1,
    autoPlay: false,
    rangeStripColor: '#d17600',
    fixStartKnob: false,
    showTimeInfo: true,
    showControls: true
  };

  timeRangeMode.value = 'absolute';
  useCurrentTimeAsMax.value = false;
  onSettingsChange();
};

// Initialize settings
onMounted(() => {
  try {
    variableRepository.value = container.get<VariableRepository>(variableIdentifier);
  } catch (error) {
    console.warn('VariableRepository not found in container:', error);
  }

  if (widgetSettings.value && widgetSettings.value.timelineMin) {
    Object.assign(settings.value, widgetSettings.value);
    useCurrentTimeAsMax.value = !widgetSettings.value.timelineMax;

    useStartVariable.value = !!widgetSettings.value.rangeStartVariable;
    useEndVariable.value = !!widgetSettings.value.rangeEndVariable;

    if (!settings.value.relativeTime) {
      settings.value.relativeTime = {
        enabled: false,
        offset: 24,
        unit: 'hours'
      };
    }

    // Set time range mode based on relativeTime.enabled
    timeRangeMode.value = settings.value.relativeTime.enabled ? 'relative' : 'absolute';

    if (settings.value.timelineMin) {
      const minDate = new Date(settings.value.timelineMin);
      timelineMinDate.value = minDate;
      timelineMinTime.value = minDate;
    }
    if (settings.value.timelineMax) {
      const maxDate = new Date(settings.value.timelineMax);
      timelineMaxDate.value = maxDate;
      timelineMaxTime.value = maxDate;
    }
  } else {
    resetToDefaults();
  }

  onSettingsChange();
});

// Watch for external changes
watch(() => widgetSettings.value, (newSettings) => {
  if (newSettings) {
    Object.assign(settings.value, newSettings);
    useCurrentTimeAsMax.value = !newSettings.timelineMax;
    if (newSettings.relativeTime) {
      timeRangeMode.value = newSettings.relativeTime.enabled ? 'relative' : 'absolute';
    }
  }
}, { deep: true });
</script>

<style scoped>
.settings-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  overflow-x: hidden;
}

.setting-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 0;
}

.setting-group > label {
  font-weight: 600;
  color: var(--va-text-primary);
  font-size: 0.9rem;
}

.datetime-group {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: flex-start;
}

.datetime-group > * {
  flex: 1;
  min-width: 0;
}

.relative-time-config {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.75rem;
  background: var(--va-background-element);
  border-radius: 4px;
  min-width: 0;
  overflow: hidden;
}

.relative-time-row {
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
  min-width: 0;
}

.offset-input {
  flex: 1;
  min-width: 60px;
  max-width: 100px;
}

.unit-select {
  flex: 2;
  min-width: 80px;
}

.relative-time-preview {
  font-size: 0.85rem;
  color: var(--va-primary);
  padding: 0.5rem;
  background: var(--va-background-secondary);
  border-radius: 4px;
  text-align: center;
  word-break: break-word;
}

.variable-config {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
