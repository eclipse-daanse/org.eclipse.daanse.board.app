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
import { computed, onMounted, ref } from 'vue'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import {
  ConnectionRepository,
  identifier,
} from 'org.eclipse.daanse.board.app.lib.repository.connection'
import { useConnectionsStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.connection'

const props = defineProps({
  itemId: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['close'])

const connectionProxy = ref({} as any)

const connectionRepository = container.get<ConnectionRepository>(identifier)
const { connections, updateConnection } = useConnectionsStore()

const availableConnections = computed(() => {
  return connectionRepository.registeredConnections
})

onMounted(() => {
  const connection = connections.find((c) => c.uid === props.itemId)
  connectionProxy.value = JSON.parse(JSON.stringify(connection))
})

const settingsComponent = computed(() => {
  const identifiers = connectionRepository.getConnectionIdentifiers(connectionProxy.value.type)

  if (!identifiers) {
    return null
  }

  return container.get(identifiers.Settings)
})

const saveConnection = () => {
  updateConnection(connectionProxy.value.uid, connectionProxy.value)
  emit('close')
}
</script>
<template>
  <div class="w-full h-full flex gap-4">
    <div class="min-w-[350px]">
      <div class="flex flex-col border border-gray-300 rounded-lg overflow-hidden w-full h-full">
        <div class="flex gap-4 w-full border-b border-gray-300 px-4 py-2 items-center">
          <h4 class="flex-grow text-sm font-semibold leading-[1.5rem]">Connection settings</h4>
        </div>
        <div class="flex-grow flex flex-col h-full">
          <div class="flex-grow p-4 flex flex-col gap-2">
            <template v-if="connectionProxy">
              <VaInput v-model="connectionProxy.uid" label="UID" readonly />
              <VaInput v-model="connectionProxy.name" label="Name" />
              <VaSelect
                v-model="connectionProxy.type"
                label="Type"
                :options="availableConnections"
              />
              <component :is="settingsComponent" :config="connectionProxy.config" />
            </template>
          </div>
          <div class="self-end flex gap-4 p-4">
            <va-button @click="saveConnection">Save</va-button>
            <va-button @click="$emit('close')" preset="plain">Close</va-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
