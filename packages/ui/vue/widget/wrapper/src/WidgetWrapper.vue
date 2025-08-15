<!--
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
-->

<script setup lang="ts">
// TODO: fix when testing widget repository
// import container from "@/config/inversify";
// import type { IWidget } from "@/types/Widgets";
// import { WidgetRepository } from "@/plugins/data/WidgetRepository";
// import SERVICE_IDENTIFIER from "@/config/identifiers/services";
import { computed } from 'vue'
import { container } from 'org.eclipse.daanse.board.app.lib.core';
import {
  WidgetRepository,
  identifier as WidgetIdentifier,
} from 'org.eclipse.daanse.board.app.lib.repository.widget'


const { widget } =  defineProps<{ widget: any; editEnabled: boolean }>();

const emit = defineEmits(['openSettings', 'removeWidget'])

const registeredWidgets = container.get<WidgetRepository>(WidgetIdentifier)
console.log('registeredWidgets', container);

const isWidgetRegistered = computed(() => {
  return registeredWidgets.getWidget(widget.type)
})

const availableWidgets = computed(() => {
  console.log(registeredWidgets.getAllWidgets())
  return registeredWidgets.getAllWidgets()
})

const deleteWidget = (id: string): void => {
  emit('removeWidget', id)
}

const openSettings = (id: string): void => {
  emit('openSettings', id)
}

const getShadow = computed(() => {
  let post = ''
  if (isByte(widget.wrapperConfig.shadowTransparence)) {
    post = widget.wrapperConfig.shadowTransparence.toString(16)
  }
  let color = (widget.wrapperConfig.shadowColor || '#FFFFFF').replace('#', '')
  if (color.length == 3) {
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2]
  }

  const ret = `${widget.wrapperConfig.shadowX}px ${widget.wrapperConfig.shadowY}px ${widget.wrapperConfig.shadowBlur}px #${color}${post}`
  return ret
})

const getBackground = computed(() => {
  let post = ''
  if (isByte(widget.wrapperConfig.backgroundColorTransparence)) {
    post = widget.wrapperConfig.backgroundColorTransparence.toString(16)
  }
  let color = (widget.wrapperConfig.backgroundColor || '#FFFFFF').replace(
    '#',
    '',
  )
  if (color.length == 3) {
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2]
  }

  const ret = `#${color}${post}`
  return ret
})

const borderColor = computed(() => {
  return widget.wrapperConfig.borderColor || '#000000'
})

const borderSize = computed(() => {
  return widget.wrapperConfig.borderSize || 0
})

const borderRadius = computed(() => {
  return widget.wrapperConfig.borderRadius || 0
})

const transparency = computed(() => {
  return isByte(widget.wrapperConfig.transparency)
    ? widget.wrapperConfig.transparency / 255
    : 1
})

const titleFontSize = computed(() => {
  return widget.wrapperConfig.titleFontSize || 16
})

const titleColor = computed(() => {
  return widget.wrapperConfig.titleColor || '#000000'
})

const getShadowColor = computed(() => {
  let color = (widget.wrapperConfig.shadowColor || '#FFFFFF').replace('#', '')
  if (color.length == 3) {
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2]
  }
  return (
    color +
    (isByte(widget.wrapperConfig.shadowTransparence)
      ? widget.wrapperConfig.shadowTransparence.toString(16)
      : '')
  )
})
function isByte(value: unknown): value is number {
  return typeof value === 'number' && Number.isInteger(value) && value >= 0 && value <= 255;
}
const getBlur= computed(()=>{
  return (isByte(widget.wrapperConfig.blur))?
  widget.wrapperConfig.blur:''
})
const getpadding= computed(()=>{
  return (isByte(widget.wrapperConfig.padding))?
    widget.wrapperConfig.padding:0
})

</script>

<template>
  <div
    class="flex relative flex-col w-full h-full wrapper-container" :style="{ '--blur-amount': getBlur + 'px' }">
    <div
      v-if="widget.wrapperConfig.title"
      class="p-2 font-semibold capitalize"
      :style="{
        fontSize: titleFontSize + 'px',
        color: titleColor,
      }"
    >
      {{ widget.wrapperConfig.title }}
    </div>
    <template v-if="isWidgetRegistered">
      <div
        class="w-full h-full box-border cursor-pointer overflow-hidden sub"
        style="position: relative;"
      >
        <VaScrollContainer color="#cbcbcb" vertical horizontal>
          <component
            :is="availableWidgets[widget.type].component"
            :config="widget.config"
            v-model:configv="widget.config"
            :datasourceId="widget.config.datasourceId"
            class="widget_component"
          />
        </VaScrollContainer>
      </div>
      <div
        class="hover absolute top-[25px] right-0 flex justify-end bg-white z-[3000] highz"
        v-if="editEnabled"
      >
        <VaButton
          class="control-button"
          @click="openSettings(widget.uid)"
          icon="settings"
          size="small"
        >
        </VaButton>
        <VaButton
          class="control-button"
          @click="deleteWidget(widget.uid)"
          icon="close"
          color="danger"
          size="small"
        >
        </VaButton>
      </div>
    </template>
    <div v-else>
      <p>Widget type {{ widget.type }} is not registered.</p>
    </div>
  </div>
</template>
<style scoped>
.absolute{
  position:absolute;
}
.wrapper-container {

  background-color: v-bind(getBackground);
  border-color: v-bind(borderColor);
  border-width: v-bind(borderSize + "px");
  border-style: solid;


  width: 100%;
  height: 100%;
  box-Shadow: v-bind(getShadow);
  opacity: v-bind(transparency);
  border-radius: v-bind(borderRadius + "px");
  backdrop-filter: blur(var(--blur-amount));
}
.sub{
  border-radius: v-bind(borderRadius + "px");
  padding: v-bind(getpadding + "px");
}
.wrapper-container:hover .hover{
  display: block;
}
.wrapper-container .hover{
  display: none;
}
.highz{
  z-index: 3000;
}
</style>
