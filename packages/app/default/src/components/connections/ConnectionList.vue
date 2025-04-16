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
import { useConnectionsStore } from '@/stores/ConnectionsPinia'

const { connections, createConnection, removeConnection } = useConnectionsStore()

const addConnection = () => {
  createConnection(null)
}

defineProps({
  activeItemId: {
    type: String,
    required: true,
  },
})

defineEmits(['openEditor'])
</script>

<template>
  <div class="flex flex-col border border-gray-300 rounded-lg overflow-hidden w-full h-full">
    <div class="flex gap-4 w-full border-b border-gray-300 px-4 py-2 items-center">
      <h4 class="flex-grow text-sm font-semibold">Connections</h4>
      <VaButton @click="addConnection()" icon="add" size="small"></VaButton>
    </div>
    <VaList class="w-full h-full overflow-auto flex flex-col">
      <VaListItem
        v-for="(connection, index) in connections"
        :key="index"
        class="text-sm border-b border-gray-300 border-dashed
        last:border-none px-4 py-2 cursor-pointer"
        :class="{ 'bg-blue-200': connection.uid === activeItemId }"
        @click="$emit('openEditor', { type: 'Connection', itemId: connection.uid })"
      >
        <VaListItemSection>
          <VaListItemLabel>
            {{ connection.name }}
          </VaListItemLabel>

          <VaListItemLabel caption> Type: {{ connection.type }} </VaListItemLabel>
          <VaListItemLabel caption> UID: {{ connection.uid }} </VaListItemLabel>
        </VaListItemSection>
        <VaListItemSection icon>
          <VaIcon
            name="delete"
            color="danger"
            @click.stop.prevent="removeConnection(connection.uid)"
          />
        </VaListItemSection>
      </VaListItem>
    </VaList>
  </div>
</template>
<style scoped></style>
