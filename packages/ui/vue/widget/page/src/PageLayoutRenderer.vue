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
import { computed, ref, watch, onMounted, onErrorCaptured, inject, shallowRef } from 'vue'
import { useWidgetsStore, type IWidget } from 'org.eclipse.daanse.board.app.ui.vue.stores.widgets'
import { useLayoutStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.layout'
import { WidgetWrapper } from 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper'
import type { Container } from 'inversify'
import {
  type LayoutRepositoryI,
  identifier as LayoutRepositoryIdentifier,
  type LayoutI
} from 'org.eclipse.daanse.board.app.lib.repository.layout.page'
import {
  type PageRegistryI,
  identifier as PageIdentifier,
  type PageI as RepositoryPageI
} from 'org.eclipse.daanse.board.app.lib.repository.page'

const props = defineProps<{
  pageId: string
  viewMode?: boolean
}>()

const emit = defineEmits(['openWidgetSettings', 'removeWidget'])

// Dependency Injection
const container = inject<Container>('container')
const layoutRepo = container?.get<LayoutRepositoryI>(LayoutRepositoryIdentifier)
const pageRepo = container?.get<PageRegistryI>(PageIdentifier)

// Layout Engine Components
const currentPage = ref<RepositoryPageI | null>(null)
const currentLayout = ref<LayoutI | null>(null)
const ViewComponent = shallowRef<any>(null)

// Loading/Error states
const isLoading = ref(true)
const error = ref<string | null>(null)

// Load layout engine (wie im echten LayoutRenderer)
const loadLayout = () => {
  if (props.pageId && pageRepo) {
    const page = pageRepo.getPage(props.pageId)
    currentPage.value = page || null

    // Reset components first
    ViewComponent.value = null
    currentLayout.value = null

    if (page?.layout && layoutRepo) {
      const layout = layoutRepo.getLayout(page.layout.id)
      currentLayout.value = layout || null

      // Für ViewMode verwende die View-Komponente des Layouts
      if (layout?.component) {
        ViewComponent.value = layout.component
        console.log(`PageLayoutRenderer: Loaded layout component for page ${props.pageId}`, {
          layoutId: layout.id,
          component: layout.component
        })
      }
    }
  }
}

// Load page data
onMounted(async () => {
  try {
    isLoading.value = true
    error.value = null

    // Kurz warten bis Container/Repositories verfügbar sind
    await new Promise(resolve => setTimeout(resolve, 50))

    loadLayout()

  } catch (err) {
    error.value = `Fehler beim Laden der Seite ${props.pageId}: ${err}`
    console.error('PageLayoutRenderer error:', err)
  } finally {
    isLoading.value = false
  }
})

// Error handling
onErrorCaptured((err) => {
  error.value = `Render-Fehler: ${err.message}`
  console.error('PageLayoutRenderer render error:', err)
  return false
})

// Event handlers
const handleOpenSettings = (widgetId: string) => {
  emit('openWidgetSettings', widgetId)
}

const handleRemoveWidget = (widgetId: string) => {
  emit('removeWidget', widgetId)
}
</script>

<template>
  <div class="page-layout-renderer">
    <!-- Loading State -->
    <div v-if="isLoading" class="loading-state">
      <div class="loading-spinner"></div>
      <p>Lade Seite {{ pageId }}...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="error-state">
      <div class="error-icon">⚠️</div>
      <p>{{ error }}</p>
    </div>

    <!-- Kein Layout/Component gefunden -->
    <div v-else-if="!ViewComponent && !error" class="no-layout-state">
      <div class="warning-icon">⚠️</div>
      <p>Kein Layout-System für Seite {{ pageId }} gefunden</p>
      <small v-if="currentPage">Page: {{ currentPage.name }}</small>
      <small v-if="currentLayout">Layout: {{ currentLayout.id }}</small>
    </div>

    <!-- Layout Engine Rendering (wie echte Seiten) -->
    <div v-else-if="ViewComponent" class="layout-engine-container">
      <component
        :is="ViewComponent"
        :key="currentLayout?.id || 'view'"
        :pageId="props.pageId"
      />
    </div>
  </div>
</template>

<style scoped>
.page-layout-renderer {
  width: 100%;
  height: 100%;
  position: relative;
  min-height: 300px;
}

.loading-state, .error-state, .empty-state, .no-layout-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  text-align: center;
}

.loading-spinner {
  width: 32px;
  height: 32px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-state {
  color: #dc3545;
}

.error-icon, .empty-icon, .warning-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.no-layout-state {
  color: #ffc107;
}

.layout-engine-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.empty-state {
  color: #6c757d;
}

.layout-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: #f8f9fa;
  min-height: 400px;
}

.layout-container.view-mode {
  background: transparent;
}

.layout-item {
  border: 1px solid #e9ecef;
  border-radius: 4px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
}

.view-mode .layout-item {
  border-color: transparent;
  box-shadow: none;
}

.missing-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #6c757d;
  background: #f8f9fa;
  text-align: center;
  font-size: 0.8rem;
}

.missing-widget-icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.debug-info {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0,0,0,0.8);
  color: white;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.7rem;
  max-width: 300px;
}

.debug-info pre {
  margin: 0;
  white-space: pre-wrap;
}
</style>
