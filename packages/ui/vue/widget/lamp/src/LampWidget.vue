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
 * A lamp: a fixture on the board that is on or off, dimmed, in a colour or
 * a colour temperature (#1242).
 *
 * Its light falls outside its frame, but the lamp does not draw it: it
 * announces the light on the event bus and the light layer of the layout
 * draws it onto the page, following the widget wherever it is moved. The
 * lamp only draws the fixture itself.
 *
 * What it shows is read from its settings, so a variable bound to one of
 * them drives the lamp; a datasource field, where one is named, says the
 * last word. A press switches it - into the variable `on` follows, if it
 * follows one - and the actions do the same for each part of the state.
 * It sends clicked on a press and stateChanged whenever its state changed,
 * from whatever source, each with the whole state.
 */
import { computed, inject, onMounted, onUnmounted, ref, toRaw, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { TinyEmitter } from 'tiny-emitter'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import helpers from 'org.eclipse.daanse.board.app.lib.utils.helpers'
import {
  useDatasourceRepository,
  useEObject,
  useTranslation,
  VariableWrapper,
} from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { EVENT_ACTIONS_REGISTRY, type EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import {
  ANNOUNCE_LIGHT,
  LIGHTS_WANTED,
  WITHDRAW_LIGHT,
  type LightSourceSpec,
  type WithdrawLightEvent,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import type { LampSettings } from './gen/LampSettings'
import { LampSettingsImpl } from './gen/LampSettingsImpl'
import { LampPayloadImpl } from './gen/LampPayloadImpl'
import { LampWidgetInterface } from './api/LampWidgetInterface'
import {
  FIXTURES,
  WRAPPED,
  clamp,
  lightColorOf,
  numberOf,
  sameState,
  stateFromSource,
  switchOf,
  textOf,
  wrap,
  type Fixture,
  type LampState,
} from './support/lampState'

const TYPE = 'LampWidget'

const props = defineProps<{ datasourceId?: string; id?: string }>()
const { id: widgetId } = toRefs(props)
const datasourceId = computed(() => props.datasourceId ?? '')

const config = defineModel<LampSettings>('configv', { required: true })

/* Watched rather than read off the model prop (#1203). */
const settings = useEObject<LampSettings>(() => config.value)

const eventBus = inject<TinyEmitter>(identifiers.TINY_EMITTER)!
const actionsRegistry = inject<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY)!
const route = useRoute()
const pageId = (route?.params?.pageid as string) || ''
const { t } = useTranslation()

const data = ref<unknown>(null)
const { update } = useDatasourceRepository(datasourceId, 'object', data)
watch(datasourceId, (now, before) => update(now, before))

/* ------------------------------------------------------------ state */

/** What a setting holds, whatever shape it arrived in. */
const held = (key: keyof LampSettings & string): string => textOf((settings.value as any)?.[key])
const number = (key: keyof LampSettings & string) => numberOf(held(key), Number(WRAPPED[key]))

/* The state as the settings - and the variables they follow - have it */
const settingState = computed<LampState>(() => ({
  on: switchOf(held('on')) ?? false,
  brightness: clamp(number('brightness'), 0, 100),
  color: held('color').trim(),
  colorTemperature: number('colorTemperature'),
}))

/* The datasource's word on it, where a field is named */
const sourceValue = computed(() => {
  const field = held('stateField').trim()
  if (!field || data.value === null || data.value === undefined) return undefined
  return helpers.widget.getValueByPath(data.value, field)
})

const state = computed<LampState>(() => stateFromSource(sourceValue.value, settingState.value))
const lightColor = computed(() => lightColorOf(state.value))

const fixture = computed<Fixture>(() => {
  const given = held('fixture').trim().toLowerCase()
  return (FIXTURES as readonly string[]).includes(given) ? (given as Fixture) : 'bulb'
})

/* ------------------------------------------------------------ writing */

/*
 * Writes a setting: into the variable its wrapper follows, or into the
 * wrapper's own value where it follows none. A value written into a bound
 * wrapper by hand would release its binding (see the control widgets).
 * On the raw instance: a write through a reactive proxy reaches the
 * wrapper's adapters as proxies, which breaks them.
 */
function write(key: keyof LampSettings & string, value: string | number | boolean): void {
  const own = toRaw(config.value) as any
  if (!own) return
  const slot = toRaw(own[key])
  const variable = slot instanceof VariableWrapper ? (slot.reference as { value: unknown } | undefined) : undefined
  if (variable) variable.value = value
  else if (slot instanceof VariableWrapper) slot.value = String(value)
  else own[key] = new VariableWrapper(String(value))
}

/** Sends one of the lamp's events with its whole state. */
function send(event: 'clicked' | 'stateChanged'): void {
  if (!widgetId?.value) return
  const payload = new LampPayloadImpl()
  payload.widgetId = widgetId.value
  payload.timestamp = Date.now()
  payload.on = state.value.on
  payload.brightness = state.value.brightness
  payload.color = state.value.color
  payload.colorTemperature = state.value.colorTemperature
  payload.lightColor = lightColor.value
  const type = `widget:${TYPE}:${event}`
  eventBus.emit(type, { type, widgetId: widgetId.value, payload })
}

/* Whatever changed it - a press, an action, a variable, the source */
watch(state, (now, before) => {
  if (!sameState(now, before)) send('stateChanged')
})

class LampWidgetApi extends LampWidgetInterface {
  turnOn(): void {
    write('on', true)
  }
  turnOff(): void {
    write('on', false)
  }
  toggle(): void {
    write('on', !state.value.on)
  }
  setBrightness(brightness: number): void {
    write('brightness', clamp(numberOf(brightness, state.value.brightness), 0, 100))
  }
  setColor(color: string): void {
    write('color', String(color ?? '').trim())
  }
  setColorTemperature(kelvin: number): void {
    write('colorTemperature', clamp(numberOf(kelvin, state.value.colorTemperature), 1000, 40000))
  }
}
const api = new LampWidgetApi()
defineExpose<LampWidgetInterface>(api)

function press(): void {
  send('clicked')
  api.toggle()
}

/* ------------------------------------------------------------ light */

const light = computed<LightSourceSpec | undefined>(() => {
  if (!widgetId?.value) return undefined
  return {
    widgetId: widgetId.value,
    on: state.value.on && state.value.brightness > 0,
    x: clamp(number('originX'), 0, 100) / 100,
    y: clamp(number('originY'), 0, 100) / 100,
    radius: Math.max(0, number('radius')),
    color: lightColor.value,
    intensity: state.value.brightness / 100,
    shape: held('lightShape').trim().toLowerCase() === 'cone' ? 'cone' : 'round',
    direction: number('direction'),
    angle: number('angle'),
    lightsWidgets: switchOf(held('lightsWidgets')) ?? false,
  }
})

function announce(): void {
  if (light.value) eventBus.emit(ANNOUNCE_LIGHT, light.value)
}

watch(light, announce)

onMounted(() => {
  if (widgetId?.value) actionsRegistry.registerInstance(widgetId.value, api, TYPE, pageId)
  if (!config.value) config.value = new LampSettingsImpl()
  for (const [key, fallback] of Object.entries(WRAPPED)) {
    ;(config.value as any)[key] = wrap((config.value as any)[key], fallback)
  }
  eventBus.on(LIGHTS_WANTED, announce)
  announce()
})

onUnmounted(() => {
  eventBus.off(LIGHTS_WANTED, announce)
  if (widgetId?.value) {
    actionsRegistry.unregisterInstance(widgetId.value)
    eventBus.emit(WITHDRAW_LIGHT, { widgetId: widgetId.value } satisfies WithdrawLightEvent)
  }
})

/* ------------------------------------------------------------ look */

/* The glass glows in the light's colour, as strong as the lamp is bright */
const look = computed<Record<string, string>>(() => ({
  '--lamp-light': lightColor.value,
  '--lamp-glow': String(state.value.on ? 0.25 + 0.75 * (state.value.brightness / 100) : 0),
}))
</script>

<template>
  <div class="lamp" :class="[`lamp--${fixture}`, { 'lamp--on': state.on }]" :style="look">
    <button
      type="button"
      role="switch"
      class="lamp__switch"
      :aria-checked="state.on"
      :aria-label="t('lamp:Widget.lamp')"
      :title="state.on ? t('lamp:State.on') : t('lamp:State.off')"
      @click="press"
    >
      <svg class="lamp__fixture" viewBox="0 0 100 100" aria-hidden="true">
        <template v-if="fixture === 'bulb'">
          <path class="lamp__glass" d="M50 8 C29 8 18 24 18 40 C18 54 29 61 35 70 L65 70 C71 61 82 54 82 40 C82 24 71 8 50 8 Z" />
          <rect class="lamp__body" x="36" y="72" width="28" height="7" rx="2" />
          <rect class="lamp__body" x="38" y="81" width="24" height="6" rx="2" />
          <rect class="lamp__body" x="43" y="89" width="14" height="5" rx="2" />
        </template>
        <template v-else-if="fixture === 'spot'">
          <rect class="lamp__body" x="44" y="6" width="12" height="20" rx="3" />
          <path class="lamp__body" d="M28 30 L72 30 L80 70 L20 70 Z" />
          <ellipse class="lamp__glass" cx="50" cy="72" rx="30" ry="9" />
        </template>
        <template v-else-if="fixture === 'strip'">
          <rect class="lamp__body" x="4" y="38" width="92" height="24" rx="12" />
          <rect class="lamp__glass" x="10" y="44" width="80" height="12" rx="6" />
        </template>
        <template v-else>
          <rect class="lamp__body" x="47" y="0" width="6" height="28" />
          <path class="lamp__body" d="M14 64 C14 42 30 28 50 28 C70 28 86 42 86 64 Z" />
          <ellipse class="lamp__glass" cx="50" cy="66" rx="30" ry="8" />
        </template>
      </svg>
    </button>
  </div>
</template>

<style scoped>
/* The tile stays transparent: only the fixture is drawn, and the light is the layer's. */
.lamp {
  --lamp-off: color-mix(in srgb, var(--color-fg, #dfe8ef) 22%, transparent);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: visible;
  background: transparent;
}

.lamp__switch {
  width: 100%;
  height: 100%;
  padding: 4px;
  border: none;
  background: transparent;
  cursor: pointer;
}

.lamp__switch:focus-visible {
  outline: 2px solid var(--color-primary, #4fa3d1);
  outline-offset: 2px;
}

.lamp__fixture {
  width: 100%;
  height: 100%;
  overflow: visible;
}

.lamp__body {
  fill: color-mix(in srgb, var(--color-fg, #dfe8ef) 55%, transparent);
}

.lamp__glass {
  fill: var(--lamp-off);
  stroke: color-mix(in srgb, var(--color-fg, #dfe8ef) 40%, transparent);
  stroke-width: 1.5;
  transition: fill 0.2s ease, filter 0.2s ease;
}

.lamp--on .lamp__glass {
  fill: var(--lamp-light);
  fill-opacity: var(--lamp-glow);
  filter: drop-shadow(0 0 6px var(--lamp-light));
}

@media (prefers-reduced-motion: reduce) {
  .lamp__glass {
    transition: none;
  }
}
</style>
