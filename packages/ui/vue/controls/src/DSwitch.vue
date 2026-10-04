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
 * A switch: for settings that take effect the moment they are flipped.
 * Where a change only counts once a form is submitted, use a checkbox -
 * the shape is the promise.
 */
const model = defineModel<boolean>()

withDefaults(defineProps<{ label?: string; disabled?: boolean }>(), { disabled: false })
</script>

<template>
  <div class="sw" :class="{ 'sw--off': disabled }">
    <button
      type="button"
      role="switch"
      :aria-checked="!!model"
      :aria-label="label"
      :disabled="disabled"
      :class="['sw__track', { on: model }]"
      @click="model = !model"
    >
      <span class="sw__knob" />
    </button>
    <span v-if="label || $slots.default" class="sw__label" @click="!disabled && (model = !model)">
      <slot>{{ label }}</slot>
    </span>
  </div>
</template>

<style scoped>
.sw {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}

.sw--off {
  opacity: 0.5;
}

.sw__track {
  position: relative;
  width: 28px;
  height: 15px;
  flex: none;
  padding: 0;
  background-color: var(--color-outline);
  border: 0;
  border-radius: 8px;
  cursor: pointer;
}

.sw__track.on {
  background-color: var(--color-accent);
}

.sw__track:disabled {
  cursor: default;
}

.sw__track:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.sw__knob {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: var(--color-pane);
  transition: left 0.12s ease;
}

.sw__track.on .sw__knob {
  left: 15px;
}

@media (prefers-reduced-motion: reduce) {
  .sw__knob {
    transition: none;
  }
}

.sw__label {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg);
  cursor: pointer;
}
</style>
