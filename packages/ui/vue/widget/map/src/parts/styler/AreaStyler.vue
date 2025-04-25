<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
-->
<script lang="ts" setup>

import MapPreview from './../../parts/MapPreview.vue'
import MapSettings from './../../parts/MapSettings.vue'
import { type ModelRef, reactive } from 'vue'
import type { IMapProps } from './../../api/MapPreview'

const model: ModelRef<IMapProps> = defineModel<IMapProps>({
  default: () => {
    return reactive({
      stroke: true,
      color: '#ccc',
      weight: 2,
      opacity: 1,
      lineCap: 'None',
      dashOffset: 2,
      fill: true,
      fillOpacity: 1,
      className: ''
    })
  }
})
</script>

<template>

  <div class="flex flex-col md6 pa-3">
    <MapSettings v-model="model"></MapSettings>
  </div>
  <div class="flex flex-col md6 pa-3">
    <MapPreview ref="MapPrev" :config="model"></MapPreview>
  </div>


</template>

<style scoped>

</style>
