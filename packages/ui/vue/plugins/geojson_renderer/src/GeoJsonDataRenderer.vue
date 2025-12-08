<!--
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script lang="ts" setup>
import { toRefs, computed } from 'vue'
import { LGeoJson, LMarker, LIcon } from '@vue-leaflet/vue-leaflet'
import type { FeatureCollection, Feature } from 'geojson'
import L from 'leaflet'
import MapMarker from 'org.eclipse.daanse.board.app.ui.vue.widget.map/src/components/MapMarker.vue'

export interface ICondition {
  prop: string
  comperator: string
  value: string
}

export interface IGeoJsonConfig {
  conditions?: ICondition[]
  renderer?: {
    point_render_as?: string
    point_prop?: string
    point_image_url?: string
    point_image_size?: number
    point?: any
    pointPin?: { color?: string }
    area?: {
      fillColor?: string
      fillOpacity?: number
      color?: string
      weight?: number
      stroke?: boolean
      opacity?: number
      fill?: boolean
      className?: string
    }
  }
}

export interface IDataPoint {
  data: any
}

const props = withDefaults(defineProps<IDataPoint & {
  config: IGeoJsonConfig,
  markerSize?: number
}>(), {
  markerSize: 0
})

const { config, data } = toRefs(props)

const conditions = computed(() => config.value?.conditions || [])
const areaStyle = computed(() => config.value?.renderer?.area || {})
const renderer = computed(() => config.value?.renderer || {})

// Helper functions
const isPoint = (geometry: any): boolean => {
  return geometry?.type === 'Point' || geometry?.type === 'MultiPoint'
}

const getPoint = (geometry: any): [number, number] | null => {
  if (!geometry) return null
  if (geometry.type === 'Point') {
    return [geometry.coordinates[1], geometry.coordinates[0]] // Leaflet uses [lat, lng]
  }
  return null
}

// Filter features based on conditions
const filterFeatures = (featureCollection: FeatureCollection): Feature[] => {
  if (!conditions.value || conditions.value.length === 0) {
    return featureCollection.features
  }

  const filteredFeatures: Feature[] = []

  for (const feature of featureCollection.features) {
    for (const condition of conditions.value) {
      if (condition.value === '*') {
        filteredFeatures.push(feature)
        break
      } else {
        const prop = getNestedProperty(feature.properties, condition.prop)
        if (!prop) {
          continue
        }
        if (compareCondition(condition.comperator, prop, condition.value)) {
          filteredFeatures.push(feature)
          break
        }
      }
    }
  }

  return filteredFeatures
}

const getNestedProperty = (obj: any, path: string): any => {
  if (!obj || !path) return undefined
  return path.split('.').reduce((current, key) => current?.[key], obj)
}

const compareCondition = (comperator: string, prop: any, value: any): boolean => {
  switch (comperator) {
    case 'eq':
      return String(prop) === value
    case 'neq':
      return String(prop) !== value
    case 'gt':
      return Number(prop) > Number(value)
    case 'gte':
      return Number(prop) >= Number(value)
    case 'lt':
      return Number(prop) < Number(value)
    case 'lte':
      return Number(prop) <= Number(value)
    default:
      return false
  }
}

// Process data with filtering
const processedData = computed(() => {
  if (!data.value) return null

  if (data.value.type === 'FeatureCollection') {
    const filteredFeatures = filterFeatures(data.value)
    return filteredFeatures
  }

  // Single Feature or other GeoJSON types - return as-is
  return [data.value]
})

// Check if data is valid GeoJSON
const isValidGeoJSON = computed(() => {
  if (!data.value) return false
  const geoJsonTypes = ['Feature', 'FeatureCollection', 'Point', 'LineString', 'Polygon', 'MultiPoint', 'MultiLineString', 'MultiPolygon', 'GeometryCollection']
  return data.value.type && geoJsonTypes.includes(data.value.type)
})

const geoJsonStyle = computed(() => ({
  fillColor: areaStyle.value?.fillColor || '#3388ff',
  fillOpacity: areaStyle.value?.fillOpacity !== undefined ? areaStyle.value.fillOpacity : 0.2,
  color: areaStyle.value?.color || '#3388ff',
  weight: areaStyle.value?.weight !== undefined ? areaStyle.value?.weight : 3,
  stroke: areaStyle.value?.stroke !== undefined ? areaStyle.value?.stroke : true,
  opacity: areaStyle.value?.opacity !== undefined ? areaStyle.value?.opacity : 1,
  fill: areaStyle.value?.fill !== undefined ? areaStyle.value?.fill : true,
  className: areaStyle.value?.className || ''
}))
</script>

<template>
  <template v-if="isValidGeoJSON && processedData">
    <template v-for="(feature, idx) in processedData" :key="feature.id || idx">
      <!-- Render non-Point geometries as GeoJSON -->
      <l-geo-json
        v-if="!isPoint(feature.geometry)"
        :geojson="feature"
        :options="{ pane: 'overlayPane' }"
        :options-style="() => geoJsonStyle"
      />

      <!-- Render Points as Markers with MapMarker -->
      <l-marker
        v-if="getPoint(feature.geometry)"
        :lat-lng="getPoint(feature.geometry) as L.LatLngExpression"
        :options="{ pane: 'markerPane' }"
      >
        <l-icon class-name="someExtraClass">
          <MapMarker
            :render-as="(renderer.point_render_as || 'icon') as 'icon' | 'prop' | 'image' | 'none'"
            :background-color="renderer.pointPin?.color"
            :icon-config="renderer.point"
            :property-value="feature.properties?.[renderer.point_prop ?? '']"
            :image-url="renderer.point_image_url"
            :image-size="renderer.point_image_size || 32"
          />
        </l-icon>
      </l-marker>
    </template>
  </template>
</template>

<style scoped>
.pin {
  width: 45px;
  height: 45px;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  left: 50%;
  top: 50%;
  margin: -15px 71px 0 -15px;
  box-shadow: -4px -6px 8px #0000005c;
}

.pin.round {
  border-radius: 50% 50% 50% 50%;
}

.pin.contain {
  width: auto;
  height: auto;
  border-radius: 25%;
  display: inline-block;
  transform: rotate(0deg);
  padding: 4px;
  margin: 0px;
}

.pin.contain .inner {
  width: auto;
  height: auto;
  margin: 0;
  position: relative;
  transform: rotate(0deg);
  border-radius: 17%;
  display: inline-block;
  font-size: 13px;
  padding: 3px;
}

.pin .datapoint {
  transform: rotate(45deg);
  position: absolute;
  top: 50px;
  left: 0;
  margin: 0;
}

.pin.marker::before {
  content: " ";
  width: 20px;
  height: 20px;
  display: block;
  position: absolute;
  transform: rotate(-45deg);
  border-radius: 50% 50% 50% 0;
  top: 14px;
  left: 5px;
  z-index: -24;
}

.pin .inner {
  padding: 5px 0 0 0;
  width: 37px;
  height: 37px;
  margin: 3px 0 0 4px;
  background: #fff;
  position: absolute;
  transform: rotate(45deg);
  border-radius: 50%;
}

.image-marker {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -50%;
  margin-top: -50%;
}
</style>
