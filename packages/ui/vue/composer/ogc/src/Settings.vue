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
import { OgcFeatureComposer } from "org.eclipse.daanse.board.app.lib.composer.ogc";
import {
  DatasourceRepository, identifier as DatasourceRepositoryIdentifier
} from "org.eclipse.daanse.board.app.lib.repository.datasource";
import { watch, ref, computed, onMounted } from "vue";
import { container } from 'org.eclipse.daanse.board.app.lib.core'

const { config, dataSources, connections } = defineProps<{
  config: any;
  dataSources: any;
  connections: any;
}>();

const datasourcesFiltered = computed(() => {
  return dataSources.filter((ds: any) => ds.type === 'csv' || ds.type === 'xmla');
});

const headers = ref([] as string[]);
const properties = ref([] as string[]);

const geometryTypes = ['Point'];

watch(() => config.connectedDatasources, async (newValue) => {
  headers.value = await OgcFeatureComposer.getHeaders(
    newValue,
    container.get(DatasourceRepositoryIdentifier) as DatasourceRepository
  );

  properties.value = await OgcFeatureComposer.getProperties(
    newValue,
    container.get(DatasourceRepositoryIdentifier) as DatasourceRepository
  );
});

</script>
<template>
    <!-- eslint-disable-next-line vue/no-mutating-props -->
  <VaSelect v-model="config.connectedDatasources" label="Sources" :options="datasourcesFiltered" multiple text-by="name"
    value-by="uid" />


  <VaCheckbox v-model="config.useGeometryFromData" label="Use geometry from data" style="margin: 0.5rem 0;"/>
  <template v-if="config.useGeometryFromData">
    <!-- eslint-disable-next-line vue/no-mutating-props -->
    <VaCheckbox v-model="config.useGeometryFromProps" label="Use geometry from properties" style="margin: 0.5rem 0;"/>

    <template v-if="config.useGeometryFromProps">
      <!-- eslint-disable-next-line vue/no-mutating-props -->
      <VaSelect v-model="config.geometryPropsField" label="Geometry properties field" :options="properties" />
    </template>

    <template v-else>
      <!-- eslint-disable-next-line vue/no-mutating-props -->
      <VaSelect v-model="config.geometryField" label="Geometry field" :options="headers" />
    </template>

  </template>
  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <template v-else>
    <VaSelect v-model="config.xField" label="X Coordinate field" :options="headers" />

    <!-- eslint-disable-next-line vue/no-mutating-props -->
    <VaSelect v-model="config.yField" label="Y Coordinate field" :options="headers" />

    <!-- eslint-disable-next-line vue/no-mutating-props -->
    <VaSelect v-model="config.geometryType" label="Geometry type" :options="geometryTypes" />
  </template>
</template>
