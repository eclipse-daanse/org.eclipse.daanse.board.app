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
import { DTable } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { computed, watch, ref, shallowRef } from 'vue';
import {
  useTemporaryStore,
  useTranslation,
} from 'org.eclipse.daanse.board.app.ui.vue.composables';

const props = defineProps<{ dataSource: any }>();

const { t } = useTranslation('datasourceCsv');

const tempStore = shallowRef(null as any);
const settingsRef = ref(props.dataSource);

const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore);
watch(props.dataSource, () => {
  update();
}, { deep: true });

const data = ref(null as unknown as any);

/*
 * Why there is nothing, where there is nothing.
 *
 * The store answers null when the request did not come back, and a table
 * of no rows when what came back held none - and this showed an empty
 * pane for both, and for "not asked yet" as well. Three different things
 * that look the same are three ways to be stuck.
 */
const asked = ref(false);
const failed = ref(false);
/* And a fourth: asked, and the answer not back yet. A connection that
  takes its time looked exactly like one that answered with nothing. */
const loading = ref(false);

/*
 * Watched for being rebuilt, not for being used.
 *
 * `deep` made this fire again whenever the store changed anything inside
 * itself while answering - so every read was two reads, 60ms apart,
 * against the same endpoint. What this is waiting for is a new store.
 */
watch(tempStore, async () => {
  asked.value = false;
  failed.value = false;
  loading.value = true;
  try {
    const answer = await tempStore.value.getData('DataTable');
    data.value = answer;
    failed.value = answer == null;
  } finally {
    loading.value = false;
    asked.value = true;
  }
});

const empty = computed(() => asked.value && !failed.value && !data.value?.items?.length);

</script>
<template>
  <div class="preview">
    <p v-if="loading" class="preview__note" role="status">{{ t('Preview.loading') }}</p>
    <p v-else-if="failed" class="preview__note" role="alert">{{ t('Preview.failed') }}</p>
    <p v-else-if="empty" class="preview__note" role="status">{{ t('Preview.empty') }}</p>
    <DTable v-else-if="data" :items="data.items" />
  </div>
</template>

<style scoped>
.preview {
  overflow: hidden;
  height: 100%;
  width: 100%;
}

.preview__note {
  margin: 0;
  padding: 12px;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
}
</style>
