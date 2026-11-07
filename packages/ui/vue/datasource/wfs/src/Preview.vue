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
import { computed, onUnmounted, ref, shallowRef, watch } from 'vue'
import { useTemporaryStore, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { GeoFeatureMap } from 'org.eclipse.daanse.board.app.ui.vue.common.map'
import { VIEWPORT_EVENT, acceptsEvent, type Box } from 'org.eclipse.daanse.board.app.lib.datasource.base'
import { boxOf } from 'org.eclipse.daanse.board.app.lib.datasource.wfs'

const props = defineProps<{ dataSource: any }>()
const { t } = useTranslation('datasourceWfs')
const tempStore = shallowRef(null as any)
const settingsRef = ref(props.dataSource)
const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore)
watch(props.dataSource, () => update(), { deep: true })

const data = shallowRef<any>(null)
const loading = ref(false)
const failure = ref('')

/*
 * The preview is a reader like a map (#1301): a store that reads by the
 * area in view - a WFS with the extent viewport - is sent the box of the
 * configuration as the view of the preview, and the view is taken back when
 * the preview closes or its store is rebuilt. Without a box it shows what
 * such a store has without a view: nothing.
 */
const sender = `wfs-preview-${Math.random().toString(36).slice(2, 10)}`
/* The box is what the preview shows, so its tiles are read at any minZoom. */
const PREVIEW_ZOOM = 22
async function tellView(store: any, bbox: Box | null) {
  if (!store || !acceptsEvent(store, VIEWPORT_EVENT)) return
  await store.callEvent(VIEWPORT_EVENT, { bbox, zoom: PREVIEW_ZOOM, sender })
}

/* Watched for being rebuilt: a new store is a new request. */
watch(tempStore, async (store, before) => {
  if (before && before !== store) void tellView(before, null)
  if (!store) return
  loading.value = true
  failure.value = ''
  try {
    const box = boxOf(props.dataSource?.config?.bbox)
    if (box) await tellView(store, box)
    data.value = await store.getData('geojson')
    const why = store.lastFailure
    if (why) failure.value = why.status ? `${why.status} ${why.message}` : why.message
  } finally {
    loading.value = false
  }
})

onUnmounted(() => void tellView(tempStore.value, null))

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
