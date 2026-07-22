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

const props = defineProps<{
    cubeName: string;
    propertiesRows?: any[];
    propertiesCols?: any[];
}>();

const isOpened = ref(false);
const generatedMdx = ref("");
const drillthroughItems = ref<any[]>([]);
const isDrillthroughLoading = ref(false);
const copied = ref(false);

const tableColumns = computed(() => {
    if (drillthroughItems.value.length === 0) return [];
    return Object.keys(drillthroughItems.value[0]).map(key => ({
        key,
        label: key.replace(/_/g, ' ').toUpperCase(),
        sortable: true
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

    const clickedMeasure = uNames.find(u => u.startsWith('[Measures].')) || '[Measures].[Sales Amount]';
    const slicerMembers = uNames.filter(u => !u.startsWith('[Measures].'));

    const cube = props.cubeName || 'AccountingWb';
    const selectClause = `{ ${clickedMeasure} }`;
    const whereClause = slicerMembers.length > 0 ? ` WHERE ( ${slicerMembers.join(', ')} )` : '';

    generatedMdx.value = `DRILLTHROUGH MAXROWS 100 SELECT ${selectClause} ON 0 FROM [${cube}]${whereClause}`;

    isOpened.value = true;
    isDrillthroughLoading.value = true;
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

        const root = rawResponse?.Body?.ExecuteResponse?.return?.root;
        const rowData = root?.row || rawResponse?.Body?.ExecuteResponse?.return?.[0]?.root?.row;
        const rows = rowData ? (Array.isArray(rowData) ? rowData : [rowData]) : [];

        drillthroughItems.value = rows.map((r: any) => {
            const item: Record<string, any> = {};
            for (const k of Object.keys(r)) {
                if (k === '__attrs') continue;
                const v = r[k];
                item[k] = v && typeof v === 'object' ? (v.Value ?? v.text ?? JSON.stringify(v)) : v;
            }
            return item;
        });
    } catch (err: any) {
        console.error("Drillthrough fetch error:", err);
    } finally {
        isDrillthroughLoading.value = false;
    }
};

defineExpose({ open });
</script>

<template>
  <va-modal
    v-model="isOpened"
    hide-default-actions
    max-width="850px"
    title="Drillthrough Details"
  >
    <div class="flex flex-col gap-4 w-full h-full">
      <div class="flex flex-col border border-solid border-gray-200 rounded overflow-hidden max-h-96 w-full h-full relative">
        <va-data-table
          :items="drillthroughItems"
          :columns="tableColumns"
          striped
          hoverable
          :loading="isDrillthroughLoading"
          no-data-html="<div class='p-6 text-center text-gray-400'>No drillthrough results found.</div>"
        />
      </div>

      <div class="flex justify-end gap-2">
        <va-button
          @click="isOpened = false"
        >
          Close
        </va-button>
      </div>
    </div>
  </va-modal>
</template>
