<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->

<script lang="ts" setup>


import { toRefs } from 'vue'
import { IDataPoint } from '../../api/Datapoint'

const props = withDefaults(defineProps<IDataPoint & { config: undefined, markerSize?: number }>(), {
  markerSize: 45
})
const { config, data, markerSize } = toRefs(props)


</script>

<template>
  <div class="datapoint-wrapper" :style="{ width: (markerSize || 45) + 'px', height: (markerSize || 45) + 'px' }">
    <div v-if="data" class="datapoint tlc">
      {{ data }}
    </div>
  </div>
</template>

<style scoped>
.datapoint-wrapper {
  position: relative;
  display: inline-block;
}

.tlc {
  position: absolute;
  border: 4px solid #f8f6f6;
  background: #6a6a6a;
  padding: 3px;
  border-radius: 12px;
  text-wrap: nowrap;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) rotate(-90deg);
  margin-top: 5px;
  box-shadow: -3px 5px 6px #1919192b;
  font-size: 12px;
  white-space: nowrap;
}

</style>
