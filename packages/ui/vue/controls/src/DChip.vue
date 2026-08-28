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
 * A small mark on something: a count, a state, a label.
 *
 * The tones are the state tokens, so a chip means the same thing here as a
 * coloured value does anywhere else in the app.
 */
withDefaults(
  defineProps<{
    tone?: 'neutral' | 'accent' | 'ok' | 'warn' | 'err'
    /** Digits get the mono face so counts line up. */
    numeric?: boolean
    removable?: boolean
  }>(),
  { tone: 'neutral', numeric: false, removable: false },
)

defineEmits(['remove'])
</script>

<template>
  <span :class="['chip', `chip--${tone}`, { 'chip--num': numeric }]">
    <slot />
    <button
      v-if="removable"
      type="button"
      class="chip__x"
      aria-label="Entfernen"
      @click="$emit('remove')"
    >
      ✕
    </button>
  </span>
</template>

<style scoped>
.chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 1px 7px;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: 1.5;
  border-radius: var(--radius-xs);
  white-space: nowrap;
}

.chip--num {
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
}

.chip--neutral {
  color: var(--color-dim);
  background-color: var(--color-raised);
  border: 1px solid var(--color-divider);
}

.chip--accent {
  color: var(--color-accent);
  background-color: color-mix(in srgb, var(--color-accent) 14%, transparent);
}

.chip--ok {
  color: var(--color-ok);
  background-color: color-mix(in srgb, var(--color-ok) 14%, transparent);
}

.chip--warn {
  color: var(--color-warn);
  background-color: color-mix(in srgb, var(--color-warn) 14%, transparent);
}

.chip--err {
  color: var(--color-err);
  background-color: color-mix(in srgb, var(--color-err) 14%, transparent);
}

.chip__x {
  font-size: 9px;
  color: inherit;
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
}

.chip__x:hover {
  opacity: 1;
}
</style>
