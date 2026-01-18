<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script setup lang="ts">

import { onMounted, nextTick } from 'vue'
import { useMoveableLayout } from '../composables/useMovableLayout'
import { WidgetWrapper } from 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper'
import { useRoute } from 'vue-router'
import { container, identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import type { TinyEmitter } from 'tiny-emitter'

const props = defineProps<{
  pageId?: string
}>();
const route = useRoute();
const pageID = props.pageId ?? route.params.pageid ?? '';

const {
  layoutStore,
  widgetStore,
  getInitialStyle,
} = useMoveableLayout(pageID as string || '');

// Get EventBus for page loaded event
const eventBus = container.get<TinyEmitter>(identifiers.TINY_EMITTER)

onMounted(async () => {
  console.log('Base View component mounted for page:', pageID)
  // Wait for widgets to be mounted and registered
  await nextTick()
  console.log('📄 Emitting system:pageLoaded for page:', pageID)
  eventBus.emit('system:pageLoaded', { pageId: pageID })
})

</script>

<template>
  <div class="widget-board">
    <template v-for="widget in widgetStore?.widgets || []" :key="widget.uid">
      <div
        :class="`${widget.uid} dashboard-item-container`"
        :style="getInitialStyle(widget.uid)"
        :ref="widget.uid"
      >
        <div class="dashboard-item">
          <WidgetWrapper
            :widget="widget"
            :ref="`${widget.uid}_wrapper`"
            :editEnabled="false"
          />
        </div>
      </div>
    </template>
  </div>
</template>
<style scoped>
.dottet{
  background: #fafafa;
  background-image: radial-gradient(#b8b8b8 1px, transparent 0);
  background-size: 40px 40px;
  background-position: -19px -19px;
}
.ghost-placeholder {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border: 2px dashed #ccc;
  z-index: 100000;
  pointer-events: none;
}

.report-container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
}

.report-container__title {
  width: 100%;
  padding: 16px;
  border-bottom: 1px dashed #e0e0e0;
}

.report-container .widgets-adding-controls {
  display: flex;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin: 16px;
}

.report-container .widget-board {
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
}

.report-container .add-btn {
  margin: 0 16px 16px 0;
  align-self: self-end;
}

.dashboard-item {
  position: absolute;
  width: 100%;
  height: 100%;
}

.dashboard-item-container {
  position: absolute;
}

.dropdown-buttons-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 99999;
}

.va-dropdown__content {
  z-index: 10000000 !important;
}

.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper {
  z-index: 20000000 !important;
}

.add_widget-button {
  position: absolute;
  display: flex;
  flex-direction: row;
  gap: 10px;
  right: 30px;
  bottom: 20px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
