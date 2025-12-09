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
import { inject, ref, computed, watchEffect, onMounted, onUnmounted, shallowRef, nextTick }
  from 'vue'
import type { Container } from 'inversify'
import {
  type LayoutRepositoryI,
  identifier as LayoutRepositoryIdentifier,
  type LayoutI
} from 'org.eclipse.daanse.board.app.lib.repository.layout.page'
import {
  type PageRegistryI,
  identifier as PageIdentifier,
  type PageI
} from 'org.eclipse.daanse.board.app.lib.repository.page'

const props = defineProps<{
  pageId: string,
  viewMode?: boolean
}>()

const emit = defineEmits(['openWidgetSettings', 'removeWidget'])

const container = inject<Container>('container')
const layoutRepo = container?.get<LayoutRepositoryI>(LayoutRepositoryIdentifier)
const pageRepo = container?.get<PageRegistryI>(PageIdentifier)

const currentPage = ref<PageI | null>(null)
const currentLayout = ref<LayoutI | null>(null)
const EditComponent = shallowRef<any>(null)
const ViewComponent = shallowRef<any>(null)
const refreshTrigger = ref(0)
const isLoading = ref(true)

const handleOpenWidgetSettings = (widgetId: string) => {
  emit('openWidgetSettings', widgetId)
}

const handleRemoveWidget = (widgetId: string) => {
  emit('removeWidget', widgetId)
}

const loadLayout = async () => {
  isLoading.value = true

  // Wait for next tick to ensure dependencies are ready
  await nextTick()

  if (props.pageId && pageRepo) {
    const page = pageRepo.getPage(props.pageId)
    currentPage.value = page || null

    // Reset components first
    EditComponent.value = null
    ViewComponent.value = null
    currentLayout.value = null

    if (page?.layout && layoutRepo) {
      const layout = layoutRepo.getLayout(page.layout.id)
      currentLayout.value = layout || null

      if (props.viewMode) {
        if (layout?.component) {
          ViewComponent.value = layout.component
        }
      } else {
        if (layout?.editor) {
          EditComponent.value = layout.editor
        }
      }
    }
  }

  // Small delay to ensure everything is ready
  await new Promise(resolve => setTimeout(resolve, 50))
  isLoading.value = false
}

const subscriptionId = ref<string | null>(null)
const previousPageData = ref<{
  layoutId?: string,
  backgroundColor?: string
} | null>(null)

const updatePageData = () => {
  if (props.pageId && pageRepo) {
    const page = pageRepo.getPage(props.pageId)

    // Store previous layout and style properties
    const prevLayoutId = currentPage.value?.layout?.id
    const prevBackgroundColor = currentPage.value?.backgroundColor
    const prevBackgroundImage = currentPage.value?.backgroundImage
    const prevBackgroundSize = currentPage.value?.backgroundSize
    const prevBackgroundPosition = currentPage.value?.backgroundPosition
    const prevBackgroundRepeat = currentPage.value?.backgroundRepeat

    currentPage.value = page || null

    // Check if only style properties changed (background properties)
    const onlyStyleChanged =
      page?.layout?.id === prevLayoutId &&
      (page?.backgroundColor !== prevBackgroundColor ||
        page?.backgroundImage !== prevBackgroundImage ||
        page?.backgroundSize !== prevBackgroundSize ||
        page?.backgroundPosition !== prevBackgroundPosition ||
        page?.backgroundRepeat !== prevBackgroundRepeat)

    return { onlyStyleChanged, layoutChanged: page?.layout?.id !== prevLayoutId }
  }
  return { onlyStyleChanged: false, layoutChanged: false }
}

const onPageUpdate = (eventType: string) => {
  if (eventType === 'PAGE_UPDATE') {
    const { onlyStyleChanged, layoutChanged } = updatePageData()

    // Only reload layout if structure changed, not if only style changed
    if (layoutChanged || !currentLayout.value) {
      refreshTrigger.value++
      loadLayout()
    }
    // If only style changed (like backgroundColor), the reactive binding will handle it
  }
}

/*watchEffect(() => {
  // Trigger reactivity
  refreshTrigger.value
  loadLayout()
})*/

onMounted(async () => {
  // Wait a tick to ensure all dependencies are ready
  await nextTick()

  // Small delay to ensure Pinia is fully initialized for dynamic components
  await new Promise(resolve => setTimeout(resolve, 100))

  await loadLayout()

  if (pageRepo && 'subscribe' in pageRepo) {
    subscriptionId.value = (pageRepo as any).subscribe(onPageUpdate)
  }
})

onUnmounted(() => {
  if (pageRepo && 'unsubscribe' in pageRepo && subscriptionId.value) {
    (pageRepo as any).unsubscribe(subscriptionId.value)
  }
})
</script>

<template>
  <div class="layout-renderer" :style="{
    backgroundColor: currentPage?.backgroundColor || undefined,
    backgroundImage: currentPage?.backgroundImage
      ? `url(${currentPage.backgroundImage})`
      : undefined,
    backgroundSize: currentPage?.backgroundSize || 'cover',
    backgroundPosition: currentPage?.backgroundPosition || 'center',
    backgroundRepeat: currentPage?.backgroundRepeat || 'no-repeat'
  }">
    <!-- Loading state -->
    <div v-if="isLoading" class="loading-state">
      <va-progress-circle indeterminate />
      <p>Loading layout...</p>
    </div>

    <!-- View mode - only render if all components are ready -->
    <div v-else-if="props.viewMode && ViewComponent
    && currentLayout" class="view-component-wrapper">
      <component :is="ViewComponent" :key="currentLayout.id || 'view'" />
    </div>

    <!-- Edit mode - only render if all components are ready -->
    <div v-else-if="!props.viewMode
    && EditComponent && currentLayout" class="edit-component-wrapper">
      <component
        :is="EditComponent"
        :key="currentLayout.id || 'edit'"
        @openSettings="handleOpenWidgetSettings"
        @removeWidget="handleRemoveWidget"
      />
    </div>

    <!-- Error/fallback state with more detailed info -->
    <div v-else class="no-layout-message">
      <va-alert color="warning" icon="warning">
        <div v-if="isLoading">
          Loading layout components...
        </div>
        <div v-else-if="!currentPage">
          Page "{{ props.pageId }}" not found
        </div>
        <div v-else-if="!currentLayout">
          No layout configured for page "{{ currentPage.name || props.pageId }}"
        </div>
        <div v-else>
          {{ props.viewMode ?
          'No layout component found for the current page layout'
          : 'No layout editor found for the current page layout' }}
          <br><small>Layout ID: {{ currentLayout.id }}</small>
        </div>
      </va-alert>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-renderer {
  width: 100%;
  height: 100%;

  .edit-component-wrapper,
  .view-component-wrapper {
    width: 100%;
    height: 100%;
  }

  .no-layout-message,
  .loading-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    gap: 1rem;
  }
}
</style>
