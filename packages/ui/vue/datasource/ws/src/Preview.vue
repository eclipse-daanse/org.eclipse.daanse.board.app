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
import {  watch, ref, shallowRef } from 'vue';
import { useTemporaryStore } from 'org.eclipse.daanse.board.app.ui.vue.composables';

const props = defineProps<{ dataSource: any }>();

const tempStore = shallowRef(null as any)
const settingsRef = ref(props.dataSource);

watch(props.dataSource, () => {
  update();
}, { deep: true });

const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore)

const data = ref(null as unknown as any);

/*
 * Watched for being rebuilt, not for being used.
 *
 * `deep` made this fire again whenever the store changed anything inside
 * itself while answering - so every read was two reads, 60ms apart,
 * against the same endpoint. What this is waiting for is a new store.
 */
watch(tempStore, async () => {
  console.log('tempStore changed', tempStore.value);
  data.value = await tempStore.value.getData('object');

  tempStore.value.subscribe(async () => {
      const req = await tempStore.value.getData('object');
      data.value = req;
    })
});
</script>
<template>
  <div v-if="tempStore && data" style="overflow: hidden; height: 100%;">
    {{ data }}
  </div>
</template>
