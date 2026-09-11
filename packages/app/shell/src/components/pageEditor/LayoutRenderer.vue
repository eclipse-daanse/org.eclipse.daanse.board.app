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
import { inject, ref, computed, watch, watchEffect, onMounted, shallowRef, nextTick }
  from 'vue'
import {
  type LayoutRepositoryI,
  identifier as LayoutRepositoryIdentifier,
  type LayoutI
} from 'org.eclipse.daanse.board.app.lib.api.layout.page'
import { useEObject, useFeature } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import {
  type PageRegistryI,
  identifier as PageIdentifier,
  type PageI
} from 'org.eclipse.daanse.board.app.lib.api.page'

const props = defineProps<{
  pageId: string,
  viewMode?: boolean
}>()

const emit = defineEmits(['openWidgetSettings', 'removeWidget'])

const layoutRepo = inject<LayoutRepositoryI>(LayoutRepositoryIdentifier)
const pageRepo = inject<PageRegistryI>(PageIdentifier)

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

let loadLayoutVersion = 0

const loadLayout = async () => {
  const version = ++loadLayoutVersion
  isLoading.value = true

  // Wait for next tick to ensure dependencies are ready
  await nextTick()

  // Abort if a newer loadLayout call was started
  if (version !== loadLayoutVersion) return

  if (props.pageId && pageRepo) {
    const page = pageRepo.getPage(props.pageId)
    currentPage.value = page ?? null

    if (page?.layoutId && layoutRepo) {
      const layout = layoutRepo.getLayout(page.layoutId as string)
      currentLayout.value = layout || null

      if (props.viewMode) {
        ViewComponent.value = layout?.component || null
        EditComponent.value = null
      } else {
        EditComponent.value = layout?.editor || null
        ViewComponent.value = null
      }
    } else {
      EditComponent.value = null
      ViewComponent.value = null
      currentLayout.value = null
    }
  }

  // Small delay to ensure everything is ready
  await new Promise(resolve => setTimeout(resolve, 50))
  if (version !== loadLayoutVersion) return
  isLoading.value = false
}

/*
 * The page watches itself now. A modelled object announces its own changes,
 * so this is a watcher on it rather than a subscription to three event
 * names the registry used to publish.
 */
const page = () => (props.pageId ? pageRepo?.getPage(props.pageId) : undefined)
const held = useEObject(page)
watch(held, () => { currentPage.value = held.value ?? null })

/*
 * The layout engine is reloaded when the layout changes, and only then.
 *
 * Watching the page itself means watching everything under it - the widgets
 * are contained in it now, so a widget added or a pixel dragged is a change
 * to the page, and this watcher would run on every frame of a drag only to
 * decide it has nothing to do. The feature is what matters, so the feature
 * is what is watched.
 */
const layoutId = useFeature(page, 'layoutId')
watch(layoutId, () => {
  refreshTrigger.value++
  loadLayout()
})

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
      <component
        :is="ViewComponent"
        :key="currentLayout.id || 'view'"
        :layout-settings="currentPage?.layoutSettings"
      />
    </div>

    <!-- Edit mode - only render if all components are ready -->
    <div v-else-if="!props.viewMode
    && EditComponent && currentLayout" class="edit-component-wrapper">
      <component
        :is="EditComponent"
        :key="currentLayout.id || 'edit'"
        :layout-settings="currentPage?.layoutSettings"
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
