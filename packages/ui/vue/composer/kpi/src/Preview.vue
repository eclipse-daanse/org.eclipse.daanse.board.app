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
import { useTemporaryStore } from 'org.eclipse.daanse.board.app.ui.vue.composables';
import { KpiTable } from 'org.eclipse.daanse.board.app.ui.vue.common.kpi';
import { ref, watch, shallowRef } from 'vue';

const props = defineProps<{ dataSource: any }>();
const data = ref(null as any);

watch(props.dataSource, () => {
  update();
}, { deep: true });

const tempStore = shallowRef(null as any)
const settingsRef = ref(props.dataSource);
const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore);

watch(tempStore, async () => {
  console.log('tempStore changed', tempStore.value);
  data.value = await tempStore.value.getData('DataTable');
}, { deep: true });

</script>

<template>
  <div v-if="tempStore && data" style="overflow: hidden; height: 100%; width: 100%;">
    <KpiTable :tableData="data" />
  </div>
</template>
