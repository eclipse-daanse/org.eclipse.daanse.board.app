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
import { ref, watch, computed, inject } from 'vue'

import {  type ILayoutItem } from '@/composables/useMovableLayout'

import { useWidgetsStore, type IWidget } from 'org.eclipse.daanse.board.app.ui.vue.stores.widgets'
import AddWidgetWindow from '@/components/common/AddWidgetWindow.vue'
import WidgetSettingsWindow from '@/components/common/WidgetSettingsWindow.vue'
import { useRoute, useRouter } from 'vue-router'
import PageEditor from '@/components/pageEditor/PageEditor.vue'
import PageSettings from '@/components/pageEditor/PageSettings.vue'
import LayoutRenderer from '@/components/pageEditor/LayoutRenderer.vue'


const widgetSettingsOpenedId = ref('')
const route = useRoute();

const pageID = route.params.pageid??'';
const { widgets } = useWidgetsStore(pageID as string||'');


const innerWidgets = ref<IWidget[]>([])


const endpointfinder = inject('endpointfinder');
const endPointFinder = ()=>{
  (endpointfinder as any)()
}
const endpointfinder_present = computed(()=>{
  return !!endpointfinder
})
const widgetSelectorVisible = ref(false)

const pageSettingsOpenedId = ref<string|undefined>(undefined);

const openWidgetSettings = (id: string) => {
  widgetSettingsOpenedId.value = id;
  widgetSelectorVisible.value = false;
}




const currentlyEditingWidget = computed(() => {
  // First try to find in the widgets store
  console.log(widgets);
  const widgetFromStore = widgets?.find((widget:any) => widget.uid === widgetSettingsOpenedId.value)
  if (widgetFromStore) {
    return widgetFromStore
  }
  // Fallback to innerWidgets
  return innerWidgets.value.find((widget) => widget.uid === widgetSettingsOpenedId.value)
})




</script>

<template>
  <div class="report-container dottet">
    <LayoutRenderer
      :pageId="pageID as string"
      @openWidgetSettings="openWidgetSettings"

    ></LayoutRenderer>

    <div class="add_widget-button ice p-2.5 z-mx">

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
</style>
