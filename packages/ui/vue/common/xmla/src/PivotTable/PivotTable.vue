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
import { provide, ref, type Ref, computed, inject } from "vue";
import { TinyEmitter } from "tiny-emitter";
import { useElementSize } from "@vueuse/core";
import RowsArea from "./Areas/RowsArea.vue";
import ColumnsArea from "./Areas/ColumnsArea.vue";
import CellsArea from "./Areas/CellsArea.vue";

const data = defineModel<IPivotTable>({ required: true });

const props = defineProps({
    propertiesRows: {
        required: false,
        type: Array,
        default: () => [],
    },
    propertiesCols: {
        required: false,
        type: Array,
        default: () => [],
    },
    rowsExpandedMembers: {
        required: false,
        type: Array,
        default: () => [],
    },
    columnsExpandedMembers: {
        required: false,
        type: Array,
        default: () => [],
    },
    headerBackgroundColor: {
        required: false,
        type: String,
        default: '#f5f5f5',
    },
    headerTextColor: {
        required: false,
        type: String,
        default: '#000000',
    },
    cellBackgroundColor: {
        required: false,
        type: String,
        default: '#ffffff',
    },
    cellTextColor: {
        required: false,
        type: String,
        default: '#000000',
    },
    borderColor: {
        required: false,
        type: String,
        default: 'silver',
    },
    defaultColumnWidth: {
        required: false,
        type: Number,
        default: 150,
    },
    defaultRowHeight: {
        required: false,
        type: Number,
        default: 30,
    },
    fontSize: {
        required: false,
        type: Number,
        default: 14,
    },
    headerFontWeight: {
        required: false,
        type: Number,
        default: 600,
    },
    cellTextAlign: {
        required: false,
        type: String as () => 'left' | 'center' | 'right',
        default: 'left',
    },
    rowLevelStyles: {
        required: false,
        type: Array as () => Array<{ level: number; backgroundColor: string; textColor: string; fontWeight: number }>,
        default: () => [],
    },
    columnLevelStyles: {
        required: false,
        type: Array as () => Array<{ level: number; backgroundColor: string; textColor: string; fontWeight: number }>,
        default: () => [],
    },
    conditionalFormats: {
        required: false,
        type: Array as () => Array<{
            id: string;
            conditionType: string;
            value1: number | string;
            value2?: number | string;
            backgroundColor: string;
            textColor: string;
            fontWeight?: number;
            minColor?: string;
            maxColor?: string;
            priority: number;
        }>,
        default: () => [],
    },
});

const DEFAULT_COLUMN_WIDTH = computed(() => props.defaultColumnWidth);
const DEFAULT_ROW_HEIGHT = computed(() => props.defaultRowHeight);
const DEFAULT_ROW_HEIGHT_CSS = computed(() => `${props.defaultRowHeight}px`);

const colStyles = ref([] as number[]);
const rowsStyles = ref([] as number[]);

const rowsContainer = ref(null) as Ref<any>;
const { width: rowsWidth } = useElementSize(rowsContainer);

const eventBus = new TinyEmitter();
provide("pivotTableEventBus", eventBus);

const onResize = (e: MouseEvent) => {
    eventBus.emit("onResize", e);
};

const onStopResize = () => {
    eventBus.emit("onStopResize");
};

const drillthrough = () => { };

const columnsOffset = computed(() => {
    return data.value.rows?.[0]?.length * DEFAULT_COLUMN_WIDTH.value;
});

const setRowsStyles = (i: number, value: number) => {
    rowsStyles.value[i] = value;
};

const setColumnsStyles = (i: number, value: number) => {
    colStyles.value[i] = value;
};

const emit = defineEmits(["onExpand", "onCollapse", "onDrilldown", "onDrillup"]);

provide("setRowsStyles", setRowsStyles);
provide("setColumnsStyles", setColumnsStyles);

provide("drilldown", (value: any, area: string) => {
    // EventBus.emit(`DRILLDOWN:${store.value.id}`, { value, area });
});
provide("drillup", (value: any, area: string) => {
    // EventBus.emit(`DRILLUP:${store.value.id}`, { value, area });
});
provide("expand", (value: any, area: string) => {
    emit("onExpand", { value, area });
    // EventBus.emit(`EXPAND:${store.value.id}`, { value, area });
});
provide("collapse", (value: any, area: string) => {
    emit("onCollapse", { value, area });
    // EventBus.emit(`COLLAPSE:${store.value.id}`, { value, area });
});

const totalContentSize = computed(() => {
    const columnsDesc = [
        ...props.propertiesCols,
        ...(data.value.columns.length ? data.value.columns : [{}]),
    ];
    const xAxisDesc = columnsDesc.reduce(
        (
            acc: {
                items: any[];
                totalWidth: number;
            },
            _: any,
            i: number,
        ) => {
            acc.items[i] = {
                start: acc.totalWidth,
                width: colStyles.value[i] || DEFAULT_COLUMN_WIDTH.value,
            };
            acc.totalWidth = acc.totalWidth + (colStyles.value[i] || DEFAULT_COLUMN_WIDTH.value);
            return acc;
        },
        { items: [], totalWidth: 0 },
    );

    const rowsDesc = [
        ...props.propertiesRows,
        ...(data.value.rows.length ? data.value.rows : [{}]),
    ];
    const yAxisDesc = rowsDesc.reduce(
        (
            acc: {
                items: any[];
                totalWidth: number;
            },
            _: any,
            i: number,
        ) => {
            acc.items[i] = {
                start: acc.totalWidth,
                width: rowsStyles.value[i] || DEFAULT_ROW_HEIGHT.value,
            };
            acc.totalWidth = acc.totalWidth + (rowsStyles.value[i] || DEFAULT_ROW_HEIGHT.value);
            return acc;
        },
        { items: [], totalWidth: 0 },
    );

    return {
        xAxis: xAxisDesc,
        yAxis: yAxisDesc,
    };
});
</script>

<template>
    <template v-if="data">
        <div class="pivotTable_container" @mousemove="onResize" @mouseup="onStopResize" @mouseleave="onStopResize"
            @contextmenu.stop.prevent="">
            <ColumnsArea :columnsStyles="colStyles" :columnsOffset="columnsOffset"
                :columns="[...propertiesCols, ...data.columns]" :totalContentSize="totalContentSize"
                :leftPadding="rowsWidth" :columns-expanded-members="props.columnsExpandedMembers"
                :headerBackgroundColor="props.headerBackgroundColor"
                :headerTextColor="props.headerTextColor"
                :borderColor="props.borderColor"
                :defaultColumnWidth="props.defaultColumnWidth"
                :defaultRowHeight="props.defaultRowHeight"
                :fontSize="props.fontSize"
                :headerFontWeight="props.headerFontWeight"
                :levelStyles="props.columnLevelStyles"></ColumnsArea>
            <div class="flex flex-row overflow-hidden vertical-scroll">
                <RowsArea ref="rowsContainer" :rows="[...propertiesRows, ...data.rows]" :rowsStyles="rowsStyles"
                    :totalContentSize="totalContentSize" :rows-expanded-members="props.rowsExpandedMembers"
                    :headerBackgroundColor="props.headerBackgroundColor"
                    :headerTextColor="props.headerTextColor"
                    :borderColor="props.borderColor"
                    :defaultColumnWidth="props.defaultColumnWidth"
                    :defaultRowHeight="props.defaultRowHeight"
                    :fontSize="props.fontSize"
                    :headerFontWeight="props.headerFontWeight"
                    :levelStyles="props.rowLevelStyles"></RowsArea>
                <CellsArea :rowsStyles="rowsStyles" :colsStyles="colStyles" :totalContentSize="totalContentSize"
                    :cells="data.cells" @drillthrough="drillthrough"
                    :cellBackgroundColor="props.cellBackgroundColor"
                    :cellTextColor="props.cellTextColor"
                    :borderColor="props.borderColor"
                    :defaultColumnWidth="props.defaultColumnWidth"
                    :defaultRowHeight="props.defaultRowHeight"
                    :fontSize="props.fontSize"
                    :cellTextAlign="props.cellTextAlign"
                    :conditionalFormats="props.conditionalFormats"></CellsArea>
            </div>
        </div>
    </template>
</template>

<style scoped>
.pivotTable_container {
    padding: v-bind(DEFAULT_ROW_HEIGHT_CSS);
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .bar {
        position: absolute;
        margin-top: -29px;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: flex-end;
    }

    .placeholder {
        height: 8px;
    }
}

.pivotTable {
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.vertical-scroll {
    height: 100%;
}
</style>
