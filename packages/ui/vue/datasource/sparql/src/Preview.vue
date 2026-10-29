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
 * Two ways of looking at the same endpoint, kept apart on purpose.
 *
 * **Query** is the source's own query and its answer, in YASR - the place
 * to write SPARQL and see what comes back, whatever it is.
 *
 * **Catalogue** reads the endpoint as a DCAT catalogue: datasets and the
 * services they are served by, searched and paged. It asks questions of
 * its own, which is why it is not the same view with another plugin.
 */
import { ref, shallowRef, watch, onMounted } from 'vue'
import Yasr from '@triply/yasr'
import '@triply/yasr/build/yasr.min.css'
import { DTabs } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTemporaryStore, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import Catalogue from './Catalogue.vue'

const props = defineProps<{ dataSource: any }>()

const { t } = useTranslation('datasourceSparql')

const view = ref('query')
const tabs = [
  { id: 'query', label: t('View.query') },
  { id: 'catalogue', label: t('View.catalogue') },
]

const data = ref(null as any)
const tempStore = shallowRef(null as any)
const yasguiResult = ref(null)
const settingsRef = ref(props.dataSource)
const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore)

watch(props.dataSource, () => update(), { deep: true })

/*
 * Built once the query tab is in the document, not on mount: YASR measures
 * the element it is given, and one inside a hidden tab has no size to
 * measure.
 */
let yasr: Yasr | undefined

function mountYasr() {
  if (yasr || !yasguiResult.value) return
  yasr = new Yasr(yasguiResult.value as HTMLElement, {
    plugins: { table: {}, response: {} },
  })
  if (data.value) yasr.setResponse(data.value)
}

onMounted(mountYasr)
watch(view, () => {
  if (view.value === 'query') requestAnimationFrame(mountYasr)
})

watch(tempStore, async () => {
  data.value = await tempStore.value?.getData('sparql')
  if (data.value) {
    mountYasr()
    yasr?.setResponse(data.value)
  }
})
</script>

<template>
  <div class="preview">
    <DTabs v-model="view" :tabs="tabs" :label="t('View.label')" />

    <div class="preview__body">
      <!-- Kept in the document rather than torn down: YASR holds the
        answer and the plugin the person chose, and rebuilding it on every
        visit would throw both away. -->
      <div v-show="view === 'query'" class="preview__yasr" ref="yasguiResult"></div>

      <Catalogue v-if="view === 'catalogue'" :data-source="dataSource" />
    </div>
  </div>
</template>

<style scoped>
.preview {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 0;
}

.preview__body {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  overflow: auto;
}

.preview__yasr {
  width: 100%;
  height: 100%;
}
</style>
