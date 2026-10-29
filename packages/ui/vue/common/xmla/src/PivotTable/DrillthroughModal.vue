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
import { ref, computed, inject } from "vue";
import { DModal, DTable, DButton } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { useTranslation } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { columnLabel, tabularRows } from "org.eclipse.daanse.board.app.lib.datasource.xmla";

const { t } = useTranslation("xmla");

const props = defineProps<{
    cubeName: string;
    propertiesRows?: any[];
    propertiesCols?: any[];
}>();

const isOpened = ref(false);
const generatedMdx = ref("");
const drillthroughItems = ref<any[]>([]);
const isDrillthroughLoading = ref(false);
const failed = ref(false);

const tableColumns = computed(() => {
    if (drillthroughItems.value.length === 0) return [];
    return Object.keys(drillthroughItems.value[0]).map(key => ({
        key,
        label: columnLabel(key),
    }));
});

const datasource = inject<any>('datasource');

const open = async (cell: any, pivotData: any) => {
    if (!pivotData || !cell) return;

    const rowOffset = props.propertiesRows?.length || 0;
    const colOffset = props.propertiesCols?.length || 0;

    const rowTuple = pivotData.rows?.[cell.j - rowOffset] || [];
    const colTuple = pivotData.columns?.[cell.i - colOffset] || [];

    const uNames = [...rowTuple, ...colTuple].map((m: any) => m.UName).filter(Boolean);

    // Without a measure on the axes - one in the WHERE clause, say - the cube's default measure answers.
    const clickedMeasure = uNames.find(u => u.startsWith('[Measures].'));
    const slicerMembers = uNames.filter(u => !u.startsWith('[Measures].'));

    const cube = props.cubeName.startsWith('[') ? props.cubeName : `[${props.cubeName}]`;
    const selectClause = clickedMeasure ? `{ ${clickedMeasure} } ON 0 ` : '';
    const whereClause = slicerMembers.length > 0 ? ` WHERE ( ${slicerMembers.join(', ')} )` : '';

    generatedMdx.value = `DRILLTHROUGH MAXROWS 100 SELECT ${selectClause}FROM ${cube}${whereClause}`;

    isOpened.value = true;
    isDrillthroughLoading.value = true;
    failed.value = false;
    drillthroughItems.value = [];

    try {
        const ds = datasource?.value;
        if (!ds) {
            throw new Error("Active datasource is not available in this context.");
        }

        const connection = ds.getConnection ? ds.getConnection() : null;
        if (!connection) {
            throw new Error("XMLA connection could not be retrieved from the active datasource.");
        }

        const api = await connection.getApi();
        if (!api) {
            throw new Error("XMLA SOAP API client is not configured.");
        }

        const rawResponse = await api.getDrillthroughMDX(generatedMdx.value);

        drillthroughItems.value = tabularRows(rawResponse);
    } catch (err: any) {
        console.error("Drillthrough fetch error:", err);
        failed.value = true;
    } finally {
        isDrillthroughLoading.value = false;
    }
};

defineExpose({ open });
</script>

<template>
  <DModal v-model="isOpened" :title="t('PivotTable.drillthroughTitle')" size="lg">
    <div class="drillthrough">
      <p v-if="isDrillthroughLoading" class="drillthrough__state" role="status">{{ t('PivotTable.drillthroughLoading') }}</p>
      <p v-else-if="failed" class="drillthrough__state">{{ t('PivotTable.drillthroughFailed') }}</p>
      <DTable v-else :items="drillthroughItems" :columns="tableColumns" :empty="t('PivotTable.drillthroughEmpty')" />
    </div>
    <template #actions>
      <DButton @click="isOpened = false">{{ t('PivotTable.close') }}</DButton>
    </template>
  </DModal>
</template>

<style scoped>
.drillthrough {
  max-height: 60vh;
  overflow: auto;
}

.drillthrough__state {
  padding: 1.5rem;
  text-align: center;
  color: var(--color-dim);
}
</style>
