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
 * A toggle button: on or off, drawn as a switch - a pill-shaped track whose
 * round thumb slides from one end to the other, the label beside it. A
 * press turns it to the other state, writes that state's value and sends
 * `change`.
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

const { settings, held, current, label, color, look, disabled, put, write, operate } = useControl(config, widgetId, {
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
const labelLeft = computed(() => String((settings.value as any)?.labelSide ?? '').toLowerCase() === 'left')
/* The track wears the state. Unset, on takes the theme's accent and off a muted shade of its text. */
const onColor = computed(() => colourOf(held('onColor'), FORMER_DEFAULTS.onColor))
const shownColor = computed(() =>
  on.value ? onColor.value || 'var(--control-face)' : color.value || 'var(--control-off)',
)

function press(): void {
  operate(on.value ? offValue.value : onValue.value)
}
</script>

<template>
  <div class="control-toggle" :style="look">
    <button
      type="button"
      role="switch"
      class="control-toggle__switch"
      :class="{ 'control-toggle__switch--on': on, 'control-toggle__switch--label-left': labelLeft }"
      :aria-checked="on"
      :disabled="disabled"
      @click="press"
    >
      <span class="control-toggle__track" :style="{ background: shownColor }" aria-hidden="true">
        <span class="control-toggle__thumb"></span>
      </span>
      <span v-if="shownLabel" class="control-toggle__label">{{ shownLabel }}</span>
    </button>
  </div>
</template>

<style scoped>
/* The tile stays transparent: only the switch and its label are drawn, centred. */
.control-toggle {
  --control-off: color-mix(in srgb, var(--color-fg, #dfe8ef) 30%, transparent);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  box-sizing: border-box;
  overflow: hidden;
  background: transparent;
}

/* The whole of it takes the press, label included, as a native switch does. */
.control-toggle__switch {
  max-width: 100%;
  display: inline-flex;
  align-items: center;
  gap: 0.6em;
  padding: 0.2em;
  border: none;
  border-radius: 0.4em;
  background: transparent;
  color: var(--control-ink);
  font: inherit;
  font-weight: 600;
  line-height: 1.2;
  cursor: pointer;
}

.control-toggle__switch--label-left {
  flex-direction: row-reverse;
}

/* Its height follows the font size: everything below is in em. */
.control-toggle__track {
  --thumb: 1.1em;
  --inset: 0.2em;
  position: relative;
  flex: none;
  width: 2.6em;
  height: calc(var(--thumb) + 2 * var(--inset));
  border-radius: 999px;
  transition: background-color 0.18s ease;
}

.control-toggle__thumb {
  position: absolute;
  top: var(--inset);
  left: var(--inset);
  width: var(--thumb);
  height: var(--thumb);
  border-radius: 50%;
  background: var(--control-ground);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
  transition: transform 0.18s ease;
}

/*
 * On, the thumb stands at the far end: the track's width less a thumb and
 * both insets. It is light there: a dark thumb on the accent reads as a
 * hole. Not the theme's on-accent, which is dark in the dark theme.
 */
.control-toggle__switch--on .control-toggle__thumb {
  transform: translateX(calc(2.6em - var(--thumb) - 2 * var(--inset)));
  background: #ffffff;
}

.control-toggle__label {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.control-toggle__switch:hover:not(:disabled) .control-toggle__track {
  filter: brightness(1.08);
}

/* Shade only: a moved face would change the layout (see the button). */
.control-toggle__switch:active:not(:disabled) .control-toggle__track {
  filter: brightness(0.9);
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.35);
}

.control-toggle__switch:focus-visible {
  outline: 2px solid var(--control-face);
  outline-offset: 2px;
}

.control-toggle__switch:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

@media (prefers-reduced-motion: reduce) {
  .control-toggle__track,
  .control-toggle__thumb {
    transition: none;
  }
}
</style>
