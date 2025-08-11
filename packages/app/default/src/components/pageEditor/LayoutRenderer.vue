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

const handleOpenWidgetSettings = (widgetId: string) => {
  emit('openWidgetSettings', widgetId)
}

const handleRemoveWidget = (widgetId: string) => {
  emit('removeWidget', widgetId)
}

const loadLayout = () => {
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
}

const subscriptionId = ref<string | null>(null)

const onPageUpdate = (eventType: string) => {
  if (eventType === 'PAGE_UPDATE') {
    refreshTrigger.value++
    loadLayout()
  }
}

/*watchEffect(() => {
  // Trigger reactivity
  refreshTrigger.value
  loadLayout()
})*/

onMounted(async () => {
  // Wait a tick to ensure all dependencies are ready


  // Small delay to ensure Pinia is fully initialized for dynamic components

  loadLayout()


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
  <div class="layout-renderer">
    <div v-if="props.viewMode && ViewComponent" class="view-component-wrapper">
      <component :is="ViewComponent" :key="currentLayout?.id || 'view'" />
    </div>
    <div v-else-if="!props.viewMode && EditComponent" class="edit-component-wrapper">
      <component
        :is="EditComponent"
        :key="currentLayout?.id || 'edit'"
        @openSettings="handleOpenWidgetSettings"
        @removeWidget="handleRemoveWidget"
      />
    </div>
    <div v-else class="no-layout-message">
      <va-alert color="warning" icon="warning">
        {{ props.viewMode ?
        'No layout component found for the current page layout'
        : 'No layout editor found for the current page layout' }}
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

  .no-layout-message {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
}
</style>
