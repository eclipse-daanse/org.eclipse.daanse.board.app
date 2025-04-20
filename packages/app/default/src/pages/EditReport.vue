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
import { ref, watch, computed } from 'vue'
import Moveable from 'vue3-moveable'
import Draggable from 'vuedraggable'
import { useMoveableLayout, type ILayoutItem } from '@/composables/useMovableLayout'

import { WidgetWrapper } from 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper'
import { useWidgetsStore, type IWidget } from '@/stores/WidgetsPinia'
import { useLayoutStore } from '@/stores/LayoutsPinia'
import AddWidgetWindow from '@/components/common/AddWidgetWindow.vue'
import WidgetSettingsWindow from '@/components/common/WidgetSettingsWindow.vue'

const widgetConfig = ref()
const widgetSettingsOpenedId = ref('')
const widgetsTmp = ref([])

const { widgets, updateWidgets } = useWidgetsStore()

const innerlayoutItems = ref([] as ILayoutItem[])
const innerWidgets = ref<IWidget[]>([])
const isDragging = ref(false)

const widgetSelectorVisible = ref(false)
const { updateLayout, layout } = useLayoutStore()
const {
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
} = useMoveableLayout(innerlayoutItems)

watch(
  () => ({ widgets, layout }),
  ({ widgets: newWidgets, layout: newLayout }) => {
    innerWidgets.value = JSON.parse(JSON.stringify(newWidgets))
    innerlayoutItems.value = JSON.parse(JSON.stringify(newLayout))
  },
  { deep: true, immediate: true },
)

const addWidget = (type: string, datasourceId: string, dropX: number, dropY: number) => {
  const uid = `widget_${Math.random().toString(36).substring(7)}`
  const config = { datasourceId, settings: {} }
  const newWidget: IWidget = { uid, type, config, wrapperConfig: {} }

  innerWidgets.value.push(newWidget)

  const width = ghostPlaceholder.value.width
  const height = ghostPlaceholder.value.height

  const newlayout = {
    id: newWidget.uid,
    x: dropX - width / 2,
    y: dropY - height / 2,
    width,
    height,
    z: 3005,
  }

  innerlayoutItems.value.push(JSON.parse(JSON.stringify(newlayout)))
}

const openWidgetSettings = (id: string) => {
  widgetSettingsOpenedId.value = id
}

const saveLayout = () => {
  updateLayout(innerlayoutItems.value)
  updateWidgets(innerWidgets.value)
}

const resetLayout = () => {
  innerWidgets.value = JSON.parse(JSON.stringify(widgets))
  innerlayoutItems.value = JSON.parse(JSON.stringify(layout))
}

const isSaveResetDisabled = computed(() => {
  return (
    JSON.stringify(innerlayoutItems.value) === JSON.stringify(layout) &&
    JSON.stringify(innerWidgets.value) === JSON.stringify(widgets)
  )
})

const removeWidget = (uid: string) => {
  console.log(uid)
  const index = innerWidgets.value.findIndex((widget) => widget.uid === uid)
  if (index !== -1) {
    innerWidgets.value.splice(index, 1)
  }

  const layoutIndex = innerlayoutItems.value.findIndex((item) => item.id === uid)
  if (layoutIndex !== -1) {
    innerlayoutItems.value.splice(layoutIndex, 1)
  }
}

const currentlyEditingWidget = computed(() => {
  return innerWidgets.value.find((widget) => widget.uid === widgetSettingsOpenedId.value)
})

const onDrop = (event: DragEvent) => {
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
  const widgetType = e.added.element.type
  addWidget(widgetType, datasource, widgetConfig.value.dropX, widgetConfig.value.dropY)
}
</script>

<template>
  <div class="report-container">
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
    >
      <template #item="{ element }">
        <div style="display: none">{{ element.type }}</div>
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
      <template v-for="widget in innerWidgets" :key="widget.uid">
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
              <div class="dashboard-item">
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
    </div>
    <div class="add_widget-button">
      <VaButton
        icon="check"
        @click="saveLayout"
        round
        :disabled="isSaveResetDisabled"
        size="large"
        color="success"
        background-opacity="0.3"
      />
      <VaButton
        icon="history"
        @click="resetLayout"
        round
        :disabled="isSaveResetDisabled"
        size="large"
        color="danger"
        background-opacity="0.3"
      />
      <VaButton
        :icon="widgetSelectorVisible ? 'close' : 'add'"
        @click="widgetSelectorVisible = !widgetSelectorVisible"
        round
        size="large"
      />
    </div>
    <Transition :duration="150">
      <AddWidgetWindow v-if="widgetSelectorVisible"></AddWidgetWindow>
    </Transition>
    <Transition :duration="150">
      <WidgetSettingsWindow
        v-if="widgetSettingsOpenedId"
        @close="widgetSettingsOpenedId = ''"
        v-model="currentlyEditingWidget"
      ></WidgetSettingsWindow>
    </Transition>
  </div>
</template>
<style>
.ghost {
  display: none;
}
</style>

<style scoped>
.ghost-placeholder {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border: 2px dashed #ccc;
  z-index: 1000;
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
