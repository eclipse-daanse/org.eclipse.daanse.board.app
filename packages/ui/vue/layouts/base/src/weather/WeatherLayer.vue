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
 * A page's weather around a layout's board.
 *
 * The board goes in the slot. One canvas lies behind it, for what falls
 * far away; one lies above it, for what lands on the widgets and splashes
 * off them, and lets every pointer through - the board stays operable.
 * The board itself sits in a stacking context of its own, so a widget's
 * z-index orders it among the widgets and never above the weather.
 */
import { ref } from 'vue'
import type { Page } from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { useWeatherLayer } from './useWeatherLayer'

const props = defineProps<{
  page?: Page
  editMode?: boolean
  /** A selector for the element inside the slot that scrolls the widgets. */
  scroller?: string
}>()

const host = ref<HTMLElement>()
const back = ref<HTMLCanvasElement>()
const front = ref<HTMLCanvasElement>()

const { running, engine, settings } = useWeatherLayer({
  page: () => props.page,
  editMode: () => Boolean(props.editMode),
  host,
  back,
  front,
  scroller: () =>
    props.scroller ? host.value?.querySelector<HTMLElement>(props.scroller) : undefined,
})

defineExpose({ running, engine, settings })
</script>

<template>
  <div ref="host" class="weather" :class="{ 'weather--on': running }">
    <canvas ref="back" class="weather__sky weather__sky--back" aria-hidden="true" />
    <div class="weather__board">
      <slot />
    </div>
    <canvas ref="front" class="weather__sky weather__sky--front" aria-hidden="true" />
  </div>
</template>

<style scoped>
.weather {
  position: relative;
  width: 100%;
  height: 100%;
}

/*
 * Its own stacking context while the weather runs: widgets order among
 * themselves, under the sky. Only then - a board being edited keeps its
 * menus and handles free to rise above everything around it.
 */
.weather__board {
  position: relative;
  width: 100%;
  height: 100%;
}

.weather--on .weather__board {
  z-index: 0;
}

.weather__sky {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  /* Nothing to show until the weather runs */
  visibility: hidden;
}

.weather--on .weather__sky {
  visibility: visible;
}
</style>
