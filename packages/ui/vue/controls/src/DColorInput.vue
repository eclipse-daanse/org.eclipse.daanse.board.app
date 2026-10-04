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
 * A colour: picker and hex field side by side.
 *
 * Both are needed. The picker is how you find a colour, the text is how you
 * paste the one from the spec - and how you read back what is set without
 * opening anything.
 */
import { computed, useId } from 'vue'

const model = defineModel<string>()

withDefaults(
  defineProps<{ label?: string; hint?: string; disabled?: boolean; stacked?: boolean }>(),
  { disabled: false, stacked: false },
)

const id = useId()

/** The native picker only speaks #rrggbb; anything else keeps it from opening. */
const pickable = computed(() => {
  const value = (model.value ?? '').trim()
  if (/^#[0-9a-f]{6}$/i.test(value)) return value
  if (/^#[0-9a-f]{3}$/i.test(value)) {
    return '#' + [...value.slice(1)].map((c) => c + c).join('')
  }
  return '#000000'
})
</script>

<template>
  <div :class="['field', { 'field--stacked': stacked }]">
    <label v-if="label" class="field__label" :for="id">{{ label }}</label>

    <div class="field__control">
      <div class="row">
        <input
          :id="id"
          class="picker"
          type="color"
          :value="pickable"
          :disabled="disabled"
          :aria-label="label ?? 'Farbe'"
          @input="model = ($event.target as HTMLInputElement).value"
        />
        <input
          v-model="model"
          class="hex"
          type="text"
          spellcheck="false"
          :disabled="disabled"
          :aria-label="label ? `${label} als Hexwert` : 'Farbe als Hexwert'"
        />
      </div>
      <p v-if="hint" class="field__hint">{{ hint }}</p>
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

.field__control {
  flex: 1 1 auto;
  min-width: 0;
}

.field__hint {
  margin: 3px 0 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-dim);
}

.row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.picker {
  width: 26px;
  height: 26px;
  flex: none;
  padding: 2px;
  background-color: var(--color-bg);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-xs);
  cursor: pointer;
}

.picker:focus-visible,
.hex:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}

.hex {
  flex: 1 1 auto;
  min-width: 0;
  height: 26px;
  padding: 0 8px;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-fg);
  background-color: var(--color-bg);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-xs);
}

.picker:disabled,
.hex:disabled {
  opacity: 0.5;
}
</style>
