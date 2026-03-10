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
import { useDatasourceRepository, VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { toRefs, ref, watch, computed, onMounted } from 'vue';
import { useVariableRepository } from "org.eclipse.daanse.board.app.ui.vue.composables"

const { wrapParameters } = useVariableRepository();

const props = defineProps<{ datasourceId: string, config: any }>();
const { datasourceId, config } = toRefs(props);
const data = ref(null as any);

watch(datasourceId, (newVal, oldVal) => {
  update(newVal, oldVal);
})

onMounted(() => {
    if (!config.value) return;
    const current = config.value.headerBackground;
    if (current === undefined || current === null) {
        config.value.headerBackground = new VariableWrapper('#f0f0f0');
    } else if (current instanceof VariableWrapper) {
        // Already correct instance
    } else if (typeof current === 'object' && 'value' in current) {
        // Rehydrate from JSON object
        const v = new VariableWrapper(current.value);
        if ('variable' in current) v.variable = current.variable;
        config.value.headerBackground = v;
    } else {
        // Upgrade primitive to wrapper
        config.value.headerBackground = new VariableWrapper(current);
    }
});

const {
    headerBackground,
} = wrapParameters({
    headerBackground: computed(() => (config.value.headerBackground as any)?.value || '#f0f0f0'),
});

const { update } = useDatasourceRepository(datasourceId, 'DataTable', data)
</script>
<template>
    <va-data-table
        class="table"
        :items="data ? data.items : []"
        sticky-header
        :style="`--va-data-table-thead-background--computed: ${headerBackground};`"
    />
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
