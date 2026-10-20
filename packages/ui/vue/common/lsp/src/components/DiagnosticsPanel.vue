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
import type { DiagnosticEntry } from '../composables/useDiagnostics.js'

defineProps<{
  diagnostics: DiagnosticEntry[]
  ready: boolean
}>()
</script>

<template>
  <p v-if="!ready" class="placeholder">Waiting for the language server…</p>
  <p v-else-if="diagnostics.length === 0" class="placeholder">
    No problems detected.
  </p>
  <ul v-else class="list">
    <li v-for="(diagnostic, index) in diagnostics" :key="index" class="row">
      <span
        class="dot"
        :class="`dot--${diagnostic.severity}`"
        aria-hidden="true"
      ></span>
      <span class="position"
        >{{ diagnostic.line }}:{{ diagnostic.column }}</span
      >
      <span class="message">{{ diagnostic.message }}</span>
    </li>
  </ul>
</template>

<style scoped>
.placeholder {
  margin: 0;
  padding: 0.8rem 0.9rem;
  font-size: 0.82rem;
  color: var(--text-muted);
}

.list {
  margin: 0;
  padding: 0.25rem 0;
  list-style: none;
  overflow-y: auto;
  min-height: 0;
  flex: 1;
}

.row {
  display: grid;
  grid-template-columns: 0.75rem 3.5rem 1fr;
  gap: 0.6rem;
  align-items: baseline;
  padding: 0.3rem 0.9rem;
  font-size: 0.82rem;
  line-height: 1.45;
}

.row:hover {
  background: var(--surface-raised);
}

.dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  align-self: center;
}

.dot--error {
  background: var(--danger);
}

.dot--warning {
  background: var(--warning);
}

.dot--info,
.dot--hint {
  background: var(--accent);
}

.position {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  font-variant-numeric: tabular-nums;
  text-align: right;
}

.message {
  color: var(--text);
  overflow-wrap: anywhere;
}
</style>
