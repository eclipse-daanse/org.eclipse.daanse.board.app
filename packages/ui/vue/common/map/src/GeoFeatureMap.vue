<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<script setup lang="ts">
/**
 * Whatever geography is in the answer, on a map.
 *
 * Bound to no source type: it is handed an answer and finds the features
 * in it (see features.ts). The two previews that drew maps before this one
 * each knew the shape of their own source - a SensorThings *Thing*, a
 * routing result - and showed nothing else, so a plain FeatureCollection
 * had nowhere to be seen (#1187).
 *
 * Points, lines and areas, all of them: a preview that silently drops two
 * of the three is worse than none, because it looks like an empty dataset.
 */
import { computed, nextTick, onBeforeUnmount, onMounted, ref, shallowRef, watch } from 'vue'
import { LGeoJson, LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'
import type * as Leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { loadLeaflet } from './leaflet'
import { FREE_BASE_MAP_ATTRIBUTION, FREE_BASE_MAP_URL } from './baseMap'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { boundsOf, countByType, featuresIn, type Feature } from './features'

const props = withDefaults(
  defineProps<{
    /** The answer, in whatever shape it came back. */
    data: unknown
    /** Shown while the source has not answered yet. */
    loading?: boolean
    /** The tiles to draw under the features. */
    baseMapUrl?: string
    attribution?: string
  }>(),
  {
    loading: false,
    baseMapUrl: FREE_BASE_MAP_URL,
    attribution: FREE_BASE_MAP_ATTRIBUTION,
  },
)

const { t } = useTranslation('commonMap')

const features = computed<Feature[]>(() => featuresIn(props.data))
const counts = computed(() => countByType(features.value))
const total = computed(() => features.value.length)

/*
 * Shallow: a FeatureCollection of any size is handed to Leaflet, which
 * reads it and never writes to it. Making every coordinate pair reactive
 * costs the whole answer and buys nothing.
 */
const collection = shallowRef<{ type: 'FeatureCollection'; features: Feature[] } | null>(null)

watch(
  features,
  (found) => {
    collection.value = found.length ? { type: 'FeatureCollection', features: found } : null
    void frame()
  },
  { immediate: true },
)

const map = ref<any>(null)

/*
 * The Leaflet the map is drawn with (#1302). vue-leaflet loads its own -
 * the ES module build, at mount - and a marker made by another copy of
 * Leaflet (the UMD build of a plain import of 'leaflet') is not one of its
 * layers: it threw "Cannot read properties of undefined (reading 'x')" on
 * every point. The markers are made with the same module, and the map is
 * mounted once it is there, so a preview that is mounted and at once
 * replaced does not leave vue-leaflet a map without its container ("Map
 * container not found").
 */
const leaflet = shallowRef<typeof Leaflet | null>(null)
let mounted = false
onMounted(async () => {
  mounted = true
  const loaded = await loadLeaflet()
  if (mounted) leaflet.value = loaded
})
onBeforeUnmount(() => {
  mounted = false
})

/** Points as circles: a GeoJSON point has no icon of its own to draw. */
const options = {
  pointToLayer: (_feature: unknown, latlng: Leaflet.LatLng) =>
    leaflet.value!.circleMarker(latlng, {
      radius: 5,
      color: '#1d4ed8',
      weight: 2,
      fillColor: '#3b82f6',
      fillOpacity: 0.8,
    }),
  onEachFeature: (feature: Feature, layer: Leaflet.Layer) => {
    const properties = feature.properties
    if (!properties || typeof properties !== 'object') return
    const rows = Object.entries(properties)
      .slice(0, 12)
      .map(([key, value]) => {
        const shown = typeof value === 'object' ? JSON.stringify(value) : String(value)
        return `<tr><th>${escape(key)}</th><td>${escape(shown)}</td></tr>`
      })
    if (rows.length) layer.bindPopup(`<table class="feature-popup">${rows.join('')}</table>`)
  },
}

/** Properties come from an endpoint, so they are text, never markup. */
function escape(value: string): string {
  return value.replace(/[&<>"]/g, (char) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[char] as string,
  )
}

const style = () => ({ color: '#1d4ed8', weight: 3, opacity: 0.85, fillOpacity: 0.25 })

/*
 * Framed on what there is, rather than on a fixed centre.
 *
 * A preview opens on data nobody has seen yet; a default centre somewhere
 * in Thuringia shows an empty map of the wrong place and reads as "no
 * data". Where the coordinates cannot be measured the view is left alone.
 */
async function frame() {
  await nextTick()
  const bounds = boundsOf(features.value)
  const leaflet = map.value?.leafletObject
  if (!bounds || !leaflet) return
  const [south, west, north, east] = bounds
  leaflet.invalidateSize()
  if (south === north && west === east) {
    leaflet.setView([south, west], 14)
    return
  }
  leaflet.fitBounds([
    [south, west],
    [north, east],
  ], { padding: [24, 24] })
}
</script>

<template>
  <div class="geomap">
    <header class="geomap__what">
      <template v-if="total">
        <span class="geomap__count">{{ t('Map.features', { count: total }) }}</span>
        <span v-for="(count, type) in counts" :key="type" class="geomap__kind">
          {{ type }}&nbsp;{{ count }}
        </span>
      </template>
      <span v-else-if="loading" class="geomap__note" role="status">{{ t('Map.loading') }}</span>
      <span v-else class="geomap__note" role="status">{{ t('Map.none') }}</span>
    </header>

    <div class="geomap__canvas">
      <LMap v-if="leaflet" ref="map" :zoom="6" :center="[50.93, 11.6]" :use-global-leaflet="false" @ready="frame">
        <LTileLayer :url="baseMapUrl" :attribution="attribution" />
        <LGeoJson v-if="collection" :geojson="collection as any" :options="options" :options-style="style" />
      </LMap>
    </div>
  </div>
</template>

<style scoped>
.geomap {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-height: 0;
}

.geomap__what {
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex: none;
  padding: 6px 10px;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-dim);
  border-bottom: 1px solid var(--color-divider);
}

.geomap__count {
  font-weight: 600;
  color: var(--color-fg);
}

.geomap__kind {
  white-space: nowrap;
}

.geomap__note {
  color: var(--color-dim);
}

.geomap__canvas {
  flex: 1 1 auto;
  min-height: 0;
}

/* Leaflet measures itself against this; a percentage of nothing is nothing. */
.geomap__canvas :deep(.leaflet-container) {
  height: 100%;
  width: 100%;
  background: var(--color-sunken);
}

:deep(.feature-popup) {
  border-collapse: collapse;
  font-size: 12px;
}

:deep(.feature-popup th) {
  text-align: left;
  padding-right: 8px;
  font-weight: 600;
  vertical-align: top;
  white-space: nowrap;
}

:deep(.feature-popup td) {
  max-width: 28ch;
  overflow-wrap: anywhere;
}
</style>
