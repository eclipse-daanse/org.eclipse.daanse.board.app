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
 * A button. Four intents, three sizes, and nothing else - the variants that
 * exist are the ones the app actually uses.
 *
 * Every colour and measurement comes from a token, so a button belongs to
 * whatever theme is active without knowing that themes exist.
 */
withDefaults(
  defineProps<{
    /** What the button is for - not how it looks. */
    intent?: 'default' | 'primary' | 'quiet' | 'danger'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    /** Waiting on something; the button says so and stops accepting clicks. */
    busy?: boolean
    /** Fills the width of whatever holds it. */
    block?: boolean
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    intent: 'default',
    size: 'md',
    disabled: false,
    busy: false,
    block: false,
    type: 'button',
  },
)
</script>

<template>
  <button
    :type="type"
    :class="['btn', `btn--${intent}`, `btn--${size}`, { 'btn--block': block, 'btn--busy': busy }]"
    :disabled="disabled || busy"
    :aria-busy="busy || undefined"
  >
    <span v-if="busy" class="btn__spinner" aria-hidden="true" />
    <slot />
  </button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  color: var(--color-fg);
  background-color: var(--color-raised);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-xs);
  cursor: pointer;
}

.btn:hover:not(:disabled) {
  border-color: var(--color-outline);
}

.btn:active:not(:disabled) {
  transform: translateY(0.5px);
}

.btn:disabled {
  opacity: 0.45;
  cursor: default;
}

.btn:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}

/* --- sizes: heights that line up with inputs of the same size --------- */

.btn--sm {
  height: 22px;
  padding: 0 9px;
  font-size: var(--text-xs);
}

.btn--md {
  height: 26px;
  padding: 0 12px;
}

.btn--lg {
  height: 32px;
  padding: 0 16px;
  font-size: var(--text-base);
}

.btn--block {
  display: flex;
  width: 100%;
}

/* --- intents ---------------------------------------------------------- */

.btn--primary {
  color: var(--color-onAccent);
  background-color: var(--color-accent);
  border-color: var(--color-accent);
  font-weight: 600;
}

.btn--primary:hover:not(:disabled) {
  filter: brightness(1.08);
}

.btn--quiet {
  background-color: transparent;
  border-color: transparent;
  color: var(--color-dim);
}

.btn--quiet:hover:not(:disabled) {
  color: var(--color-fg);
  background-color: var(--color-raised);
  border-color: var(--color-divider);
}

/* Destructive: the colour carries the warning, the fill stays quiet so it
   cannot be mistaken for the primary action. */
.btn--danger {
  color: var(--color-err);
  border-color: color-mix(in srgb, var(--color-err) 45%, transparent);
}

.btn--danger:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--color-err) 12%, transparent);
  border-color: var(--color-err);
}

/* --- busy ------------------------------------------------------------- */

.btn__spinner {
  width: 11px;
  height: 11px;
  flex: none;
  border: 1.5px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: btn-spin 0.7s linear infinite;
}

@keyframes btn-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .btn__spinner {
    animation-duration: 2s;
  }
}
</style>
