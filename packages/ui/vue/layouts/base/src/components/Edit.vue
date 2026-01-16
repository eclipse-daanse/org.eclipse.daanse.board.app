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
import { ref, computed, inject } from 'vue'
import Moveable from 'vue3-moveable'
import Draggable from 'vuedraggable'
import { useMoveableLayout, type ILayoutItem } from '../composables/useMovableLayout'

import { WidgetWrapper,defaultConfig } from 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper'
import { cloneDeep } from 'lodash'
import { useRouter, useRoute } from 'vue-router'

const emit = defineEmits(['openSettings', 'removeWidget'])

const route = useRoute()
const router = useRouter()
const pageId = (route.params.pageid as string) || ''

const widgetConfig = ref()
const widgetSettingsOpenedId = ref('')
const widgetsTmp = ref([])

const isDragging = ref(false)

const endpointfinder = inject('endpointfinder');
const endPointFinder = ()=>{
  (endpointfinder as any)()
}
const endpointfinder_present = computed(()=>{
  return !!endpointfinder
})
const widgetSelectorVisible = ref(false)

const pageSettingsOpenedId = ref<string|undefined>(undefined);

const {
  layoutStore,
  widgetStore,
  clipboardStore,
  ghostPlaceholder,
  processDropCoordinates,
  processDragOverCoordinates,
  hidePlaceholder,
  getInitialStyle,
  getMovableControlStyles,
  drag,
  resize,
  moveUp,
  moveDown,
  moveToBottom,
  moveToTop,
  addWidget: addWidgetComposable,
  removeWidget: removeWidgetComposable,
  copyWidget: copyWidgetComposable,
  pasteWidget: pasteWidgetComposable,
} = useMoveableLayout(pageId)

const safeWidgets = computed(() => widgetStore?.widgets || [])

// Copy/Paste functionality
const pastePosition = ref({ x: 0, y: 0 })

const captureMousePosition = (event: MouseEvent) => {
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  pastePosition.value = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }
}

const copyWidget = (widgetId: string) => {
  copyWidgetComposable(widgetId)
}

const pasteWidget = () => {
  pasteWidgetComposable(pastePosition.value.x, pastePosition.value.y)
}

// Canvas context menu state
const canvasContextMenu = ref({ visible: false, x: 0, y: 0 })

const onCanvasContextMenu = (event: MouseEvent) => {
  // Only show paste menu if clipboard has content
  if (!clipboardStore.hasClipboard) {
    canvasContextMenu.value.visible = false
    return // Allow native context menu
  }

  event.preventDefault()
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  pastePosition.value = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }
  canvasContextMenu.value = {
    visible: true,
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }
}

const closeCanvasContextMenu = () => {
  canvasContextMenu.value.visible = false
}

const pasteWidgetFromMenu = () => {
  pasteWidgetComposable(pastePosition.value.x, pastePosition.value.y)
  canvasContextMenu.value.visible = false
}




const addWidget = (type: string, datasourceId: string, dropX: number, dropY: number) => {
  const config = { datasourceId, settings: {} }
  const wrapperConfig = cloneDeep(defaultConfig)

  const width = ghostPlaceholder.value.width
  const height = ghostPlaceholder.value.height

  const layoutConfig = {
    x: dropX - width / 2,
    y: dropY - height / 2,
    width,
    height,
    z: 3005,
  }

  addWidgetComposable(type, config, wrapperConfig, layoutConfig)
}

const openWidgetSettings = (id: string) => {
  emit('openSettings', id)
}

const saveLayout = () => {
  // Values are already in the store, no need to save
}

const resetLayout = () => {
  // Reset to empty state using store methods
  widgetStore?.updateWidgets([])
  layoutStore?.updateLayout([])
}

const isSaveResetDisabled = computed(() => {
  return safeWidgets.value.length === 0 && (layoutStore?.layout || []).length === 0
})

const removeWidget = (uid: string) => {
  removeWidgetComposable(uid)
  emit('removeWidget', uid)
}

const currentlyEditingWidget = computed(() => {
  return safeWidgets.value.find((widget:any) => widget.uid === widgetSettingsOpenedId.value)
})

const onDrop = (event: DragEvent) => {
  console.log('ondrop')
  hidePlaceholder()
  const currentTarget = event.currentTarget as HTMLElement

  if (currentTarget) {
    const { dropX, dropY } = processDropCoordinates(event, currentTarget)

    widgetConfig.value = { dropX: dropX, dropY: dropY }
  }
}

const onDragOver = (event: DragEvent) => {
  if (event.dataTransfer?.types.includes('text/plain')) {
    event.preventDefault()
    isDragging.value = true

    const currentTarget = event.currentTarget as HTMLElement

    if (currentTarget) {
      processDragOverCoordinates(event, currentTarget)
    }
  }
}

const onDragLeave = (event: DragEvent) => {
  if (event.dataTransfer?.types.includes('text/plain')) {
    isDragging.value = false
    hidePlaceholder()
  }
}

const change = (e: any) => {
  console.log(e)
  // const datasource = e.added.element.ds
  const datasource = 'test'
  const widgetType = e.added?.element?.type || 'default'
  addWidget(widgetType, datasource, widgetConfig.value.dropX, widgetConfig.value.dropY)
}

</script>

<template>
  <div class="report-container dottet" @contextmenu="onCanvasContextMenu" @click="closeCanvasContextMenu">
    <draggable
      :list="widgetsTmp"
      :group="{ name: 'widgets' }"
      ghost-class="ghost"
      itemKey="type"
      style="position: absolute; top: 0; left: 0; height: 100%; width: 100%"
      @change="change"
      @drop="onDrop"
      @dragover="onDragOver"
      @dragleave="onDragLeave"
      @contextmenu="onCanvasContextMenu"
    >
      <template #item="{ element }">
        <div style="display: none">{{ element?.type || '' }}</div>
      </template>
    </draggable>
    <div class="widget-board">
      <div
        v-if="ghostPlaceholder.visible"
        class="ghost-placeholder"
        :style="{
          left: `${ghostPlaceholder.x}px`,
          top: `${ghostPlaceholder.y}px`,
          width: `${ghostPlaceholder.width}px`,
          height: `${ghostPlaceholder.height}px`,
        }"
      ></div>
      <template v-for="widget in safeWidgets" :key="widget.uid">
        <div
          :class="`${widget.uid} dashboard-item-container`"
          :style="getInitialStyle(widget.uid)"
          :ref="widget.uid"
        >
          <va-dropdown
            :trigger="'right-click'"
            :auto-placement="false"
            placement="right-start"
            cursor
          >
            <template #anchor>
              <div class="dashboard-item" @contextmenu.stop>
                <WidgetWrapper
                  :widget="widget"
                  :ref="`${widget.uid}_wrapper`"
                  @openSettings="openWidgetSettings"
                  editEnabled
                  @removeWidget="removeWidget"
                />
              </div>
            </template>
            <va-dropdown-content>
              <div class="dropdown-buttons-container">
                <va-button @click="moveUp(widget.uid)"> Move up </va-button>
                <va-button @click="moveDown(widget.uid)"> Move down </va-button>
                <va-button @click="moveToTop(widget.uid)"> Move to top </va-button>
                <va-button @click="moveToBottom(widget.uid)"> Move to bottom </va-button>
                <va-button @click="copyWidget(widget.uid)"> Copy </va-button>
              </div>
            </va-dropdown-content>
          </va-dropdown>
        </div>
        <Moveable
          v-bind:target="[`.${widget.uid}`]"
          v-bind:draggable="true"
          v-bind:resizable="true"
          v-bind:useResizeObserver="true"
          v-bind:useMutationObserver="true"
          @drag="drag(widget.uid, $event)"
          @resize="resize(widget.uid, $event)"
          :snappable="true"
          :snapGridWidth="20"
          :snapGridHeight="20"
          :origin="false"
          :ref="`${widget.uid}_control`"
          :style="getMovableControlStyles(widget.uid)"
        >
        </Moveable>
      </template>

      <!-- Canvas Context Menu (floating) for Paste -->
      <div
        v-if="canvasContextMenu.visible && clipboardStore.hasClipboard"
        class="canvas-context-menu"
        :style="{ left: canvasContextMenu.x + 'px', top: canvasContextMenu.y + 'px' }"
      >
        <div class="dropdown-buttons-container">
          <va-button @click="pasteWidgetFromMenu" size="small"> Paste </va-button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.ghost {
  display: none;
}
</style>

<style scoped>
.dottet{
  background: #fafafa;
  background-image: radial-gradient(#b8b8b8 1px, transparent 0);
  background-size: 10px 10px;
  background-position: -19px -19px;
  animation: fadeDots 1.2s ease-out forwards;
  background-repeat: repeat;
  opacity: 0;
}
@keyframes fadeDots {
  0% {
    background-size: 10px 10px;
    opacity: 0;
  }
  50% {
    background-size: 50px 50px;
    opacity: 0.5;
  }
  100% {
    background-size: 40px 40px;
    opacity: 1;
  }
}
.ghost-placeholder {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border: 2px dashed #ccc;
  z-index: 1000000;
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

.widget-board-dropdown {
  width: 100%;
  height: 100%;
}

.dropdown-buttons-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 99999;
}

.canvas-context-menu {
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 10000001;
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
.pages_board{
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  left: 80px;
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


.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform:  scaleY(0%) translateY(100%);
    opacity: 0;
  }
  100% {
    transform: scaleY(100%) translateY(0%);
    opacity: 1;
  }
}
</style>
