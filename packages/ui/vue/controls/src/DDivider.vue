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
/* A rule, optionally with a caption sitting in it. */
defineProps<{ label?: string }>()
</script>

<template>
  <div :class="['rule', { 'rule--labelled': label }]" role="separator">
    <span v-if="label" class="rule__label">{{ label }}</span>
  </div>
</template>

<style scoped>
.rule {
  height: 1px;
  margin: 12px 0;
  background-color: var(--color-divider);
}

.rule--labelled {
  display: flex;
  align-items: center;
  gap: 8px;
  height: auto;
  background: none;
  margin: 14px 0 7px;
}

.rule--labelled::before,
.rule--labelled::after {
  content: '';
  height: 1px;
  background-color: var(--color-divider);
}

.rule--labelled::before {
  width: 10px;
  flex: none;
}

.rule--labelled::after {
  flex: 1 1 auto;
}

.rule__label {
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-dim);
}
</style>
