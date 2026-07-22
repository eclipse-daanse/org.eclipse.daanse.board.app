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
import { useTemporaryStore } from 'org.eclipse.daanse.board.app.ui.vue.composables';
import { identifier, ConnectionRepository } from 'org.eclipse.daanse.board.app.lib.repository.connection'
import { ref, watch, toRef, shallowRef, nextTick, onMounted, provide, computed } from 'vue';
import { debounce } from 'lodash';
import { MetadataTree, QueryDesigner, PivotTable } from 'org.eclipse.daanse.board.app.ui.vue.common.xmla';
import { MonacoEditor } from 'org.eclipse.daanse.board.app.ui.vue.common.monaco';
import { container } from 'org.eclipse.daanse.board.app.lib.core';

const props = defineProps<{ dataSource: any }>();
console.log(MetadataTree)

const data = ref(null as any);
const connection = ref(null as any);
const query = ref(props.dataSource.config.mdx || '');
const emit = defineEmits(['updateConfig']);

const tempStore = shallowRef(null as any)
const settingsRef = ref(props.dataSource);
const metadata = ref(null as any);
const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore);
provide('datasource', computed(() => tempStore.value));

console.log(props.dataSource)

const tabs = ["Visual Editor", "Code Editor"];
const currentTab = ref(0);
const api = ref(null as any);
const catalog = ref(null as any);

const queryConfig = ref({
  filters: props.dataSource.config.requestParams?.filters || [],
  rows: props.dataSource.config.requestParams?.rows || [],
  columns: props.dataSource.config.requestParams?.columns || [],
  measures: props.dataSource.config.requestParams?.measures || [],
});

const drilldownState = ref(props.dataSource.config.drilldownState || {});
const cellEditLoading = ref(false);


console.log(props.dataSource);

watch(() => props.dataSource.config.connection, async () => {
  console.log('connection updated', props.dataSource)

  const newStore = await update();
  metadata.value = await newStore.getMetadata();

  console.log(newStore);
});

watch(() => props.dataSource.config.cube, async () => {
  console.log('connection updated', props.dataSource)

  const newStore = await update();
  metadata.value = await newStore.getMetadata();

  console.log(newStore);
});

const updateData = async () => {
  console.log('updateData called');
  const req = await tempStore.value.getData('PivotTable');
  data.value = req;
  console.log('data', data.value);
  if (props.dataSource.config.useVisualEditor) {
    query.value = await tempStore.value.getMdxRequest();
  }
}

const debouncedUpdateData = debounce(async () => {
  await updateData();
}, 100);

onMounted(async () => {
  // if (!tempStore.value) return;
  // metadata.value = await tempStore.value.getMetadata();
});

// This works only once when component is mounted
watch(tempStore, async () => {
  if (!tempStore.value) return;
  const connectionId = tempStore.value.connection;
  const connectionRepo = container.get(identifier) as ConnectionRepository;
  connection.value = await connectionRepo.getConnection(connectionId);
  api.value = await connection.value.getApi();
  catalog.value = await connection.value.catalogName;

  metadata.value = await tempStore.value.getMetadata();
  updateData();
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

  console.log('query changed', query.value);
  debouncedUpdateData();
}, { deep: true });

const onExpand = async (e: any) => {
  drilldownState.value = tempStore.value.expand(e);

  emit('updateConfig', {
    ...props.dataSource.config,
    drilldownState: drilldownState.value,
  });

  updateData();
}

const onCollapse = async (e: any) => {
  drilldownState.value = tempStore.value.collapse(e);

  emit('updateConfig', {
    ...props.dataSource.config,
    drilldownState: drilldownState.value,
  });

  updateData();
}

const onCellEdit = async (e: any) => {
  console.log('CELL EDIT FIRED IN PREVIEW');
  if (tempStore.value) {
    cellEditLoading.value = true;
    try {
      await tempStore.value.callEvent('cellUpdate', { query: e.query });
      await updateData();
    } finally {
      cellEditLoading.value = false;
    }
  }
}

const onEditModeChanged = async (isEditing: boolean) => {
  console.log('EDIT MODE CHANGED IN PREVIEW', isEditing);
  if (isEditing && tempStore.value) {
    cellEditLoading.value = true;
    try {
      await tempStore.value.callEvent('beginTransaction');
    } finally {
      cellEditLoading.value = false;
    }
  }
}

const onCommitTransaction = async () => {
  console.log('COMMIT TRANSACTION IN PREVIEW');
  if (tempStore.value) {
    cellEditLoading.value = true;
    try {
      await tempStore.value.callEvent('commitTransaction');
      await updateData();
    } finally {
      cellEditLoading.value = false;
    }
  }
}

const onRollbackTransaction = async () => {
  console.log('ROLLBACK TRANSACTION IN PREVIEW');
  if (tempStore.value) {
    cellEditLoading.value = true;
    try {
      await tempStore.value.callEvent('rollbackTransaction');
      await updateData();
    } finally {
      cellEditLoading.value = false;
    }
  }
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
  <VaSplit
    class="split-demo w-full h-full"
    vertical
    modelValue="30"
    stateful
  >
    <template #start>
      <div class="h-full w-full flex overflow-hidden" style="flex-direction: row-reverse;">
        <va-tabs v-model="currentTab" hidePagination color="info" grow>
          <template #tabs>
            <div class="flex justify-between w-full">
              <div>
                <va-tab v-for="tab in tabs" :key="tab">
                  {{ tab }}
                </va-tab>
              </div>
              <!-- eslint-disable-next-line vue/no-mutating-props -->
            </div>
          </template>
          <template v-if="currentTab === 1 && connection">
            <!-- <MonacoEditor v-model="query" height="100%" width="100%" language="mdx" :supported-languages="[ 'mdx' ]" :metadata="metadataStore" /> -->
            <MonacoEditor v-model="query" class="monaco-container" language="mdx" :supported-languages="['mdx']" :metadata="metadata">
              <template #actions>
                <VaCheckbox v-model="props.dataSource.config.useMdx" class="mt-2" label="Use mdx request" />
              </template>
            </MonacoEditor>
          </template>
          <template v-if="currentTab === 0">
            <div class="w-full h-full overflow-auto">
              <QueryDesigner v-model="queryConfig" :api="api" :catalog="catalog"/>
            </div>
          </template>
        </va-tabs>
      <div class="h-full metadata-container">
          <MetadataTree v-if="metadata" :metadata="metadata" :key="getSettingsHash(metadata)" />
          <div class="h-full w-full flex items-center justify-center" v-else>
            Select connection to load metadata
          </div>
        </div>
      </div>
      </template>
      <template #end>
        <div class="flex flex-col w-full h-full overflow-hidden flex-grow data-designer">
          <h4>
            Data Preview
          </h4>
          <div class="w-full h-full overflow-auto">
            <!-- @onExpand="onExpand"
            @onCollapse="onCollapse" -->
            <va-inner-loading :loading="cellEditLoading" class="h-full w-full">
              <PivotTable v-if="data" v-model="data" @onExpand="onExpand" @onCollapse="onCollapse"
                @onCellEdit="onCellEdit"
                @onEditModeChanged="onEditModeChanged"
                @onCommitTransaction="onCommitTransaction"
                @onRollbackTransaction="onRollbackTransaction"
                :cubeName="tempStore?.getCubeName ? tempStore.getCubeName() : ''"
                :rowsExpandedMembers="data.tableState.rowsExpandedMembers"
                :columnsExpandedMembers="data.tableState.columnsExpandedMembers" />
            </va-inner-loading>
          </div>
        </div>
      </template>
    </VaSplit>
</template>
<style>
.va-tabs {
  height: 100% !important;
  width: 100% !important;
}

.va-tabs__content {
  height: 100% !important;
  width: 100% !important;
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
