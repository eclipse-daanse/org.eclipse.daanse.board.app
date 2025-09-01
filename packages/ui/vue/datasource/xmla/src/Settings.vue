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
import { debounce } from 'lodash';
import { computed, onMounted, ref, watch } from 'vue';
import { XmlaStore } from 'org.eclipse.daanse.board.app.lib.datasource.xmla';

const { config, connections } = defineProps<{
    config: any;
    connections: any;
    dataSources: any;
}>();

const innerInterval = ref(config.pollingInterval ?? 5000);
const cubes = ref([] as any[]);

const connectionsFiltered = computed(() => {
    return connections.filter((c: any) => c.type === 'xmla');
});

const intervalDebounce = debounce((interval: string) => {
    if (!interval) return;
    const parsedInterval = parseInt(interval);
    config.pollingInterval = parsedInterval;
}, 700);

watch(() => innerInterval.value, (nv) => {
    if (!nv || isNaN(parseInt(nv))) {
        innerInterval.value = "5000";
    }
    intervalDebounce(nv);
});

watch(async () => config.connection, async () => {
  if (config.connection) {
    cubes.value = await XmlaStore.fetchCubes(config.connection);
  }
});

onMounted(async () => {
  if (config.connection) {
    cubes.value = await XmlaStore.fetchCubes(config.connection);
  }
});
</script>

<template>
    <!-- eslint-disable-next-line vue/no-mutating-props -->
    <VaSelect v-model="config.connection" label="Connection" :options="connectionsFiltered" text-by="name"
        value-by="uid" />
    <VaSelect v-model="config.cube" label="Cube" :options="cubes" text-by="CUBE_NAME" value-by="CUBE_NAME" />
    <VaSwitch v-model="config.pollingEnabled" label="Enable Long Polling" />
    <VaInput v-if="config.pollingEnabled" v-model="innerInterval" label="Polling Interval (ms)" />
    <!-- eslint-disable-next-line vue/no-mutating-props -->
    <!-- <VaInput v-model="config.resourceUrl" label="Resource Url" /> -->
</template>
