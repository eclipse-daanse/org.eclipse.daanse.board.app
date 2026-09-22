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
import { toRefs, watch, onMounted, computed, shallowRef } from "vue";
import { useVariableRepository, useDatasourceRepository } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { PivotTable as PivotTableComponent } from 'org.eclipse.daanse.board.app.ui.vue.common.xmla';
import { PivotTable } from "./gen/PivotTable";
import { identifiers, container as coreContainer } from 'org.eclipse.daanse.board.app.lib.core';
import type { TinyEmitter } from 'tiny-emitter';

const props = defineProps<{ datasourceId: string, id?: string }>();
const { datasourceId, id: widgetId } = toRefs(props);

const eventBus = coreContainer.get<TinyEmitter>(identifiers.TINY_EMITTER);

// Publishes widget:PivotTableWidget:<name> on the board's event bus
const emitWidgetEvent = (name: string, details: Record<string, unknown> = {}) => {
    if (!widgetId?.value) return;
    const type = `widget:PivotTableWidget:${name}`;
    eventBus.emit(type, {
        type,
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), ...details },
    });
};

const config = defineModel<PivotTable>('configv', { required: true });
const { wrapParameters } = useVariableRepository();

const defaultConfig = new PivotTable()

onMounted(() => {
    if (config.value) {
        Object.assign(config.value, { ...defaultConfig, ...config.value });
    }
});

type StyleKey = 'headerBackgroundColor' | 'headerTextColor' | 'cellBackgroundColor' | 'cellTextColor' | 'borderColor'
    | 'defaultColumnWidth' | 'defaultRowHeight' | 'fontSize' | 'headerFontWeight';

const configValue = (key: StyleKey) =>
    computed(() => (config.value?.[key] as any)?.value ?? defaultConfig[key].value);

// Colours of saved configs are either a VariableWrapper or a plain string
const plain = (value: any) => value?.value ?? value;

// wrapParameters resolves {variables} in strings. The level styles and
// conditional formats go through it as one JSON string, so variables work
// inside their colours as well
const wrappedConfig = wrapParameters({
    headerBackgroundColor: configValue('headerBackgroundColor'),
    headerTextColor: configValue('headerTextColor'),
    cellBackgroundColor: configValue('cellBackgroundColor'),
    cellTextColor: configValue('cellTextColor'),
    borderColor: configValue('borderColor'),
    defaultColumnWidth: configValue('defaultColumnWidth'),
    defaultRowHeight: configValue('defaultRowHeight'),
    fontSize: configValue('fontSize'),
    headerFontWeight: configValue('headerFontWeight'),
    jsonArrays: computed(() => JSON.stringify({
        rowLevelStyles: config.value?.rowLevelStyles?.map((s: any) => ({
            ...s,
            backgroundColor: plain(s.backgroundColor),
            textColor: plain(s.textColor),
        })),
        columnLevelStyles: config.value?.columnLevelStyles?.map((s: any) => ({
            ...s,
            backgroundColor: plain(s.backgroundColor),
            textColor: plain(s.textColor),
        })),
        conditionalFormats: config.value?.conditionalFormats?.map((s: any) => ({
            ...s,
            id: s.id ?? '',
            priority: s.priority ?? 0,
            backgroundColor: plain(s.backgroundColor),
            textColor: plain(s.textColor),
            minColor: plain(s.minColor),
            maxColor: plain(s.maxColor),
        })),
    })),
});

const nestedStyles = computed(() => {
    let parsed: any = {};
    try {
        parsed = JSON.parse(wrappedConfig.jsonArrays.value || "{}");
    } catch (e) {
        // fall back to the defaults below
    }
    return {
        rowLevelStyles: parsed.rowLevelStyles || defaultConfig.rowLevelStyles,
        columnLevelStyles: parsed.columnLevelStyles || defaultConfig.columnLevelStyles,
        conditionalFormats: parsed.conditionalFormats || defaultConfig.conditionalFormats,
    };
});

// wrapParameters hands back strings; sizes and weights are numbers for the table
const numeric = (key: StyleKey) => {
    const value = Number(wrappedConfig[key].value);
    return Number.isFinite(value) ? value : Number(defaultConfig[key].value);
};

const stylingProps = computed(() => ({
    headerBackgroundColor: wrappedConfig.headerBackgroundColor.value,
    headerTextColor: wrappedConfig.headerTextColor.value,
    cellBackgroundColor: wrappedConfig.cellBackgroundColor.value,
    cellTextColor: wrappedConfig.cellTextColor.value,
    borderColor: wrappedConfig.borderColor.value,
    defaultColumnWidth: numeric('defaultColumnWidth'),
    defaultRowHeight: numeric('defaultRowHeight'),
    fontSize: numeric('fontSize'),
    headerFontWeight: numeric('headerFontWeight'),
    cellTextAlign: (config.value?.cellTextAlign || defaultConfig.cellTextAlign) as "left" | "center" | "right",
    ...nestedStyles.value,
}));

const dataProps = computed(() => ({
    showRowsProperties: config.value?.showRowsProperties || defaultConfig.showRowsProperties,
    showColumnsProperties: config.value?.showColumnsProperties || defaultConfig.showColumnsProperties,
    showSingleMeasureHeader: config.value?.showSingleMeasureHeader ?? defaultConfig.showSingleMeasureHeader,
}))

// Replaced as a whole on every load, never mutated: no deep reactivity over
// what can be hundreds of thousands of cells
const data = shallowRef(null as any);
const { callEvent, update, getDatasourceInstance } = useDatasourceRepository(datasourceId, "PivotTable", data, [], dataProps);

const cubeName = computed(() => {
    const ds = getDatasourceInstance();
    return ds?.getCubeName ? ds.getCubeName() : '';
});

const onCellEdit = (e: any) => {
    callEvent('cellUpdate', { query: e.query });
    emitWidgetEvent('cell_edited', { cell: e.cell, value: e.value, query: e.query });
};

const onEditModeChanged = async (isEditing: boolean) => {
    if (isEditing) {
        await callEvent('beginTransaction', undefined);
    }
};

const onCommitTransaction = async () => {
    await callEvent('commitTransaction', undefined);
};

const onRollbackTransaction = async () => {
    await callEvent('rollbackTransaction', undefined);
};

watch(datasourceId, (newVal, oldVal) => {
    update(newVal, oldVal);
})

watch(() => dataProps.value, () => {
    update();
});

const memberName = (e: any) => e.value?.UName || e.value?.UNAME;

const onExpand = (e: any) => {
    callEvent('expand', e, true);
    if (e.area === 'rows') emitWidgetEvent('row_expanded', { uniqueName: memberName(e) });
    else if (e.area === 'columns') emitWidgetEvent('column_expanded', { uniqueName: memberName(e) });
};

const onCollapse = (e: any) => {
    callEvent('collapse', e, true);
    if (e.area === 'rows') emitWidgetEvent('row_collapsed', { uniqueName: memberName(e) });
    else if (e.area === 'columns') emitWidgetEvent('column_collapsed', { uniqueName: memberName(e) });
};
</script>

<template>
  <div class="text-container" @click="emitWidgetEvent('click')" @contextmenu.prevent="emitWidgetEvent('right_click')">
    <div class="component">
      <PivotTableComponent v-if="data" :model-value="data" @onExpand="onExpand" @onCollapse="onCollapse"
        @row_clicked="(uName: string) => emitWidgetEvent('row_clicked', { uniqueName: uName })"
        @row_right_clicked="(uName: string) => emitWidgetEvent('row_right_clicked', { uniqueName: uName })"
        @column_clicked="(uName: string) => emitWidgetEvent('column_clicked', { uniqueName: uName })"
        @column_right_clicked="(uName: string) => emitWidgetEvent('column_right_clicked', { uniqueName: uName })"
        @cell_clicked="(ids: { rowId: string, colId: string }) => emitWidgetEvent('cell_clicked', ids)"
        @cell_right_clicked="(ids: { rowId: string, colId: string }) => emitWidgetEvent('cell_right_clicked', ids)"
        @onCellEdit="onCellEdit"
        @onEditModeChanged="onEditModeChanged"
        @onCommitTransaction="onCommitTransaction"
        @onRollbackTransaction="onRollbackTransaction"
        :cubeName="cubeName"
        :rowsExpandedMembers="data.tableState?.rowsExpandedMembers"
        :columnsExpandedMembers="data.tableState?.columnsExpandedMembers"
        :propertiesRows="data.propertiesRows"
        :propertiesCols="data.propertiesCols"
        v-bind="stylingProps" />
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
  padding: 16px;
}
</style>
