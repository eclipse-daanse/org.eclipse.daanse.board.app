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
import { DButton, DTable, DTabs } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import SchemaTree from './SchemaTree.vue'
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

  metadata.value = transformToSchema(treeData.value);
  messages.value.push({ type: 'success', text: `Schema gelesen um ${(new Date()).toLocaleTimeString()}` });
}, { deep: true });


watch(() => query, async () => {
  emit('updateConfig', {
    ...props.dataSource.config,
    sql: query.value,
  });
}, { deep: true });

const tabs = [
  { id: 'data', label: 'Ergebnis' },
  { id: 'messages', label: 'Meldungen' },
];
const currentTab = ref(tabs[0].id);

const run = async () => {
  tempStore.value.sql = query.value;
  try {
    const startTime = new Date();
    data.value = (await tempStore.value.getData('DataTable')).items;
    const now = new Date();
    messages.value.push({ type: 'success', text: `${data.value.length} Zeilen in ${(now.getTime() - startTime.getTime())} ms.` });
  } catch (e: any) {
    messages.value.push({ type: 'error', text: `Abfrage fehlgeschlagen: ${e.message}` });
  }
};
</script>
<template>
  <div class="explorer">
    <aside class="explorer__schema">
      <h4 class="explorer__title">Schema</h4>
      <SchemaTree :nodes="treeData" />
    </aside>

    <div class="explorer__work">
      <MonacoEditor
        class="h-full"
        :supportedLanguages="['sql']"
        language="sql"
        v-model="query"
        :metadata="metadata"
      >
        <template #actions>
          <DButton intent="primary" size="sm" @click="run">Ausführen</DButton>
        </template>
      </MonacoEditor>

      <div class="explorer__result">
        <DTabs v-model="currentTab" :tabs="tabs" label="Ergebnis oder Meldungen" />

        <div class="explorer__pane">
          <DTable v-if="currentTab === 'data'" :items="data" empty="Noch nichts ausgeführt" />

          <ul v-else class="messages">
            <li
              v-for="(message, index) in messages"
              :key="index"
              class="message"
              :style="{ color: message.type === 'error' ? 'var(--color-err)' : 'var(--color-fg)' }"
            >
              {{ message.text }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.explorer {
  display: flex;
  gap: 16px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.explorer__schema {
  width: 320px;
  flex: none;
  overflow: auto;
  border-right: 1px solid var(--color-divider);
  padding-right: 8px;
}

.explorer__title {
  margin: 0 0 6px;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-dim);
}

.explorer__work {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
}

.explorer__result {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
}

.explorer__pane {
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
}

.messages {
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
}

.message {
  padding: 7px 8px;
  border-bottom: 1px solid var(--color-divider);
}
</style>
