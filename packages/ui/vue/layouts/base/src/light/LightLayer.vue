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
 * A page's light around a layout's board (#1242).
 *
 * The board goes in the slot. One canvas lies behind it: the page darkened
 * by its ambient light, the lamps' light cut out of the dark, and their
 * glow. One lies above it, for the light of the lamps that light the
 * widgets too; it is blended additively and lets every pointer through,
 * so it only ever adds light and the board stays operable. The board sits
 * in a stacking context of its own while there is light, as under the
 * weather, so a widget's z-index orders it among the widgets and never
 * above the light.
 *
 * Being edited, a board covers the page behind its widgets with a ground
 * of its own: every light is drawn over the board then, and the page is
 * not darkened, so the person sees where the light falls as they move
 * the lamp.
 */
import { ref } from 'vue'
import type { Page } from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { useLightLayer } from './useLightLayer'

const props = defineProps<{
  page?: Page
  editMode?: boolean
  /** A selector for the element inside the slot that scrolls the widgets. */
  scroller?: string
}>()

const host = ref<HTMLElement>()
const back = ref<HTMLCanvasElement>()
const front = ref<HTMLCanvasElement>()

const { scene, lit, sources, ambient, measure } = useLightLayer({
  page: () => props.page,
  editMode: () => Boolean(props.editMode),
  host,
  back,
  front,
  scroller: () => (props.scroller ? host.value?.querySelector<HTMLElement>(props.scroller) : undefined),
})

defineExpose({ scene, lit, sources, ambient, measure })
</script>

<template>
  <div ref="host" class="light" :class="{ 'light--on': lit }">
    <canvas ref="back" class="light__canvas light__canvas--back" aria-hidden="true" />
    <div class="light__board">
      <slot />
    </div>
    <canvas ref="front" class="light__canvas light__canvas--front" aria-hidden="true" />
  </div>
</template>

<style scoped>
.light {
  position: relative;
  width: 100%;
  height: 100%;
}

.light__board {
  position: relative;
  width: 100%;
  height: 100%;
}

.light--on .light__board {
  z-index: 0;
}

.light__canvas {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  /* Nothing to show while no light falls and the page is not dark */
  visibility: hidden;
}

/* Adds light to the widgets beneath it, never takes any away */
.light__canvas--front {
  mix-blend-mode: plus-lighter;
}

.light--on .light__canvas {
  visibility: visible;
}
</style>
