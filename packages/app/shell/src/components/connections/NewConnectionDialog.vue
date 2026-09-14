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
 * Creating a connection, one step at a time.
 *
 * Picking the type first is what makes the rest of the form knowable: the
 * type's model says which fields exist and what each is for. Until then
 * there is nothing to fill in, which is why the button that used to create
 * an empty connection and leave it half-written now opens this instead.
 */
import { computed, inject, ref, watch } from 'vue'
import {
  type ConnectionRepository,
  identifier as CONNECTION_REPOSITORY,
} from 'org.eclipse.daanse.board.app.lib.api.connection'
import { describeModel } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import {
  identifier as WORKSPACE,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { useEList } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { DButton, DIcon, DInput, DModal } from 'org.eclipse.daanse.board.app.ui.vue.controls'
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

/* Every tag already in use, so the same thing is not filed twice under two
   spellings. */
const knownTags = computed(() => {
  const all = new Set<string>()
  for (const connection of held.value as any[]) {
    for (const tag of connection.tags ?? []) all.add(tag)
  }
  return [...all].sort()
})

/** What the icon field stands for while it is empty. */
const typeIcon = computed(
  () => connections.getConnectionIdentifiers(type.value)?.icon ?? 'link',
)

const types = computed(() => connections.registeredConnections)

/** What each type's model says it is - the line under its name in the list. */
const summaries = computed(() => {
  const byType: Record<string, string | undefined> = {}
  for (const each of types.value) {
    byType[each] = describeModel(connections.getConnectionIdentifiers(each)?.Model)?.documentation
  }
  return byType
})

const doc = computed(() =>
  type.value ? describeModel(connections.getConnectionIdentifiers(type.value)?.Model) : undefined,
)

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
      const held = config.value[f.name]
      return held === undefined || held === null || held === ''
    })
    .map((f) => f.name),
)

const canCreate = computed(() => !!type.value && !!name.value.trim() && !missing.value.length)

function create() {
  if (!canCreate.value) return
  const connection = connections.createConnection(type.value, { ...config.value })
  connection.name = name.value.trim()
  /* Empty means "the one the type carries" - storing that here would freeze
     a default that should follow the type. */
  if (icon.value.trim()) connection.icon = icon.value.trim()
  for (const tag of tags.value) connection.tags.add(tag)
  connections.saveConnection(connection)
  open.value = false
  emit('created', connection.uid as string)
}
</script>

<template>
  <DModal v-model="open" title="Verbindung anlegen" size="lg" @cancel="open = false">
    <div class="new">
      <section class="new__step">
        <h3 class="new__label">Typ</h3>
        <p class="new__lead">Womit soll gesprochen werden? Die Beschreibung stammt aus dem Modell des Typs.</p>
        <ul class="types">
          <li v-for="each in types" :key="each">
            <button
              type="button"
              :class="['type', { 'type--on': type === each }]"
              @click="type = each"
            >
              <span class="type__name">
                {{ each }}
                <DIcon v-if="type === each" name="check" size="sm" />
              </span>
              <span v-if="summaries[each]" class="type__what">{{ summaries[each] }}</span>
            </button>
          </li>
        </ul>
      </section>

      <section v-if="type" class="new__step">
        <h3 class="new__label">Name</h3>
        <DInput
          v-model="name"
          placeholder="Wofür diese Verbindung steht"
          hint="Unter diesem Namen wählst du die Verbindung später aus."
          stacked
          required
        />
      </section>

      <section v-if="type" class="new__step">
        <h3 class="new__label">Einordnung</h3>
        <div class="new__icon">
          <span class="new__icon-preview" aria-hidden="true">
            <DIcon :name="icon.trim() || typeIcon" size="lg" />
          </span>
          <DInput
            v-model="icon"
            label="Symbol"
            :placeholder="typeIcon"
            hint="Ein Material-Symbols-Name. Leer lassen für das Symbol des Typs."
            stacked
          />
        </div>
        <TagInput
          v-model="tags"
          label="Schlagworte"
          hint="Wofür diese Verbindung da ist — danach lässt sich später suchen."
          :known="knownTags"
        />
      </section>

      <section v-if="type" class="new__step">
        <h3 class="new__label">Einstellungen</h3>
        <p v-if="doc?.documentation" class="new__lead">{{ doc.documentation }}</p>
        <ModelFields :doc="doc" :config="config" />
      </section>
    </div>

    <template #actions>
      <DButton intent="quiet" @click="open = false">Abbrechen</DButton>
      <DButton intent="primary" :disabled="!canCreate" @click="create">Anlegen</DButton>
    </template>
  </DModal>
</template>

<style scoped>
.new {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.new__step {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.new__label {
  margin: 0;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--color-dim);
}

.new__lead {
  margin: 0;
  font-size: 0.85rem;
  color: var(--color-dim);
}

.new__icon {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.new__icon-preview {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  color: var(--color-accent);
  background-color: var(--color-sunken);
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm);
}

.new__icon :deep(.field) {
  flex: 1;
}

.types {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 8px;
  /* A type without a model has a shorter card; stretching it to the tallest
     one in the row just adds empty space. */
  align-items: start;
  margin: 0;
  padding: 0;
  list-style: none;
}

.type {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  padding: 10px 12px;
  text-align: left;
  background-color: var(--color-sunken);
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm);
  cursor: pointer;
}

.type:hover {
  border-color: var(--color-accent);
}

.type--on {
  border-color: var(--color-accent);
  box-shadow: inset 2px 0 0 var(--color-accent);
}

.type__name {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  font-weight: 600;
  color: var(--color-fg);
}

.type__what {
  font-size: 0.8rem;
  line-height: 1.4;
  color: var(--color-dim);
}
</style>
