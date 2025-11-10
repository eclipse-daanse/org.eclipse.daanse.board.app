<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script lang="ts" setup>
import { LGeoJson, LMarker, LIcon } from '@vue-leaflet/vue-leaflet'
import L from 'leaflet'
import MapMarker from './MapMarker.vue'
import { IconSettings } from '../gen/IconSettings'

interface GeoJsonLayerProps {
  layerData: any
  styleIds: string[]
  layerOptions: any
  markerPane: string
  filterFeatureCollection: (data: any, style: any) => any
  getStyleById: (id: string) => any
  isPoint: (obj: any) => boolean
  getPoint: (obj: any) => any
}

const props = defineProps<GeoJsonLayerProps>()
</script>

<template>
  <template v-for="styleID in styleIds" :key="styleID">
    <template v-for="feature in (filterFeatureCollection(layerData, getStyleById(styleID)!).features)" :key="feature.id">
      <l-geo-json
        v-if="!isPoint(feature.geometry)"
        ref="geojsonLayer"
        :geojson="feature"
        :options="layerOptions"
        :options-style="()=>getStyleById(styleID)?.renderer.area as any"
      />

      <l-marker
        v-if="getPoint(feature.geometry)"
        :lat-lng="getPoint(feature.geometry) as L.LatLngExpression"
        :options="{ pane: markerPane }"
      >
        <l-icon class-name="someExtraClass">
          <MapMarker
            :render-as="getStyleById(styleID)?.renderer.point_render_as"
            :background-color="getStyleById(styleID)?.renderer.pointPin?.color"
            :icon-config="getStyleById(styleID)?.renderer.point"
            :property-value="feature.properties?.[getStyleById(styleID)?.renderer.point_prop ?? '']"
            :image-url="getStyleById(styleID)?.renderer.point_image_url"
            :image-size="getStyleById(styleID)?.renderer.point_image_size || 32"
          />
        </l-icon>
      </l-marker>
    </template>
  </template>
</template>
