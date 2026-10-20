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
import { computed } from 'vue'
import AstTreeNode from './AstTreeNode.vue'
import { useAstTree, type AstTreeMode } from '../composables/useAstTree.js'

defineProps<{
  ready: boolean
}>()

const {
  mode,
  outlineAvailable,
  rows,
  setMode,
  loading,
  stale,
  parserErrors,
  errorMessage,
} = useAstTree()

const ALL_MODES: Array<{
  id: AstTreeMode
  label: string
  description: string
}> = [
  { id: 'ast', label: 'AST', description: 'The parse tree, node by node' },
  {
    id: 'outline',
    label: 'Outline',
    description: 'Statements and declarations',
  },
]

const modes = computed(() =>
  outlineAvailable.value
    ? ALL_MODES
    : ALL_MODES.filter(option => option.id === 'ast'),
)
</script>

<template>
  <aside class="panel" aria-label="Syntax tree">
    <header class="panel-header">
      <h2>Syntax tree</h2>
      <div
        v-if="modes.length > 1"
        class="modes"
        role="group"
        aria-label="Tree mode"
      >
        <button
          v-for="option in modes"
          :key="option.id"
          type="button"
          class="mode"
          :class="{ 'mode--active': option.id === mode }"
          :aria-pressed="option.id === mode"
          :title="option.description"
          @click="setMode(option.id)"
        >
          {{ option.label }}
        </button>
      </div>
    </header>

    <p
      v-if="stale || parserErrors > 0"
      class="status"
      :class="{ 'status--errors': parserErrors > 0 }"
    >
      <template v-if="stale">Rebuilding…</template>
      <template v-else
        >{{ parserErrors }} parse
        {{ parserErrors === 1 ? 'error' : 'errors' }} — partial tree</template
      >
    </p>

    <div class="panel-body">
      <p v-if="errorMessage" class="empty empty--error">{{ errorMessage }}</p>
      <p v-else-if="!ready" class="empty">Waiting for the language server…</p>
      <p v-else-if="rows.length === 0" class="empty">
        {{ loading ? 'Parsing…' : 'Nothing parsed yet.' }}
      </p>
      <AstTreeNode
        v-for="node in rows"
        :key="node.id"
        :node="node"
        :depth="0"
      />
    </div>
  </aside>
</template>

<style scoped>
.panel {
  display: flex;
  flex-direction: column;
  min-height: 0;
  width: 22rem;
  flex-shrink: 0;
  background: var(--surface);
  border-left: 1px solid var(--border);
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.5rem 0.9rem;
  border-bottom: 1px solid var(--border);
}

h2 {
  margin: 0;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.modes {
  display: inline-flex;
  padding: 2px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--surface-raised);
}

.mode {
  font: inherit;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  padding: 0.12rem 0.5rem;
  border: 0;
  border-radius: 4px;
  background: none;
  color: var(--text-muted);
  cursor: pointer;
  transition:
    background 0.12s,
    color 0.12s;
}

.mode:hover {
  color: var(--text);
}

.mode--active {
  background: var(--accent);
  color: var(--bg);
}

.mode:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 1px;
}

.status {
  margin: 0;
  padding: 0.25rem 0.9rem;
  font-size: 0.7rem;
  color: var(--text-muted);
  border-bottom: 1px solid var(--border);
}

.status--errors {
  color: var(--warning);
}

.panel-body {
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 0.35rem;
}

.empty {
  margin: 0;
  padding: 0.45rem;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.empty--error {
  color: var(--danger);
}

code {
  font-family: var(--mono);
  font-size: 0.75rem;
}

@media (prefers-reduced-motion: reduce) {
  .mode {
    transition: none;
  }
}
</style>
