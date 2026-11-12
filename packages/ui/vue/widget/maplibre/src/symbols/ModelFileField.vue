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
 * The model file of a symbol layer in the generated form: the generic field,
 * then whether the file can be read - it is fetched to say so (#1296).
 */
import { computed, inject } from 'vue'
import type { EObject, EStructuralFeature } from '@emfts/core'
import { SettingsFieldWidget } from 'org.eclipse.daanse.board.app.ui.vue.uimodel'
import { SYMBOL_LAYER_CONTEXT } from './symbolLayerContext'

const props = defineProps<{
  eObject?: EObject
  feature?: EStructuralFeature
  custom?: Record<string, unknown>
}>()

const context = inject(SYMBOL_LAYER_CONTEXT, undefined)
const status = computed(() => context?.fileStatus((props.eObject as unknown as { url?: unknown } | undefined)?.url))
</script>

<template>
  <div class="file-field">
    <SettingsFieldWidget :e-object="eObject" :feature="feature" :custom="custom" />
    <p v-if="status" :class="['file-field__status', { 'file-field__status--error': status.error }]" role="status">
      {{ status.text }}
    </p>
  </div>
</template>

<style scoped>
.file-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.file-field__status {
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-dim);
  overflow-wrap: anywhere;
}

.file-field__status--error {
  color: var(--color-err);
}
</style>
