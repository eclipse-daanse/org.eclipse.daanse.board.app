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
import { ref, computed, inject, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
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
  undoRedoStore,
  ghostPlaceholder,
  processDropCoordinates,
  processDragOverCoordinates,
  hidePlaceholder,
  getInitialStyle,
  getMovableControlStyles,
  dragStart,
  drag,
  resizeStart,
  resize,
  moveUp,
  moveDown,
  moveToBottom,
  moveToTop,
  addWidget: addWidgetComposable,
  removeWidget: removeWidgetComposable,
  copyWidget: copyWidgetComposable,
  pasteWidget: pasteWidgetComposable,
  undo,
  redo,
} = useMoveableLayout(pageId)

const safeWidgets = computed(() => widgetStore?.widgets || [])

// Canvas auto-sizing: compute required canvas dimensions from widget positions
const CANVAS_PADDING_X = 550
const CANVAS_PADDING_Y = 200

const canvasSize = computed(() => {
  const layout = layoutStore?.layout || []
  if (layout.length === 0) return { width: 0, height: 0 }

  let maxRight = 0
  let maxBottom = 0
  for (const item of layout) {
    const right = (item.x || 0) + (item.width || 0)
    const bottom = (item.y || 0) + (item.height || 0)
    if (right > maxRight) maxRight = right
    if (bottom > maxBottom) maxBottom = bottom
  }
  return {
    width: maxRight + CANVAS_PADDING_X,
    height: maxBottom + CANVAS_PADDING_Y,
  }
})

// Minimap
const scrollContainer = ref<HTMLElement | null>(null)
const viewportRect = ref({ x: 0, y: 0, w: 1, h: 1 })
const MINIMAP_WIDTH = 200
const MINIMAP_HEIGHT = 140

const minimapScale = computed(() => {
  const el = scrollContainer.value
  const cw = Math.max(canvasSize.value.width, el?.clientWidth || 1)
  const ch = Math.max(canvasSize.value.height, el?.clientHeight || 1)
  return Math.min(MINIMAP_WIDTH / cw, MINIMAP_HEIGHT / ch)
})

const updateViewport = () => {
  const el = scrollContainer.value
  if (!el) return
  const cw = Math.max(canvasSize.value.width, el.clientWidth)
  const ch = Math.max(canvasSize.value.height, el.clientHeight)
  viewportRect.value = {
    x: el.scrollLeft / cw,
    y: el.scrollTop / ch,
    w: el.clientWidth / cw,
    h: el.clientHeight / ch,
  }
}

const onMinimapClick = (e: MouseEvent) => {
  const el = scrollContainer.value
  if (!el) return
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  const rx = (e.clientX - rect.left) / rect.width
  const ry = (e.clientY - rect.top) / rect.height
  const cw = Math.max(canvasSize.value.width, el.clientWidth)
  const ch = Math.max(canvasSize.value.height, el.clientHeight)
  el.scrollLeft = rx * cw - el.clientWidth / 2
  el.scrollTop = ry * ch - el.clientHeight / 2
}

const showMinimap = computed(() => {
  const el = scrollContainer.value
  if (!el) return false
  return canvasSize.value.width > el.clientWidth || canvasSize.value.height > el.clientHeight
})

const onKeyDown = (e: KeyboardEvent) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
    e.preventDefault()
    undo()
  }
  if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) {
    e.preventDefault()
    redo()
  }
}

onMounted(() => {
  nextTick(() => updateViewport())
  window.addEventListener('keydown', onKeyDown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeyDown)
})

watch(canvasSize, () => nextTick(() => updateViewport()))

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

const getCanvasCoords = (event: DragEvent | MouseEvent) => {
  const el = scrollContainer.value
  if (!el) return { x: 0, y: 0 }
  const rect = el.getBoundingClientRect()
  return {
    x: event.clientX - rect.left + el.scrollLeft,
    y: event.clientY - rect.top + el.scrollTop,
  }
}

const onDrop = (event: DragEvent) => {
  console.log('ondrop')
  hidePlaceholder()
  const coords = getCanvasCoords(event)
  widgetConfig.value = { dropX: coords.x, dropY: coords.y }
}

const onDragOver = (event: DragEvent) => {
  if (event.dataTransfer?.types.includes('text/plain')) {
    event.preventDefault()
    isDragging.value = true

    const coords = getCanvasCoords(event)
    ghostPlaceholder.value.x = coords.x - ghostPlaceholder.value.width / 2
    ghostPlaceholder.value.y = coords.y - ghostPlaceholder.value.height / 2
    ghostPlaceholder.value.visible = true
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
  const datasource = 'test'
  const widgetType = e.added?.element?.type || 'default'
  const dropX = widgetConfig.value?.dropX ?? ghostPlaceholder.value.x + ghostPlaceholder.value.width / 2
  const dropY = widgetConfig.value?.dropY ?? ghostPlaceholder.value.y + ghostPlaceholder.value.height / 2
  addWidget(widgetType, datasource, dropX, dropY)
}

</script>

<template>
  <div class="report-container" @contextmenu="onCanvasContextMenu" @click="closeCanvasContextMenu">
    <div class="scroll-viewport" ref="scrollContainer" @scroll="updateViewport">
      <div
        class="canvas dottet"
        :style="{
          minWidth: canvasSize.width > 0 ? `max(100vw, ${canvasSize.width}px)` : undefined,
          minHeight: canvasSize.height > 0 ? `max(100vh, ${canvasSize.height}px)` : undefined,
        }"
        @drop="onDrop"
        @dragover="onDragOver"
        @dragleave="onDragLeave"
      >
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
          @dragStart="dragStart()"
          @drag="drag(widget.uid, $event)"
          @resizeStart="resizeStart()"
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
      </div><!-- end canvas-context-menu -->
      </div><!-- end widget-board -->
    </div><!-- end canvas -->
    </div><!-- end scroll-viewport -->

    <!-- Minimap -->
    <div
      v-if="showMinimap"
      class="minimap"
      @click="onMinimapClick"
    >
      <div class="minimap-canvas">
        <div
          v-for="item in (layoutStore?.layout || [])"
          :key="item.id"
          class="minimap-widget"
          :style="{
            left: (item.x * minimapScale) + 'px',
            top: (item.y * minimapScale) + 'px',
            width: (item.width * minimapScale) + 'px',
            height: (item.height * minimapScale) + 'px',
          }"
        ></div>
        <div
          class="minimap-viewport"
          :style="{
            left: (viewportRect.x * 100) + '%',
            top: (viewportRect.y * 100) + '%',
            width: (viewportRect.w * 100) + '%',
            height: (viewportRect.h * 100) + '%',
          }"
        ></div>
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
.report-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.scroll-viewport {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.canvas {
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
}

.dottet {
  background: #fafafa;
  background-image: radial-gradient(#b8b8b8 1px, transparent 0);
  background-size: 40px 40px;
  background-position: -19px -19px;
  background-repeat: repeat;
}

.ghost-placeholder {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border: 2px dashed #ccc;
  z-index: 1000000;
  pointer-events: none;
}

.widget-board {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Minimap */
.minimap {
  position: absolute;
  bottom: 16px;
  left: 80px;
  width: 200px;
  height: 140px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  z-index: 999999;
  cursor: pointer;
  overflow: hidden;
}

.minimap-canvas {
  position: relative;
  width: 100%;
  height: 100%;
}

.minimap-widget {
  position: absolute;
  background: rgba(21, 78, 194, 0.3);
  border: 1px solid rgba(21, 78, 194, 0.5);
  border-radius: 1px;
}

.minimap-viewport {
  position: absolute;
  border: 2px solid #e42222;
  background: rgba(228, 34, 34, 0.08);
  border-radius: 2px;
  pointer-events: none;
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
