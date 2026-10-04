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
/* A panel with an optional heading - the shape panels in this app have. */
withDefaults(
  defineProps<{ title?: string; padded?: boolean; interactive?: boolean }>(),
  { padded: true, interactive: false },
)
</script>

<template>
  <section :class="['card', { 'card--interactive': interactive }]">
    <header v-if="title || $slots.header" class="card__head">
      <slot name="header">
        <h3 class="card__title">{{ title }}</h3>
      </slot>
      <span class="card__spacer" />
      <slot name="actions" />
    </header>
    <div :class="['card__body', { 'card__body--padded': padded }]"><slot /></div>
  </section>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  background-color: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.card--interactive {
  cursor: pointer;
}

.card--interactive:hover {
  border-color: var(--color-outline);
}

.card__head {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: none;
  height: var(--spacing-panelHeader);
  padding: 0 10px;
  border-bottom: 1px solid var(--color-divider);
}

.card__title {
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: 650;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--color-dim);
}

.card__spacer {
  flex: 1 1 auto;
}

.card__body {
  flex: 1 1 auto;
  min-height: 0;
}

.card__body--padded {
  padding: 10px 12px;
}
</style>
