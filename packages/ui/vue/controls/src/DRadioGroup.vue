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
 * One of a handful of choices, all of them visible.
 *
 * A select hides the options behind a press and is right when there are
 * many; a radio group is right when there are two or three and seeing them
 * side by side is the point. Options are read the same way DSelect reads
 * them, so the two are interchangeable when a form outgrows one of them.
 *
 * Native radios do the work: one tab stop for the group, arrow keys to
 * move within it, and the browser's own idea of what a chosen one looks
 * like. Only the field around them is ours.
 */
import { computed, useId } from 'vue'

const model = defineModel<unknown>()

const props = withDefaults(
  defineProps<{
    options: Array<Record<string, unknown> | string | number>
    label?: string
    /** Field holding the value when options are objects. */
    valueKey?: string
    /** Field holding the text when options are objects. */
    labelKey?: string
    hint?: string
    error?: string
    disabled?: boolean
    required?: boolean
    /** Side by side rather than stacked - for two or three short words. */
    inline?: boolean
    stacked?: boolean
  }>(),
  {
    valueKey: 'uid',
    labelKey: 'name',
    disabled: false,
    required: false,
    inline: false,
    stacked: false,
  },
)

const name = useId()

interface Entry {
  value: unknown
  label: string
}

const entries = computed<Entry[]>(() =>
  (props.options ?? []).map((option) => {
    if (option === null || typeof option !== 'object') {
      return { value: option, label: String(option) }
    }
    const record = option as Record<string, unknown>
    const value = props.valueKey in record ? record[props.valueKey] : record
    const label = props.labelKey in record ? record[props.labelKey] : value
    return { value, label: String(label ?? '') }
  }),
)
</script>

<template>
  <div :class="['field', { 'field--stacked': stacked, 'field--invalid': !!error }]">
    <span v-if="label" class="field__label">
      {{ label }}
      <span v-if="required" class="field__required" aria-hidden="true">*</span>
    </span>

    <div class="field__control">
      <div
        :class="['choices', { 'choices--inline': inline }]"
        role="radiogroup"
        :aria-label="label"
      >
        <label
          v-for="(entry, index) in entries"
          :key="index"
          :class="['choice', { 'choice--off': disabled }]"
        >
          <input
            v-model="model"
            class="choice__dot"
            type="radio"
            :name="name"
            :value="entry.value"
            :disabled="disabled"
            :required="required"
          />
          <span class="choice__label">{{ entry.label }}</span>
        </label>
      </div>

      <p v-if="error" class="field__error" role="alert">{{ error }}</p>
      <p v-else-if="hint" class="field__hint">{{ hint }}</p>
    </div>
  </div>
</template>

<style scoped>
.field {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 7px;
}

.field--stacked {
  flex-direction: column;
  gap: 4px;
}

.field__label {
  flex: none;
  width: 120px;
  padding-top: 2px;
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

.choices {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.choices--inline {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 14px;
}

.choice {
  display: flex;
  align-items: baseline;
  gap: 7px;
  cursor: pointer;
}

.choice--off {
  opacity: 0.5;
  cursor: default;
}

.choice__dot {
  width: 13px;
  height: 13px;
  flex: none;
  accent-color: var(--color-accent);
  cursor: inherit;
}

.choice__dot:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}

.choice__label {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg);
}

.field__error {
  margin: 3px 0 0;
  font-size: var(--text-xs);
  color: var(--color-err);
}

.field__hint {
  margin: 3px 0 0;
  font-size: var(--text-xs);
  color: var(--color-dim);
}
</style>
