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
import { useRoute, useRouter } from 'vue-router'
import { inject, computed } from 'vue'
import type { Container } from 'inversify'
import { v4 as uuidv4 } from 'uuid'
import LayoutRenderer from '@/components/pageEditor/LayoutRenderer.vue'
import {
  type PageRegistryI,
  type PageI,
  identifier as PageIdentifier
} from 'org.eclipse.daanse.board.app.lib.repository.page'
import {
  type LayoutRepositoryI,
  identifier as LayoutRepositoryIdentifier
} from 'org.eclipse.daanse.board.app.lib.repository.layout.page'

const props = defineProps(['params']);
const route = useRoute();
const router = useRouter();
const container = inject<Container>('container')
const pageRepo = container?.get<PageRegistryI>(PageIdentifier)
const layoutRepo = container?.get<LayoutRepositoryI>(LayoutRepositoryIdentifier)

const pageID = computed(() => {
  return (props.params?.pageid ?? route.params.pageid ?? '') as string
})

const availablePages = computed(() => {
  if (!pageRepo) return []
  return pageRepo.getAllPageIds().map(id => ({
    id,
    page: pageRepo.getPage(id)
  }))
})

const navigateToPage = (pageId: string) => {
  router.push(`/page/${pageId}`)
}

const createNewPage = () => {
  if (!pageRepo || !layoutRepo) return

  const newPageId = uuidv4()
  const baseLayout = layoutRepo.getLayout('org.eclipse.daanse.board.app.ui.vue.layouts.base')

  pageRepo.registerPage({
    id: newPageId,
    name: 'New Page',
    description: '',
    icon: '',
    visibleInNavigation: true,
    layout: baseLayout
  } as PageI)

  router.push(`/page/${newPageId}/edit`)
}

const navigateToLoad = () => {
  router.push('/save')
}
</script>

<template>
  <div class="report-container">
    <!-- Show LayoutRenderer when a page is selected -->
    <LayoutRenderer
      v-if="pageID"
      :pageId="pageID"
      :viewMode="true"
    />

    <!-- Welcome placeholder when no page is selected -->
    <div v-else class="welcome-placeholder">
      <div class="welcome-content">
        <div class="logo-container">
          <div class="logo-bg"></div>
          <img src="/LogoDaanse.svg" alt="Daanse Logo" class="welcome-logo" />
        </div>
        <h1>Welcome to Daanse Dashboard</h1>
        <p>Select a page to view or get started with the options below.</p>

        <div class="welcome-actions">
          <va-button
            preset="primary"
            icon="add"
            @click="createNewPage"
          >
            Create New Page
          </va-button>

          <va-button
            preset="secondary"
            icon="folder_open"
            @click="navigateToLoad"
          >
            Load Dashboard
          </va-button>
        </div>

        <div v-if="availablePages.length > 0" class="available-pages">
          <h3>Available Pages</h3>
          <div class="page-list">
            <va-button
              v-for="item in availablePages"
              :key="item.id"
              preset="plain"
              icon="description"
              @click="navigateToPage(item.id)"
            >
              {{ item.page?.name || item.id }}
            </va-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.welcome-placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%);
}

.welcome-content {
  text-align: center;
  padding: 2rem;
  max-width: 500px;
}

.logo-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8rem;
}

.welcome-content {
  padding-bottom: 10%;
}

.logo-bg {
  position: absolute;
  width: 200px;
  height: 200px;
  background-image: linear-gradient(-45deg, #E19840 50%, #ffffff 50%);
  filter: blur(68px);
  border-radius: 50%;
  z-index: 0;
  margin-top: -23px;
}

.welcome-logo {
  max-width: 150px;
  height: auto;
  position: relative;
  z-index: 1;
}

.welcome-content h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.welcome-content p {
  color: #666;
  margin-bottom: 2rem;
}

.welcome-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.available-pages {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #ddd;
}

.available-pages h3 {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
}

.page-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
}

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
}

.report-container__title {
  width: 100%;
  padding: 16px;
  border-bottom: 1px dashed #e0e0e0;
}

.report-container .widgets-adding-controls {
  display: flex;
  border: 1px solid #e0e0e0;
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
