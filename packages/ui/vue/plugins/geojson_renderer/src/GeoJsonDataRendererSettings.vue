<!--
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script lang="ts" setup>
import { ref, computed } from 'vue'
import ConditionSettings from 'org.eclipse.daanse.board.app.ui.vue.widget.map/src/parts/conditionLogic/ConditionSettings.vue'
import PointStyler from 'org.eclipse.daanse.board.app.ui.vue.widget.map/src/parts/styler/PointStyler.vue'
import AreaStyler from 'org.eclipse.daanse.board.app.ui.vue.widget.map/src/parts/styler/AreaStyler.vue'

const model = defineModel<any>({ required: true })
const tabNo = ref(0)

// Initialize default values in setting
if (!model.value) {
  model.value = {}
}
if (!model.value.conditions) {
  model.value.conditions = []
}
if (!model.value.renderer) {
  model.value.renderer = {
    point_render_as: 'icon',
    point_prop: 'name',
    point: {
      currentIcon: 'circle',
      iconColor: '#000000',
      iconSize: 24,
      isIconFilled: false,
      strokeWeight: 400,
      opticSize: 24,
      grade: 0
    },
    pointPin: { color: '#ccc' },
    area: {
      stroke: true,
      color: '#3388ff',
      weight: 3,
      opacity: 1,
      fill: true,
      fillOpacity: 0.2,
      fillColor: '#3388ff',
      className: ''
    }
  }
}
</script>

<template>
  <div class="geojson-settings">
    <VaTabs v-model="tabNo">
      <template #tabs>
        <VaTab
          v-for="tab in ['Conditions', 'Points', 'Areas']"
          :key="tab"
        >
          {{ tab }}
        </VaTab>
      </template>
    </VaTabs>

    <div class="tab-content">
      <!-- Conditions Tab -->
      <div v-if="tabNo === 0" class="full">
        <ConditionSettings v-model="model.conditions" />
      </div>

      <!-- Points Tab -->
      <div v-else-if="tabNo === 1" class="full">
        <PointStyler v-model="model.renderer" />
      </div>

      <!-- Areas Tab -->
      <div v-else-if="tabNo === 2" class="full">
        <AreaStyler v-model="model.renderer.area" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.geojson-settings {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.tab-content {
  flex: 1;
  overflow: auto;
  padding: 1rem;
}
</style>
