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

watch(props.dataSource, () => {
  update();
}, { deep: true });

const data = ref(null as unknown as any);
const emit = defineEmits(['updateConfig']);

watch(tempStore, async () => {
  data.value = await tempStore.value.getData('DataTable');
}, { deep: true });

const query = ref(props.dataSource.config.sql || '');


watch(() => query, async () => {
  emit('updateConfig', {
    ...props.dataSource.config,
    sql: query.value,
  });

  data.value = await tempStore.value.getData('DataTable');
}, { deep: true });

</script>
<template>
  <div v-if="tempStore" style="overflow: hidden; height: 100%; width: 100%;" class="flex flex-col gap-4">
    <MonacoEditor class="h-full" :supportedLanguages="[ 'sql' ]" language="sql" v-model="query" />
    <div class="h-full">
        <VaDataTable v-if="data" :items="data.items" :stickyHeader="true" style="height: 100%;" />
    </div>
  </div>
</template>
