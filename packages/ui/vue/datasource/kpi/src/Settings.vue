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
import { computed, watch, onMounted, ref } from 'vue';
import { XmlaStore } from 'org.eclipse.daanse.board.app.lib.datasource.xmla';

const { config, connections } = defineProps<{
  config: any;
  dataSources: any;
  connections: any;
}>();
const cubes = ref([] as any[]);

const connectionsFiltered = computed(() => {
  return connections.filter((c: any) => c.type === 'xmla');
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
</template>
