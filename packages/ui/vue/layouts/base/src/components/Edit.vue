<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<script setup lang="ts">
import { ref, computed, inject, onMounted, onUnmounted, nextTick, watch } from 'vue'
import Moveable from 'vue3-moveable'
import Draggable from 'vuedraggable'
import { useMoveableLayout, type ILayoutItem } from '../composables/useMovableLayout'

import { DFloatingWindow } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { WidgetWrapper,defaultConfig } from 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper'
import { cloneDeep } from 'lodash'
import { useRouter, useRoute } from 'vue-router'

/* ---- snapping ---------------------------------------------------------- */

/**
 * The grid a widget is dragged over is the one it lines up with.
 *
 * 24px, the same as the dots drawn on the surface. It used to snap to 20,
 * so a widget came to rest between the dots it appeared to sit on.
 */
const GRID = 24

/*
 * Whether to snap is asked in the topbar, which is a different bundle. It
 * says so on the root element - the same way the theme and the backdrop
 * switch travel - and this reads it back. An attribute rather than a shared
 * module, so neither side has to depend on the other for one boolean.
 */
const snapToGrid = ref(document.documentElement.getAttribute('data-board-snap') !== 'off')

let snapWatcher: MutationObserver | null = null

onMounted(() => {
  snapWatcher = new MutationObserver(() => {
    snapToGrid.value = document.documentElement.getAttribute('data-board-snap') !== 'off'
  })
  snapWatcher.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-board-snap'],
  })
})

onUnmounted(() => snapWatcher?.disconnect())

const emit = defineEmits(['openSettings', 'removeWidget'])

const route = useRoute()
const router = useRouter()
const pageId = (route.params.pageid as string) || ''

const widgetConfig = ref()
const widgetSettingsOpenedId = ref('')
const widgetsTmp = ref([])

const isDragging = ref(false)

const endpointfinder = inject('endpointfinder', null);
const endPointFinder = ()=>{
  (endpointfinder as any)()
}
const endpointfinder_present = computed(()=>{
  return !!endpointfinder
})
const widgetSelectorVisible = ref(false)

const pageSettingsOpenedId = ref<string|undefined>(undefined);

const {
  layoutStore,
  widgetStore,
  clipboardStore,
  ghostPlaceholder,
  processDropCoordinates,
  processDragOverCoordinates,
  hidePlaceholder,
  getInitialStyle,
  getMovableControlStyles,
  drag,
  resize,
  moveUp,
  moveDown,
  moveToBottom,
  moveToTop,
  addWidget: addWidgetComposable,
  removeWidget: removeWidgetComposable,
  copyWidget: copyWidgetComposable,
  pasteWidget: pasteWidgetComposable,
} = useMoveableLayout(pageId, () => (snapToGrid.value ? GRID : 0))

const safeWidgets = computed(() => widgetStore?.widgets || [])

/*
 * How large the board has to be for what is on it.
 *
 * It starts at the size of its container and grows only when a widget
 * reaches the edge - the room past the last widget is what you need to drag
 * one further out, not a margin the board carries from the start.
 */
const CANVAS_PADDING_X = 160
const CANVAS_PADDING_Y = 160

const canvasSize = computed(() => {
  const layout = layoutStore?.layout || []
  if (layout.length === 0) return { width: 0, height: 0 }

  let maxRight = 0
  let maxBottom = 0
  for (const item of layout) {
    const right = (item.x || 0) + (item.width || 0)
    const bottom = (item.y || 0) + (item.height || 0)
    if (right > maxRight) maxRight = right
    if (bottom > maxBottom) maxBottom = bottom
  }
  return {
    width: maxRight + CANVAS_PADDING_X,
    height: maxBottom + CANVAS_PADDING_Y,
  }
})



// Minimap
const scrollContainer = ref<HTMLElement | null>(null)
const viewportRect = ref({ x: 0, y: 0, w: 1, h: 1 })

/*
 * The map is drawn to whatever room it has, not to a fixed 200x140. It sits
 * in a window that can be resized, and a map that keeps its old size in a
 * larger window has wasted the space it was just given.
 */
const minimapBox = ref<HTMLElement | null>(null)
const minimapSize = ref({ w: 200, h: 140 })
let minimapObserver: ResizeObserver | null = null

const minimapScale = computed(() => {
  const el = scrollContainer.value
  const cw = Math.max(canvasSize.value.width, el?.clientWidth || 1)
  const ch = Math.max(canvasSize.value.height, el?.clientHeight || 1)
  return Math.min(minimapSize.value.w / cw, minimapSize.value.h / ch)
})

const updateViewport = () => {
  const el = scrollContainer.value
  if (!el) return
  const cw = Math.max(canvasSize.value.width, el.clientWidth)
  const ch = Math.max(canvasSize.value.height, el.clientHeight)
  viewportRect.value = {
    x: el.scrollLeft / cw,
    y: el.scrollTop / ch,
    w: el.clientWidth / cw,
    h: el.clientHeight / ch,
  }
}

const onMinimapClick = (e: MouseEvent) => {
  const el = scrollContainer.value
  if (!el) return
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  const rx = (e.clientX - rect.left) / rect.width
  const ry = (e.clientY - rect.top) / rect.height
  const cw = Math.max(canvasSize.value.width, el.clientWidth)
  const ch = Math.max(canvasSize.value.height, el.clientHeight)
  el.scrollLeft = rx * cw - el.clientWidth / 2
  el.scrollTop = ry * ch - el.clientHeight / 2
}

const showMinimap = computed(() => {
  const el = scrollContainer.value
  if (!el) return false
  return canvasSize.value.width > el.clientWidth || canvasSize.value.height > el.clientHeight
})

onMounted(() => {
  nextTick(() => updateViewport())
})

/* The map redraws itself to the window it is in, however that window changes */
watch(minimapBox, (el) => {
  minimapObserver?.disconnect()
  if (!el) return
  minimapObserver = new ResizeObserver(([entry]) => {
    const box = entry.contentRect
    if (box.width > 0 && box.height > 0) minimapSize.value = { w: box.width, h: box.height }
  })
  minimapObserver.observe(el)
})

onUnmounted(() => minimapObserver?.disconnect())

watch(canvasSize, () => nextTick(() => updateViewport()))

// Copy/Paste functionality
const pastePosition = ref({ x: 0, y: 0 })

const captureMousePosition = (event: MouseEvent) => {
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  pastePosition.value = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }
}

/*
 * What the layout can do with a widget, for the wrapper to show.
 *
 * These are the actions from the right-click menu. They live here because
 * they are only meaningful among other widgets - "nach vorn" is a statement
 * about stacking, and a widget on its own has nothing to be in front of.
 *
 * The wording says what happens: the underlying moveUp/moveDown change the
 * z order, not the position, which "Move up" rather suggested they did.
 */
const stackActions = (uid: string) => [
  { id: 'front', icon: 'flip_to_front', label: 'Nach vorn', run: () => moveUp(uid) },
  { id: 'back', icon: 'flip_to_back', label: 'Nach hinten', run: () => moveDown(uid) },
  { id: 'top', icon: 'vertical_align_top', label: 'Ganz vorn', run: () => moveToTop(uid) },
  { id: 'bottom', icon: 'vertical_align_bottom', label: 'Ganz hinten', run: () => moveToBottom(uid) },
  { id: 'copy', icon: 'content_copy', label: 'Kopieren', run: () => copyWidget(uid) },
]

const copyWidget = (widgetId: string) => {
  copyWidgetComposable(widgetId)
}

const pasteWidget = () => {
  pasteWidgetComposable(pastePosition.value.x, pastePosition.value.y)
}

// Canvas context menu state
const canvasContextMenu = ref({ visible: false, x: 0, y: 0 })

const onCanvasContextMenu = (event: MouseEvent) => {
  // Only show paste menu if clipboard has content
  if (!clipboardStore.hasClipboard) {
    canvasContextMenu.value.visible = false
    return // Allow native context menu
  }

  event.preventDefault()
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  pastePosition.value = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }
  canvasContextMenu.value = {
    visible: true,
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }
}

const closeCanvasContextMenu = () => {
  canvasContextMenu.value.visible = false
}

const pasteWidgetFromMenu = () => {
  pasteWidgetComposable(pastePosition.value.x, pastePosition.value.y)
  canvasContextMenu.value.visible = false
}




/** Lands a value on the grid, or leaves it alone while snapping is off. */
const toGrid = (value: number) => (snapToGrid.value ? Math.round(value / GRID) * GRID : value)

/* ---- selecting several widgets ---------------------------------------- */

/*
 * Which widgets are picked, in the order they were picked.
 *
 * Ctrl or Shift and a click adds one or takes it out again; a plain click
 * on the surface clears the lot. One widget keeps its own handles, as
 * before - the group only takes over from two, which is when there is a
 * group to speak of.
 */
const selected = ref<string[]>([])

const selectionActive = computed(() => selected.value.length > 1)
const selectionTargets = computed(() => selected.value.map((uid) => `.${uid}`))

function isSelected(uid: string) {
  return selected.value.includes(uid)
}

/** Whether a widget belongs to a group - marked even while nothing is picked. */
function isGrouped(uid: string) {
  const item = (layoutStore?.layout ?? []).find((i: ILayoutItem) => i.id === uid)
  return Boolean(item?.group)
}

/**
 * Everything that comes with this widget: itself, plus the rest of its
 * group. Picking one member of a group picks the group - that is what
 * grouping them was for.
 */
function withGroup(uid: string): string[] {
  const layout = layoutStore?.layout ?? []
  const item = layout.find((i: ILayoutItem) => i.id === uid)
  if (!item?.group) return [uid]
  return layout.filter((i: ILayoutItem) => i.group === item.group).map((i: ILayoutItem) => i.id)
}

function toggleSelection(uid: string, event: MouseEvent) {
  const kin = withGroup(uid)

  if (!event.ctrlKey && !event.metaKey && !event.shiftKey) {
    // A plain click on a widget picks that one alone - or its whole group
    selected.value = kin
    return
  }

  // Ctrl-click on a group takes the group in or out as a whole
  const alreadyIn = kin.every((id) => isSelected(id))
  selected.value = alreadyIn
    ? selected.value.filter((id) => !kin.includes(id))
    : [...selected.value, ...kin.filter((id) => !isSelected(id))]
}

function clearSelection() {
  selected.value = []
}

/* A widget that was removed cannot stay picked */
watch(
  () => (layoutStore?.layout ?? []).map((item: ILayoutItem) => item.id).join(','),
  (ids) => {
    const alive = new Set(ids ? ids.split(',') : [])
    const kept = selected.value.filter((uid) => alive.has(uid))
    if (kept.length !== selected.value.length) selected.value = kept
  },
)

/** The picked widgets' layout entries, for moving and lining up. */
function pickedItems(): ILayoutItem[] {
  const layout = layoutStore?.layout ?? []
  return selected.value
    .map((uid) => layout.find((item: ILayoutItem) => item.id === uid))
    .filter(Boolean) as ILayoutItem[]
}

/*
 * Moving the group.
 *
 * Moveable reports each member's own transform, so every one is written
 * back from what it was given rather than from a shared offset - which
 * keeps a member that started off-grid off-grid by the same amount, and
 * lands them all on it when snapping is on.
 */
function dragGroup(e: any) {
  for (const ev of e.events) {
    const uid = [...ev.target.classList].find((c: string) => selected.value.includes(c))
    if (!uid) continue
    const item = (layoutStore?.layout ?? []).find((i: ILayoutItem) => i.id === uid)
    if (!item) continue
    item.x = toGrid(ev.translate[0])
    item.y = toGrid(ev.translate[1])
    ev.target.style.transform = `translate(${item.x}px, ${item.y}px)`
  }
}

/* ---- grouping ---------------------------------------------------------- */

/** True while everything picked already belongs to one and the same group. */
const selectionIsGroup = computed(() => {
  const items = pickedItems()
  if (items.length < 2) return false
  const first = items[0].group
  return Boolean(first) && items.every((i) => i.group === first)
})

function groupSelection() {
  const items = pickedItems()
  if (items.length < 2) return
  const id = `g_${Math.random().toString(36).slice(2, 9)}`
  for (const item of items) item.group = id
}

/*
 * Taking a group apart leaves the widgets where they are and picked as they
 * were - only the tie between them goes.
 */
function ungroupSelection() {
  for (const item of pickedItems()) delete item.group

  // Members that were not picked would be left in a group of their own
  const layout = layoutStore?.layout ?? []
  const counts = new Map<string, number>()
  for (const item of layout) {
    if (item.group) counts.set(item.group, (counts.get(item.group) ?? 0) + 1)
  }
  for (const item of layout) {
    if (item.group && counts.get(item.group) === 1) delete item.group
  }
}

/* ---- lining them up ---------------------------------------------------- */

/*
 * Against the outside of the selection, not against one chosen widget: the
 * result is the same for "align left" whichever member you picked first,
 * which is what makes the buttons predictable.
 */
type Alignment = 'left' | 'hcenter' | 'right' | 'top' | 'vcenter' | 'bottom'

function align(how: Alignment) {
  const items = pickedItems()
  if (items.length < 2) return

  const left = Math.min(...items.map((i) => i.x))
  const right = Math.max(...items.map((i) => i.x + i.width))
  const top = Math.min(...items.map((i) => i.y))
  const bottom = Math.max(...items.map((i) => i.y + i.height))

  for (const item of items) {
    switch (how) {
      case 'left':
        item.x = toGrid(left)
        break
      case 'right':
        item.x = toGrid(right - item.width)
        break
      case 'hcenter':
        item.x = toGrid((left + right) / 2 - item.width / 2)
        break
      case 'top':
        item.y = toGrid(top)
        break
      case 'bottom':
        item.y = toGrid(bottom - item.height)
        break
      case 'vcenter':
        item.y = toGrid((top + bottom) / 2 - item.height / 2)
        break
    }
  }
}

/*
 * Even gaps between them.
 *
 * The outer two stay where they are and the rest are spread between, so
 * distributing does not move the selection as a whole. Needs three: with
 * two there is one gap and nothing to even out.
 */
function distribute(axis: 'x' | 'y') {
  const items = pickedItems()
  if (items.length < 3) return

  const size = axis === 'x' ? 'width' : 'height'
  const sorted = [...items].sort((a, b) => a[axis] - b[axis])
  const first = sorted[0]
  const last = sorted[sorted.length - 1]

  const span = last[axis] - (first[axis] + first[size])
  const between = sorted.slice(1, -1)
  const occupied = between.reduce((sum, i) => sum + i[size], 0)
  const gap = (span - occupied) / (sorted.length - 1)

  let cursor = first[axis] + first[size] + gap
  for (const item of between) {
    item[axis] = toGrid(cursor)
    cursor += item[size] + gap
  }
}

const addWidget = (type: string, datasourceId: string, dropX: number, dropY: number) => {
  const config = { datasourceId, settings: {} }
  const wrapperConfig = cloneDeep(defaultConfig)

  const width = ghostPlaceholder.value.width
  const height = ghostPlaceholder.value.height

  /*
   * The corner is what lands on the grid, not the pointer.
   *
   * A widget is dropped centred under the cursor, and rounding the cursor
   * before subtracting half the widget put the corner half a widget off the
   * grid again - which is why snapping appeared to do nothing on the way in.
   */
  const layoutConfig = {
    x: toGrid(dropX - width / 2),
    y: toGrid(dropY - height / 2),
    width,
    height,
    z: 3005,
  }

  addWidgetComposable(type, config, wrapperConfig, layoutConfig)
}

const openWidgetSettings = (id: string) => {
  emit('openSettings', id)
}

const saveLayout = () => {
  // Values are already in the store, no need to save
}

const resetLayout = () => {
  // Reset to empty state using store methods
  widgetStore?.updateWidgets([])
  layoutStore?.updateLayout([])
}

const isSaveResetDisabled = computed(() => {
  return safeWidgets.value.length === 0 && (layoutStore?.layout || []).length === 0
})

const removeWidget = (uid: string) => {
  removeWidgetComposable(uid)
  emit('removeWidget', uid)
}

const currentlyEditingWidget = computed(() => {
  return safeWidgets.value.find((widget:any) => widget.uid === widgetSettingsOpenedId.value)
})

const getCanvasCoords = (event: DragEvent | MouseEvent) => {
  const el = scrollContainer.value
  if (!el) return { x: 0, y: 0 }
  const rect = el.getBoundingClientRect()
  return {
    x: event.clientX - rect.left + el.scrollLeft,
    y: event.clientY - rect.top + el.scrollTop,
  }
}


const onDrop = (event: DragEvent) => {
  hidePlaceholder()
  const coords = getCanvasCoords(event)
  // Left as they are: the corner is rounded in addWidget, where the widget's
  // own size is known
  widgetConfig.value = { dropX: coords.x, dropY: coords.y }
}

const onDragOver = (event: DragEvent) => {
  if (event.dataTransfer?.types.includes('text/plain')) {
    event.preventDefault()
    isDragging.value = true

    const coords = getCanvasCoords(event)
    // The outline shows where it will land, so it lands where the outline is
    ghostPlaceholder.value.x = toGrid(coords.x - ghostPlaceholder.value.width / 2)
    ghostPlaceholder.value.y = toGrid(coords.y - ghostPlaceholder.value.height / 2)
    ghostPlaceholder.value.visible = true
  }
}

const onDragLeave = (event: DragEvent) => {
  if (event.dataTransfer?.types.includes('text/plain')) {
    isDragging.value = false
    hidePlaceholder()
  }
}

const change = (e: any) => {
  console.log(e)
  const datasource = 'test'
  const widgetType = e.added?.element?.type || 'default'
  const dropX = widgetConfig.value?.dropX ?? ghostPlaceholder.value.x + ghostPlaceholder.value.width / 2
  const dropY = widgetConfig.value?.dropY ?? ghostPlaceholder.value.y + ghostPlaceholder.value.height / 2
  addWidget(widgetType, datasource, dropX, dropY)
}

</script>

<template>
  <div
    class="report-container"
    @contextmenu="onCanvasContextMenu"
    @click="closeCanvasContextMenu"
    @pointerdown.self="clearSelection"
  >
    <div class="scroll-viewport" ref="scrollContainer" @scroll="updateViewport">
      <div
        class="canvas dottet"
        :style="{
          minWidth: canvasSize.width > 0 ? `max(100%, ${canvasSize.width}px)` : undefined,
          minHeight: canvasSize.height > 0 ? `max(100%, ${canvasSize.height}px)` : undefined,
        }"
        @drop="onDrop"
        @dragover="onDragOver"
        @dragleave="onDragLeave"
      >
        <draggable
          :list="widgetsTmp"
          :group="{ name: 'widgets' }"
          ghost-class="ghost"
          itemKey="type"
          style="position: absolute; top: 0; left: 0; height: 100%; width: 100%"
          @change="change"
          @drop="onDrop"
          @dragover="onDragOver"
          @dragleave="onDragLeave"
          @contextmenu="onCanvasContextMenu"
        >
          <template #item="{ element }">
            <div style="display: none">{{ element?.type || '' }}</div>
          </template>
        </draggable>
        <div class="widget-board">
      <div
        v-if="ghostPlaceholder.visible"
        class="ghost-placeholder"
        :style="{
          left: `${ghostPlaceholder.x}px`,
          top: `${ghostPlaceholder.y}px`,
          width: `${ghostPlaceholder.width}px`,
          height: `${ghostPlaceholder.height}px`,
        }"
      ></div>
      <template v-for="widget in safeWidgets" :key="widget.uid">
        <div
          :class="[
            widget.uid,
            'dashboard-item-container',
            { 'is-selected': isSelected(widget.uid), 'in-group': isGrouped(widget.uid) },
          ]"
          :style="getInitialStyle(widget.uid)"
          :ref="widget.uid"
          @pointerdown="toggleSelection(widget.uid, $event)"
        >
          <va-dropdown
            :trigger="'right-click'"
            :auto-placement="false"
            placement="right-start"
            cursor
          >
            <template #anchor>
              <div class="dashboard-item" @contextmenu.stop>
                <WidgetWrapper
                  :widget="widget"
                  :ref="`${widget.uid}_wrapper`"
                  :extra-actions="stackActions(widget.uid)"
                  @openSettings="openWidgetSettings"
                  editEnabled
                  @removeWidget="removeWidget"
                />
              </div>
            </template>
            <va-dropdown-content>
              <div class="dropdown-buttons-container">
                <va-button @click="moveUp(widget.uid)"> Move up </va-button>
                <va-button @click="moveDown(widget.uid)"> Move down </va-button>
                <va-button @click="moveToTop(widget.uid)"> Move to top </va-button>
                <va-button @click="moveToBottom(widget.uid)"> Move to bottom </va-button>
                <va-button @click="copyWidget(widget.uid)"> Copy </va-button>
              </div>
            </va-dropdown-content>
          </va-dropdown>
        </div>
        <!-- One widget keeps its own handles; from two the group takes over -->
        <Moveable
          v-if="!selectionActive"
          v-bind:target="[`.${widget.uid}`]"
          v-bind:draggable="true"
          v-bind:resizable="true"
          v-bind:useResizeObserver="true"
          v-bind:useMutationObserver="true"
          @drag="drag(widget.uid, $event)"
          @resize="resize(widget.uid, $event)"
          :snappable="snapToGrid"
          :snapGridWidth="GRID"
          :snapGridHeight="GRID"
          :origin="false"
          :ref="`${widget.uid}_control`"
          :style="getMovableControlStyles(widget.uid)"
        >
        </Moveable>
      </template>

      <!--
        The group: one set of handles around everything picked, so they move
        as what they look like - a group - rather than one at a time.
      -->
      <Moveable
        v-if="selectionActive"
        :target="selectionTargets"
        :draggable="true"
        :resizable="false"
        :useResizeObserver="true"
        :useMutationObserver="true"
        :origin="false"
        :snappable="snapToGrid"
        :snapGridWidth="GRID"
        :snapGridHeight="GRID"
        @dragGroup="dragGroup"
      />

      <!--
        Shown only with something to line up. Against the outside of the
        selection, so "left" means the same thing whichever widget was
        picked first.
      -->
      <div v-if="selectionActive" class="align-bar" @pointerdown.stop>
        <span class="align-bar__count">
          {{ selected.length }} {{ selectionIsGroup ? 'in einer Gruppe' : 'gewählt' }}
        </span>

        <span class="align-bar__group">
          <button type="button" class="align-bar__btn" title="Links bündig" @click="align('left')">
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <path d="M2 2v12" stroke="currentColor" stroke-width="1.6" />
              <rect x="4" y="3.5" width="9" height="3" fill="currentColor" />
              <rect x="4" y="9.5" width="5.5" height="3" fill="currentColor" />
            </svg>
          </button>
          <button type="button" class="align-bar__btn" title="Waagerecht mittig" @click="align('hcenter')">
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <path d="M8 2v12" stroke="currentColor" stroke-width="1.6" />
              <rect x="3" y="3.5" width="10" height="3" fill="currentColor" />
              <rect x="5" y="9.5" width="6" height="3" fill="currentColor" />
            </svg>
          </button>
          <button type="button" class="align-bar__btn" title="Rechts bündig" @click="align('right')">
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <path d="M14 2v12" stroke="currentColor" stroke-width="1.6" />
              <rect x="3" y="3.5" width="9" height="3" fill="currentColor" />
              <rect x="6.5" y="9.5" width="5.5" height="3" fill="currentColor" />
            </svg>
          </button>
        </span>

        <span class="align-bar__group">
          <button type="button" class="align-bar__btn" title="Oben bündig" @click="align('top')">
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <path d="M2 2h12" stroke="currentColor" stroke-width="1.6" />
              <rect x="3.5" y="4" width="3" height="9" fill="currentColor" />
              <rect x="9.5" y="4" width="3" height="5.5" fill="currentColor" />
            </svg>
          </button>
          <button type="button" class="align-bar__btn" title="Senkrecht mittig" @click="align('vcenter')">
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <path d="M2 8h12" stroke="currentColor" stroke-width="1.6" />
              <rect x="3.5" y="3" width="3" height="10" fill="currentColor" />
              <rect x="9.5" y="5" width="3" height="6" fill="currentColor" />
            </svg>
          </button>
          <button type="button" class="align-bar__btn" title="Unten bündig" @click="align('bottom')">
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <path d="M2 14h12" stroke="currentColor" stroke-width="1.6" />
              <rect x="3.5" y="3" width="3" height="9" fill="currentColor" />
              <rect x="9.5" y="6.5" width="3" height="5.5" fill="currentColor" />
            </svg>
          </button>
        </span>

        <!-- Evening out gaps needs a middle one to move -->
        <span v-if="selected.length > 2" class="align-bar__group">
          <button type="button" class="align-bar__btn" title="Waagerecht gleichmäßig verteilen" @click="distribute('x')">
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <rect x="1.5" y="4" width="2.5" height="8" fill="currentColor" />
              <rect x="6.75" y="4" width="2.5" height="8" fill="currentColor" />
              <rect x="12" y="4" width="2.5" height="8" fill="currentColor" />
            </svg>
          </button>
          <button type="button" class="align-bar__btn" title="Senkrecht gleichmäßig verteilen" @click="distribute('y')">
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <rect x="4" y="1.5" width="8" height="2.5" fill="currentColor" />
              <rect x="4" y="6.75" width="8" height="2.5" fill="currentColor" />
              <rect x="4" y="12" width="8" height="2.5" fill="currentColor" />
            </svg>
          </button>
        </span>

        <span class="align-bar__group">
          <button
            v-if="!selectionIsGroup"
            type="button"
            class="align-bar__btn"
            title="Gruppieren - zusammen bewegen und wählen"
            @click="groupSelection"
          >
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <rect x="1.5" y="1.5" width="6" height="6" rx="1" fill="currentColor" />
              <rect x="8.5" y="8.5" width="6" height="6" rx="1" fill="currentColor" />
              <rect x="8.5" y="1.5" width="6" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="1.3" />
              <rect x="1.5" y="8.5" width="6" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="1.3" />
            </svg>
          </button>
          <button
            v-else
            type="button"
            class="align-bar__btn"
            title="Gruppierung aufheben"
            @click="ungroupSelection"
          >
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <rect x="1.5" y="1.5" width="6" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="1.3" />
              <rect x="8.5" y="8.5" width="6" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="1.3" />
              <path d="M6 10l4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
            </svg>
          </button>
        </span>

        <button type="button" class="align-bar__btn align-bar__btn--quiet" title="Auswahl aufheben" @click="clearSelection">
          ×
        </button>
      </div>

      <!-- Canvas Context Menu (floating) for Paste -->
      <div
        v-if="canvasContextMenu.visible && clipboardStore.hasClipboard"
        class="canvas-context-menu"
        :style="{ left: canvasContextMenu.x + 'px', top: canvasContextMenu.y + 'px' }"
      >
        <div class="dropdown-buttons-container">
          <va-button @click="pasteWidgetFromMenu" size="small"> Paste </va-button>
        </div>
      </div><!-- end canvas-context-menu -->
      </div><!-- end widget-board -->
    </div><!-- end canvas -->
    </div><!-- end scroll-viewport -->

    <!--
      The overview, in the same floating window the palette uses: it shows
      up on its own when the board outgrows the screen, so it has to be
      movable - wherever it lands by default is over something on someone's
      board.
    -->
    <DFloatingWindow
      v-if="showMinimap"
      title="Übersicht"
      remember-as="daanse.board.minimap"
      :initial="{ x: 0, y: 420, w: 240, h: 168, dock: 'left' }"
      :min-width="140"
      :max-width="420"
      :min-height="110"
      :closable="false"
      dockable
    >
      <div ref="minimapBox" class="minimap-canvas" @click="onMinimapClick">
        <div
          v-for="item in (layoutStore?.layout || [])"
          :key="item.id"
          class="minimap-widget"
          :style="{
            left: (item.x * minimapScale) + 'px',
            top: (item.y * minimapScale) + 'px',
            width: (item.width * minimapScale) + 'px',
            height: (item.height * minimapScale) + 'px',
          }"
        ></div>
        <div
          class="minimap-viewport"
          :style="{
            left: (viewportRect.x * 100) + '%',
            top: (viewportRect.y * 100) + '%',
            width: (viewportRect.w * 100) + '%',
            height: (viewportRect.h * 100) + '%',
          }"
        ></div>
      </div>
    </DFloatingWindow>
  </div>
</template>
<style>
.ghost {
  display: none;
}
</style>

<style scoped>
.report-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.scroll-viewport {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.canvas {
  position: relative;
  /*
   * The container, not the viewport: 100vw is the width of the browser
   * window, and the board is narrower than that - the rail and the topbar
   * take their share. Measuring against the window made the board wider
   * than what holds it, so an empty board still had scrollbars.
   */
  min-width: 100%;
  min-height: 100%;
  box-sizing: border-box;
}

/*
 * The board surface is opaque so the grid reads and the widgets sit on
 * something plain - a photograph behind them makes it hard to see what you
 * are moving.
 */
.dottet {
  /* Board surface from the mockups: canvas token, 24px dot grid */
  background: var(--color-canvas, #dee1e7);
  background-image: radial-gradient(var(--color-divider, #ccd1d9) 1px, transparent 0);
  background-size: 24px 24px;
  background-position: -12px -12px;
  background-repeat: repeat;
  transition: background-color 120ms ease;
}

.ghost-placeholder {
  position: absolute;
  background-color: color-mix(in srgb, var(--color-accent, #2f5fbd) 10%, transparent);
  border-radius: var(--radius-sm, 5px);
  border: 2px dashed var(--color-outline, #b9bec9);
  z-index: 1000000;
  pointer-events: none;
}

.widget-board {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Minimap */
/* Fills the window it was given, and is what the scale is measured against */
.minimap-canvas {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.minimap-widget {
  position: absolute;
  background: color-mix(in srgb, var(--color-accent, #2f5fbd) 30%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-accent, #2f5fbd) 55%, transparent);
  border-radius: 1px;
}

.minimap-viewport {
  position: absolute;
  border: 2px solid var(--color-err, #b02a1c);
  background: color-mix(in srgb, var(--color-err, #b02a1c) 8%, transparent);
  border-radius: 2px;
  pointer-events: none;
}

.report-container .add-btn {
  margin: 0 16px 16px 0;
  align-self: self-end;
}

.dashboard-item {
  position: absolute;
  width: 100%;
  height: 100%;
}

.dashboard-item-container {
  position: absolute;
}

.widget-board-dropdown {
  width: 100%;
  height: 100%;
}

.dropdown-buttons-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 99999;
}

/*
 * Asked for from the topbar: the surface steps back and the page's own
 * background - which the layout renderer paints underneath - shows through.
 *
 * The grid stays. It is what tells you where a widget will land, and that
 * is needed most when placing something against the picture.
 */
:root[data-board-backdrop='on'] .canvas.dottet {
  background-color: transparent;
}

/* ------------------------------------------------------ several at once */

/* A picked widget says so, since the group's handles surround them all
   rather than marking each one */
.dashboard-item-container.is-selected::after {
  content: '';
  position: absolute;
  inset: -2px;
  border: 1px solid var(--color-accent, #2f5fbd);
  border-radius: var(--radius-sm, 5px);
  pointer-events: none;
}

/*
 * A widget in a group says so even when nothing is picked, otherwise the
 * tie is invisible until you click one and everything moves.
 */
.dashboard-item-container.in-group::before {
  content: '';
  position: absolute;
  inset: -1px;
  border: 1px dashed color-mix(in srgb, var(--color-accent, #2f5fbd) 45%, transparent);
  border-radius: var(--radius-sm, 5px);
  pointer-events: none;
}

/*
 * The bar sits at the top of the board, over it rather than in it: the
 * selection can be anywhere, and a bar that follows it would cover what
 * you are lining up.
 */
.align-bar {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 30000;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 6px;
  background: var(--color-pane, #f6f7f9);
  border: 1px solid var(--color-divider, #ccd1d9);
  border-radius: var(--radius-md, 6px);
  box-shadow: var(--shadow-e3, 0 6px 20px rgb(0 0 0 / 22%));
}

.align-bar__count {
  padding: 0 4px 0 6px;
  font-size: var(--text-xs, 11px);
  color: var(--color-dim, #6b7482);
  white-space: nowrap;
}

/* Kinds of alignment are kept apart, so the eye finds the axis first */
.align-bar__group {
  display: flex;
  gap: 1px;
  padding-left: 8px;
  border-left: 1px solid var(--color-divider, #ccd1d9);
}

.align-bar__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  color: var(--color-fg, #22252b);
  background: none;
  border: 0;
  border-radius: var(--radius-xs, 3px);
  cursor: pointer;
}

.align-bar__btn:hover {
  background-color: var(--color-raised, #ffffff);
}

.align-bar__btn:focus-visible {
  outline: 2px solid var(--color-accent, #2f5fbd);
  outline-offset: -2px;
}

.align-bar__btn--quiet {
  font-size: 15px;
  line-height: 1;
  color: var(--color-dim, #6b7482);
}

.align-bar__btn--quiet:hover {
  color: var(--color-fg, #22252b);
}

.canvas-context-menu {
  position: absolute;
  background: var(--color-raised, #ffffff);
  border: 1px solid var(--color-divider, #ccd1d9);
  border-radius: var(--radius-sm, 5px);
  padding: 8px;
  box-shadow: var(--shadow-e2, 0 2px 8px rgba(25, 30, 45, 0.14));
  color: var(--color-fg, #22252b);
  z-index: 10000001;
}

.va-dropdown__content {
  z-index: 10000000 !important;
}

.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper {
  z-index: 20000000 !important;
}

.add_widget-button {
  position: absolute;
  display: flex;
  flex-direction: row;
  gap: 10px;
  right: 30px;
  bottom: 20px;
}
.pages_board{
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  left: 80px;
  bottom: 20px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}


.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform:  scaleY(0%) translateY(100%);
    opacity: 0;
  }
  100% {
    transform: scaleY(100%) translateY(0%);
    opacity: 1;
  }
}
</style>
