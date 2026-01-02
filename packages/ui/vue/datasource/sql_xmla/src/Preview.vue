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
import { watch, ref, shallowRef } from 'vue';
import { MonacoEditor } from 'org.eclipse.daanse.board.app.ui.vue.common.monaco';
import { useTemporaryStore } from 'org.eclipse.daanse.board.app.ui.vue.composables';

const props = defineProps<{ dataSource: any }>();

const tempStore = shallowRef(null as any)
const settingsRef = ref(props.dataSource);
const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore)
const treeData = ref([]);
const query = ref(props.dataSource.config.sql || '');
const metadata = ref(null as any);
const data = ref([] as any[]);
const messages = ref([] as any[]);

watch(props.dataSource.config, () => {
  update();
}, { deep: true });

const emit = defineEmits(['updateConfig']);

interface RawNode {
  label: string;
  icon?: string;
  children?: RawNode[];
  COLUMN_NAME?: string;
  TABLE_TYPE?: string;
  DATA_TYPE?: string;
}

interface AutocompleteItem {
  label: string;
  value: string;
  type: 'measure' | 'dimension';
  description?: string;
}

const mapDataType = (type: string | number): string => {
  const types: Record<string, string> = {
    "130": "VARCHAR", // WChar
    "5": "NUMERIC",   // Double
    "3": "INT",       // Integer
    "11": "BOOLEAN",  // Boolean
  };
  return types[String(type)] || "VARCHAR";
};

function transformToSchema(rawData: any) {
  const schema: any = {};

  rawData.forEach((catalog: any) => {
    const tablesFolder = catalog.children?.find((c: any) => c.label === "Tables");
    if (!tablesFolder) return;

    tablesFolder.children.forEach((table: any) => {
      if (table.TABLE_TYPE === "SYSTEM TABLE") return;

      const tableName = table.TABLE_NAME;
      const columnsFolder = table.children?.find((c: any) => c.label === "Columns");

      if (columnsFolder && columnsFolder.children) {
        schema[tableName] = {
          name: tableName,
          description: table.DESCRIPTION || "",
          columns: columnsFolder.children.map((col: any) => ({
            name: col.COLUMN_NAME,
            type: mapDataType(col.DATA_TYPE)
          }))
        };
      }
    });
  });

  return schema;
}

watch(tempStore, async () => {
  const { tables } = await tempStore.value.getTables();
  const catalogs = await tempStore.value.getCatalogs();
  const columns = await tempStore.value.getColumns();


  catalogs.map((catalog: any) => {
    catalog.label = catalog.CATALOG_NAME;
    catalog.id = catalog.CATALOG_NAME;
    catalog.icon = 'storage';
    return catalog;
  });

  for (const table of tables) {
    table.label = table.TABLE_NAME;
    table.id = table.TABLE_NAME;
    table.icon = 'table_chart';

    if (table.children == null) {
      table.children = [{
        label: 'Columns',
        icon: 'view_column',
        children: [],
      }];
    }

    table.children[0].children = columns.filter((column: any) => column.TABLE_NAME === table.TABLE_NAME && column.TABLE_CATALOG === table.TABLE_CATALOG).map((column: any) => {
      column.label = column.COLUMN_NAME;
      column.id = column.COLUMN_NAME;
      column.icon = 'view_array';
      return column;
    });
  }

  for (const catalog of catalogs) {
    if (catalog.children == null) {
      catalog.children = [{
        label: 'Tables',
        icon: 'backup_table',
        children: [],
      }];
    }
    catalog.children[0].children = tables.filter((table: any) => table.TABLE_CATALOG === catalog.CATALOG_NAME);
  }


  console.log('catalogs', catalogs);
  treeData.value = catalogs;
  console.log('treeData', treeData.value);

  metadata.value = transformToSchema(treeData.value);
  console.log('metadata for autocomplete', metadata.value);
  messages.value.push({ type: 'success', text: `Metadata refreshed at ${(new Date()).toLocaleTimeString()}` });
}, { deep: true });


watch(() => query, async () => {
  emit('updateConfig', {
    ...props.dataSource.config,
    sql: query.value,
  });
}, { deep: true });

const tabs = [
  {
    title: 'Data',
    icon: 'table_chart',
  },
  {
    title: 'Messages',
    icon: 'message',
  },
];
const currentTab = ref(tabs[0].title);

const run = async () => {
  console.log(tempStore.value);
  tempStore.value.sql = query.value;
  try {
    const startTime = new Date();
    data.value = (await tempStore.value.getData('DataTable')).items;
    const now = new Date();
    messages.value.push({ type: 'success', text: `Query executed successfully in ${(now.getTime() - startTime.getTime())}ms. Returned ${data.value.length} rows.` });
  } catch (e: any) {
    messages.value.push({ type: 'error', text: `Query failed: ${e.message}` });
  }
};
</script>
<template>
  <div class="flex gap-4" style="overflow: hidden; height: 100%; width: 100%;">
    <div class="flex flex-col gap-4 overflow-auto" style="width: 550px; flex-grow: 0;">
      <h4 class="">Explorer</h4>
      <VaTreeView :nodes="treeData" />
    </div>
    <div class="flex flex-col gap-4" style="overflow: hidden; height: 100%; width: 100%;">
      <MonacoEditor class="h-full" :supportedLanguages="['sql']" language="sql" v-model="query" :metadata="metadata">
        <template #actions>
          <va-button color="primary" @click="run">Run Query</va-button>
        </template>
      </MonacoEditor>
      <div class="h-full">
          <VaTabs v-model="currentTab" color="rgb(33, 150, 243)">
            <template #tabs>
              <VaTab
                v-for="tab in tabs"
                :key="tab.title"
                :name="tab.title"
              >
                {{ tab.title }}
              </VaTab>
            </template>
            <div style="padding-top: 4px; height: 100%;">
              <template v-if="currentTab === 'Data'">
                <VaDataTable :items="data" :stickyHeader="true" style="height: 100%;" />
              </template>
              <template v-else-if="currentTab === 'Messages'">
                <div class="flex flex-col" style="width: 100%; height: 100%; overflow: auto; border: 1px solid silver; padding: 0px;">
                  <p
                    v-for="message in messages" :key="message"
                    style="border-bottom: 1px solid silver; padding: 8px;"
                    :style="{
                      color: message.type === 'error' ? '#f00' : message.type === 'success' ? '#0f0' : '#000'
                    }"
                  >
                    {{ message.text }}
                  </p>
                </div>
              </template>
            </div>
          </VaTabs>
      </div>
    </div>
  </div>
</template>
<style lang="css">
.va-tabs__wrapper {
  overflow: visible;
}

.va-tabs__content {
  overflow: hidden;
}
</style>
