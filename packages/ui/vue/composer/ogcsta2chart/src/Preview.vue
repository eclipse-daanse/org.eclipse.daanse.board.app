<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<script setup lang="ts">
import { useTemporaryStore } from 'org.eclipse.daanse.board.app.ui.vue.composables';
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS, Title, Tooltip,
  Legend, BarElement, CategoryScale, LinearScale
} from 'chart.js'
import { ref, watch, shallowRef } from 'vue';

const props = defineProps<{ dataSource: any }>();
const data = ref(null as any);
const chartData = ref(null as unknown as any);
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false
});
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

watch(props.dataSource, () => {
  update();
}, { deep: true });

const tempStore = shallowRef(null as any)
const settingsRef = ref(props.dataSource);
const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore);

const columns = ref([
  { key: 'datastream', label: 'Datastream', sortable: true },
  { key: 'value', label: 'Value', sortable: true },
  { key: 'unit', label: 'Unit', sortable: true },
  { key: 'timestamp', label: 'Timestamp', sortable: true }
])

watch(tempStore, async () => {
  data.value = await tempStore.value.getData("DataTable");
  chartData.value = await tempStore.value.getData('ChartData');
}, { deep: true });
</script>

<template>
  <div v-if="tempStore && data" class="flex flex-col h-full w-full gap-4">
    <div class="h50 overflow-hidden">
      <VaDataTable :items="data.items" :columns="columns" :stickyHeader="true" style="height: 100%;" />
    </div>
    <div class="h50">
      <Bar id="ogcsta-chart-preview" v-if="chartData && chartOptions"
        :options="chartOptions" :data="chartData" />
    </div>
  </div>
  <div v-else class="preview-placeholder">
    <p>Configure datasources and datastreams to see preview</p>
  </div>
</template>
<style scoped>
.h50{
  height: 50%;
}

.preview-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #6c757d;
  font-style: italic;
}
</style>