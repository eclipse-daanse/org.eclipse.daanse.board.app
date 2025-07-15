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

watch(() => props.dataSource.config.connection, () => {
  update();
}, { deep: true });

const updateSelection = (selection: any[]) => {
  console.log('Selection updated:', selection);
  settingsRef.value.config.kpis = selection.map((kpi: any) => kpi.name);
  console.log('Updated KPIs:', settingsRef.value.config.kpis);
};

const data = ref(null as unknown as any);

watch(tempStore, async () => {
  data.value = await tempStore.value.getOriginalData('DataTable');
}, { deep: true });

</script>
<template>
  <div v-if="tempStore" style="overflow: hidden; height: 100%; width: 100%;" class="flex flex-col gap-4">
    <div class="h-full">
      <VaDataTable v-if="data" :items="data.items" :stickyHeader="true" style="height: 100%;"
        :model-value="selection"
        @update:model-value="updateSelection"
        selectable select-mode="multiple"
        :columns="[
          { key: 'name' },
          { key: 'caption' },
          { key: 'value' },
          { key: 'goal' },
          { key: 'status' },
          { key: 'trend' }
        ]"
      >
        <template #cell(status)="{ value }">
          <div class="flex items-center gap-2">
            <VaBadge :color="value > 0.5 ? 'success' : 'danger'" :text="value"></VaBadge>
          </div>
        </template>
        <template #cell(trend)="{ value }">
          <VaBadge :color="value > 0.5 ? 'success' : 'danger'" :text="value"></VaBadge>
        </template>
      </VaDataTable>
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
