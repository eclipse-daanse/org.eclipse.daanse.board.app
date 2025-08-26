<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script lang="ts" setup>
import { toRefs, ref, watch, onMounted } from "vue";
import { useDatasourceRepository } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { PivotTable as PivotTableComponent } from 'org.eclipse.daanse.board.app.ui.vue.common.xmla';
import { PivotTable } from "./gen/PivotTable";

const props = defineProps<{ datasourceId: string }>();
const { datasourceId } = toRefs(props);
const config = defineModel<PivotTable>('configv', { required: true });

const defaultConfig = new PivotTable();

onMounted(() => {
    if (config.value) {
        Object.assign(config.value, { ...defaultConfig, ...config.value });
    }
});

const data = ref(null as any);
const { callEvent, update } = useDatasourceRepository(datasourceId, "PivotTable", data);

watch(datasourceId, (newVal, oldVal) => {
  update(newVal, oldVal);
})

const onExpand = (e: any) => {
  callEvent('expand', e, true);
};

const onCollapse = (e: any) => {
  callEvent('collapse', e, true);
};
</script>

<template>
  <div class="text-container">
    <div class="component">
      <PivotTableComponent v-if="data" :model-value="data" @onExpand="onExpand" @onCollapse="onCollapse"
        :rowsExpandedMembers="data.tableState.rowsExpandedMembers"
        :columnsExpandedMembers="data.tableState.columnsExpandedMembers" />
    </div>
  </div>
</template>

<style scoped>
.text-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 1rem;
  align-items: stretch;
}

.component {
  overflow: hidden;
}
</style>
