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
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import type { DiagnosticEntry } from '../composables/useDiagnostics.js'

defineProps<{
  diagnostics: DiagnosticEntry[]
  ready: boolean
  /** The entry whose details are open, if the host shows any. */
  selected?: DiagnosticEntry | null
}>()

/* A click on a row: the host reveals the range, and may offer fixes in the slot. */
const emit = defineEmits<{ (event: 'select', diagnostic: DiagnosticEntry): void }>()

const { t } = useTranslation('lsp')
</script>

<template>
  <p v-if="!ready" class="placeholder">{{ t('Tree.waiting') }}</p>
  <p v-else-if="diagnostics.length === 0" class="placeholder">
    {{ t('Diagnostics.none') }}
  </p>
  <ul v-else class="list">
    <li
      v-for="(diagnostic, index) in diagnostics"
      :key="index"
      class="row"
      :class="{ 'row--selected': selected === diagnostic }"
      tabindex="0"
      @click="emit('select', diagnostic)"
      @keydown.enter="emit('select', diagnostic)"
    >
      <span
        class="dot"
        :class="`dot--${diagnostic.severity}`"
        aria-hidden="true"
      ></span>
      <span class="position"
        >{{ diagnostic.line }}:{{ diagnostic.column }}</span
      >
      <span class="message">{{ diagnostic.message }}</span>
      <div v-if="selected === diagnostic && $slots.details" class="details" @click.stop>
        <slot name="details" :diagnostic="diagnostic" />
      </div>
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

.row:hover,
.row--selected {
  background: var(--surface-raised);
}

.row {
  cursor: pointer;
}

.details {
  grid-column: 2 / -1;
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
