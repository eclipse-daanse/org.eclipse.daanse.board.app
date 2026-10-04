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
 * The catalogs, tables and columns a connection offers.
 *
 * Recursive and local: what it shows is this source's schema, and the
 * shape it reads is the one the catalog query returns. A node is a label,
 * maybe an icon, maybe children.
 */
import { ref } from 'vue'
import { DIcon } from 'org.eclipse.daanse.board.app.ui.vue.controls'

defineProps<{
  nodes: Array<{ label: string; icon?: string; children?: any[] }>
  /** How deep this level sits, for the indent. */
  depth?: number
}>()

/** Which branches are open, by the label that names them. */
const open = ref<Record<string, boolean>>({})
</script>

<template>
  <ul class="tree">
    <li v-for="node in nodes" :key="node.label" class="node">
      <button
        type="button"
        class="node__row"
        :style="{ paddingLeft: `${(depth ?? 0) * 14 + 4}px` }"
        :aria-expanded="node.children?.length ? !!open[node.label] : undefined"
        @click="node.children?.length && (open[node.label] = !open[node.label])"
      >
        <DIcon
          v-if="node.children?.length"
          :name="open[node.label] ? 'expand_more' : 'chevron_right'"
          size="sm"
          tone="color-dim"
        />
        <span v-else class="node__leaf" />
        <DIcon v-if="node.icon" :name="node.icon" size="sm" tone="color-dim" />
        <span class="node__label">{{ node.label }}</span>
      </button>

      <SchemaTree
        v-if="node.children?.length && open[node.label]"
        :nodes="node.children"
        :depth="(depth ?? 0) + 1"
      />
    </li>
  </ul>
</template>

<style scoped>
.tree {
  margin: 0;
  padding: 0;
  list-style: none;
}

.node__row {
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  padding: 3px 4px;
  border: 0;
  background: none;
  text-align: left;
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg);
}

.node__row:hover {
  background-color: color-mix(in srgb, var(--color-pane) 70%, transparent);
}

.node__row:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -2px;
}

/* Keeps a leaf's label on the same edge as a branch's. */
.node__leaf {
  width: 14px;
  flex: none;
}

.node__label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
