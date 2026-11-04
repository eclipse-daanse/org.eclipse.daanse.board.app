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
 * A toggle button: on or off. A press turns it to the other state, writes
 * that state's value and sends `change`.
 *
 * What it shows is read from the target, so a variable changed elsewhere
 * turns the toggle too. On is whatever equals the on value; anything else,
 * the off value included, is off.
 */
import { computed, toRefs } from 'vue'
import type { ToggleSettings } from './gen/ToggleSettings'
import { ToggleSettingsImpl } from './gen/ToggleSettingsImpl'
import { ToggleWidgetInterface } from './api/ToggleWidgetInterface'
import { colourOf, FORMER_DEFAULTS, sameValue, useControl } from './support/useControl'

const props = defineProps<{ datasourceId?: string; id?: string }>()
const { id: widgetId } = toRefs(props)

const config = defineModel<ToggleSettings>('configv', { required: true })

/* true and false are meant as booleans; anything else as it is typed. */
function typed(text: string): unknown {
  if (text === 'true') return true
  if (text === 'false') return false
  return text
}

class ToggleWidgetApi extends ToggleWidgetInterface {
  setValue(on: boolean): void {
    const wanted = on === true || String(on).toLowerCase() === 'true'
    write(wanted ? onValue.value : offValue.value)
  }

  enable(): void {
    put('disabled', 'false')
  }

  disable(): void {
    put('disabled', 'true')
  }
}
const api = new ToggleWidgetApi()
defineExpose<ToggleWidgetInterface>(api)

const { held, current, label, color, look, disabled, put, write, operate } = useControl(config, widgetId, {
  type: 'ToggleWidget',
  wrapped: { target: '', onValue: 'true', offValue: 'false', onLabel: '', onColor: '' },
  create: () => new ToggleSettingsImpl(),
  api,
  nameKey: 'control:Default.toggle',
})

const onValue = computed(() => typed(held('onValue')))
const offValue = computed(() => typed(held('offValue')))
const on = computed(() => sameValue(current(), onValue.value))

const shownLabel = computed(() => (on.value && held('onLabel')) || label.value)
/* Unset, on takes the theme's accent and off a muted shade of the text. */
const onColor = computed(() => colourOf(held('onColor'), FORMER_DEFAULTS.onColor))
const shownColor = computed(() =>
  on.value ? onColor.value || 'var(--control-face)' : color.value || 'var(--control-off)',
)

function press(): void {
  operate(on.value ? offValue.value : onValue.value)
}
</script>

<template>
  <div class="control-toggle">
    <button
      type="button"
      class="control-toggle__face"
      :class="{ 'control-toggle__face--on': on }"
      :aria-pressed="on"
      :disabled="disabled"
      :style="[look, { background: shownColor }]"
      @click="press"
    >
      <span class="control-toggle__lamp" aria-hidden="true"></span>
      <span class="control-toggle__label">{{ shownLabel }}</span>
    </button>
  </div>
</template>

<style scoped>
.control-toggle {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  box-sizing: border-box;
}

.control-toggle__face {
  --control-off: color-mix(in srgb, var(--color-fg, #dfe8ef) 30%, transparent);
  flex: 1;
  color: var(--control-on-face);
  min-width: 0;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border: none;
  border-radius: 6px;
  padding: 0.4em 1em;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  transition: filter 0.15s ease, box-shadow 0.05s ease, background-color 0.15s ease;
}

.control-toggle__label {
  overflow: hidden;
  text-overflow: ellipsis;
}

/* The state at a glance, whatever colours were chosen: a lamp that is lit while on. */
.control-toggle__lamp {
  flex: none;
  width: 0.6em;
  height: 0.6em;
  border-radius: 50%;
  border: 2px solid currentColor;
  opacity: 0.6;
}

.control-toggle__face--on .control-toggle__lamp {
  background: currentColor;
  opacity: 1;
}

.control-toggle__face:hover:not(:disabled) {
  filter: brightness(1.08);
}

/* Shade only: a moved face would change the layout (see the button). */
.control-toggle__face:active:not(:disabled) {
  filter: brightness(0.9);
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.35);
}

.control-toggle__face:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
