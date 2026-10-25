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
  The left pane: the cube in use (the board's own metadata tree), the
  server behind it (every Discover rowset it declares) and its functions.
  A name double-clicked or dropped goes into the editor; a row clicked is
  shown with every column it has.
-->
<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { DTabs } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { DiscoverExplorer, FunctionBrowser, MetadataTree, type FunctionEntry } from 'org.eclipse.daanse.board.app.ui.vue.common.xmla'
import { WORKBENCH } from '../state/workbench'
import { EDITORS } from '../state/editors'
import MetadataSearch from '../components/MetadataSearch.vue'

const emit = defineEmits<{
  (event: 'inspect', entry: { title: string; kind: string; row: Record<string, unknown> }): void
  (event: 'function', entry: FunctionEntry): void
  (event: 'rows', rows: { title: string; rows: Record<string, unknown>[]; fileName: string }): void
  (event: 'members', level: Record<string, unknown>): void
}>()

const wb = inject(WORKBENCH)!
const editors = inject(EDITORS)!
const { t } = useTranslation('workbench')

const tab = ref<'cube' | 'server' | 'functions'>('cube')
const tabs = computed(() => [
  { id: 'cube', label: t('Explorer.cube') },
  { id: 'server', label: t('Explorer.server') },
  { id: 'functions', label: t('Explorer.functions'), count: wb.metadata.value.functions.length || undefined },
])

/* The tree starts over for another cube; counted, since the store's metadata is circular. */
const treeKey = computed(() => `${wb.generation.value}:${wb.metadataStore.value ? 1 : 0}`)

function insert(text: string, caret?: number) {
  const current = wb.activeTab.value
  if (current) editors.editorFor(current).control.value?.insertAtCursor(text, caret)
}

function inspectNode(node: any) {
  const row = node?.originalItem ?? node?.__MDSchemaMember
  if (row && typeof row === 'object') emit('inspect', { title: String(node.caption ?? ''), kind: kindOf(node), row })
}

function kindOf(node: any): string {
  const row = node?.originalItem ?? {}
  if (row.MEASURE_UNIQUE_NAME) return 'measure'
  if (row.LEVEL_UNIQUE_NAME && !row.MEMBER_UNIQUE_NAME) return 'level'
  if (row.HIERARCHY_UNIQUE_NAME && !row.LEVEL_UNIQUE_NAME) return 'hierarchy'
  if (row.SET_NAME) return 'set'
  if (row.DIMENSION_UNIQUE_NAME && !row.HIERARCHY_UNIQUE_NAME) return 'dimension'
  return 'member'
}

const serverVersion = computed(() => (wb.activeId.value ? wb.connections.value.findIndex(c => c.uid === wb.activeId.value) + 1 : 0) * 1000 + (wb.catalogs.value.length ? 1 : 0))
</script>

<template>
  <aside class="explorer-pane" :aria-label="t('Explorer.title')">
    <DTabs v-model="tab" class="explorer-pane__tabs" :tabs="tabs" :label="t('Explorer.title')" />

    <div v-show="tab === 'cube'" class="explorer-pane__body">
      <template v-if="wb.cube.value">
        <MetadataSearch @insert="insert" @inspect="entry => emit('inspect', entry)" />
        <div class="explorer-pane__tree">
          <MetadataTree
            v-if="wb.metadataStore.value"
            :key="treeKey"
            :metadata="wb.metadataStore.value"
            @insert="(name: string) => insert(name)"
            @inspect="inspectNode"
          />
          <p v-else class="explorer-pane__empty">{{ t('Explorer.loading') }}</p>
        </div>
      </template>
      <p v-else class="explorer-pane__empty">{{ t('Explorer.noCube') }}</p>
    </div>

    <div v-show="tab === 'server'" class="explorer-pane__body">
      <DiscoverExplorer
        v-if="wb.active.value && wb.catalogs.value.length"
        :discover="wb.discover"
        :catalog="wb.catalog.value"
        :cube="wb.cube.value"
        :version="serverVersion"
        @use-cube="(catalog: string, cube: string) => (catalog === wb.catalog.value ? wb.useCube(cube) : wb.useCatalog(catalog, cube))"
        @show-rows="(rows: any) => emit('rows', rows)"
        @inspect="(entry: any) => emit('inspect', entry)"
      />
      <p v-else class="explorer-pane__empty">{{ t('Explorer.noServer') }}</p>
    </div>

    <div v-show="tab === 'functions'" class="explorer-pane__body">
      <FunctionBrowser :functions="wb.metadata.value.functions" @info="(entry: FunctionEntry) => emit('function', entry)" @insert="insert" />
    </div>
  </aside>
</template>

<style scoped>
.explorer-pane {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  background: var(--color-pane);
  color: var(--color-fg);
}

.explorer-pane__tabs {
  flex: none;
  padding: 0 6px;
}

.explorer-pane__body {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
}

.explorer-pane__tree {
  flex: 1;
  min-height: 0;
  overflow: auto;
}

/* The tree's own heading repeats the tab's name. */
.explorer-pane__tree :deep(.area-header) {
  display: none;
}

.explorer-pane__empty {
  margin: 12px;
  color: var(--color-dim);
  font-size: var(--text-sm);
}
</style>
