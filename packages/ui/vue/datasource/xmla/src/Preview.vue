<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script setup lang="ts">
import { DCheckbox, DTabs } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTemporaryStore, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables';
import { computed, provide, ref, watch, toRef, shallowRef, nextTick, onMounted, onBeforeUnmount } from 'vue';
import { debounce } from 'lodash';
import { MetadataTree, QueryDesigner, PivotTable, SlicePicker } from 'org.eclipse.daanse.board.app.ui.vue.common.xmla';
import { axisOptions, pivotSlice, positionsOf, sliceByKeys, sliceKeys, type SliceRef } from 'org.eclipse.daanse.board.app.lib.datasource.xmla';
import { MonacoEditor } from 'org.eclipse.daanse.board.app.ui.vue.common.monaco';

const props = defineProps<{ dataSource: any }>();

const data = ref(null as any);
const connection = ref(null as any);
const query = ref(props.dataSource.config.mdx || '');
const emit = defineEmits(['updateConfig']);
const { t } = useTranslation('datasourceXmla')

const tempStore = shallowRef(null as any)
const settingsRef = ref(props.dataSource);
const metadata = ref(null as any);
const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore);
// The table's drillthrough asks the datasource itself.
provide('datasource', computed(() => tempStore.value));

const tabs = computed(() => [
  { id: 'visual', label: t('Xmla.build') },
  { id: 'code', label: t('Xmla.write') },
]);
const currentTab = ref('visual');
const api = ref(null as any);
const catalog = ref(null as any);

const queryConfig = ref({
  filters: props.dataSource.config.requestParams?.filters || [],
  rows: props.dataSource.config.requestParams?.rows || [],
  columns: props.dataSource.config.requestParams?.columns || [],
  measures: props.dataSource.config.requestParams?.measures || [],
  pages: props.dataSource.config.requestParams?.pages || [],
  chapters: props.dataSource.config.requestParams?.chapters || [],
});

const drilldownState = ref(props.dataSource.config.drilldownState || {});

watch(() => props.dataSource.config.connection, async () => {
  const newStore = await update();
  if (!newStore) return;
  metadata.value = await newStore.getMetadata();
});

watch(() => props.dataSource.config.cube, async () => {
  const newStore = await update();
  if (!newStore) return;
  metadata.value = await newStore.getMetadata();
});

let latestUpdate = 0;

const updateData = async () => {
  const store = tempStore.value;
  // The store is replaced while the connection or cube changes; there is
  // nothing to ask until the new one has arrived.
  if (!store) return;
  // Answers can arrive out of order; only the latest request's counts.
  const update = ++latestUpdate;
  const req = await store.getData('PivotTable');
  if (update !== latestUpdate) return;
  data.value = req;
  if (props.dataSource.config.useVisualEditor) {
    generatedMdx = await store.getMdxRequest();
    query.value = generatedMdx;
  }
}

/*
 * The MDX the designer built, last time it was asked. Writing it into the
 * editor is not a change somebody made, and reporting it as one marked the
 * source unsaved for merely being looked at.
 */
let generatedMdx = '';

// Edits, expands and collapses come in bursts; the preview asks once.
const debouncedUpdateData = debounce(updateData, 100);

onBeforeUnmount(() => debouncedUpdateData.cancel());

onMounted(async () => {
  // if (!tempStore.value) return;
  // metadata.value = await tempStore.value.getMetadata();
});

// Runs each time the temporary store is created or replaced.
watch(tempStore, async () => {
  if (!tempStore.value) return;
  /*
   * Asked of the store, which resolves it through the repository it was
   * built with. inject() would answer only during setup, not here.
   */
  connection.value = tempStore.value.getConnection();
  api.value = await connection.value.getApi();
  catalog.value = connection.value.catalogName;

  // The table asks only for its own hierarchies; it does not wait for the cube explorer.
  const store = tempStore.value;
  debouncedUpdateData();
  const loaded = await store.getMetadata();
  if (tempStore.value === store) metadata.value = loaded;
}, { deep: true });

watch(() => queryConfig, async () => {
  emit('updateConfig', {
    ...props.dataSource.config,
    requestParams: queryConfig.value,
  });

  tempStore.value?.setRequestParams(queryConfig.value);
  debouncedUpdateData();
}, { deep: true });

watch(() => query, async () => {
  if (query.value === generatedMdx) return;
  emit('updateConfig', {
    ...props.dataSource.config,
    mdx: query.value,
  });

  debouncedUpdateData();
}, { deep: true });

const onExpand = async (e: any) => {
  drilldownState.value = tempStore.value.expand(e);

  emit('updateConfig', {
    ...props.dataSource.config,
    drilldownState: drilldownState.value,
  });

  debouncedUpdateData();
}

const onCollapse = async (e: any) => {
  drilldownState.value = tempStore.value.collapse(e);

  emit('updateConfig', {
    ...props.dataSource.config,
    drilldownState: drilldownState.value,
  });

  debouncedUpdateData();
}

/* The context menu's drill down and up, kept with the source as expanding is. */
const onDrill = (event: 'drilldown' | 'drillup') => async (e: any) => {
  drilldownState.value = tempStore.value[event](e);

  emit('updateConfig', {
    ...props.dataSource.config,
    drilldownState: drilldownState.value,
  });

  debouncedUpdateData();
}
const onDrilldown = onDrill('drilldown');
const onDrillup = onDrill('drillup');

/* ---- writeback: an edited cell, and the transaction it runs in */

const cellEditLoading = ref(false);

const whileEditing = async (work: () => Promise<unknown>, reload: boolean) => {
  if (!tempStore.value) return;
  cellEditLoading.value = true;
  try {
    await work();
    if (reload) await updateData();
  } finally {
    cellEditLoading.value = false;
  }
}

const onCellEdit = (e: any) => whileEditing(() => tempStore.value.callEvent('cellUpdate', { query: e.query }), true)
const onEditModeChanged = (isEditing: boolean) => {
  if (isEditing) whileEditing(() => tempStore.value.callEvent('beginTransaction'), false)
}
const onCommitTransaction = () => whileEditing(() => tempStore.value.callEvent('commitTransaction'), true)
const onRollbackTransaction = () => whileEditing(() => tempStore.value.callEvent('rollbackTransaction'), true)

/*
 * Pages and chapters: the preview shows one slice, picked from two
 * dropdowns. The pick is held by unique name, so it outlasts a changed
 * query that still has the same members.
 */
const cellset = computed(() => (data.value?.cellset?.axes?.length > 2 ? data.value.cellset : null));
const picked = ref<{ axis2?: string; axis3?: string }>({});
const slice = computed<SliceRef | null>(() => {
  const c = cellset.value;
  if (!c) return null;
  return sliceByKeys(c, picked.value) ?? sliceByKeys(c, { axis2: picked.value.axis2 }) ?? sliceByKeys(c, {});
});
const pageOptions = computed(() => (cellset.value ? axisOptions(positionsOf(cellset.value, 2)) : []));
const chapterOptions = computed(() =>
  cellset.value?.axes.length > 3 ? axisOptions(positionsOf(cellset.value, 3)) : undefined,
);
const pick = (axis: 'axis2' | 'axis3', index: number) => {
  if (!cellset.value || !slice.value) return;
  const keys = sliceKeys(cellset.value, { ...slice.value, [axis]: index });
  picked.value = { axis2: keys.axis2 ?? undefined, axis3: keys.axis3 ?? undefined };
};
const tableData = computed(() => {
  if (!data.value || !cellset.value || !slice.value) return data.value;
  return { ...pivotSlice(cellset.value, slice.value, data.value.sliceParams), tableState: data.value.tableState };
});

/*
 * The tree starts over for other metadata. Counted rather than hashed from
 * its JSON: the metadata holds the client's models, which point back at
 * themselves.
 */
const metadataVersion = ref(0);
watch(metadata, () => {
  metadataVersion.value += 1;
});

// const selectedFilter = ref("");
</script>

<template>
  <div class="xmla-preview">
    <div class="data-designer">
      <DTabs v-model="currentTab" :tabs="tabs" :label="t('Xmla.tabs')" />

      <div class="editor-pane">
        <template v-if="currentTab === 'code' && connection">
          <!-- <MonacoEditor v-model="query" height="100%" width="100%" language="mdx" :supported-languages="[ 'mdx' ]" :metadata="metadataStore" /> -->
          <MonacoEditor v-model="query" class="monaco-container" language="mdx" :supported-languages="['mdx']">
            <template #actions>
              <DCheckbox v-model="props.dataSource.config.useMdx" class="mt-2" :label="t('Xmla.useMdx')" />
            </template>
          </MonacoEditor>
        </template>
        <template v-if="currentTab === 'visual'">
          <QueryDesigner v-model="queryConfig" :api="api" :catalog="catalog"/>
        </template>
      </div>
      <div class="data-preview">
        <h4 class="data-preview__title">
          {{ t('Xmla.preview') }}
        </h4>
        <SlicePicker
          v-if="slice"
          class="data-preview__slice"
          :pages="pageOptions"
          :chapters="chapterOptions"
          :page="slice.axis2"
          :chapter="slice.axis3"
          @update:page="pick('axis2', $event)"
          @update:chapter="pick('axis3', $event)"
        />
        <div class="data-preview__table" :class="{ 'is-busy': cellEditLoading }" :aria-busy="cellEditLoading">
          <PivotTable v-if="tableData" :modelValue="tableData" @onExpand="onExpand" @onCollapse="onCollapse" @onDrilldown="onDrilldown" @onDrillup="onDrillup"
            @onCellEdit="onCellEdit"
            @onEditModeChanged="onEditModeChanged"
            @onCommitTransaction="onCommitTransaction"
            @onRollbackTransaction="onRollbackTransaction"
            :cubeName="tempStore?.getCubeName ? tempStore.getCubeName() : ''"
            :rowsExpandedMembers="tableData.tableState?.rowsExpandedMembers"
            :columnsExpandedMembers="tableData.tableState?.columnsExpandedMembers" />
        </div>
      </div>
    </div>
    <div class="metadata-container">
      <MetadataTree v-if="metadata" :metadata="metadata" :key="metadataVersion" />
      <div class="metadata-container__empty" v-else>
        {{ t('Xmla.pickConnection') }}
      </div>
    </div>
  </div>
</template>
<style>
/*
 * Two panes on the theme's surfaces: the query and its preview on the left,
 * the cube on the right. The query takes what it needs up to half the
 * height, the preview the rest, so neither covers the other.
 */
.xmla-preview {
  display: flex;
  gap: 12px;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
}

.data-designer,
.metadata-container {
  background-color: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  color: var(--color-fg);
}

.data-designer {
  display: grid;
  /* One column as wide as the pane - not as the widest table in it. */
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto minmax(0, max-content) minmax(160px, 1fr);
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  padding: 8px 12px 12px;
}

.editor-pane {
  min-width: 0;
  min-height: 0;
  max-height: 55vh;
  overflow: auto;
  padding-top: 8px;
}

.monaco-container {
  height: 320px;
}

.data-preview {
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px dashed var(--color-divider);
}

.data-preview__title {
  margin: 0 0 6px;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-dim);
}

.data-preview__slice {
  margin-bottom: 6px;
}

/* A big table scrolls here, in both directions, instead of widening the page. */
.data-preview__table {
  flex: 1;
  min-width: 0;
  min-height: 0;
  overflow: auto;
}

/* While a written value goes to the server and the table reloads. */
.data-preview__table.is-busy {
  opacity: 0.5;
  pointer-events: none;
}

.metadata-container {
  flex: 0 0 300px;
  min-height: 0;
  overflow: auto;
  padding: 8px;
}

.metadata-container__empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1rem;
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-dim);
}
</style>
