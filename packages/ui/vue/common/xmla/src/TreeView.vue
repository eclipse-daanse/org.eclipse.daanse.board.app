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
 * The tree the metadata and the filters are read in.
 *
 * Each row is drawn by whoever put the node there - one slot, the node as
 * its argument - so the two callers keep the very different rows they
 * have: one drags hierarchies onto a query, the other ticks members.
 *
 * Which branches are open can be held by the caller (the filter tree
 * swaps the whole tree when a search runs and carries the open set with
 * it) or left here.
 */
import { computed, ref } from 'vue'
import { DIcon } from 'org.eclipse.daanse.board.app.ui.vue.controls'

interface Node {
  id?: string | number
  children?: Node[]
  [key: string]: unknown
}

const props = withDefaults(
  defineProps<{
    nodes: Node[]
    /** The open branches by id. Given means the caller holds them. */
    expanded?: string[]
    /** Only rows whose text matches, with the branches that lead to them. */
    filter?: string
    /** Which field carries a node's text. */
    textBy?: string
    /** How deep this level sits, for the indent. */
    depth?: number
  }>(),
  { textBy: 'label', depth: 0 },
)

const emit = defineEmits<{ (e: 'update:expanded', open: string[]): void }>()

/* Held here only while the caller does not hold it. */
const ownExpanded = ref<string[]>([])
const open = computed<string[]>(() => props.expanded ?? ownExpanded.value)

function idOf(node: Node): string {
  return String(node.id ?? node[props.textBy] ?? '')
}

function isOpen(node: Node): boolean {
  return open.value.includes(idOf(node))
}

function toggle(node: Node): void {
  const id = idOf(node)
  const next = isOpen(node) ? open.value.filter((o) => o !== id) : [...open.value, id]
  if (props.expanded) emit('update:expanded', next)
  else ownExpanded.value = next
}

/** Whether this node or anything under it answers the filter. */
function matches(node: Node): boolean {
  const needle = (props.filter ?? '').trim().toLowerCase()
  if (!needle) return true
  const text = String(node[props.textBy] ?? '').toLowerCase()
  if (text.includes(needle)) return true
  return (node.children ?? []).some(matches)
}

const shown = computed(() => props.nodes.filter(matches))

/* A search says which branches to open by itself: a match three levels
   down is no use behind three closed rows. */
function showsOpen(node: Node): boolean {
  return isOpen(node) || (!!props.filter?.trim() && (node.children ?? []).some(matches))
}
</script>

<template>
  <ul class="tree">
    <li v-for="node in shown" :key="idOf(node)" class="node">
      <div class="node__row" :style="{ paddingLeft: `${depth * 14 + 2}px` }">
        <button
          v-if="node.children?.length"
          type="button"
          class="node__twist"
          :aria-expanded="showsOpen(node)"
          :aria-label="showsOpen(node) ? 'Zuklappen' : 'Aufklappen'"
          @click.stop="toggle(node)"
        >
          <DIcon :name="showsOpen(node) ? 'expand_more' : 'chevron_right'" size="sm" tone="color-dim" />
        </button>
        <span v-else class="node__leaf" />

        <div class="node__content">
          <slot name="content" v-bind="node">{{ node[textBy] }}</slot>
        </div>
      </div>

      <TreeView
        v-if="node.children?.length && showsOpen(node)"
        :nodes="node.children"
        :expanded="expanded"
        :filter="filter"
        :text-by="textBy"
        :depth="depth + 1"
        @update:expanded="(open) => emit('update:expanded', open)"
      >
        <template #content="child">
          <slot name="content" v-bind="child" />
        </template>
      </TreeView>
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
  gap: 2px;
  min-height: 24px;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg);
}

.node__row:hover {
  background-color: color-mix(in srgb, var(--color-pane) 70%, transparent);
}

.node__twist {
  display: flex;
  align-items: center;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
}

.node__twist:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -2px;
}

/* Keeps a leaf's content on the same edge as a branch's. */
.node__leaf {
  width: 18px;
  flex: none;
}

.node__content {
  flex: 1 1 auto;
  min-width: 0;
}
</style>
