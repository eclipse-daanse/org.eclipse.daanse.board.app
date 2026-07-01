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
import ConnectionList from '@/components/connections/ConnectionList.vue'
import DatasourceList from '@/components/datasources/DatasourceList.vue'
import { ref, shallowRef } from 'vue'
import ConnectionEditor from '@/components/connections/ConnectionEditor.vue'
import DataSourceEditor from '@/components/datasources/DatasourceEditor.vue'

const activeEditor = shallowRef(null as any)
const activeItemId = ref('' as string)

const openEditor = ({ type, itemId }: { type: string; itemId: string }) => {
  console.log('openEditor', type, itemId)
  if (type === 'Connection') {
    activeEditor.value = ConnectionEditor
    activeItemId.value = itemId
  }
  if (type === 'DataSource') {
    activeEditor.value = DataSourceEditor
    activeItemId.value = itemId
  }
}

const closeEditor = () => {
  activeEditor.value = null
  activeItemId.value = '' as string
}
</script>
<template>
  <div class="flex flex-row w-full p-4 h-full pl-18 overflow-hidden">
    <Transition name="sidebar-slide">
      <div v-if="!activeEditor" class="sidebar-wrapper flex-shrink-0 w-[300px] h-full mr-4">
        <div class="w-[300px] h-full gap-4 grid grid-cols-1 grid-rows-2">
          <div class="h-full flex-grow-0">
            <DatasourceList @openEditor="openEditor" :activeItemId="activeItemId" />
          </div>
          <div class="h-full flex-grow-0">
            <ConnectionList @openEditor="openEditor" :activeItemId="activeItemId" />
          </div>
        </div>
      </div>
    </Transition>
    <div class="w-full h-full overflow-hidden">
      <Transition name="editor-fade" mode="out-in">
        <component :is="activeEditor" :itemId="activeItemId" :key="activeItemId"
          @close="closeEditor"
        />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
/* Sidebar Slide and Fade transition */
.sidebar-slide-enter-active,
.sidebar-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  white-space: nowrap;
}

.sidebar-slide-enter-from,
.sidebar-slide-leave-to {
  width: 0 !important;
  opacity: 0;
  margin-right: 0 !important;
  transform: translateX(-20px);
}

/* Editor Slide and Fade transition */
.editor-fade-enter-active,
.editor-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.editor-fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.editor-fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>

