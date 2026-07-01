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
import { toRefs, ref, watch, onMounted, computed, markRaw } from "vue";
import { useVariableRepository, useDatasourceRepository, VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { PivotTable as PivotTableComponent } from 'org.eclipse.daanse.board.app.ui.vue.common.xmla';
import { PivotTable } from "./gen/PivotTable";
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { EventActionsRegistry, EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.events'
import { useRoute } from 'vue-router'

const props = defineProps<{ datasourceId: string, id?: string }>();
const { datasourceId, id: widgetId } = toRefs(props);

import { identifiers, container as coreContainer } from 'org.eclipse.daanse.board.app.lib.core';
import type { TinyEmitter } from 'tiny-emitter';
const eventBus = coreContainer.get<TinyEmitter>(identifiers.TINY_EMITTER);

const emitClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:PivotTableWidget:click', {
        type: 'widget:PivotTableWidget:click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

const emitRightClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:PivotTableWidget:right_click', {
        type: 'widget:PivotTableWidget:right_click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

const emitRowClick = (uName: string) => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:PivotTableWidget:row_clicked', {
        type: 'widget:PivotTableWidget:row_clicked',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), uniqueName: uName }
    });
};

const emitRowRightClick = (uName: string) => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:PivotTableWidget:row_right_clicked', {
        type: 'widget:PivotTableWidget:row_right_clicked',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), uniqueName: uName }
    });
};

const emitColumnClick = (uName: string) => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:PivotTableWidget:column_clicked', {
        type: 'widget:PivotTableWidget:column_clicked',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), uniqueName: uName }
    });
};

const emitColumnRightClick = (uName: string) => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:PivotTableWidget:column_right_clicked', {
        type: 'widget:PivotTableWidget:column_right_clicked',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), uniqueName: uName }
    });
};

const emitCellClick = (payloadObj: { rowId: string, colId: string }) => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:PivotTableWidget:cell_clicked', {
        type: 'widget:PivotTableWidget:cell_clicked',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), rowId: payloadObj.rowId, colId: payloadObj.colId }
    });
};

const emitCellRightClick = (payloadObj: { rowId: string, colId: string }) => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:PivotTableWidget:cell_right_clicked', {
        type: 'widget:PivotTableWidget:cell_right_clicked',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), rowId: payloadObj.rowId, colId: payloadObj.colId }
    });
};

const emitRowExpanded = (uName: string) => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:PivotTableWidget:row_expanded', {
        type: 'widget:PivotTableWidget:row_expanded',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), uniqueName: uName }
    });
};

const emitRowCollapsed = (uName: string) => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:PivotTableWidget:row_collapsed', {
        type: 'widget:PivotTableWidget:row_collapsed',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), uniqueName: uName }
    });
};

const emitColumnExpanded = (uName: string) => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:PivotTableWidget:column_expanded', {
        type: 'widget:PivotTableWidget:column_expanded',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), uniqueName: uName }
    });
};

const emitColumnCollapsed = (uName: string) => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:PivotTableWidget:column_collapsed', {
        type: 'widget:PivotTableWidget:column_collapsed',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), uniqueName: uName }
    });
};
const config = defineModel<PivotTable>('configv', { required: true });
const { wrapParameters } = useVariableRepository();

const defaultConfig = new PivotTable()

onMounted(() => {
    if (config.value) {
        Object.assign(config.value, { ...defaultConfig, ...config.value });
    }

    // actionsRegistry.registerInstance(widgetId.value, api, 'MapWidget', pageId);
});

const wrappedConfig = wrapParameters({
    headerBackgroundColor: computed(() => (config.value?.headerBackgroundColor as any)?.value ?? defaultConfig.headerBackgroundColor.value),
    headerTextColor: computed(() => (config.value?.headerTextColor as any)?.value ?? defaultConfig.headerTextColor.value),
    cellBackgroundColor: computed(() => (config.value?.cellBackgroundColor as any)?.value ?? defaultConfig.cellBackgroundColor.value),
    cellTextColor: computed(() => (config.value?.cellTextColor as any)?.value ?? defaultConfig.cellTextColor.value),
    borderColor: computed(() => (config.value?.borderColor as any)?.value ?? defaultConfig.borderColor.value),
    defaultColumnWidth: computed(() => (config.value?.defaultColumnWidth as any)?.value ?? defaultConfig.defaultColumnWidth.value),
    defaultRowHeight: computed(() => (config.value?.defaultRowHeight as any)?.value ?? defaultConfig.defaultRowHeight.value),
    fontSize: computed(() => (config.value?.fontSize as any)?.value ?? defaultConfig.fontSize.value),
    headerFontWeight: computed(() => (config.value?.headerFontWeight as any)?.value ?? defaultConfig.headerFontWeight.value),
    jsonArrays: computed(() => {
        const payload = {
            rowLevelStyles: config.value?.rowLevelStyles?.map((s:any) => ({
                ...s,
                backgroundColor: (s.backgroundColor as any)?.value ?? s.backgroundColor,
                textColor: (s.textColor as any)?.value ?? s.textColor,
            })),
            columnLevelStyles: config.value?.columnLevelStyles?.map((s:any) => ({
                ...s,
                backgroundColor: (s.backgroundColor as any)?.value ?? s.backgroundColor,
                textColor: (s.textColor as any)?.value ?? s.textColor,
            })),
            conditionalFormats: config.value?.conditionalFormats?.map((s:any) => ({
                ...s,
                id: s.id ?? '',
                priority: s.priority ?? 0,
                backgroundColor: (s.backgroundColor as any)?.value ?? s.backgroundColor,
                textColor: (s.textColor as any)?.value ?? s.textColor,
                minColor: (s.minColor as any)?.value ?? s.minColor,
                maxColor: (s.maxColor as any)?.value ?? s.maxColor,
            })),
        };
        return JSON.stringify(payload);
    })
});

const parsedNestedPivots = computed(() => {
    try {
        const str = wrappedConfig.jsonArrays.value;
        const parsed = JSON.parse(str || "{}");
        return {
            rowLevelStyles: parsed.rowLevelStyles || defaultConfig.rowLevelStyles,
            columnLevelStyles: parsed.columnLevelStyles || defaultConfig.columnLevelStyles,
            conditionalFormats: parsed.conditionalFormats || defaultConfig.conditionalFormats,
        };
    } catch (e) {
        return {
          rowLevelStyles: defaultConfig.rowLevelStyles,
          columnLevelStyles: defaultConfig.columnLevelStyles,
          conditionalFormats: defaultConfig.conditionalFormats,
        };
    }
});

const stylingProps = computed(() => ({
  headerBackgroundColor: wrappedConfig.headerBackgroundColor.value,
  headerTextColor: wrappedConfig.headerTextColor.value,
  cellBackgroundColor: wrappedConfig.cellBackgroundColor.value,
  cellTextColor: wrappedConfig.cellTextColor.value,
  borderColor: wrappedConfig.borderColor.value,
  defaultColumnWidth: wrappedConfig.defaultColumnWidth.value,
  defaultRowHeight: wrappedConfig.defaultRowHeight.value,
  fontSize: wrappedConfig.fontSize.value,
  headerFontWeight: wrappedConfig.headerFontWeight.value,
  cellTextAlign: (config.value?.cellTextAlign || defaultConfig.cellTextAlign) as "left" | "center" | "right" | undefined,
  rowLevelStyles: parsedNestedPivots.value.rowLevelStyles,
  columnLevelStyles: parsedNestedPivots.value.columnLevelStyles,
  conditionalFormats: parsedNestedPivots.value.conditionalFormats as any[],
}));

console.log('stylingProps', stylingProps.value);
console.log('fontSize', wrappedConfig.fontSize);

const dataProps = computed(() => ({
  showRowsProperties: config.value?.showRowsProperties || defaultConfig.showRowsProperties,
  showColumnsProperties: config.value?.showColumnsProperties || defaultConfig.showColumnsProperties,
  showSingleMeasureHeader: config.value?.showSingleMeasureHeader ?? defaultConfig.showSingleMeasureHeader,
}))

const data = ref(null as any);
const { callEvent, update, getDatasourceInstance } = useDatasourceRepository(datasourceId, "PivotTable", data, [], dataProps);

const cubeName = computed(() => {
  const ds = getDatasourceInstance();
  return ds?.getCubeName ? ds.getCubeName() : '';
});

const emitCellEdit = (e: any) => {
    console.log('CELL EDIT FIRED')
    callEvent('cellUpdate', { query: e.query });
    if (!widgetId?.value) return;
    eventBus.emit('widget:PivotTableWidget:cell_edited', {
        type: 'widget:PivotTableWidget:cell_edited',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), cell: e.cell, value: e.value, query: e.query }
    });
};

const onEditModeChanged = async (isEditing: boolean) => {
    console.log('EDIT MODE CHANGED', isEditing);
    if (isEditing) {
        await callEvent('beginTransaction', undefined);
    }
};

const onCommitTransaction = async () => {
    console.log('COMMIT TRANSACTION IN WIDGET');
    await callEvent('commitTransaction', undefined);
};

const onRollbackTransaction = async () => {
    console.log('ROLLBACK TRANSACTION IN WIDGET');
    await callEvent('rollbackTransaction', undefined);
};

watch(datasourceId, (newVal, oldVal) => {
  update(newVal, oldVal);
})

watch(() => dataProps.value, () => {
  update();
});

const onExpand = (e: any) => {
  callEvent('expand', e, true);
  if (e.area === 'rows') {
      emitRowExpanded(e.value?.UName || e.value?.UNAME);
  } else if (e.area === 'columns') {
      emitColumnExpanded(e.value?.UName || e.value?.UNAME);
  }
};

const onCollapse = (e: any) => {
  callEvent('collapse', e, true);
  if (e.area === 'rows') {
      emitRowCollapsed(e.value?.UName || e.value?.UNAME);
  } else if (e.area === 'columns') {
      emitColumnCollapsed(e.value?.UName || e.value?.UNAME);
  }
};

const tableKey = computed(() => {
  if (!data.value) return 'empty';
  const rowsLen = data.value.rows?.length ?? 0;
  const colsLen = data.value.columns?.length ?? 0;
  const rowsExpanded = data.value.tableState?.rowsExpandedMembers?.join(',') ?? '';
  const colsExpanded = data.value.tableState?.columnsExpandedMembers?.join(',') ?? '';
  return `${datasourceId.value}_${rowsLen}_${colsLen}_${rowsExpanded}_${colsExpanded}`;
});
</script>

<template>
  <div class="text-container" @click="emitClick" @contextmenu.prevent="emitRightClick">
    <div class="component">
      <PivotTableComponent v-if="data" :model-value="data" @onExpand="onExpand" @onCollapse="onCollapse"
        @row_clicked="emitRowClick" @row_right_clicked="emitRowRightClick"
        @column_clicked="emitColumnClick" @column_right_clicked="emitColumnRightClick"
        @cell_clicked="emitCellClick" @cell_right_clicked="emitCellRightClick"
        @onCellEdit="emitCellEdit"
        @onEditModeChanged="onEditModeChanged"
        @onCommitTransaction="onCommitTransaction"
        @onRollbackTransaction="onRollbackTransaction"
        :cubeName="cubeName"
        :key="tableKey"
        :rowsExpandedMembers="data.tableState.rowsExpandedMembers"
        :columnsExpandedMembers="data.tableState.columnsExpandedMembers"
        :propertiesRows="data.propertiesRows"
        :propertiesCols="data.propertiesCols"
        :headerBackgroundColor="stylingProps.headerBackgroundColor"
        :headerTextColor="stylingProps.headerTextColor"
        :cellBackgroundColor="stylingProps.cellBackgroundColor"
        :cellTextColor="stylingProps.cellTextColor"
        :borderColor="stylingProps.borderColor"
        :defaultColumnWidth="stylingProps.defaultColumnWidth"
        :defaultRowHeight="stylingProps.defaultRowHeight"
        :fontSize="stylingProps.fontSize"
        :headerFontWeight="stylingProps.headerFontWeight"
        :cellTextAlign="stylingProps.cellTextAlign"
        :rowLevelStyles="stylingProps.rowLevelStyles"
        :columnLevelStyles="stylingProps.columnLevelStyles"
        :conditionalFormats="stylingProps.conditionalFormats" />
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
