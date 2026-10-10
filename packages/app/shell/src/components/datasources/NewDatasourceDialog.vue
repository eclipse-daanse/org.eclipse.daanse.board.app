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
 * Creating a data source.
 *
 * Same two steps as the connection dialog, with the connection to read
 * through in between: a source without one has nowhere to fetch from, and
 * the model says so by declaring a `connection` field.
 */
import { computed, inject, ref, watch } from 'vue'
import {
  type DatasourceRepository,
  identifier as DATASOURCE_REPOSITORY,
} from 'org.eclipse.daanse.board.app.lib.api.datasource'
import {
  identifier as WORKSPACE,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { describeModel, useEList } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { DIconPicker, DInput, DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import CreateWizard from './CreateWizard.vue'
import ModelFields from './ModelFields.vue'
import TagInput from './TagInput.vue'

const open = defineModel<boolean>({ required: true })
const props = defineProps<{
  /** Opened from a connection's menu: that one is the obvious choice. */
  forConnection?: string
}>()
const emit = defineEmits<{ created: [uid: string] }>()

const datasources = inject<DatasourceRepository>(DATASOURCE_REPOSITORY)!
const workspace = inject<Workspace>(WORKSPACE)!
const connections = useEList(workspace, (w) => w.connections)
const held = useEList(workspace, (w) => w.datasources)

const type = ref('')
const name = ref('')
const icon = ref('')
const tags = ref<string[]>([])
const connection = ref<string | undefined>(undefined)
const config = ref<Record<string, unknown>>({})

const types = computed(() => datasources.registeredDatasources)
const kindOf = (each: string) => datasources.getDatasourceIdentifiers(each)?.kind

/*
 * Two kinds of thing register the same way and are picked for different
 * reasons: a source reads from an endpoint, a composer reads from sources
 * that already exist. Listing them together made the second kind look like
 * an endpoint that had lost its settings.
 */
const groups = computed(() => [
  {
    label: 'Aus einer Verbindung lesen',
    types: types.value.filter((each) => kindOf(each) !== 'composer'),
  },
  {
    label: 'Aus vorhandenen Datenquellen zusammensetzen',
    types: types.value.filter((each) => kindOf(each) === 'composer'),
  },
])

const summaryOf = (each: string) =>
  describeModel(datasources.getDatasourceIdentifiers(each)?.Model)?.documentation

const iconOf = (each: string) => datasources.getDatasourceIdentifiers(each)?.icon ?? 'database'

const doc = computed(() =>
  type.value ? describeModel(datasources.getDatasourceIdentifiers(type.value)?.Model) : undefined,
)

const knownTags = computed(() => {
  const all = new Set<string>()
  for (const source of held.value as any[]) {
    for (const tag of source.tags ?? []) all.add(tag)
  }
  return [...all].sort()
})

/**
 * Whether this type reads through a connection.
 *
 * The model answers it: a source that needs one declares a `connection`
 * field. A composer does not, and is not asked.
 */
const needsConnection = computed(() =>
  (doc.value?.features ?? []).some((f) => f.name === 'connection'),
)

/**
 * The connections this type reads through, first.
 *
 * The type says which kinds it expects, and those are grouped as suited.
 * The rest stay in the list: the hint is what the type's author
 * anticipated, not a rule, and a connection that works but was not foreseen
 * has to remain choosable.
 */
const connectionOptions = computed(() => {
  const suits = new Set(datasources.getDatasourceIdentifiers(type.value)?.connections ?? [])
  return connections.value.map((each: any) => ({
    label: each.name || each.uid,
    value: each.uid,
    group: suits.size === 0 ? 'Verbindungen' : suits.has(each.type) ? 'Passend zum Typ' : 'Weitere',
  }))
})

/** Whether anything at all suits - said plainly rather than left to guess. */
const nothingSuits = computed(
  () =>
    connectionOptions.value.length > 0 &&
    !connectionOptions.value.some((each) => each.group === 'Passend zum Typ') &&
    (datasources.getDatasourceIdentifiers(type.value)?.connections ?? []).length > 0,
)

watch(type, () => {
  config.value = {}
})

watch(open, (isOpen) => {
  if (!isOpen) return
  type.value = ''
  name.value = ''
  icon.value = ''
  tags.value = []
  connection.value = props.forConnection
  config.value = {}
})

/* `connection` is answered by its own select, not by ModelFields. */
const missing = computed(() => {
  const required = (doc.value?.features ?? [])
    .filter((f) => !f.optional && !['name', 'type', 'uid', 'connection'].includes(f.name))
    .filter((f) => {
      const value = config.value[f.name]
      return value === undefined || value === null || value === ''
    })
    .map((f) => f.name)
  if (needsConnection.value && !connection.value) required.push('connection')
  return required
})

const ready = computed(() => !!type.value && !!name.value.trim() && !missing.value.length)

function create() {
  if (!ready.value) return
  const settings = { ...config.value }
  if (needsConnection.value) settings.connection = connection.value

  const datasource = datasources.createDatasource(type.value, settings)
  datasource.name = name.value.trim()
  /* Empty means "the one the type carries" - storing that here would freeze
     a default that should follow the type. */
  if (icon.value.trim()) datasource.icon = icon.value.trim()
  for (const tag of tags.value) datasource.tags.add(tag)
  /* The settings name the connection by id; the model holds the reference. */
  datasource.connection = connections.value.find((each: any) => each.uid === connection.value)
  /*
   * A type that brings no model - a composer - is configured afterwards, in
   * the editor, and until then its live store cannot be built. That is a
   * half-finished source, not a failed one.
   */
  try {
    datasources.saveDatasource(datasource)
  } catch (error) {
    console.warn(`${datasource.uid} is not live yet:`, error)
  }
  open.value = false
  emit('created', datasource.uid as string)
}
</script>

<template>
  <CreateWizard
    v-model="open"
    v-model:type="type"
    title="Datenquelle anlegen"
    lead="Was für Daten sollen gelesen werden? Die Beschreibungen stammen aus den Modellen der Typen."
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
        placeholder="Wofür diese Datenquelle steht"
        hint="Unter diesem Namen wählst du die Datenquelle im Widget aus."
        stacked
        required
      />

      <template v-if="needsConnection">
        <p v-if="!connectionOptions.length" class="note note--warn">
          Es gibt noch keine Verbindung. Lege zuerst eine an — ohne sie hat die Datenquelle
          nichts, woraus sie lesen kann.
        </p>
        <template v-else>
          <p v-if="nothingSuits" class="note">
            Keine der vorhandenen Verbindungen ist von diesem Typ vorgesehen. Du kannst
            trotzdem eine wählen — die Angabe ist ein Hinweis, keine Regel.
          </p>
          <DSelect
            v-model="connection"
            label="Verbindung"
            :options="connectionOptions"
            value-key="value"
            label-key="label"
            group-key="group"
            placeholder="Verbindung wählen"
            hint="Der Endpunkt, aus dem diese Quelle liest."
            stacked
            required
          />
        </template>
      </template>

      <DIconPicker
        v-model="icon"
        label="Symbol"
        :fallback="iconOf(type)"
        hint="Ohne eigenes Symbol steht hier das des Typs."
      />

      <TagInput
        v-model="tags"
        label="Schlagworte"
        hint="Wofür diese Datenquelle da ist — danach lässt sich später suchen."
        :known="knownTags"
      />

      <ModelFields :doc="doc" :config="config" :omit="['connection']" />
    </template>
  </CreateWizard>
</template>

<style scoped>
.note {
  margin: 0;
  padding: 10px 12px;
  font-size: 0.85rem;
  line-height: 1.45;
  color: var(--color-dim);
  background-color: var(--color-sunken);
  border-radius: var(--radius-sm);
}

.note--warn {
  color: var(--color-fg);
  border-left: 2px solid var(--color-warn, var(--color-accent));
}



</style>
