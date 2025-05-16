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
import { ChartComposer } from "org.eclipse.daanse.board.app.lib.composer.chart";
import {
  DatasourceRepository, identifier as DatasourceRepositoryIdentifier
} from "org.eclipse.daanse.board.app.lib.repository.datasource";
import { watch, ref, computed, getCurrentInstance, onMounted } from "vue";
import { Container } from "inversify";

const app = getCurrentInstance();
const container = app?.appContext.config.globalProperties.$container as Container;

const { config, dataSources } = defineProps<{
  config: any;
  dataSources: any;
  connections: any;
}>();

const datasourcesFiltered = computed(() => {
  return dataSources.filter((ds: any) => ds.type === 'csv' || ds.type === 'xmla' || ds.type === 'rest');
});

const composeByOptions = ref([] as string[]);

onMounted(async () => {
  composeByOptions.value = await ChartComposer.getHeaders(
    config.connectedDatasources || [],
    container.get(DatasourceRepositoryIdentifier) as DatasourceRepository,
  );
});

watch(() => config.connectedDatasources, async (newValue) => {
  composeByOptions.value =
    await ChartComposer.getHeaders(
      newValue || [],
      container.get(DatasourceRepositoryIdentifier) as DatasourceRepository,
    );
});
</script>
<template>
  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <VaSelect v-model="config.connectedDatasources" label="Sources" :options="datasourcesFiltered" multiple text-by="name"
    value-by="uid" />

  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <VaSelect v-model="config.composeBy" label="Compose By" :options="composeByOptions" />


  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <VaSelect v-model="config.usedSets" label="Series" :options="composeByOptions" multiple />

  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <VaSelect v-model="config.labelColumn" label="Label Column" :options="composeByOptions" />
</template>
