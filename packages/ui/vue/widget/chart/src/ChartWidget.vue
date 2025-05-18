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
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS, Title, Tooltip,
  Legend, BarElement, CategoryScale, LinearScale
} from 'chart.js';
import { useDatasourceRepository } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { ref, toRefs, watch } from 'vue';


ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps<{ datasourceId: string }>();
const { datasourceId } = toRefs(props);
const data = ref(null as any);

watch(datasourceId, (newVal, oldVal) => {
  update(newVal, oldVal);
})

const { update } = useDatasourceRepository(datasourceId, "ChartData", data);

const chartOptions = ref({
  responsive: true,
})
</script>
<template>
  <Bar
    id="my-chart-id"
    v-if="data && chartOptions"
    :options="chartOptions"
    :data="data"
  />
</template>
