<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script lang="ts" setup>

import { PointExpression } from 'leaflet'
import { LGeoJson, LIcon, LMap, LMarker, LTileLayer } from '@vue-leaflet/vue-leaflet'


const baseMapUrl = 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
const zoom = 5
const attribution = '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
const center = [50.93115286, 11.60392726]


</script>

<template>
  <div class="pmap_container">
    <l-map id="map" ref="map" :center="center as PointExpression" :max-zoom="21" :zoom="zoom" style="height: 100%">
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
