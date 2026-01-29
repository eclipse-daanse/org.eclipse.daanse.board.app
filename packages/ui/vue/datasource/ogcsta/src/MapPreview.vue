/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/
<script setup lang="ts">
import { onMounted, shallowRef, getCurrentInstance, watch, ref, computed, nextTick } from 'vue'
import { Chart, registerables } from 'chart.js';
import { LMap, LTileLayer, LMarker, LPopup, LIcon, LCircleMarker } from '@vue-leaflet/vue-leaflet';
import type { PointExpression } from 'leaflet';

import { useTemporaryStore } from 'org.eclipse.daanse.board.app.ui.vue.composables';
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';
import 'leaflet/dist/leaflet.css';

// Register Chart.js components
Chart.register(...registerables);
const props = defineProps<{ dataSource: any }>();

const data = ref(null as any);
const originalData = ref(null as any);
const viewMode = ref<'tree' | 'json'>('tree');
const selectedDatastream = ref<any>(null);

console.log(props.dataSource);
watch(props.dataSource, () => {
  update();
}, { deep: true });

const tempStore = shallowRef(null as any)
const settingsRef = ref(props.dataSource);
const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore);

watch(tempStore, async () => {
  console.log('tempStore changed', tempStore.value);
  data.value = await tempStore.value.getData('OGCSTAData');
  originalData.value = await tempStore.value.getOriginalData();

  // Subscribe to datasource updates
  if (tempStore.value && typeof tempStore.value.subscribe === 'function') {
    tempStore.value.subscribe(async () => {
      console.log('Datasource updated, refreshing data');
      data.value = await tempStore.value.getData('OGCSTAData');
      console.log('Updated data after subscribe callback:', data.value);
    });
  }
}, { deep: true });

const nonCircular = computed(()=>{
    const cache:any = [];
    return JSON.stringify(data.value, (key, value) => {
        if (typeof value === 'object' && value !== null) {
            // Duplicate reference found, discard key
            if (cache.includes(value)) return;

            // Store value in our collection
            cache.push(value);
        }
        return value;
    }, 2);
})

// Hierarchical structure: Things -> Datastreams -> Observations
const hierarchicalData = computed(() => {
  if (!data.value?.things) return [];

  return data.value.things.map((thing: any) => ({
    ...thing,
    datastreams: thing.datastreams?.map((ds: any) => ({
      ...ds,
      observations: ds.observations || []
    })) || []
  }));
});

const expandedThings = ref<Set<string>>(new Set());
const expandedDatastreams = ref<Set<string>>(new Set());
const selectedThing = ref<any>(null);
const showMap = ref(true);

// Map configuration
const mapCenter = ref<[number, number]>([50.93115286, 11.60392726]);
const mapZoom = ref(10);
const baseMapUrl = 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';

// Helper to extract coordinates from various location formats
const extractCoordinates = (thing: any): [number, number] | null => {
  // Try different location formats
  const locationSources = [
    thing.Locations?.[0]?.location,
    thing.location,
    thing.Locations?.[0],
    thing.locations?.[0]?.location,
    thing.locations?.[0],
  ];

  for (const loc of locationSources) {
    if (!loc) continue;

    // GeoJSON format: { type: "Point", coordinates: [lon, lat] }
    if (loc.coordinates && Array.isArray(loc.coordinates)) {
      const coords = loc.coordinates;
      if (coords.length >= 2 && typeof coords[0] === 'number') {
        return [coords[1], coords[0]]; // [lat, lon]
      }
    }

    // Direct coordinates array
    if (Array.isArray(loc) && loc.length >= 2 && typeof loc[0] === 'number') {
      return [loc[1], loc[0]]; // [lat, lon]
    }

    // Object with lat/lng or latitude/longitude
    if (typeof loc.lat === 'number' && typeof loc.lng === 'number') {
      return [loc.lat, loc.lng];
    }
    if (typeof loc.latitude === 'number' && typeof loc.longitude === 'number') {
      return [loc.latitude, loc.longitude];
    }
  }

  return null;
};

// Extract locations from things
const thingLocations = computed(() => {
  if (!hierarchicalData.value) return [];

  const locations: any[] = [];

  for (const thing of hierarchicalData.value) {
    const coords = extractCoordinates(thing);
    if (coords) {
      locations.push({
        id: thing.iotId || thing['@iot.id'],
        name: thing.name,
        description: thing.description,
        latLng: coords,
        properties: thing.properties,
        datastreamCount: thing.datastreams?.length || 0
      });
    }
  }

  console.log('Found locations:', locations.length, 'of', hierarchicalData.value.length, 'things');
  if (locations.length === 0 && hierarchicalData.value.length > 0) {
    console.log('Sample thing structure:', JSON.stringify(hierarchicalData.value[0], null, 2).slice(0, 500));
  }

  return locations;
});

// Update map center when locations change
watch(thingLocations, (locations) => {
  if (locations.length > 0) {
    // Calculate center of all locations
    const sumLat = locations.reduce((sum: number, loc: any) => sum + loc.latLng[0], 0);
    const sumLng = locations.reduce((sum: number, loc: any) => sum + loc.latLng[1], 0);
    mapCenter.value = [sumLat / locations.length, sumLng / locations.length];
  }
}, { immediate: true });

// Re-center map when chart panel opens/closes (map size changes)
watch(() => selectedDatastream.value, async () => {
  await nextTick();
  setTimeout(() => {
    if (mapRef.value?.leafletObject) {
      mapRef.value.leafletObject.invalidateSize();
      // Re-center on selected thing if any
      if (selectedThing.value?.id) {
        const location = thingLocations.value.find((loc: any) => loc.id === selectedThing.value.id);
        if (location) {
          mapRef.value.leafletObject.setView(location.latLng, mapRef.value.leafletObject.getZoom(), { animate: false });
        }
      }
    }
  }, 100);
});

const selectThingOnMap = (thing: any) => {
  selectedThing.value = thing;
  const thingId = thing.id || thing.iotId || thing['@iot.id'];
  expandedThings.value.add(thingId);
  centerOnThing(thingId);
};

const centerOnThing = (thingId: string) => {
  const location = thingLocations.value.find((loc: any) => loc.id === thingId);
  if (location && mapRef.value?.leafletObject) {
    mapRef.value.leafletObject.setView(location.latLng, 14, { animate: true });
  }
};

const selectThingFromTree = (thing: any) => {
  const thingId = thing.iotId || thing['@iot.id'];
  selectedThing.value = { id: thingId, ...thing };
  centerOnThing(thingId);
};

const toggleThing = (thingId: string, thing?: any) => {
  if (expandedThings.value.has(thingId)) {
    expandedThings.value.delete(thingId);
    selectedThing.value = null;
  } else {
    expandedThings.value.add(thingId);
    if (thing) {
      selectThingFromTree(thing);
    }
  }
};

const toggleDatastream = (dsId: string, datastream: any, event: Event) => {
  event.stopPropagation();
  if (expandedDatastreams.value.has(dsId)) {
    expandedDatastreams.value.delete(dsId);
  } else {
    expandedDatastreams.value.add(dsId);
  }
};

const loadingDatastream = ref(false);
const chartCanvas = ref<HTMLCanvasElement | null>(null);
const chartInstance = shallowRef<Chart | null>(null);
const mapRef = ref<any>(null);

const selectDatastream = async (datastream: any, event: Event) => {
  event.stopPropagation();

  // Set selected datastream first
  selectedDatastream.value = datastream;

  // Always load observations for the selected datastream
  const dsId = datastream.iotId || datastream['@iot.id'];
  console.log('Loading observations for datastream:', dsId);
  loadingDatastream.value = true;

  try {
    if (tempStore.value) {
      // Call getData with the filter option
      // This triggers getPartitionalData and loads ONLY observations
      console.log('Calling getData with filter option');
      const filteredData = await tempStore.value.getData('OGCSTAData', {
        filter: {
          observations: [datastream]
        }
      });

      console.log('Filtered data received:', filteredData);

      // The observations are loaded, but datastreams array might be empty
      // We need to get the observations and assign them to the datastream
      if (filteredData?.observations && filteredData.observations.length > 0) {
        console.log(`Found ${filteredData.observations.length} observations in filtered data`);

        // Filter observations for this specific datastream
        const dsObservations = filteredData.observations.filter((obs: any) =>
          obs.ds_source === dsId || obs.Datastream?.['@iot.id'] === dsId
        );

        console.log(`Found ${dsObservations.length} observations for datastream ${dsId}`);

        // Update the observations in the existing data structure
        let found = false;
        if (data.value?.things) {
          for (const thing of data.value.things) {
            if (thing.datastreams) {
              const existingDs = thing.datastreams.find((ds: any) =>
                (ds.iotId || ds['@iot.id']) === dsId
              );
              if (existingDs) {
                existingDs.observations = dsObservations;
                console.log('Updated observations in existing data structure');
                console.log('First observation:', dsObservations[0]);
                console.log('ExistingDs after update:', existingDs);

                // Trigger reactivity by creating a new reference
                data.value = { ...data.value };

                // Update selectedDatastream with the updated reference from the tree
                selectedDatastream.value = existingDs;
                console.log('selectedDatastream set to:', selectedDatastream.value);
                console.log('selectedDatastream.observations:', selectedDatastream.value?.observations?.length);
                found = true;
                break;
              }
            }
          }
        }

        if (!found) {
          // Fallback: create a datastream object with observations
          console.log('Creating datastream object with observations');
          const dsWithObs = {
            ...datastream,
            observations: dsObservations
          };
          selectedDatastream.value = dsWithObs;
        }
      } else {
        console.warn('No observations in filtered data');
        // Still set selectedDatastream to show empty chart
        selectedDatastream.value = datastream;
      }
    } else {
      console.error('tempStore not available');
    }
  } catch (error) {
    console.error('Error loading observations:', error);
  } finally {
    loadingDatastream.value = false;
  }
};

// Chart data for selected datastream
const chartData = computed(() => {
  console.log('Computing chartData, selectedDatastream:', selectedDatastream.value);
  console.log('selectedDatastream.value?.observations:', selectedDatastream.value?.observations?.length);

  if (!selectedDatastream.value?.observations || selectedDatastream.value.observations.length === 0) {
    console.log('No observations, returning null');
    return null;
  }

  const observations = [...selectedDatastream.value.observations].sort((a: any, b: any) => {
    return new Date(a.phenomenonTime).getTime() - new Date(b.phenomenonTime).getTime();
  });

  const chartDataResult = {
    labels: observations.map((obs: any) => new Date(obs.phenomenonTime).toLocaleString('de-DE', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })),
    datasets: [{
      label: selectedDatastream.value.name || 'Observations',
      data: observations.map((obs: any) => obs.result),
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.3,
      fill: true
    }]
  };

  console.log('Chart data computed:', chartDataResult);
  console.log('Number of data points:', chartDataResult.datasets[0].data.length);

  return chartDataResult;
});

const chartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'top' as const
    },
    title: {
      display: true,
      text: selectedDatastream.value?.name || 'Datastream Observations'
    }
  },
  scales: {
    y: {
      beginAtZero: false,
      title: {
        display: true,
        text: selectedDatastream.value?.unitOfMeasurement?.name || 'Value'
      }
    },
    x: {
      title: {
        display: true,
        text: 'Time'
      },
      ticks: {
        maxRotation: 45,
        minRotation: 45
      }
    }
  }
}));

// Watch for chartData changes and render chart
watch([chartData, chartCanvas], async () => {
  if (!chartCanvas.value || !chartData.value) {
    if (chartInstance.value) {
      chartInstance.value.destroy();
      chartInstance.value = null;
    }
    return;
  }

  await nextTick();

  if (chartInstance.value) {
    chartInstance.value.destroy();
  }

  const ctx = chartCanvas.value.getContext('2d');
  if (!ctx) return;

  chartInstance.value = new Chart(ctx, {
    type: 'line',
    data: chartData.value,
    options: chartOptions.value as any
  });
});
</script>
<template>

    <div v-if="tempStore && data" style="overflow: hidden; height: 100%;width:100%;display: flex; flex-direction: column;">
      <!-- View Mode Selector -->
      <div style="padding: 0.5rem; border-bottom: 1px solid #e5e7eb; display: flex; gap: 0.5rem; align-items: center;">
        <va-button
          :preset="viewMode === 'tree' ? 'primary' : 'secondary'"
          size="small"
          @click="viewMode = 'tree'"
        >
          Tree View
        </va-button>
        <va-button
          :preset="viewMode === 'json' ? 'primary' : 'secondary'"
          size="small"
          @click="viewMode = 'json'"
        >
          JSON View
        </va-button>
        <va-divider vertical />
        <va-checkbox
          v-model="showMap"
          label="Show Map"
          size="small"
        />
        <div style="margin-left: auto; display: flex; gap: 1rem; font-size: 0.85rem; color: #6b7280;">
          <span><strong>{{ hierarchicalData.length }}</strong> Things</span>
          <span><strong>{{ thingLocations.length }}</strong> with Location</span>
        </div>
      </div>

      <!-- Tree View with Split Panel -->
      <div v-if="viewMode === 'tree'" style="display: flex; flex: 1; overflow: hidden; gap: 0.5rem;">
        <!-- Left Panel: Tree -->
        <div class="tree-view" :style="{ width: (showMap || selectedDatastream) ? '45%' : '100%', minWidth: '300px' }">
          <div v-if="hierarchicalData.length === 0" style="padding: 1rem; color: #6b7280;">
            No data available
          </div>

          <div v-for="thing in hierarchicalData" :key="thing.iotId || thing['@iot.id']"
               class="thing-item"
               :class="{ 'thing-selected': selectedThing?.id === (thing.iotId || thing['@iot.id']) }">
            <div class="tree-node thing-node" @click="toggleThing(thing.iotId || thing['@iot.id'], thing)">
              <va-icon :name="expandedThings.has(thing.iotId || thing['@iot.id']) ? 'expand_more' : 'chevron_right'" size="small" />
              <va-icon name="sensors" size="small" color="primary" />
              <span class="node-label">{{ thing.name || thing.iotId || thing['@iot.id'] }}</span>
              <va-icon v-if="thing.Locations?.[0]?.location || thing.location" name="location_on" size="small" color="warning" title="Has location" />
              <span class="node-count">({{ thing.datastreams?.length || 0 }} DS)</span>
            </div>

            <!-- Thing Details (when expanded) -->
            <div v-if="expandedThings.has(thing.iotId || thing['@iot.id'])" class="children">
              <!-- Thing Info -->
              <div v-if="thing.description" class="thing-info">
                <span class="info-label">Description:</span>
                <span class="info-value">{{ thing.description }}</span>
              </div>
              <div v-if="thing.properties && Object.keys(thing.properties).length > 0" class="thing-info">
                <span class="info-label">Properties:</span>
                <div class="properties-list">
                  <span v-for="(value, key) in thing.properties" :key="key" class="property-tag">
                    {{ key }}: {{ typeof value === 'object' ? JSON.stringify(value) : value }}
                  </span>
                </div>
              </div>

              <!-- Datastreams -->
              <div v-for="ds in thing.datastreams" :key="ds.iotId || ds['@iot.id']" class="datastream-item">
                <div
                  class="tree-node datastream-node"
                  :class="{ 'selected': selectedDatastream && (selectedDatastream.iotId || selectedDatastream['@iot.id']) === (ds.iotId || ds['@iot.id']) }"
                  @click="selectDatastream(ds, $event)"
                >
                  <va-icon
                    :name="expandedDatastreams.has(ds.iotId || ds['@iot.id']) ? 'expand_more' : 'chevron_right'"
                    size="small"
                    @click="toggleDatastream(ds.iotId || ds['@iot.id'], ds, $event)"
                  />
                  <va-icon name="timeline" size="small" color="success" />
                  <span class="node-label">{{ ds.name || ds.iotId || ds['@iot.id'] }}</span>
                  <span v-if="ds.unitOfMeasurement?.symbol" class="unit-badge">{{ ds.unitOfMeasurement.symbol }}</span>
                  <span class="node-count">({{ ds.observations?.length || 0 }} obs)</span>
                  <va-icon
                    v-if="ds.observations && ds.observations.length > 0"
                    name="show_chart"
                    size="small"
                    color="info"
                    title="View chart"
                  />
                </div>

                <!-- Datastream Details -->
                <div v-if="expandedDatastreams.has(ds.iotId || ds['@iot.id'])" class="children">
                  <div v-if="ds.description" class="ds-info">
                    <span class="info-value-small">{{ ds.description }}</span>
                  </div>
                  <div v-if="ds.unitOfMeasurement" class="ds-info">
                    <span class="info-label-small">Unit:</span>
                    <span class="info-value-small">{{ ds.unitOfMeasurement.name }} ({{ ds.unitOfMeasurement.symbol }})</span>
                  </div>

                  <!-- Observations List -->
                  <div v-if="!ds.observations || ds.observations.length === 0" class="observation-item empty">
                    No observations loaded
                  </div>
                  <div v-for="(obs, idx) in (ds.observations || []).slice(0, 10)" :key="obs['@iot.id'] || idx" class="observation-item">
                    <va-icon name="circle" size="12px" color="info" />
                    <span class="observation-time">{{ new Date(obs.phenomenonTime).toLocaleString('de-DE') }}</span>
                    <span class="observation-result">{{ obs.result }} {{ ds.unitOfMeasurement?.symbol || '' }}</span>
                  </div>
                  <div v-if="ds.observations && ds.observations.length > 10" class="observation-item more">
                    ... and {{ ds.observations.length - 10 }} more observations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Panel: Map + Chart stacked -->
        <div class="right-panel">
          <!-- Map Panel (always visible when showMap is true) -->
          <div v-if="showMap && thingLocations.length > 0" class="map-panel" :class="{ 'half-height': selectedDatastream }">
            <l-map
              ref="mapRef"
              :center="mapCenter as PointExpression"
              :zoom="mapZoom"
              style="height: 100%; width: 100%;"
            >
              <l-tile-layer
                :url="baseMapUrl"
                :options="{ maxNativeZoom: 19, maxZoom: 21 }"
              />
              <!-- Highlight circle for selected thing -->
              <l-circle-marker
                v-if="selectedThing"
                :lat-lng="thingLocations.find((l: any) => l.id === selectedThing?.id)?.latLng"
                :radius="20"
                :fillOpacity="0.3"
                fillColor="#f59e0b"
                color="#f59e0b"
                :weight="3"
              />
              <l-marker
                v-for="loc in thingLocations"
                :key="loc.id"
                :lat-lng="loc.latLng"
                @click="selectThingOnMap(loc)"
              >
                <l-popup>
                  <div class="map-popup">
                    <strong>{{ loc.name }}</strong>
                    <p v-if="loc.description">{{ loc.description }}</p>
                    <small>{{ loc.datastreamCount }} Datastreams</small>
                  </div>
                </l-popup>
              </l-marker>
            </l-map>
          </div>

          <!-- No locations hint -->
          <div v-else-if="showMap && thingLocations.length === 0" class="no-locations">
            <va-icon name="location_off" size="large" color="secondary" />
            <p>No location data available</p>
          </div>

          <!-- Chart Panel -->
          <div v-if="selectedDatastream" class="chart-panel" :class="{ 'half-height': showMap && thingLocations.length > 0 }">
            <div class="chart-header">
              <div>
                <h3>{{ selectedDatastream.name || 'Datastream' }}</h3>
                <p v-if="selectedDatastream.description">{{ selectedDatastream.description }}</p>
              </div>
              <va-button
                icon="close"
                preset="plain"
                size="small"
                @click="selectedDatastream = null"
              />
            </div>
            <div class="chart-container">
              <canvas v-if="chartData" ref="chartCanvas"></canvas>
              <div v-else class="no-chart-data">
                <p>No observation data available</p>
                <small>Click on a datastream to load observations</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- JSON View -->
      <div v-else class="json-view">
        <VueJsonPretty :data="nonCircular" />
      </div>

    </div>
</template>

<style scoped>
.tree-view {
  flex: 1;
  overflow: auto;
  padding: 0.5rem;
}

.json-view {
  flex: 1;
  overflow: auto;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  margin: 0.5rem;
}

.tree-node {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  border-radius: 0.25rem;
  transition: background-color 0.15s;
  font-size: 0.9em;
}

.tree-node:hover {
  background-color: #f3f4f6;
}

.thing-node {
  font-weight: 600;
  color: #111827;
  font-size: 0.95em;
}

.thing-item.thing-selected > .thing-node {
  background-color: #fef3c7;
  border-left: 3px solid #f59e0b;
}

.datastream-node {
  font-weight: 500;
  color: #374151;
  font-size: 0.95em;
}

.node-label {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.node-count {
  color: #6b7280;
  font-size: 0.8em;
  font-weight: normal;
}

.unit-badge {
  background-color: #e0f2fe;
  color: #0369a1;
  padding: 0.1rem 0.4rem;
  border-radius: 0.25rem;
  font-size: 0.75em;
  font-weight: 500;
}

.children {
  margin-left: 1.5rem;
  border-left: 2px solid #e5e7eb;
  padding-left: 0.5rem;
}

.thing-info, .ds-info {
  padding: 0.25rem 0.5rem;
  font-size: 0.85em;
  color: #6b7280;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  align-items: flex-start;
}

.info-label {
  font-weight: 500;
  color: #374151;
  min-width: 80px;
}

.info-label-small {
  font-weight: 500;
  color: #6b7280;
  font-size: 0.9em;
}

.info-value {
  color: #4b5563;
  flex: 1;
}

.info-value-small {
  color: #6b7280;
  font-size: 0.9em;
}

.properties-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.property-tag {
  background-color: #f3f4f6;
  color: #374151;
  padding: 0.1rem 0.4rem;
  border-radius: 0.25rem;
  font-size: 0.8em;
}

.observation-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.9em;
  color: #4b5563;
}

.observation-item.empty {
  color: #9ca3af;
  font-style: italic;
}

.observation-item.more {
  color: #6b7280;
  font-style: italic;
  font-size: 0.85em;
}

.observation-time {
  color: #6b7280;
  font-size: 0.8em;
  min-width: 120px;
}

.observation-result {
  font-weight: 500;
  color: #059669;
}

/* Right Panel */
.right-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #e5e7eb;
  overflow: hidden;
  min-width: 300px;
}

/* Map Panel */
.map-panel {
  flex: 1;
  min-height: 200px;
  overflow: hidden;
}

.map-panel.half-height {
  flex: 0 0 50%;
  border-bottom: 1px solid #e5e7eb;
}

.no-locations {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  gap: 0.5rem;
  background: #f9fafb;
}

.map-popup {
  min-width: 150px;
}

.map-popup strong {
  display: block;
  margin-bottom: 0.25rem;
}

.map-popup p {
  margin: 0.25rem 0;
  font-size: 0.9em;
  color: #6b7280;
}

.map-popup small {
  color: #9ca3af;
}

.datastream-node.selected {
  background-color: #dbeafe;
  border-left: 3px solid #3b82f6;
}

.chart-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: white;
  overflow: hidden;
  min-height: 200px;
}

.chart-panel.half-height {
  flex: 0 0 50%;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.chart-header h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #111827;
}

.chart-header p {
  margin: 0.25rem 0 0 0;
  font-size: 0.85rem;
  color: #6b7280;
}

.chart-container {
  flex: 1;
  padding: 0.5rem;
  overflow: hidden;
  min-height: 150px;
}

.no-chart-data {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #9ca3af;
  font-style: italic;
}
</style>
