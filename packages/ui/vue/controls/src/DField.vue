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
 * The row a control sits in: label, the control, and whatever the field has
 * to say about itself.
 *
 * Every control uses this rather than drawing its own label, so a form is a
 * column of identical rows - and the label of one field lines up with the
 * label of the next, whatever control comes after it.
 */
withDefaults(
  defineProps<{
    label?: string
    /** Connects label and control; leave empty for a group of controls. */
    for?: string
    /** Shown under the control - what the field expects, not what it is. */
    hint?: string
    /** Shown instead of the hint, and marks the control. */
    error?: string
    required?: boolean
    /** Label above the control instead of beside it, for wide inputs. */
    stacked?: boolean
  }>(),
  { stacked: false, required: false },
)
</script>

<template>
  <div :class="['field', { 'field--stacked': stacked, 'field--invalid': !!error }]">
    <label v-if="label" class="field__label" :for="for">
      {{ label }}
      <span v-if="required" class="field__required" aria-hidden="true">*</span>
    </label>

    <div class="field__control">
      <slot />
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
</style>
