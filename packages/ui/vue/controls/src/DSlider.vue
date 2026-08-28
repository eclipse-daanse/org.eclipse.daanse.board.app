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
 * A slider with its value written next to it.
 *
 * A slider alone says "somewhere around here"; these values end up in
 * stored configurations, so the number is shown - and can be typed.
 */
import { useId } from 'vue'

const model = defineModel<number>()

withDefaults(
  defineProps<{
    label?: string
    min?: number
    max?: number
    step?: number
    /** Unit shown after the number. */
    suffix?: string
    disabled?: boolean
    stacked?: boolean
  }>(),
  { min: 0, max: 100, step: 1, disabled: false, stacked: false },
)

const id = useId()
</script>

<template>
  <div :class="['field', { 'field--stacked': stacked }]">
    <label v-if="label" class="field__label" :for="id">{{ label }}</label>

    <div class="field__control row">
      <input
        :id="id"
        v-model.number="model"
        class="range"
        type="range"
        :min="min"
        :max="max"
        :step="step"
        :disabled="disabled"
      />
      <input
        v-model.number="model"
        class="num"
        type="number"
        :min="min"
        :max="max"
        :step="step"
        :disabled="disabled"
        :aria-label="label ? `${label} als Zahl` : 'Wert'"
      />
      <span v-if="suffix" class="suffix">{{ suffix }}</span>
    </div>
  </div>
</template>

<style scoped>
.field {
  display: flex;
  align-items: center;
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

.field__control {
  flex: 1 1 auto;
  min-width: 0;
}

.row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.range {
  flex: 1 1 auto;
  min-width: 0;
  accent-color: var(--color-accent);
  cursor: pointer;
}

.range:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.num {
  width: 62px;
  flex: none;
  height: 22px;
  padding: 0 6px;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-variant-numeric: tabular-nums;
  color: var(--color-fg);
  background-color: var(--color-bg);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-xs);
}

.num:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}

.suffix {
  flex: none;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-dim);
}

.range:disabled,
.num:disabled {
  opacity: 0.5;
}
</style>
