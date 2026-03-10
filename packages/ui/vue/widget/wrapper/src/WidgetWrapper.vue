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

import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'


const { widget } = defineProps<{ widget: any; editEnabled: boolean }>();

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

const defaultConfig = {
  title: "",
  backgroundColor: "#fff",
  backgroundColorTransparence: 255,
  titleColor: "#7c7c7c",
  padding: 0,
  titleFontSize: 15,
  borderSize: 0,
  borderColor: "#ccc",
  borderRadius: 15,
  blur: 0,
  fullscreen: false,
  shadowColor: "#333",
  shadowBlur: 12,
  shadowX: 5,
  shadowY: 5,
  shadowTransparence: 25,
  transparency: 255
}

Object.keys(defaultConfig).forEach((key) => {
  // Check if the property exists and is a VariableWrapper
  // We assume if it's an object with 'value', it might be a wrapper or compatible.
  // However, to ensure it has methods like setTo, we might need to re-wrap or check prototype.
  // For simplicity/robustness, if it's strictly a primitive, we wrap it.
  // If it is undefined, we wrap the default.
  // If existing boards have primitives, this upgrades them.

  const val = widget.wrapperConfig[key];

  // Logic: if missing, use default wrapped.
  // If present but primitive, wrap it.
  // If present and object, assume it's ok (or maybe we should ensure instance?)
  // VariableWrapper constructor: constructor(value?: T)

  if (val === undefined || val === null) {
    widget.wrapperConfig[key] = new VariableWrapper(defaultConfig[key as keyof typeof defaultConfig]);
  } else if (typeof val !== 'object') {
    widget.wrapperConfig[key] = new VariableWrapper(val);
  } else if (!(val instanceof VariableWrapper)) {
    // It is an object but not a VariableWrapper instance (e.g. simple JSON object)
    // Re-hydrate if it has value property?
    if ('value' in val) {
      const v = new VariableWrapper(val.value);
      // handle other props like variable name if present?
      if ('variable' in val) v.variable = val.variable;
      widget.wrapperConfig[key] = v;
    } else {
      // Fallback
      widget.wrapperConfig[key] = new VariableWrapper(defaultConfig[key as keyof typeof defaultConfig]);
    }
  }
});


const getShadow = computed(() => {
  let post = ''
  const shadowTransparence = widget.wrapperConfig.shadowTransparence?.value;
  if (isByte(shadowTransparence)) {
    post = shadowTransparence.toString(16)
  }
  let color = (widget.wrapperConfig.shadowColor?.value || '#FFFFFF').replace('#', '')
  if (color.length == 3) {
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2]
  }

  const ret = `${widget.wrapperConfig.shadowX?.value}px ${widget.wrapperConfig.shadowY?.value}px ${widget.wrapperConfig.shadowBlur?.value}px #${color}${post}`
  return ret
})

const getBackground = computed(() => {
  let post = ''
  const bgTransparence = widget.wrapperConfig.backgroundColorTransparence?.value;
  if (isByte(bgTransparence)) {
    post = bgTransparence.toString(16)
  }
  let color = (widget.wrapperConfig.backgroundColor?.value || '#FFFFFF').replace(
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
  return widget.wrapperConfig.borderColor?.value || '#000000'
})

const borderSize = computed(() => {
  return widget.wrapperConfig.borderSize?.value || 0
})

const borderRadius = computed(() => {
  return widget.wrapperConfig.borderRadius?.value || 0
})

const transparency = computed(() => {
  const t = widget.wrapperConfig.transparency?.value;
  return isByte(t)
    ? t / 255
    : 1
})

const titleFontSize = computed(() => {
  return widget.wrapperConfig.titleFontSize?.value || 16
})

const titleColor = computed(() => {
  return widget.wrapperConfig.titleColor?.value || '#000000'
})

// Unused? But kept for consistency
const getShadowColor = computed(() => {
  let color = (widget.wrapperConfig.shadowColor?.value || '#FFFFFF').replace('#', '')
  if (color.length == 3) {
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2]
  }
  const t = widget.wrapperConfig.shadowTransparence?.value;
  return (
    color +
    (isByte(t)
      ? t.toString(16)
      : '')
  )
})
function isByte(value: any): value is number {
  const parsedValue = parseInt(value);
  if (isNaN(parsedValue)) {
    return false;
  }
  return parsedValue >= 0 && parsedValue <= 255;
}
const getBlur = computed(() => {
  const b = widget.wrapperConfig.blur?.value;
  return (isByte(b)) ?
    b : ''
})
const getpadding = computed(() => {
  console.log(widget.wrapperConfig.padding)
  const int = parseInt(widget.wrapperConfig.padding?.value);
  return isNaN(int) ? 0 : int;
})

</script>

<template>
  <div class="flex relative flex-col w-full h-full wrapper-container"
    :style="{ '--blur-amount': getBlur + 'px', '--title-color': titleColor }">
    <div v-if="widget.wrapperConfig.title?.value" class="p-2 font-semibold capitalize" :style="{
      fontSize: titleFontSize + 'px',
      color: titleColor,
    }">
      {{ widget.wrapperConfig.title.value }}
    </div>
    <template v-if="isWidgetRegistered">
      <div class="w-full h-full box-border cursor-pointer overflow-hidden sub" style="position: relative;">
        <VaScrollContainer color="#cbcbcb" vertical horizontal>
          <component :is="availableWidgets[widget.type].component" :config="widget.config"
            v-model:configv="widget.config" :datasourceId="widget.config.datasourceId" :id="widget.uid || widget.id"
            class="widget_component" />
        </VaScrollContainer>
      </div>
      <div class="hover absolute top-[25px] right-0 flex justify-end bg-white z-3000 hightz" v-if="editEnabled">
        <VaButton class="control-button" @click="openSettings(widget.uid)" icon="settings" size="small">
        </VaButton>
        <VaButton class="control-button" @click="deleteWidget(widget.uid)" icon="close" color="danger" size="small">
        </VaButton>
      </div>
    </template>
    <div v-else>
      <p>Widget type {{ widget.type }} is not registered.</p>
    </div>
  </div>
</template>
<style scoped>
.absolute {
  position: absolute;
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

.sub {
  border-radius: v-bind(borderRadius + "px");
  padding: v-bind(getpadding + "px");
}

.wrapper-container:hover .hover {
  display: block;
}

.wrapper-container .hover {
  display: none;
}

.hightz {
  z-index: 3000;
}
</style>
