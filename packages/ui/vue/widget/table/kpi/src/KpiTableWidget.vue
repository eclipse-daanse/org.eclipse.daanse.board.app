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
import { useDatasourceRepository } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { toRefs, ref, watch, computed, provide } from 'vue';
import { useVariableRepository } from "org.eclipse.daanse.board.app.ui.vue.composables"
import { KpiTable } from 'org.eclipse.daanse.board.app.ui.vue.common.kpi';

const { wrapParameters } = useVariableRepository();

const props = defineProps<{ datasourceId: string, config: any }>();
const { datasourceId, config } = toRefs(props);
const data = ref(null as any);

watch(datasourceId, (newVal, oldVal) => {
    update(newVal, oldVal);
})

const {
    statusVisualType,
    trendVisualType,
    showParentChild,
    showFolders
} = wrapParameters({
    statusVisualType: computed(() => config.value.statusVisualType || 'badge'),
    trendVisualType: computed(() => config.value.trendVisualType || 'badge'),
    showParentChild: computed(() => config.value.showParentChild ?? false),
    showFolders: computed(() => config.value.showFolders ?? false),
});

provide('statusVisualType', statusVisualType);
provide('trendVisualType', trendVisualType);
const { update } = useDatasourceRepository(datasourceId, 'DataTable', data)

const parsedTableData = computed(() => {
    if (!data.value) return null;

    let result = data.value;

    if (!(config.value.showFolders ?? false)) {
        result = flattenFolders(result);
    }

    if (!(config.value.showParentChild ?? false)) {
        result = flattenParentChild(result);
    }

    return result;
});

function flattenFolders(items: any[]): any[] {
    const flattened: any[] = [];

    function extractItems(items: any[]) {
        items.forEach(item => {
            if (item.type === 'Folder') {
                // Extract all children from folder
                extractItems(item.children || []);
            } else {
                flattened.push(item);
            }
        });
    }

    extractItems(items);
    return flattened;
}

function flattenParentChild(items: any[]): any[] {
    const flattened: any[] = [];

    function extractItems(items: any[]) {
        items.forEach(item => {
            if (item.type === 'Folder') {
                // Keep folder structure but flatten its contents
                flattened.push({
                    ...item,
                    children: item.children ? extractItemsFromChildren(item.children) : []
                });
            } else {
                // Add the item itself
                flattened.push({
                    ...item,
                    children: [] // Remove children to flatten hierarchy
                });
                // Add all children as separate items
                if (item.children && item.children.length > 0) {
                    flattened.push(...extractItemsFromChildren(item.children));
                }
            }
        });
    }

    function extractItemsFromChildren(children: any[]): any[] {
        const result: any[] = [];
        children.forEach(child => {
            result.push({
                ...child,
                children: [] // Remove children to flatten hierarchy
            });
            if (child.children && child.children.length > 0) {
                result.push(...extractItemsFromChildren(child.children));
            }
        });
        return result;
    }

    extractItems(items);
    return flattened;
}

</script>
<template>
    <KpiTable :tableData="parsedTableData" />
</template>

<style scoped>
.filters {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
    padding: 1rem;
    flex-grow: 0;
}

.table_container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.table_container .pagination {
    flex-grow: 0;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: end;
}

.table_container .pagination .page_input {
    justify-self: start;
}

.table_container .table {
    flex-grow: 1;
    flex-shrink: 1;
}

.loading {
    display: flex;
    height: 100%;
}
</style>
