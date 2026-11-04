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
 * A number field: a number typed in, kept between min and max and on the
 * grid of its steps, written into the variable as a number once it is
 * committed - Enter, or leaving the field - and sent with change. What is
 * no number is not written: the field goes back to the variable. While
 * typing it sends input, throttled; Enter sends submit as well.
 */
import { computed, toRefs } from 'vue'
import type { NumberFieldSettings } from './gen/NumberFieldSettings'
import { NumberFieldSettingsImpl } from './gen/NumberFieldSettingsImpl'
import { NumberFieldWidgetInterface } from './api/NumberFieldWidgetInterface'
import { textOf, useControl } from './support/useControl'
import { useField, type Parsed } from './support/useField'
import FieldFrame from './support/FieldFrame.vue'

const props = defineProps<{ id?: string }>()
const { id: widgetId } = toRefs(props)

const config = defineModel<NumberFieldSettings>('configv', { required: true })

class NumberFieldWidgetApi extends NumberFieldWidgetInterface {
  setValue(value: number): void {
    const parsed = parse(textOf(value))
    if (parsed.ok) write(parsed.value)
  }

  enable(): void {
    put('disabled', 'false')
  }

  disable(): void {
    put('disabled', 'true')
  }
}
const api = new NumberFieldWidgetApi()
defineExpose<NumberFieldWidgetInterface>(api)

/* No name stands in for an empty label: the label is a heading above the field. */
const { held, current, label, look, disabled, put, write, operate, send } = useControl(config, widgetId, {
  type: 'NumberFieldWidget',
  wrapped: { target: '', min: '', max: '', step: '', unit: '', placeholder: '' },
  create: () => new NumberFieldSettingsImpl(),
  api,
})

/* A setting as a number; null where it is empty or none. */
function optional(key: string): number | null {
  const text = held(key).trim()
  if (!text) return null
  const parsed = Number(text)
  return Number.isFinite(parsed) ? parsed : null
}

const min = computed(() => optional('min'))
const max = computed(() => optional('max'))
const step = computed(() => {
  const given = optional('step')
  return given !== null && given > 0 ? given : null
})

/* As many decimals as the step has, so 0.1 + 0.2 is written as 0.3. */
const decimals = computed(() => (step.value === null ? null : (String(step.value).split('.')[1] ?? '').length))

/* Typed text as a number: a decimal comma is taken as a point. Clamped, then put on the step grid from min. */
function parse(typed: string): Parsed {
  let text = typed.trim()
  if (!text) return { ok: false }
  if (!text.includes('.')) text = text.replace(',', '.')
  let value = Number(text)
  if (!Number.isFinite(value)) return { ok: false }
  if (step.value !== null) {
    const from = min.value ?? 0
    value = from + Math.round((value - from) / step.value) * step.value
    value = Number(value.toFixed(decimals.value ?? 0))
  }
  if (min.value !== null && value < min.value) value = min.value
  if (max.value !== null && value > max.value) value = max.value
  return { ok: true, value }
}

const { text, typing, commit, submit, drop } = useField({
  current: () => current(),
  display: (value) => {
    const shown = textOf(value).trim()
    return shown !== '' && Number.isFinite(Number(shown)) ? shown : ''
  },
  parse,
  disabled,
  operate,
  send,
})
</script>

<template>
  <FieldFrame :id="widgetId" :label="label" :look="look" :unit="held('unit')">
    <input
      :id="`${widgetId ?? 'field'}-input`"
      class="control-field__input control-field__input--number"
      type="number"
      inputmode="decimal"
      :value="text"
      :min="min ?? undefined"
      :max="max ?? undefined"
      :step="step ?? 'any'"
      :placeholder="held('placeholder') || undefined"
      :disabled="disabled"
      @input="typing"
      @blur="commit"
      @keydown.enter.prevent="submit"
      @keydown.esc="drop"
    />
  </FieldFrame>
</template>

<style scoped>
.control-field__input--number {
  font-variant-numeric: tabular-nums;
}
</style>
