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
import { inject } from 'vue'
import { toRefs, ref, shallowRef, watch, onMounted, onUnmounted, computed } from "vue";
import { pivotSlice, sliceByKeys, sliceKeys, type Cellset } from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import PivotNavigator from './navigation/PivotNavigator.vue'
import { createNavigationStore, type NavigationSettings } from './navigation/store'
import { isFor, PIVOT_EVENTS, type SelectionChangedEvent, type SliceChangedEvent } from './navigation/events'
import { useVariableRepository, useDatasourceRepository, useTranslation, VariableWrapper, plainSettings } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { PivotTable as PivotTableComponent } from 'org.eclipse.daanse.board.app.ui.vue.common.xmla';
import type { PivotTable } from "./gen/PivotTable";
// The class to instantiate: in emf mode the plain name is the interface
import { PivotTableImpl } from "./gen/PivotTableImpl";
import { EventActionsRegistry, EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events'
import { useRoute } from 'vue-router'

const props = defineProps<{ datasourceId: string, id?: string }>();
const { datasourceId, id: widgetId } = toRefs(props);

import { identifiers } from 'org.eclipse.daanse.board.app.lib.core';
import type { TinyEmitter } from 'tiny-emitter';
const eventBus = inject<TinyEmitter>(identifiers.TINY_EMITTER)!;

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

const emitClick = () => emitWidgetEvent('click');
const emitRightClick = () => emitWidgetEvent('right_click');
const emitRowClick = (uName: string) => emitWidgetEvent('row_clicked', { uniqueName: uName });
const emitRowRightClick = (uName: string) => emitWidgetEvent('row_right_clicked', { uniqueName: uName });
const emitColumnClick = (uName: string) => emitWidgetEvent('column_clicked', { uniqueName: uName });
const emitColumnRightClick = (uName: string) => emitWidgetEvent('column_right_clicked', { uniqueName: uName });
const emitCellClick = (ids: { rowId: string, colId: string }) => emitWidgetEvent('cell_clicked', ids);
const emitCellRightClick = (ids: { rowId: string, colId: string }) => emitWidgetEvent('cell_right_clicked', ids);
const emitRowExpanded = (uName: string) => emitWidgetEvent('row_expanded', { uniqueName: uName });
const emitRowCollapsed = (uName: string) => emitWidgetEvent('row_collapsed', { uniqueName: uName });
const emitColumnExpanded = (uName: string) => emitWidgetEvent('column_expanded', { uniqueName: uName });
const emitColumnCollapsed = (uName: string) => emitWidgetEvent('column_collapsed', { uniqueName: uName });

const config = defineModel<PivotTable>('configv', { required: true });
const { wrapParameters } = useVariableRepository();

const defaultConfig = new PivotTableImpl()

onMounted(() => {
    if (config.value) {
        /* Read by the model's names: spreading a generated instance gives
         * the private fields the getters sit in, not the features. */
        Object.assign(config.value, {
            ...plainSettings(defaultConfig),
            ...plainSettings(config.value),
        });
    }

    // actionsRegistry.registerInstance(widgetId.value, api, 'MapWidget', pageId);
});

/*
 * A setting as the table takes it. Stored ones and the model's defaults are
 * both variable wrappers, typed as strings; unset, the default's wrapper
 * holds nothing, and handed over as it is it becomes "[object Object]px".
 * Nothing at all lets the table use its own default; sizes go as numbers.
 */
const SIZES = new Set(['defaultColumnWidth', 'defaultRowHeight', 'fontSize'])
const unwrap = (value: unknown) =>
  value !== null && typeof value === 'object' && 'value' in value ? (value as { value: unknown }).value : value
const setting = (key: string) => {
  for (const source of [config.value as any, defaultConfig as any]) {
    let value = unwrap(source?.[key])
    if (SIZES.has(key) && typeof value === 'string' && value.trim() !== '') value = Number(value)
    if (value === undefined || value === null || value === '' || typeof value === 'object') continue
    if (typeof value === 'number' && Number.isNaN(value)) continue
    return value
  }
  return undefined
}

const wrappedConfig = wrapParameters({
    headerBackgroundColor: computed(() => setting('headerBackgroundColor')),
    headerTextColor: computed(() => setting('headerTextColor')),
    cellBackgroundColor: computed(() => setting('cellBackgroundColor')),
    cellTextColor: computed(() => setting('cellTextColor')),
    borderColor: computed(() => setting('borderColor')),
    defaultColumnWidth: computed(() => setting('defaultColumnWidth')),
    defaultRowHeight: computed(() => setting('defaultRowHeight')),
    fontSize: computed(() => setting('fontSize')),
    headerFontWeight: computed(() => setting('headerFontWeight')),
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

/*
 * What the variables made of a setting. They resolve as text, so an unset
 * one arrives as "undefined"; that, like nothing, leaves the table its own
 * default.
 */
const resolved = (key: string) => {
  const value = wrappedConfig[key].value
  const text = value === undefined || value === null ? '' : String(value)
  if (text === '' || text === 'undefined' || text === 'null' || text === '[object Object]') return undefined
  if (!SIZES.has(key)) return value
  const size = Number(text)
  return Number.isFinite(size) ? size : undefined
}

const stylingProps = computed(() => ({
  headerBackgroundColor: resolved('headerBackgroundColor'),
  headerTextColor: resolved('headerTextColor'),
  cellBackgroundColor: resolved('cellBackgroundColor'),
  cellTextColor: resolved('cellTextColor'),
  borderColor: resolved('borderColor'),
  defaultColumnWidth: resolved('defaultColumnWidth'),
  defaultRowHeight: resolved('defaultRowHeight'),
  fontSize: resolved('fontSize'),
  headerFontWeight: resolved('headerFontWeight'),
  cellTextAlign: (config.value?.cellTextAlign || defaultConfig.cellTextAlign) as "left" | "center" | "right" | undefined,
  rowLevelStyles: parsedNestedPivots.value.rowLevelStyles,
  columnLevelStyles: parsedNestedPivots.value.columnLevelStyles,
  conditionalFormats: parsedNestedPivots.value.conditionalFormats as any[],
}));

const dataProps = computed(() => ({
  showRowsProperties: config.value?.showRowsProperties || defaultConfig.showRowsProperties,
  showColumnsProperties: config.value?.showColumnsProperties || defaultConfig.showColumnsProperties,
  showSingleMeasureHeader: config.value?.showSingleMeasureHeader ?? defaultConfig.showSingleMeasureHeader,
}))

// Replaced as a whole on every load, never mutated: no deep reactivity over
// what can be hundreds of thousands of cells
const data = shallowRef(null as any);
const { t } = useTranslation('tablePivot')
const { callEvent, update, loading, getDatasourceInstance } = useDatasourceRepository(datasourceId, "PivotTable", data, [], dataProps);

/* ---- writeback */

const cubeName = computed(() => {
  const ds = getDatasourceInstance();
  return ds?.getCubeName ? ds.getCubeName() : '';
});

const onCellEdit = (e: any) => {
  callEvent('cellUpdate', { query: e.query });
  if (!widgetId?.value) return;
  eventBus.emit('widget:PivotTableWidget:cell_edited', {
    type: 'widget:PivotTableWidget:cell_edited',
    widgetId: widgetId.value,
    payload: { widgetId: widgetId.value, timestamp: Date.now(), cell: e.cell, value: e.value, query: e.query },
  });
};

const onEditModeChanged = async (isEditing: boolean) => {
  if (isEditing) await callEvent('beginTransaction', undefined);
};

const onCommitTransaction = () => callEvent('commitTransaction', undefined);
const onRollbackTransaction = () => callEvent('rollbackTransaction', undefined);

watch(datasourceId, (newVal, oldVal) => {
  update(newVal, oldVal);
})

watch(() => dataProps.value, () => {
  update();
});

/* ---- pages and chapters */

const cellset = computed<Cellset | null>(() => data.value?.cellset ?? null)
/*
 * The board hands the settings over as a plain object, so a mode switched in
 * the header would be written and never shown. The navigator works on a
 * reactive copy of its own settings, and every change goes back into the
 * board's object, which is what gets saved.
 */
const NAVIGATION_KEYS: (keyof NavigationSettings)[] = [
  'mode', 'cascadeDepth', 'measure', 'compareLayout', 'diffType', 'scaleNormalization',
  'divergingScale', 'significanceThreshold', 'hideUnchanged', 'matrixLimit', 'timeline',
]
const navigationOf = (source: any): NavigationSettings =>
  Object.fromEntries(NAVIGATION_KEYS.map(key => [key, source?.[key]]))
const navigationSettings = ref<NavigationSettings>(navigationOf(config.value))
watch(config, value => {
  navigationSettings.value = navigationOf(value)
})
watch(navigationSettings, value => {
  if (config.value) Object.assign(config.value, value)
}, { deep: true })

const navigation = createNavigationStore(cellset, navigationSettings)

/** The table shown: the current slice where there are slices, else the data as it came. */
const tableData = computed(() => {
  if (!data.value) return null
  if (!cellset.value || !navigation.hasNavigation.value) return data.value
  return {
    ...pivotSlice(cellset.value, navigation.state.slice, data.value.sliceParams),
    tableState: data.value.tableState,
  }
})

const sliceEvent = (): SliceChangedEvent | null => {
  if (!cellset.value) return null
  return { source: widgetId?.value, ...sliceKeys(cellset.value, navigation.state.slice) }
}
watch(
  () => [navigation.state.slice.axis2, navigation.state.slice.axis3],
  () => {
    const event = sliceEvent()
    if (event && navigation.state.touched) eventBus.emit(PIVOT_EVENTS.sliceChanged, event)
  },
)
watch(
  () => navigation.state.selection,
  selection => {
    if (!cellset.value) return
    const event: SelectionChangedEvent = {
      source: widgetId?.value,
      slices: selection.map(slice => sliceKeys(cellset.value!, slice)),
    }
    eventBus.emit(PIVOT_EVENTS.selectionChanged, event)
  },
)
const onHover = (axis: 2 | 3, key: string | null) => {
  eventBus.emit(PIVOT_EVENTS.memberHover, { source: widgetId?.value, axis, uniqueName: key })
}

/* What other widgets say: follow it where the members are on our axes. */
const followSlice = (event: SliceChangedEvent) => {
  if (!isFor(event, widgetId?.value) || !cellset.value) return
  const slice = sliceByKeys(cellset.value, {
    axis2: event.axis2 ?? undefined,
    axis3: event.axis3 ?? undefined,
  })
  if (slice) navigation.select(slice)
}
const followSelection = (event: SelectionChangedEvent) => {
  if (!isFor(event, widgetId?.value) || !cellset.value) return
  navigation.clearSelection()
  for (const keys of event.slices ?? []) {
    const slice = sliceByKeys(cellset.value, { axis2: keys.axis2 ?? undefined, axis3: keys.axis3 ?? undefined })
    if (slice) navigation.toggleSelection(slice)
  }
}
onMounted(() => {
  eventBus.on(PIVOT_EVENTS.sliceChanged, followSlice)
  eventBus.on(PIVOT_EVENTS.selectionChanged, followSelection)
})
onUnmounted(() => {
  eventBus.off(PIVOT_EVENTS.sliceChanged, followSlice)
  eventBus.off(PIVOT_EVENTS.selectionChanged, followSelection)
})

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

const tableBindings = computed(() => ({
  modelValue: tableData.value,
  rowsExpandedMembers: tableData.value?.tableState?.rowsExpandedMembers,
  columnsExpandedMembers: tableData.value?.tableState?.columnsExpandedMembers,
  propertiesRows: tableData.value?.propertiesRows,
  propertiesCols: tableData.value?.propertiesCols,
  cubeName: cubeName.value,
  ...stylingProps.value,
}))
/* The table in the Table mode's popover: smaller type, lower rows, narrower columns. */
const COMPACT = { fontSize: 11, defaultRowHeight: 22, defaultColumnWidth: 96 }
const compactTableBindings = computed(() => ({ ...tableBindings.value, ...COMPACT }))

const tableListeners = {
  onExpand,
  onCollapse,
  row_clicked: emitRowClick,
  row_right_clicked: emitRowRightClick,
  column_clicked: emitColumnClick,
  column_right_clicked: emitColumnRightClick,
  cell_clicked: emitCellClick,
  cell_right_clicked: emitCellRightClick,
  onCellEdit,
  onEditModeChanged,
  onCommitTransaction,
  onRollbackTransaction,
}
</script>

<template>
  <div class="text-container" @click="emitClick" @contextmenu.prevent="emitRightClick">
    <div class="component">
      <PivotNavigator
        v-if="data && cellset && navigation.hasNavigation.value"
        v-model:settings="navigationSettings"
        :cellset="cellset"
        :store="navigation"
        :metadata="data.axisMetadata"
        @hover="onHover"
      >
        <template #table="{ compact }">
          <PivotTableComponent v-if="tableData" v-bind="compact ? compactTableBindings : tableBindings" v-on="tableListeners" />
        </template>
      </PivotNavigator>
      <PivotTableComponent v-else-if="tableData" v-bind="tableBindings" v-on="tableListeners" />
      <!-- The first answer can take a while: an OLAP server works out its
           metadata before the query. Said, rather than an empty frame. -->
      <div v-else-if="loading" class="pivot-loading" role="status">
        <span class="pivot-loading__spinner" aria-hidden="true" />
        {{ t('Widget.loading') }}
      </div>
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

.pivot-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 100%;
  min-height: 80px;
  font-size: var(--text-sm);
  color: var(--color-dim);
}

.pivot-loading__spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--color-divider);
  border-top-color: var(--color-accent);
  border-radius: 50%;
  animation: pivot-spin 700ms linear infinite;
}

@keyframes pivot-spin {
  to { transform: rotate(360deg); }
}

.component {
  overflow: hidden;
  padding: 16px;
  /* The navigator needs a height to share between its parts. */
  flex: 1;
  min-height: 0;
}
</style>
