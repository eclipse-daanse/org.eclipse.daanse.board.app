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
/*
 * Widget settings as an overlay: the widget on the left at the size it has
 * on the board, its settings on the right in tabs.
 *
 * The panel it replaces was ~300px wide, which is not the real problem -
 * the feedback loop is. In a side panel you change a value and then hunt
 * across the board for what moved, often behind the panel itself. Here the
 * widget sits next to the field you are dragging.
 *
 * Changes reach the board only on "Fertig". They reach the preview at once,
 * because that is the point of having one. The values as they were on
 * opening are kept, so "Verwerfen" puts them back rather than being a
 * button that promises something it cannot do.
 */
import { computed, nextTick, onBeforeUnmount, onMounted, ref, inject, watch } from 'vue'
import {
  WrapperSettingsImpl,
  WrapperSettingsPackage,
  wrapperSettingsFormXmi,
} from 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper'
import { SettingsForm } from 'org.eclipse.daanse.board.app.ui.vue.uimodel'
import { useDataSourcesStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.datasouce'
import type { i18n } from 'org.eclipse.daanse.board.app.lib.i18next'
import { type IWidget } from 'org.eclipse.daanse.board.app.ui.vue.stores.widgets'
import { WidgetRepository, identifier } from 'org.eclipse.daanse.board.app.lib.api.widget'

const emit = defineEmits(['close'])
const widget = defineModel<IWidget>()

const props = defineProps<{
  /** The widget's size on the board, so the preview can match it. */
  boardSize?: { width: number; height: number }
}>()

const { dataSources } = useDataSourcesStore()
const registeredWidgets = inject<WidgetRepository>(identifier)!
const availableWidgetsSettings = registeredWidgets.getAllWidgets()
const i18n: i18n | undefined = inject('i18n')
const t = (key: string) => (i18n ? i18n.t(key) : key)

type TabId = 'data' | 'look' | 'rest' | 'frame' | 'variables'
const tab = ref<TabId>('look')

/*
 * A widget may carry its settings form as a model, on its registration -
 * the same place its icon and its component come from. Where it does, the
 * form is rendered from that model; where it does not, its hand-written
 * settings component is used as before.
 */
interface SettingsForm {
  xmi: string
  uri?: string
  ePackage: () => any
  create: () => any
  /** Sections of the hand-written form that the model does not cover. */
  unmodelledSections?: string[]
  /** Forms for the classes inside this widget's list settings. */
  entryForms?: Array<{ xmi: string; uri?: string }>
}

const modelledLook = computed<SettingsForm | undefined>(() => {
  const type = widget.value?.type
  return type ? (availableWidgetsSettings[type] as { settingsForm?: SettingsForm })?.settingsForm : undefined
})

/*
 * A model can cover only what the model describes. The chart, for one,
 * keeps its series and its reference lines in lists the Ecore does not
 * type, so they are not in its form - and its hand-written component stays
 * reachable beside it rather than that part of the widget becoming
 * unreachable. The tab disappears by itself once nothing is left in it.
 */
const hasHandWritten = computed(
  () => !!(widget.value?.type && availableWidgetsSettings[widget.value.type]?.settingsComponent),
)
const showRestTab = computed(() => !!modelledLook.value && hasHandWritten.value)

/* --------------------------------------------------- sections as tabs */

/**
 * The widget's own settings arrive as a stack of collapsible sections - the
 * chart alone brings six. Stacked accordions mean scrolling past everything
 * you are not looking for, so they are driven as tabs instead: one section
 * open, the rest closed, their headers hidden.
 *
 * Read from the rendered result rather than declared, because every widget
 * brings its own settings component and none of them knows about this
 * overlay. If the shape is not what we expect, the sections simply stay as
 * they were - a stack of collapsibles, which still works.
 */
const lookHost = ref<HTMLElement>()
const sections = ref<Array<{ label: string; index: number }>>([])
const activeSection = ref(0)

function sectionElements(): HTMLElement[] {
  const host = lookHost.value
  if (!host) return []
  return [...host.querySelectorAll(':scope > .va-collapse')] as HTMLElement[]
}

/** The header's own words, without the icon ligatures around them. */
function labelOf(collapse: HTMLElement): string {
  const header = collapse.querySelector('.va-collapse__header-wrapper')
  if (!header) return ''
  const words = [...header.querySelectorAll('*')]
    .filter((el) => !el.classList.contains('va-icon') && el.children.length === 0)
    .map((el) => (el.textContent ?? '').trim())
    .filter((text) => text && !/^(expand_more|expand_less|add_circle)$/.test(text))
  return words[0] ?? ''
}

function isOpen(collapse: HTMLElement): boolean {
  return collapse.className.includes('--expanded')
}

function showSection(index: number) {
  activeSection.value = index
  sectionElements().forEach((collapse, i) => {
    const header = collapse.querySelector('.va-collapse__header-wrapper') as HTMLElement | null
    if (header) header.style.display = 'none'
    const wanted = i === index
    if (wanted !== isOpen(collapse)) header?.click()
    collapse.style.display = wanted ? '' : 'none'
  })
}

async function scanSections() {
  await nextTick()
  const found = sectionElements()
  sections.value = found.map((el, index) => ({ label: labelOf(el) || `Abschnitt ${index + 1}`, index }))
  if (found.length) showSection(Math.min(activeSection.value, found.length - 1))
}

/** Opening a section tab means the widget's own settings are what is shown. */
function pickSection(index: number) {
  tab.value = 'look'
  showSection(index)
}

/*
 * In the "Weiteres" tab, only the sections the model does not cover. The
 * hand-written component renders all of them; showing the ones that are
 * modelled as well would put the same setting in two places, in two forms
 * that can disagree about it.
 */
const restHost = ref<HTMLElement>()

async function trimRestSections() {
  const wanted = modelledLook.value?.unmodelledSections
  const host = restHost.value
  if (!wanted || !host) return
  await nextTick()
  for (const collapse of [...host.querySelectorAll(':scope > .va-collapse')] as HTMLElement[]) {
    collapse.style.display = wanted.includes(labelOf(collapse)) ? '' : 'none'
  }
}

watch(tab, (value) => {
  if (value === 'rest') trimRestSections()
})

/* --------------------------------------------------------- reset point */

/**
 * Every value as it stood when the overlay opened.
 *
 * The settings write straight into the widget's config objects - those
 * carry variable wrappers with behaviour, so copying the whole thing would
 * lose it. Remembering the plain values is enough to put everything back.
 */
/**
 * The values as they stood when the overlay opened.
 *
 * Kept by name, not by object reference. The settings object is replaced on
 * the way in - a stored board arrives as plain JSON and is put into a
 * modelled instance so the form can render from the model - and a snapshot
 * holding the old objects would write into something nothing points at any
 * more. Names survive that swap; object identities do not.
 *
 * Two levels, because a setting changes in two ways: the value inside a
 * field's wrapper, or the whole field being replaced. Lists are copied as
 * a list of their entries, so adding or removing one can be undone.
 */
interface FieldState {
  field: unknown
  value?: unknown
  hasValue: boolean
  list?: unknown[]
}

let snapshot: Record<'wrapperConfig' | 'config', Record<string, FieldState>> = {
  wrapperConfig: {},
  config: {},
}

function bagOf(which: 'wrapperConfig' | 'config'): Record<string, any> | undefined {
  return widget.value?.[which] as Record<string, any> | undefined
}

function asArray(value: any): unknown[] | undefined {
  if (!value) return undefined
  if (typeof value.toArray === 'function') return value.toArray()
  return Array.isArray(value) ? [...value] : undefined
}

function takeSnapshot() {
  snapshot = { wrapperConfig: {}, config: {} }

  for (const which of ['wrapperConfig', 'config'] as const) {
    const bag = bagOf(which)
    if (!bag) continue
    for (const [key, field] of Object.entries(bag)) {
      const list = asArray(field)
      const hasValue = Boolean(field) && typeof field === 'object' && 'value' in (field as object)
      snapshot[which][key] = {
        field,
        hasValue,
        value: hasValue ? (field as any).value : undefined,
        list,
      }
    }
  }
}

function restore() {
  for (const which of ['wrapperConfig', 'config'] as const) {
    const bag = bagOf(which)
    if (!bag) continue

    for (const [key, state] of Object.entries(snapshot[which])) {
      try {
        // A list is restored in place: the object holding it may be the one
        // the widget reads from, so it must not be swapped for a copy
        if (state.list) {
          const current = bag[key]
          if (current && typeof current.clear === 'function') {
            current.clear()
            for (const entry of state.list) current.add(entry)
          } else if (Array.isArray(current)) {
            current.splice(0, current.length, ...state.list)
          }
          continue
        }

        const current = bag[key]
        const currentHasValue =
          Boolean(current) && typeof current === 'object' && 'value' in (current as object)

        // Prefer writing through the wrapper that is in place now
        if (state.hasValue && currentHasValue) current.value = state.value
        else bag[key] = state.field
      } catch {
        // A read-only field cannot have changed either, so nothing is lost
      }
    }
  }
}

function discard() {
  restore()
  emit('close')
}

function accept() {
  emit('close')
}

/* ------------------------------------------------------------- preview */

const fill = ref(false)

const previewStyle = computed(() => {
  if (fill.value || !props.boardSize) return { width: '100%', height: '100%' }
  return {
    width: `${props.boardSize.width}px`,
    height: `${props.boardSize.height}px`,
    maxWidth: '100%',
    maxHeight: '100%',
  }
})

const sizeLabel = computed(() =>
  props.boardSize
    ? `${Math.round(props.boardSize.width)} × ${Math.round(props.boardSize.height)} px, wie im Board`
    : 'Größe des Boards nicht bekannt',
)

/* -------------------------------------------------------- split handle */

const sideWidth = ref(readWidth())
let dragging = false

function readWidth(): number {
  const stored = Number(localStorage.getItem('daanse.board.widgetSettingsWidth'))
  return Number.isFinite(stored) && stored >= 320 ? stored : 400
}

function startDrag(event: PointerEvent) {
  dragging = true
  ;(event.target as HTMLElement).setPointerCapture?.(event.pointerId)
}

function onDrag(event: PointerEvent) {
  if (!dragging) return
  const fromRight = window.innerWidth - event.clientX
  sideWidth.value = Math.min(Math.max(fromRight, 320), Math.max(window.innerWidth - 360, 360))
}

function endDrag() {
  if (!dragging) return
  dragging = false
  try {
    localStorage.setItem('daanse.board.widgetSettingsWidth', String(Math.round(sideWidth.value)))
  } catch {
    // Remembering the width is a convenience, not a requirement
  }
}

function nudge(by: number) {
  sideWidth.value = Math.min(Math.max(sideWidth.value + by, 320), window.innerWidth - 360)
  endDrag()
}

/* ------------------------------------------------------------ counting */

/** Fields bound to a variable - the ones whose value comes from outside. */
const boundFields = computed(() => {
  const found: Array<{ group: string; name: string; variable: string }> = []
  const bags: Array<[string, Record<string, any> | undefined]> = [
    ['Rahmen', widget.value?.wrapperConfig],
    ['Darstellung', widget.value?.config],
  ]
  for (const [group, bag] of bags) {
    for (const [name, field] of Object.entries(bag ?? {})) {
      const variable = (field as any)?.variable
      if (variable) {
        found.push({ group, name, variable: String(variable?.name ?? variable) })
      }
    }
  }
  return found
})

const frameCount = computed(() => Object.keys(widget.value?.wrapperConfig ?? {}).length)
const dataCount = computed(() => (widget.value?.config?.datasourceId ? 1 : 0))

function onKey(event: KeyboardEvent) {
  if (event.key === 'Escape') discard()
}

watch(tab, (value) => {
  if (value === 'look') scanSections()
})

onMounted(() => {
  takeSnapshot()
  scanSections()
  window.addEventListener('keydown', onKey)
  window.addEventListener('pointermove', onDrag)
  window.addEventListener('pointerup', endDrag)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  window.removeEventListener('pointermove', onDrag)
  window.removeEventListener('pointerup', endDrag)
})
</script>

<template>
  <Teleport to="body">
    <div class="scrim" @click.self="discard()">
      <section
        class="overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Widget-Einstellungen"
      >
        <!-- left: the widget itself -->
        <div class="stage">
          <header class="stage__head">
            <span class="stage__name">{{ widget?.type ?? 'Widget' }}</span>
            <code class="stage__uid">{{ widget?.uid }}</code>
            <span class="stage__spacer" />
            <div class="seg" role="group" aria-label="Vorschaugröße">
              <button type="button" :class="{ on: !fill }" @click="fill = false">Boardgröße</button>
              <button type="button" :class="{ on: fill }" @click="fill = true">Füllen</button>
            </div>
          </header>

          <div class="stage__bar">{{ fill ? 'Auf die Fläche gestreckt' : sizeLabel }}</div>

          <div class="stage__body">
            <div class="preview" :style="previewStyle">
              <slot name="preview" />
            </div>
          </div>
        </div>

        <!-- the divider is draggable; the width is remembered -->
        <div
          class="handle"
          role="separator"
          aria-orientation="vertical"
          aria-label="Breite der Einstellungen"
          tabindex="0"
          @pointerdown.prevent="startDrag"
          @keydown.left.prevent="nudge(16)"
          @keydown.right.prevent="nudge(-16)"
        />

        <!-- right: the settings -->
        <div class="side" :style="{ width: sideWidth + 'px' }">
          <nav class="tabs" role="tablist" aria-label="Einstellungen">
            <button
              type="button"
              role="tab"
              :aria-selected="tab === 'data'"
              :class="['tab', { on: tab === 'data' }]"
              @click="tab = 'data'"
            >
              Daten <span class="tab__n">{{ dataCount }}</span>
            </button>
            <button
              v-if="!sections.length"
              type="button"
              role="tab"
              :aria-selected="tab === 'look'"
              :class="['tab', { on: tab === 'look' }]"
              @click="tab = 'look'"
            >
              Darstellung
            </button>
            <button
              v-for="section in sections"
              :key="section.index"
              type="button"
              role="tab"
              :aria-selected="tab === 'look' && activeSection === section.index"
              :class="['tab', { on: tab === 'look' && activeSection === section.index }]"
              @click="pickSection(section.index)"
            >
              {{ section.label }}
            </button>
            <button
              v-if="showRestTab"
              type="button"
              role="tab"
              :aria-selected="tab === 'rest'"
              :class="['tab', { on: tab === 'rest' }]"
              @click="tab = 'rest'"
            >
              Weiteres
            </button>
            <button
              type="button"
              role="tab"
              :aria-selected="tab === 'frame'"
              :class="['tab', { on: tab === 'frame' }]"
              @click="tab = 'frame'"
            >
              Rahmen <span class="tab__n">{{ frameCount }}</span>
            </button>
            <button
              type="button"
              role="tab"
              :aria-selected="tab === 'variables'"
              :class="['tab', { on: tab === 'variables' }]"
              @click="tab = 'variables'"
            >
              Variablen <span class="tab__n">{{ boundFields.length }}</span>
            </button>
          </nav>

          <div class="fields" v-if="widget">
            <template v-if="tab === 'data'">
              <VaSelect
                label="Datenquelle"
                class="pick"
                v-model="widget.config.datasourceId"
                :options="dataSources"
                value-by="uid"
                text-by="name"
                clearable
              />
              <p class="note">
                Woher dieses Widget seine Werte nimmt. Ohne Datenquelle zeigt es nur, was fest
                eingestellt ist.
              </p>
            </template>

            <!-- Wrapped rather than v-show'd directly: these settings
                 components have several root elements, and v-show has
                 nothing to put display:none on in that case. Kept mounted
                 so switching tabs does not reset their open sections. -->
            <div v-show="tab === 'look'" ref="lookHost">
              <SettingsForm
                v-if="modelledLook"
                v-model="widget.config"
                :create="modelledLook.create"
                :ui-model-xmi="modelledLook.xmi"
                :domain-package="modelledLook.ePackage()"
                :ui-model-uri="modelledLook.uri"
                :entry-forms="modelledLook.entryForms"
              />
              <component
                v-else
                :is="availableWidgetsSettings[widget.type]?.settingsComponent"
                v-model="widget.config"
                :key="widget.uid"
                :dataSources="dataSources"
              />
            </div>

            <!-- What the model does not describe yet -->
            <div v-show="tab === 'rest'" ref="restHost">
              <p class="rest__note">
                Einstellungen, die noch nicht im Modell beschrieben sind - beim Diagramm die
                einzelnen Datenreihen und die Referenzlinien.
              </p>
              <component
                v-if="showRestTab"
                :is="availableWidgetsSettings[widget.type]?.settingsComponent"
                v-model="widget.config"
                :key="widget.uid + '-rest'"
                :dataSources="dataSources"
              />
            </div>

            <!-- The form is a model: model/ui.xmi beside the Ecore, read
                 against the package it points at. Fields are grouped the
                 way someone setting up a widget thinks about them, which
                 is what a form derived from the class cannot know. -->
            <div v-show="tab === 'frame'">
              <SettingsForm
                v-model="widget.wrapperConfig"
                :create="() => new WrapperSettingsImpl()"
                :ui-model-xmi="wrapperSettingsFormXmi"
                :domain-package="WrapperSettingsPackage.eINSTANCE"
                ui-model-uri="/wrapper-settings.ui.xmi"
              />
            </div>

            <template v-if="tab === 'variables'">
              <table v-if="boundFields.length" class="bound">
                <thead>
                  <tr><th>Feld</th><th>Bereich</th><th>Variable</th></tr>
                </thead>
                <tbody>
                  <tr v-for="field in boundFields" :key="field.group + field.name">
                    <td class="bound__name">{{ field.name }}</td>
                    <td>{{ field.group }}</td>
                    <td class="bound__var">{{ field.variable }}</td>
                  </tr>
                </tbody>
              </table>
              <p v-else class="note">
                Kein Feld dieses Widgets hängt an einer Variablen. Über das
                <span class="var-mark">{x}</span> neben einem Feld lässt sich eines binden.
              </p>
            </template>
          </div>

          <footer class="foot">
            <span class="foot__hint">Änderungen greifen erst mit „Fertig“</span>
            <span class="stage__spacer" />
            <button class="btn" type="button" @click="discard">Verwerfen</button>
            <button class="btn btn--primary" type="button" @click="accept">Fertig</button>
          </footer>
        </div>
      </section>
    </div>
  </Teleport>
</template>

<style scoped>
.scrim {
  position: fixed;
  inset: 0;
  z-index: 40000;
  display: grid;
  place-items: stretch;
  padding: 26px 22px;
  background-color: color-mix(in srgb, var(--color-canvas) 62%, transparent);
  /* The board stays visible but out of focus - it is where you return to */
  backdrop-filter: blur(6px);
}

.overlay {
  display: flex;
  min-width: 0;
  min-height: 0;
  background-color: var(--color-bg);
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-e3);
  overflow: hidden;
}

/* ----------------------------------------------------------------- left */

.stage {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 0;
}

.stage__head {
  display: flex;
  align-items: center;
  gap: 8px;
  height: var(--spacing-panelHeader);
  flex: none;
  padding: 0 12px;
  background-color: var(--color-pane);
  border-bottom: 1px solid var(--color-divider);
}

.stage__name {
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-fg);
}

.stage__uid {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-dim);
}

.stage__spacer {
  flex: 1 1 auto;
}

.seg {
  display: flex;
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-xs);
  overflow: hidden;
}

.seg button {
  padding: 1px 9px;
  font-family: inherit;
  font-size: var(--text-xs);
  color: var(--color-dim);
  background: none;
  border: 0;
  cursor: pointer;
}

.seg button.on {
  color: var(--color-onAccent);
  background-color: var(--color-accent);
}

.stage__bar {
  flex: none;
  padding: 5px 12px;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-dim);
  border-bottom: 1px solid var(--color-divider);
}

.stage__body {
  flex: 1 1 auto;
  display: grid;
  place-items: center;
  min-height: 0;
  padding: 18px;
  background-color: var(--color-canvas);
  overflow: auto;
}

.preview {
  background-color: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-xs);
  overflow: hidden;
}

/* --------------------------------------------------------------- handle */

.handle {
  width: var(--spacing-splitter);
  flex: none;
  cursor: col-resize;
  background-color: var(--color-divider);
}

.handle:hover,
.handle:focus-visible {
  background-color: var(--color-accent);
  outline: none;
}

/* ---------------------------------------------------------------- right */

.side {
  display: flex;
  flex-direction: column;
  flex: none;
  min-width: 0;
  min-height: 0;
  background-color: var(--color-pane);
}

/* The chart brings six sections of its own, so the row wraps rather than
   scrolling sideways - a tab you have to hunt for is not a tab. */
.tabs {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  min-height: var(--spacing-panelHeader);
  flex: none;
  padding: 0 6px;
  gap: 1px;
  border-bottom: 1px solid var(--color-divider);
}

.tab {
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  height: var(--spacing-panelHeader);
  padding: 0 9px;
  font-family: inherit;
  font-size: var(--text-sm);
  color: var(--color-dim);
  background: none;
  border: 0;
  cursor: pointer;
}

.tab.on {
  color: var(--color-fg);
  font-weight: 600;
}

.tab.on::after {
  content: '';
  position: absolute;
  left: 7px;
  right: 7px;
  bottom: -1px;
  height: 2px;
  background-color: var(--color-accent);
  border-radius: 2px;
}

.tab__n {
  font-family: var(--font-mono);
  font-size: 9.5px;
  font-variant-numeric: tabular-nums;
  opacity: 0.8;
}

.fields {
  flex: 1 1 auto;
  min-height: 0;
  padding: 10px 12px 16px;
  overflow-y: auto;
}

.pick {
  margin-bottom: 8px;
}

.rest__note {
  margin: 0 0 10px;
  padding: 7px 9px;
  font-size: var(--text-xs);
  line-height: 1.5;
  color: var(--color-dim);
  background-color: var(--color-raised);
  border-radius: var(--radius-xs);
}

.note {
  margin: 8px 0 0;
  font-size: var(--text-sm);
  line-height: 1.5;
  color: var(--color-dim);
}

.var-mark {
  font-family: var(--font-mono);
  font-style: italic;
  color: var(--color-brand);
}

.bound {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--text-sm);
}

.bound th {
  padding: 5px 8px;
  text-align: left;
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--color-dim);
  border-bottom: 1px solid var(--color-divider);
}

.bound td {
  padding: 5px 8px;
  border-bottom: 1px solid var(--color-divider);
}

.bound__name,
.bound__var {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
}

.bound__var {
  color: var(--color-brand);
}

.foot {
  display: flex;
  align-items: center;
  gap: 7px;
  height: 38px;
  flex: none;
  padding: 0 12px;
  background-color: var(--color-pane);
  border-top: 1px solid var(--color-divider);
}

.foot__hint {
  font-size: var(--text-xs);
  color: var(--color-dim);
}

.btn {
  height: 24px;
  padding: 0 12px;
  font-family: inherit;
  font-size: var(--text-sm);
  color: var(--color-fg);
  background-color: var(--color-raised);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-xs);
  cursor: pointer;
}

.btn:hover {
  border-color: var(--color-outline);
}

.btn--primary {
  color: var(--color-onAccent);
  background-color: var(--color-accent);
  border-color: var(--color-accent);
  font-weight: 500;
}

.btn:focus-visible,
.tab:focus-visible,
.seg button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}
</style>
