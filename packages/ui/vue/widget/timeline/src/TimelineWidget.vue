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
  <div class="timeline-widget">
    <!-- Timeline Slider Container -->
    <div class="timeline-container">
      <!-- Timeline Track -->
      <div class="timeline-track" ref="trackRef" :style="timelineTrackStyle">
        <!-- Transparenter Range-Streifen mit Knobs -->
        <div
          class="range-strip"
          :style="rangeStripStyle"
          @mousedown="onRangeStripMouseDown"
          :title="config.fixStartKnob ? 'Timeline-Bereich (Start fixiert)' : 'Timeline-Bereich - ziehen zum Verschieben'"
        >
          <!-- Linker Knob (Start) -->
          <div
            v-if="!config.fixStartKnob"
            class="timeline-knob start-knob"
            @mousedown.stop="onStartKnobMouseDown"
            title="Startzeit"
          ></div>
          <div
            v-else
            class="timeline-knob start-knob fixed-knob"
            title="Startzeit (fixiert)"
          ></div>

          <!-- Rechter Knob (Ende) -->
          <div
            class="timeline-knob end-knob"
            @mousedown.stop="onEndKnobMouseDown"
            title="Endzeit"
          ></div>
        </div>
      </div>

      <!-- Zeitbereich-Display unterhalb des Sliders -->
      <div class="time-axis">
        <div
          v-for="tick in timeAxisTicks"
          :key="tick.timestamp"
          class="time-tick"
          :style="{ left: tick.position + '%' }"
        >
          <div class="tick-mark"></div>
          <div class="tick-label">{{ tick.label }}</div>
        </div>
      </div>
    </div>

    <!-- Aktueller Zeitbereich-Info -->
    <div v-if="config.showTimeInfo !== false" class="time-info">
      <div class="time-display">
        <span class="time-label">Start:</span>
        <span class="time-value">{{ formatDateTime(rangeStart) }}</span>
      </div>
      <div class="time-display">
        <span class="time-label">Ende:</span>
        <span class="time-value">{{ formatDateTime(rangeEnd) }}</span>
      </div>
      <div class="time-display">
        <span class="time-label">Dauer:</span>
        <span class="time-value">{{ formatDuration() }}</span>
      </div>
    </div>

    <!-- Play-Button und Geschwindigkeits-Kontrolle -->
    <div v-if="config.showControls !== false" class="controls">
      <button
        class="play-button"
        :class="{ 'playing': isPlaying }"
        :style="playButtonStyle"
        @click="togglePlay"
        :disabled="isAtEnd"
      >
        <svg v-if="!isPlaying" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z"/>
        </svg>
        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
        </svg>
      </button>

      <div class="speed-control">
        <label>Geschwindigkeit:</label>
        <select v-model="playbackSpeed">
          <option value="0.25">0.25x</option>
          <option value="0.5">0.5x</option>
          <option value="1">1x</option>
          <option value="2">2x</option>
          <option value="4">4x</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted, inject, watch } from 'vue';
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

const props = defineProps<{ datasourceId: string }>();
const config = defineModel<TimelineSettings>('configv', { required: true });

// Variable Support
const variableRepository = ref<VariableRepository | null>(null);
const rangeStartWrapper = ref(new VariableWrapper<string>(''));
const rangeEndWrapper = ref(new VariableWrapper<string>(''));

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

// Style für den transparenten Streifen zwischen den Knobs
const rangeStripStyle = computed(() => {
  if (tempRangeStripStyle.value) {
    return {
      ...tempRangeStripStyle.value,
      background: getRangeStripColor(0.5),
      borderColor: config.value.rangeStripColor || '#d17600'
    };
  }
  return {
    left: startKnobPosition.value + '%',
    width: (endKnobPosition.value - startKnobPosition.value) + '%',
    background: getRangeStripColor(0.5),
    borderColor: config.value.rangeStripColor || '#d17600'
  };
});

// Helper für Range-Strip-Farbe mit Transparenz
const getRangeStripColor = (opacity: number): string => {
  const color = config.value.rangeStripColor || '#d17600';
  // Konvertiere Hex zu RGBA
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

// Style für Timeline-Track (Delta-berechnet basierend auf Range-Strip Farbe)
const timelineTrackStyle = computed(() => {
  const baseColor = config.value.rangeStripColor || '#d17600';
  const trackColor = calculateTrackColor(baseColor);
  return {
    backgroundColor: trackColor
  };
});

// Berechne Track-Farbe als hellere Variante der Range-Strip Farbe
const calculateTrackColor = (hexColor: string): string => {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  // Hellere Variante: 40% heller, aber nicht über 255
  const deltaFactor = 0.6; // 60% zum Weiß hin
  const lightR = Math.min(255, Math.round(r + (255 - r) * deltaFactor));
  const lightG = Math.min(255, Math.round(g + (255 - g) * deltaFactor));
  const lightB = Math.min(255, Math.round(b + (255 - b) * deltaFactor));

  return `rgb(${lightR}, ${lightG}, ${lightB})`;
};

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

// Style für Play-Button basierend auf RangeStripColor
const playButtonStyle = computed(() => {
  const baseColor = config.value.rangeStripColor || '#d17600';
  const playingColor = calculatePlayingColor(baseColor);

  return {
    '--play-button-bg': baseColor,
    '--play-button-playing': playingColor
  };
});

// Berechne Playing-Farbe als dunklere/wärmere Variante
const calculatePlayingColor = (hexColor: string): string => {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  // Dunklere und etwas rötlichere Variante für "Playing" State
  const darkenFactor = 0.8; // 20% dunkler
  const warmFactor = 1.1;   // Leicht wärmer (mehr rot)

  const darkR = Math.min(255, Math.round(r * darkenFactor * warmFactor));
  const darkG = Math.round(g * darkenFactor);
  const darkB = Math.round(b * darkenFactor);

  return `rgb(${darkR}, ${darkG}, ${darkB})`;
};

// Prüfung ob Ende erreicht
const isAtEnd = computed(() => {
  return rangeEnd.value.getTime() >= timelineMax.value.getTime();
});

// Zeitachse mit formatierten Ticks
const timeAxisTicks = computed(() => {
  const ticks: Array<{timestamp: string, position: number, label: string}> = [];
  const minMs = timelineMin.value.getTime();
  const maxMs = timelineMax.value.getTime();
  const totalRange = maxMs - minMs;
  const tickCount = 8; // Anzahl der Ticks

  for (let i = 0; i <= tickCount; i++) {
    const tickMs = minMs + (totalRange / tickCount) * i;
    const tickDate = new Date(tickMs);
    const position = (i / tickCount) * 100;

    const label = tickDate.toLocaleString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });

    ticks.push({
      timestamp: tickDate.toISOString(),
      position,
      label
    });
  }

  return ticks;
});

// Formatierungshelfer
const formatDateTime = (date: Date): string => {
  return date.toLocaleString('de-DE', {
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
    config.value = {
      ...config.value,
      rangeStart: actualStart.toISOString(),
      rangeEnd: actualEnd.toISOString(),
      playbackSpeed: playbackSpeed.value
    };

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
onMounted(() => {
  // Initialize variable repository
  try {
    variableRepository.value = container.get<VariableRepository>(variableIdentifier);
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
    playbackSpeed.value = config.value.playbackSpeed;
  }

  // Farbe und Verhalten initialisieren
  if (!config.value.rangeStripColor) {
    config.value.rangeStripColor = '#d17600';
  }
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
});

// Cleanup
onUnmounted(() => {
  stopPlayback();
});
</script>

<style scoped>
/* Timeline Widget Hauptcontainer */
.timeline-widget {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

}

/* Timeline Container mit Slider und Zeitachse */
.timeline-container {
  overflow: hidden;
  position: relative;
  background: var(--va-background-primary);
  border: 1px solid var(--va-background-border);
  border-radius: 8px;
  padding: 1rem;
  min-height: 80px;
}

/* Timeline Track (Slider-Bereich) */
.timeline-track {
  position: relative;
  height: 40px;
  /* background wird via computed style gesetzt */
  border-radius: 20px;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

/* Transparenter Range-Streifen zwischen den Knobs */
.range-strip {
  position: absolute;
  top: 0;
  height: 100%;
  /* background und border werden via computed style gesetzt */
  border-width: 1px;
  border-style: solid;
  border-radius: 20px;
  cursor: grab;
  transition: background-color 0.2s ease, border-color 0.2s ease;
  z-index: 1;
}

.range-strip:hover {
  filter: brightness(1.1);
}

.range-strip:active {
  cursor: grabbing;
}

/* Timeline Knobs (Start und Ende) - relativ zum Range-Strip positioniert */
.timeline-knob {
  position: absolute;
  top: 50%;
  width: 24px;
  height: 24px;
  background: var(--va-primary);
  border: 3px solid white;
  border-radius: 50%;
  cursor: grab;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  z-index: 3;
}

.timeline-knob:hover {
  background: var(--va-primary-dark);
  transform: translate(-50%, -50%) scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.timeline-knob:active {
  cursor: grabbing;
  transform: translate(-50%, -50%) scale(1.2);
}

.start-knob {
  left: 0;
  z-index: 4;
}

.fixed-knob {
  cursor: not-allowed !important;
  opacity: 0.7;
}

.fixed-knob:hover {
  transform: translate(-50%, -50%) !important;
  background: var(--va-background-border) !important;
}

.end-knob {
  right: -24px;
  z-index: 4;
}

/* Zeitachse unterhalb des Sliders */
.time-axis {
  position: relative;
  height: 30px;
  background: var(--va-background-secondary);
  border-top: 1px solid var(--va-background-border);
  border-radius: 0 0 8px 8px;
  margin: 0 -1rem -1rem -1rem;
  padding: 0 1rem;
}

/* Zeit-Ticks auf der Zeitachse */
.time-tick {
  position: absolute;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(-50%);
  pointer-events: none;
  z-index: 2;
}

.tick-mark {
  width: 1px;
  height: 8px;
  background: var(--va-text-secondary);
  margin-top: 2px;
}

.tick-label {
  font-size: 0.7rem;
  color: var(--va-text-secondary);
  margin-top: 4px;
  white-space: nowrap;
  user-select: none;
}

/* Zeitbereich-Info */
.time-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-size: 0.9rem;
  background: var(--va-background-primary);
  border: 1px solid var(--va-background-border);
  border-radius: 6px;
  padding: 0.75rem;
}

.time-display {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
  text-align: center;
}

.time-label {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--va-text-secondary);
}

.time-value {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--va-text-primary);
  word-wrap: break-word;
}

/* Kontrollen (Play-Button und Geschwindigkeit) */
.controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.play-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  background: var(--play-button-bg, var(--va-primary));
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.play-button:hover:not(:disabled) {
  background: var(--va-primary-dark);
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.play-button:disabled {
  background: var(--va-background-border);
  color: var(--va-text-secondary);
  cursor: not-allowed;
  transform: none;
}

.play-button.playing {
  background: var(--play-button-playing, #ff6b35);
  animation: pulse 2s infinite;
}

.play-button.playing:hover {
  filter: brightness(0.9);
}

@keyframes pulse {
  0% { box-shadow: 0 2px 8px var(--play-button-bg, rgba(255, 107, 53, 0.4)); }
  50% { box-shadow: 0 4px 16px var(--play-button-bg, rgba(255, 107, 53, 0.8)); }
  100% { box-shadow: 0 2px 8px var(--play-button-bg, rgba(255, 107, 53, 0.4)); }
}

.speed-control {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.speed-control label {
  font-weight: 500;
  color: var(--va-text-primary);
  min-width: fit-content;
}

.speed-control select {
  padding: 0.5rem;
  border: 1px solid var(--va-background-border);
  border-radius: 4px;
  background: var(--va-background-primary);
  color: var(--va-text-primary);
  font-size: 0.9rem;
  cursor: pointer;
}

/* Responsive Design */
@media (max-width: 768px) {
  .time-info {
    flex-direction: column;
    gap: 0.75rem;
  }

  .time-display {
    text-align: left;
  }

  .controls {
    flex-direction: column;
    gap: 0.75rem;
  }

  .timeline-knob {
    width: 28px;
    height: 28px;
  }

  .tick-label {
    font-size: 0.6rem;
  }

  .timeline-container {
    min-height: 70px;
  }

  .timeline-track {
    height: 35px;
  }
}
</style>
