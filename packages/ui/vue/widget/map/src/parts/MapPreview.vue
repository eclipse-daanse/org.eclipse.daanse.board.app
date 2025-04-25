<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script lang="ts" setup>
import type { PointExpression, StyleFunction } from 'leaflet'
import { LGeoJson, LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'
import geoJsonExample from './geoJsonExample.json'
import { computed, ref, toRefs, watch } from 'vue'
import { IMapProps } from '../api/MapPreview'
import { FeatureCollection } from 'geojson'


const baseMapUrl = 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
const zoom = 5
const attribution = '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
const center = [50.93115286, 11.60392726]
const geojosonExample = geoJsonExample

const map = ref(null)

const props = withDefaults(defineProps<{ config: IMapProps }>(), {})
const { config } = toRefs(props)
/*const props = withDefaults(defineProps<IMapProps>(), {
    stroke: true,
    color: '#623375',
    weight: 3,
    opacity: 1.0,
    lineCap: 'round',
    dashOffset: '',
    fill: true,
    fillOpacity: 0.2,
    fillColor: '#7e7e7e',
    className: ''
})*/

const style = (feature: any) => {
  return config.value
}

watch(() => config, () => {
  (map.value as any).leafletObject?.eachLayer((ly: any) => {
    try {
      ly.setStyle(style)
    } catch (e) {
      console.log(e)
    }
  })
}, { deep: true })


</script>

<template>
  <div class="pmap_container">
    <l-map id="map" ref="map" :center="center as PointExpression" :max-zoom="21" :zoom="zoom" style="height: 100%">
      <l-tile-layer :attribution="attribution" :options="{maxNativeZoom:19,
                maxZoom:25}" :url="baseMapUrl"></l-tile-layer>
      <l-geo-json :geojson="geoJsonExample as FeatureCollection" :optionsStyle="()=>style as StyleFunction<any>"></l-geo-json>
    </l-map>

  </div>
</template>

<style scoped>
.pmap_container {
  width: 100%;
  height: 250px;
}

</style>
