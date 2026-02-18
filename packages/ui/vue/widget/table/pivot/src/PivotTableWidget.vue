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
import { toRefs, ref, watch, onMounted, computed } from "vue";
import { useDatasourceRepository } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { PivotTable as PivotTableComponent } from 'org.eclipse.daanse.board.app.ui.vue.common.xmla';
import { PivotTable } from "./gen/PivotTable";
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { EventActionsRegistry, EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.events'
import { useRoute } from 'vue-router'

interface ILevelStyle {
  level: number
  backgroundColor: string
  textColor: string
  fontWeight: number
}

type ConditionType = 'greaterThan' | 'lessThan' | 'equals' | 'notEquals' | 'between' | 'contains' | 'colorScale' | 'topN' | 'bottomN'

interface IConditionalFormat {
  id: string
  conditionType: ConditionType
  value1: number | string
  value2?: number | string
  backgroundColor: string
  textColor: string
  fontWeight?: number
  minColor?: string
  maxColor?: string
  priority: number
}

interface IPivotTableConfig extends PivotTable {
  headerBackgroundColor?: string
  headerTextColor?: string
  cellBackgroundColor?: string
  cellTextColor?: string
  borderColor?: string
  defaultColumnWidth?: number
  defaultRowHeight?: number
  fontSize?: number
  headerFontWeight?: number
  cellTextAlign?: 'left' | 'center' | 'right'
  rowLevelStyles?: ILevelStyle[]
  columnLevelStyles?: ILevelStyle[]
  conditionalFormats?: IConditionalFormat[]
  showColumnsProperties?: boolean
  showRowsProperties?: boolean
}

const props = defineProps<{ datasourceId: string }>();
const { datasourceId } = toRefs(props);
const config = defineModel<IPivotTableConfig>('configv', { required: true });

const defaultConfig = {
  ...new PivotTable(),
  headerBackgroundColor: '#f5f5f5',
  headerTextColor: '#000000',
  cellBackgroundColor: '#ffffff',
  cellTextColor: '#000000',
  borderColor: 'silver',
  defaultColumnWidth: 150,
  defaultRowHeight: 30,
  fontSize: 14,
  headerFontWeight: 600,
  cellTextAlign: 'left' as const,
  rowLevelStyles: [] as ILevelStyle[],
  columnLevelStyles: [] as ILevelStyle[],
  conditionalFormats: [] as IConditionalFormat[],
  showRowsProperties: false,
  showColumnsProperties: false,
};

onMounted(() => {
    if (config.value) {
        Object.assign(config.value, { ...defaultConfig, ...config.value });
    }

    // actionsRegistry.registerInstance(widgetId.value, api, 'MapWidget', pageId);
});

const stylingProps = computed(() => ({
  headerBackgroundColor: config.value?.headerBackgroundColor || defaultConfig.headerBackgroundColor,
  headerTextColor: config.value?.headerTextColor || defaultConfig.headerTextColor,
  cellBackgroundColor: config.value?.cellBackgroundColor || defaultConfig.cellBackgroundColor,
  cellTextColor: config.value?.cellTextColor || defaultConfig.cellTextColor,
  borderColor: config.value?.borderColor || defaultConfig.borderColor,
  defaultColumnWidth: config.value?.defaultColumnWidth || defaultConfig.defaultColumnWidth,
  defaultRowHeight: config.value?.defaultRowHeight || defaultConfig.defaultRowHeight,
  fontSize: config.value?.fontSize || defaultConfig.fontSize,
  headerFontWeight: config.value?.headerFontWeight || defaultConfig.headerFontWeight,
  cellTextAlign: config.value?.cellTextAlign || defaultConfig.cellTextAlign,
  rowLevelStyles: config.value?.rowLevelStyles || defaultConfig.rowLevelStyles,
  columnLevelStyles: config.value?.columnLevelStyles || defaultConfig.columnLevelStyles,
  conditionalFormats: config.value?.conditionalFormats || defaultConfig.conditionalFormats,
}));

const dataProps = computed(() => ({
  showRowsProperties: config.value?.showRowsProperties || defaultConfig.showRowsProperties,
  showColumnsProperties: config.value?.showColumnsProperties || defaultConfig.showColumnsProperties,
}))

const data = ref(null as any);
const { callEvent, update } = useDatasourceRepository(datasourceId, "PivotTable", data, [], dataProps);

watch(datasourceId, (newVal, oldVal) => {
  update(newVal, oldVal);
})

watch(() => dataProps.value, () => {
  console.log(dataProps.value);
  update();
});

const onExpand = (e: any) => {
  callEvent('expand', e, true);
};

const onCollapse = (e: any) => {
  callEvent('collapse', e, true);
};
</script>

<template>
  <div class="text-container">
    <div class="component">
      <PivotTableComponent v-if="data" :model-value="data" @onExpand="onExpand" @onCollapse="onCollapse"
        :key="JSON.stringify(data).length"
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
