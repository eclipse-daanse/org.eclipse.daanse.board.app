<template>
  <VaScrollContainer
    class="max-h-screen ml-15"
    vertical

  >
    <div ref="wrapper" @dragenter="drag = true" @drop="drag=false" @drag="dragover" >



      <GridLayout ref="gridLayout" v-model:layout="layout" :row-height="30"  :responsive="true" :vertical-compact="false" :breakpoints="{ lg: 1800, md: 1200, sm: 768, xs: 480, xxs: 0 }" :cols="{ lg: 18, md: 12, sm: 6, xs: 4, xxs: 2 }">
        <template #item="{ item }">
          <WidgetWrapper v-if="innerWidgets.get(item.i.toString())"
            :widget="innerWidgets.get(item.i.toString())"
            :ref="`${innerWidgets.get(item.i.toString())?.uid}_wrapper`"
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
  <div class="add_widget-button ice p-2.5 z-mx">
    <VaButton
      :icon="widgetSelectorVisible ? 'close' : 'add'"
      @click="widgetSelectorVisible = !widgetSelectorVisible"
      round
      size="large"
    />

  </div>
  <div class="pages_board ice p-2.5 z-mx">
    <PageEditor @pageSettings="(pageid)=>pageSettingsOpenedId = pageid"></PageEditor>
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
  <Transition :duration="150">
    <PageSettings
      v-if="pageSettingsOpenedId"
      v-model="pageSettingsOpenedId"
      @close="pageSettingsOpenedId = undefined"
    ></PageSettings>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed, reactive, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { GridLayout, GridItem } from 'grid-layout-plus'

import { type IWidget, useWidgetsStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.widgets'
import { WidgetWrapper,defaultConfig } from 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper'
import WidgetSettingsWindow from '@/components/common/WidgetSettingsWindow.vue'
import PageEditor from '@/components/pageEditor/PageEditor.vue'
import PageSettings from '@/components/pageEditor/PageSettings.vue'
import AddWidgetWindow from '@/components/common/AddWidgetWindow.vue'
import { useRoute, useRouter } from 'vue-router'
import Draggable from 'vuedraggable'
import { cloneDeep } from 'lodash'

const widgetSettingsOpenedId = ref('')
const widgetsTmp = ref([])
const route = useRoute();
const pageID = route.params.pageid??'';
const { widgets, updateWidgets } = useWidgetsStore(pageID as string||'');
const widgetSelectorVisible = ref(false)

const drag = ref(false);
const pageSettingsOpenedId = ref<string|undefined>(undefined);
const gridLayout = ref<InstanceType<typeof GridLayout>>()
const innerWidgets = ref<Map<string, IWidget>>(new Map<string, IWidget>())
const wrapper = ref<HTMLElement>()
let layout = ref<{x:number,y:number,w:number,h:number,i:string,static:boolean}[]>([])

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

  if (mouseInGrid && !layout.value.find(item => item.i === dropId)) {
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


  const index = layout.value.findIndex(item => item.i === dropId)

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
      dragItem.x = layout.value[index].x
      dragItem.y = layout.value[index].y
    } else {
      gridLayout.value?.dragEvent('dragend', dropId, newPos.x, newPos.y, dragItem.h, dragItem.w)
      layout.value = layout.value.filter(item => item.i !== dropId)
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
    layout.value = layout.value.filter(item => item.i !== dropId)
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
  const newWidget: IWidget = { uid, type, config,wrapperConfig:cloneDeep(defaultConfig)}

  innerWidgets.value.set(dragItem.i,newWidget)


}
const openWidgetSettings = (id: string) => {
  widgetSettingsOpenedId.value = id;
  widgetSelectorVisible.value = false;
}
const removeWidget = (uid: string) => {
  console.log(uid)
  innerWidgets.value.delete(uid);
  layout.value = layout.value.filter(item => item.i !== uid)
}
const currentlyEditingWidget = computed(() => {
  return innerWidgets.value.get(widgetSettingsOpenedId.value)
})
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
