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
  <VaScrollContainer
    class="max-h-screen ml-15"
    vertical
  >
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
  </VaScrollContainer>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import { GridLayout } from 'grid-layout-plus'

import { useWidgetsStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.widgets'
import { useLayoutStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.layout'
import { WidgetWrapper } from 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper'
import { useRoute } from 'vue-router'
import { container, identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import type { TinyEmitter } from 'tiny-emitter'
import { BREAKPOINTS, resolveGridSettings } from '../GridSettings'
import { identifier as PageIdentifier, type PageRegistryI } from 'org.eclipse.daanse.board.app.lib.repository.page'

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

// Initialize reactive refs first
const widgets = ref<any[]>([])
const storedLayout = ref<any[]>([])

// Store references (will be set in onMounted)
let widgetStore: any = null
let layoutStore: any = null


// Get EventBus for page loaded event
const eventBus = container.get<TinyEmitter>(identifiers.TINY_EMITTER)

/** Page Repo Subscription für layoutSettings */
let pageSubId: string | null = null
const pageRepo = container.isBound(PageIdentifier)
  ? container.get<PageRegistryI>(PageIdentifier)
  : null

function syncLayoutSettings() {
  if (pageRepo && pageId) {
    const page = pageRepo.getPage(pageId)
    layoutSettingsRef.value = page?.layoutSettings ? { ...page.layoutSettings } : undefined
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

  // Wait a tick to ensure Pinia is fully initialized
  await nextTick()

  const initStores = () => {
    try {
      widgetStore = useWidgetsStore(pageId)
      layoutStore = useLayoutStore(pageId)

      // Set initial data
      widgets.value = widgetStore.widgets
      storedLayout.value = layoutStore.layout

      console.log('Grid View stores initialized successfully, widgets:', widgets.value.length)
      return true
    } catch (error) {
      console.error('Error initializing Grid View stores:', error)
      return false
    }
  }

  // Try to initialize immediately
  if (!initStores()) {
    // If it fails, try again after a short delay
    setTimeout(() => {
      if (!initStores()) {
        console.error('Failed to initialize Grid View stores after retry')
      } else {
        // Emit page loaded event after successful retry
        emitPageLoaded()
      }
    }, 100)
  } else {
    // Wait another tick to ensure widgets are mounted and registered
    await nextTick()
    emitPageLoaded()
  }
})

// Emit page loaded event
const emitPageLoaded = () => {
  console.log('📄 Emitting system:pageLoaded for page:', pageId)
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

.view_grid_layout{
  padding-left:60px;
}
.vgl-layout {
  --vgl-placeholder-bg: #aaa;
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
  background-color: #cce;
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
