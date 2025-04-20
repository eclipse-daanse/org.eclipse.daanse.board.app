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
import { computed, getCurrentInstance } from 'vue'
import {
  WidgetRepository,
  init as initWidgetRepo,
  identifier as WidgetIdentifier,
} from 'org.eclipse.daanse.board.app.lib.repository.widget'
import { Container } from 'inversify'

const { widget } = defineProps<{ widget: any; editEnabled: boolean }>()
const emit = defineEmits(['openSettings', 'removeWidget'])

const instance = getCurrentInstance()
const container = instance?.appContext.config.globalProperties
  .$container as Container
const registeredWidgets = container.get<WidgetRepository>(WidgetIdentifier)

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
  if (widget.wrapperConfig.shadowTransparence) {
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
  if (widget.wrapperConfig.backgroundColorTransparence) {
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
  return widget.wrapperConfig.backgroundColorTransparence
    ? widget.wrapperConfig.backgroundColorTransparence / 255
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
    (widget.wrapperConfig.shadowTransparence
      ? widget.wrapperConfig.shadowTransparence.toString(16)
      : '')
  )
})
</script>

<template>
  <div
    class="flex relative flex-col w-full h-full"
    :class="[
      'border-solid',
      'shadow-[' +
        widget.wrapperConfig.shadowX +
        'px_' +
        widget.wrapperConfig.shadowY +
        'px_' +
        widget.wrapperConfig.shadowBlur +
        'px_' +
        '#' +
        getShadowColor +
        ']',
    ]"
    :style="{
      backgroundColor: getBackground,
      borderColor: borderColor,
      borderWidth: borderSize + 'px',
      borderRadius: borderRadius + 'px',
      opacity: transparency,
    }"
  >
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
      <div class="w-full h-full box-border cursor-pointer overflow-hidden">
        <VaScrollContainer color="#133370" vertical horizontal>
          <component
            :is="availableWidgets[widget.type].component"
            :config="widget.config"
            :datasourceId="widget.config.datasourceId"
            class="widget_component"
          />
        </VaScrollContainer>
      </div>
      <div
        class="absolute top-[-25px] right-0 flex justify-end bg-white z-10"
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
