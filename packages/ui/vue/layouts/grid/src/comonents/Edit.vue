<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<template>
  <VaScrollContainer class="max-h-screen ml-15" vertical>
    <div ref="wrapper" @dragenter="onDragEnter" @drop.prevent="onDrop" @drag="onDragMove" class="alayout">
      <GridLayout
        ref="gridLayout"
        :layout="gridLayoutModel"
        :row-height="ROW_HEIGHT"
        :responsive="true"
        :vertical-compact="false"
        :breakpoints="BREAKPOINTS"
        :cols="COLS"
        @layout-updated="persistLayout"
      >
      <template #item="{ item }">
        <WidgetWrapper
          v-if="widgets?.find((w:any) => w.uid === item.i)"
          :widget="widgets.find((w:any) => w.uid === item.i)"
          :ref="`${item.i}_wrapper`"
          @openSettings="openWidgetSettings"
          editEnabled
          @removeWidget="() => removeWidget(item.i.toString())"
        />
        <span v-else class="text">{{ `${item.i}${item.static ? '- Static' : ''}` }}</span>
      </template>
      </GridLayout>

      <!-- Overlay für externes Draggen von Widgets -->
      <Draggable
        v-show="drag"
        :list="widgetsTmp"
        :group="{ name: 'widgets' }"
        class="invisible-dropzone"
        itemKey="type"
        :sort="false"
        @start="onOverlayStart"
        @end="onOverlayEnd"
        @add="onExternalDragAdd"
      >
        <template #item="{ element }">
          <div>{{ element.type }}</div>
        </template>
      </Draggable>
    </div>
  </VaScrollContainer>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { GridLayout, type LayoutItem } from 'grid-layout-plus'
import { type IWidget, useWidgetsStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.widgets'
import { useLayoutStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.layout'
import { WidgetWrapper, defaultConfig } from 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper'
import { useRoute } from 'vue-router'
import Draggable from 'vuedraggable'
import { cloneDeep, isEqual } from 'lodash'
import throttle from 'lodash/throttle'

/** Konstanten */
const BREAKPOINTS = { lg: 1800, md: 1200, sm: 768, xs: 480, xxs: 0 } as const
const COLS = { lg: 18, md: 12, sm: 6, xs: 4, xxs: 2 } as const
const ROW_HEIGHT = 30

/** Routing/Stores */
const route = useRoute()
const pageID = computed(() => (route.params.pageid as string) || '')
const widgetStore = computed(() => useWidgetsStore(pageID.value))
const layoutStore = computed(() => useLayoutStore(pageID.value))
const widgets = computed(() => widgetStore.value.widgets)
const storedLayout = computed(() => layoutStore.value.layout)

/** Refs auf Grid & Wrapper */
const gridLayout = ref<InstanceType<typeof GridLayout>>()
const wrapper = ref<HTMLElement>()

/** Drag/Drop State */
const drag = ref(false)
const lastPos = ref<{ x: number; y: number }>({ x: -1, y: -1 })
const isDraggingPlaceholder = ref(false)
const widgetsTmp = ref<any[]>([])
const dropId = '__drop__'

/** Lokales Layout (Grid-Units) + Transient (Platzhalter) */
const layoutModel = ref<LayoutItem[]>([])
const transient = ref<LayoutItem[]>([])
const gridLayoutModel = computed<LayoutItem[]>(() => [
  ...layoutModel.value,
  ...transient.value,
])

/** Guards gegen Update-Loops */
const syncingFromStore = ref(false)

/** Helper */
function toNum(v: unknown, fallback = 0): number {
  if (typeof v === 'number') return v
  const n = Number(v)
  return Number.isFinite(n) ? n : fallback
}
function getCurrentCols(width: number) {
  if (width >= BREAKPOINTS.lg) return COLS.lg
  if (width >= BREAKPOINTS.md) return COLS.md
  if (width >= BREAKPOINTS.sm) return COLS.sm
  if (width >= BREAKPOINTS.xs) return COLS.xs
  return COLS.xxs
}
function getMetrics() {
  // Use fixed container width to ensure consistent conversion
  const containerW = 1200 // Fixed width
  const cols = COLS.md // Fixed column count (12)

  return { colW: containerW / cols, rowH: ROW_HEIGHT }
}

/** Mapping Pixel <-> Grid (Store speichert Pixel) */
function toGrid(it: any): LayoutItem {
  const { colW, rowH } = getMetrics()
  const xPx = toNum(it.x, 0)
  const yPx = toNum(it.y, 0)
  const wPx = toNum(it.width, colW)
  const hPx = toNum(it.height, rowH)
  const result = {
    i: String(it.id ?? it.i ?? ''),
    x: Math.round(xPx / colW),
    y: Math.round(yPx / rowH),
    w: Math.max(1, Math.round(wPx / colW)),
    h: Math.max(1, Math.round(hPx / rowH)),
    static: false,
  }
  return result
}
function toPixels(it: LayoutItem) {
  const { colW, rowH } = getMetrics()
  const result = {
    id: String(it.i),
    x: toNum(it.x, 0) * colW,
    y: toNum(it.y, 0) * rowH,
    width: toNum(it.w, 1) * colW,
    height: toNum(it.h, 1) * rowH,
    z: 3000,
  }
  return result
}

/** Store -> Grid (mit Guard) */
watch(storedLayout, (data) => {
  syncingFromStore.value = true
  try {
    const arr = Array.isArray(data) ? data.map(toGrid) : []
    // Nur setzen, wenn wirklich anders
    if (!isEqual(layoutModel.value, arr)) {
      layoutModel.value = arr
    }
  } finally {
    // kleinen Tick warten, damit @layout-updated vom Grid nicht direkt wieder feuert
    nextTick(() => (syncingFromStore.value = false))
  }
}, { immediate: true, deep: true })

/** Re-Sync bei Resize */
const onResize = throttle(() => {
  // Neu mappen bei geänderten Metriken
  const data = storedLayout.value || []
  const arr = Array.isArray(data) ? data.map(toGrid) : []
  if (!isEqual(layoutModel.value, arr)) layoutModel.value = arr
}, 120)
onMounted(() => window.addEventListener('resize', onResize, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('resize', onResize))

/** Grid -> Store (nur wenn nicht gerade vom Store gesynct) */
function persistLayout(newLayout?: LayoutItem[]) {
  if (syncingFromStore.value) return
  const src = (newLayout ?? gridLayoutModel.value).filter(it => it.i !== dropId)
  // Store-Ziel berechnen
  const nextPixels = src.map(toPixels)
  const currPixels = (storedLayout.value || []) as any[]

  // Präzisionsvergleich: runde Werte für Vergleich
  const roundedNext = nextPixels.map(p => ({
    ...p,
    x: Math.round(p.x * 100) / 100,
    y: Math.round(p.y * 100) / 100,
    width: Math.round(p.width * 100) / 100,
    height: Math.round(p.height * 100) / 100
  }))
  const roundedCurr = currPixels.map((p: any) => ({
    ...p,
    x: Math.round(p.x * 100) / 100,
    y: Math.round(p.y * 100) / 100,
    width: Math.round(p.width * 100) / 100,
    height: Math.round(p.height * 100) / 100
  }))

  // Nur schreiben, wenn wirklich anders
  if (!isEqual(roundedCurr, roundedNext)) {
    layoutStore.value.updateLayout(nextPixels)
  }
}

/** Platzhalter sichern/entfernen */
async function ensurePlaceholder() {
  if (!transient.value.find(it => it.i === dropId)) {
    transient.value = [...transient.value, { x: 0, y: 0, w: 2, h: 2, i: dropId, static: false }]
    await nextTick()
  }
  await nextTick()
  return (gridLayout.value as any)?.getItem?.(dropId)
}
function removePlaceholder() {
  transient.value = transient.value.filter(it => it.i !== dropId)
}

/** Overlay/Draggable Events */
async function onOverlayStart() {
  drag.value = true
  isDraggingPlaceholder.value = false
  await ensurePlaceholder()
}
async function onDragMove(evt: any) {
  const e = evt
  if (!e || !gridLayout.value) return

  // Relativ zum Grid rechnen
  const gridEl: HTMLElement | null = document.querySelector('.alayout');

  if (!gridEl) return
  const rect = gridEl.getBoundingClientRect()

  if (!transient.value.find(it => it.i === dropId)) {
    transient.value = [...transient.value, { x: 0, y: 0, w: 2, h: 2, i: dropId, static: false }]
    await nextTick()
  }
  await nextTick()
  const item = (gridLayout.value as any)?.getItem?.(dropId)
  if (!item) return

  const left = e.clientX - rect.left
  const top  = e.clientY - rect.top
  let pos = item.calcXY(top, left)
  const cols = (gridLayout.value as any)?.cols ?? 12
  if (pos.x < 0 || pos.y < 0 || pos.x >= cols) pos = item.calcXY(left, top)

  lastPos.value = { x: toNum(pos.x, 0), y: toNum(pos.y, 0) }

  if (!isDraggingPlaceholder.value) {
    gridLayout.value.dragEvent('dragstart', dropId, lastPos.value.x, lastPos.value.y, 2, 2)
    isDraggingPlaceholder.value = true
  } else {
    gridLayout.value.dragEvent('drag', dropId, lastPos.value.x, lastPos.value.y, 2, 2)
  }
}
function onOverlayEnd() {
  if (isDraggingPlaceholder.value && gridLayout.value) {
    gridLayout.value.dragEvent('dragend', dropId, lastPos.value.x, lastPos.value.y, 2, 2)
  }
  removePlaceholder()
  isDraggingPlaceholder.value = false
  drag.value = false
}
function onExternalDragAdd(e: any) {
  const added = e?.item?._underlying_vm_ || e?.added?.element || e?.item
  const type = added?.type ?? 'UnknownWidget'
  const datasourceId = added?.datasourceId ?? 'default'

  if (isDraggingPlaceholder.value && gridLayout.value) {
    gridLayout.value.dragEvent('dragend', dropId, lastPos.value.x, lastPos.value.y, 2, 2)
  }
  removePlaceholder()
  isDraggingPlaceholder.value = false
  drag.value = false

  // finales Item an zuletzt berechneter Grid-Position
  const finalId = `widget_${Math.random().toString(36).slice(2, 9)}`
  const { x, y } = lastPos.value
  layoutModel.value = [...layoutModel.value, { i: finalId, x, y, w: 2, h: 2, static: false }]

  // Store nur aktualisieren; Grid spiegelt sich über watch(storedLayout)
  persistLayout(layoutModel.value)

  addWidget(finalId, type, datasourceId)

  lastPos.value = { x: -1, y: -1 }
}

/** Wrapper (Fallback) */
function onDragEnter() { drag.value = true }
function onDrop() { onOverlayEnd() }

/** Widgets hinzufügen/entfernen */
function addWidget(uid: string, type: string, datasourceId: string) {
  const config = { datasourceId, settings: {} }
  const newWidget: IWidget = { uid, type, config, wrapperConfig: cloneDeep(defaultConfig) }
  widgetStore.value.updateWidgets([...widgets.value, newWidget])
}
function removeWidget(uid: string) {
  widgetStore.value.updateWidgets(widgets.value.filter((w: any) => w.uid !== uid))
  layoutModel.value = layoutModel.value.filter((it: any) => it.i !== uid)
  persistLayout(layoutModel.value)
}

/** UI */
const emit = defineEmits(['openSettings', 'removeWidget'])


const openWidgetSettings = (id: string) => {
  emit('openSettings', id);
}
</script>

<style scoped>
.alayout{
  padding-left:60px;
}
.vgl-layout {
  --vgl-placeholder-bg: #aaa;
  min-height: 100vh;

}
.vgl-layout::before {
  position: absolute;
  width: calc(100% - 5px);
  height: calc(100% - 5px);
  margin: 5px;
  content: '';
  background-image:
    linear-gradient(to right, #e9e9e9 1px, transparent 1px),
    linear-gradient(to bottom, #e9e9e9 1px, transparent 1px);
  background-repeat: repeat;
  background-size: calc(calc(100% - 5px) / 2) 40px;
}
@media (min-width: 20px) { .vgl-layout::before { background-size: calc(calc(100% - 5px) / 2) 40px; } }
@media (min-width: 420px) { .vgl-layout::before { background-size: calc(calc(100% - 5px) / 4) 40px; } }
@media (min-width: 708px) { .vgl-layout::before { background-size: calc(calc(100% - 5px) / 6) 40px; } }
@media (min-width: 1120px) { .vgl-layout::before { background-size: calc(calc(100% - 5px) / 12) 40px; } }
@media (min-width: 1720px) { .vgl-layout::before { background-size: calc(calc(100% - 5px) / 18) 40px; } }

:deep(.vgl-item--placeholder) {
  outline: 2px dashed #888;
  background-color: rgba(136,136,136,0.15);
}
:deep(.vgl-item--resizing) { opacity: 90%; }
:deep(.vgl-item--static) { background-color: #cce; }

.text {
  position: absolute; inset: 0; width: 100%; height: 100%;
  margin: auto; font-size: 24px; text-align: center;
}

/* Overlay */
.invisible-dropzone {
  position: absolute;
  inset: 0;
  z-index: 1000;
  pointer-events: auto;
}
.invisible-dropzone > * { opacity: 0; }
</style>
