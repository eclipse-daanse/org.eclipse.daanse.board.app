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
/*
 * A date, a time, or both.
 *
 * The browser's own picker does the work: it knows the locale, the calendar
 * and the keyboard. Only the field around it is ours.
 */
import { useId } from 'vue'

const model = defineModel<string>()

withDefaults(
  defineProps<{
    label?: string
    mode?: 'date' | 'time' | 'datetime'
    hint?: string
    error?: string
    disabled?: boolean
    required?: boolean
    stacked?: boolean
    min?: string
    max?: string
  }>(),
  { mode: 'date', disabled: false, required: false, stacked: false },
)

const id = useId()
const nativeType = { date: 'date', time: 'time', datetime: 'datetime-local' } as const
</script>

<template>
  <div :class="['field', { 'field--stacked': stacked, 'field--invalid': !!error }]">
    <label v-if="label" class="field__label" :for="id">
      {{ label }}
      <span v-if="required" class="field__required" aria-hidden="true">*</span>
    </label>

    <div class="field__control">
      <input
        :id="id"
        v-model="model"
        :class="['input', { 'input--invalid': !!error }]"
        :type="nativeType[mode]"
        :disabled="disabled"
        :required="required"
        :min="min"
        :max="max"
        :aria-invalid="!!error || undefined"
      />
      <p v-if="error" class="field__error" role="alert">{{ error }}</p>
      <p v-else-if="hint" class="field__hint">{{ hint }}</p>
    </div>
  </div>
</template>

<style scoped>
.field {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 7px;
}

.field--stacked {
  flex-direction: column;
  align-items: stretch;
  gap: 3px;
}

.field__label {
  width: 112px;
  flex: none;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
}

.field--stacked .field__label {
  width: auto;
}

.field__required {
  color: var(--color-err);
}

.field__control {
  flex: 1 1 auto;
  min-width: 0;
}

.field__hint,
.field__error {
  margin: 3px 0 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-dim);
}

.field__error {
  color: var(--color-err);
}

.input {
  width: 100%;
  height: 26px;
  padding: 0 8px;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-variant-numeric: tabular-nums;
  color: var(--color-fg);
  background-color: var(--color-bg);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-xs);
}

.input--invalid {
  border-color: var(--color-err);
}

.input:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -1px;
}

.input:disabled {
  opacity: 0.5;
}
</style>
