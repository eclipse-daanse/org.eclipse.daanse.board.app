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
import { computed, ref, watch, shallowRef, onMounted, onBeforeUnmount } from 'vue';
import { debounce } from 'lodash';
import { MetadataTree, QueryDesigner, PivotTable } from 'org.eclipse.daanse.board.app.ui.vue.common.xmla';
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
});

const drilldownState = ref(props.dataSource.config.drilldownState || {});

watch(() => props.dataSource.config.connection, async () => {
  const newStore = await update();
  metadata.value = await newStore.getMetadata();
});

watch(() => props.dataSource.config.cube, async () => {
  const newStore = await update();
  metadata.value = await newStore.getMetadata();
});

const updateData = async () => {
  const store = tempStore.value;
  // The store is replaced while the connection or cube changes; there is
  // nothing to ask until the new one has arrived.
  if (!store) return;
  data.value = await store.getData('PivotTable');
  if (props.dataSource.config.useVisualEditor) {
    query.value = await store.getMdxRequest();
  }
}

// Edits, expands and collapses come in bursts; the preview asks once.
const debouncedUpdateData = debounce(updateData, 100);

onBeforeUnmount(() => debouncedUpdateData.cancel());

onMounted(async () => {
  // if (!tempStore.value) return;
  // metadata.value = await tempStore.value.getMetadata();
});

// Runs each time the temporary store is created or replaced.
watch(tempStore, async (store) => {
  if (!store) return;
  // The store resolves its connection through the repository it was built
  // with; inject() is not available in a watcher callback.
  connection.value = store.getConnection();
  api.value = await connection.value.getApi();
  catalog.value = connection.value.catalogName;

  metadata.value = await store.getMetadata();
  debouncedUpdateData();
});

watch(() => queryConfig, async () => {
  emit('updateConfig', {
    ...props.dataSource.config,
    requestParams: queryConfig.value,
  });

  tempStore.value?.setRequestParams(queryConfig.value);
  debouncedUpdateData();
}, { deep: true });

watch(() => query, async () => {
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

const getSettingsHash = (obj: any) => {
  const str = JSON.stringify(obj);
  if (!str) return 0;

  let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

// const selectedFilter = ref("");
</script>

<template>
  <div class="flex w-full h-full rounded gap-4 overflow-hidden">
    <div class="flex flex-col w-full h-full overflow-hidden flex-grow data-designer">
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
          <div class="w-full h-full">
            <QueryDesigner v-model="queryConfig" :api="api" :catalog="catalog"/>
          </div>
        </template>
      </div>
      <div class="h-full w-full flex flex-col data-preview">
        <h4>
          {{ t('Xmla.preview') }}
        </h4>
        <div class="w-full h-full overflow-auto">
          <!-- @onExpand="onExpand"
          @onCollapse="onCollapse" -->
          <PivotTable v-if="data" v-model="data" @onExpand="onExpand" @onCollapse="onCollapse"
            :rowsExpandedMembers="data.tableState.rowsExpandedMembers"
            :columnsExpandedMembers="data.tableState.columnsExpandedMembers" />
        </div>
      </div>
    </div>
    <div class="h-full metadata-container">
      <MetadataTree v-if="metadata" :metadata="metadata" :key="getSettingsHash(metadata)" />
      <div class="h-full w-full flex items-center justify-center" v-else>
        {{ t('Xmla.pickConnection') }}
      </div>
    </div>
  </div>
</template>
<style>
.editor-pane {
  height: 100%;
  width: 100%;
  min-height: 0;
}

.metadata-container {
  flex-grow: 0;
  flex-shrink: 0;
  min-width: 300px;
  background-color: #fff;
  padding: 8px;
  border-radius: 8px;
}

.data-designer {
  background-color: #fff;
  padding: 8px;
  border-radius: 8px;
}

.data-preview {
  border-top: 1px dashed #ccc;
  padding-top: 8px;
}

.monaco-container {
  height: 500px;
}
</style>
