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
/* A checkbox with its label - the whole row is the hit area. */
import { ref, useId, watchEffect } from 'vue'

const model = defineModel<boolean>()

const props = withDefaults(
  defineProps<{
    label?: string
    hint?: string
    disabled?: boolean
    /**
     * Neither on nor off: some of what it stands for is chosen.
     *
     * The native box draws its own mark for this, but only through a
     * property - there is no attribute for it, which is why it is set
     * below rather than bound.
     */
    indeterminate?: boolean
  }>(),
  { disabled: false, indeterminate: false },
)

const id = useId()

/* The one thing about a checkbox that is a property and not an attribute. */
const box = ref<HTMLInputElement | null>(null)
watchEffect(() => {
  if (box.value) box.value.indeterminate = props.indeterminate
})
</script>

<template>
  <div class="check" :class="{ 'check--off': disabled }">
    <input
      :id="id"
      ref="box"
      v-model="model"
      class="check__box"
      type="checkbox"
      :disabled="disabled"
    />
    <label :for="id" class="check__label">
      <slot>{{ label }}</slot>
      <span v-if="hint" class="check__hint">{{ hint }}</span>
    </label>
  </div>
</template>

<style scoped>
.check {
  display: flex;
  align-items: baseline;
  gap: 7px;
  margin-bottom: 6px;
}

.check--off {
  opacity: 0.5;
}

.check__box {
  width: 13px;
  height: 13px;
  flex: none;
  accent-color: var(--color-accent);
  cursor: pointer;
}

.check__box:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}

.check__label {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg);
  cursor: pointer;
}

.check__hint {
  display: block;
  font-size: var(--text-xs);
  color: var(--color-dim);
}
</style>
