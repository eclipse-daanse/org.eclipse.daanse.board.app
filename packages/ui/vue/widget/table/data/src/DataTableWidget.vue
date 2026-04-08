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

const props = defineProps<{ datasourceId: string, config: any, id?: string }>();
const { datasourceId, config, id: widgetId } = toRefs(props);

import { container as coreContainer, identifiers } from 'org.eclipse.daanse.board.app.lib.core';
import type { TinyEmitter } from 'tiny-emitter';
const eventBus = coreContainer.get<TinyEmitter>(identifiers.TINY_EMITTER);

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

const onRowClick = (e: any) => {
    emitRowClick(e.itemIndex?.toString() || '');
};

const onRowRightClick = (e: any) => {
    emitRowRightClick(e.itemIndex?.toString() || '');
};

const cellBind = (cell: any, row: any, column: any, rowIndex: number) => {
    return {
        onClick: (e: MouseEvent) => {
            emitCellClick(rowIndex.toString(), column.key || column.name || '');
        },
        onContextmenu: (e: MouseEvent) => {
            emitCellRightClick(rowIndex.toString(), column.key || column.name || '');
        }
    };
};

const extractColIdFromTh = (th: HTMLElement) => {
    const tr = th.parentElement;
    if (!tr) return '';
    const colIndex = Array.prototype.indexOf.call(tr.children, th);
    const keys = data.value?.items?.[0] ? Object.keys(data.value.items[0]) : [];
    if (keys[colIndex]) {
        return keys[colIndex];
    }
    return th.textContent?.trim() || '';
};

const onWrapperClick = (e: MouseEvent) => {
    const th = (e.target as HTMLElement).closest('th');
    if (th) {
        emitColumnClick(extractColIdFromTh(th));
    }
};

const onWrapperContextMenu = (e: MouseEvent) => {
    const th = (e.target as HTMLElement).closest('th');
    if (th) {
        emitColumnRightClick(extractColIdFromTh(th));
    }
};
</script>
<template>
    <div class="w-full h-full" @click="emitClick" @contextmenu.prevent="emitRightClick" @click.capture="onWrapperClick" @contextmenu.capture="onWrapperContextMenu">
        <va-data-table
            class="table"
            :items="data ? data.items : []"
            sticky-header
            :style="`--va-data-table-thead-background--computed: ${headerBackground};`"
            @row:click="onRowClick"
            @row:contextmenu="onRowRightClick"
            :cell-bind="cellBind"
        />
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

.loading {
    display: flex;
    height: 100%;
}
</style>
