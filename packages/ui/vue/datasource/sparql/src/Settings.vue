<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script lang="ts" setup>
import { DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls'


import { computed } from 'vue'
import type { ISparqlStoreConfiguration } from 'org.eclipse.daanse.board.app.lib.datasource.sparql'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'


const { config, connections } = defineProps<{
  config: ISparqlStoreConfiguration;
  dataSources: any;
  connections: any;
}>()

const { t } = useTranslation('datasourceSparql');


const connectionsFiltered = computed(() => {
  return connections.filter((c: any) => c.type === 'rest');
});


/*
 * No query here.
 *
 * It used to be a whole Yasgui in this form, with its results switched
 * off - half an editor in a column of fields. The query has a view of
 * its own now, with what it answers under it (#1178); a setting is what
 * one fills in, and a query is not that.
 */
</script>

<template>
  <div>
    <DSelect v-model="config.connection" :label="t('Settings.connection')" :options="connectionsFiltered" />
  </div>
</template>

<style scoped>
/*
 * Nothing of Yasgui's left to undo here. What stood in this sheet was a
 * list of its parts switched off one by one, to make a query editor out
 * of a thing that is an editor and a result together. It is both again,
 * in a view of its own.
 */
</style>
