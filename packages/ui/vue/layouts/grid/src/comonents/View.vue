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
  <div class="scroll max-h-screen ml-15">
    <div ref="wrapper" class="view_grid_layout">
      <GridLayout ref="gridLayout" :key="gridSettingsKey" v-model:layout="layout" :row-height="ROW_HEIGHT" :responsive="true" :vertical-compact="false" :breakpoints="BREAKPOINTS" :cols="COLS as any" :is-draggable="false" :is-resizable="false">
        <template #item="{ item }">
          <WidgetWrapper v-if="widgets?.find((w: any) => w.uid === item.i)"
            :widget="widgets.find((w: any) => w.uid === item.i)"
            :ref="`${item.i}_wrapper`"
            :editEnabled="false"
          />
          <span v-else class="text">{{ `${item.i}${item.static ? '- Static' : ''}` }}</span>
        </template>
      </GridLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, computed, onMounted, nextTick } from 'vue'
import { GridLayout } from 'grid-layout-plus'

import { useBoard } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { WidgetWrapper } from 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper'
import { useRoute } from 'vue-router'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import type { TinyEmitter } from 'tiny-emitter'
import { BREAKPOINTS, resolveGridSettings } from '../GridSettings'
import { plainSettings } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { identifier as PageIdentifier, type PageRegistryI } from 'org.eclipse.daanse.board.app.lib.api.page'

const props = defineProps<{
  pageId?: string,
  layoutSettings?: Record<string, any>
}>();

/** Grid Settings — direkt aus dem Page Repository lesen */
const layoutSettingsRef = ref<Record<string, any> | undefined>(undefined)
const gridSettings = computed(() => resolveGridSettings(layoutSettingsRef.value))
const COLS = computed(() => gridSettings.value.cols)
const ROW_HEIGHT = computed(() => gridSettings.value.rowHeight)
const gridSettingsKey = computed(() => `${ROW_HEIGHT.value}-${Object.values(COLS.value).join('-')}`)

const route = useRoute();

// Get page ID - use prop first, then route param
const pageId = props.pageId ?? route.params.pageid as string ?? ''

/*
 * Straight from the model. There used to be two refs filled from two
 * stores in onMounted, with a retry after 100ms when Pinia was not ready
 * yet - the stores were created on first call, and whether they existed
 * depended on when this ran.
 */
const board = useBoard(pageId)
const widgets = board.widgets
const storedLayout = board.layout


// Get EventBus for page loaded event
const eventBus = inject<TinyEmitter>(identifiers.TINY_EMITTER)!

/** Page Repo Subscription für layoutSettings */
let pageSubId: string | null = null
const pageRepo = inject<PageRegistryI>(PageIdentifier) ?? null

function syncLayoutSettings() {
  if (pageRepo && pageId) {
    const page = pageRepo.getPage(pageId)
    /* Copied by the model's names: the settings are a modelled instance
       once the form has been open, and spreading one gives the private
       fields its getters sit in - the grid then silently fell back to
       every default while the form showed what had been set. */
    layoutSettingsRef.value = page?.layoutSettings
      ? { ...plainSettings(page.layoutSettings) }
      : undefined
  }
}

// Initialize stores safely in onMounted with retry logic
onMounted(async () => {
  console.log('Grid View component mounted for page:', pageId)

  // Sync grid layout settings
  syncLayoutSettings()
  if (pageRepo && 'subscribe' in pageRepo) {
    pageSubId = (pageRepo as any).subscribe((ev: string) => {
      if (ev === 'PAGE_UPDATE') syncLayoutSettings()
    })
  }

  /* One tick, so the widgets this mounts exist before it says so. The
     second one was waiting for Pinia to finish starting. */
  await nextTick()
  emitPageLoaded()
})

// Emit page loaded event
const emitPageLoaded = () => {
  eventBus.emit('system:pageLoaded', { pageId })
}


const gridLayout = ref<InstanceType<typeof GridLayout>>()
const wrapper = ref<HTMLElement>()

// Helper functions (identisch mit Edit.vue)
function toNum(n: any, fallback: number) {
  const parsed = Number(n)
  return Number.isFinite(parsed) ? parsed : fallback
}

function getCurrentCols(width: number) {
  const cols = COLS.value
  if (width >= BREAKPOINTS.lg) return cols.lg
  if (width >= BREAKPOINTS.md) return cols.md
  if (width >= BREAKPOINTS.sm) return cols.sm
  if (width >= BREAKPOINTS.xs) return cols.xs
  return cols.xxs
}

function getMetrics() {
  // Use fixed container width to ensure consistent conversion
  const containerW = 1200 // Fixed width
  const cols = COLS.value.md

  return { colW: containerW / cols, rowH: ROW_HEIGHT.value }
}

function toGrid(it: any) {
  const { colW, rowH } = getMetrics()
  const xPx = toNum(it.x, 0)
  const yPx = toNum(it.y, 0)
  const wPx = toNum(it.width, colW)
  const hPx = toNum(it.height, rowH)

  return {
    i: String(it.id ?? it.i ?? ''),
    x: Math.round(xPx / colW),
    y: Math.round(yPx / rowH),
    w: Math.max(1, Math.round(wPx / colW)),
    h: Math.max(1, Math.round(hPx / rowH)),
    static: false,
  }
}

// Convert layout store format to grid-layout-plus format (mit korrekter Padding-Berechnung)
let layout = computed(() => (storedLayout.value || []).map(toGrid))
</script>

<style scoped>
/* The board scrolls inside the page; main.css paints the bar */
.scroll {
  overflow-y: auto;
}


.view_grid_layout{
  padding-left:60px;
}
.vgl-layout {
  --vgl-placeholder-bg: var(--color-outline);
  min-height:100vh;
}
/* Grid background disabled in view mode */
.vgl-layout::before {
  display: none;
}

:deep(.vgl-item:not(.vgl-item--placeholder)) {

  /*border: 1px dashed #ccc;*/
}

:deep(.vgl-item--resizing) {
  opacity: 90%;
}

:deep(.vgl-item--static) {
  background-color: color-mix(in srgb, var(--color-accent) 18%, transparent);
}

.text {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  font-size: 24px;
  text-align: center;
}
</style>
