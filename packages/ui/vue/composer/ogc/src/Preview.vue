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
import { ref, watch, shallowRef } from 'vue';
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

const props = defineProps<{ dataSource: any }>();
const data = ref(null as any);
const featureCollection = ref(null as any);

const tempStore = shallowRef(null as any)
const settingsRef = ref(props.dataSource);
const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore);

watch(tempStore, async () => {
  featureCollection.value = await tempStore.value.getData('FeatureCollection');
  data.value = featureCollection.value?.features || [];
}, { deep: true });

watch(props.dataSource, () => {
  update();
}, { deep: true });
</script>
<template>
    <div class="grid grid-cols-2 grid-rows-4 gap-4 overflow-auto w-full h-full" v-if="tempStore">
      <VueJsonPretty :data="featureCollection" />
    </div>
    <div v-else>
      <h3>OGC Feature Collection Preview</h3>
    </div>
</template>
