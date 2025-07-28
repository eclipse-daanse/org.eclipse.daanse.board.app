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
import { ref, watch, toRef, shallowRef } from 'vue';
import { MetadataTree, QueryDesigner, PivotTable } from 'org.eclipse.daanse.board.app.ui.vue.common.xmla';
import { MonacoEditor } from 'org.eclipse.daanse.board.app.ui.vue.common.monaco';
import { container } from 'org.eclipse.daanse.board.app.lib.core';

const props = defineProps<{ dataSource: any }>();
console.log(MetadataTree)

const data = ref(null as any);
const connection = ref(null as any);
const query = ref(props.dataSource.config.mdx || '');
const emit = defineEmits(['updateConfig']);

console.log(props.dataSource);
watch(props.dataSource, () => {
  update();
}, { deep: true });

const tempStore = shallowRef(null as any)
const settingsRef = ref(props.dataSource);
const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore);

console.log(props.dataSource)

const tabs = ["Code Editor", "Visual Editor"];
const currentTab = ref(0);

const queryConfig = ref({
  filters: props.dataSource.config.requestParams?.filters || [],
  rows: props.dataSource.config.requestParams?.rows || [],
  columns: props.dataSource.config.requestParams?.columns || [],
  measures: props.dataSource.config.requestParams?.measures || [],
});

const drilldownState = ref(props.dataSource.config.drilldownState || {});

const updateData = async () => {
  const req = await tempStore.value.getData('PivotTable');
  data.value = req;
  if (props.dataSource.config.useVisualEditor) {
    query.value = await tempStore.value.getMdxRequest();
    console.log('query', query.value);
  }
}

watch(tempStore, async () => {
  console.log('tempStore changed', tempStore.value);
  const connectionId = tempStore.value.connection;

  console.log('container', container);
  console.log('connectionId', connectionId);
  const connectionRepo = container.get(identifier) as ConnectionRepository;
  connection.value = await connectionRepo.getConnection(connectionId);

  updateData();
  // data.value = await tempStore.value.getData('PivotTable');
}, { deep: true });

watch(() => queryConfig, async () => {
  emit('updateConfig', {
    ...props.dataSource.config,
    requestParams: queryConfig.value,
  });

  updateData();
}, { deep: true });

watch(() => query, async () => {
  emit('updateConfig', {
    ...props.dataSource.config,
    mdx: query.value,
  });

  updateData();
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

// const selectedFilter = ref("");
</script>

<template>
  <div class="flex w-full h-full rounded gap-4">
    <div class="flex flex-col h-full overflow-hidden flex-grow data-designer">
      <va-tabs v-model="currentTab" hidePagination color="info" grow>
        <template #tabs>
          <div class="flex justify-between w-full">
            <div>
              <va-tab v-for="tab in tabs" :key="tab" :disabled="tab === 'Visual Editor'
                && !props.dataSource.config.useVisualEditor">
                {{ tab }}
              </va-tab>
            </div>

            <!-- eslint-disable-next-line vue/no-mutating-props -->
            <VaCheckbox v-model="props.dataSource.config.useVisualEditor" class="mt-2" label="Use query designer" />
          </div>
        </template>
        <template v-if="currentTab === 0 && connection">
          <!-- <MonacoEditor v-model="query" height="100%" width="100%" language="mdx" :supported-languages="[ 'mdx' ]" :metadata="metadataStore" /> -->
          <MonacoEditor v-model="query" class="monaco-container" language="mdx" :supported-languages="['mdx']" />
        </template>
        <template v-if="currentTab === 1">
          <div class="w-full h-full">
            <QueryDesigner v-model="queryConfig" />
          </div>
        </template>
      </va-tabs>
      <div class="h-full flex flex-col data-preview">
        <h4>
          Data Preview
        </h4>
        <div class="w-full h-full">
          <!-- @onExpand="onExpand"
          @onCollapse="onCollapse" -->
          <PivotTable v-if="data" v-model="data" @onExpand="onExpand" @onCollapse="onCollapse"
            :rowsExpandedMembers="data.tableState.rowsExpandedMembers"
            :columnsExpandedMembers="data.tableState.columnsExpandedMembers" />
        </div>
      </div>
    </div>
    <div class="h-full metadata-container">
      <MetadataTree v-if="connection" :metadata="connection.metadata" />
      <div class="h-full w-full flex items-center justify-center" v-else>
        Select connection to load metadata
      </div>
    </div>
  </div>
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
