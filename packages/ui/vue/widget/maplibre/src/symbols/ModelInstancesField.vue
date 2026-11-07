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
 * The instances of a symbol layer in the generated form: the place mode on
 * the preview map, then the generic list of the instances (#1296).
 */
import { computed, inject } from 'vue'
import type { EObject, EStructuralFeature } from '@emfts/core'
import { DButton, DIcon } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { SettingsListWidget } from 'org.eclipse.daanse.board.app.ui.vue.uimodel'
import { SYMBOL_LAYER_CONTEXT } from './symbolLayerContext'

const props = defineProps<{
  eObject?: EObject
  feature?: EStructuralFeature
  custom?: Record<string, unknown>
}>()

const { t } = useTranslation('maplibre')
const context = inject(SYMBOL_LAYER_CONTEXT, undefined)
const layerId = computed(() => String((props.eObject as unknown as { id?: unknown } | undefined)?.id ?? ''))
const active = computed(() => !!layerId.value && context?.placingId.value === layerId.value)
</script>

<template>
  <div class="instances-field">
    <div v-if="context" class="instances-field__place">
      <DButton size="sm" :intent="active ? 'primary' : 'default'" @click="context.togglePlacing({ id: layerId })">
        <DIcon name="ads_click" size="sm" />{{ active ? t('Settings.models.placing') : t('Settings.models.place') }}
      </DButton>
      <p v-if="active" class="instances-field__hint">{{ t('Settings.models.placeHint') }}</p>
    </div>
    <SettingsListWidget :e-object="eObject" :feature="feature" :custom="custom" />
  </div>
</template>

<style scoped>
.instances-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.instances-field__place {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.instances-field__hint {
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-dim);
}
</style>
