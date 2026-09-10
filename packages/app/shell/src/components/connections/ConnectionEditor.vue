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
import { inject, computed, onMounted, ref } from 'vue'
import {
  ConnectionRepository,
  identifier,
} from 'org.eclipse.daanse.board.app.lib.api.connection'
import { useConnectionsStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.connection'
import { DButton, DInput, DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls'

const props = defineProps({
  itemId: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['close'])

const connectionProxy = ref({} as any)

const connectionRepository = inject<ConnectionRepository>(identifier)!
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

  return connectionRepository.resolveIdentifier(identifiers.Settings)
})

const saveConnection = () => {
  updateConnection(connectionProxy.value.uid, connectionProxy.value)
  emit('close')
}
</script>
<template>
  <!-- The frame, the heading and the tabs belong to the page around this -->
  <div class="editor">
    <div class="editor__fields">
      <DInput v-model="connectionProxy.uid" label="UID" readonly />
      <DInput v-model="connectionProxy.name" label="Name" />
      <DSelect v-model="connectionProxy.type" label="Typ" :options="availableConnections" />
      <component :is="settingsComponent" :config="connectionProxy.config" />
    </div>
    <div class="editor__actions">
      <DButton intent="quiet" @click="$emit('close')">Schließen</DButton>
      <DButton intent="primary" @click="saveConnection">Speichern</DButton>
    </div>
  </div>
</template>

<style scoped>
.editor {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.editor__fields {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 620px;
}

.editor__actions {
  display: flex;
  justify-content: flex-end;
  gap: 7px;
}
</style>
