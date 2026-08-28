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
 * A single-line input, or a textarea when rows are given.
 *
 * Numbers are typed in the mono face with tabular figures, so a column of
 * them lines up and a changed digit is visible in place.
 */
import { computed, useId } from 'vue'

const model = defineModel<string | number | null>()

const props = withDefaults(
  defineProps<{
    label?: string
    type?: 'text' | 'number' | 'password' | 'search' | 'email' | 'url'
    placeholder?: string
    hint?: string
    error?: string
    disabled?: boolean
    readonly?: boolean
    required?: boolean
    size?: 'sm' | 'md' | 'lg'
    /** Turns the field into a textarea of this many rows. */
    rows?: number
    /** Unit or short marker shown inside the field, right-aligned. */
    suffix?: string
    stacked?: boolean
    min?: number
    max?: number
    step?: number
  }>(),
  { type: 'text', size: 'md', disabled: false, readonly: false, required: false, stacked: false },
)

const id = useId()
const isNumeric = computed(() => props.type === 'number')
</script>

<template>
  <div :class="['field', { 'field--stacked': stacked, 'field--invalid': !!error }]">
    <label v-if="label" class="field__label" :for="id">
      {{ label }}
      <span v-if="required" class="field__required" aria-hidden="true">*</span>
    </label>

    <div class="field__control">
      <div :class="['shell', `shell--${size}`, { 'shell--invalid': !!error, 'shell--off': disabled }]">
        <textarea
          v-if="rows"
          :id="id"
          v-model="model"
          class="input input--area"
          :rows="rows"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          :required="required"
          :aria-invalid="!!error || undefined"
        />
        <input
          v-else
          :id="id"
          v-model="model"
          :class="['input', { 'input--num': isNumeric }]"
          :type="type"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          :required="required"
          :min="min"
          :max="max"
          :step="step"
          :aria-invalid="!!error || undefined"
        />
        <span v-if="suffix" class="suffix">{{ suffix }}</span>
      </div>

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
  line-height: 1.4;
  color: var(--color-dim);
}

.field__error {
  color: var(--color-err);
}

.shell {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 8px;
  background-color: var(--color-bg);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-xs);
}

.shell:focus-within {
  border-color: var(--color-accent);
  outline: 1px solid var(--color-accent);
}

.shell--invalid {
  border-color: var(--color-err);
}

.shell--off {
  opacity: 0.5;
}

.shell--sm { height: 22px; }
.shell--md { height: 26px; }
.shell--lg { height: 32px; }

.shell:has(.input--area) {
  height: auto;
  padding: 5px 8px;
}

.input {
  flex: 1 1 auto;
  min-width: 0;
  padding: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg);
  background: none;
  border: 0;
  outline: none;
}

.shell--lg .input {
  font-size: var(--text-base);
}

/* Figures line up in a column and a changed digit stays in place */
.input--num {
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
}

.input--area {
  resize: vertical;
  line-height: 1.45;
}

.input::placeholder {
  color: var(--color-dim);
  opacity: 0.75;
}

.suffix {
  flex: none;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-dim);
}
</style>
