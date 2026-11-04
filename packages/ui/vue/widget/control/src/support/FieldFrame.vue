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
/* What the text and the number field share: the label above, the field framed in the control's colour, a unit after it. */
defineProps<{ id?: string; label: string; look: Record<string, string>; unit?: string }>()
</script>

<template>
  <div class="control-field" :style="look">
    <label v-if="label" class="control-field__label" :for="`${id ?? 'field'}-input`">{{ label }}</label>
    <div class="control-field__box">
      <slot />
      <span v-if="unit" class="control-field__unit">{{ unit }}</span>
    </div>
  </div>
</template>

<style scoped>
.control-field {
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

.control-field__label {
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* The face of the other controls: outlined in the control's colour, the text in the app's. */
.control-field__box {
  display: flex;
  align-items: center;
  min-width: 0;
  border: 2px solid var(--control-face);
  border-radius: 0.45em;
  background: var(--color-bg, transparent);
  color: var(--control-ink);
  transition: box-shadow 0.15s ease;
}

.control-field__box:focus-within {
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--control-face) 45%, transparent);
}

.control-field__box :slotted(.control-field__input) {
  flex: 1 1 auto;
  min-width: 0;
  margin: 0;
  padding: 0.45em 0.7em;
  border: none;
  outline: none;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: 1.2;
}

.control-field__box :slotted(.control-field__input::placeholder) {
  color: var(--color-dim, inherit);
  opacity: 1;
}

.control-field__box :slotted(.control-field__input:disabled) {
  cursor: not-allowed;
}

.control-field__box:has(:disabled) {
  opacity: 0.5;
}

.control-field__unit {
  flex: none;
  padding-right: 0.7em;
  color: var(--color-dim, inherit);
  white-space: nowrap;
}
</style>
