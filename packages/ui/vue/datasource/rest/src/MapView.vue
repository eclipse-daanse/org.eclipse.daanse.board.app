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
import { computed, onBeforeUnmount, ref, shallowRef, watch } from 'vue'
import { useTemporaryStore, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { GeoFeatureMap } from 'org.eclipse.daanse.board.app.ui.vue.common.map'
import { isEmptyAnswer } from './answerState'

const props = defineProps<{ dataSource: any }>()

const { t } = useTranslation('datasourceRest')

/* Shallow: the answer is read and thrown away, never written into. */
const data = shallowRef(null as any)

/*
 * The same four states the tree beside it tells apart (#1194).
 *
 * A map with no features on it says nothing about why: whether the
 * endpoint refused, answered emptily, or has not answered yet. The map
 * is for geography; these three are for the person waiting on it.
 */
const asked = ref(false)
const failed = ref(false)
const loading = ref(true)

/* The whole answer, which is what "is there anything" is decided on. */
const answered = shallowRef(null as any)

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

/*
 * Which read is the current one.
 *
 * A store replaced while a read is in flight leaves the old read still
 * running, and it finishes later - writing its answer over the store
 * that replaced it. A subscription makes that ordinary rather than rare:
 * a poll and a rebuild overlap whenever the interval is short. Counted
 * rather than cancelled, because a promise cannot be withdrawn.
 */
let reading = 0

/**
 * One read, with whatever came of it written down.
 *
 * Both halves are asked for: the map draws the narrowed answer, exactly
 * as the map widget does - and whether there is anything at all is
 * decided on the whole one, which is what the tree beside it decides on
 * too (#1194). A selected path matching nothing is a path to fix, not an
 * endpoint that answered emptily, and the two views now say the same
 * thing about the same answer.
 *
 * It costs no second request: the connection answers a read already in
 * flight with the one in flight.
 */
const read = async (store: any) => {
  const mine = ++reading
  try {
    const [narrowed, whole] = await Promise.all([
      store.getData('object'),
      typeof store.getOriginalData === 'function'
        ? store.getOriginalData()
        : store.getData('object'),
    ])
    if (mine !== reading) return
    data.value = narrowed
    failed.value = whole === null || whole === undefined
    answered.value = whole
  } catch (error) {
    if (mine !== reading) return
    /*
     * A read that throws rather than answering null. The stores answer
     * null for an endpoint that refused - this is for the ones that
     * cannot even ask, a missing connection repository among them, and
     * for a rejection inside a subscription, which otherwise has nobody
     * to hand it to at all.
     */
    console.warn('the endpoint could not be read:', error)
    data.value = null
    answered.value = null
    failed.value = true
  } finally {
    if (mine === reading) asked.value = true
  }
}

watch(tempStore, async (store) => {
  subscription?.()
  subscription = undefined

  asked.value = false
  failed.value = false
  data.value = null
  answered.value = null
  if (!store) {
    loading.value = false
    return
  }

  loading.value = true
  try {
    await read(store)
  } finally {
    loading.value = false
  }

  if (typeof store.subscribe === 'function') {
    /* Polling brings a new answer; the same reading, so a later refusal
      is shown rather than thrown into the void. */
    subscription = store.subscribe(() => void read(store))
  }
})

const empty = computed(() => asked.value && !failed.value && isEmptyAnswer(answered.value))

onBeforeUnmount(() => subscription?.())
</script>

<template>
  <p v-if="failed" class="map-view__note" role="alert">{{ t('Preview.failed') }}</p>
  <p v-else-if="empty" class="map-view__note" role="status">{{ t('Preview.empty') }}</p>
  <GeoFeatureMap v-else :data="data" :loading="loading" />
</template>

<style scoped>
.map-view__note {
  margin: 0;
  padding: 12px;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
}
</style>
