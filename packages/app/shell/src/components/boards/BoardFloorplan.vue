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
 * A board's floorplan: its widgets drawn to scale from the stored layout.
 *
 * This is what tells two boards apart before you read their names - the
 * arrangement is the one visual property a board already has, so it does
 * the work a generic thumbnail would only pretend to do. Blocks are
 * coloured by widget family, which makes the plan say what kind of board
 * this is as well as how it is arranged.
 */
import { computed } from 'vue'

const props = defineProps<{
  /** Layout items as stored: id, x, y, width, height. */
  items: Array<{ id?: string; x?: number; y?: number; width?: number; height?: number }>
  /** Widget type per layout id, for colouring. */
  typeById?: Record<string, string>
}>()

/** Which family a widget type belongs to - substring match, so new types land sensibly. */
function familyOf(type: string | undefined): 'data' | 'visual' | 'text' {
  const t = (type ?? '').toLowerCase()
  if (/chart|table|pivot|kpi|progress|timeline|filter|rss|weather/.test(t)) return 'data'
  if (/map|routing|image|video|vanta|svg|icon|mermaid|geo/.test(t)) return 'visual'
  return 'text'
}

/**
 * Normalised blocks in percent, so a pixel layout and a grid layout draw
 * the same way: the bounding box of all items becomes the frame.
 */
const blocks = computed(() => {
  const items = (props.items ?? []).filter(
    (i) => Number.isFinite(i.x) && Number.isFinite(i.y),
  )
  if (items.length === 0) return []

  const maxX = Math.max(...items.map((i) => (i.x ?? 0) + (i.width ?? 1)))
  const maxY = Math.max(...items.map((i) => (i.y ?? 0) + (i.height ?? 1)))
  const spanX = maxX > 0 ? maxX : 1
  const spanY = maxY > 0 ? maxY : 1

  return items.map((item) => ({
    key: item.id ?? `${item.x}-${item.y}`,
    family: familyOf(props.typeById?.[item.id ?? '']),
    style: {
      left: `${((item.x ?? 0) / spanX) * 100}%`,
      top: `${((item.y ?? 0) / spanY) * 100}%`,
      // minus the gutter, so neighbouring widgets stay visibly separate
      width: `calc(${Math.max(((item.width ?? 1) / spanX) * 100, 3)}% - 3px)`,
      height: `calc(${Math.max(((item.height ?? 1) / spanY) * 100, 6)}% - 3px)`,
    },
  }))
})
</script>

<template>
  <div class="floorplan" aria-hidden="true">
    <div
      v-for="block in blocks"
      :key="block.key"
      class="floorplan__block"
      :class="`floorplan__block--${block.family}`"
      :style="block.style"
    />
    <span v-if="blocks.length === 0" class="floorplan__empty">no widgets</span>
  </div>
</template>

<style scoped>
.floorplan {
  position: relative;
  aspect-ratio: 16 / 9;
  background-color: var(--color-bg);
  border-bottom: 1px solid var(--color-divider);
  overflow: hidden;
}

.floorplan__block {
  position: absolute;
  margin: 2px 0 0 2px;
  border: 1px solid color-mix(in srgb, currentColor 55%, transparent);
  border-radius: 2px;
  /* Solid enough to read as a family at a glance, quiet enough that the
     arrangement stays the first thing you see */
  background-color: color-mix(in srgb, currentColor 30%, var(--color-pane));
}

.floorplan__block--data {
  color: var(--color-accent);
}

.floorplan__block--visual {
  color: var(--color-brand);
}

.floorplan__block--text {
  color: var(--color-dim);
}

.floorplan__empty {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-size: var(--text-xs);
  color: var(--color-dim);
}
</style>
