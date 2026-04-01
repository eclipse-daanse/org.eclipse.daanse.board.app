w<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->


<script setup lang="ts">
import type { IProgressSettings } from './index'
import { computed, toRefs, onMounted, ref, watch } from 'vue'
import { useDatasourceRepository, VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import helpers from 'org.eclipse.daanse.board.app.lib.utils.helpers'
import { ProgressSettings } from './gen/ProgressSettings'

const props = defineProps<{ datasourceId: string, id?: string }>();
const { datasourceId, id: widgetId } = toRefs(props);

import { container as coreContainer, identifiers } from 'org.eclipse.daanse.board.app.lib.core';
import type { TinyEmitter } from 'tiny-emitter';
const eventBus = coreContainer.get<TinyEmitter>(identifiers.TINY_EMITTER);

const emitClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:ProgressWidget:click', {
        type: 'widget:ProgressWidget:click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

const emitRightClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:ProgressWidget:right_click', {
        type: 'widget:ProgressWidget:right_click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};
const config = defineModel<ProgressSettings>('configv', { required: true});
const data = ref(null)
const { update } = useDatasourceRepository(datasourceId, "object", data)

watch(datasourceId, (newVal, oldVal) => {
  update(newVal, oldVal)
})

const primitives = {
  isGradient: false,
  isVertical: false,
  valueAlign: 'center',
  valueJustify: 'center'
};

const wrappedDefaults = {
  progress: "",
  fillColor: "#00FF00",
  gradientColor: "",
  backgroundColor: "#D3D3D3",
  rotation: 90,
  min: 0,
  max: 100,
  textColor: "#000000",
  barThickness: "20px",
  borderRadius: "10px"
};

onMounted(() => {
  if (!config.value) {
      config.value = new ProgressSettings();
  }

  // Handle Wrapped Properties
  for (const [key, defaultVal] of Object.entries(wrappedDefaults)) {
      const current = config.value[key as keyof ProgressSettings];

      if (current === undefined || current === null) {
          (config.value as any)[key] = new VariableWrapper(defaultVal);
      } else if ((current as any) instanceof VariableWrapper) {
          // Already correct instance
      } else if (typeof current === 'object' && 'value' in (current as any)) {
          // Rehydrate from JSON object
          const v = new VariableWrapper((current as any).value);
          if ('variable' in (current as any)) v.variable = (current as any).variable;
          (config.value as any)[key] = v;
      } else {
          // Upgrade primitive to wrapper
          (config.value as any)[key] = new VariableWrapper(current);
      }
  }

  // Handle Primitives
  for (const [key, defaultVal] of Object.entries(primitives)) {
      if (config.value[key as keyof ProgressSettings] === undefined || config.value[key as keyof ProgressSettings] === null) {
          (config.value as any)[key] = defaultVal;
      }
  }
})

const backgroundColor = computed(() => (config.value.backgroundColor as any)?.value)

const rotationVal = computed(() => {
    const val = (config.value.rotation as any)?.value;
    return parseFloat(val) || 0;
});

const gradientColor = computed(() => (config.value.gradientColor as any)?.value);

const backgroundProgressColor = computed(() =>
  config.value.isGradient
    ? `linear-gradient(${rotationVal.value}deg, ${gradientColor.value})`
    : (config.value.fillColor as any)?.value
)

const transition = computed(() =>
  config.value.isVertical ? "height .7s ease" : "width .7s ease"
)

const minVal = computed(() => parseFloat((config.value.min as any)?.value) || 0);
const maxVal = computed(() => parseFloat((config.value.max as any)?.value) || 100);

const verticalPositionFiller = computed(() =>
  config.value.isVertical && parsedProgress.value !== null
    ? `${(parsedProgress.value / (maxVal.value)) * 100}%`
    : "35px"
)

const horizontalPositionFiller = computed(() =>
  !config.value.isVertical && parsedProgress.value !== null
    ? `${(parsedProgress.value / (maxVal.value)) * 100}%`
    : "35px"
)
const verticalPositionWrapper = computed(() =>
  config.value.isVertical && parsedProgress.value !== null
    ? `35px`
    : "100%"
)

const horizontalPositionWrapper= computed(() =>
  !config.value.isVertical && parsedProgress.value !== null
    ? `35px`
    : "100%"
)

const barRadius = computed(() => (config.value.borderRadius as any)?.value || "10px")

const parsedProgress = computed(() => {
  const progWrapper = (config.value.progress as any);
  if (!progWrapper) return null;

  const rawValue = progWrapper.value;
  if (!rawValue && rawValue !== 0) return null;

  const { parts } = helpers.widget.extractValuesAndFullObject(String(rawValue));
  let result = ""

  for (const part of parts) {
    const value = part.path || part.path === null
      ? helpers.widget.getValueByPath(data.value, part.path)
      : undefined
    result += value !== undefined ? value : part.text
  }

  const numeric = parseFloat(result)
  if (isNaN(numeric)) return null

  const min = minVal.value;
  const max = maxVal.value;
  return Math.max(min, Math.min(max, numeric))
})

const horizontalAlignClass = computed(() => {
  switch (config.value?.valueAlign) {
    case "left": return "align-left"
    case "right": return "align-right"
    default: return "align-center"
  }
})
const textColor = computed(() => (config.value.textColor as any)?.value || "#000000")

const verticalAlignClass = computed(() => {
  switch (config.value?.valueJustify) {
    case "top": return "justify-top"
    case "bottom": return "justify-bottom"
    default: return "justify-center"
  }
})
</script>

<template>
  <div class="container" @click="emitClick" @contextmenu.prevent="emitRightClick">
    <div class="grid-layout" :class="{ vertical: config.isVertical }">
      <div
        class="progress-value"
        :class="[verticalAlignClass, horizontalAlignClass]"
      >
        {{ parsedProgress !== null ? parsedProgress : 'n/a' }}
      </div>
      <div class="progress-bar">
        <div class="progress-percent"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid-layout {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows:  1fr auto 1fr;

  gap: 0.5em;
  width: 100%;
  height: 100%;
  position: relative;
}

.grid-layout.vertical {
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto 1fr auto;
}

/* Zentrale Progressbar */
.progress-bar {
  grid-column: 2;
  grid-row: 2;
  background: v-bind(backgroundColor);
  border-radius: v-bind(barRadius);
  justify-self: center;
  position: relative;
  display: flex;
  align-items: end;
  justify-content: start;
  height: v-bind(horizontalPositionWrapper);
  width: v-bind(verticalPositionWrapper);
}

.progress-percent {
  height: v-bind(verticalPositionFiller);
  width: v-bind(horizontalPositionFiller);
  background: v-bind(backgroundProgressColor);
  transition: v-bind(transition);
  border-radius: v-bind(barRadius);
}

/* Text */
.progress-value {
  font-weight: 600;
  white-space: nowrap;
  align-self: center;
  justify-self: center;
  color: v-bind(textColor);
  z-index: 1000;
}

/* Grid-Zuweisung */
.align-left   { grid-column: 1; }
.align-center { grid-column: 2; }
.align-right  { grid-column: 3; }

.justify-top    { grid-row: 1; }
.justify-center { grid-row: 2; }
.justify-bottom { grid-row: 3; }
</style>
