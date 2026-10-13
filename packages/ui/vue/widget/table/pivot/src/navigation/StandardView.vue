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
/* The table, and over it a dropdown for the page and one for the chapter. */
import { computed } from 'vue'
import { axisOptions, positionsOf, type Cellset } from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import { SlicePicker } from 'org.eclipse.daanse.board.app.ui.vue.common.xmla'
import type { NavigationStore } from './store'

const props = defineProps<{
  cellset: Cellset
  store: NavigationStore
}>()

const pages = computed(() => axisOptions(positionsOf(props.cellset, 2)))
const chapters = computed(() =>
  props.cellset.axes.length > 3 ? axisOptions(positionsOf(props.cellset, 3)) : undefined,
)
const slice = computed(() => props.store.state.slice)
</script>

<template>
  <div class="standard">
    <SlicePicker
      :pages="pages"
      :chapters="chapters"
      :page="slice.axis2"
      :chapter="slice.axis3"
      @update:page="store.select({ ...slice, axis2: $event })"
      @update:chapter="store.select({ ...slice, axis3: $event })"
    />
    <div class="standard__table">
      <slot name="table" />
    </div>
  </div>
</template>

<style scoped>
.standard {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  min-height: 0;
}

.standard__table {
  flex: 1;
  min-height: 0;
  overflow: auto;
}
</style>
