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
import { watch, onMounted, ref } from 'vue';
import { XmlaConnection } from 'org.eclipse.daanse.board.app.lib.connection.xmla';

const catalogs = ref([] as any[]);
const cubes = ref([] as any[]);

const { config } = defineProps<{
  config: any;
}>();

onMounted(async () => {
  if (config.url) {
    await fetchCatalogs();
  }

  if (config.catalogName) {
    await fetchCubes();
  }
});

const fetchCatalogs = async () => {
  catalogs.value = await XmlaConnection.getCatalogs(config.url);
};

const fetchCubes = async () => {
  cubes.value = await XmlaConnection.getCubes(config.url, config.catalogName);
};

watch(async () => config.url, async () => {
  await fetchCatalogs();
});

watch(async () => config.catalogName, async () => {
  await fetchCubes();
});
</script>

<template>

  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <VaInput v-model="config.url" label="URL" />

  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <VaSelect v-model="config.catalogName" label="Catalog" :options="catalogs" text-by="CATALOG_NAME"
    value-by="CATALOG_NAME" />

  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <VaSelect v-model="config.cubeName" label="Cube" :options="cubes" text-by="CUBE_NAME" value-by="CUBE_NAME" />


</template>
