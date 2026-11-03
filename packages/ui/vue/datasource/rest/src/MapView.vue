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
 * The same answer, on a map.
 *
 * A catalogue serving a GeoJSON distribution is read through this source
 * type, and its tree view shows a thousand coordinate pairs - the one view
 * of geography that tells nobody anything (#1187).
 *
 * Asked for exactly as the map widget asks for it, `getData('object')`, so
 * what is previewed here is what a widget made from this source will draw.
 * The view is offered whether or not the answer holds geometry; where it
 * does not, the map says so, which is itself worth knowing.
 */
import { onBeforeUnmount, ref, shallowRef, watch } from 'vue'
import { useTemporaryStore } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { GeoFeatureMap } from 'org.eclipse.daanse.board.app.ui.vue.common.map'

const props = defineProps<{ dataSource: any }>()

/* Shallow: the answer is read and thrown away, never written into. */
const data = shallowRef(null as any)
const loading = ref(true)

const tempStore = shallowRef(null as any)
const settingsRef = ref(props.dataSource)
const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore)

watch(
  props.dataSource,
  () => {
    update()
  },
  { deep: true },
)

/* Watched for being rebuilt, not for being used - a changed store is a
  new answer, a store changing something inside itself is not. */
let subscription: (() => void) | undefined

watch(tempStore, async (store) => {
  subscription?.()
  subscription = undefined
  if (!store) return

  loading.value = true
  try {
    data.value = await store.getData('object')
  } finally {
    loading.value = false
  }

  if (typeof store.subscribe === 'function') {
    subscription = store.subscribe(async () => {
      data.value = await store.getData('object')
    })
  }
})

onBeforeUnmount(() => subscription?.())
</script>

<template>
  <GeoFeatureMap :data="data" :loading="loading" />
</template>
