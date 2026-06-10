<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { LGeoJson, LCircleMarker } from '@vue-leaflet/vue-leaflet'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import {
  DatasourceRepository,
  identifier,
} from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import type { IDataRetrieveable } from 'org.eclipse.daanse.board.app.lib.repository.datasource'

const props = defineProps<{
  datasourceId: string
}>()

const routeData = ref<any>(null)
let unsubscribeFn: (() => void) | null = null

const lineFeatures = computed(() => {
  if (!routeData.value?.geojson?.features) return []
  return routeData.value.geojson.features.filter(
    (f: any) => f.geometry?.type === 'LineString',
  )
})

const waypointFeatures = computed(() => {
  if (!routeData.value?.geojson?.features) return []
  return routeData.value.geojson.features.filter(
    (f: any) => f.geometry?.type === 'Point',
  )
})

const lineGeoJson = computed(() => {
  if (lineFeatures.value.length === 0) return null
  return {
    type: 'FeatureCollection' as const,
    features: lineFeatures.value,
  }
})

function waypointLatLng(wp: any): [number, number] {
  const [lon, lat] = wp.geometry.coordinates
  return [lat, lon]
}

function waypointColor(wp: any): string {
  const role = wp.properties?.role
  if (role === 'start') return '#4caf50'
  if (role === 'end') return '#f44336'
  return '#2196f3'
}

const lineStyle = () => ({
  color: '#c45e00',
  weight: 5,
  opacity: 0.8,
})

async function loadData() {
  if (!props.datasourceId) return

  try {
    const dsRepo =
      container.get<DatasourceRepository>(identifier)
    const ds = dsRepo.getDatasource(
      props.datasourceId,
    ) as IDataRetrieveable

    const data = await ds.getData('object')
    routeData.value = data

    if (unsubscribeFn) unsubscribeFn()
    unsubscribeFn = ds.subscribe(async () => {
      const newData = await ds.getData('object')
      routeData.value = newData
    })
  } catch (e) {
    console.warn('RouteLayer: Could not load route data:', e)
  }
}

onMounted(() => {
  loadData()
})

watch(
  () => props.datasourceId,
  () => loadData(),
)

onUnmounted(() => {
  if (unsubscribeFn) unsubscribeFn()
})
</script>

<template>
  <l-geo-json
    v-if="lineGeoJson"
    :geojson="lineGeoJson"
    :options-style="lineStyle"
  />
  <l-circle-marker
    v-for="(wp, i) in waypointFeatures"
    :key="'wp-' + i"
    :lat-lng="waypointLatLng(wp)"
    :radius="8"
    :fill-color="waypointColor(wp)"
    color="#fff"
    :weight="2"
    :fill-opacity="1"
  />
</template>
