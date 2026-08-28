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
import { useRoute } from 'vue-router'
import { inject, computed, watch } from 'vue'
import { useBoardUsage } from '@/composables/useBoardUsage'
import LayoutRenderer from '@/components/pageEditor/LayoutRenderer.vue'
import BoardsHome from '@/components/boards/BoardsHome.vue'
import {
  type PageRegistryI,
  identifier as PageIdentifier
} from 'org.eclipse.daanse.board.app.lib.api.page'
import {
  type LayoutRepositoryI,
  identifier as LayoutRepositoryIdentifier
} from 'org.eclipse.daanse.board.app.lib.api.layout.page'

const props = defineProps(['params']);
const route = useRoute();
const pageRepo = inject<PageRegistryI>(PageIdentifier)
const layoutRepo = inject<LayoutRepositoryI>(LayoutRepositoryIdentifier)

const pageID = computed(() => {
  return (props.params?.pageid ?? route.params.pageid ?? '') as string
})

/*
 * Counted here rather than in the launcher: a board is just as often opened
 * from a breadcrumb, a link or a reload, and all of those pass through this
 * page.
 */
const { recordOpened } = useBoardUsage()
watch(pageID, (id) => recordOpened(id), { immediate: true })

</script>

<template>
  <div class="report-container">
    <!-- Show LayoutRenderer when a page is selected -->
    <LayoutRenderer
      v-if="pageID"
      :pageId="pageID"
      :viewMode="true"
    />

    <!-- No board selected: the launcher, not a welcome screen -->
    <BoardsHome v-else :page-repo="pageRepo" :layout-repo="layoutRepo" />
  </div>
</template>
<style scoped>

.dottet{
  background: #fafafa;
  background-image: radial-gradient(#b8b8b8 1px, transparent 0);
  background-size: 40px 40px;
  background-position: -19px -19px;
}
.ghost-placeholder {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border: 2px dashed #ccc;
  z-index: 100000;
  pointer-events: none;
}

.report-container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  /* Board surface from the mockups (view mode): canvas token, no dot grid */
  background: var(--color-canvas, #dee1e7);
}

.report-container__title {
  width: 100%;
  padding: 16px;
  border-bottom: 1px dashed var(--color-divider, #ccd1d9);
}

.report-container .widgets-adding-controls {
  display: flex;
  border: 1px solid var(--color-divider, #ccd1d9);
  border-radius: 8px;
  margin: 16px;
}

.report-container .widget-board {
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
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

.dropdown-buttons-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 99999;
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
