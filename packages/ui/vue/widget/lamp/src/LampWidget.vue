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
 * A light source: on or off, dimmed, in a colour or a colour temperature
 * (#1242). It is no picture on the board - a page whose background is a
 * photo of a room gets its light where the room's lamps are.
 *
 * The lamp does not draw its light: it announces it on the event bus and
 * the light layer of the layout draws it onto the page, from the centre of
 * the widget, following it wherever it is moved. While the board is shown
 * the widget itself draws nothing and takes no pointer (its provider is
 * frameless); while it is edited it shows a marker, so it can be found,
 * placed, sized and selected.
 *
 * Its state is read from its settings, so a variable bound to one of them
 * drives the lamp; a datasource field, where one is named, says the last
 * word. The actions write into the variable a setting follows, if it
 * follows one. It sends stateChanged whenever its state changed, from
 * whatever source, with the whole state.
 */
import { computed, inject, onMounted, onUnmounted, ref, toRaw, toRefs, watch } from 'vue'
import { WIDGET_EDIT_MODE } from 'org.eclipse.daanse.board.app.lib.api.widget'
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
  WRAPPED,
  clamp,
  lightColorOf,
  numberOf,
  sameState,
  stateFromSource,
  switchOf,
  textOf,
  wrap,
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
/* Outside a wrapper - in a test, say - the board is not edited */
const editMode = inject<{ readonly value: boolean } | undefined>(WIDGET_EDIT_MODE, undefined)
const editing = computed(() => Boolean(editMode?.value))

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
function send(event: 'stateChanged'): void {
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

/* Whatever changed it - an action, a variable, the source */
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

/* ------------------------------------------------------------ light */

const light = computed<LightSourceSpec | undefined>(() => {
  if (!widgetId?.value) return undefined
  /* Empty: the widget's size decides, which only the layer knows */
  const radius = numberOf(held('radius'), 0)
  return {
    widgetId: widgetId.value,
    on: state.value.on && state.value.brightness > 0,
    radius: radius > 0 ? radius : undefined,
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

/* ------------------------------------------------------------ marker */

/* While it is edited the marker wears the light's colour, dimmed when it is off */
const look = computed<Record<string, string>>(() => ({
  '--lamp-light': lightColor.value,
}))
</script>

<template>
  <!-- Shown, nothing: only the light on the page. Edited, a marker to place it by -->
  <div class="lamp" :class="{ 'lamp--editing': editing, 'lamp--on': state.on }" :style="look">
    <div
      v-if="editing"
      class="lamp__marker"
      role="img"
      :aria-label="t('lamp:Marker.label')"
      :title="state.on ? t('lamp:Marker.on') : t('lamp:Marker.off')"
    >
      <span class="lamp__dot"></span>
    </div>
  </div>
</template>

<style scoped>
.lamp {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: transparent;
  pointer-events: none;
}

/* The widget's box, so its size - the light's reach - can be judged */
.lamp--editing {
  pointer-events: auto;
  border: 1px dashed color-mix(in srgb, var(--color-fg, #dfe8ef) 55%, transparent);
  border-radius: 50%;
}

.lamp__marker {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* The centre the light starts from */
.lamp__dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid var(--color-fg, #dfe8ef);
  background: color-mix(in srgb, var(--lamp-light) 35%, transparent);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-bg, #121820) 70%, transparent);
}

.lamp--on .lamp__dot {
  background: var(--lamp-light);
}
</style>
