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
 * Says, after a copy, how to paste (#1225). One component for every
 * layout, so the base and the grid say it in the same words.
 */
import { computed } from 'vue'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { DIcon } from 'org.eclipse.daanse.board.app.ui.vue.controls'

defineProps<{ shown: boolean }>()
defineEmits<{ dismiss: [] }>()

const { t } = useTranslation('layoutsBase')

/* The key as it is printed on the keyboard in front of one. */
const onMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent)
const text = computed(() =>
  t('Clipboard.copied', { shortcut: onMac ? t('Clipboard.pasteKeyMac') : t('Clipboard.pasteKey') }),
)
</script>

<template>
  <Transition name="clipboard-notice">
    <p v-if="shown" class="clipboard-notice" role="status" @click="$emit('dismiss')">
      <DIcon name="content_paste" size="sm" class="clipboard-notice__icon" aria-hidden="true" />
      {{ text }}
    </p>
  </Transition>
</template>

<style scoped>
.clipboard-notice {
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  z-index: 100001;
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: calc(100vw - 32px);
  margin: 0;
  padding: 8px 14px;
  background: var(--color-pane, #fff);
  color: var(--color-text, inherit);
  border: 1px solid var(--color-divider, #ccd1d9);
  border-radius: var(--radius-sm, 5px);
  box-shadow: var(--shadow-e2, 0 4px 12px rgb(0 0 0 / 0.15));
  font-size: 13px;
  cursor: default;
}

.clipboard-notice__icon {
  color: var(--color-accent, #2f5fbd);
}

.clipboard-notice-enter-active,
.clipboard-notice-leave-active {
  transition: opacity 140ms ease, transform 140ms ease;
}

.clipboard-notice-enter-from,
.clipboard-notice-leave-to {
  opacity: 0;
  transform: translate(-50%, 6px);
}
</style>
