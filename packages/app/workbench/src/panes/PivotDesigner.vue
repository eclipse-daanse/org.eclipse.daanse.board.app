<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<!--
  The Excel-style designer: the board's QueryDesigner - filters, columns,
  rows, pages, chapters and measures, fed from the cube tree by drag and
  drop - over the store a board would use. The MDX it generates is
  previewed here and written into the editor on request or on every change.
-->
<script setup lang="ts">
import { computed, inject, ref, watch } from 'vue'
import { DButton, DCheckbox } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { QueryDesigner } from 'org.eclipse.daanse.board.app.ui.vue.common.xmla'
import { WORKBENCH } from '../state/workbench'
import { EDITORS } from '../state/editors'

const wb = inject(WORKBENCH)!
const editors = inject(EDITORS)!
const { t } = useTranslation('workbench')

const empty = () => ({ filters: [], rows: [], columns: [], measures: [], pages: [], chapters: [] })
const config = ref<Record<string, unknown[]>>(empty())
const mdx = ref('')
const follow = ref(false)
const api = ref<any>(null)

watch(
  () => wb.generation.value,
  async () => {
    config.value = empty()
    mdx.value = ''
    api.value = wb.active.value ? await wb.api().catch(() => null) : null
  },
  { immediate: true },
)

let latest = 0
watch(
  config,
  async value => {
    const store = wb.store.value
    if (!store) return
    const request = ++latest
    await store.setRequestParams(JSON.parse(JSON.stringify(value)))
    const text = await store.getMdxRequest()
    if (request !== latest) return
    mdx.value = String(text ?? '').trim()
    if (follow.value) write()
  },
  { deep: true },
)

const hasFields = computed(() => Object.values(config.value).some(list => (list as unknown[]).length))

function write() {
  const tab = wb.activeTab.value
  if (tab && mdx.value) editors.editorFor(tab).control.value?.setText(`${mdx.value}\n`)
}

function run() {
  write()
  void wb.run(wb.activeTab.value, mdx.value)
}
</script>

<template>
  <div class="designer">
    <p v-if="!wb.store.value" class="designer__empty">{{ t('Designer.noCube') }}</p>
    <template v-else>
      <div class="designer__bar">
        <DButton size="sm" :disabled="!mdx" @click="write">{{ t('Designer.write') }}</DButton>
        <DButton size="sm" intent="primary" :disabled="!mdx" @click="run">{{ t('Designer.run') }}</DButton>
        <DCheckbox v-model="follow" :label="t('Designer.follow')" />
        <DButton size="sm" intent="quiet" :disabled="!hasFields" @click="config = empty()">{{ t('Designer.reset') }}</DButton>
      </div>
      <p class="designer__hint">{{ t('Designer.hint') }}</p>
      <div class="designer__zones">
        <QueryDesigner v-model="(config as any)" :api="api" :catalog="wb.catalog.value" />
      </div>
      <pre v-if="mdx" class="designer__mdx">{{ mdx }}</pre>
    </template>
  </div>
</template>

<style scoped>
.designer {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  overflow: auto;
  font-size: var(--text-sm);
}

.designer__empty,
.designer__hint {
  margin: 6px 10px;
  color: var(--color-dim);
}

.designer__bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border-bottom: 1px solid var(--color-divider);
}

.designer__zones {
  padding: 0 8px;
}

.designer__mdx {
  margin: 8px;
  padding: 8px;
  background: var(--color-bg);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  white-space: pre-wrap;
}
</style>
