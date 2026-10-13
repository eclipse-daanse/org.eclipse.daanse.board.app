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
import type { AxisTreeNode } from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'

const { t } = useTranslation('tablePivot')

defineOptions({ name: 'AxisTreeItem' })

const props = defineProps<{
  node: AxisTreeNode
  level: number
  current: number
  expanded: Set<number>
  focused: number
}>()

const emit = defineEmits<{
  select: [index: number]
  toggle: [index: number]
  hover: [key: string | null]
}>()

const index = () => props.node.position.index
</script>

<template>
  <li
    role="treeitem"
    :aria-level="level"
    :aria-selected="current === index()"
    :aria-expanded="node.children.length ? expanded.has(index()) : undefined"
    :data-index="index()"
    :tabindex="focused === index() ? 0 : -1"
    class="tree-item"
    @click.stop="emit('select', index())"
    @mouseenter="emit('hover', node.position.key)"
    @mouseleave="emit('hover', null)"
  >
    <div class="tree-item__row" :class="{ 'is-current': current === index() }" :style="{ paddingLeft: `${(level - 1) * 0.875}rem` }">
      <button
        v-if="node.children.length"
        type="button"
        class="tree-item__toggle"
        tabindex="-1"
        :aria-label="expanded.has(index()) ? t('Navigation.collapse') : t('Navigation.expand')"
        @click.stop="emit('toggle', index())"
      >
        {{ expanded.has(index()) ? '▾' : '▸' }}
      </button>
      <span v-else class="tree-item__toggle" aria-hidden="true"></span>
      <span class="tree-item__label">{{ node.position.label }}</span>
    </div>
    <ul v-if="node.children.length && expanded.has(index())" role="group">
      <AxisTreeItem
        v-for="child in node.children"
        :key="child.position.key"
        :node="child"
        :level="level + 1"
        :current="current"
        :expanded="expanded"
        :focused="focused"
        @select="emit('select', $event)"
        @toggle="emit('toggle', $event)"
        @hover="emit('hover', $event)"
      />
    </ul>
  </li>
</template>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.tree-item {
  list-style: none;
  cursor: pointer;
}

.tree-item:focus-visible > .tree-item__row {
  outline: 2px solid var(--color-outline);
  outline-offset: -2px;
}

.tree-item__row {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.125rem 0.25rem;
  border-radius: var(--radius-xs);
  white-space: nowrap;
}

.tree-item__row:hover {
  background: color-mix(in srgb, var(--color-accent) 10%, transparent);
}

.tree-item__row.is-current {
  background: color-mix(in srgb, var(--color-accent) 25%, transparent);
  font-weight: 600;
}

.tree-item__toggle {
  width: 1rem;
  flex: none;
  background: none;
  border: none;
  padding: 0;
  color: var(--color-dim);
  cursor: pointer;
}

.tree-item__label {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
