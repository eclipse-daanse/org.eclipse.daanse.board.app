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
 * With named detents the scale is theirs instead: they stand evenly along
 * the track in the order listed, the thumb stops only on them, the badge
 * shows the label of the one it stands on, and what is written is that
 * detent's value. The inputs then run over the detents' positions, 0 to
 * the last; everything below that says "position" means that.
 *
 * Every value the thumb comes to is written; `change` is throttled while
 * dragging and says what the variable held before the burst it covers.
 * Letting go sends `release`.
 */
import { computed, onUnmounted, toRefs } from 'vue'
import type { SliderSettings } from './gen/SliderSettings'
import { SliderSettingsImpl } from './gen/SliderSettingsImpl'
import { SliderWidgetInterface } from './api/SliderWidgetInterface'
import { listOf, numberOf, sameValue, textOf, useControl } from './support/useControl'

const props = defineProps<{ datasourceId?: string; id?: string }>()
const { id: widgetId } = toRefs(props)

const config = defineModel<SliderSettings>('configv', { required: true })

/* How often change goes out while a thumb is dragged. */
const THROTTLE_MS = 100

class SliderWidgetApi extends SliderWidgetInterface {
  setValue(value: number): void {
    const at = positionOf(value)
    if (at !== null) write(valueAt(at), 'target')
  }

  setRange(lower: number, upper: number): void {
    const low = positionOf(lower)
    const high = positionOf(upper)
    if (low === null || high === null) return
    write(valueAt(Math.min(low, high)), 'target')
    write(valueAt(Math.max(low, high)), 'upperTarget')
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

const { settings, held, current, label, look, disabled, put, write, send } = useControl(config, widgetId, {
  type: 'SliderWidget',
  wrapped: { target: '', upperTarget: '', min: '0', max: '100', step: '1', unit: '', markEvery: '' },
  create: () => new SliderSettingsImpl(),
  api,
  nameKey: 'control:Default.slider',
})

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

/* ------------------------------------------------------------ detents */

interface Detent {
  label: string
  value: unknown
  color: string
}

/* A detent's value as the variable gets it: a number where it reads as one, else as typed. */
const NUMBER = /^-?\d+(\.\d+)?$/
const typed = (text: string): unknown => (NUMBER.test(text.trim()) ? Number(text) : text)

const detents = computed<Detent[]>(() =>
  listOf((settings.value as any)?.detents).map((each: any) => {
    const value = textOf(each?.value)
    return { label: textOf(each?.label) || value, value: typed(value), color: textOf(each?.color) }
  }),
)
const detented = computed(() => detents.value.length > 0)

/* The inputs' scale: the detents' positions, or min to max. */
const low = computed(() => (detented.value ? 0 : min.value))
const high = computed(() => (detented.value ? Math.max(1, detents.value.length - 1) : max.value))

/*
 * The detent a value names: the one holding it, else - for a number - the
 * nearest by value. Null where it names none.
 */
function detentOf(held: unknown): number | null {
  const exact = detents.value.findIndex((each) => sameValue(each.value, held))
  if (exact >= 0) return exact
  const wanted = parseFloat(textOf(held))
  if (!Number.isFinite(wanted)) return null
  let best: number | null = null
  detents.value.forEach((each, at) => {
    if (typeof each.value !== 'number') return
    if (best === null || Math.abs(each.value - wanted) < Math.abs((detents.value[best].value as number) - wanted)) best = at
  })
  return best
}

/* What a position writes: its detent's value, or the number itself. */
const valueAt = (at: number): unknown => (detented.value ? detents.value[at]?.value : at)

/* The position a value written from elsewhere - an action - puts the thumb at. */
function positionOf(value: unknown): number | null {
  return detented.value ? detentOf(value) : place(Number(value))
}

const marks = computed<Mark[]>(() => {
  if (detented.value) return detents.value.map((each, at) => ({ at, label: each.label }))
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
  if (detented.value) return Math.min(detents.value.length - 1, Math.max(0, Math.round(value)))
  const clamped = Math.min(max.value, Math.max(min.value, value))
  if (snap.value && marks.value.length) {
    return marks.value.reduce((best, each) => (Math.abs(each.at - clamped) < Math.abs(best - clamped) ? each.at : best), marks.value[0].at)
  }
  const steps = Math.round((clamped - min.value) / step.value)
  return round(Math.min(max.value, min.value + steps * step.value))
}

/** Where on the track a value is, 0 to 100. */
const percent = (value: number) => ((value - low.value) / (high.value - low.value)) * 100

/* -------------------------------------------------------------- values */

/* Where a thumb stands: at the variable's number, or its detent; the fallback where it holds none. */
function shown(key: 'target' | 'upperTarget', fallback: number): number {
  if (detented.value) return detentOf(current(key)) ?? fallback
  const parsed = parseFloat(textOf(current(key)))
  return Number.isFinite(parsed) ? Math.min(max.value, Math.max(min.value, parsed)) : fallback
}

const lower = computed(() => shown('target', low.value))
const upper = computed(() => (ranged.value ? shown('upperTarget', high.value) : lower.value))

const fillFrom = computed(() => (ranged.value ? percent(Math.min(lower.value, upper.value)) : 0))
const fillTo = computed(() => percent(ranged.value ? Math.max(lower.value, upper.value) : lower.value))

/* What a badge says: the detent's label, or the number with its unit. */
const format = (value: number) =>
  detented.value
    ? (detents.value[value]?.label ?? '')
    : `${value.toFixed(decimals.value)}${unit.value ? ` ${unit.value}` : ''}`

/* Where along the track something stands: from the left, or from the bottom where vertical. */
const along = (value: number) => (vertical.value ? { bottom: `${percent(value)}%` } : { left: `${percent(value)}%` })

/*
 * Which way a mark's label runs from its tick: the first starts at it and
 * the last ends at it, so neither spills past the tile's edge; the others
 * stand centred on their tick. A lone mark runs inward from the end it is
 * nearer.
 */
function edgeOf(index: number): 'start' | 'end' | undefined {
  const count = marks.value.length
  if (count === 1) return percent(marks.value[0].at) < 50 ? 'start' : 'end'
  if (index === 0) return 'start'
  if (index === count - 1) return 'end'
  return undefined
}

/* One badge per thumb, standing on it. */
/* The colour of the detent the (lower) thumb stands on, where it has one. */
const detentColor = computed(() => (detented.value ? detents.value[lower.value]?.color || '' : ''))

const badges = computed(() => {
  const thumbs = [{ thumb: 'lower', at: lower.value }]
  if (ranged.value) thumbs.push({ thumb: 'upper', at: upper.value })
  return thumbs.map((each) => ({ ...each, text: format(each.at) }))
})

/* ------------------------------------------------------------- operate */

/* The payload's value: a number, or for a range the pair. */
const valueNow = () => (ranged.value ? [valueAt(lower.value), valueAt(upper.value)] : valueAt(lower.value))

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
  write(valueAt(at), key)

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
    :class="{
      'control-slider--vertical': vertical,
      'control-slider--disabled': disabled,
      'control-slider--valued': showValue,
    }"
    :style="[look, detentColor ? { '--control-face': detentColor } : {}]"
  >
    <div v-if="label" class="control-slider__head">
      <span class="control-slider__label">{{ label }}</span>
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
          <!-- The value stands on its thumb and goes where the thumb goes. -->
          <template v-if="showValue">
            <span
              v-for="badge in badges"
              :key="badge.thumb"
              class="control-slider__value"
              :data-thumb="badge.thumb"
              :style="along(badge.at)"
            >{{ badge.text }}</span>
          </template>
        </div>
        <input
          class="control-slider__input"
          type="range"
          step="any"
          :min="low"
          :max="high"
          :value="lower"
          :aria-valuetext="format(lower)"
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
          :min="low"
          :max="high"
          :value="upper"
          :aria-valuetext="format(upper)"
          :disabled="disabled"
          :aria-label="label || undefined"
          :aria-orientation="vertical ? 'vertical' : 'horizontal'"
          data-thumb="upper"
          @input="moved('upperTarget', $event)"
          @change="released"
        />
      </div>
      <!-- Under the track, or beside it where vertical: a tick at each mark, its label below. -->
      <div v-if="marks.length" class="control-slider__marks" aria-hidden="true">
        <span
          v-for="(mark, index) in marks"
          :key="mark.at"
          class="control-slider__mark"
          :class="edgeOf(index) && `control-slider__mark--${edgeOf(index)}`"
          :style="along(mark.at)"
        ><span class="control-slider__tick"></span><span class="control-slider__mark-label">{{ mark.label }}</span></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Everything is in em: the thumb, the track, the badge and the marks grow with the font size. */
.control-slider {
  --thumb: 1.1em;
  --rail: 0.3em;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3em;
  padding: 0.4em 0.6em;
  box-sizing: border-box;
  overflow: hidden;
  color: var(--color-fg, inherit);
}

.control-slider__head {
  display: flex;
  white-space: nowrap;
}

.control-slider__label {
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
}

.control-slider__body {
  position: relative;
  display: flex;
  flex-direction: column;
}

/* Room above the track for the badge standing on the thumb. */
.control-slider--valued .control-slider__body {
  padding-top: 1.8em;
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
  top: calc(50% - var(--rail) / 2);
  height: var(--rail);
  border-radius: calc(var(--rail) / 2);
}

.control-slider__rail::before {
  left: 0;
  right: 0;
  background: color-mix(in srgb, var(--color-fg, #dfe8ef) 22%, transparent);
}

.control-slider__fill {
  background: var(--control-face);
}

/* The badge: centred over its thumb, a small pointer down to it. */
.control-slider__value {
  position: absolute;
  bottom: calc(100% + 0.35em);
  transform: translateX(-50%);
  padding: 0.1em 0.45em;
  border-radius: 0.3em;
  background: var(--control-face);
  color: var(--control-on-face);
  font-size: 0.85em;
  font-weight: 600;
  line-height: 1.3;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  pointer-events: none;
}

.control-slider__value::after {
  content: '';
  position: absolute;
  top: 100%;
  left: calc(50% - 0.3em);
  border: 0.3em solid transparent;
  border-top-color: var(--control-face);
  border-bottom: none;
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
  background: var(--control-face);
  border: 2px solid var(--control-ground);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  cursor: grab;
  pointer-events: auto;
}

.control-slider__input::-moz-range-thumb {
  width: var(--thumb);
  height: var(--thumb);
  border-radius: 50%;
  background: var(--control-face);
  border: 2px solid var(--control-ground);
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
  outline: 2px solid var(--control-face);
  outline-offset: 2px;
}

/* The marks: as wide as the rail, so a mark stands where the thumb's centre does at its value. */
.control-slider__marks {
  position: relative;
  height: 1.6em;
  margin: 0.15em calc(var(--thumb) / 2) 0;
}

.control-slider__mark {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(-50%);
}

/* The first and last stay inside the tile: the label runs from the tick inward. */
.control-slider__mark--start {
  align-items: flex-start;
  transform: none;
}

.control-slider__mark--end {
  align-items: flex-end;
  transform: translateX(-100%);
}

.control-slider__tick {
  width: 1px;
  height: 0.4em;
  background: currentColor;
  opacity: 0.5;
}

.control-slider__mark-label {
  font-size: 0.8em;
  line-height: 1.2;
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

.control-slider--vertical .control-slider__body {
  flex: 1;
  min-height: 0;
  flex-direction: row;
  justify-content: center;
}

/* Room left of the track for the badge, which stands beside its thumb. */
.control-slider--vertical.control-slider--valued .control-slider__body {
  padding-top: 0;
  padding-left: 4em;
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
  left: calc(50% - var(--rail) / 2);
  width: var(--rail);
  height: auto;
}

.control-slider--vertical .control-slider__rail::before {
  top: 0;
  bottom: 0;
}

.control-slider--vertical .control-slider__value {
  bottom: auto;
  right: calc(100% + 0.35em);
  transform: translateY(50%);
}

.control-slider--vertical .control-slider__value::after {
  top: calc(50% - 0.3em);
  left: 100%;
  border: 0.3em solid transparent;
  border-left-color: var(--control-face);
  border-right: none;
}

/* Bottom to top: low at the bottom, as a fader runs. */
.control-slider--vertical .control-slider__input {
  writing-mode: vertical-lr;
  direction: rtl;
}

/* Beside the track: a tick pointing at the mark, its label right of it. */
.control-slider--vertical .control-slider__marks {
  height: auto;
  min-width: 2em;
  margin: calc(var(--thumb) / 2) 0 calc(var(--thumb) / 2) 0.15em;
}

.control-slider--vertical .control-slider__mark {
  top: auto;
  left: 0;
  flex-direction: row;
  gap: 0.25em;
  transform: translateY(50%);
}

/* Bottom and top: the lowest label sits on its tick, the highest hangs from it. */
.control-slider--vertical .control-slider__mark--start {
  align-items: flex-end;
  transform: none;
}

.control-slider--vertical .control-slider__mark--end {
  align-items: flex-start;
  transform: translateY(100%);
}

.control-slider--vertical .control-slider__tick {
  width: 0.4em;
  height: 1px;
}
</style>
