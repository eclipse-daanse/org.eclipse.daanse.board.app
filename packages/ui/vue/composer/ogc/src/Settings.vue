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
import { DCheckbox, DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { inject } from 'vue'
import { OgcFeatureComposer } from "org.eclipse.daanse.board.app.lib.composer.ogc";
import {
  DatasourceRepository, identifier as DatasourceRepositoryIdentifier
} from "org.eclipse.daanse.board.app.lib.repository.datasource";
import { watch, ref, computed, onMounted } from "vue";

// Injected once at setup; the static helpers receive it as an argument
const dsRepository = inject<DatasourceRepository>(DatasourceRepositoryIdentifier)!

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
    dsRepository
  );

  properties.value = await OgcFeatureComposer.getProperties(
    newValue,
    dsRepository
  );
});

</script>
<template>
    <!-- eslint-disable-next-line vue/no-mutating-props -->
  <DSelect v-model="config.connectedDatasources" label="Quellen" :options="datasourcesFiltered" multiple label-key="name"
    value-key="uid" />


  <DCheckbox v-model="config.useGeometryFromData" label="Geometrie aus den Daten" style="margin: 0.5rem 0;"/>
  <template v-if="config.useGeometryFromData">
    <!-- eslint-disable-next-line vue/no-mutating-props -->
    <DCheckbox v-model="config.useGeometryFromProps" label="Geometrie aus den Eigenschaften" style="margin: 0.5rem 0;"/>

    <template v-if="config.useGeometryFromProps">
      <!-- eslint-disable-next-line vue/no-mutating-props -->
      <DSelect v-model="config.geometryPropsField" label="Feld der Geometrie-Eigenschaft" :options="properties" />
    </template>

    <template v-else>
      <!-- eslint-disable-next-line vue/no-mutating-props -->
      <DSelect v-model="config.geometryField" label="Feld der Geometrie" :options="headers" />
    </template>

  </template>
  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <template v-else>
    <DSelect v-model="config.xField" label="Feld für die X-Koordinate" :options="headers" />

    <!-- eslint-disable-next-line vue/no-mutating-props -->
    <DSelect v-model="config.yField" label="Feld für die Y-Koordinate" :options="headers" />

    <!-- eslint-disable-next-line vue/no-mutating-props -->
    <DSelect v-model="config.geometryType" label="Art der Geometrie" :options="geometryTypes" />
  </template>
</template>
