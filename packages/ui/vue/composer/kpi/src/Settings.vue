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
import { KpiComposer } from "org.eclipse.daanse.board.app.lib.composer.kpi";
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
  return dataSources.filter((ds: any) => KpiComposer.availableTypes.includes(ds.type));
});
</script>
<template>
  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <VaSelect v-model="config.connectedDatasources" label="KPI Sources" :options="datasourcesFiltered" multiple text-by="name"
    value-by="uid" />
</template>
