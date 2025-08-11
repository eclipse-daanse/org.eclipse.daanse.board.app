<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<template>
  <VaScrollContainer
    class="max-h-screen ml-15"
    vertical

  >
    <div ref="wrapper" @dragenter="drag = true" @drop="drag=false" @drag="dragover" >



      <GridLayout ref="gridLayout" v-model:layout="layout" :row-height="30"  :responsive="true" :vertical-compact="false" :breakpoints="{ lg: 1800, md: 1200, sm: 768, xs: 480, xxs: 0 }" :cols="{ lg: 18, md: 12, sm: 6, xs: 4, xxs: 2 }">
        <template #item="{ item }">
          <WidgetWrapper v-if="widgets?.find((w:any) => w.uid === item.i)"
            :widget="widgets.find((w:any) => w.uid === item.i)"
            :ref="`${item.i}_wrapper`"
            @openSettings="openWidgetSettings"
            editEnabled
            @removeWidget="()=>removeWidget(item.i.toString())"
          />
          <span v-else class="text">{{ `${item.i}${item.static ? '- Static' : ''}` }}</span>
        </template>
      </GridLayout>
    <draggable

      v-show="drag"
      :list="widgetsTmp"
      :group="{ name: 'widgets' }"
      class="invisible-dropzone"
      @change="change"
      itemKey="type"
    >
      <template #item="{ element }">
        <div>{{ element.type }}</div>
      </template>
    </draggable>
    </div>
  </VaScrollContainer>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import { GridLayout, GridItem, type Layout, type LayoutItem } from 'grid-layout-plus'

import { type IWidget, useWidgetsStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.widgets'
import { useLayoutStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.layout'
import { WidgetWrapper,defaultConfig } from 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper'
import { useRoute, useRouter } from 'vue-router'
import Draggable from 'vuedraggable'
import { cloneDeep } from 'lodash'

const widgetSettingsOpenedId = ref('')
const widgetsTmp = ref([])
const emit = defineEmits(['openSettings', 'removeWidget'])

const route = useRoute();
const pageID = computed(() => route.params.pageid as string || '');

// Use existing store instances directly - computed to handle route changes
const widgetStore = computed(() => useWidgetsStore(pageID.value))
const layoutStore = computed(() => useLayoutStore(pageID.value))

// Use computed to reactively get store data
const widgets = computed(() => widgetStore.value.widgets)
const storedLayout = computed(() => layoutStore.value.layout)
const widgetSelectorVisible = ref(false)

const drag = ref(false);
const pageSettingsOpenedId = ref<string|undefined>(undefined);
const gridLayout = ref<InstanceType<typeof GridLayout>>()
const wrapper = ref<HTMLElement>()
// Convert layout store format to grid-layout-plus format
let layout = computed<Layout>({
  get: () => {
    const layoutData = storedLayout.value || []
    if (!Array.isArray(layoutData)) {
      return []
    }

    return layoutData.map((item:any) => {
      if (!item || typeof item !== 'object') {
        console.warn('Invalid layout item:', item)
        return null
      }

      return {
        x: Math.floor((item.x || 0) / 100), // Convert pixel to grid units
        y: Math.floor((item.y || 0) / 30),  // Convert pixel to grid units (row height = 30)
        w: Math.max(1, Math.floor((item.width || 100) / 100)), // Minimum width 1
        h: Math.max(1, Math.floor((item.height || 30) / 30)), // Minimum height 1
        i: item.id || '',
        static: false
      } as LayoutItem
    }).filter((item): item is LayoutItem => item !== null) // Remove any null items with proper type guard
  },
  set: (newLayout) => {
    const convertedLayout = newLayout.map((item:any) => ({
      id: item.i,
      x: item.x * 100, // Convert grid units back to pixels
      y: item.y * 30,  // Convert grid units back to pixels
      width: item.w * 100,
      height: item.h * 30,
      z: 3000
    }))

    layoutStore.value.updateLayout(convertedLayout)
  }
})

const change = (e:any)=>{
  const datasource = 'test'
  const widgetType = e.added.element.type
  addWidget(widgetType, datasource)
  dragEnd();
}
const dropId = 'drop'
const mouseAt = { x: -1, y: -1 }
const dragItem = { x: -1, y: -1, w: 2, h: 2, i: '' }
const dragover = (event: any) => {
  console.log('move')
  if(drag.value){
  mouseAt.x = event.clientX;
  mouseAt.y = event.clientY

  let parentRect = wrapper.value?.getBoundingClientRect()

  if (!parentRect || !gridLayout.value) return

  const mouseInGrid =
    mouseAt.x > parentRect.left &&
    mouseAt.x < parentRect.right &&
    mouseAt.y > parentRect.top &&
    mouseAt.y < parentRect.bottom

  if (mouseInGrid && !layout.value.find((item:any) => item.i === dropId)) {
    layout.value.push({
      x: (layout.value.length * 2) % 12,
      y: layout.value.length + 12, // puts it at the bottom
      w: 2,
      h: 2,
      i: dropId,
      static: false
    })
  }
    nextTick(() => {


  const index = layout.value.findIndex((item:any) => item.i === dropId)

  if (index !== -1) {
    const item = gridLayout.value?.getItem(dropId)

    if (!item) return

    try {
      item.wrapper.style.display = 'none'
    } catch (e) {}

    Object.assign(item.state, {
      top: mouseAt.y - parentRect.top,
      left: mouseAt.x - parentRect.left,
    })
    const newPos = item.calcXY(mouseAt.y - parentRect.top, mouseAt.x - parentRect.left)

    if (mouseInGrid) {
      gridLayout.value?.dragEvent('dragstart', dropId, newPos.x, newPos.y, dragItem.h, dragItem.w)
      dragItem.i = `widget_${Math.random().toString(36).substring(7)}`
      const layoutItem = layout.value[index]
      if (layoutItem) {
        dragItem.x = layoutItem.x
        dragItem.y = layoutItem.y
      }
    } else {
      gridLayout.value?.dragEvent('dragend', dropId, newPos.x, newPos.y, dragItem.h, dragItem.w)
      layout.value = layout.value.filter((item:any) => item.i !== dropId)
    }

}})}}
function dragEnd() {
  drag.value = false;
  const parentRect = wrapper.value?.getBoundingClientRect()

  if (!parentRect || !gridLayout.value) return

  const mouseInGrid =
    mouseAt.x > parentRect.left &&
    mouseAt.x < parentRect.right &&
    mouseAt.y > parentRect.top &&
    mouseAt.y < parentRect.bottom

  //if (mouseInGrid) {
    //alert(`Dropped element props:\n${JSON.stringify(dragItem, ['x', 'y', 'w', 'h'], 2)}`)
    gridLayout.value.dragEvent('dragend', dropId, dragItem.x, dragItem.y, dragItem.h, dragItem.w)
    layout.value = layout.value.filter((item:any) => item.i !== dropId)
  //} else {
  //  return
  //}

  layout.value.push({
    x: dragItem.x,
    y: dragItem.y,
    w: dragItem.w,
    h: dragItem.h,
    i: dragItem.i,
    static: false
  })
  nextTick(() => {
    gridLayout.value?.dragEvent('dragend', dragItem.i, dragItem.x, dragItem.y, dragItem.h, dragItem.w)

    const item = gridLayout.value?.getItem(dropId)

    if (!item) return

    try {
      item.wrapper.style.display = ''
    } catch (e) {
    }
  });
}
const addWidget = (type: string, datasourceId: string) => {
  const uid = dragItem.i
  const config = { datasourceId, settings: {} }
  const newWidget: IWidget = { uid, type, config, wrapperConfig: cloneDeep(defaultConfig) }

  // Add to widgets store
  const newWidgets = [...widgets.value, newWidget]
  widgetStore.value.updateWidgets(newWidgets)
}
const openWidgetSettings = (id: string) => {
  emit('openSettings', id)
}
const removeWidget = (uid: string) => {
  // Remove from widgets store
  const newWidgets = widgets.value.filter((w:any) => w.uid !== uid)
  widgetStore.value.updateWidgets(newWidgets)

  // Remove from layout - the computed property will handle the conversion
  const currentLayout = layout.value
  layout.value = currentLayout.filter((item:any) => item.i !== uid)

  emit('removeWidget', uid)
}
// Remove currentlyEditingWidget - handled by parent component now
</script>

<style scoped>
.vgl-layout {
  --vgl-placeholder-bg: #aaa;
  min-height:100vh;
}
.vgl-layout::before {
  position: absolute;
  width: calc(100% - 5px);
  height: calc(100% - 5px);
  margin: 5px;
  content: '';
  background-image: linear-gradient(to right, #e9e9e9 1px, transparent 1px),
  linear-gradient(to bottom, #e9e9e9 1px, transparent 1px);
  background-repeat: repeat;
  background-size: calc(calc(100% - 5px) / 2) 40px;
}
@media (min-width: 20px) {

  .vgl-layout::before {
    background-size: calc(calc(100% - 5px) / 2) 40px;
  }
}
@media (min-width: 420px) {

  .vgl-layout::before {
    background-size: calc(calc(100% - 5px) / 4) 40px;
  }
}

@media (min-width: 708px) {

  .vgl-layout::before {
    background-size: calc(calc(100% - 5px) / 6) 40px;
  }
}

@media (min-width: 1120px) {
  .vgl-layout::before {
    background-size: calc(calc(100% - 5px) / 12) 40px;
  }
}

@media (min-width: 1720px) {
  .vgl-layout::before {
    background-size: calc(calc(100% - 5px) / 18) 40px;
  }
}

:deep(.vgl-item:not(.vgl-item--placeholder)) {

  /*border: 1px dashed #ccc;*/
}

:deep(.vgl-item--resizing) {
  opacity: 90%;
}

:deep(.vgl-item--static) {
  background-color: #cce;
}

.text {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  font-size: 24px;
  text-align: center;
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
    transform: scaleY(0%) translateY(100%);
    opacity: 0;
  }
  100% {
    transform: scaleY(100%) translateY(0%);
    opacity: 1;
  }
}
.invisible-dropzone {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /*pointer-events: auto; /* WICHTIG: stört normale Mausbedienung nicht */
  /*z-index: 10;*/
}
.invisible-dropzone > * {
  display: none !important;
}
</style>
