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
 * What a right-click on a cell or a member offers.
 *
 * The two places that need one had a dropdown component each, opened on
 * right-click, holding a button group of plain buttons styled back into a
 * menu with !important. This is the menu: it opens where the pointer was,
 * closes on Escape, on a click elsewhere and on choosing something.
 */
import { onBeforeUnmount, ref, watch } from 'vue'

const open = defineModel<boolean>({ default: false })

const at = ref({ x: 0, y: 0 })
const menu = ref<HTMLElement | null>(null)

function show(event: MouseEvent) {
  event.preventDefault()
  at.value = { x: event.clientX, y: event.clientY }
  open.value = true
}

function close() {
  open.value = false
}

function onDocument(event: MouseEvent) {
  if (!menu.value?.contains(event.target as Node)) close()
}

function onKey(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
}

/*
 * Listening only while it is open: a menu that is closed has nothing to
 * hear, and every cell of a large table holds one of these.
 */
watch(open, (isOpen) => {
  if (isOpen) {
    document.addEventListener('mousedown', onDocument, true)
    document.addEventListener('keydown', onKey)
  } else {
    document.removeEventListener('mousedown', onDocument, true)
    document.removeEventListener('keydown', onKey)
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', onDocument, true)
  document.removeEventListener('keydown', onKey)
})
</script>

<template>
  <span class="anchor" @contextmenu="show">
    <slot name="anchor" />
  </span>

  <Teleport to="body">
    <div
      v-if="open"
      ref="menu"
      class="menu"
      role="menu"
      :style="{ left: `${at.x}px`, top: `${at.y}px` }"
      @click="close"
    >
      <slot />
    </div>
  </Teleport>
</template>

<style scoped>
.anchor {
  display: contents;
}

.menu {
  position: fixed;
  z-index: 40000;
  min-width: 180px;
  padding: 3px;
  background-color: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-e3, 0 8px 24px rgba(0, 0, 0, 0.5));
  font-family: var(--font-sans);
  font-size: var(--text-sm);
}

/* The items are buttons a caller puts in the slot; this is what they look
   like, so each caller does not describe a menu row again. */
.menu :deep(button) {
  display: block;
  width: 100%;
  padding: 5px 9px;
  border: 0;
  border-radius: var(--radius-xs);
  background: none;
  text-align: left;
  font-family: inherit;
  font-size: inherit;
  color: var(--color-fg);
  cursor: pointer;
}

.menu :deep(button:hover) {
  background-color: var(--color-raised);
}

.menu :deep(button:focus-visible) {
  outline: 2px solid var(--color-accent);
  outline-offset: -2px;
}
</style>
