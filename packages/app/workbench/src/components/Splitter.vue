<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<!--
  An edge between two panes that can be dragged. It reports how far it
  moved; the parent decides which size that changes and in which direction.
  Arrow keys move it too, ten pixels at a time.
-->
<script setup lang="ts">
const props = defineProps<{
  direction: 'vertical' | 'horizontal'
  label: string
}>()

const emit = defineEmits<{ (event: 'resize', delta: number): void }>()

function start(event: PointerEvent) {
  const target = event.currentTarget as HTMLElement
  target.setPointerCapture(event.pointerId)
  let last = props.direction === 'vertical' ? event.clientX : event.clientY
  const move = (e: PointerEvent) => {
    const now = props.direction === 'vertical' ? e.clientX : e.clientY
    if (now !== last) emit('resize', now - last)
    last = now
  }
  const stop = () => {
    target.removeEventListener('pointermove', move)
    target.removeEventListener('pointerup', stop)
    target.removeEventListener('pointercancel', stop)
    document.body.classList.remove('wb-resizing')
  }
  document.body.classList.add('wb-resizing')
  target.addEventListener('pointermove', move)
  target.addEventListener('pointerup', stop)
  target.addEventListener('pointercancel', stop)
}

function key(event: KeyboardEvent) {
  const back = props.direction === 'vertical' ? 'ArrowLeft' : 'ArrowUp'
  const forth = props.direction === 'vertical' ? 'ArrowRight' : 'ArrowDown'
  if (event.key === back) emit('resize', -10)
  else if (event.key === forth) emit('resize', 10)
  else return
  event.preventDefault()
}
</script>

<template>
  <div
    class="splitter"
    :class="`splitter--${direction}`"
    role="separator"
    tabindex="0"
    :aria-orientation="direction"
    :aria-label="label"
    @pointerdown.prevent="start"
    @keydown="key"
  />
</template>

<style scoped>
.splitter {
  flex: none;
  background: var(--color-divider);
  transition: background 0.12s;
  touch-action: none;
}

.splitter--vertical {
  width: var(--spacing-splitter, 4px);
  cursor: col-resize;
}

.splitter--horizontal {
  height: var(--spacing-splitter, 4px);
  cursor: row-resize;
}

.splitter:hover,
.splitter:focus-visible {
  background: var(--color-accent);
  outline: none;
}
</style>

<style>
body.wb-resizing {
  user-select: none;
}
</style>
