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
import { ref, watch, toRef, shallowRef } from 'vue';
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

const props = defineProps<{ dataSource: any }>();

const data = ref(null as any);
const originalData = ref(null as any);

console.log(props.dataSource);
watch(props.dataSource, () => {
  update();
}, { deep: true });

const tempStore = shallowRef(null as any)
const settingsRef = ref(props.dataSource);
const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore);

watch(tempStore, async () => {
  console.log('tempStore changed', tempStore.value);
  data.value = await tempStore.value.getData('object');
  originalData.value = await tempStore.value.getOriginalData();
}, { deep: true });

// const selectedFilter = ref("");
</script>

<template>
  <div class="grid grid-cols-2 grid-rows-4 gap-4 overflow-hidden w-full h-full" v-if="tempStore">
    <!-- Commented out filters section
    <div class="flex col-span-2 row-span-1 border border-gray-200 rounded-lg p-4">
      <div class="flex-1">
        <VaInput v-model="props.dataSource.config.selectedJSONValue" label="Selected Field"/>
      </div>
      <div class="flex-1">
        <VaSelect class="ml-2" v-model="selectedFilter" label="Filters" :options="['filter1', 'filter2', 'filter3']" />
        <VaButton class="ml-2 mt-4">Add filter</VaButton>
      </div>
    </div>
    -->
    <div class="row-span-4 col-span-1 overflow-auto border border-gray-200 rounded-lg p-4">
      <VueJsonPretty :data="originalData" v-model:selectedValue="props.dataSource.config.selectedJSONValue"
        showSelectController highlightSelectedNode collapsedOnClickBrackets selectableType="single" editable />
    </div>
    <div v-if="!data" class="row-span-4 col-span-1 overflow-auto bg-gray-300 border border-gray-200 rounded-lg p-4">
    </div>
    <div v-else class="row-span-4 col-span-1 overflow-auto border border-gray-200 rounded-lg p-4">
      <VueJsonPretty :data="data" />
    </div>
  </div>
</template>
