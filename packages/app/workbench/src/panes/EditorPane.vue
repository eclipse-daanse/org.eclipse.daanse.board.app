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
  The query tabs and the editor. Every tab keeps its own CodeMirror view
  (hidden, not destroyed, when another tab is in front) against the one MDX
  language server all of them share.
-->
<script setup lang="ts">
import { computed, inject, ref, watch } from 'vue'
import { Prec } from '@codemirror/state'
import { keymap } from '@codemirror/view'
import { DButton, DIcon } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { Editor, toFileUri } from 'org.eclipse.daanse.board.app.ui.vue.common.lsp'
import { getLanguageClient } from 'org.eclipse.daanse.board.app.lib.lsp.core'
import { WORKBENCH, starterQuery, type QueryTab } from '../state/workbench'
import { EDITORS, type EditorControl } from '../state/editors'
import { runnableExamples } from '../state/examples'
import { shareLink } from '../state/share'

const props = defineProps<{ extensions?: unknown[] }>()

const wb = inject(WORKBENCH)!
const editors = inject(EDITORS)!
const { t } = useTranslation('workbench')

const tab = computed(() => wb.activeTab.value)
const running = computed(() => tab.value?.result?.status === 'running')

/*
 * Ctrl+Enter (and Cmd+Enter on a Mac) runs, Escape stops - the keys every
 * SQL console has. Highest precedence: the default keymap binds Mod-Enter
 * to insertBlankLine and would otherwise take the key first.
 */
const run = () => (void wb.run(), true)
const keys = Prec.highest(
  keymap.of([
    { key: 'Mod-Enter', run },
    { key: 'Ctrl-Enter', run },
    // The quick fixes of the problem under the caret, as in VS Code.
    { key: 'Mod-.', run: () => (tab.value ? editors.showFixes(tab.value) : false) },
    { key: 'Escape', run: () => (running.value ? (wb.abort(tab.value), true) : false) },
  ]),
)
const extensions = computed(() => [keys, ...((props.extensions as any[]) ?? [])])

function bind(target: QueryTab, control: unknown) {
  editors.editorFor(target).control.value = (control as EditorControl) ?? null
}

function changed(target: QueryTab, text: string) {
  target.text = text
  editors.editorFor(target).session.scheduleAstRefresh()
}

/* The trees are asked for once the language server is there. */
function started(target: QueryTab) {
  const editor = editors.editorFor(target)
  editor.ready.value = true
  if (wb.cube.value && STARTER.test(target.text) && target.text !== starterQuery(wb.cube.value)) {
    editor.control.value?.setText(starterQuery(wb.cube.value))
  }
  void editor.session.refreshAst()
}

function close(target: QueryTab) {
  wb.closeTab(target.id)
  editors.forget(target.id)
}

/*
 * A tab nobody has typed into follows the cube: its starter query names
 * the cube in use, not the one open when the tab was made.
 */
const STARTER = /^SELECT\n  \{\} ON COLUMNS,\n  \{\} ON ROWS\nFROM \[(?:[^\]]|\]\])*\]\n$/
watch(
  () => wb.cube.value,
  cube => {
    if (!cube) return
    for (const item of wb.tabs.value) {
      if (STARTER.test(item.text)) editors.editorFor(item).control.value?.setText(starterQuery(cube))
    }
  },
)

/* ---- toolbar ------------------------------------------------------ */

const control = computed(() => (tab.value ? editors.editorFor(tab.value).control.value : null))

const examples = computed(() => [
  ...runnableExamples(wb.metadata.value).map(e => ({ id: `run:${e.id}`, label: t(e.label), text: e.text, group: t('Editor.examplesCube') })),
  ...(editors.language.examples ?? []).map(e => ({ id: `lang:${e.id}`, label: e.label, text: e.text, group: t('Editor.examplesGrammar') })),
])
const exampleGroups = computed(() => [...new Set(examples.value.map(e => e.group))])
const example = ref('')
function loadExample(id: string) {
  const chosen = examples.value.find(e => e.id === id)
  example.value = ''
  if (!chosen) return
  // Into the open tab, as one undoable step - not a new tab per click.
  control.value?.setText(chosen.text)
}

async function format() {
  const current = tab.value
  if (!current) return
  const client = getLanguageClient(editors.language.id)
  const view = control.value?.view()
  if (!client || !view) return
  try {
    client.sync()
    const edits = await client.request<any, any[] | null>('textDocument/formatting', {
      textDocument: { uri: toFileUri(current.uri) },
      options: { tabSize: 2, insertSpaces: true },
    })
    if (!edits?.length) {
      wb.notify('Notice.formatNothing')
      return
    }
    const doc = view.state.doc
    const offset = (p: { line: number; character: number }) => Math.min(doc.line(p.line + 1).from + p.character, doc.length)
    control.value?.applyEdits(edits.map(e => ({ from: offset(e.range.start), to: offset(e.range.end), insert: e.newText })))
  } catch {
    wb.notify('Notice.formatUnavailable', 'error')
  }
}

async function share() {
  const current = tab.value
  if (!current) return
  const link = shareLink(window.location, current.text, {
    url: wb.active.value?.url,
    catalog: wb.catalog.value,
    cube: wb.cube.value,
  })
  try {
    await navigator.clipboard.writeText(link)
    wb.notify('Notice.shared')
  } catch {
    wb.notify('Notice.sharedNoClipboard')
  }
}
</script>

<template>
  <section class="editor-pane" :aria-label="t('Editor.title')">
    <div class="tabs" role="tablist">
      <div
        v-for="item in wb.tabs.value"
        :key="item.id"
        class="tab"
        :class="{ 'tab--active': item.id === wb.activeTabId.value }"
        role="tab"
        :aria-selected="item.id === wb.activeTabId.value"
        tabindex="0"
        @click="wb.activeTabId.value = item.id"
        @keydown.enter="wb.activeTabId.value = item.id"
      >
        <span class="tab__dot" :class="item.result ? `tab__dot--${item.result.status}` : ''" aria-hidden="true" />
        <span class="tab__title">{{ t('Editor.tab', { name: item.title }) }}</span>
        <button
          v-if="wb.tabs.value.length > 1"
          type="button"
          class="tab__close"
          :aria-label="t('Editor.closeTab')"
          @click.stop="close(item)"
        >×</button>
      </div>
      <button type="button" class="tab tab--add" :title="t('Editor.newTab')" @click="wb.addTab()">＋</button>
    </div>

    <div class="toolbar">
      <DButton v-if="!running" size="sm" intent="primary" :title="t('Editor.runHint')" @click="wb.run()">
        <DIcon name="play_arrow" size="sm" /> {{ t('Editor.run') }}
      </DButton>
      <DButton v-else size="sm" intent="danger" :title="t('Editor.stopHint')" @click="wb.abort(tab)">
        <DIcon name="stop" size="sm" /> {{ t('Editor.stop') }}
      </DButton>
      <DButton size="sm" intent="quiet" :title="t('Editor.formatHint')" @click="format">
        <DIcon name="format_align_left" size="sm" /> {{ t('Editor.format') }}
      </DButton>
      <DButton size="sm" intent="quiet" :title="t('Editor.shareHint')" @click="share">
        <DIcon name="link" size="sm" /> {{ t('Editor.share') }}
      </DButton>
      <select v-model="example" class="examples" :aria-label="t('Editor.examples')" @change="loadExample(example)">
        <option value="">{{ t('Editor.examples') }}</option>
        <optgroup v-for="group in exampleGroups" :key="group" :label="group">
          <option v-for="e in examples.filter(x => x.group === group)" :key="e.id" :value="e.id">{{ e.label }}</option>
        </optgroup>
      </select>
      <span class="toolbar__spacer" />
      <slot name="toolbar" />
    </div>

    <div class="editors">
      <div v-for="item in wb.tabs.value" v-show="item.id === wb.activeTabId.value" :key="item.id" class="editors__one">
        <Editor
          :ref="(c: unknown) => bind(item, c)"
          :language="editors.language"
          :uri="item.uri"
          :text="item.text"
          :extensions="extensions"
          @ready="started(item)"
          @update="(view: any) => editors.editorFor(item).onUpdate(view)"
          @text-changed="(text: string) => changed(item, text)"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.editor-pane {
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  height: 100%;
  background: var(--color-bg);
}

.tabs {
  display: flex;
  align-items: stretch;
  height: var(--spacing-panelHeader, 30px);
  background: var(--color-pane);
  border-bottom: 1px solid var(--color-divider);
  overflow-x: auto;
  flex: none;
}

.tab {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 10px;
  border: 0;
  border-right: 1px solid var(--color-divider);
  background: none;
  color: var(--color-dim);
  font: inherit;
  font-size: var(--text-sm);
  cursor: pointer;
  white-space: nowrap;
}

.tab--active {
  background: var(--color-bg);
  color: var(--color-fg);
  box-shadow: inset 0 2px 0 var(--color-accent);
}

.tab--add {
  color: var(--color-dim);
}

.tab__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-outline);
}

.tab__dot--running {
  background: var(--color-warn);
}

.tab__dot--done {
  background: var(--color-ok);
}

.tab__dot--error {
  background: var(--color-err);
}

.tab__close {
  border: 0;
  background: none;
  color: inherit;
  cursor: pointer;
  padding: 0 2px;
  font-size: 14px;
}

.toolbar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-bottom: 1px solid var(--color-divider);
  background: var(--color-pane);
  flex: none;
}

.toolbar__spacer {
  flex: 1;
}

.examples {
  font: inherit;
  font-size: var(--text-sm);
  padding: 2px 6px;
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm);
  background: var(--color-raised);
  color: var(--color-fg);
}

.editors {
  position: relative;
  flex: 1;
  min-height: 0;
}

.editors__one {
  position: absolute;
  inset: 0;
}
</style>
