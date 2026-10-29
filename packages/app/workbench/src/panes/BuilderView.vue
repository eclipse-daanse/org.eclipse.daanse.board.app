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
  The visual builder over the text: WITH, every axis, the slicer, FROM with
  its subcubes and the cell properties, as zones of chips. Nothing is held
  here - the zones are read from the parse tree, and every action is one
  text edit (one undo step) after which the tree, and so the zones, follow.
  Names from the cube tree drop onto a zone; chips drag between zones and
  before one another.
-->
<script setup lang="ts">
import { computed, inject, onMounted, ref, shallowRef, watch } from 'vue'
import { DButton } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import {
  addAxis,
  addItem,
  addToSlicer,
  addWith,
  crossJoin,
  moveItem,
  readDocument,
  removeAxis,
  removeFromSlicer,
  removeItem,
  removeSpan,
  removeWith,
  reorder,
  swapAxes,
  toggleNonEmpty,
  unwrapSubcube,
  wrapSubcube,
  type SelectModel,
  type SetModel,
  type Span,
  type TextEdit,
} from 'org.eclipse.daanse.board.app.lib.lsp.lang.mdx'
import { isTabularStatement } from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import { WORKBENCH } from '../state/workbench'
import type { TabEditor } from '../state/editors'
import { entriesOf } from '../state/metadata'
import WithEditor from '../dialogs/WithEditor.vue'

// i18n-keys: workbench:Builder.kind.*
const props = defineProps<{ editor: TabEditor }>()
const wb = inject(WORKBENCH)!
const { t } = useTranslation('workbench')

const text = computed(() => wb.activeTab.value?.text ?? '')
/* A schema rowset or a drillthrough is a statement, but not a cube SELECT the zones describe. */
const tabular = computed(() => isTabularStatement(text.value))
const root = computed(() => props.editor.session.ast.value?.root)
const parserErrors = computed(() => props.editor.session.ast.value?.parserErrors ?? 0)
/*
 * The tree describes the text it was parsed from: while the text is ahead
 * of it, the zones keep the last model, whose offsets still match nothing
 * newer - edits wait for the next parse.
 */
const select = shallowRef<SelectModel | null>(null)
watch(
  [root, () => props.editor.session.astStale.value],
  ([tree, stale]) => {
    if (!stale) select.value = readDocument(tree, text.value)
  },
  { immediate: true },
)
// Opened before any tree was asked for: ask, rather than call the tab not a SELECT.
onMounted(() => {
  if (!props.editor.session.ast.value && props.editor.ready.value) void props.editor.session.refreshAst()
})

/* Subcubes nest: the outermost SELECT first, each FROM's SELECT below. */
const levels = computed(() => {
  const list: SelectModel[] = []
  for (let s: SelectModel | null | undefined = select.value; s; s = s.inner) list.push(s)
  return list
})

function apply(edits: TextEdit[]) {
  if (!edits.length || props.editor.session.astStale.value) return
  props.editor.control.value?.applyEdits(edits)
  /*
   * The zones are the tree's: left to the typing debounce, they showed the
   * text before the edit for half a second. An edit from here is complete,
   * so the tree is asked for at once.
   */
  void props.editor.session.refreshAst()
}

function show(span: Span) {
  props.editor.control.value?.select(span.from, span.to)
}

/* ---- dragging ------------------------------------------------------ */

type Zone = { level: number; kind: 'axis' | 'slicer'; index: number }
const CHIP = 'application/x-mdx-chip'

function setOf(zone: Zone): SetModel | undefined {
  const s = levels.value[zone.level]
  return zone.kind === 'axis' ? s?.axes[zone.index] : s?.slicer
}

function dragChip(event: DragEvent, zone: Zone, item: number) {
  event.dataTransfer?.setData(CHIP, JSON.stringify({ zone, item }))
  event.dataTransfer?.setData('text/plain', setOf(zone)?.items[item]?.text ?? '')
}

const pending = ref<{ zone: Zone; fragment: string } | null>(null)

function drop(event: DragEvent, zone: Zone, before?: number) {
  event.preventDefault()
  const chip = event.dataTransfer?.getData(CHIP)
  const target = setOf(zone)
  if (chip) {
    const { zone: from, item } = JSON.parse(chip) as { zone: Zone; item: number }
    const source = setOf(from)
    if (!source) return
    if (from.level === zone.level && from.kind === zone.kind && from.index === zone.index) {
      if (before !== undefined) apply(reorder(source, item, before))
      return
    }
    if (zone.kind === 'slicer') {
      const fragment = source.items[item]?.text
      if (fragment) apply([...removeItem(source, item), ...addToSlicer(levels.value[zone.level], fragment)])
    } else if (target) {
      apply(moveItem(source, item, target))
    }
    return
  }
  const fragment = event.dataTransfer?.getData('text/plain')?.trim()
  if (!fragment) return
  add(zone, fragment, before)
}

function add(zone: Zone, fragment: string, before?: number) {
  const s = levels.value[zone.level]
  if (zone.kind === 'slicer') return apply(addToSlicer(s, fragment))
  const axis = s.axes[zone.index]
  if (!axis) return
  if (axis.shape === 'expression' && axis.expression.text.trim() !== '{}') {
    // A set and a new name: together as a set, or crossed? The person says.
    pending.value = { zone, fragment }
    return
  }
  apply(addItem(axis, fragment, before))
}

function resolvePending(how: 'set' | 'cross') {
  const p = pending.value
  pending.value = null
  if (!p) return
  const axis = levels.value[p.zone.level]?.axes[p.zone.index]
  if (axis) apply(how === 'set' ? addItem(axis, p.fragment) : crossJoin(axis, p.fragment))
}

/* ---- adding by name: a field with the cube's names to pick from ---- */

/* autofocus only works on page load; a field Vue inserts later is focused here. */
const vFocus = { mounted: (el: HTMLElement) => el.focus() }

const adding = ref<string | null>(null)
const fragment = ref('')
const names = computed(() => entriesOf(wb.metadata.value).slice(0, 5000))
function startAdding(key: string) {
  adding.value = key
  fragment.value = ''
}
function finishAdding(zone: Zone | 'subcube') {
  const value = fragment.value.trim()
  adding.value = null
  if (!value) return
  if (zone === 'subcube') apply(wrapSubcube(levels.value[levels.value.length - 1], value.startsWith('{') ? value : `{${value}}`))
  else add(zone, value)
}

/* ---- calculations ---------------------------------------------------- */

const withEditor = ref<{ level: number; index?: number } | null>(null)
function saveWith(definition: string) {
  const target = withEditor.value
  withEditor.value = null
  if (!target) return
  const s = levels.value[target.level]
  if (target.index === undefined) apply(addWith(s, definition))
  else {
    const entry = s.with[target.index]
    if (entry) apply([{ from: entry.span.from, to: entry.span.to, insert: definition }])
  }
}

const AXIS_LABELS: Record<string, string> = { COLUMNS: 'COLUMNS', ROWS: 'ROWS' }
const twoAxes = (s: SelectModel) => s.axes.length >= 2
</script>

<template>
  <div class="builder">
    <p v-if="tabular" class="builder__note">{{ t('Builder.tabular') }}</p>
    <p v-else-if="!select && parserErrors" class="builder__note">{{ t('Builder.errors') }}</p>
    <p v-else-if="!select" class="builder__note">{{ t('Builder.noSelect') }}</p>

    <template v-else>
      <div class="builder__bar">
        <DButton size="sm" @click="withEditor = { level: 0 }">＋ {{ t('Builder.calculation') }}</DButton>
        <DButton size="sm" :disabled="!twoAxes(select)" @click="apply(swapAxes(select.axes[0], select.axes[1]))">⇅ {{ t('Builder.swap') }}</DButton>
        <span v-if="parserErrors" class="builder__stale">{{ t('Builder.partial') }}</span>
      </div>

      <section v-for="(level, depth) in levels" :key="depth" class="level" :class="{ 'level--inner': depth > 0 }">
        <header v-if="depth > 0" class="level__head">
          ⧉ {{ t('Builder.subcube', { depth }) }}
          <DButton size="sm" intent="quiet" :title="t('Builder.unwrap')" @click="apply(unwrapSubcube(levels[depth - 1]))">×</DButton>
        </header>

        <div v-if="level.with.length" class="zone">
          <span class="zone__title">WITH</span>
          <span v-for="(entry, i) in level.with" :key="i" class="chip chip--with" @click="show(entry.span)">
            <span class="chip__badge">{{ t(`Builder.kind.${entry.kind}`) }}</span>
            {{ entry.name || entry.span.text.slice(0, 40) }}
            <button type="button" class="chip__action" :title="t('Builder.edit')" @click.stop="withEditor = { level: depth, index: i }">✎</button>
            <button type="button" class="chip__action" :title="t('Builder.remove')" @click.stop="apply(removeWith(level, i, text))">×</button>
          </span>
        </div>

        <div
          v-for="(axis, a) in level.axes"
          :key="`${depth}.${a}`"
          class="zone"
          @dragover.prevent
          @drop="drop($event, { level: depth, kind: 'axis', index: a })"
        >
          <span class="zone__title" @click="show(axis.clause)">ON {{ AXIS_LABELS[axis.name] ?? axis.name }}</span>
          <label class="zone__toggle">
            <input type="checkbox" :checked="axis.nonEmpty" @change="apply(toggleNonEmpty(axis, text))" />
            NON EMPTY
          </label>
          <span
            v-for="(item, i) in axis.items"
            :key="i"
            class="chip"
            draggable="true"
            tabindex="0"
            :title="item.text"
            @click="show(item)"
            @dragstart="dragChip($event, { level: depth, kind: 'axis', index: a }, i)"
            @dragover.prevent
            @drop.stop="drop($event, { level: depth, kind: 'axis', index: a }, i)"
            @keydown.delete="apply(removeItem(axis, i))"
            @keydown.backspace="apply(removeItem(axis, i))"
          >
            {{ item.text.length > 60 ? `${item.text.slice(0, 60)}…` : item.text }}
            <button type="button" class="chip__action" :title="t('Builder.remove')" @click.stop="apply(removeItem(axis, i))">×</button>
          </span>
          <span v-if="!axis.items.length || axis.expression.text.trim() === '{}'" class="zone__empty">{{ t('Builder.dropHere') }}</span>
          <template v-if="pending && pending.zone.level === depth && pending.zone.kind === 'axis' && pending.zone.index === a">
            <DButton size="sm" @click="resolvePending('set')">{{ t('Builder.asSet') }}</DButton>
            <DButton size="sm" @click="resolvePending('cross')">CrossJoin</DButton>
            <DButton size="sm" intent="quiet" @click="pending = null">×</DButton>
          </template>
          <span v-if="axis.properties" class="chip chip--props" @click="show(axis.properties)">
            {{ axis.properties.text }}
            <button type="button" class="chip__action" @click.stop="apply(removeSpan(axis.properties, text))">×</button>
          </span>
          <span class="zone__tools">
            <template v-if="adding === `${depth}.${a}`">
              <input v-model="fragment" class="zone__input" list="wb-builder-names" v-focus @keydown.enter="finishAdding({ level: depth, kind: 'axis', index: a })" @keydown.esc="adding = null" @blur="finishAdding({ level: depth, kind: 'axis', index: a })" />
            </template>
            <button v-else type="button" class="zone__add" :title="t('Builder.add')" @click="startAdding(`${depth}.${a}`)">＋</button>
            <button type="button" class="zone__add" :title="t('Builder.removeAxis')" @click="apply(removeAxis(level, a))">−</button>
          </span>
        </div>

        <button type="button" class="builder__more" @click="apply(addAxis(level))">＋ {{ t('Builder.axis') }}</button>

        <div class="zone" @dragover.prevent @drop="drop($event, { level: depth, kind: 'slicer', index: 0 })">
          <span class="zone__title">WHERE</span>
          <template v-if="level.slicer">
            <span
              v-for="(item, i) in level.slicer.items"
              :key="i"
              class="chip"
              draggable="true"
              :title="item.text"
              @click="show(item)"
              @dragstart="dragChip($event, { level: depth, kind: 'slicer', index: 0 }, i)"
            >
              {{ item.text }}
              <button type="button" class="chip__action" @click.stop="apply(removeFromSlicer(level, text, i))">×</button>
            </span>
          </template>
          <span v-else class="zone__empty">{{ t('Builder.dropSlicer') }}</span>
          <span class="zone__tools">
            <input v-if="adding === `${depth}.where`" v-model="fragment" class="zone__input" list="wb-builder-names" v-focus @keydown.enter="finishAdding({ level: depth, kind: 'slicer', index: 0 })" @keydown.esc="adding = null" @blur="finishAdding({ level: depth, kind: 'slicer', index: 0 })" />
            <button v-else type="button" class="zone__add" :title="t('Builder.add')" @click="startAdding(`${depth}.where`)">＋</button>
          </span>
        </div>

        <div v-if="!level.inner" class="zone">
          <span class="zone__title">FROM</span>
          <span class="chip chip--cube" @click="show(level.from)">{{ level.from.text }}</span>
          <span class="zone__tools">
            <input v-if="adding === 'subcube'" v-model="fragment" class="zone__input" list="wb-builder-names" :placeholder="t('Builder.subcubeHint')" v-focus @keydown.enter="finishAdding('subcube')" @keydown.esc="adding = null" @blur="finishAdding('subcube')" />
            <button v-else type="button" class="zone__add" :title="t('Builder.wrap')" @click="startAdding('subcube')">＋ {{ t('Builder.subcubeAdd') }}</button>
          </span>
        </div>

        <div v-if="level.cellProperties" class="zone">
          <span class="zone__title">CELL</span>
          <span class="chip chip--props" @click="show(level.cellProperties)">
            {{ level.cellProperties.text }}
            <button type="button" class="chip__action" @click.stop="apply(removeSpan(level.cellProperties, text))">×</button>
          </span>
        </div>
      </section>
    </template>

    <datalist id="wb-builder-names">
      <option v-for="entry in names" :key="`${entry.kind}:${entry.uniqueName}`" :value="entry.uniqueName">{{ entry.caption }}</option>
    </datalist>

    <WithEditor
      :open="!!withEditor"
      :initial="withEditor && withEditor.index !== undefined ? levels[withEditor.level]?.with[withEditor.index]?.span.text : undefined"
      @save="saveWith"
      @cancel="withEditor = null"
    />
  </div>
</template>

<style scoped>
.builder {
  height: 100%;
  overflow: auto;
  padding: 6px 8px 12px;
  font-size: var(--text-sm);
}

.builder__note {
  margin: 4px;
  color: var(--color-dim);
}

.builder__bar {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
}

.builder__stale {
  color: var(--color-warn);
  font-size: var(--text-xs);
}

.level {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.level--inner {
  margin-top: 6px;
  padding: 6px 0 0 10px;
  border-left: 2px solid var(--color-accent);
}

.level__head {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--color-accent);
  font-weight: 600;
}

.zone {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  min-height: 30px;
  padding: 4px 6px;
  border: 1px dashed var(--color-outline);
  border-radius: var(--radius-sm);
  background: var(--color-bg);
}

.zone__title {
  min-width: 70px;
  color: var(--color-kw, var(--color-accent));
  font-family: var(--font-mono);
  font-weight: 600;
  cursor: pointer;
}

.zone__toggle {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  color: var(--color-dim);
  font-size: var(--text-xs);
}

.zone__empty {
  color: var(--color-dim);
  font-style: italic;
}

.zone__tools {
  display: inline-flex;
  gap: 2px;
  margin-left: auto;
}

.zone__add {
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-xs);
  background: var(--color-raised);
  color: var(--color-fg);
  font: inherit;
  padding: 0 6px;
  cursor: pointer;
}

.zone__input {
  width: 220px;
  font: inherit;
  font-family: var(--font-mono);
  padding: 1px 6px;
  border: 1px solid var(--color-accent);
  border-radius: var(--radius-xs);
  background: var(--color-bg);
  color: var(--color-fg);
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  max-width: 100%;
  padding: 1px 6px;
  border-radius: var(--radius-xs);
  background: var(--color-raised);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  cursor: grab;
}

.chip:focus-visible {
  outline: 1px solid var(--color-accent);
}

.chip--with {
  border-left: 2px solid var(--color-fn, var(--color-accent));
}

.chip--cube {
  border-left: 2px solid var(--color-brand);
}

.chip--props {
  color: var(--color-dim);
}

.chip__badge {
  color: var(--color-dim);
  font-size: 10px;
  text-transform: uppercase;
}

.chip__action {
  border: 0;
  background: none;
  color: var(--color-dim);
  cursor: pointer;
  padding: 0 1px;
  font: inherit;
}

.chip__action:hover {
  color: var(--color-err);
}

.builder__more {
  align-self: flex-start;
  border: 1px dashed var(--color-outline);
  border-radius: var(--radius-sm);
  background: none;
  color: var(--color-dim);
  font: inherit;
  padding: 2px 8px;
  cursor: pointer;
}
</style>
