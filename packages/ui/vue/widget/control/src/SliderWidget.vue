<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<script setup lang="ts">
/**
 * A slider: a number between min and max, written into a variable while it
 * is dragged.
 *
 * Built on native range inputs, so keyboard and screen readers work as
 * they do everywhere. They take any value; where the thumb may stand is
 * decided here - on the step grid, or with marks and snap on the nearest
 * mark, the detents - and the input is put back there at once.
 *
 * A range is two inputs over one track, the lower writing into target, the
 * upper into upperTarget; neither passes the other.
 *
 * Every value the thumb comes to is written; `change` is throttled while
 * dragging and says what the variable held before the burst it covers.
 * Letting go sends `release`.
 */
import { computed, onUnmounted, toRefs } from 'vue'
import type { SliderSettings } from './gen/SliderSettings'
import { SliderSettingsImpl } from './gen/SliderSettingsImpl'
import { SliderWidgetInterface } from './api/SliderWidgetInterface'
import { listOf, numberOf, textOf, useControl } from './support/useControl'

const props = defineProps<{ datasourceId?: string; id?: string }>()
const { id: widgetId } = toRefs(props)

const config = defineModel<SliderSettings>('configv', { required: true })

/* How often change goes out while a thumb is dragged. */
const THROTTLE_MS = 100

class SliderWidgetApi extends SliderWidgetInterface {
  setValue(value: number): void {
    const at = place(Number(value))
    if (at !== null) write(at, 'target')
  }

  setRange(lower: number, upper: number): void {
    const low = place(Number(lower))
    const high = place(Number(upper))
    if (low === null || high === null) return
    write(Math.min(low, high), 'target')
    write(Math.max(low, high), 'upperTarget')
  }

  enable(): void {
    put('disabled', 'false')
  }

  disable(): void {
    put('disabled', 'true')
  }
}
const api = new SliderWidgetApi()
defineExpose<SliderWidgetInterface>(api)

const { settings, held, current, label, color, textColor, fontSize, disabled, put, write, send } = useControl(
  config,
  widgetId,
  {
    type: 'SliderWidget',
    wrapped: { target: '', upperTarget: '', min: '0', max: '100', step: '1', unit: '', markEvery: '' },
    create: () => new SliderSettingsImpl(),
    api,
  },
)

/* ---------------------------------------------------------------- scale */

const plain = (key: string): unknown => (settings.value as any)?.[key]

const min = computed(() => numberOf(plain('min'), 0))
const max = computed(() => {
  const given = numberOf(plain('max'), 100)
  return given > min.value ? given : min.value + 1
})
const step = computed(() => {
  const given = numberOf(plain('step'), 1)
  return given > 0 ? given : 1
})
const ranged = computed(() => plain('range') === true)
const vertical = computed(() => String(plain('orientation') ?? '').toLowerCase() === 'vertical')
const snap = computed(() => plain('snap') !== false)
const showValue = computed(() => plain('showValue') !== false)
const unit = computed(() => held('unit'))

/* As many decimals as the step has, so 0.1 + 0.2 shows as 0.3. */
const decimals = computed(() => (String(step.value).split('.')[1] ?? '').length)
const round = (value: number) => Number(value.toFixed(decimals.value))

interface Mark {
  at: number
  label: string
}

const marks = computed<Mark[]>(() => {
  const found = new Map<number, string>()
  const every = numberOf(plain('markEvery'), 0)
  if (every > 0) {
    const distance = every * step.value
    for (let at = min.value; at <= max.value + 1e-9; at += distance) found.set(round(at), String(round(at)))
  }
  for (const each of listOf((settings.value as any)?.marks)) {
    const at = parseFloat(textOf((each as any)?.at))
    if (!Number.isFinite(at) || at < min.value || at > max.value) continue
    found.set(at, textOf((each as any)?.label) || String(at))
  }
  return [...found.entries()].map(([at, text]) => ({ at, label: text })).sort((a, b) => a.at - b.at)
})

/** Where a value may stand: on the nearest mark where it snaps, else on the step grid. Null for no number. */
function place(value: number): number | null {
  if (!Number.isFinite(value)) return null
  const clamped = Math.min(max.value, Math.max(min.value, value))
  if (snap.value && marks.value.length) {
    return marks.value.reduce((best, each) => (Math.abs(each.at - clamped) < Math.abs(best - clamped) ? each.at : best), marks.value[0].at)
  }
  const steps = Math.round((clamped - min.value) / step.value)
  return round(Math.min(max.value, min.value + steps * step.value))
}

/** Where on the track a value is, 0 to 100. */
const percent = (value: number) => ((value - min.value) / (max.value - min.value)) * 100

/* -------------------------------------------------------------- values */

/* What a thumb shows: the variable's number, placed; min where it holds none. */
function shown(key: 'target' | 'upperTarget', fallback: number): number {
  const parsed = parseFloat(textOf(current(key)))
  return Number.isFinite(parsed) ? Math.min(max.value, Math.max(min.value, parsed)) : fallback
}

const lower = computed(() => shown('target', min.value))
const upper = computed(() => (ranged.value ? shown('upperTarget', max.value) : lower.value))

const fillFrom = computed(() => (ranged.value ? percent(Math.min(lower.value, upper.value)) : 0))
const fillTo = computed(() => percent(ranged.value ? Math.max(lower.value, upper.value) : lower.value))

const format = (value: number) => `${value.toFixed(decimals.value)}${unit.value ? ` ${unit.value}` : ''}`
const valueText = computed(() =>
  ranged.value ? `${format(lower.value)} – ${format(upper.value)}` : format(lower.value),
)

/* ------------------------------------------------------------- operate */

/* The payload's value: a number, or for a range the pair. */
const valueNow = () => (ranged.value ? [lower.value, upper.value] : lower.value)

/* The value before the burst of moves the next change covers. */
let before: unknown = undefined
let sentAt = 0
let timer: ReturnType<typeof setTimeout> | undefined

function announce(): void {
  timer = undefined
  sentAt = Date.now()
  const previousValue = before
  before = undefined
  send('change', valueNow(), previousValue)
}

function moved(key: 'target' | 'upperTarget', event: Event): void {
  const input = event.target as HTMLInputElement
  const thumbBefore = key === 'target' ? lower.value : upper.value
  if (disabled.value) {
    input.value = String(thumbBefore)
    return
  }
  let at = place(input.valueAsNumber)
  if (at === null) return
  /* Neither thumb of a range passes the other. */
  if (ranged.value && key === 'target') at = Math.min(at, upper.value)
  if (ranged.value && key === 'upperTarget') at = Math.max(at, lower.value)
  input.value = String(at)
  if (at === thumbBefore) return

  if (before === undefined) before = valueNow()
  write(at, key)

  const wait = THROTTLE_MS - (Date.now() - sentAt)
  if (wait <= 0) announce()
  else if (!timer) timer = setTimeout(announce, wait)
}

function released(): void {
  if (disabled.value) return
  if (timer) {
    clearTimeout(timer)
    announce()
  }
  send('release', valueNow(), undefined)
}

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})
</script>

<template>
  <div
    class="control-slider"
    :class="{ 'control-slider--vertical': vertical, 'control-slider--disabled': disabled }"
    :style="{ fontSize, '--control-color': color, '--control-text': textColor }"
  >
    <div v-if="label || showValue" class="control-slider__head">
      <span class="control-slider__label">{{ label }}</span>
      <span v-if="showValue" class="control-slider__value">{{ valueText }}</span>
    </div>

    <div class="control-slider__body">
      <div class="control-slider__track">
        <!-- Inset by half a thumb: that is where a native thumb's centre runs from and to. -->
        <div class="control-slider__rail">
          <div
            class="control-slider__fill"
            :style="vertical
              ? { bottom: `${fillFrom}%`, height: `${fillTo - fillFrom}%` }
              : { left: `${fillFrom}%`, width: `${fillTo - fillFrom}%` }"
          ></div>
          <span
            v-for="mark in marks"
            :key="mark.at"
            class="control-slider__tick"
            :style="vertical ? { bottom: `${percent(mark.at)}%` } : { left: `${percent(mark.at)}%` }"
          ></span>
        </div>
        <input
          class="control-slider__input"
          type="range"
          step="any"
          :min="min"
          :max="max"
          :value="lower"
          :disabled="disabled"
          :aria-label="label || undefined"
          :aria-orientation="vertical ? 'vertical' : 'horizontal'"
          data-thumb="lower"
          @input="moved('target', $event)"
          @change="released"
        />
        <input
          v-if="ranged"
          class="control-slider__input"
          type="range"
          step="any"
          :min="min"
          :max="max"
          :value="upper"
          :disabled="disabled"
          :aria-label="label || undefined"
          :aria-orientation="vertical ? 'vertical' : 'horizontal'"
          data-thumb="upper"
          @input="moved('upperTarget', $event)"
          @change="released"
        />
      </div>
      <div v-if="marks.length" class="control-slider__marks">
        <span
          v-for="mark in marks"
          :key="mark.at"
          class="control-slider__mark"
          :style="vertical ? { bottom: `${percent(mark.at)}%` } : { left: `${percent(mark.at)}%` }"
        >{{ mark.label }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.control-slider {
  --thumb: 1.1em;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4em;
  padding: 0.4em;
  box-sizing: border-box;
  overflow: hidden;
}

.control-slider__head {
  display: flex;
  justify-content: space-between;
  gap: 0.5em;
  white-space: nowrap;
}

.control-slider__label {
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
}

.control-slider__value {
  padding: 0 0.4em;
  border-radius: 4px;
  background: var(--control-color);
  color: var(--control-text);
  font-variant-numeric: tabular-nums;
}

.control-slider__body {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.2em;
}

.control-slider__track {
  position: relative;
  height: var(--thumb);
}

.control-slider__rail {
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(var(--thumb) / 2);
  right: calc(var(--thumb) / 2);
}

/* The rail and its filled part, drawn here: two inputs would each fill from the start. */
.control-slider__rail::before,
.control-slider__fill {
  content: '';
  position: absolute;
  top: calc(50% - 0.15em);
  height: 0.3em;
  border-radius: 0.15em;
}

.control-slider__rail::before {
  left: 0;
  right: 0;
  background: color-mix(in srgb, var(--control-color) 20%, #d1d5db);
}

.control-slider__fill {
  background: var(--control-color);
}

.control-slider__tick {
  position: absolute;
  top: calc(50% - 0.35em);
  width: 2px;
  height: 0.7em;
  margin-left: -1px;
  background: currentColor;
  opacity: 0.45;
}

.control-slider__input {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  background: transparent;
  appearance: none;
  -webkit-appearance: none;
  /* Only the thumbs take the pointer, so either thumb of a range can be caught. */
  pointer-events: none;
}

.control-slider__input::-webkit-slider-runnable-track {
  background: transparent;
  border: none;
}

.control-slider__input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--thumb);
  height: var(--thumb);
  border-radius: 50%;
  background: var(--control-color);
  border: 2px solid #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  cursor: grab;
  pointer-events: auto;
}

.control-slider__input::-moz-range-thumb {
  width: var(--thumb);
  height: var(--thumb);
  border-radius: 50%;
  background: var(--control-color);
  border: 2px solid #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  cursor: grab;
  pointer-events: auto;
}

.control-slider__input::-moz-range-track {
  background: transparent;
}

/* Pressed is shown by shade, as on the button: nothing moves but the thumb itself. */
.control-slider__input:active::-webkit-slider-thumb {
  cursor: grabbing;
  filter: brightness(0.9);
}

.control-slider__input:focus-visible::-webkit-slider-thumb {
  outline: 2px solid var(--control-color);
  outline-offset: 2px;
}

.control-slider__marks {
  position: relative;
  height: 1.2em;
  margin: 0 calc(var(--thumb) / 2);
}

.control-slider__mark {
  position: absolute;
  font-size: 0.8em;
  transform: translateX(-50%);
  white-space: nowrap;
  opacity: 0.8;
}

.control-slider--disabled {
  opacity: 0.5;
}

.control-slider--disabled .control-slider__input::-webkit-slider-thumb {
  cursor: not-allowed;
}

/* ------------------------------------------------------------ vertical */

.control-slider--vertical {
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
}

.control-slider--vertical .control-slider__head {
  flex-direction: column;
  justify-content: center;
  order: 2;
}

.control-slider--vertical .control-slider__body {
  flex-direction: row;
  flex: none;
}

.control-slider--vertical .control-slider__track {
  height: auto;
  width: var(--thumb);
}

.control-slider--vertical .control-slider__rail {
  left: 0;
  right: 0;
  top: calc(var(--thumb) / 2);
  bottom: calc(var(--thumb) / 2);
}

.control-slider--vertical .control-slider__rail::before,
.control-slider--vertical .control-slider__fill {
  top: auto;
  left: calc(50% - 0.15em);
  width: 0.3em;
  height: auto;
}

.control-slider--vertical .control-slider__rail::before {
  top: 0;
  bottom: 0;
}

.control-slider--vertical .control-slider__tick {
  top: auto;
  left: calc(50% - 0.35em);
  width: 0.7em;
  height: 2px;
  margin: 0 0 -1px 0;
}

/* Bottom to top: low at the bottom, as a fader runs. */
.control-slider--vertical .control-slider__input {
  writing-mode: vertical-lr;
  direction: rtl;
}

.control-slider--vertical .control-slider__marks {
  height: auto;
  width: auto;
  min-width: 2em;
  margin: calc(var(--thumb) / 2) 0;
}

.control-slider--vertical .control-slider__mark {
  transform: translateY(50%);
}
</style>
