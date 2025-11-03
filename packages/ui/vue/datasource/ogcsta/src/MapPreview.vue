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

import { useTemporaryStore } from 'org.eclipse.daanse.board.app.ui.vue.composables';
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

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

const toggleThing = (thingId: string) => {
  if (expandedThings.value.has(thingId)) {
    expandedThings.value.delete(thingId);
  } else {
    expandedThings.value.add(thingId);
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
      <div style="padding: 0.5rem; border-bottom: 1px solid #e5e7eb; display: flex; gap: 0.5rem;">
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
      </div>

      <!-- Tree View with Split Panel -->
      <div v-if="viewMode === 'tree'" style="display: flex; flex: 1; overflow: hidden; gap: 0.5rem;">
        <!-- Left Panel: Tree -->
        <div class="tree-view" :style="{ width: selectedDatastream ? '40%' : '100%' }">
          <div v-if="hierarchicalData.length === 0" style="padding: 1rem; color: #6b7280;">
            No data available
          </div>

          <div v-for="thing in hierarchicalData" :key="thing.iotId || thing['@iot.id']" class="thing-item">
            <div class="tree-node thing-node" @click="toggleThing(thing.iotId || thing['@iot.id'])">
              <va-icon :name="expandedThings.has(thing.iotId || thing['@iot.id']) ? 'expand_more' : 'chevron_right'" size="small" />
              <va-icon name="sensors" size="small" color="primary" />
              <span class="node-label">{{ thing.name || thing.iotId || thing['@iot.id'] }}</span>
              <span class="node-count">({{ thing.datastreams?.length || 0 }} datastreams)</span>
            </div>

            <!-- Datastreams -->
            <div v-if="expandedThings.has(thing.iotId || thing['@iot.id'])" class="children">
              <div v-for="ds in thing.datastreams" :key="ds.iotId || ds['@iot.id']" class="datastream-item">
                <div
                  class="tree-node datastream-node"
                  :class="{ 'selected': selectedDatastream?.iotId === ds.iotId || selectedDatastream?.['@iot.id'] === ds['@iot.id'] }"
                  @click="selectDatastream(ds, $event)"
                >
                  <va-icon
                    :name="expandedDatastreams.has(ds.iotId || ds['@iot.id']) ? 'expand_more' : 'chevron_right'"
                    size="small"
                    @click="toggleDatastream(ds.iotId || ds['@iot.id'], ds, $event)"
                  />
                  <va-icon name="timeline" size="small" color="success" />
                  <span class="node-label">{{ ds.name || ds.iotId || ds['@iot.id'] }}</span>
                  <span class="node-count">({{ ds.observations?.length || 0 }} observations)</span>
                  <va-icon
                    v-if="ds.observations && ds.observations.length > 0"
                    name="show_chart"
                    size="small"
                    color="info"
                    title="View chart"
                  />
                </div>

                <!-- Observations List -->
                <div v-if="expandedDatastreams.has(ds.iotId || ds['@iot.id'])" class="children">
                  <div v-if="!ds.observations || ds.observations.length === 0" class="observation-item empty">
                    No observations
                  </div>
                  <div v-for="(obs, idx) in ds.observations" :key="obs['@iot.id'] || idx" class="observation-item">
                    <va-icon name="circle" size="12px" color="info" />
                    <span class="observation-time">{{ obs.phenomenonTime }}</span>
                    <span class="observation-result">{{ obs.result }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Panel: Chart -->
        <div v-if="selectedDatastream" class="chart-panel">
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
              <p>No observation data available to display chart</p>
              <p style="font-size: 0.8em; margin-top: 0.5rem;">
                Loading: {{ loadingDatastream ? 'Yes' : 'No' }}<br>
                Observations: {{ selectedDatastream?.observations?.length || 0 }}<br>
                ChartData: {{ chartData ? 'Available' : 'Null' }}
              </p>
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
  gap: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 0.25rem;
  transition: background-color 0.15s;
}

.tree-node:hover {
  background-color: #f3f4f6;
}

.thing-node {
  font-weight: 600;
  color: #111827;
}

.datastream-node {
  font-weight: 500;
  color: #374151;
  font-size: 0.95em;
}

.node-label {
  flex: 1;
}

.node-count {
  color: #6b7280;
  font-size: 0.85em;
  font-weight: normal;
}

.children {
  margin-left: 1.5rem;
  border-left: 2px solid #e5e7eb;
  padding-left: 0.5rem;
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

.observation-time {
  color: #6b7280;
  font-size: 0.85em;
}

.observation-result {
  font-weight: 500;
  color: #059669;
}

.datastream-node.selected {
  background-color: #dbeafe;
  border-left: 3px solid #3b82f6;
}

.chart-panel {
  width: 100%;
  height:100%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #e5e7eb;
  background: white;
  overflow: hidden;
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
  padding: 1rem;
  overflow: auto;
  min-height: 500px;
  width: 100%;
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
