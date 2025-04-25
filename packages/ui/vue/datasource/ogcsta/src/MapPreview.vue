/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/
<script setup lang="ts">
import { onMounted, shallowRef, getCurrentInstance, watch, ref, computed } from 'vue'


import { useTemporaryStore } from 'org.eclipse.daanse.board.app.ui.vue.composables';
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

const nonCircular = computed(()=>{
    const cache:any = [];
    return JSON.stringify(data.value, (key, value) => {
        if (typeof value === 'object' && value !== null) {
            // Duplicate reference found, discard key
            if (cache.includes(value)) return;

            // Store value in our collection
            cache.push(value);
        }
        return value;
    }, 2);
})
</script>
<template>

    <div v-if="tempStore && data" style="overflow: hidden; height: 100%;">
      <div class="row-span-4 col-span-1 overflow-auto border border-gray-200 rounded-lg p-4">
        <VueJsonPretty :data="nonCircular" />
      </div>

    </div>
</template>
