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
 * The layers of a map, as its settings list them (#1274): drawn in this
 * order, each switched on or off, with its opacity, and removable. Shared by
 * the Leaflet map and the 3D map; what else a layer offers (the styles of a
 * Leaflet layer) comes through the actions slot.
 *
 * The layers are the model's objects: switching and the opacity write into
 * them, and the adapter of the widget hears it. The order is handed back,
 * as the list belongs to the settings that own it.
 */
import { ref } from 'vue'
import Draggable from 'vuedraggable-es'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { DButton, DIcon, DSlider } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import type { ListedLayer } from './listedLayer'

defineProps<{ layers: ListedLayer[] }>()
const emit = defineEmits<{
  (event: 'reorder', order: ListedLayer[]): void
  (event: 'remove', layer: ListedLayer): void
}>()
defineSlots<{ actions?: (props: { layer: ListedLayer }) => unknown }>()

const { t } = useTranslation('commonMap')
const dragging = ref(false)

const toggle = (layer: ListedLayer) => {
  layer.checked = !layer.checked
}
const setOpacity = (layer: ListedLayer, value: number | undefined) => {
  layer.opacity = value ?? 1
}
</script>

<template>
  <span v-if="!layers.length" class="wms-layers__empty">{{ t('Layers.empty') }}</span>
  <Draggable
    v-else
    :model-value="layers"
    :animation="150"
    :component-data="{ tag: 'ul', type: 'transition-group', name: !dragging ? 'flip-list' : null }"
    class="wms-layers"
    item-key="id"
    ghost-class="wms-layers__ghost"
    @start="dragging = true"
    @end="dragging = false"
    @update:model-value="(order: ListedLayer[]) => emit('reorder', order)"
  >
    <template #item="{ element }">
      <li class="wms-layers__item">
        <div class="wms-layers__row">
          <DIcon v-if="element.reconstructionFailed" name="error" tone="color-err" />
          <DIcon
            v-else
            :name="element.checked ? 'layers' : 'layers_clear'"
            :title="element.checked ? t('Layers.hide') : t('Layers.show')"
            class="wms-layers__toggle"
            @click="toggle(element)"
          />
          <span class="wms-layers__title">{{ element.title || element.name }}</span>
          <span v-if="element.reconstructionFailed" class="wms-layers__failed">{{ t('Layers.failed') }}</span>
        </div>
        <div class="wms-layers__row wms-layers__options">
          <DIcon name="opacity" :title="t('Layers.opacity')" />
          <div class="wms-layers__slider">
            <DSlider :model-value="element.opacity ?? 1" :min="0" :max="1" :step="0.01"
              @update:model-value="(value?: number) => setOpacity(element, value)" />
          </div>
          <slot name="actions" :layer="element" />
          <DButton intent="danger" :title="t('Layers.remove')" @click.stop="emit('remove', element)">
            <DIcon name="delete" size="sm" />
          </DButton>
        </div>
      </li>
    </template>
  </Draggable>
</template>

<style scoped>
.wms-layers {
  min-height: 20px;
  margin: 0;
  padding: 0;
}

.wms-layers__item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4px;
  list-style: none;
  cursor: move;
}

.wms-layers__item:hover {
  background-color: var(--color-hover, #d6dde3);
  border-radius: var(--radius-xs);
}

.wms-layers__row {
  display: flex;
  gap: 6px;
  align-items: center;
}

.wms-layers__toggle {
  cursor: pointer;
}

.wms-layers__options {
  display: none;
  padding-top: 6px;
  padding-left: 12px;
  border-top: 1px dotted #00000047;
}

.wms-layers__item:hover .wms-layers__options {
  display: flex;
}

.wms-layers__slider {
  min-width: 150px;
  padding: 2px 7px;
}

.wms-layers__failed {
  color: var(--color-err);
}

.wms-layers__empty {
  display: block;
  text-align: center;
  font-variant: small-caps;
  font-style: italic;
  color: var(--color-dim);
}

.wms-layers__ghost {
  opacity: 0.5;
}

.flip-list-move {
  transition: transform 0.5s;
}
</style>
