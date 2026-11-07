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
  <div
    class="timeline-widget"
    :style="{ '--range-color': rangeFill }"
    @click="emitClick"
    @contextmenu.prevent="emitRightClick"
  >
    <div class="timeline-container">
      <!-- The track: a rail from the theme, the selected range on it -->
      <div class="timeline-track" ref="trackRef">
        <div class="rail"></div>
        <div
          class="range-strip"
          :style="rangeStripStyle"
          @mousedown="onRangeStripMouseDown"
          :title="config.fixStartKnob ? t('Widget.rangeFixed') : t('Widget.range')"
        >
          <div
            v-if="!config.fixStartKnob"
            class="timeline-knob start-knob"
            role="slider"
            tabindex="0"
            :aria-label="t('Widget.startKnob')"
            :aria-valuetext="formatDateTime(rangeStart)"
            :style="{ zIndex: startKnobOnTop ? 5 : 4 }"
            @mousedown.stop="onStartKnobMouseDown"
            @keydown="onKnobKeydown('start', $event)"
            :title="t('Widget.startKnob')"
          ></div>
          <div
            v-else
            class="timeline-knob start-knob fixed-knob"
            :title="t('Widget.startKnobFixed')"
          ></div>

          <div
            class="timeline-knob end-knob"
            role="slider"
            tabindex="0"
            :aria-label="t('Widget.endKnob')"
            :aria-valuetext="formatDateTime(rangeEnd)"
            :style="{ zIndex: startKnobOnTop ? 3 : 4 }"
            @mousedown.stop="onEndKnobMouseDown"
            @keydown="onKnobKeydown('end', $event)"
            :title="t('Widget.endKnob')"
          ></div>
        </div>
      </div>

      <!-- Axis at round times -->
      <div class="time-axis">
        <div
          v-for="tick in timeAxisTicks"
          :key="tick.ms"
          :class="['time-tick', `time-tick--${tick.kind}`, tick.edge && `time-tick--${tick.edge}`]"
          :style="{ left: tick.position + '%' }"
        >
          <div class="tick-mark"></div>
          <div class="tick-label">{{ tick.label }}</div>
        </div>
      </div>
    </div>

    <div v-if="config.showTimeInfo !== false" class="time-info">
      <div class="time-display">
        <span class="time-label">{{ t('Widget.start') }}</span>
        <span class="time-value">{{ formatDateTime(rangeStart) }}</span>
      </div>
      <div class="time-display">
        <span class="time-label">{{ t('Widget.end') }}</span>
        <span class="time-value">{{ formatDateTime(rangeEnd) }}</span>
      </div>
      <div class="time-display">
        <span class="time-label">{{ t('Widget.duration') }}</span>
        <span class="time-value">{{ formatDuration() }}</span>
      </div>
    </div>

    <div v-if="config.showControls !== false" class="controls">
      <button
        type="button"
        class="play-button"
        :class="{ 'playing': isPlaying }"
        :aria-label="isPlaying ? t('Widget.pause') : t('Widget.play')"
        :title="isPlaying ? t('Widget.pause') : t('Widget.play')"
        @click.stop="togglePlay"
        :disabled="isAtEnd"
      >
        <svg v-if="!isPlaying" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z"/>
        </svg>
        <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
        </svg>
      </button>

      <div class="speed-control" @click.stop>
        <DSelect
          v-model="playbackSpeed"
          :options="speedOptions"
          value-key="value"
          label-key="label"
          :label="t('Widget.speed')"
          size="sm"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, shallowRef, computed, onMounted, onUnmounted, inject, watch } from 'vue';
import { useRoute } from 'vue-router';
import { VariableWrapper, useFormat, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables';
import { DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls';
import { axisTicks, rangeColor, TICK_FORMAT, type TickKind } from './timelineAxis';
import {
    identifier as variableIdentifier,
    type VariableRepository
} from 'org.eclipse.daanse.board.app.lib.api.variable';


const { t } = useTranslation('timeline');
const format = useFormat();

type RelativeTimeUnit = 'hours' | 'days' | 'weeks' | 'months' | 'years';

interface RelativeTimeConfig {
  enabled: boolean;
  offset: number;
  unit: RelativeTimeUnit;
}

interface TimelineSettings {
  // Zeitgrenzen aus Settings
  timelineMin?: string; // Früheste erlaubte Zeit (ISO 8601)
  timelineMax?: string; // Späteste erlaubte Zeit (ISO 8601)
  // Aktueller Zeitbereich
  rangeStart?: string; // Aktueller Start des Zeitbereichs (ISO 8601)
  rangeEnd?: string;   // Aktuelles Ende des Zeitbereichs (ISO 8601)
  // Relative Time Support
  relativeTime?: RelativeTimeConfig; // If enabled, Start = Now - offset, End = Now
  // Variable Support
  rangeStartVariable?: string; // Variable name for start time
  rangeEndVariable?: string;   // Variable name for end time
  // Playback-Einstellungen
  stepSize?: 'minute' | 'hour' | 'day' | 'week' | 'month';
  playbackSpeed?: number; // Geschwindigkeit für Play-Funktion
  autoPlay?: boolean;
  // Styling
  rangeStripColor?: string;
  // Behavior
  fixStartKnob?: boolean;
  // UI Display
  showTimeInfo?: boolean;
  showControls?: boolean;
}

const props = defineProps<{ datasourceId: string; id?: string }>();
import { toRefs } from 'vue';
const { id: widgetId } = toRefs(props);
const config = defineModel<TimelineSettings>('configv', { required: true });

import { identifiers } from 'org.eclipse.daanse.board.app.lib.core';
import type { TinyEmitter } from 'tiny-emitter';
import { EventActionsRegistry, EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events';
import { TimelineWidgetInterface } from './api/TimelineWidgetInterface';

const eventBus = inject<TinyEmitter>(identifiers.TINY_EMITTER)!;
const actionsRegistry = inject<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY)!;

const route = useRoute();
const pageId = (route.params.pageid as string) || '';

class TimelineWidgetApi extends TimelineWidgetInterface {
    zoomIn(): void {
        // Shrink the visible range by 25% from both sides toward the center
        const start = new Date(config.value.rangeStart || Date.now() - 86400000);
        const end = new Date(config.value.rangeEnd || Date.now());
        const duration = end.getTime() - start.getTime();
        const shrink = duration * 0.25;
        const newStart = new Date(start.getTime() + shrink);
        const newEnd = new Date(end.getTime() - shrink);
        if (newEnd.getTime() - newStart.getTime() > 60000) {
            /* Written in place: replacing the object with a spread of it
             * would hand back the private fields of a generated instance
             * and drop everything else the settings hold. */
            config.value.rangeStart = newStart.toISOString();
            config.value.rangeEnd = newEnd.toISOString();
        }
    }
    zoomOut(): void {
        // Expand the visible range by 50% on both sides
        const start = new Date(config.value.rangeStart || Date.now() - 86400000);
        const end = new Date(config.value.rangeEnd || Date.now());
        const duration = end.getTime() - start.getTime();
        const expand = duration * 0.5;
        const newStart = new Date(Math.max(
            start.getTime() - expand,
            new Date(config.value.timelineMin || 0).getTime()
        ));
        const newEnd = new Date(Math.min(
            end.getTime() + expand,
            new Date(config.value.timelineMax || Date.now() + 86400000 * 7).getTime()
        ));
        config.value.rangeStart = newStart.toISOString();
        config.value.rangeEnd = newEnd.toISOString();
    }
    setDateRange(start: string, end: string): void {
        config.value.rangeStart = start;
        config.value.rangeEnd = end;
    }
    jumpToNow(): void {
        const now = new Date();
        const duration = new Date(config.value.rangeEnd || now).getTime() -
            new Date(config.value.rangeStart || now).getTime();
        const newEnd = now;
        const newStart = new Date(now.getTime() - duration);
        config.value.rangeStart = newStart.toISOString();
        config.value.rangeEnd = newEnd.toISOString();
    }
}
const api = new TimelineWidgetApi();
defineExpose<TimelineWidgetInterface>(api);

const emitClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:TimelineWidget:click', {
        type: 'widget:TimelineWidget:click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

const emitRightClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:TimelineWidget:right_click', {
        type: 'widget:TimelineWidget:right_click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

// Variable Support
const variableRepository = ref<VariableRepository | null>(null);
/*
 * shallowRef, not ref: a wrapper is an EObject and must stay out of deep
 * reactivity. Behind a reactive proxy its adapters run on the proxy, the
 * reactivity adapter's tick ref is unwrapped to a number, and setTo throws
 * "Cannot create property 'value' on number" before the relative time range
 * is applied (#1248). The wrapper notifies Vue itself (wrapperReactivity.ts).
 */
const rangeStartWrapper = shallowRef(new VariableWrapper<string>(''));
const rangeEndWrapper = shallowRef(new VariableWrapper<string>(''));

// Reactive state
const isPlaying = ref(false);
const playbackSpeed = ref(config.value.playbackSpeed || 1);
const isDragging = ref(false);
const trackRef = ref<HTMLElement>();

// Temporäre Positionen für smooth dragging
const tempStartPosition = ref<number | null>(null);
const tempEndPosition = ref<number | null>(null);
const tempRangeStripStyle = ref<{left: string, width: string} | null>(null);

// Animation
let animationFrame: number | null = null;
let lastUpdateTime = 0;
let lastStepTime = 0; // Für StepSize-gesteuerte Schritte

// Default-Konfiguration
const defaultTimelineMin = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000); // 30 Tage zurück
const defaultTimelineMax = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);  // 7 Tage voraus
const defaultRangeStart = new Date(Date.now() - 24 * 60 * 60 * 1000);       // 24h zurück
const defaultRangeEnd = new Date();                                          // Jetzt

// Calculate relative time: now minus offset in specified unit
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
      start.setHours(start.getHours() - safeOffset);
  }

  return { start, end: now };
};

// Apply relative time to config (sets timeline bounds and range)
const applyRelativeTime = () => {
  if (!config.value.relativeTime?.enabled) return;

  const { start, end } = calculateRelativeTime(
    config.value.relativeTime.offset,
    config.value.relativeTime.unit
  );

  // Set timeline bounds (the frame)
  config.value.timelineMin = start.toISOString();
  config.value.timelineMax = end.toISOString();

  // Always set range to 20% of frame at the end (most recent)
  // This ensures the slider is always visible and movable
  const frameDuration = end.getTime() - start.getTime();
  const rangeDuration = frameDuration * 0.2;

  const newRangeEnd = end;
  const newRangeStart = new Date(end.getTime() - rangeDuration);

  config.value.rangeStart = newRangeStart.toISOString();
  config.value.rangeEnd = newRangeEnd.toISOString();

  // Update variables if configured
  if (config.value.rangeStartVariable && variableRepository.value) {
    const startVariable = variableRepository.value.getVariable(config.value.rangeStartVariable);
    if (startVariable) {
      startVariable.value = newRangeStart.toISOString();
    }
  }
  if (config.value.rangeEndVariable && variableRepository.value) {
    const endVariable = variableRepository.value.getVariable(config.value.rangeEndVariable);
    if (endVariable) {
      endVariable.value = newRangeEnd.toISOString();
    }
  }
};

// Zeitgrenzen (durch Settings bestimmt)
const timelineMin = computed(() => {
  return config.value.timelineMin ? new Date(config.value.timelineMin) : defaultTimelineMin;
});

const timelineMax = computed(() => {
  return config.value.timelineMax ? new Date(config.value.timelineMax) : defaultTimelineMax;
});

// Aktueller Zeitbereich (mit Variable-Support)
const rangeStart = computed(() => {
  // Use variable value if available
  if (config.value.rangeStartVariable && variableRepository.value) {
    const variable = variableRepository.value.getVariable(config.value.rangeStartVariable);
    if (variable && variable.value) {
      return new Date(variable.value);
    }
  }
  return config.value.rangeStart ? new Date(config.value.rangeStart) : defaultRangeStart;
});

const rangeEnd = computed(() => {
  // Use variable value if available
  if (config.value.rangeEndVariable && variableRepository.value) {
    const variable = variableRepository.value.getVariable(config.value.rangeEndVariable);
    if (variable && variable.value) {
      return new Date(variable.value);
    }
  }
  return config.value.rangeEnd ? new Date(config.value.rangeEnd) : defaultRangeEnd;
});

// Berechnete Positionen für Knobs (in %) - mit temporären Positionen beim Dragging
const startKnobPosition = computed(() => {
  // Wenn Start-Knob fixiert ist, immer am Anfang (0%)
  if (config.value.fixStartKnob) {
    return 0;
  }

  if (tempStartPosition.value !== null) {
    return tempStartPosition.value;
  }
  const minMs = timelineMin.value.getTime();
  const maxMs = timelineMax.value.getTime();
  const startMs = rangeStart.value.getTime();
  return Math.max(0, Math.min(100, ((startMs - minMs) / (maxMs - minMs)) * 100));
});

const endKnobPosition = computed(() => {
  if (tempEndPosition.value !== null) {
    return tempEndPosition.value;
  }
  const minMs = timelineMin.value.getTime();
  const maxMs = timelineMax.value.getTime();
  const endMs = rangeEnd.value.getTime();
  return Math.max(0, Math.min(100, ((endMs - minMs) / (maxMs - minMs)) * 100));
});

// Position of the selected range on the track
const rangeStripStyle = computed(() => {
  if (tempRangeStripStyle.value) return tempRangeStripStyle.value;
  return {
    left: startKnobPosition.value + '%',
    width: (endKnobPosition.value - startKnobPosition.value) + '%'
  };
});

/* Only the range follows the setting; rail and handles come from the theme. */
const rangeFill = computed(() => rangeColor(config.value.rangeStripColor));

// Berechne Zeitschritt in Millisekunden basierend auf StepSize
const getStepSizeInMs = (): number => {
  const stepSize = config.value.stepSize || 'hour';

  switch (stepSize) {
    case 'minute': return 60 * 1000;           // 1 Minute = 60 Sekunden
    case 'hour': return 60 * 60 * 1000;       // 1 Stunde = 3600 Sekunden
    case 'day': return 24 * 60 * 60 * 1000;   // 1 Tag = 86400 Sekunden
    case 'week': return 7 * 24 * 60 * 60 * 1000; // 1 Woche
    case 'month': return 30 * 24 * 60 * 60 * 1000; // 1 Monat (ca. 30 Tage)
    default: return 60 * 60 * 1000;           // Default: 1 Stunde
  }
};

// Prüfung ob Ende erreicht
const isAtEnd = computed(() => {
  return rangeEnd.value.getTime() >= timelineMax.value.getTime();
});

// Wenn beide Knobs nah beieinander sind (< 5% Abstand):
// - Am linken Ende: End-Knob oben, damit man ihn nach rechts ziehen kann
// - Am rechten Ende: Start-Knob oben, damit man ihn nach links ziehen kann
const startKnobOnTop = computed(() => {
  const distance = endKnobPosition.value - startKnobPosition.value;
  if (distance >= 10) return false;
  return startKnobPosition.value > 50;
});

/* The width of the track decides how many labels fit. */
const trackWidth = ref(0);
let trackObserver: ResizeObserver | null = null;
/** Room for one label in monospace, with a gap. */
const TICK_SPACING_PX = 96;

const timeAxisTicks = computed(() => {
  const minMs = timelineMin.value.getTime();
  const maxMs = timelineMax.value.getTime();
  const target = trackWidth.value > 0 ? trackWidth.value / TICK_SPACING_PX : 8;
  return axisTicks(minMs, maxMs, target).map((tick) => ({
    ...tick,
    label: format.date(new Date(tick.ms), TICK_FORMAT[tick.kind as TickKind]),
    // Labels at the ends grow inwards, so they are not cut off
    edge: tick.position < 4 ? 'start' : tick.position > 96 ? 'end' : null
  }));
});

const speedOptions = [0.25, 0.5, 1, 2, 4].map((value) => ({ label: `${value}×`, value }));

/* Keyboard: arrows move a handle by one step, Page keys by ten, Home and End to the limits. */
const onKnobKeydown = (which: 'start' | 'end', event: KeyboardEvent) => {
  const step = getStepSizeInMs();
  const moves: Record<string, number> = {
    ArrowLeft: -step, ArrowDown: -step, ArrowRight: step, ArrowUp: step,
    PageDown: -10 * step, PageUp: 10 * step
  };
  const minMs = timelineMin.value.getTime();
  const maxMs = timelineMax.value.getTime();
  const startMs = rangeStart.value.getTime();
  const endMs = rangeEnd.value.getTime();
  let target: number;
  if (event.key in moves) {
    target = (which === 'start' ? startMs : endMs) + moves[event.key];
  } else if (event.key === 'Home') {
    target = minMs;
  } else if (event.key === 'End') {
    target = maxMs;
  } else {
    return;
  }
  event.preventDefault();
  if (which === 'start') {
    updateConfig(new Date(Math.max(minMs, Math.min(target, endMs - 60000))), new Date(endMs), true);
  } else {
    updateConfig(new Date(startMs), new Date(Math.min(maxMs, Math.max(target, startMs + 60000))), true);
  }
};

// Formatierungshelfer
const formatDateTime = (date: Date): string => {
  return format.date(date, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const formatDuration = (): string => {
  const diffMs = rangeEnd.value.getTime() - rangeStart.value.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays > 0) return `${diffDays}d ${diffHours % 24}h`;
  if (diffHours > 0) return `${diffHours}h`;

  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  return `${diffMinutes}min`;
};

// Track-Geometrie helper
const getTrackRect = () => {
  return trackRef.value?.getBoundingClientRect();
};

// Zeit aus Pixel-Position berechnen
const getTimeFromPosition = (percentage: number): Date => {
  const minMs = timelineMin.value.getTime();
  const maxMs = timelineMax.value.getTime();
  return new Date(minMs + (percentage / 100) * (maxMs - minMs));
};

// Debounce timeout for updateConfig
let updateConfigTimeout: NodeJS.Timeout | null = null;

// Konfiguration aktualisieren
const updateConfig = (newStart?: Date, newEnd?: Date, immediate = false) => {
  // Wenn Start-Knob fixiert ist, immer Timeline-Minimum verwenden
  const actualStart = config.value.fixStartKnob ? timelineMin.value : (newStart || rangeStart.value);
  const actualEnd = newEnd || rangeEnd.value;

  // Validate dates before converting to ISO string
  if (!actualStart || isNaN(actualStart.getTime()) || !actualEnd || isNaN(actualEnd.getTime())) {
    console.warn('Invalid date values in updateConfig:', { actualStart, actualEnd });
    return;
  }

  const updateFn = () => {
    config.value.rangeStart = actualStart.toISOString();
    config.value.rangeEnd = actualEnd.toISOString();
    config.value.playbackSpeed = playbackSpeed.value;

    // Update variables if they are configured
    if (config.value.rangeStartVariable && variableRepository.value) {
      const startVariable = variableRepository.value.getVariable(config.value.rangeStartVariable);
      if (startVariable) {
        startVariable.value = actualStart.toISOString();
      }
    }

    if (config.value.rangeEndVariable && variableRepository.value) {
      const endVariable = variableRepository.value.getVariable(config.value.rangeEndVariable);
      if (endVariable) {
        endVariable.value = actualEnd.toISOString();
      }
    }
  };

  // Immediate update (z.B. beim Loslassen des Sliders)
  if (immediate) {
    if (updateConfigTimeout) {
      clearTimeout(updateConfigTimeout);
      updateConfigTimeout = null;
    }
    updateFn();
  } else {
    // Debounced update (während des Dragging)
    if (updateConfigTimeout) {
      clearTimeout(updateConfigTimeout);
    }
    updateConfigTimeout = setTimeout(updateFn, 300);
  }
};

// Start-Knob Drag Handler
const onStartKnobMouseDown = (event: MouseEvent) => {
  // Ignorieren wenn Start-Knob fixiert ist
  if (config.value.fixStartKnob) {
    return;
  }

  event.preventDefault();
  isDragging.value = true;

  const trackRect = getTrackRect();
  if (!trackRect) return;

  const startMouseX = event.clientX;
  const minMs = timelineMin.value.getTime();
  const maxMs = timelineMax.value.getTime();
  const timePerPixel = (maxMs - minMs) / trackRect.width;
  const initialStartMs = rangeStart.value.getTime();
  const endMs = rangeEnd.value.getTime();
  const totalRange = maxMs - minMs;

  let lastNewStartMs = initialStartMs;

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.value) return;

    const deltaPx = e.clientX - startMouseX;
    let newStartMs = initialStartMs + deltaPx * timePerPixel;

    // Grenzen einhalten: nicht über timelineMin/Max und nicht über den End-Knob
    newStartMs = Math.max(minMs, Math.min(newStartMs, endMs - 60000)); // Min 1 Minute Abstand
    lastNewStartMs = newStartMs;

    // Temporäre Positionen für smooth UI update
    const newStartPosition = Math.max(0, Math.min(100, ((newStartMs - minMs) / totalRange) * 100));
    const endPosition = Math.max(0, Math.min(100, ((endMs - minMs) / totalRange) * 100));

    tempStartPosition.value = newStartPosition;
    tempRangeStripStyle.value = {
      left: newStartPosition + '%',
      width: (endPosition - newStartPosition) + '%'
    };
  };

  const handleMouseUp = () => {
    isDragging.value = false;

    // Temporäre Positionen zurücksetzen
    tempStartPosition.value = null;
    tempRangeStripStyle.value = null;

    // Sofortiges finales Update mit der letzten berechneten Position
    updateConfig(new Date(lastNewStartMs), new Date(endMs), true);

    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
};

// End-Knob Drag Handler
const onEndKnobMouseDown = (event: MouseEvent) => {
  event.preventDefault();
  isDragging.value = true;

  const trackRect = getTrackRect();
  if (!trackRect) return;

  const startMouseX = event.clientX;
  const minMs = timelineMin.value.getTime();
  const maxMs = timelineMax.value.getTime();
  const timePerPixel = (maxMs - minMs) / trackRect.width;
  const initialEndMs = rangeEnd.value.getTime();
  const startMs = rangeStart.value.getTime();
  const totalRange = maxMs - minMs;

  let lastNewEndMs = initialEndMs;

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.value) return;

    const deltaPx = e.clientX - startMouseX;
    let newEndMs = initialEndMs + deltaPx * timePerPixel;

    // Grenzen einhalten: nicht über timelineMin/Max und nicht unter den Start-Knob
    newEndMs = Math.min(maxMs, Math.max(newEndMs, startMs + 60000)); // Min 1 Minute Abstand
    lastNewEndMs = newEndMs;

    // Temporäre Positionen für smooth UI update
    const startPosition = Math.max(0, Math.min(100, ((startMs - minMs) / totalRange) * 100));
    const newEndPosition = Math.max(0, Math.min(100, ((newEndMs - minMs) / totalRange) * 100));

    tempEndPosition.value = newEndPosition;
    tempRangeStripStyle.value = {
      left: startPosition + '%',
      width: (newEndPosition - startPosition) + '%'
    };
  };

  const handleMouseUp = () => {
    isDragging.value = false;

    // Temporäre Positionen zurücksetzen
    tempEndPosition.value = null;
    tempRangeStripStyle.value = null;

    // Sofortiges finales Update mit der letzten berechneten Position
    updateConfig(new Date(startMs), new Date(lastNewEndMs), true);

    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
};

// Range-Streifen Drag Handler (ganzen Bereich verschieben)
const onRangeStripMouseDown = (event: MouseEvent) => {
  // Wenn Start-Knob fixiert ist, nur End-Knob bewegen
  if (config.value.fixStartKnob) {
    onEndKnobMouseDown(event);
    return;
  }

  event.preventDefault();
  isDragging.value = true;

  const trackRect = getTrackRect();
  if (!trackRect) return;

  const startMouseX = event.clientX;
  const minMs = timelineMin.value.getTime();
  const maxMs = timelineMax.value.getTime();
  const timePerPixel = (maxMs - minMs) / trackRect.width;
  const initialStartMs = rangeStart.value.getTime();
  const initialEndMs = rangeEnd.value.getTime();
  const rangeDuration = initialEndMs - initialStartMs;
  const totalRange = maxMs - minMs;

  let lastNewStartMs = initialStartMs;
  let lastNewEndMs = initialEndMs;

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.value) return;

    const deltaPx = e.clientX - startMouseX;
    const deltaTime = deltaPx * timePerPixel;
    let newStartMs = initialStartMs + deltaTime;
    let newEndMs = newStartMs + rangeDuration;

    // Grenzen einhalten
    if (newStartMs < minMs) {
      newStartMs = minMs;
      newEndMs = newStartMs + rangeDuration;
    }
    if (newEndMs > maxMs) {
      newEndMs = maxMs;
      newStartMs = newEndMs - rangeDuration;
    }

    lastNewStartMs = newStartMs;
    lastNewEndMs = newEndMs;

    // Temporäre Positionen für smooth UI update
    const newStartPosition = Math.max(0, Math.min(100, ((newStartMs - minMs) / totalRange) * 100));
    const newEndPosition = Math.max(0, Math.min(100, ((newEndMs - minMs) / totalRange) * 100));

    tempStartPosition.value = newStartPosition;
    tempEndPosition.value = newEndPosition;
    tempRangeStripStyle.value = {
      left: newStartPosition + '%',
      width: (newEndPosition - newStartPosition) + '%'
    };
  };

  const handleMouseUp = () => {
    isDragging.value = false;

    // Temporäre Positionen zurücksetzen
    tempStartPosition.value = null;
    tempEndPosition.value = null;
    tempRangeStripStyle.value = null;

    // Sofortiges finales Update mit den letzten berechneten Positionen
    updateConfig(new Date(lastNewStartMs), new Date(lastNewEndMs), true);

    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
};

// Play/Pause Toggle
const togglePlay = () => {
  isPlaying.value = !isPlaying.value;
  if (isPlaying.value) {
    startPlayback();
  } else {
    stopPlayback();
  }
};

// Playback starten
const startPlayback = () => {
  const now = performance.now();
  lastUpdateTime = now;
  lastStepTime = now;
  animatePlayback();
};

// Playback stoppen
const stopPlayback = () => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
    animationFrame = null;
  }
};

// Playback-Animation
const animatePlayback = () => {
  if (!isPlaying.value) return;

  const now = performance.now();
  const deltaTime = now - lastUpdateTime;
  lastUpdateTime = now;

  // Zeit seit dem letzten Schritt akkumulieren
  const timeSinceLastStep = now - lastStepTime;
  // Schritt-Intervall basierend auf Geschwindigkeit (1000ms = 1 Schritt bei 1x)
  const stepInterval = 1000 / playbackSpeed.value;

  // Nur einen Schritt machen wenn genug Zeit vergangen ist
  if (timeSinceLastStep >= stepInterval) {
    const currentStartMs = rangeStart.value.getTime();
    const currentEndMs = rangeEnd.value.getTime();
    const rangeDuration = currentEndMs - currentStartMs;

    // Ein Schritt in StepSize-Einheiten
    const stepSizeMs = getStepSizeInMs();
    console.log('Playback step:', {
      stepSize: config.value.stepSize,
      stepSizeMs,
      currentStart: new Date(currentStartMs).toISOString(),
      currentEnd: new Date(currentEndMs).toISOString(),
      rangeDuration
    });

    const newStartMs = currentStartMs + stepSizeMs;
    const newEndMs = newStartMs + rangeDuration;

    console.log('New times:', {
      newStart: new Date(newStartMs).toISOString(),
      newEnd: new Date(newEndMs).toISOString(),
      timelineMax: timelineMax.value.toISOString()
    });

    // Stoppen wenn Ende erreicht
    if (newEndMs >= timelineMax.value.getTime()) {
      stopPlayback();
      isPlaying.value = false;
      return;
    }

    updateConfig(new Date(newStartMs), new Date(newEndMs));
    lastStepTime = now;
  }

  animationFrame = requestAnimationFrame(animatePlayback);
};

// Variable Watchers
watch(() => config.value.rangeStartVariable, (newVariable) => {
  if (newVariable && variableRepository.value) {
    const variable = variableRepository.value.getVariable(newVariable);
    if (variable) {
      rangeStartWrapper.value.setTo(variable);
    }
  }
});

watch(() => config.value.rangeEndVariable, (newVariable) => {
  if (newVariable && variableRepository.value) {
    const variable = variableRepository.value.getVariable(newVariable);
    if (variable) {
      rangeEndWrapper.value.setTo(variable);
    }
  }
});

// Watch for variable value changes
watch(() => rangeStartWrapper.value.value, (newValue) => {
  if (newValue && config.value.rangeStartVariable) {
    // Variable value changed, update config if needed
    const newDate = new Date(newValue);
    if (newDate.getTime() !== rangeStart.value.getTime()) {
      config.value.rangeStart = newValue;
    }
  }
});

watch(() => rangeEndWrapper.value.value, (newValue) => {
  if (newValue && config.value.rangeEndVariable) {
    // Variable value changed, update config if needed
    const newDate = new Date(newValue);
    if (newDate.getTime() !== rangeEnd.value.getTime()) {
      config.value.rangeEnd = newValue;
    }
  }
});

// Note: Relative time changes are handled by TimelineWidgetSettings component.
// The Widget only applies relative time on mount (for initial state).
// The Settings component is responsible for calculating and propagating the correct range values.
// No watch here to avoid race conditions where the Widget overwrites Settings' correct values.

// Initialisierung
const injectedVariableRepository = inject<VariableRepository>(variableIdentifier)

onMounted(() => {
  if (widgetId?.value) actionsRegistry.registerInstance(widgetId.value, api, 'TimelineWidget', pageId);
  // Initialize variable repository
  try {
    variableRepository.value = injectedVariableRepository ?? null;
    if (!variableRepository.value) throw new Error('VariableRepository not provided');
  } catch (error) {
    console.warn('VariableRepository not found in container:', error);
  }

  // Standard-Werte setzen falls nicht vorhanden
  if (!config.value.timelineMin) {
    config.value.timelineMin = defaultTimelineMin.toISOString();
  }
  if (!config.value.timelineMax) {
    config.value.timelineMax = defaultTimelineMax.toISOString();
  }
  if (!config.value.rangeStart) {
    config.value.rangeStart = defaultRangeStart.toISOString();
  }
  if (!config.value.rangeEnd) {
    config.value.rangeEnd = defaultRangeEnd.toISOString();
  }
  if (!config.value.playbackSpeed) {
    config.value.playbackSpeed = 1;
    playbackSpeed.value = 1;
  } else {
    playbackSpeed.value = Number(config.value.playbackSpeed);
  }

  /* No colour is written here: an empty one means the theme accent. */
  if (config.value.fixStartKnob === undefined) {
    config.value.fixStartKnob = false;
  }
  if (config.value.showTimeInfo === undefined) {
    config.value.showTimeInfo = true;
  }
  if (config.value.showControls === undefined) {
    config.value.showControls = true;
  }
  if (config.value.stepSize === undefined) {
    config.value.stepSize = 'hour';
  }

  // Initialize variable bindings if variables are configured
  if (config.value.rangeStartVariable && variableRepository.value) {
    const startVariable = variableRepository.value.getVariable(config.value.rangeStartVariable);
    if (startVariable) {
      rangeStartWrapper.value.setTo(startVariable);
    }
  }

  if (config.value.rangeEndVariable && variableRepository.value) {
    const endVariable = variableRepository.value.getVariable(config.value.rangeEndVariable);
    if (endVariable) {
      rangeEndWrapper.value.setTo(endVariable);
    }
  }

  // Apply relative time if enabled
  if (config.value.relativeTime?.enabled) {
    applyRelativeTime();
  }

  if (trackRef.value && typeof ResizeObserver !== 'undefined') {
    trackObserver = new ResizeObserver((entries) => {
      trackWidth.value = entries[0]?.contentRect.width ?? 0;
    });
    trackObserver.observe(trackRef.value);
  }
});

// Cleanup
onUnmounted(() => {
  if (widgetId?.value) actionsRegistry.unregisterInstance(widgetId.value);
  stopPlayback();
  trackObserver?.disconnect();
  trackObserver = null;
});
</script>

<style scoped>
/*
 * Every colour comes from a theme token. The one exception is --range-color,
 * the selected range: the setting rangeStripColor, or the theme accent.
 */
.timeline-widget {
  --range-color: var(--color-accent);
  --knob-size: 14px;
  --rail-height: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  height: 100%;
  box-sizing: border-box;
  padding: 10px 14px;
  font-family: var(--font-sans);
  color: var(--color-fg);
}

.timeline-container {
  position: relative;
  padding: 0 calc(var(--knob-size) / 2);
}

/* The hit area is taller than the rail, so the range is easy to grab */
.timeline-track {
  position: relative;
  height: 24px;
}

.rail {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: var(--rail-height);
  transform: translateY(-50%);
  background: var(--color-divider);
  border-radius: 999px;
}

.range-strip {
  position: absolute;
  top: 0;
  height: 100%;
  cursor: grab;
  z-index: 1;
}

.range-strip::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: var(--rail-height);
  transform: translateY(-50%);
  background: var(--range-color);
  border-radius: 999px;
  transition: height 0.15s ease;
}

.range-strip:hover::before {
  height: calc(var(--rail-height) + 2px);
}

.range-strip:active {
  cursor: grabbing;
}

.timeline-knob {
  position: absolute;
  top: 50%;
  width: var(--knob-size);
  height: var(--knob-size);
  box-sizing: border-box;
  background: var(--color-raised);
  border: 2px solid var(--range-color);
  border-radius: 50%;
  cursor: grab;
  transform: translate(-50%, -50%);
  box-shadow: var(--shadow-e1);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  z-index: 3;
}

.timeline-knob:hover {
  transform: translate(-50%, -50%) scale(1.2);
  box-shadow: var(--shadow-e2);
}

.timeline-knob:active {
  cursor: grabbing;
  transform: translate(-50%, -50%) scale(1.25);
}

.timeline-knob:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.start-knob {
  left: 0;
  z-index: 4;
}

.end-knob {
  left: 100%;
  z-index: 4;
}

.fixed-knob {
  cursor: not-allowed;
  background: var(--color-divider);
  border-color: var(--color-outline);
}

.fixed-knob:hover {
  transform: translate(-50%, -50%);
  box-shadow: var(--shadow-e1);
}

/* Axis: flat, on the widget surface */
.time-axis {
  position: relative;
  height: 20px;
}

.time-tick {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(-50%);
  pointer-events: none;
}

.time-tick--start {
  align-items: flex-start;
  transform: none;
}

.time-tick--end {
  align-items: flex-end;
  transform: translateX(-100%);
}

.tick-mark {
  width: 1px;
  height: 4px;
  background: var(--color-outline);
}

.tick-label {
  margin-top: 2px;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-variant-numeric: tabular-nums;
  line-height: 1.2;
  color: var(--color-dim);
  white-space: nowrap;
  user-select: none;
}

/* Day and year boundaries stand out from clock times */
.time-tick--date .tick-mark,
.time-tick--year .tick-mark {
  height: 6px;
  background: var(--color-dim);
}

.time-tick--date .tick-label,
.time-tick--year .tick-label {
  color: var(--color-fg);
}

.time-info {
  display: flex;
  gap: 16px;
  padding-top: 8px;
  border-top: 1px solid var(--color-divider);
}

.time-display {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
}

.time-label {
  font-size: var(--text-xs);
  color: var(--color-dim);
}

.time-value {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-variant-numeric: tabular-nums;
  color: var(--color-fg);
  overflow-wrap: anywhere;
}

.controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.play-button {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 1px solid var(--color-outline);
  border-radius: 50%;
  background: var(--color-raised);
  color: var(--range-color);
  cursor: pointer;
  box-shadow: var(--shadow-e1);
  transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.play-button:hover:not(:disabled) {
  border-color: var(--range-color);
}

.play-button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.play-button.playing {
  background: var(--range-color);
  border-color: var(--range-color);
  color: var(--color-onAccent);
}

.play-button:disabled {
  color: var(--color-dim);
  cursor: not-allowed;
  box-shadow: none;
  opacity: 0.6;
}

.speed-control :deep(.field) {
  margin-bottom: 0;
  align-items: center;
}

.speed-control :deep(.field__label) {
  width: auto;
  font-size: var(--text-xs);
}

@media (max-width: 768px) {
  .time-info {
    flex-direction: column;
    gap: 8px;
  }

  .timeline-widget {
    --knob-size: 18px;
  }
}
</style>
