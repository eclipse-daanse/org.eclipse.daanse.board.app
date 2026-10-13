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
import { computed, nextTick, onBeforeUnmount, provide, ref, shallowRef, toRaw, type PropType } from "vue";
import { TinyEmitter } from "tiny-emitter";
import { useElementSize } from "@vueuse/core";
import { DButton, DIcon } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { useTranslation } from "org.eclipse.daanse.board.app.ui.vue.composables";
import RowsArea from "./Areas/RowsArea.vue";
import ColumnsArea from "./Areas/ColumnsArea.vue";
import CellsArea from "./Areas/CellsArea.vue";
import DrillthroughModal from "./DrillthroughModal.vue";
import PivotContextMenu from "./PivotContextMenu.vue";
import {
    type MenuAction,
    type MenuTarget,
    type PivotActions,
    type PivotBusEvents,
    PIVOT_ACTIONS,
    PIVOT_BUS,
    typedBus,
} from "./context";
import { buildAxis, entryKey, sizeAt, visibleRange } from "./logic/axis";
import { cellIds, isCellEditable } from "./logic/cell";
import { compileConditionalFormats } from "./logic/conditionalFormat";
import { analyzeAxis, levelStyleMap } from "./logic/hierarchy";
import type {
    Area,
    AxisEntry,
    ConditionalFormat,
    LevelStyle,
    PivotData,
    PivotMember,
    PivotProperty,
} from "./logic/types";

const data = defineModel<PivotData>({ required: true });

const props = defineProps({
    propertiesRows: {
        required: false,
        type: Array as PropType<PivotProperty[]>,
        default: () => [],
    },
    propertiesCols: {
        required: false,
        type: Array as PropType<PivotProperty[]>,
        default: () => [],
    },
    rowsExpandedMembers: {
        required: false,
        type: Array as PropType<PivotMember[]>,
        default: () => [],
    },
    columnsExpandedMembers: {
        required: false,
        type: Array as PropType<PivotMember[]>,
        default: () => [],
    },
    headerBackgroundColor: {
        required: false,
        type: String,
        default: 'var(--color-raised)',
    },
    headerTextColor: {
        required: false,
        type: String,
        default: 'var(--color-fg)',
    },
    cellBackgroundColor: {
        required: false,
        type: String,
        default: 'var(--color-bg)',
    },
    cellTextColor: {
        required: false,
        type: String,
        default: 'var(--color-fg)',
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
        type: String as PropType<'left' | 'center' | 'right'>,
        default: 'left',
    },
    rowLevelStyles: {
        required: false,
        type: Array as PropType<LevelStyle[]>,
        default: () => [],
    },
    columnLevelStyles: {
        required: false,
        type: Array as PropType<LevelStyle[]>,
        default: () => [],
    },
    conditionalFormats: {
        required: false,
        type: Array as PropType<ConditionalFormat[]>,
        default: () => [],
    },
    cubeName: {
        required: false,
        type: String,
        default: '',
    },
});

const emit = defineEmits(["onExpand", "onCollapse", "onDrilldown", "onDrillup", "row_clicked", "row_right_clicked", "column_clicked", "column_right_clicked", "cell_clicked", "cell_right_clicked", "onCellEdit", "onEditModeChanged", "onCommitTransaction", "onRollbackTransaction"]);

// Everything below reads the plain data: the table can hold hundreds of
// thousands of cells and must not go through reactive proxies
const raw = computed(() => toRaw(data.value));
const propertiesRows = computed(() => toRaw(props.propertiesRows));
const propertiesCols = computed(() => toRaw(props.propertiesCols));

const rowEntries = computed<AxisEntry[]>(() => [...propertiesRows.value, ...(raw.value.rows ?? [])]);
const colEntries = computed<AxisEntry[]>(() => [...propertiesCols.value, ...(raw.value.columns ?? [])]);
const rowKeys = computed(() => rowEntries.value.map(entryKey));
const colKeys = computed(() => colEntries.value.map(entryKey));

const rowHierarchies = computed(() => analyzeAxis(rowEntries.value));
const colHierarchies = computed(() => analyzeAxis(colEntries.value));

// Sizes the user dragged, by header identity so they follow the header when
// expand/collapse shifts positions
const rowHeights = new Map<string, number>();
const colWidths = new Map<string, number>();
const sizesVersion = ref(0);

// An axis without tuples still gets one row/column for the cells to sit in
const rowAxis = computed(() => {
    sizesVersion.value;
    const count = propertiesRows.value.length + (raw.value.rows?.length || 1);
    return buildAxis(count, j => rowHeights.get(rowKeys.value[j] ?? `#${j}`) ?? props.defaultRowHeight);
});
const colAxis = computed(() => {
    sizesVersion.value;
    const count = propertiesCols.value.length + (raw.value.columns?.length || 1);
    return buildAxis(count, i => colWidths.get(colKeys.value[i] ?? `#${i}`) ?? props.defaultColumnWidth);
});

// Row headers grow with the levels shown per hierarchy, column headers stack one row per level
const rowMemberWidths = computed(() => rowHierarchies.value.levelCounts.map(levels => 50 * (levels - 1) + 150));
const rowHeaderWidth = computed(() => {
    const members = rowMemberWidths.value.reduce((a, b) => a + b, 0);
    const width = Math.max(members, propertiesRows.value.length ? 150 : 0);
    return width ? width + 10 : 0;
});
const colMemberHeights = computed(() => colHierarchies.value.levelCounts.map(levels => levels * props.defaultRowHeight));
const colHeaderHeight = computed(() => {
    const members = colMemberHeights.value.reduce((a, b) => a + b, 0);
    return members || (propertiesCols.value.length ? props.defaultRowHeight : 0);
});

const rowsExpanded = computed(() => new Set((props.rowsExpandedMembers ?? []).map(m => m.UName)));
const colsExpanded = computed(() => new Set((props.columnsExpandedMembers ?? []).map(m => m.UName)));
const rowLevelStyles = computed(() => levelStyleMap(props.rowLevelStyles));
const colLevelStyles = computed(() => levelStyleMap(props.columnLevelStyles));

const format = computed(() => compileConditionalFormats(toRaw(props.conditionalFormats), raw.value.cells ?? []));
const cellDefaults = computed(() => ({
    textColor: props.cellTextColor,
    backgroundColor: props.cellBackgroundColor,
    fontSize: props.fontSize,
    textAlign: props.cellTextAlign,
}));

// Windowing: only what intersects the scroller, plus a margin, is rendered
const OVERSCAN = 240;
const scroller = ref<HTMLElement | null>(null);
const { width: viewportWidth, height: viewportHeight } = useElementSize(scroller);
const scrollLeft = ref(0);
const scrollTop = ref(0);

const rowRange = computed(() =>
    visibleRange(rowAxis.value, scrollTop.value, viewportHeight.value - colHeaderHeight.value, OVERSCAN));
const colRange = computed(() =>
    visibleRange(colAxis.value, scrollLeft.value, viewportWidth.value - rowHeaderWidth.value, OVERSCAN));

const onScroll = () => {
    if (!scroller.value) return;
    scrollLeft.value = scroller.value.scrollLeft;
    scrollTop.value = scroller.value.scrollTop;
    closeMenu();
};

// Event bus: areas report clicks, PivotTable re-emits them with UNames
const emitter = new TinyEmitter();
provide(PIVOT_BUS, typedBus(emitter));

const toIds = ({ i, j }: { i: number; j: number }) =>
    cellIds(raw.value, i, j, propertiesRows.value.length, propertiesCols.value.length);

const forwarded: { [K in keyof PivotBusEvents]: (payload: PivotBusEvents[K]) => void } = {
    row_clicked: uName => emit("row_clicked", uName),
    row_right_clicked: uName => emit("row_right_clicked", uName),
    column_clicked: uName => emit("column_clicked", uName),
    column_right_clicked: uName => emit("column_right_clicked", uName),
    cell_clicked: position => emit("cell_clicked", toIds(position)),
    cell_right_clicked: position => emit("cell_right_clicked", toIds(position)),
};
for (const [event, handler] of Object.entries(forwarded)) emitter.on(event, handler);

// Resizing follows the pointer until the button is released anywhere in the window
const MIN_SIZE = 10;
let stopResizing: (() => void) | null = null;

const startResize = (area: Area, index: number, event: MouseEvent) => {
    if (event.button !== 0) return;
    event.preventDefault();
    stopResizing?.();
    const sizes = area === "rows" ? rowHeights : colWidths;
    const key = (area === "rows" ? rowKeys : colKeys).value[index] ?? `#${index}`;
    const startSize = sizeAt(area === "rows" ? rowAxis.value : colAxis.value, index);
    const startPosition = area === "rows" ? event.clientY : event.clientX;

    const onMove = (e: MouseEvent) => {
        const position = area === "rows" ? e.clientY : e.clientX;
        sizes.set(key, Math.max(MIN_SIZE, startSize + position - startPosition));
        sizesVersion.value++;
    };
    stopResizing = () => {
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseup", stopResizing!);
        stopResizing = null;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", stopResizing);
};

// Context menu
const menu = shallowRef<{ target: MenuTarget; x: number; y: number } | null>(null);
const openMenu = (event: MouseEvent, target: MenuTarget) => {
    menu.value = { target, x: event.clientX, y: event.clientY };
};
const closeMenu = () => {
    if (menu.value) menu.value = null;
};

const drillthroughModal = ref<InstanceType<typeof DrillthroughModal> | null>(null);

const onMenuAction = (action: MenuAction, target: MenuTarget) => {
    if (target.kind === "cell") {
        if (action === "drillthrough") drillthroughModal.value?.open(target.cell, data.value);
        // cell properties have no dialog yet
        return;
    }
    const payload = { value: target.member, area: target.area };
    if (action === "drilldown") emit("onDrilldown", payload);
    if (action === "drillup") emit("onDrillup", payload);
    // member properties have no dialog yet
};

// Moves keyboard focus to an editable cell, scrolling it into view first
const focusCell = async (col: number, row: number) => {
    const el = scroller.value;
    if (!el) return;
    const margin = 10;
    const x0 = colAxis.value.starts[col];
    const x1 = colAxis.value.starts[col + 1];
    const y0 = rowAxis.value.starts[row];
    const y1 = rowAxis.value.starts[row + 1];
    const visibleWidth = el.clientWidth - rowHeaderWidth.value;
    const visibleHeight = el.clientHeight - colHeaderHeight.value;

    let left = el.scrollLeft;
    let top = el.scrollTop;
    if (x0 < left) left = x0 - margin;
    else if (x1 > left + visibleWidth) left = x1 - visibleWidth + margin;
    if (y0 < top) top = y0 - margin;
    else if (y1 > top + visibleHeight) top = y1 - visibleHeight + margin;

    if (left !== el.scrollLeft || top !== el.scrollTop) {
        el.scrollLeft = left;
        el.scrollTop = top;
        // render the target right away instead of waiting for the scroll event
        scrollLeft.value = el.scrollLeft;
        scrollTop.value = el.scrollTop;
        await nextTick();
    }
    const input = el.querySelector<HTMLInputElement>(`input[data-col="${col}"][data-row="${row}"]`);
    input?.focus();
    input?.select();
};

const actions: PivotActions = {
    expand: (value, area) => emit("onExpand", { value, area }),
    collapse: (value, area) => emit("onCollapse", { value, area }),
    startResize,
    openMenu,
    focusCell,
};
provide(PIVOT_ACTIONS, actions);

onBeforeUnmount(() => {
    for (const [event, handler] of Object.entries(forwarded)) emitter.off(event, handler);
    stopResizing?.();
});

// Write-back
const { t } = useTranslation("xmla");
// Offered only where the server says a cell can be written to
const hasEditableCells = computed(() =>
    (raw.value.cells ?? []).some((row: any) => (Array.isArray(row) ? row : [row]).some((cell: any) => isCellEditable(cell))));
const isEditMode = ref(false);
const toggleEditMode = () => {
    isEditMode.value = !isEditMode.value;
    emit("onEditModeChanged", isEditMode.value);
};

const commitTransaction = () => {
    emit("onCommitTransaction");
    isEditMode.value = false;
};

const rollbackTransaction = () => {
    emit("onRollbackTransaction");
    isEditMode.value = false;
};

const onCellEdit = ({ cell, value }: { cell: any; value: any }) => {
    const rowOffset = props.propertiesRows?.length || 0;
    const colOffset = props.propertiesCols?.length || 0;
    const rowTuple = raw.value.rows?.[cell.j - rowOffset] || [];
    const colTuple = raw.value.columns?.[cell.i - colOffset] || [];
    const uNames = [...rowTuple, ...colTuple].map(m => m.UName).filter(Boolean);
    uNames.sort();
    const cube = props.cubeName || 'AccountingWb';
    const query = `UPDATE CUBE [${cube}] SET  (${uNames.join(', ')})  = ${value} USE_EQUAL_ALLOCATION`;
    emit("onCellEdit", { cell, value, query });
};

const cssVars = computed(() => ({
    "--pt-row-height": `${props.defaultRowHeight}px`,
    "--pt-border-color": props.borderColor,
    "--pt-header-background-color": props.headerBackgroundColor,
    "--pt-header-text-color": props.headerTextColor,
    "--pt-header-font-weight": String(props.headerFontWeight),
    "--pt-font-size": `${props.fontSize}px`,
    "--pt-corner-background-color": props.cellBackgroundColor,
}));
</script>

<template>
    <template v-if="data">
        <div class="pivotTable_container" :style="cssVars" @contextmenu.stop.prevent="">
            <div v-if="hasEditableCells || isEditMode" class="bar">
                <template v-if="isEditMode">
                    <DButton size="sm" intent="primary" :aria-label="t('PivotTable.commit')" :title="t('PivotTable.commit')"
                        @click="commitTransaction">
                        <DIcon name="check" size="sm" decorative />
                    </DButton>
                    <DButton size="sm" :aria-label="t('PivotTable.rollback')" :title="t('PivotTable.rollback')"
                        @click="rollbackTransaction">
                        <DIcon name="undo" size="sm" decorative />
                    </DButton>
                </template>
                <DButton class="edit-mode-btn" size="sm" :intent="isEditMode ? 'danger' : 'default'" :aria-pressed="isEditMode"
                    :title="isEditMode ? t('PivotTable.leaveEditMode') : t('PivotTable.editMode')" @click="toggleEditMode">
                    <DIcon :name="isEditMode ? 'close' : 'edit'" size="sm" decorative />
                    {{ isEditMode ? t('PivotTable.leaveEditMode') : t('PivotTable.editMode') }}
                </DButton>
            </div>
            <div ref="scroller" class="pivotTable_scroller" @scroll.passive="onScroll">
                <div class="pivotTable_head" :style="{ height: `${colHeaderHeight}px` }">
                    <div class="pivotTable_corner" :style="{ width: `${rowHeaderWidth}px` }"></div>
                    <ColumnsArea :entries="colEntries" :axis="colAxis" :range="colRange" :hierarchies="colHierarchies"
                        :memberHeights="colMemberHeights" :height="colHeaderHeight" :expanded="colsExpanded"
                        :levelStyles="colLevelStyles" />
                </div>
                <div class="pivotTable_body">
                    <RowsArea :entries="rowEntries" :axis="rowAxis" :range="rowRange" :hierarchies="rowHierarchies"
                        :memberWidths="rowMemberWidths" :width="rowHeaderWidth" :expanded="rowsExpanded"
                        :levelStyles="rowLevelStyles" />
                    <CellsArea :cells="raw.cells ?? []" :rowAxis="rowAxis" :colAxis="colAxis" :rowRange="rowRange"
                        :colRange="colRange" :defaults="cellDefaults" :format="format" :isEditMode="isEditMode"
                        @cell-edit="onCellEdit" />
                </div>
            </div>

            <PivotContextMenu :target="menu?.target ?? null" :x="menu?.x ?? 0" :y="menu?.y ?? 0" @close="closeMenu"
                @action="onMenuAction" />

            <DrillthroughModal
                ref="drillthroughModal"
                :cubeName="props.cubeName"
                :propertiesRows="props.propertiesRows"
                :propertiesCols="props.propertiesCols"
            />
        </div>
    </template>
</template>

<style scoped>
.pivotTable_container {
    padding: var(--pt-row-height);
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    font-size: var(--pt-font-size);

    .bar {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        gap: 8px;
        padding-bottom: 8px;
    }
}

/* One scroll container: the header row sticks to the top, the row headers to
  the left, the corner to both */
.pivotTable_scroller {
    flex: 1;
    min-height: 0;
    overflow: auto;
    position: relative;
}

.pivotTable_head {
    position: sticky;
    top: 0;
    z-index: 2;
    display: flex;
    width: max-content;
    min-width: 100%;
}

.pivotTable_corner {
    position: sticky;
    left: 0;
    z-index: 3;
    flex-shrink: 0;
    background-color: var(--pt-corner-background-color);
}

.pivotTable_body {
    display: flex;
    width: max-content;
}
</style>
