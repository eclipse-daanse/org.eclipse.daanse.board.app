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
 * A choice: a dropdown of options, one of which is chosen and written.
 *
 * The options are those of a button group - the listed ones, then those
 * the widget's source gives. What is chosen is read from the target, so a
 * variable changed elsewhere changes the choice too; while it holds none
 * of the options the placeholder is shown.
 */
import { computed, toRefs } from 'vue'
import type { ChoiceSettings } from './gen/ChoiceSettings'
import { ChoiceSettingsImpl } from './gen/ChoiceSettingsImpl'
import { ChoiceWidgetInterface } from './api/ChoiceWidgetInterface'
import { sameValue, useControl } from './support/useControl'
import { useOptions } from './support/useOptions'

const props = defineProps<{ datasourceId?: string; id?: string }>()
const { id: widgetId } = toRefs(props)
const datasourceId = computed(() => props.datasourceId ?? '')

const config = defineModel<ChoiceSettings>('configv', { required: true })

class ChoiceWidgetApi extends ChoiceWidgetInterface {
  setValue(value: unknown): void {
    /* The option's own value where one holds it, so the variable gets the type the option has. */
    const found = options.value.find((each) => sameValue(each.value, value))
    write(found ? found.value : value)
  }

  enable(): void {
    put('disabled', 'false')
  }

  disable(): void {
    put('disabled', 'true')
  }
}
const api = new ChoiceWidgetApi()
defineExpose<ChoiceWidgetInterface>(api)

/* No name stands in for an empty label: the label is a heading above the dropdown. */
const { settings, held, current, label, look, disabled, put, write, operate, t } = useControl(config, widgetId, {
  type: 'ChoiceWidget',
  wrapped: { target: '', optionsPath: '', optionLabel: '', optionValue: '', placeholder: '' },
  create: () => new ChoiceSettingsImpl(),
  api,
})

const { options } = useOptions(settings, held, datasourceId)

/* The option the target holds, by its place in the list; -1 for none. */
const chosen = computed(() => options.value.findIndex((each) => sameValue(each.value, current())))

const placeholder = computed(() => held('placeholder') || t('control:Default.choice'))

function picked(event: Event): void {
  const index = Number((event.target as HTMLSelectElement).value)
  const option = options.value[index]
  if (!option) return
  if (!operate(option.value)) {
    /* Not taken - disabled: the dropdown goes back to what the variable holds. */
    ;(event.target as HTMLSelectElement).value = String(chosen.value)
  }
}
</script>

<template>
  <div class="control-choice" :style="look">
    <label v-if="label" class="control-choice__label" :for="`${widgetId ?? 'choice'}-select`">{{ label }}</label>
    <div
      class="control-choice__field"
      :style="chosen >= 0 && options[chosen].color ? { '--control-face': options[chosen].color } : undefined"
    >
      <select
        :id="`${widgetId ?? 'choice'}-select`"
        class="control-choice__select"
        :class="{ 'control-choice__select--empty': chosen < 0 }"
        :value="String(chosen)"
        :disabled="disabled"
        @change="picked"
      >
        <option v-if="chosen < 0" value="-1" disabled>{{ placeholder }}</option>
        <option v-for="(option, index) in options" :key="index" :value="String(index)">{{ option.label }}</option>
      </select>
      <span class="control-choice__arrow" aria-hidden="true"></span>
    </div>
  </div>
</template>

<style scoped>
.control-choice {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3em;
  padding: 0.2em;
  box-sizing: border-box;
  overflow: hidden;
  color: var(--color-fg, inherit);
}

.control-choice__label {
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.control-choice__field {
  position: relative;
  min-width: 0;
}

/* The face of the other controls: outlined in the control's colour, the text in the app's. */
.control-choice__select {
  width: 100%;
  min-width: 0;
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  padding: 0.45em 2em 0.45em 0.7em;
  border: 2px solid var(--control-face);
  border-radius: 0.45em;
  background: var(--color-bg, transparent);
  color: var(--color-fg, inherit);
  font: inherit;
  line-height: 1.2;
  cursor: pointer;
  text-overflow: ellipsis;
  transition: filter 0.15s ease, box-shadow 0.15s ease;
}

.control-choice__select--empty {
  color: var(--color-dim, inherit);
}

.control-choice__select option {
  background: var(--color-pane, #fff);
  color: var(--color-fg, #000);
}

.control-choice__select:hover:not(:disabled) {
  filter: brightness(1.08);
}

.control-choice__select:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--control-face) 45%, transparent);
}

.control-choice__select:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* A chevron in the control's colour, drawn rather than the browser's. */
.control-choice__arrow {
  position: absolute;
  right: 0.8em;
  top: 50%;
  width: 0.45em;
  height: 0.45em;
  border-right: 2px solid var(--control-face);
  border-bottom: 2px solid var(--control-face);
  transform: translateY(-70%) rotate(45deg);
  pointer-events: none;
}
</style>
