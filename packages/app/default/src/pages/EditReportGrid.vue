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
import { ref, watch, computed, inject, toRaw, unref } from 'vue'
import Moveable from 'vue3-moveable'
import Draggable from 'vuedraggable'
import { useMoveableLayout, type ILayoutItem } from '@/composables/useMovableLayout'

import { WidgetWrapper,defaultConfig } from 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper'
import { useWidgetsStore, type IWidget } from 'org.eclipse.daanse.board.app.ui.vue.stores.widgets'
import { useLayoutStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.layout'
import AddWidgetWindow from '@/components/common/AddWidgetWindow.vue'
import WidgetSettingsWindow from '@/components/common/WidgetSettingsWindow.vue'
import { cloneDeep } from 'lodash'
import {stringify} from 'flatted';
import { useRoute, useRouter } from 'vue-router'
import PageEditor from '@/components/pageEditor/PageEditor.vue'
import PageSettings from '@/components/pageEditor/PageSettings.vue'


const widgetConfig = ref()
const widgetSettingsOpenedId = ref('')
const widgetsTmp =  ref<(IWidget|{uid:string})[][]>(
  Array.from({ length: 18 }, () => [])
)
const route = useRoute();
const router = useRouter();
const pageID = route.params.pageid??'';
const { widgets, updateWidgets } = useWidgetsStore(pageID as string||'');

const innerlayoutItems = ref([] as ILayoutItem[])
const innerWidgets = ref<IWidget[]>([])
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
const { updateLayout, layout } = useLayoutStore(pageID as string||'');
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
  () => widgets,
  (newWidgets)=>{
    console.log(newWidgets)
    console.log(innerWidgets.value)
    if(innerWidgets.value.length==0 && newWidgets && newWidgets.length!==0){
      innerWidgets.value = newWidgets;
    }
    //
    //triggerRef(innerWidgets);
  },{ deep: true, immediate: true })
watch(()=>layout,(newLayout)=>{
  innerlayoutItems.value = JSON.parse(JSON.stringify(newLayout))
  },{ deep: true, immediate: true });

    //innerWidgets.value = JSON.parse(JSON.stringify(newWidgets))
    //innerWidgets.value =  cloneDeep(newWidgets);



const addWidget = (type: string, datasourceId: string,n?:number) => {
  const uid = `widget_${Math.random().toString(36).substring(7)}`
  const config = { datasourceId, settings: {} }
  const newWidget: IWidget = {
    uid,
    type,
    config,
    wrapperConfig: cloneDeep(defaultConfig),
  }
  if(!n){
    innerWidgets.value.push(newWidget)
  }else {
    innerWidgets.value[n!] = newWidget
    widgetsTmp.value[n!] =[{uid:newWidget.uid}]
  }

}

const openWidgetSettings = (id: string) => {
  widgetSettingsOpenedId.value = id;
  widgetSelectorVisible.value = false;
}

const saveLayout = () => {
  updateLayout(cloneDeep(innerlayoutItems.value))
  updateWidgets(cloneDeep(innerWidgets.value))
}

const resetLayout = () => {
  innerWidgets.value = cloneDeep(widgets)
  innerlayoutItems.value = cloneDeep(layout)
}

const isSaveResetDisabled = computed(() => {
  return (
    stringify(innerlayoutItems.value) === stringify(layout) &&
    stringify(innerWidgets.value) === stringify(widgets)
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
  return innerWidgets.value.find((widget) => widget && widget.uid === widgetSettingsOpenedId.value)
})

const onDrop = (event: DragEvent) => {
  hidePlaceholder()
  const currentTarget = event.currentTarget as HTMLElement

  if (currentTarget) {
    console.log(currentTarget.id);
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

const change = (e: any,n: number) => {
  const widgetType = e.added?.element?.type
  if (widgetType) {
    const datasource = 'test'
    addWidget(widgetType, datasource,n)
  }
  else if(e.added?.element.uid){
    //move item
    const index = innerWidgets.value.findIndex((widget) => widget && widget.uid === e.added?.element.uid)
    if (index !== -1) {
      let item = innerWidgets.value[index]
      delete innerWidgets.value[index]
      if(innerWidgets.value[n!]){ //switch position
        innerWidgets.value[index] = innerWidgets.value[n!]
        const prev = widgetsTmp.value[n].splice(1, 1);
        widgetsTmp.value[index] = unref(prev)
        //widgetsTmp.value[n] = prev;
      }
      innerWidgets.value[n!]= item
    }
  }
}



</script>

<template>
  <div class="report-container dottet">
    <div v-for="n in 18" class="dashboard-grid-item" >
      <draggable
        :list="widgetsTmp[n]"
        :group="{ name: 'widgets',pull: true, put: true}"
        ghost-class="ghost"
        itemKey="uid"
        style="position: absolute; top: 0; left: 0; height: 100%; width: 100%"
        @change="(e)=>change(e,n)"
        @drop="onDrop"
        @dragover="onDragOver"
        @dragleave="onDragLeave"
        :id="n.toString()"
      >
        <template #item="{ element }">
          <div>
          <div style="    display: block;
    position: absolute;
    top: -25px;
    left: 0;
    width: 25px;
    height: 25px;
    overflow: hidden;
    background: #ccc;"></div>
          <div v-if="innerWidgets[n]"
               :class="`${innerWidgets[n].uid} dashboard-item-container`"
               :style="getInitialStyle(innerWidgets[n].uid)"
               :ref="innerWidgets[n].uid"
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
                    :widget="innerWidgets[n]"
                    :ref="`${innerWidgets[n].uid}_wrapper`"
                    @openSettings="openWidgetSettings"
                    editEnabled
                    @removeWidget="removeWidget"
                  />
                </div>
              </template>
              <va-dropdown-content>
                <div class="dropdown-buttons-container">
                  <va-button @click="moveUp(innerWidgets[n].uid)"> Move up </va-button>
                  <va-button @click="moveDown(innerWidgets[n].uid)"> Move down </va-button>
                  <va-button @click="moveToTop(innerWidgets[n].uid)"> Move to top </va-button>
                  <va-button @click="moveToBottom(innerWidgets[n].uid)"> Move to bottom </va-button>
                </div>
              </va-dropdown-content>
            </va-dropdown>
          </div>
          </div>
        </template>
      </draggable>


      <!--</div>
                  <WidgetWrapper v-if="innerWidgets[n]"
                    :widget="innerWidgets[n]"
                    :ref="`${innerWidgets[n].uid}_wrapper`"
                    @openSettings="openWidgetSettings"
                    editEnabled
                    @removeWidget="removeWidget"
                  />
       </div>-->


</div>


    </div>
    <div class="add_widget-button ice p-2.5 z-mx">
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
      <VaButton
        v-if="endpointfinder_present"
        icon="travel_explore"
        @click="endPointFinder()"
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

  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin: 16px;
}

.report-container .widget-board {
  width: 100%;
  height: 100%;

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
    transform:  scaleY(0%) translateY(100%);
    opacity: 0;
  }
  100% {
    transform: scaleY(100%) translateY(0%);
    opacity: 1;
  }
}
.report-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 35px;
  padding: 35px 10px 10px 74px;
  position: relative;
  overflow: auto;

}

.dashboard-grid-item {
  border: 1px dashed #ccc;
  /*overflow: hidden;*/
  position: relative;
  width: auto;
  height: 100%;
}
.dashboard-item-container{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%
}


</style>
