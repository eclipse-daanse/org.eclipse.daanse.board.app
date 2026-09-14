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
/**
 * The menu a right-click opens in the tree.
 *
 * Teleported to the body and placed at the pointer, so it is not clipped by
 * the scrolling panel it was opened over. It closes on a choice, on Escape,
 * on a click elsewhere, and on a scroll - a menu that stays behind while the
 * list moves under it points at the wrong row.
 */
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { DIcon } from 'org.eclipse.daanse.board.app.ui.vue.controls'

export interface MenuItem {
  /** What the item does, returned to the opener. */
  id: string
  label: string
  icon?: string
  /** Sets it apart as destructive. */
  danger?: boolean
  /** A rule above it, for a group that does something different. */
  separated?: boolean
}

const props = defineProps<{
  /** Pointer position, or undefined while the menu is closed. */
  at?: { x: number; y: number }
  items: MenuItem[]
}>()

const emit = defineEmits<{ choose: [id: string]; close: [] }>()

const menu = ref<HTMLElement | undefined>()
const placed = ref({ x: 0, y: 0 })

const open = computed(() => !!props.at && props.items.length > 0)

/* Measured after it renders: a menu opened near the edge has to come back
   inside, and how far depends on how tall it turned out. */
watch(
  () => props.at,
  async (at) => {
    if (!at) return
    placed.value = { x: at.x, y: at.y }
    await nextTick()
    const box = menu.value?.getBoundingClientRect()
    if (!box) return
    const margin = 8
    placed.value = {
      x: Math.min(at.x, window.innerWidth - box.width - margin),
      y: Math.min(at.y, window.innerHeight - box.height - margin),
    }
  },
)

function onKey(event: KeyboardEvent) {
  if (event.key === 'Escape') emit('close')
}

watch(open, (isOpen) => {
  if (isOpen) {
    window.addEventListener('keydown', onKey)
    window.addEventListener('scroll', () => emit('close'), { once: true, capture: true })
  } else {
    window.removeEventListener('keydown', onKey)
  }
})

onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <Teleport to="body">
    <template v-if="open">
      <!-- Catches the click that dismisses, without dimming the page -->
      <div class="menu__catch" @click="emit('close')" @contextmenu.prevent="emit('close')" />
      <ul
        ref="menu"
        class="menu"
        role="menu"
        :style="{ left: `${placed.x}px`, top: `${placed.y}px` }"
      >
        <li v-for="item in items" :key="item.id" :class="{ 'menu__sep': item.separated }">
          <button
            type="button"
            role="menuitem"
            :class="['menu__item', { 'menu__item--danger': item.danger }]"
            @click="emit('choose', item.id)"
          >
            <DIcon v-if="item.icon" :name="item.icon" size="sm" />
            <span>{{ item.label }}</span>
          </button>
        </li>
      </ul>
    </template>
  </Teleport>
</template>

<style scoped>
.menu__catch {
  position: fixed;
  inset: 0;
  z-index: 50000;
}

.menu {
  position: fixed;
  z-index: 50001;
  min-width: 200px;
  margin: 0;
  padding: 4px;
  list-style: none;
  background-color: var(--color-pane);
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-e3);
}

.menu__sep {
  margin-top: 4px;
  padding-top: 4px;
  border-top: 1px solid var(--color-outline);
}

.menu__item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 6px 10px;
  font: inherit;
  color: var(--color-fg);
  text-align: left;
  background: none;
  border: 0;
  border-radius: var(--radius-xs, 3px);
  cursor: pointer;
}

.menu__item:hover,
.menu__item:focus-visible {
  background-color: var(--color-sunken);
}

.menu__item--danger {
  color: var(--color-err);
}
</style>
