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
const activeItemId = ref(null as unknown as string)

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
  activeItemId.value = null as unknown as string
}
</script>
<template>
  <div class="flex flex-row w-full p-4 gap-4 h-full">
    <div class="flex flex-shrink-0 w-[300px] h-full gap-4 grid grid-cols-1 grid-rows-2">
      <div class="h-full flex-grow-0">
        <DatasourceList @openEditor="openEditor" :activeItemId="activeItemId" />
      </div>
      <div class="h-full flex-grow-0">
        <ConnectionList @openEditor="openEditor" :activeItemId="activeItemId" />
      </div>
    </div>
    <div class="w-full">
      <component
        :is="activeEditor"
        :itemId="activeItemId"
        :key="activeItemId"
        @close="closeEditor"
      />
    </div>
  </div>
</template>
