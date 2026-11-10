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
 * A button group: one button per option.
 *
 * Taking one, a press chooses its option and writes its value. Taking
 * several, a press adds its option or takes it away again, and what is
 * written is the list of the chosen values in the order of the options.
 *
 * The options are the listed ones, then those the widget's source gives -
 * a list found at a path in its answer, each item shown by one field and
 * written by another. What is chosen is read from the target, so a
 * variable changed elsewhere changes the choice too.
 */
import { computed, toRefs } from 'vue'
import type { ButtonGroupSettings } from './gen/ButtonGroupSettings'
import { ButtonGroupSettingsImpl } from './gen/ButtonGroupSettingsImpl'
import { ButtonGroupWidgetInterface } from './api/ButtonGroupWidgetInterface'
import { rawOf, sameValue, textOf, useControl } from './support/useControl'
import { useOptions, type Option } from './support/useOptions'

const props = defineProps<{ datasourceId?: string; id?: string }>()
const { id: widgetId } = toRefs(props)
const datasourceId = computed(() => props.datasourceId ?? '')

const config = defineModel<ButtonGroupSettings>('configv', { required: true })

class ButtonGroupWidgetApi extends ButtonGroupWidgetInterface {
  setValue(value: unknown): void {
    write(multiple.value ? chosenIn(value) : value)
  }

  enable(): void {
    put('disabled', 'false')
  }

  disable(): void {
    put('disabled', 'true')
  }
}
const api = new ButtonGroupWidgetApi()
defineExpose<ButtonGroupWidgetInterface>(api)

/* No name stands in for an empty label: the label is a heading above the options, and none is wanted by default. */
const { settings, held, current, label, look, disabled, put, write, operate } = useControl(config, widgetId, {
  type: 'ButtonGroupWidget',
  wrapped: { target: '', optionsPath: '', optionLabel: '', optionValue: '' },
  create: () => new ButtonGroupSettingsImpl(),
  api,
})

const multiple = computed(() => (settings.value as any)?.multiple === true)

/* --------------------------------------------------------------- options */

const { options } = useOptions(settings, held, datasourceId)

/* ---------------------------------------------------------------- choice */

/*
 * What a variable holding several values holds, as a list: a list as it
 * is, text as JSON where it is a JSON list, else split at commas.
 */
function chosenIn(held: unknown): unknown[] {
  const value = rawOf(held)
  if (Array.isArray(value)) return value
  const text = textOf(value).trim()
  if (!text) return []
  if (text.startsWith('[')) {
    try {
      const parsed = JSON.parse(text)
      if (Array.isArray(parsed)) return parsed
    } catch {
      /* not JSON - taken as a list of words below */
    }
  }
  return text.split(',').map((each) => each.trim()).filter(Boolean)
}

const chosen = computed<unknown[]>(() => {
  if (multiple.value) return chosenIn(current())
  const value = current()
  return value === undefined || value === null || textOf(value) === '' ? [] : [value]
})

const isChosen = (option: Option) => chosen.value.some((each) => sameValue(each, option.value))

function press(option: Option): void {
  if (!multiple.value) {
    operate(option.value)
    return
  }
  const next = options.value
    .filter((each) => (each === option ? !isChosen(each) : isChosen(each)))
    .map((each) => each.value)
  operate(next)
}
</script>

<template>
  <div class="control-group" :style="look">
    <span v-if="label" class="control-group__label">{{ label }}</span>
    <div
      class="control-group__options"
      :role="multiple ? 'group' : 'radiogroup'"
      :aria-label="label || undefined"
    >
      <button
        v-for="(option, index) in options"
        :key="index"
        type="button"
        class="control-group__option"
        :class="{ 'control-group__option--chosen': isChosen(option) }"
        :role="multiple ? undefined : 'radio'"
        :aria-checked="multiple ? undefined : isChosen(option)"
        :aria-pressed="multiple ? isChosen(option) : undefined"
        :disabled="disabled"
        :style="isChosen(option) && option.color ? { '--control-face': option.color } : undefined"
        @click="press(option)"
      >
        {{ option.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.control-group {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3em;
  box-sizing: border-box;
  overflow: hidden;
}

.control-group__label {
  color: var(--color-fg, inherit);
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.control-group__options {
  flex: 0 1 auto;
  min-height: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 0;
}

/* One face, divided: the colour outlines every option and fills the chosen ones. */
.control-group__option {
  flex: 1 1 auto;
  min-width: 0;
  border: 2px solid var(--control-face);
  margin-left: -2px;
  padding: 0.5em 1em;
  line-height: 1.2;
  background: transparent;
  color: var(--control-face);
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: filter 0.15s ease, box-shadow 0.05s ease, background-color 0.15s ease;
}

.control-group__option:first-child {
  margin-left: 0;
  border-radius: 0.45em 0 0 0.45em;
}

.control-group__option:last-child {
  border-radius: 0 0.45em 0.45em 0;
}

.control-group__option:only-child {
  border-radius: 0.45em;
}

.control-group__option--chosen {
  background: var(--control-face);
  color: var(--control-on-face);
}

.control-group__option:hover:not(:disabled) {
  filter: brightness(1.08);
}

/* Shade only: a moved face would change the layout (see the button). */
.control-group__option:active:not(:disabled) {
  filter: brightness(0.9);
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.35);
}

.control-group__option:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
