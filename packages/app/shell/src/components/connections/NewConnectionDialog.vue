<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<script setup lang="ts">
/**
 * Creating a connection.
 *
 * The type comes first because its model is what says which fields exist
 * and what each is for - see CreateWizard for the two steps, and modelDocs
 * for where the descriptions come from.
 */
import { computed, inject, ref, watch } from 'vue'
import {
  type ConnectionRepository,
  identifier as CONNECTION_REPOSITORY,
} from 'org.eclipse.daanse.board.app.lib.api.connection'
import {
  identifier as WORKSPACE,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { describeModel, useEList } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { DIconPicker, DInput } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import CreateWizard from '../datasources/CreateWizard.vue'
import ModelFields from '../datasources/ModelFields.vue'
import TagInput from '../datasources/TagInput.vue'

const open = defineModel<boolean>({ required: true })
const emit = defineEmits<{ created: [uid: string] }>()

const connections = inject<ConnectionRepository>(CONNECTION_REPOSITORY)!
const workspace = inject<Workspace>(WORKSPACE)!
const held = useEList(workspace, (w) => w.connections)

const type = ref('')
const name = ref('')
const icon = ref('')
const tags = ref<string[]>([])
const config = ref<Record<string, unknown>>({})

const groups = computed(() => [
  { label: 'Verbindungstypen', types: connections.registeredConnections },
])

const summaryOf = (each: string) =>
  describeModel(connections.getConnectionIdentifiers(each)?.Model)?.documentation

const iconOf = (each: string) => connections.getConnectionIdentifiers(each)?.icon ?? 'link'

const doc = computed(() =>
  type.value ? describeModel(connections.getConnectionIdentifiers(type.value)?.Model) : undefined,
)

/* Every tag already in use, so the same thing is not filed twice under two
   spellings. */
const knownTags = computed(() => {
  const all = new Set<string>()
  for (const connection of held.value as any[]) {
    for (const tag of connection.tags ?? []) all.add(tag)
  }
  return [...all].sort()
})

/* A new type is a new set of fields; what was typed for the old one does
   not belong to it. */
watch(type, () => {
  config.value = {}
})

/* Opening again starts over rather than resuming a form nobody finished. */
watch(open, (isOpen) => {
  if (!isOpen) return
  type.value = ''
  name.value = ''
  icon.value = ''
  tags.value = []
  config.value = {}
})

/** Every field the model marks as required has to hold something. */
const missing = computed(() =>
  (doc.value?.features ?? [])
    .filter((f) => !f.optional && !['name', 'type', 'uid'].includes(f.name))
    .filter((f) => {
      const value = config.value[f.name]
      return value === undefined || value === null || value === ''
    }),
)

const ready = computed(() => !!type.value && !!name.value.trim() && !missing.value.length)

function create() {
  if (!ready.value) return
  const connection = connections.createConnection(type.value, { ...config.value })
  connection.name = name.value.trim()
  /* Empty means "the one the type carries" - storing that here would freeze
     a default that should follow the type. */
  if (icon.value.trim()) connection.icon = icon.value.trim()
  for (const tag of tags.value) connection.tags.add(tag)
  /* Same as for a data source: a configuration that is not complete yet
     leaves a connection that is modelled but not live. */
  try {
    connections.saveConnection(connection)
  } catch (error) {
    console.warn(`${connection.uid} is not live yet:`, error)
  }
  open.value = false
  emit('created', connection.uid as string)
}
</script>

<template>
  <CreateWizard
    v-model="open"
    v-model:type="type"
    title="Verbindung anlegen"
    lead="Womit soll gesprochen werden? Die Beschreibungen stammen aus den Modellen der Typen."
    :groups="groups"
    :summary-of="summaryOf"
    :icon-of="iconOf"
    :ready="ready"
    @create="create"
  >
    <template #setup>
      <DInput
        v-model="name"
        label="Name"
        placeholder="Wofür diese Verbindung steht"
        hint="Unter diesem Namen wählst du die Verbindung später aus."
        stacked
        required
      />

      <DIconPicker
        v-model="icon"
        label="Symbol"
        :fallback="iconOf(type)"
        hint="Ohne eigenes Symbol steht hier das des Typs."
      />

      <TagInput
        v-model="tags"
        label="Schlagworte"
        hint="Wofür diese Verbindung da ist — danach lässt sich später suchen."
        :known="knownTags"
      />

      <ModelFields :doc="doc" :config="config" />
    </template>
  </CreateWizard>
</template>

<style scoped>


</style>
