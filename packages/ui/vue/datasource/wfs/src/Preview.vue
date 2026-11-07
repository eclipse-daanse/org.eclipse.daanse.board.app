<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0
Contributors:
    Smart City Jena
-->
<script setup lang="ts">
/**
 * What a WFS data source answers (#1282): its features on a map, how many,
 * and why there are none where there are none.
 */
import { computed, ref, shallowRef, watch } from 'vue'
import { useTemporaryStore, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { GeoFeatureMap } from 'org.eclipse.daanse.board.app.ui.vue.common.map'

const props = defineProps<{ dataSource: any }>()
const { t } = useTranslation('datasourceWfs')
const tempStore = shallowRef(null as any)
const settingsRef = ref(props.dataSource)
const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore)
watch(props.dataSource, () => update(), { deep: true })

const data = shallowRef<any>(null)
const loading = ref(false)
const failure = ref('')

/* Watched for being rebuilt: a new store is a new request. */
watch(tempStore, async () => {
  if (!tempStore.value) return
  loading.value = true
  failure.value = ''
  try {
    data.value = await tempStore.value.getData('geojson')
    const why = tempStore.value.lastFailure
    if (why) failure.value = why.status ? `${why.status} ${why.message}` : why.message
  } finally {
    loading.value = false
  }
})

const count = computed(() => data.value?.features?.length ?? 0)
</script>

<template>
  <div class="wfs-preview">
    <p v-if="failure" class="wfs-preview__error">{{ t('Preview.failed', { message: failure }) }}</p>
    <p v-else-if="!loading && data" class="wfs-preview__count">{{ t('Preview.count', { count }) }}</p>
    <GeoFeatureMap :data="data" :loading="loading" />
  </div>
</template>

<style scoped>
.wfs-preview {
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  min-height: 300px;
}

.wfs-preview__error {
  color: var(--color-err);
}

.wfs-preview__count {
  margin: 0;
  color: var(--color-dim);
}
</style>
