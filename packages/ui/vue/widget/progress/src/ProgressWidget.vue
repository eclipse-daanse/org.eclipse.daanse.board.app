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
import type { IProgressSettings } from './index'
import { computed, toRefs, onMounted, ref, watch } from 'vue'
import { useDatasourceRepository } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import helpers from 'org.eclipse.daanse.board.app.lib.utils.helpers'
import { ProgressSettings } from './gen/ProgressSettings'

const props = defineProps<{ datasourceId: string }>()
const { datasourceId } = toRefs(props)
const config = defineModel<ProgressSettings>('configv', { required: true});
const data = ref(null)
const { update } = useDatasourceRepository(datasourceId, "object", data)

watch(datasourceId, (newVal, oldVal) => {
  update(newVal, oldVal)
})

const defaultConfig = new ProgressSettings()  /*{
  progress: "",
  fillColor: "#00FF00",
  gradientColor: "",
  backgroundColor: "#D3D3D3",
  isGradient: false,
  isVertical: false,
  rotation: 90,
  valueAlign: 'center',
  valueJustify: 'center',
}*/

onMounted(() => {
  if (config.value) {
    Object.assign(config.value, { ...defaultConfig, ...config.value })
  }
})

const backgroundColor = computed(() => config.value.backgroundColor)
const backgroundProgressColor = computed(() =>
  config.value.isGradient
    ? `linear-gradient(${config.value.rotation}deg, ${config.value.gradientColor})`
    : config.value.fillColor
)

const transition = computed(() =>
  config.value.isVertical ? "height .7s ease" : "width .7s ease"
)

const verticalPositionFiller = computed(() =>
  config.value.isVertical && parsedProgress.value
    ? `${(parsedProgress.value / (config.value.max ?? 100)) * 100}%`
    : "35px"
)

const horizontalPositionFiller = computed(() =>
  !config.value.isVertical && parsedProgress.value
    ? `${(parsedProgress.value / (config.value.max ?? 100)) * 100}%`
    : "35px"
)
const verticalPositionWrapper = computed(() =>
  config.value.isVertical && parsedProgress.value
    ? `35px`
    : "100%"
)

const horizontalPositionWrapper= computed(() =>
  !config.value.isVertical && parsedProgress.value
    ? `35px`
    : "100%"
)

const barRadius = computed(() => config.value.borderRadius || "10px")

const parsedProgress = computed(() => {
  if (!config.value.progress) return null

  const { parts } = helpers.widget.extractValuesAndFullObject(config.value.progress)
  let result = ""

  for (const part of parts) {
    const value = part.path || part.path === null
      ? helpers.widget.getValueByPath(data.value, part.path)
      : undefined
    result += value !== undefined ? value : part.text
  }

  const numeric = parseFloat(result)
  if (isNaN(numeric)) return null

  const min = config.value.min ?? 0
  const max = config.value.max ?? 100
  return Math.max(min, Math.min(max, numeric))
})

const horizontalAlignClass = computed(() => {
  switch (config.value?.valueAlign) {
    case "left": return "align-left"
    case "right": return "align-right"
    default: return "align-center"
  }
})
const textColor = computed(() => config.value.textColor || "#000000")

const verticalAlignClass = computed(() => {
  switch (config.value?.valueJustify) {
    case "top": return "justify-top"
    case "bottom": return "justify-bottom"
    default: return "justify-center"
  }
})
</script>

<template>
  <div class="container">
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
