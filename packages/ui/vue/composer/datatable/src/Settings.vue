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
import { DataTableComposer } from "org.eclipse.daanse.board.app.lib.composer.datatable";
import {
  DatasourceRepository, identifier as DatasourceRepositoryIdentifier
} from "org.eclipse.daanse.board.app.lib.repository.datasource";
import { watch, ref, computed } from "vue";
import { container } from 'org.eclipse.daanse.board.app.lib.core'

const { config, dataSources } = defineProps<{
  config: any;
  dataSources: any;
  connections: any;
}>();

const datasourcesFiltered = computed(() => {
  return dataSources.filter((ds: any) => DataTableComposer.availableTypes.includes(ds.type));
});

const composeByOptions = ref([] as string[]);
watch(() => config.connectedDatasources, async (newValue) => {
  console.log('newValue', newValue);
  composeByOptions.value = await DataTableComposer.getHeaders(
    newValue,
    container.get(DatasourceRepositoryIdentifier) as DatasourceRepository
  );
});
</script>
<template>
  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <VaSelect v-model="config.connectedDatasources" label="Sources" :options="datasourcesFiltered" multiple text-by="name"
    value-by="uid" />

  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <VaSelect v-model="config.composeBy" label="Compose By" :options="composeByOptions" />
</template>
