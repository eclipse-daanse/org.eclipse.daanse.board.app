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
 * A button: a press sends `click` and, where the button is given a
 * variable, writes a fixed value into it.
 *
 * The variable is the one the `target` wrapper follows. Writing goes to
 * that variable, never to the wrapper: a value written into a wrapper by
 * hand releases its binding, and the button would write into itself.
 */
import { computed, inject, onMounted, onUnmounted, toRaw, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { useEObject, VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import type { TinyEmitter } from 'tiny-emitter'
import { EVENT_ACTIONS_REGISTRY, type EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.api.events'
import type { ButtonSettings } from './gen/ButtonSettings'
import { ButtonSettingsImpl } from './gen/ButtonSettingsImpl'
import { ControlPayloadImpl } from './gen/ControlPayloadImpl'
import { ButtonWidgetInterface } from './api/ButtonWidgetInterface'

const WIDGET_TYPE = 'ButtonWidget'

const props = defineProps<{ datasourceId?: string; id?: string }>()
const { id: widgetId } = toRefs(props)

const config = defineModel<ButtonSettings>('configv', { required: true })

/*
 * The settings, watched rather than read off the model prop (#1203): a
 * replaced wrapper is an eSet on this instance, which only an adapter on
 * the instance itself hears. A value written into a wrapper reaches the
 * button through wrapperReactivity.
 */
const settings = useEObject<ButtonSettings>(() => config.value)

const eventBus = inject<TinyEmitter>(identifiers.TINY_EMITTER)!
const actionsRegistry = inject<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY)!
const route = useRoute()
const pageId = (route.params.pageid as string) || ''

/* ------------------------------------------------------------ settings */

/* Every wrapped setting with the value the model gives it. */
const WRAPPED: Record<string, string> = {
  label: '',
  color: '#2563eb',
  textColor: '#ffffff',
  disabled: 'false',
  target: '',
  value: '',
}

/*
 * A board stores a wrapper as plain JSON - an object with a `value` and no
 * methods - and one never set is missing. Both are made into wrappers here,
 * once, rather than guarded at every read.
 */
function wrap(held: unknown, fallback: string): VariableWrapper<string> {
  if (held instanceof VariableWrapper) return held
  if (held && typeof held === 'object' && 'value' in (held as any)) {
    const made = new VariableWrapper((held as any).value)
    if ((held as any).variable) made.variable = (held as any).variable
    return made
  }
  return new VariableWrapper(held === undefined || held === null ? fallback : String(held))
}

/** What a wrapper holds, whatever shape it arrived in. */
function held(key: keyof ButtonSettings): string {
  const slot = (settings.value as any)?.[key]
  const value = slot && typeof slot === 'object' && 'value' in slot ? slot.value : slot
  return value === undefined || value === null ? '' : String(value)
}

const label = computed(() => held('label'))
const color = computed(() => held('color') || WRAPPED.color)
const textColor = computed(() => held('textColor') || WRAPPED.textColor)
const disabled = computed(() => held('disabled').trim().toLowerCase() === 'true')

/*
 * Writes into a wrapper's own value, which is what an action is for.
 *
 * On the raw instance: whoever handed the settings in may have handed a
 * reactive proxy of them, and a write through it reaches the wrapper's
 * adapters as proxies too, which breaks them.
 */
function put(key: keyof ButtonSettings, value: string): void {
  const own = toRaw(config.value) as any
  const slot = toRaw(own?.[key])
  if (slot instanceof VariableWrapper) slot.value = value
  else own[key] = new VariableWrapper(value)
}

/* -------------------------------------------------------------- press */

/** The variable a press writes into, while the target follows one. */
function targetVariable(): { value: unknown } | undefined {
  const target = (settings.value as any)?.target
  return target instanceof VariableWrapper ? target.reference : undefined
}

function press(): void {
  if (disabled.value) return
  const value = held('value')
  const variable = targetVariable()
  const previousValue = variable ? variable.value : undefined
  if (variable) variable.value = value

  if (!widgetId?.value) return
  const payload = new ControlPayloadImpl()
  payload.widgetId = widgetId.value
  payload.timestamp = Date.now()
  payload.value = value
  payload.previousValue = previousValue
  const type = `widget:${WIDGET_TYPE}:click`
  eventBus.emit(type, { type, widgetId: widgetId.value, payload })
}

/* ------------------------------------------------------------ actions */

class ButtonWidgetApi extends ButtonWidgetInterface {
  setValue(value: string): void {
    put('value', String(value ?? ''))
  }

  setLabel(label: string): void {
    put('label', String(label ?? ''))
  }

  enable(): void {
    put('disabled', 'false')
  }

  disable(): void {
    put('disabled', 'true')
  }
}
const api = new ButtonWidgetApi()
defineExpose<ButtonWidgetInterface>(api)

onMounted(() => {
  if (widgetId?.value) actionsRegistry.registerInstance(widgetId.value, api, WIDGET_TYPE, pageId)
  if (!config.value) config.value = new ButtonSettingsImpl()
  for (const [key, fallback] of Object.entries(WRAPPED)) {
    ;(config.value as any)[key] = wrap((config.value as any)[key], fallback)
  }
})

onUnmounted(() => {
  if (widgetId?.value) actionsRegistry.unregisterInstance(widgetId.value)
})
</script>

<template>
  <div class="control-button">
    <button
      type="button"
      class="control-button__face"
      :disabled="disabled"
      :style="{ background: color, color: textColor }"
      @click="press"
    >
      {{ label }}
    </button>
  </div>
</template>

<style scoped>
.control-button {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  box-sizing: border-box;
}

.control-button__face {
  flex: 1;
  min-width: 0;
  min-height: 0;
  border: none;
  border-radius: 6px;
  padding: 0.4em 1em;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: filter 0.15s ease, transform 0.05s ease;
}

.control-button__face:hover:not(:disabled) {
  filter: brightness(1.08);
}

.control-button__face:active:not(:disabled) {
  transform: translateY(1px);
  filter: brightness(0.95);
}

.control-button__face:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
