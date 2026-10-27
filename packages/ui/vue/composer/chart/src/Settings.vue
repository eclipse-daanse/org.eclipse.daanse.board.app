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
import { DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { inject } from 'vue'
import { ChartComposer } from "org.eclipse.daanse.board.app.lib.composer.chart";
import {
  DatasourceRepository, identifier as DatasourceRepositoryIdentifier
} from "org.eclipse.daanse.board.app.lib.repository.datasource";
import { watch, ref, computed, onMounted } from "vue";
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'

// Injected once at setup; the static helpers receive it as an argument
const dsRepository = inject<DatasourceRepository>(DatasourceRepositoryIdentifier)!


const { config, dataSources } = defineProps<{
  config: any;
  dataSources: any;
  connections: any;
}>();

const { t } = useTranslation('composerChart')

const datasourcesFiltered = computed(() => {
  return dataSources.filter((ds: any) => ds.type === 'csv' || ds.type === 'xmla' || ds.type === 'rest');
});

const composeByOptions = ref([] as string[]);

/*
 * What the composer cannot be built without, asked of the composer itself -
 * the same list its factory checks before it builds one. A field left out
 * of it is marked here, rather than the save failing with nothing shown.
 */
const missing = computed(() => new Set<string>(ChartComposer.missingConfiguration(config)));
const errorFor = (field: string) => (missing.value.has(field) ? t('Settings.required') : undefined);

onMounted(async () => {
  composeByOptions.value = await ChartComposer.getHeaders(
    config.connectedDatasources || [],
    dsRepository,
  );
});

watch(() => config.connectedDatasources, async (newValue) => {
  composeByOptions.value =
    await ChartComposer.getHeaders(
      newValue || [],
      dsRepository,
    );
});
</script>
<template>
  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <DSelect v-model="config.connectedDatasources" :label="t('Settings.sources')" :options="datasourcesFiltered" multiple label-key="name"
    value-key="uid" required :error="errorFor('connectedDatasources')" />

  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <DSelect v-model="config.composeBy" :label="t('Settings.composeBy')" :options="composeByOptions"
    required :error="errorFor('composeBy')" />


  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <DSelect v-model="config.usedSets" :label="t('Chart.series')" :options="composeByOptions" multiple
    required :error="errorFor('usedSets')" />

  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <DSelect v-model="config.labelColumn" :label="t('Chart.labelColumn')" :options="composeByOptions"
    required :error="errorFor('labelColumn')" />
</template>
