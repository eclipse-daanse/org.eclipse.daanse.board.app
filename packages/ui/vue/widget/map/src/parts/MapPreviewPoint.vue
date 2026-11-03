<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script lang="ts" setup>

import L, { PointExpression } from 'leaflet'
import { LGeoJson, LIcon, LMap, LMarker, LTileLayer } from '@vue-leaflet/vue-leaflet'
import { onMounted, ref } from 'vue'


/* OpenStreetMap's own tiles: CARTO's answer "API KEY REQUIRED" (#1197). */
const baseMapUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
const zoom = 5
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
const center = [50.93115286, 11.60392726]
const map = ref(null)

onMounted(()=>{
  if (map.value && (map.value as any).leafletObject) {
    ((map.value as any).leafletObject as L.Map).invalidateSize()
  }
})

</script>

<template>
  <div class="pmap_container">
    <l-map id="map_t" ref="map" :center="center as PointExpression" :max-zoom="21" :zoom="zoom" style="height: 100%">
      <l-tile-layer :attribution="attribution" :options="{maxNativeZoom:19,
                maxZoom:25}" :url="baseMapUrl"></l-tile-layer>
      <slot></slot>

    </l-map>

  </div>
</template>

<style scoped>
.pmap_container {
  width: 100%;
  /*height: 100%;*/
  min-height: 250px;
}


</style>

