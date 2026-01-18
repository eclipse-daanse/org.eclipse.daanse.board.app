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
      <!-- Timeline Start (earliest time) -->
      <div class="setting-group">
        <label>{{ t('Timeline Start (earliest time)') }}</label>
        <div class="datetime-group">
          <va-date-input
            v-model="timelineMinDate"
            :label="t('Select date')"
            @update:modelValue="onTimelineMinDateChange"
          />
          <va-time-input
            v-model="timelineMinTime"
            :label="t('Select time')"
            @update:modelValue="onTimelineMinTimeChange"
          />
        </div>
      </div>

      <!-- Timeline End (latest time) -->
      <div class="setting-group">
        <label>{{ t('Timeline End (latest time)') }}</label>
        <div class="end-time-group">
          <va-checkbox
            v-model="useCurrentTimeAsMax"
            :label="t('Use current time as timeline end')"
            @update:modelValue="onTimelineEndTypeChange"
          />

          <div v-if="!useCurrentTimeAsMax" class="datetime-group">
            <va-date-input
              v-model="timelineMaxDate"
              :label="t('Select date')"
              @update:modelValue="onTimelineMaxDateChange"
            />
            <va-time-input
              v-model="timelineMaxTime"
              :label="t('Select time')"
              @update:modelValue="onTimelineMaxTimeChange"
            />
          </div>
        </div>
      </div>

      <!-- Default Step Size -->
      <div class="setting-group">
        <label>{{ t('Default Step Size') }}</label>
        <va-select
          v-model="settings.stepSize"
          :options="stepSizeOptions"
          :label="t('Select step size')"
          value-by="value"
          @update:modelValue="onSettingsChange"
        />
      </div>

      <!-- Default Playback Speed -->
      <div class="setting-group">
        <label>{{ t('Default Playback Speed') }}</label>
        <va-select
          v-model="settings.playbackSpeed"
          :options="speedOptions"
          :label="t('Select playback speed')"
          @update:modelValue="onSettingsChange"
        />
      </div>

      <!-- Auto Play -->
      <div class="setting-group">
        <va-checkbox
          v-model="settings.autoPlay"
          :label="t('Auto-play on load')"
          @update:modelValue="onSettingsChange"
        />
      </div>

      <!-- Range Strip Color -->
      <div class="setting-group">
        <label>{{ t('Range Strip Color') }}</label>
        <va-color-input
          v-model="settings.rangeStripColor"
          :label="t('Select range strip color')"
          @update:modelValue="onSettingsChange"
        />
      </div>

      <!-- Fix Start Knob -->
      <div class="setting-group">
        <va-checkbox
          v-model="settings.fixStartKnob"
          :label="t('Fix start knob at timeline beginning')"
          @update:modelValue="onSettingsChange"
        />
      </div>

      <!-- Show Time Info -->
      <div class="setting-group">
        <va-checkbox
          v-model="settings.showTimeInfo"
          :label="t('Show time information panel')"
          @update:modelValue="onSettingsChange"
        />
      </div>

      <!-- Show Controls -->
      <div class="setting-group">
        <va-checkbox
          v-model="settings.showControls"
          :label="t('Show playback controls')"
          @update:modelValue="onSettingsChange"
        />
      </div>

      <!-- Relative Time Configuration -->
      <div class="setting-group" v-if="settings.relativeTime">
        <label>{{ t('Relative Time Range') }}</label>
        <va-checkbox
          v-model="settings.relativeTime.enabled"
          :label="t('Use relative timeline bounds (Min = Now - Offset, Max = Now)')"
          @update:modelValue="onRelativeTimeToggle"
        />

        <div v-if="settings.relativeTime.enabled" class="relative-time-config">
          <div class="relative-time-row">
            <va-input
              v-model.number="settings.relativeTime.offset"
              :label="t('Offset')"
              type="number"
              :min="1"
              :max="10000"
              @update:modelValue="onRelativeTimeChange"
            />
            <va-select
              v-model="settings.relativeTime.unit"
              :options="timeUnitOptions"
              :label="t('Unit')"
              text-by="text"
              value-by="value"
              @update:modelValue="onRelativeTimeChange"
            />
          </div>
          <div class="relative-time-preview">
            {{ t('Timeline bounds') }}: {{ t('Now') }} - {{ settings.relativeTime.offset }} {{ t(settings.relativeTime.unit) }} → {{ t('Now') }}
          </div>
        </div>
      </div>

      <!-- Quick Time Range Presets -->
      <div class="setting-group" v-if="!settings.relativeTime?.enabled">
        <label>{{ t('Quick Time Range Presets') }}</label>
        <div class="preset-buttons">
          <button
            v-for="preset in timePresets"
            :key="preset.value"
            class="preset-btn"
            @click="applyPreset(preset)"
          >
            {{ preset.label }}
          </button>
        </div>
      </div>

      <!-- Variable Configuration -->
      <div class="setting-group">
        <label>{{ t('Variable Configuration') }}</label>

        <!-- Start Time Variable -->
        <div class="variable-config">
          <va-checkbox
            v-model="useStartVariable"
            :label="t('Use variable for start time')"
            @update:modelValue="onStartVariableToggle"
          />

          <va-select
            v-if="useStartVariable"
            v-model="settings.rangeStartVariable"
            :options="availableVariables"
            :label="t('Select start time variable')"
            text-by="name"
            value-by="name"
            @update:modelValue="onVariableChange"
          />
        </div>

        <!-- End Time Variable -->
        <div class="variable-config">
          <va-checkbox
            v-model="useEndVariable"
            :label="t('Use variable for end time')"
            @update:modelValue="onEndVariableToggle"
          />

          <va-select
            v-if="useEndVariable"
            v-model="settings.rangeEndVariable"
            :options="availableVariables"
            :label="t('Select end time variable')"
            text-by="name"
            value-by="name"
            @update:modelValue="onVariableChange"
          />
        </div>
      </div>

      <!-- Timeline Range Slider -->
      <div class="setting-group">
        <va-checkbox
          v-model="useTimelineSlider"
          :label="t('Use Timeline Range Slider')"
          @update:modelValue="onSliderModeChange"
        />

        <div v-if="useTimelineSlider" class="slider-container">
          <label>{{ t('Timeline Range') }}</label>
          <div class="timeline-slider-wrapper">
            <div class="slider-labels">
              <span class="slider-label-start">{{ formatSliderTime(sliderMin) }}</span>
              <span class="slider-label-end">{{ formatSliderTime(sliderMax) }}</span>
            </div>

            <!-- Custom Range Slider -->
            <div class="custom-range-slider" ref="sliderRef">
              <div class="slider-track"></div>
              <div
                class="slider-range"
                :style="rangeStyle"
                @mousedown="onRangeMouseDown"
              ></div>
              <div
                class="slider-thumb start-thumb"
                :style="{ left: startThumbPosition + '%' }"
                @mousedown="onStartThumbMouseDown"
              ></div>
              <div
                class="slider-thumb end-thumb"
                :style="{ left: endThumbPosition + '%' }"
                @mousedown="onEndThumbMouseDown"
              ></div>
            </div>

            <div class="slider-values">
              <div class="slider-value">
                <span class="value-label">{{ t('Range Start:') }}</span>
                <span class="value-time">{{ formatDateTime(settings.rangeStart) }}</span>
              </div>
              <div class="slider-value">
                <span class="value-label">{{ t('Range End:') }}</span>
                <span class="value-time">{{ formatDateTime(settings.rangeEnd) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Current Configuration Display -->
      <div class="setting-group">
        <label>{{ t('Current Configuration') }}</label>
        <div class="config-display">
          <div class="config-item">
            <span class="config-label">Timeline Start:</span>
            <span class="config-value">{{ formatDateTime(settings.timelineMin) }}</span>
          </div>
          <div class="config-item">
            <span class="config-label">Timeline End:</span>
            <span class="config-value">{{
              useCurrentTimeAsMax ? 'Current Time' : formatDateTime(settings.timelineMax)
            }}</span>
          </div>
          <div class="config-item">
            <span class="config-label">Timeline Duration:</span>
            <span class="config-value">{{ formatDuration() }}</span>
          </div>
        </div>
      </div>

      <!-- Reset to Defaults -->
      <div class="setting-group">
        <va-button
          color="secondary"
          @click="resetToDefaults"
          icon="refresh"
        >
          {{ t('Reset to Defaults') }}
        </va-button>
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
  // Widget-kompatible Eigenschaften
  timelineMin?: string; // Früheste erlaubte Zeit (ISO 8601)
  timelineMax?: string; // Späteste erlaubte Zeit (ISO 8601)
  rangeStart?: string; // Aktueller Start des Zeitbereichs (ISO 8601)
  rangeEnd?: string;   // Aktuelles Ende des Zeitbereichs (ISO 8601)
  // Relative Time Support (Start = Now - offset, End = Now)
  relativeTime?: RelativeTimeConfig;
  // Variable Support
  rangeStartVariable?: string; // Variable name for start time
  rangeEndVariable?: string;   // Variable name for end time
  // Deprecated - kept for compatibility
  startTime?: string;
  endTime?: string;
  currentTime?: string;
  stepSize?: 'minute' | 'hour' | 'day' | 'week' | 'month';
  playbackSpeed?: number;
  autoPlay?: boolean;
  // Styling
  rangeStripColor?: string;
  // Behavior
  fixStartKnob?: boolean;
  // UI Display
  showTimeInfo?: boolean;
  showControls?: boolean;
}

const widgetSettings = defineModel<TimelineSettings>({ required: true });

const opened = ref({
  timelineSection: false
});

// Default-Werte für initiale Settings (Timeline-Track-Grenzen)
const now = new Date();
const defaultTimelineStart = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000); // 30 Tage zurück
const defaultTimelineEnd = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);    // 7 Tage voraus
const defaultRangeStart = new Date(now.getTime() - 24 * 60 * 60 * 1000);         // 24h zurück
const defaultRangeEnd = new Date();                                              // Jetzt

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
const useTimelineSlider = ref(false);
const sliderRef = ref<HTMLElement>();
const isDragging = ref(false);
const dragType = ref<'start' | 'end' | 'range'>('start');

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

// Slider range (7 days window)
const sliderMin = ref(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000));
const sliderMax = ref(new Date());

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

const timePresets = computed(() => [
  {
    label: 'Last Hour',
    value: 'hour',
    getStartTime: () => new Date(Date.now() - 60 * 60 * 1000)
  },
  {
    label: 'Last 6 Hours',
    value: '6hours',
    getStartTime: () => new Date(Date.now() - 6 * 60 * 60 * 1000)
  },
  {
    label: 'Last Day',
    value: 'day',
    getStartTime: () => new Date(Date.now() - 24 * 60 * 60 * 1000)
  },
  {
    label: 'Last Week',
    value: 'week',
    getStartTime: () => new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  },
  {
    label: 'Last Month',
    value: 'month',
    getStartTime: () => new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
  }
]);

const timeUnitOptions = [
  { text: 'Hours', value: 'hours' },
  { text: 'Days', value: 'days' },
  { text: 'Weeks', value: 'weeks' },
  { text: 'Months', value: 'months' },
  { text: 'Years', value: 'years' }
];

// Relative time handlers
const onRelativeTimeToggle = () => {
  if (settings.value.relativeTime?.enabled) {
    // Apply relative time immediately
    applyRelativeTime();
  }
  onSettingsChange();
};

const onRelativeTimeChange = () => {
  if (settings.value.relativeTime?.enabled) {
    applyRelativeTime();
  }
  onSettingsChange();
};

const calculateRelativeTime = (offset: number, unit: RelativeTimeUnit | { value: string }): { start: Date; end: Date } => {
  const now = new Date();
  const start = new Date(now);

  // Ensure offset is a valid number
  const safeOffset = Number(offset) || 24;

  // Extract unit value if it's an object (from va-select)
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
      console.warn('Unknown unit:', unitValue, '- defaulting to hours');
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

  // Calculate range as 20% of frame at the end (most recent)
  const frameDuration = end.getTime() - start.getTime();
  const rangeDuration = frameDuration * 0.2;
  const newRangeEnd = end;
  const newRangeStart = new Date(end.getTime() - rangeDuration);

  const newRangeStartISO = newRangeStart.toISOString();
  const newRangeEndISO = newRangeEnd.toISOString();
  const newTimelineMinISO = start.toISOString();
  const newTimelineMaxISO = end.toISOString();

  // Update settings.value
  settings.value.timelineMin = newTimelineMinISO;
  settings.value.timelineMax = newTimelineMaxISO;
  settings.value.rangeStart = newRangeStartISO;
  settings.value.rangeEnd = newRangeEndISO;

  // ALSO update widgetSettings directly to ensure propagation
  widgetSettings.value.timelineMin = newTimelineMinISO;
  widgetSettings.value.timelineMax = newTimelineMaxISO;
  widgetSettings.value.rangeStart = newRangeStartISO;
  widgetSettings.value.rangeEnd = newRangeEndISO;

  // Update variables if configured (Widget reads from variables if set)
  if (settings.value.rangeStartVariable && variableRepository.value) {
    const startVariable = variableRepository.value.getVariable(settings.value.rangeStartVariable);
    if (startVariable) {
      startVariable.value = newRangeStartISO;
    }
  }
  if (settings.value.rangeEndVariable && variableRepository.value) {
    const endVariable = variableRepository.value.getVariable(settings.value.rangeEndVariable);
    if (endVariable) {
      endVariable.value = newRangeEndISO;
    }
  }

};

const formatDateTime = (dateString?: string): string => {
  if (!dateString) return 'Not set';
  return new Date(dateString).toLocaleString('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const formatDuration = (): string => {
  if (!settings.value.timelineMin) return 'Not set';

  const start = new Date(settings.value.timelineMin);
  const end = useCurrentTimeAsMax.value ? new Date() : new Date(settings.value.timelineMax || '');

  if (!end.getTime()) return 'Invalid timeline end';

  const diffMs = end.getTime() - start.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays > 0) {
    return `${diffDays} days, ${diffHours % 24} hours`;
  } else if (diffHours > 0) {
    return `${diffHours} hours`;
  } else {
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    return `${diffMinutes} minutes`;
  }
};

const formatSliderTime = (date: Date): string => {
  return date.toLocaleString('de-DE', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Slider computed properties
const startThumbPosition = computed(() => {
  if (!settings.value.rangeStart) return 0;
  const startTime = new Date(settings.value.rangeStart).getTime();
  const minTime = sliderMin.value.getTime();
  const maxTime = sliderMax.value.getTime();
  return ((startTime - minTime) / (maxTime - minTime)) * 100;
});

const endThumbPosition = computed(() => {
  if (!settings.value.rangeEnd) {
    return 100;
  }
  const endTime = new Date(settings.value.rangeEnd).getTime();
  const minTime = sliderMin.value.getTime();
  const maxTime = sliderMax.value.getTime();
  return ((endTime - minTime) / (maxTime - minTime)) * 100;
});

const rangeStyle = computed(() => {
  return {
    left: startThumbPosition.value + '%',
    width: (endThumbPosition.value - startThumbPosition.value) + '%'
  };
});

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
  // Setup variable bindings
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
  // Use variable values if variables are selected
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
    // Timeline max wird zur Laufzeit auf aktuelle Zeit gesetzt
  } else {
    if (!settings.value.timelineMax) {
      settings.value.timelineMax = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
    }
  }
  onSettingsChange();
};

const applyPreset = (preset: any) => {
  const presetStart = preset.getStartTime();
  const now = new Date();

  // Timeline-Track auf Preset-Bereich erweitern (mit 20% Puffer)
  const duration = now.getTime() - presetStart.getTime();
  const extension = Math.max(duration * 0.2, 60 * 60 * 1000); // Min 1h Extension

  settings.value.timelineMin = new Date(presetStart.getTime() - extension).toISOString();
  settings.value.timelineMax = new Date(now.getTime() + extension).toISOString();

  // Aktueller Range auf Preset setzen
  settings.value.rangeStart = presetStart.toISOString();
  settings.value.rangeEnd = now.toISOString();

  useCurrentTimeAsMax.value = false;
  onSettingsChange();
};

const resetToDefaults = () => {
  const now = new Date();
  const defaultTimelineStart = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000); // 30 Tage zurück
  const defaultTimelineEnd = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);    // 7 Tage voraus
  const defaultRangeStart = new Date(now.getTime() - 24 * 60 * 60 * 1000);         // 24h zurück
  const defaultRangeEnd = new Date();                                              // Jetzt

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

  useCurrentTimeAsMax.value = false;
  onSettingsChange();
};

// Slider methods
const onSliderModeChange = () => {
  if (useTimelineSlider.value) {
    // Initialize slider range based on timeline boundaries
    if (settings.value.timelineMin && settings.value.timelineMax) {
      sliderMin.value = new Date(settings.value.timelineMin);
      sliderMax.value = useCurrentTimeAsMax.value ? new Date() : new Date(settings.value.timelineMax);
    }
  }
};

const getTimeFromPosition = (percentage: number): Date => {
  const minTime = sliderMin.value.getTime();
  const maxTime = sliderMax.value.getTime();
  return new Date(minTime + (percentage / 100) * (maxTime - minTime));
};

const onStartThumbMouseDown = (event: MouseEvent) => {
  event.preventDefault();
  isDragging.value = true;
  dragType.value = 'start';

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.value || !sliderRef.value) return;

    const rect = sliderRef.value.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (mouseX / rect.width) * 100));

    // Prevent start from going past end
    if (percentage < endThumbPosition.value) {
      const newStartTime = getTimeFromPosition(percentage);
      settings.value.rangeStart = newStartTime.toISOString();
      onSettingsChange();
    }
  };

  const handleMouseUp = () => {
    isDragging.value = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
};

const onEndThumbMouseDown = (event: MouseEvent) => {
  event.preventDefault();
  isDragging.value = true;
  dragType.value = 'end';

  // Manual range end setting - no special handling needed for timeline max

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.value || !sliderRef.value) return;

    const rect = sliderRef.value.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (mouseX / rect.width) * 100));

    // Prevent end from going before start
    if (percentage > startThumbPosition.value) {
      const newEndTime = getTimeFromPosition(percentage);
      settings.value.rangeEnd = newEndTime.toISOString();
      onSettingsChange();
    }
  };

  const handleMouseUp = () => {
    isDragging.value = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
};

const onRangeMouseDown = (event: MouseEvent) => {
  event.preventDefault();
  isDragging.value = true;
  dragType.value = 'range';

  const startMouseX = event.clientX;
  const initialStartPos = startThumbPosition.value;
  const initialEndPos = endThumbPosition.value;
  const rangeWidth = initialEndPos - initialStartPos;

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.value || !sliderRef.value) return;

    const rect = sliderRef.value.getBoundingClientRect();
    const deltaX = e.clientX - startMouseX;
    const deltaPercentage = (deltaX / rect.width) * 100;

    const newStartPos = Math.max(0, Math.min(100 - rangeWidth, initialStartPos + deltaPercentage));
    const newEndPos = newStartPos + rangeWidth;

    if (newEndPos <= 100) {
      const newStartTime = getTimeFromPosition(newStartPos);
      const newEndTime = getTimeFromPosition(newEndPos);

      settings.value.rangeStart = newStartTime.toISOString();
      settings.value.rangeEnd = newEndTime.toISOString();

      onSettingsChange();
    }
  };

  const handleMouseUp = () => {
    isDragging.value = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
};

// Initialize settings
onMounted(() => {
  // Initialize variable repository
  try {
    variableRepository.value = container.get<VariableRepository>(variableIdentifier);
  } catch (error) {
    console.warn('VariableRepository not found in container:', error);
  }

  if (widgetSettings.value && widgetSettings.value.timelineMin) {
    // Use existing settings if available
    Object.assign(settings.value, widgetSettings.value);
    useCurrentTimeAsMax.value = !widgetSettings.value.timelineMax;

    // Initialize variable flags based on existing configuration
    useStartVariable.value = !!widgetSettings.value.rangeStartVariable;
    useEndVariable.value = !!widgetSettings.value.rangeEndVariable;

    // Ensure relativeTime is initialized
    if (!settings.value.relativeTime) {
      settings.value.relativeTime = {
        enabled: false,
        offset: 24,
        unit: 'hours'
      };
    }

    // Initialize date/time pickers from ISO strings
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
    // Initialize with defaults and trigger initial settings change
    resetToDefaults();
  }

  // Ensure settings are propagated to widget immediately
  onSettingsChange();
});

// Watch for external changes
watch(() => widgetSettings.value, (newSettings) => {
  if (newSettings) {
    Object.assign(settings.value, newSettings);
    useCurrentTimeAsMax.value = !newSettings.timelineMax;
  }
}, { deep: true });
</script>

<style scoped>
.settings-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
}

.setting-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.setting-group > label {
  font-weight: 600;
  color: var(--va-text-primary);
  font-size: 0.9rem;
}

.end-time-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.datetime-group {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: flex-start;
}

.datetime-group > * {
  flex: 1;
}

.preset-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.preset-btn {
  padding: 0.5rem 1rem;
  border: 1px solid var(--va-primary);
  background: transparent;
  color: var(--va-primary);
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.2s ease;
}

.preset-btn:hover {
  background: var(--va-primary);
  color: white;
}

.config-display {
  background: var(--va-background-primary);
  border: 1px solid var(--va-background-border);
  border-radius: 4px;
  padding: 1rem;
  font-size: 0.9rem;
}

.config-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.config-item:last-child {
  margin-bottom: 0;
}

.config-label {
  font-weight: 500;
  color: var(--va-text-secondary);
}

.config-value {
  color: var(--va-text-primary);
  font-weight: 500;
}

/* Slider Styles */
.slider-container {
  margin-top: 1rem;
}

.timeline-slider-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--va-text-secondary);
}

.custom-range-slider {
  position: relative;
  height: 40px;
  margin: 0 10px;
}

.slider-track {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--va-background-border);
  border-radius: 2px;
  transform: translateY(-50%);
}

.slider-range {
  position: absolute;
  top: 50%;
  height: 4px;
  background: var(--va-primary);
  border-radius: 2px;
  transform: translateY(-50%);
  cursor: grab;
  transition: background-color 0.2s ease;
}

.slider-range:hover {
  background: var(--va-primary-dark);
}

.slider-range:active {
  cursor: grabbing;
}

.slider-thumb {
  position: absolute;
  top: 50%;
  width: 16px;
  height: 16px;
  background: var(--va-primary);
  border: 2px solid white;
  border-radius: 50%;
  cursor: grab;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  z-index: 2;
}

.slider-thumb:hover {
  background: var(--va-primary-dark);
  transform: translate(-50%, -50%) scale(1.1);
}

.slider-thumb:active {
  cursor: grabbing;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.start-thumb {
  z-index: 3;
}

.end-thumb {
  z-index: 3;
}

.slider-values {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.slider-value {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
  min-width: 0;
}

.value-label {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--va-text-secondary);
}

.value-time {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--va-text-primary);
  word-wrap: break-word;
}

.relative-time-config {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.75rem;
  background: var(--va-background-element);
  border-radius: 4px;
  margin-top: 0.5rem;
}

.relative-time-row {
  display: flex;
  gap: 1rem;
  align-items: end;
}

.relative-time-row > * {
  flex: 1;
}

.relative-time-preview {
  font-size: 0.85rem;
  color: var(--va-primary);
  padding: 0.5rem;
  background: var(--va-background-secondary);
  border-radius: 4px;
  text-align: center;
}

@media (max-width: 768px) {
  .preset-buttons {
    flex-direction: column;
  }

  .relative-time-row {
    flex-direction: column;
  }

  .config-item {
    flex-direction: column;
    gap: 0.25rem;
  }

  .slider-values {
    flex-direction: column;
    gap: 0.5rem;
  }

  .slider-labels {
    font-size: 0.7rem;
  }

  .custom-range-slider {
    margin: 0 5px;
  }

  .variable-config {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
}
</style>
