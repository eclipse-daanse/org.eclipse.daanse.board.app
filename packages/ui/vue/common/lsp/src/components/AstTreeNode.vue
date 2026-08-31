<script setup lang="ts">
/**
 * One row of the AST panel, for every row kind the tree has: AST nodes, the
 * scalar properties hanging off them, cross-references, skipped argument slots
 * and outline symbols. They share an interaction shape — click to highlight
 * the source and open the row — and differ only in styling, so one component
 * covers all of them.
 *
 * A sibling of `MetadataTreeNode`, not a generalisation of it: that one is
 * bound to the metadata cache's async paging and its XMLA drag payload, and
 * neither applies here.
 *
 * Behaviour is read from the composable singleton rather than prop-drilled
 * through the recursion, as in the metadata tree.
 */
import { computed, ref, watch } from 'vue'
// Explicit self-import — required for a component to recurse into itself
// under <script setup>.
import AstTreeNode from './AstTreeNode.vue'
import { useAstTree, type AstTreeRow } from '../composables/useAstTree.js'

const props = defineProps<{
  node: AstTreeRow
  depth: number
}>()

const { isExpanded, selectRow, activeId } = useAstTree()

const row = ref<HTMLButtonElement | null>(null)
const expanded = computed(() => isExpanded(props.node))
const active = computed(() => activeId.value === props.node.id)
const rowIndent = computed(() => `${props.depth * 14 + 6}px`)

// The caret can select a row far outside the viewport, so a row that becomes
// active scrolls itself into view. `nearest` keeps the tree still when the row
// is already visible.
watch(active, (isActive) => {
  if (isActive) row.value?.scrollIntoView({ block: 'nearest' })
})
</script>

<template>
  <div>
    <button
      ref="row"
      type="button"
      class="row"
      :class="[`row--${node.kind}`, { 'row--active': active }]"
      :style="{ paddingLeft: rowIndent }"
      :title="node.detail ? `${node.label} ${node.detail}` : node.label"
      @click="selectRow(node)"
    >
      <svg
        v-if="node.children.length > 0"
        viewBox="0 0 16 16"
        class="chevron"
        :class="{ 'chevron--open': expanded }"
        aria-hidden="true"
      >
        <path d="M6 4l4 4-4 4V4Z" />
      </svg>
      <span v-else class="chevron-spacer" />

      <span class="label">{{ node.label }}</span>
      <span v-if="node.detail" class="detail">{{ node.detail }}</span>
    </button>

    <template v-if="expanded">
      <AstTreeNode v-for="child in node.children" :key="child.id" :node="child" :depth="depth + 1" />
    </template>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  width: 100%;
  padding: 0.2rem 0.4rem;
  border: 0;
  border-radius: 3px;
  background: none;
  font: inherit;
  font-size: 0.8rem;
  color: var(--text);
  text-align: left;
  cursor: pointer;
}

.row:hover {
  background: var(--surface-raised);
}

.row:focus-visible {
  outline: 1px solid var(--accent);
  outline-offset: -1px;
}

.row--active {
  background: var(--surface-raised);
  box-shadow: inset 2px 0 0 var(--accent);
}

/* Values and references read as data rather than structure. */
.row--scalar .label,
.row--reference .label {
  color: var(--text-muted);
}

.row--reference .detail {
  color: var(--accent);
}

/* A slot the author left empty — `Fn(, , x)`. */
.row--empty .label,
.row--empty .detail {
  color: var(--warning);
  font-style: italic;
}

.chevron,
.chevron-spacer {
  width: 0.75rem;
  height: 0.75rem;
  flex-shrink: 0;
}

.chevron {
  fill: currentColor;
  color: var(--text-muted);
  transition: transform 0.12s;
}

.chevron--open {
  transform: rotate(90deg);
}

.label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: var(--mono);
  font-size: 0.74rem;
}

.detail {
  flex-shrink: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--text-muted);
}

@media (prefers-reduced-motion: reduce) {
  .chevron {
    transition: none;
  }
}
</style>
