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
      <GridLayout ref="gridLayout" v-model:layout="layout" :row-height="30" :responsive="true" :vertical-compact="false" :breakpoints="{ lg: 1800, md: 1200, sm: 768, xs: 480, xxs: 0 }" :cols="{ lg: 18, md: 12, sm: 6, xs: 4, xxs: 2 }" :is-draggable="false" :is-resizable="false">
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

const props = defineProps<{
  pageId?: string
}>();

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

// Initialize stores safely in onMounted with retry logic
onMounted(async () => {
  console.log('Grid View component mounted for page:', pageId)

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
  const BREAKPOINTS = { lg: 1800, md: 1200, sm: 768, xs: 480, xxs: 0 } as const
  const COLS = { lg: 18, md: 12, sm: 6, xs: 4, xxs: 2 } as const

  if (width >= BREAKPOINTS.lg) return COLS.lg
  if (width >= BREAKPOINTS.md) return COLS.md
  if (width >= BREAKPOINTS.sm) return COLS.sm
  if (width >= BREAKPOINTS.xs) return COLS.xs
  return COLS.xxs
}

function getMetrics() {
  const ROW_HEIGHT = 30
  const COLS = { lg: 18, md: 12, sm: 6, xs: 4, xxs: 2 } as const

  // Use fixed container width to ensure consistent conversion
  const containerW = 1200 // Fixed width
  const cols = COLS.md // Fixed column count (12)

  return { colW: containerW / cols, rowH: ROW_HEIGHT }
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
