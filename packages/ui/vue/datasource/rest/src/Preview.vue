<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<!--
  What the endpoint answers, and what the chosen path picks out of it.

  Both are trees of the same answer, which is why they are side by side:
  one points at a value, the other shows what pointing there yields.

  Measured on 1500 records, 0.23 MB: the two trees stood after 15.8
  seconds and left 54,008 nodes in the document, and scrolling stuttered
  for the rest of the visit. A preview is a look at the data, and a
  quarter of a megabyte is a small file.
-->

<script setup lang="ts">
import { useTemporaryStore } from 'org.eclipse.daanse.board.app.ui.vue.composables';
import { onBeforeUnmount, onMounted, ref, shallowRef, watch } from 'vue';
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

const props = defineProps<{ dataSource: any }>();

/*
 * Shallow, both of them.
 *
 * A plain ref makes the whole answer reactive - every object and every
 * array in it gets a proxy, and every read of every value goes through
 * one. Nothing here writes into the answer; it is shown and thrown away.
 */
const data = shallowRef(null as any);
const originalData = shallowRef(null as any);

const tempStore = shallowRef(null as any)
const settingsRef = ref(props.dataSource);
const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore);

watch(props.dataSource, () => {
  update();
}, { deep: true });

/*
 * Watched for being rebuilt, not for being used.
 *
 * `deep` made this fire again whenever the store changed anything inside
 * itself while answering - so every read was two reads, 60ms apart,
 * against the same endpoint. What this is waiting for is a new store.
 */
watch(tempStore, async () => {
  data.value = await tempStore.value.getData('object');
  originalData.value = await tempStore.value.getOriginalData();
});

/*
 * How tall a tree may draw itself.
 *
 * Virtual scrolling needs a number, not a stretched box: it draws the
 * rows that fit in that many pixels and no others. Measured from the
 * pane it sits in, so the two halves keep following the window.
 */
const leftPane = ref<HTMLElement | undefined>();
const rightPane = ref<HTMLElement | undefined>();
const leftHeight = ref(360);
const rightHeight = ref(360);

let watcher: ResizeObserver | undefined;

onMounted(() => {
  const measure = () => {
    if (leftPane.value) leftHeight.value = Math.max(120, leftPane.value.clientHeight - 16);
    if (rightPane.value) rightHeight.value = Math.max(120, rightPane.value.clientHeight - 16);
  };
  measure();
  watcher = new ResizeObserver(measure);
  if (leftPane.value) watcher.observe(leftPane.value);
  if (rightPane.value) watcher.observe(rightPane.value);
});

onBeforeUnmount(() => watcher?.disconnect());
</script>

<template>
  <div class="grid grid-cols-2 grid-rows-4 gap-4 overflow-hidden w-full h-full" v-if="tempStore">
    <!--
      Opened two levels deep, and drawn a screenful at a time. A tree
      that renders every node of every record hands the browser tens of
      thousands of them before anyone has looked at one.
    -->
    <div ref="leftPane" class="row-span-4 col-span-1 overflow-hidden border border-gray-200 rounded-lg p-4">
      <VueJsonPretty :data="originalData" v-model:selectedValue="props.dataSource.config.selectedJSONValue"
        showSelectController highlightSelectedNode collapsedOnClickBrackets selectableType="single" editable
        :deep="2" virtual :height="leftHeight" />
    </div>
    <div v-if="!data" class="row-span-4 col-span-1 overflow-auto bg-gray-300 border border-gray-200 rounded-lg p-4">
    </div>
    <div v-else ref="rightPane" class="row-span-4 col-span-1 overflow-hidden border border-gray-200 rounded-lg p-4">
      <VueJsonPretty :data="data" :deep="2" virtual :height="rightHeight" />
    </div>
  </div>
</template>
