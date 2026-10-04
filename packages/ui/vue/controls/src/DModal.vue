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
 * A dialog: title, content, and the actions that close it.
 *
 * Escape and a click on the scrim both cancel, because a dialog you cannot
 * leave by reflex is a trap. Anything destructive should ask again in its
 * own words rather than relying on the dialog to be careful.
 */
import { onBeforeUnmount, onMounted, watch } from 'vue'

const open = defineModel<boolean>({ default: false })

const props = withDefaults(
  defineProps<{
    title?: string
    /** Roughly how much room the content needs. */
    size?: 'sm' | 'md' | 'lg'
    /** Escape and scrim clicks stop working - for a step that must be answered. */
    persistent?: boolean
  }>(),
  { size: 'md', persistent: false },
)

const emit = defineEmits(['cancel'])

function close() {
  if (props.persistent) return
  open.value = false
  emit('cancel')
}

function onKey(event: KeyboardEvent) {
  if (event.key === 'Escape' && open.value) close()
}

watch(open, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="scrim" @click.self="close">
      <div :class="['dialog', `dialog--${size}`]" role="dialog" aria-modal="true" :aria-label="title">
        <header v-if="title || $slots.header" class="dialog__head">
          <slot name="header">
            <h2 class="dialog__title">{{ title }}</h2>
          </slot>
          <button
            v-if="!persistent"
            type="button"
            class="dialog__close"
            aria-label="Schließen"
            @click="close"
          >
            ✕
          </button>
        </header>

        <div class="dialog__body"><slot /></div>

        <footer v-if="$slots.actions" class="dialog__foot">
          <slot name="actions" />
        </footer>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.scrim {
  position: fixed;
  inset: 0;
  z-index: 40000;
  display: grid;
  place-items: center;
  padding: 24px;
  background-color: color-mix(in srgb, var(--color-canvas) 62%, transparent);
  backdrop-filter: blur(4px);
}

.dialog {
  display: flex;
  flex-direction: column;
  max-height: 100%;
  background-color: var(--color-pane);
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-e3);
  overflow: hidden;
}

.dialog--sm { width: 380px; }
.dialog--md { width: 560px; }
.dialog--lg { width: 840px; }

.dialog__head {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: none;
  padding: 9px 12px;
  border-bottom: 1px solid var(--color-divider);
}

.dialog__title {
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-fg);
}

.dialog__close {
  margin-left: auto;
  width: 22px;
  height: 22px;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
  background: none;
  border: 0;
  border-radius: var(--radius-xs);
  cursor: pointer;
}

.dialog__close:hover {
  color: var(--color-fg);
  background-color: var(--color-raised);
}

.dialog__close:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}

.dialog__body {
  flex: 1 1 auto;
  min-height: 0;
  padding: 14px 12px;
  overflow-y: auto;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg);
}

.dialog__foot {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 7px;
  flex: none;
  padding: 9px 12px;
  border-top: 1px solid var(--color-divider);
}
</style>
