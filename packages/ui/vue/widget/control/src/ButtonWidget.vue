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
import { toRefs } from 'vue'
import type { ButtonSettings } from './gen/ButtonSettings'
import { ButtonSettingsImpl } from './gen/ButtonSettingsImpl'
import { ButtonWidgetInterface } from './api/ButtonWidgetInterface'
import { useControl } from './support/useControl'

const props = defineProps<{ datasourceId?: string; id?: string }>()
const { id: widgetId } = toRefs(props)

const config = defineModel<ButtonSettings>('configv', { required: true })

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

const { held, label, color, textColor, fontSize, disabled, put, variableOf, write, send } = useControl(
  config,
  widgetId,
  {
    type: 'ButtonWidget',
    wrapped: { target: '', value: '' },
    create: () => new ButtonSettingsImpl(),
    api,
  },
)

/* -------------------------------------------------------------- press */

/*
 * A press writes only where the target follows a variable; left without
 * one, the button only sends its event.
 */
function press(): void {
  if (disabled.value) return
  const value = held('value')
  const variable = variableOf('target')
  const previousValue = variable ? variable.value : undefined
  if (variable) write(value)
  send('click', value, previousValue)
}
</script>

<template>
  <div class="control-button">
    <button
      type="button"
      class="control-button__face"
      :disabled="disabled"
      :style="{ background: color, color: textColor, fontSize }"
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
  transition: filter 0.15s ease, box-shadow 0.05s ease;
}

.control-button__face:hover:not(:disabled) {
  filter: brightness(1.08);
}

/*
 * Pressed is shown by shade alone. A shifted face - translateY - is a
 * layout change: on a face filling the wrapper's scrolling content it
 * pushed past the edge and showed a scrollbar for the length of a click.
 */
.control-button__face:active:not(:disabled) {
  filter: brightness(0.9);
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.35);
}

.control-button__face:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
