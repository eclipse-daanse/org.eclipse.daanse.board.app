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
  The right pane: the open tab's structure - AST, CST, the visual builder,
  the canonical reprint, the pivot designer - and, below the trees, what
  the selected node is. A selection in a tree moves the caret, and the
  caret selects in both trees, so the two stay on the same node.
-->
<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { DTabs } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import type { FunctionEntry } from 'org.eclipse.daanse.board.app.ui.vue.common.xmla'
import { WORKBENCH } from '../state/workbench'
import { EDITORS } from '../state/editors'
import { readStored, writeStored } from '../state/storage'
import ProvidedTree from '../components/ProvidedTree.vue'
import Inspector from '../components/Inspector.vue'
import Splitter from '../components/Splitter.vue'
import { MIN_PANE } from '../state/layout'
import BuilderView from './BuilderView.vue'
import UnparseView from './UnparseView.vue'
import PivotDesigner from './PivotDesigner.vue'

const props = defineProps<{ inspectorHeight: number }>()
const emit = defineEmits<{
  (event: 'update:inspectorHeight', value: number): void
  (event: 'function', entry: FunctionEntry): void
  (event: 'inspect', entry: { title: string; kind: string; row: Record<string, unknown> }): void
}>()

const wb = inject(WORKBENCH)!
const editors = inject(EDITORS)!
const { t } = useTranslation('workbench')

type Tab = 'ast' | 'cst' | 'builder' | 'unparse' | 'designer'
const tab = ref<Tab>(readStored<Tab>('structureTab', 'ast'))
const tabs = computed(() => [
  { id: 'ast', label: t('Structure.ast') },
  { id: 'cst', label: t('Structure.cst') },
  { id: 'builder', label: t('Structure.builder') },
  { id: 'unparse', label: t('Structure.unparse') },
  { id: 'designer', label: t('Structure.designer') },
])
const choose = (next: string) => {
  tab.value = next as Tab
  writeStored('structureTab', next)
}

/*
 * With no server there is no editor on screen (App.vue shows the welcome),
 * so there is no structure either: the trees and the inspector of a removed
 * server's query went on showing it.
 */
const editor = computed(() => (wb.activeId.value && wb.activeTab.value ? editors.editorFor(wb.activeTab.value) : null))
const model = computed(() => (tab.value === 'cst' ? editor.value?.cst : editor.value?.ast) ?? null)
const showsInspector = computed(() => tab.value === 'ast' || tab.value === 'cst' || tab.value === 'builder')
const activeRow = computed(() => model.value?.activeRow.value ?? null)

function resize(delta: number) {
  emit('update:inspectorHeight', Math.max(MIN_PANE, props.inspectorHeight - delta))
}
</script>

<template>
  <aside class="structure" :aria-label="t('Structure.title')">
    <DTabs :model-value="tab" class="structure__tabs" :tabs="tabs" :label="t('Structure.title')" @update:model-value="choose" />
    <div class="structure__main">
      <template v-if="editor">
        <ProvidedTree
          v-if="tab === 'ast' || tab === 'cst'"
          :key="`${wb.activeTabId.value}:${tab}`"
          :model="tab === 'cst' ? editor.cst : editor.ast"
          :ready="editor.ready.value"
        />
        <BuilderView v-else-if="tab === 'builder'" :key="`b:${wb.activeTabId.value}`" :editor="editor" />
        <UnparseView v-else-if="tab === 'unparse'" :key="`u:${wb.activeTabId.value}`" :editor="editor" />
        <PivotDesigner v-else-if="tab === 'designer'" />
      </template>
    </div>
    <template v-if="showsInspector && editor">
      <Splitter direction="horizontal" :label="t('Layout.inspector')" @resize="resize" />
      <div class="structure__inspector" :style="{ height: `${inspectorHeight}px` }">
        <Inspector
          :row="tab === 'builder' ? (editor.ast.activeRow.value ?? null) : activeRow"
          :text="wb.activeTab.value?.text ?? ''"
          :stale="editor.session.astStale.value"
          @function="entry => emit('function', entry)"
          @inspect="entry => emit('inspect', entry)"
        />
      </div>
    </template>
  </aside>
</template>

<style scoped>
.structure {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  background: var(--color-pane);
  color: var(--color-fg);
}

.structure__tabs {
  flex: none;
  padding: 0 6px;
  border-bottom: 1px solid var(--color-divider);
}

.structure__main {
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

.structure__inspector {
  flex: none;
  min-height: 0;
  overflow: auto;
}
</style>
