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
  The workbench frame: topbar; the explorer on the left; the editor over
  the results in the middle; structure and inspector on the right. Every
  edge between them drags, and the sizes are remembered.
-->
<script setup lang="ts">
import { computed, inject, provide, ref, watch } from 'vue'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import type { FunctionEntry } from 'org.eclipse.daanse.board.app.ui.vue.common.xmla'
import './assets/main.css'
import { WORKBENCH } from './state/workbench'
import { EDITORS, createEditors } from './state/editors'
import { MIN_PANE, usePaneSizes } from './state/layout'
import { useMetadataEditing } from './state/editing'
import Topbar from './components/Topbar.vue'
import Splitter from './components/Splitter.vue'
import ExplorerPane from './panes/ExplorerPane.vue'
import EditorPane from './panes/EditorPane.vue'
import BottomPane from './panes/BottomPane.vue'
import StructurePane from './panes/StructurePane.vue'
import ConnectionDialog from './dialogs/ConnectionDialog.vue'
import RowInfoDialog from './dialogs/RowInfoDialog.vue'
import FunctionInfoDialog from './dialogs/FunctionInfoDialog.vue'

const wb = inject(WORKBENCH)!
const editors = createEditors()
provide(EDITORS, editors)
const { t } = useTranslation('workbench')

/* What the editors attach for the cube in use: completion, hover, names in colour. */
const extensions = useMetadataEditing(wb)

const sizes = usePaneSizes()
const clamp = (value: number) => Math.max(MIN_PANE, value)

const connecting = ref(false)
const editingConnection = ref(false)
const inspected = ref<{ title: string; kind: string; row: Record<string, unknown> } | null>(null)
const fn = ref<FunctionEntry | null>(null)
const rowset = ref<{ title: string; rows: Record<string, unknown>[]; fileName: string } | null>(null)

function insert(text: string, caret?: number) {
  const tab = wb.activeTab.value
  if (tab) editors.editorFor(tab).control.value?.insertAtCursor(text, caret)
}

const firstRun = computed(() => !wb.activeId.value)

/*
 * A removed server takes what it answered with it: the row the dialog
 * shows, the rowset, and - by a new parse against no cube - the trees'
 * and the inspector's reading of the names (the results go in the state).
 */
watch(
  () => wb.activeId.value,
  (id, before) => {
    if (id || !before) return
    inspected.value = null
    rowset.value = null
    for (const tab of wb.tabs.value) void editors.editorFor(tab).session.refreshAst()
  },
)
</script>

<template>
  <div class="workbench">
    <Topbar @connect="connecting = true" @edit-connection="editingConnection = true" />

    <div class="workbench__main" :style="{ '--left': `${sizes.left}px`, '--right': `${sizes.right}px`, '--bottom': `${sizes.bottom}px` }">
      <div class="workbench__left">
        <ExplorerPane
          @inspect="entry => (inspected = entry)"
          @function="entry => (fn = entry)"
          @rows="rows => (rowset = rows)"
        />
      </div>
      <Splitter direction="vertical" :label="t('Layout.left')" @resize="d => (sizes.left = clamp(sizes.left + d))" />

      <div class="workbench__center">
        <div class="workbench__editor">
          <div v-if="firstRun" class="welcome">
            <h2>{{ t('Welcome.title') }}</h2>
            <p>{{ t('Welcome.text') }}</p>
            <button type="button" class="welcome__action" @click="wb.open('preset.emondrian.foodmart')">{{ t('Welcome.demo') }}</button>
            <button type="button" class="welcome__action welcome__action--quiet" @click="connecting = true">{{ t('Welcome.own') }}</button>
          </div>
          <EditorPane v-show="!firstRun" :extensions="extensions" />
        </div>
        <!--
          No server, nothing to answer: the start screen has the whole
          column, rather than sharing it with an empty result pane that
          covered its buttons on a short window.
        -->
        <Splitter
          v-show="!firstRun"
          direction="horizontal"
          :label="t('Layout.bottom')"
          @resize="d => (sizes.bottom = clamp(sizes.bottom - d))"
        />
        <div v-show="!firstRun" class="workbench__bottom">
          <BottomPane :rowset="rowset" />
        </div>
      </div>

      <Splitter direction="vertical" :label="t('Layout.right')" @resize="d => (sizes.right = clamp(sizes.right - d))" />
      <div class="workbench__right">
        <StructurePane
          v-model:inspector-height="sizes.inspector"
          @function="entry => (fn = entry)"
          @inspect="entry => (inspected = entry)"
        />
      </div>
    </div>

    <ConnectionDialog v-model="connecting" />
    <ConnectionDialog v-model="editingConnection" :editing="wb.active.value" />
    <RowInfoDialog :entry="inspected" @close="inspected = null" @insert="insert" />
    <FunctionInfoDialog :entry="fn" @close="fn = null" @insert="insert" />
  </div>
</template>

<style scoped>
.workbench {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: var(--color-bg);
  color: var(--color-fg);
  font-family: var(--font-sans);
  font-size: var(--text-base);
}

.workbench__main {
  display: flex;
  flex: 1;
  min-height: 0;
}

.workbench__left {
  width: var(--left);
  flex: none;
  min-width: 0;
  min-height: 0;
  border-right: 1px solid var(--color-divider);
}

.workbench__right {
  width: var(--right);
  flex: none;
  min-width: 0;
  min-height: 0;
}

.workbench__center {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  min-height: 0;
}

.workbench__editor {
  flex: 1;
  min-height: 0;
  overflow: auto;
}

.workbench__bottom {
  height: var(--bottom);
  flex: none;
  min-height: 0;
}

.welcome {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  max-width: 560px;
  margin: 48px auto;
  padding: 0 24px;
}

.welcome h2 {
  margin: 0;
  font-size: var(--text-lg);
}

.welcome p {
  margin: 0;
  color: var(--color-dim);
  line-height: 1.5;
}

.welcome__action {
  padding: 6px 14px;
  border: 1px solid var(--color-accent);
  border-radius: var(--radius-sm);
  background: var(--color-accent);
  color: var(--color-onAccent);
  font: inherit;
  cursor: pointer;
}

.welcome__action--quiet {
  background: none;
  color: var(--color-accent);
}
</style>
