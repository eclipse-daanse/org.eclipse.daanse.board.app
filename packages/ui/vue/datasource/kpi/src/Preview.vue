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
import { watch, ref, shallowRef, computed } from 'vue';
import { useTemporaryStore } from 'org.eclipse.daanse.board.app.ui.vue.composables';
import { KpiTable } from 'org.eclipse.daanse.board.app.ui.vue.common.kpi';

const props = defineProps<{ dataSource: any }>();

const tempStore = shallowRef(null as any)
const settingsRef = ref(props.dataSource);

const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore);

const selection = computed(() => {
  if (!settingsRef.value.config.kpis) {
    return [];
  }
  return data.value.items.filter((item: any) => settingsRef.value.config.kpis.includes(item.name))
})

watch(() => props.dataSource.config, () => {
  update();
}, { deep: true });

const data = ref(null as unknown as any);

const selectedKpis = computed({
  get: () => settingsRef.value.config.kpis || [],
  set: (value: string[]) => {
    settingsRef.value.config.kpis = value
    console.log('Updated selected KPIs:', value)
  }
})

watch(tempStore, async () => {
  data.value = await tempStore.value.getOriginalData('DataTable');
}, { deep: true });

</script>
<template>
  <div v-if="tempStore" style="overflow: hidden; height: 100%; width: 100%;" class="flex flex-col gap-4">
    <div class="h-full">
      <KpiTable :tableData="data" v-model:selectedItems="selectedKpis" :show-selection="true" />
    </div>
  </div>
</template>
<style scoped>
.add_kpi {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 10px;
  align-items: end;
}

.added_kpis {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 10px;
  align-items: center;
}
</style>
