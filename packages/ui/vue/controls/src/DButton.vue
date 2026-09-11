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
    :class="[
      'btn',
      `btn--${intent}`,
      `btn--${size}`,
      { 'btn--block': block, 'btn--busy': busy },
    ]"
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

/* --- the halo, on the primary action ---------------------------------- */

/*
 * A blurred field of colour behind the button, revealed on hover.
 *
 * The idea is the Vue devtools anchor's: an element far larger than what it
 * sits behind, heavily blurred, faded in. Three things are ours rather than
 * theirs. The colour comes from the accent token, so it belongs to whatever
 * theme is on instead of announcing someone else's brand. It is a pseudo
 * element, so no button needs an extra span to carry it. And it fades in a
 * quarter of a second rather than a whole one - theirs is ambient decoration
 * on something that floats, ours answers a pointer.
 *
 * On the primary intent and nowhere else. Their anchor wears one because it
 * is the only thing on screen; a view has one primary action for the same
 * reason, and putting the halo there says which button that is without a
 * caller having to ask for it.
 *
 * `isolation` is what keeps it behind the button's own background without
 * falling behind the page: it gives the button a stacking context of its
 * own, and z-index -1 is then measured inside that.
 */
.btn--primary {
  position: relative;
  isolation: isolate;
}

.btn--primary::before {
  content: '';
  position: absolute;
  /*
   * A narrow band, blurred far wider than itself. In pixels rather than a
   * percentage: percentages resolve against width sideways and height
   * vertically, and on a button three times wider than it is tall that
   * turns a halo into a smear reaching for whatever stands beside it.
   */
  inset: -7px;
  z-index: -1;
  border-radius: 9999px;
  background-image: linear-gradient(
    45deg,
    var(--color-accent),
    color-mix(in srgb, var(--color-accent) 55%, var(--color-ok)),
    var(--color-accent)
  );
  filter: blur(34px);
  opacity: 0;
  transition: opacity 240ms cubic-bezier(0.2, 0.6, 0.2, 1);
  pointer-events: none;
}

.btn--primary:hover:not(:disabled)::before {
  /* Raised with the blur: the same colour over more area is less of it. */
  opacity: 0.6;
}

.btn--primary:focus-visible::before {
  opacity: 0.35;
}

/*
 * Not on a light ground.
 *
 * A glow needs darkness to be a glow. On a pale theme the same field is a
 * wash rather than a light, and it lands on the one meaning already taken:
 * focus is drawn with this very colour, so a hover that looks like it is
 * two signals wearing one face.
 *
 * `data-theme` is written by the shell's theme system from each theme's
 * own `dark` flag - four themes, one of them dark - so this asks the
 * question the palette already answers instead of guessing from a colour.
 */
:root[data-theme='light'] .btn--primary::before {
  content: none;
}

@media (prefers-reduced-motion: reduce) {
  .btn--primary::before {
    transition-duration: 0.01ms;
  }
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
