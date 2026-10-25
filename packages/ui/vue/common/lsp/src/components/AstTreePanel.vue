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
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import AstTreeNode from './AstTreeNode.vue'
import { useAstTree, type AstTreeDepth, type AstTreeMode } from '../composables/useAstTree.js'

withDefaults(
  defineProps<{
    ready: boolean
    /** Which views to offer; the outline only where the language has one. */
    modes?: AstTreeMode[]
    /** Whether the panel draws its own title row. */
    titled?: boolean
  }>(),
  { modes: () => ['ast', 'outline'], titled: true },
)

const { t } = useTranslation('lsp')

const {
  mode,
  outlineAvailable,
  rows,
  setMode,
  depth,
  setDepth,
  loading,
  stale,
  parserErrors,
  errorMessage,
} = useAstTree()

// i18n-keys: lsp:Tree.ast*
// i18n-keys: lsp:Tree.cst*
// i18n-keys: lsp:Tree.outline*
const ALL_MODES: AstTreeMode[] = ['ast', 'cst', 'outline']
const DEPTHS: AstTreeDepth[] = ['all', 1, 2, 3, 5, 7, 10]

const offered = (wanted: AstTreeMode[]) =>
  ALL_MODES.filter(option => wanted.includes(option) && (option !== 'outline' || outlineAvailable.value))

const depthValue = computed({
  get: () => String(depth.value),
  set: (value: string) => setDepth(value === 'all' ? 'all' : Number(value)),
})
</script>

<template>
  <aside class="panel" :aria-label="t('Tree.title')">
    <header class="panel-header">
      <h2 v-if="titled">{{ t('Tree.title') }}</h2>
      <div
        v-if="offered(modes).length > 1"
        class="modes"
        role="group"
        :aria-label="t('Tree.modes')"
      >
        <button
          v-for="option in offered(modes)"
          :key="option"
          type="button"
          class="mode"
          :class="{ 'mode--active': option === mode }"
          :aria-pressed="option === mode"
          :title="t(`Tree.${option}Hint`)"
          @click="setMode(option)"
        >
          {{ t(`Tree.${option}`) }}
        </button>
      </div>
      <label v-if="mode !== 'outline'" class="depth">
        <span>{{ t('Tree.depth') }}</span>
        <select v-model="depthValue" :title="t('Tree.depthHint')">
          <option v-for="option in DEPTHS" :key="option" :value="String(option)">
            {{ option === 'all' ? t('Tree.depthAll') : option }}
          </option>
        </select>
      </label>
    </header>

    <p
      v-if="stale || parserErrors > 0"
      class="status"
      :class="{ 'status--errors': parserErrors > 0 }"
    >
      <template v-if="stale">{{ t('Tree.rebuilding') }}</template>
      <template v-else>{{ t('Tree.partial', { count: parserErrors }) }}</template>
    </p>

    <div class="panel-body">
      <p v-if="errorMessage" class="empty empty--error">{{ errorMessage }}</p>
      <p v-else-if="!ready" class="empty">{{ t('Tree.waiting') }}</p>
      <p v-else-if="rows.length === 0" class="empty">
        {{ loading ? t('Tree.parsing') : t('Tree.nothing') }}
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
  width: var(--ast-panel-width, 22rem);
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

.depth {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-left: auto;
  font-size: 0.68rem;
  color: var(--text-muted);
}

.depth select {
  font: inherit;
  padding: 0 0.2rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--surface-raised);
  color: var(--text);
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
