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

const props = defineProps<{ datasourceId: string }>();
const { datasourceId } = toRefs(props);
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
    headerBackgroundColor: computed(() => (config.value?.headerBackgroundColor as any)?.value ?? defaultConfig.headerBackgroundColor),
    headerTextColor: computed(() => (config.value?.headerTextColor as any)?.value ?? defaultConfig.headerTextColor),
    cellBackgroundColor: computed(() => (config.value?.cellBackgroundColor as any)?.value ?? defaultConfig.cellBackgroundColor),
    cellTextColor: computed(() => (config.value?.cellTextColor as any)?.value ?? defaultConfig.cellTextColor),
    borderColor: computed(() => (config.value?.borderColor as any)?.value ?? defaultConfig.borderColor),
    defaultColumnWidth: computed(() => (config.value?.defaultColumnWidth as any)?.value ?? defaultConfig.defaultColumnWidth),
    defaultRowHeight: computed(() => (config.value?.defaultRowHeight as any)?.value ?? defaultConfig.defaultRowHeight),
    fontSize: computed(() => (config.value?.fontSize as any)?.value ?? defaultConfig.fontSize),
    headerFontWeight: computed(() => (config.value?.headerFontWeight as any)?.value ?? defaultConfig.headerFontWeight),
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
