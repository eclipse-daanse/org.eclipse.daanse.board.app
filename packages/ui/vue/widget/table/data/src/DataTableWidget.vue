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
import { inject, toRefs, ref, watch, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { useVariableRepository } from "org.eclipse.daanse.board.app.ui.vue.composables"

const { wrapParameters } = useVariableRepository();

const props = defineProps<{ datasourceId: string, config: any, id?: string }>();
const { datasourceId, config, id: widgetId } = toRefs(props);

import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import type { TinyEmitter } from 'tiny-emitter';
import { EventActionsRegistry, EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events';
import { DataTableWidgetInterface } from './api/DataTableWidgetInterface';

const eventBus = inject<TinyEmitter>(identifiers.TINY_EMITTER)!;
const actionsRegistry = inject<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY)!;

const route = useRoute();
const pageId = (route.params.pageid as string) || '';

class DataTableWidgetApi extends DataTableWidgetInterface {
    refresh(): void {
        update(datasourceId.value, datasourceId.value);
    }
}
const api = new DataTableWidgetApi();
defineExpose<DataTableWidgetInterface>(api);

onUnmounted(() => { if (widgetId?.value) actionsRegistry.unregisterInstance(widgetId.value); });

const emitClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:DataTableWidget:click', {
        type: 'widget:DataTableWidget:click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

const emitRightClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:DataTableWidget:right_click', {
        type: 'widget:DataTableWidget:right_click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

const emitRowClick = (rowId: string) => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:DataTableWidget:row_click', {
        type: 'widget:DataTableWidget:row_click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), rowId }
    });
};

const emitRowRightClick = (rowId: string) => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:DataTableWidget:row_right_click', {
        type: 'widget:DataTableWidget:row_right_click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), rowId }
    });
};

const emitColumnClick = (colId: string) => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:DataTableWidget:col_click', {
        type: 'widget:DataTableWidget:col_click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), colId }
    });
};

const emitColumnRightClick = (colId: string) => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:DataTableWidget:col_right_click', {
        type: 'widget:DataTableWidget:col_right_click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), colId }
    });
};

const emitCellClick = (rowId: string, colId: string) => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:DataTableWidget:cell_click', {
        type: 'widget:DataTableWidget:cell_click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), rowId, colId }
    });
};

const emitCellRightClick = (rowId: string, colId: string) => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:DataTableWidget:cell_right_click', {
        type: 'widget:DataTableWidget:cell_right_click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), rowId, colId }
    });
};

const data = ref(null as any);

watch(datasourceId, (newVal, oldVal) => {
  update(newVal, oldVal);
})

onMounted(() => {
    if (widgetId?.value) actionsRegistry.registerInstance(widgetId.value, api, 'DataTableWidget', pageId);
    if (!config.value) return;
    const current = config.value.headerBackground;
    if (current === undefined || current === null) {
        config.value.headerBackground = new VariableWrapper('var(--color-raised)');
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
    headerBackground: computed(() => (config.value.headerBackground as any)?.value || 'var(--color-raised)'),
});

const { update } = useDatasourceRepository(datasourceId, 'DataTable', data)

/**
 * The rows as they arrive, and the columns their first row names.
 *
 * The datasource hands back plain records; which columns there are is what
 * the first one has. Writing the table out means a cell knows its row and
 * its column - the events below say which was clicked without anything
 * having to count table cells afterwards.
 */
const rows = computed<Record<string, unknown>[]>(() => data.value?.items ?? [])
const columns = computed<string[]>(() => Object.keys(rows.value[0] ?? {}))
</script>
<template>
    <div class="w-full h-full" @click="emitClick" @contextmenu.prevent="emitRightClick">
        <table class="table" :style="{ '--header-background': headerBackground }">
            <thead>
                <tr>
                    <th
                        v-for="column in columns"
                        :key="column"
                        @click="emitColumnClick(column)"
                        @contextmenu.prevent="emitColumnRightClick(column)"
                    >
                        {{ column }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(row, rowIndex) in rows"
                    :key="rowIndex"
                    @click="emitRowClick(String(rowIndex))"
                    @contextmenu.prevent="emitRowRightClick(String(rowIndex))"
                >
                    <td
                        v-for="column in columns"
                        :key="column"
                        @click="emitCellClick(String(rowIndex), column)"
                        @contextmenu.prevent="emitCellRightClick(String(rowIndex), column)"
                    >
                        {{ row[column] }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
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

.table {
    width: 100%;
    border-collapse: collapse;
    font-family: var(--font-sans);
    font-size: var(--text-sm);
    color: var(--color-fg);
}

/* The header stays put while the rows go past it */
.table th {
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 6px 10px;
    text-align: left;
    font-weight: 600;
    background: var(--header-background, var(--color-raised));
    border-bottom: 1px solid var(--color-divider);
    cursor: pointer;
    white-space: nowrap;
}

.table td {
    padding: 5px 10px;
    border-bottom: 1px solid var(--color-divider);
}

.table tbody tr:hover {
    background: var(--color-raised);
}

.loading {
    display: flex;
    height: 100%;
}
</style>
