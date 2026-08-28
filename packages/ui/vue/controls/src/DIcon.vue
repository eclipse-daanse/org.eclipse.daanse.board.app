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
 * A Material Icons ligature, sized and coloured from the tokens.
 *
 * The font is already loaded by the host page; this only keeps every icon
 * in the app on one size scale instead of a pixel value per call site.
 */
withDefaults(
  defineProps<{
    /** Ligature name, e.g. "settings". */
    name: string
    size?: 'xs' | 'sm' | 'md' | 'lg'
    /** A token name without the dashes, e.g. "color-accent". */
    tone?: string
    /** Purely decorative: hidden from assistive technology. */
    decorative?: boolean
    label?: string
  }>(),
  { size: 'md', decorative: true },
)
</script>

<template>
  <i
    :class="['icon', `icon--${size}`]"
    :style="tone ? { color: `var(--${tone})` } : undefined"
    :aria-hidden="decorative ? 'true' : undefined"
    :aria-label="decorative ? undefined : (label ?? name)"
    :role="decorative ? undefined : 'img'"
    >{{ name }}</i
  >
</template>

<style scoped>
.icon {
  font-family: 'Material Icons', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  letter-spacing: normal;
  white-space: nowrap;
  direction: ltr;
  display: inline-block;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-feature-settings: 'liga';
  color: inherit;
}

.icon--xs { font-size: 12px; }
.icon--sm { font-size: 14px; }
.icon--md { font-size: 16px; }
.icon--lg { font-size: 20px; }
</style>
