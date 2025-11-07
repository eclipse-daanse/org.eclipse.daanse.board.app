<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script lang="ts" setup>
import { LGeoJson } from '@vue-leaflet/vue-leaflet'
import type { GeoJsonObject } from 'geojson'

interface WFSLayerProps {
  geoJson: any
  styleIds: string[]
  layerOptions: any
  filterFeatureCollection: (data: any, style: any) => any
  getStyleById: (id: string) => any
  isPoint: (obj: any) => boolean
}

const props = defineProps<WFSLayerProps>()
</script>

<template>
  <template v-for="styleID in styleIds" :key="styleID">
    <l-geo-json
      v-if="!isPoint(geoJson)"
      ref="thingsLayer"
      :geojson="filterFeatureCollection(geoJson as any, getStyleById(styleID)!) as unknown as GeoJsonObject[]"
      :options="layerOptions"
      :options-style="()=>getStyleById(styleID)?.renderer.area as any"
    />
  </template>
</template>