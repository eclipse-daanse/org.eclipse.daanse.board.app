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

interface IPivotTable {
    rows: any[][];
    columns: any[][];
    cells: any[][];
    tableState: any;
}

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
    cubeName: {
        required: false,
        type: String,
        default: '',
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

const isEditMode = ref(false);
const toggleEditMode = () => {
    isEditMode.value = !isEditMode.value;
    emit("onEditModeChanged", isEditMode.value);
};

const commitTransaction = () => {
    emit("onCommitTransaction");
    isEditMode.value = false;
    // emit("onEditModeChanged", false);
};

const rollbackTransaction = () => {
    emit("onRollbackTransaction");
    isEditMode.value = false;
    // emit("onEditModeChanged", false);
};

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

const emit = defineEmits(["onExpand", "onCollapse", "onDrilldown", "onDrillup", "row_clicked", "row_right_clicked", "column_clicked", "column_right_clicked", "cell_clicked", "cell_right_clicked", "onCellEdit", "onEditModeChanged", "onCommitTransaction", "onRollbackTransaction"]);

const onCellEdit = ({ cell, value }: { cell: any; value: any }) => {
    const rowOffset = props.propertiesRows?.length || 0;
    const colOffset = props.propertiesCols?.length || 0;
    const rowTuple = data.value.rows?.[cell.j - rowOffset] || [];
    const colTuple = data.value.columns?.[cell.i - colOffset] || [];
    const uNames = [...rowTuple, ...colTuple].map(m => m.UName).filter(Boolean);
    uNames.sort();
    const cube = props.cubeName || 'AccountingWb';
    const query = `UPDATE CUBE [${cube}] SET  (${uNames.join(', ')})  = ${value} USE_EQUAL_ALLOCATION`;
    console.log(query);
    emit("onCellEdit", { cell, value, query });
};

eventBus.on("row_clicked", (uName: string) => emit("row_clicked", uName));
eventBus.on("row_right_clicked", (uName: string) => emit("row_right_clicked", uName));
eventBus.on("column_clicked", (uName: string) => emit("column_clicked", uName));
eventBus.on("column_right_clicked", (uName: string) => emit("column_right_clicked", uName));
eventBus.on("cell_clicked", ({ i, j }: { i: number; j: number }) => {
    const rowOffset = props.propertiesRows?.length || 0;
    const colOffset = props.propertiesCols?.length || 0;
    let rowId = String(j);
    let colId = String(i);
    const rowIdx = j - rowOffset;
    const colIdx = i - colOffset;
    if (data.value && Array.isArray(data.value.rows) && data.value.rows[rowIdx]) {
        rowId = data.value.rows[rowIdx][data.value.rows[rowIdx].length - 1]?.UName || rowId;
    }
    if (data.value && Array.isArray(data.value.columns) && data.value.columns[colIdx]) {
        colId = data.value.columns[colIdx][data.value.columns[colIdx].length - 1]?.UName || colId;
    }
    emit("cell_clicked", { rowId, colId });
});
eventBus.on("cell_right_clicked", ({ i, j }: { i: number; j: number }) => {
    const rowOffset = props.propertiesRows?.length || 0;
    const colOffset = props.propertiesCols?.length || 0;
    let rowId = String(j);
    let colId = String(i);
    const rowIdx = j - rowOffset;
    const colIdx = i - colOffset;
    if (data.value && Array.isArray(data.value.rows) && data.value.rows[rowIdx]) {
        rowId = data.value.rows[rowIdx][data.value.rows[rowIdx].length - 1]?.UName || rowId;
    }
    if (data.value && Array.isArray(data.value.columns) && data.value.columns[colIdx]) {
        colId = data.value.columns[colIdx][data.value.columns[colIdx].length - 1]?.UName || colId;
    }
    emit("cell_right_clicked", { rowId, colId });
});

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
    console.log('col styles', colStyles);
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
            const width = Number(colStyles.value[i]) || Number(DEFAULT_COLUMN_WIDTH.value);
            acc.items[i] = {
                start: acc.totalWidth,
                width: width,
            };
            acc.totalWidth = acc.totalWidth + width;
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
            const height = Number(rowsStyles.value[i]) || Number(DEFAULT_ROW_HEIGHT.value);
            acc.items[i] = {
                start: acc.totalWidth,
                width: height,
            };
            acc.totalWidth = acc.totalWidth + height;
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
            <div class="bar">
                <template v-if="isEditMode">
                    <va-button size="small" color="success" class="mr-2" @click="commitTransaction" icon="check"></va-button>
                    <va-button size="small" color="warning" class="mr-2" @click="rollbackTransaction" icon="undo"></va-button>
                </template>
                <va-button size="small" :class="['edit-mode-btn', { active: isEditMode }]" @click="toggleEditMode" :color="isEditMode ? 'danger' : ''" :icon="isEditMode ? 'close' : 'edit'"></va-button>
            </div>
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
                    @cell-edit="onCellEdit"
                    :isEditMode="isEditMode"
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
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        gap: 8px;
        padding-bottom: 16px;
    }

    .edit-mode-btn {
        background: linear-gradient(135deg, hsl(230, 80%, 60%) 0%, hsl(280, 80%, 50%) 100%);
        color: #ffffff;
        border: none;
        padding: 5px 12px;
        font-size: 12px;
        font-weight: 600;
        border-radius: 4px;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        display: inline-flex;
        align-items: center;
        gap: 6px;
        line-height: 1;
        outline: none;
    }

    .edit-mode-btn:hover {
        background: linear-gradient(135deg, hsl(230, 85%, 65%) 0%, hsl(280, 85%, 55%) 100%);
        transform: translateY(-1px);
        box-shadow: 0 7px 14px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.08);
    }

    .edit-mode-btn:active {
        transform: translateY(1px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
    }

    .edit-mode-btn.active {
        background: linear-gradient(135deg, hsl(340, 80%, 60%) 0%, hsl(10, 80%, 60%) 100%);
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
