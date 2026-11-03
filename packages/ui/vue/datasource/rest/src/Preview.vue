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
import { useTemporaryStore, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables';
import { computed, onBeforeUnmount, ref, shallowRef, watch, type Ref } from 'vue';
import { isEmptyAnswer } from './answerState';
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

const props = defineProps<{ dataSource: any }>();

const { t } = useTranslation('datasourceRest');

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
/*
 * Why there is nothing, where there is nothing (#1194).
 *
 * An answer that did not come back, one that came back empty, and one
 * that has not come back yet all drew the same blank pane - and a
 * rejected read drew it silently, with the reason in the console where
 * nobody looking at the screen will find it. The same four states the
 * CSV preview tells apart.
 */
const asked = ref(false);
const failed = ref(false);
const loading = ref(false);

watch(tempStore, async (store) => {
  asked.value = false;
  failed.value = false;
  data.value = null;
  originalData.value = null;
  if (!store) return;

  loading.value = true;
  try {
    /*
     * Both at once, not one after the other.
     *
     * They read the same address, and the connection answers a request
     * that is already on its way with the one in flight - which it can
     * only do while both are. Awaited in turn, the second set off after
     * the first had come back, and the endpoint was asked twice.
     */
    const [narrowed, original] = await Promise.all([
      store.getData('object'),
      store.getOriginalData(),
    ]);
    data.value = narrowed;
    originalData.value = original;
    failed.value = original === null || original === undefined;
  } catch (error) {
    /* A refused read is a thing to be told, not only to be logged. */
    console.warn('the endpoint could not be read:', error);
    failed.value = true;
  } finally {
    loading.value = false;
    asked.value = true;
  }
});

const empty = computed(
  () => asked.value && !failed.value && isEmptyAnswer(originalData.value),
);

const showsTrees = computed(() => !loading.value && !failed.value && !empty.value);

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

/** What is left of a pane once its own padding is taken off. */
function roomIn(pane: HTMLElement): number {
  const box = getComputedStyle(pane);
  const padding = parseFloat(box.paddingTop || '0') + parseFloat(box.paddingBottom || '0');
  return Math.max(120, pane.clientHeight - padding);
}

/*
 * Measured when the pane appears, not when this component mounts.
 *
 * Both panes stand behind a v-if on the store, and the store is built in
 * a mounted hook - so at mount time neither element exists. Measuring
 * there read nothing and observed nothing, and both trees kept the
 * height they had started with: 360 pixels of a window several times
 * that, which is why a JSON answer was drawn in the top third of its
 * pane and the rest stayed empty.
 */
const stops: Array<() => void> = [];

function followHeight(pane: Ref<HTMLElement | undefined>, height: Ref<number>) {
  let watched: HTMLElement | undefined;
  const observer =
    typeof ResizeObserver === 'undefined'
      ? undefined
      : new ResizeObserver(() => {
          if (watched) height.value = roomIn(watched);
        });

  const stop = watch(
    pane,
    (element) => {
      if (watched) observer?.unobserve(watched);
      watched = element;
      if (!element) return;
      height.value = roomIn(element);
      observer?.observe(element);
    },
    { immediate: true, flush: 'post' },
  );

  stops.push(() => {
    stop();
    observer?.disconnect();
  });
}

followHeight(leftPane, leftHeight);
followHeight(rightPane, rightHeight);

onBeforeUnmount(() => stops.forEach((stop) => stop()));
</script>

<template>
  <p v-if="loading" class="preview__note" role="status">{{ t('Preview.loading') }}</p>
  <p v-else-if="failed" class="preview__note" role="alert">{{ t('Preview.failed') }}</p>
  <p v-else-if="empty" class="preview__note" role="status">{{ t('Preview.empty') }}</p>

  <div
    v-else-if="tempStore && showsTrees"
    class="grid grid-cols-2 grid-rows-4 gap-4 overflow-hidden w-full h-full"
  >
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

<style scoped>
.preview__note {
  margin: 0;
  padding: 12px;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
}
</style>
