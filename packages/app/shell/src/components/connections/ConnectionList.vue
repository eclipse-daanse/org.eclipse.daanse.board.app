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
import { useConnectionsStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.connection'
import { ref } from 'vue'

const { connections, createConnection, removeConnection } = useConnectionsStore()

const showDeleteConfirm = ref(false)
const connToDelete = ref<string | null>(null)

const confirmRemoveConnection = (uid: string) => {
  connToDelete.value = uid
  showDeleteConfirm.value = true
}

const doRemoveConnection = () => {
  if (connToDelete.value) {
    removeConnection(connToDelete.value)
  }
  showDeleteConfirm.value = false
  connToDelete.value = null
}

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
  <div class="flex flex-col border border-gray-300 rounded-lg overflow-hidden w-full h-full ice">
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
        :class="{ 'bg-gray-200': connection.uid === activeItemId }"
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
            @click.stop.prevent="confirmRemoveConnection(connection.uid)"
          />
        </VaListItemSection>
      </VaListItem>
    </VaList>
    <VaModal
      v-model="showDeleteConfirm"
      size="small"
      hide-default-actions
      overlay-opacity="0.3"
    >
      <div style="text-align: center; padding: 1rem;">
        <VaIcon name="warning" color="danger" size="2rem" />
        <h5 style="margin: 0.5rem 0;">Connection löschen</h5>
        <p>Möchtest du diese Connection wirklich löschen?
          Diese Aktion kann nicht rückgängig gemacht werden.</p>
      </div>
      <template #footer>
        <div style="display: flex; justify-content: flex-end; gap: 0.5rem;">
          <VaButton preset="secondary" @click="showDeleteConfirm = false; connToDelete = null;">
            Abbrechen
          </VaButton>
          <VaButton color="danger" icon="delete" @click="doRemoveConnection()">
            Löschen
          </VaButton>
        </div>
      </template>
    </VaModal>
  </div>
</template>
<style scoped></style>
