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
 * Tabs riding on a panel edge - the pattern the app uses wherever one
 * surface shows several things.
 *
 * The row wraps rather than scrolling sideways: a tab you have to hunt for
 * is not a tab. Arrow keys move between them, as a tablist should.
 */
const model = defineModel<string>()

const props = defineProps<{
  tabs: Array<{ id: string; label: string; count?: number; disabled?: boolean }>
  label?: string
}>()

function move(step: number) {
  const usable = props.tabs.filter((tab) => !tab.disabled)
  const at = usable.findIndex((tab) => tab.id === model.value)
  const next = usable[(at + step + usable.length) % usable.length]
  if (next) model.value = next.id
}
</script>

<template>
  <div
    class="tabs"
    role="tablist"
    :aria-label="label"
    @keydown.left.prevent="move(-1)"
    @keydown.right.prevent="move(1)"
  >
    <button
      v-for="tab in tabs"
      :key="tab.id"
      type="button"
      role="tab"
      :aria-selected="model === tab.id"
      :tabindex="model === tab.id ? 0 : -1"
      :disabled="tab.disabled"
      :class="['tab', { on: model === tab.id }]"
      @click="model = tab.id"
    >
      {{ tab.label }}
      <span v-if="tab.count !== undefined" class="tab__count">{{ tab.count }}</span>
    </button>
    <slot name="actions" />
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 1px;
  min-height: var(--spacing-panelHeader);
  padding: 0 6px;
  border-bottom: 1px solid var(--color-divider);
}

.tab {
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  height: var(--spacing-panelHeader);
  padding: 0 10px;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
  background: none;
  border: 0;
  cursor: pointer;
}

.tab:hover:not(:disabled) {
  color: var(--color-fg);
}

.tab:disabled {
  opacity: 0.45;
  cursor: default;
}

.tab.on {
  color: var(--color-fg);
  font-weight: 600;
}

/* Sits on the panel edge, over the divider */
.tab.on::after {
  content: '';
  position: absolute;
  left: 7px;
  right: 7px;
  bottom: -1px;
  height: 2px;
  background-color: var(--color-accent);
  border-radius: 2px;
}

.tab:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -2px;
}

.tab__count {
  font-family: var(--font-mono);
  font-size: 9.5px;
  font-variant-numeric: tabular-nums;
  opacity: 0.8;
}
</style>
