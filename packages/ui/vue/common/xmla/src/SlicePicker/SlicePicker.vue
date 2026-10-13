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
 * The plain way through pages and chapters: a dropdown for each, the way
 * a report's page fields work. Child members sit indented under their
 * parent; the caller says which positions there are and which is chosen.
 */
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'

export interface SlicePickerOption {
  index: number
  label: string
  /** How far under the top of its axis. */
  depth: number
}

const { t } = useTranslation('xmla')

defineProps<{
  pages: SlicePickerOption[]
  /** Absent where the query has no chapters. */
  chapters?: SlicePickerOption[]
  page: number
  chapter: number
}>()

const emit = defineEmits<{
  'update:page': [index: number]
  'update:chapter': [index: number]
}>()

const INDENT = '   '
const text = (option: SlicePickerOption) => INDENT.repeat(option.depth) + option.label
const chosen = (event: Event) => Number((event.target as HTMLSelectElement).value)
</script>

<template>
  <div class="slice-picker" role="group" :aria-label="t('SlicePicker.label')">
    <label class="slice-picker__field">
      <span class="slice-picker__label">{{ t('SlicePicker.page') }}</span>
      <select :value="page" @change="emit('update:page', chosen($event))">
        <option v-for="option in pages" :key="option.index" :value="option.index">{{ text(option) }}</option>
      </select>
    </label>
    <label v-if="chapters" class="slice-picker__field">
      <span class="slice-picker__label">{{ t('SlicePicker.chapter') }}</span>
      <select :value="chapter" @change="emit('update:chapter', chosen($event))">
        <option v-for="option in chapters" :key="option.index" :value="option.index">{{ text(option) }}</option>
      </select>
    </label>
  </div>
</template>

<style scoped>
.slice-picker {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg);
}

.slice-picker__field {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  min-width: 0;
}

.slice-picker__label {
  color: var(--color-dim);
}

.slice-picker select {
  max-width: 16rem;
  padding: 0.125rem 0.375rem;
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  background: var(--color-raised);
  color: var(--color-fg);
}

.slice-picker select:focus-visible {
  outline: 2px solid var(--color-outline);
  outline-offset: 1px;
}
</style>
