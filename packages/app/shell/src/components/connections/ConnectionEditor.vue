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
import { DButton, DIcon, DInput, DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import TagInput from '../datasources/TagInput.vue'

const props = defineProps({
  itemId: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['close'])

const connectionProxy = ref({} as any)

const connectionRepository = inject<ConnectionRepository>(identifier)!

const availableConnections = computed(() => {
  return connectionRepository.registeredConnections
})

/*
 * Edited on a copy and committed on Save, the way it always was - what
 * changed is only where the copy comes from and where it goes back to.
 */
onMounted(() => {
  const connection = connectionRepository.getConnectionModel(props.itemId)
  connectionProxy.value = connection
    ? {
        uid: connection.uid,
        name: connection.name,
        type: connection.type,
        icon: connection.icon ?? '',
        tags: [...(connection.tags ?? [])],
        config: JSON.parse(JSON.stringify(connection.config ?? {})),
      }
    : { tags: [] }
})

const typeIcon = computed(
  () => connectionRepository.getConnectionIdentifiers(connectionProxy.value.type)?.icon ?? 'link',
)

/* Every tag already in use, so the same thing is not filed twice. */
const knownTags = computed(() => {
  const all = new Set<string>()
  for (const connection of connectionRepository.getConnections() as any[]) {
    for (const tag of connection.tags ?? []) all.add(tag)
  }
  return [...all].sort()
})

const settingsComponent = computed(() => {
  const identifiers = connectionRepository.getConnectionIdentifiers(connectionProxy.value.type)

  if (!identifiers) {
    return null
  }

  return connectionRepository.resolveIdentifier(identifiers.Settings)
})

const saveConnection = () => {
  const connection = connectionRepository.getConnectionModel(props.itemId)
  if (connection) {
    connection.name = connectionProxy.value.name
    connection.type = connectionProxy.value.type
    connection.icon = connectionProxy.value.icon?.trim() || undefined
    /* Replaced wholesale: the EList is the model's, the array was a copy. */
    connection.tags.clear()
    for (const tag of connectionProxy.value.tags ?? []) connection.tags.add(tag)
    connection.config = connectionProxy.value.config
    connectionRepository.saveConnection(connection)
  }
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
      <div class="editor__icon">
        <span class="editor__icon-preview" aria-hidden="true">
          <DIcon :name="connectionProxy.icon?.trim() || typeIcon" size="lg" />
        </span>
        <DInput
          v-model="connectionProxy.icon"
          label="Symbol"
          :placeholder="typeIcon"
          hint="Ein Material-Symbols-Name. Leer lassen für das Symbol des Typs."
        />
      </div>
      <TagInput
        v-model="connectionProxy.tags"
        label="Schlagworte"
        hint="Wofür diese Verbindung da ist — danach lässt sich suchen."
        :known="knownTags"
      />
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

.editor__icon {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.editor__icon-preview {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  color: var(--color-accent);
  background-color: var(--color-sunken);
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm);
}

.editor__icon :deep(.field) {
  flex: 1;
}

.editor__actions {
  display: flex;
  justify-content: flex-end;
  gap: 7px;
}
</style>
