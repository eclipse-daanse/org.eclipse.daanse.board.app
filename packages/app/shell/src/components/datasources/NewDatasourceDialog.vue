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
 * Creating a data source, one step at a time.
 *
 * Same shape as the connection dialog, with the connection to read from in
 * between: a source without one has nowhere to fetch from, and the model
 * says so by declaring a `connection` field.
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
import { DButton, DIcon, DInput, DModal, DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls'
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

const type = ref('')
const name = ref('')
const icon = ref('')
const tags = ref<string[]>([])
/* undefined, not '': DSelect shows its placeholder only while nothing is
   chosen, and an empty string reads as a choice - the first connection would
   look selected without being it. */
const connection = ref<string | undefined>(undefined)
const config = ref<Record<string, unknown>>({})

const held = useEList(workspace, (w) => w.datasources)

/* Every tag already in use, so the same thing is not filed twice under two
   spellings. */
const knownTags = computed(() => {
  const all = new Set<string>()
  for (const source of held.value as any[]) {
    for (const tag of source.tags ?? []) all.add(tag)
  }
  return [...all].sort()
})

/** What the icon field stands for while it is empty. */
const typeIcon = computed(
  () => datasources.getDatasourceIdentifiers(type.value)?.icon ?? 'database',
)

const types = computed(() => datasources.registeredDatasources)

const summaries = computed(() => {
  const byType: Record<string, string | undefined> = {}
  for (const each of types.value) {
    byType[each] = describeModel(datasources.getDatasourceIdentifiers(each)?.Model)?.documentation
  }
  return byType
})

/*
 * Two kinds of thing register the same way and are picked for different
 * reasons: a source reads from an endpoint, a composer reads from sources
 * that already exist. Listing them together made the second kind look like
 * an endpoint that had lost its settings.
 */
const sourceTypes = computed(() =>
  types.value.filter((each) => datasources.getDatasourceIdentifiers(each)?.kind !== 'composer'),
)

const composerTypes = computed(() =>
  types.value.filter((each) => datasources.getDatasourceIdentifiers(each)?.kind === 'composer'),
)

const doc = computed(() =>
  type.value ? describeModel(datasources.getDatasourceIdentifiers(type.value)?.Model) : undefined,
)

/**
 * Whether this type reads through a connection.
 *
 * The model answers it: a source that needs one declares a `connection`
 * field. A type that does not - a computed source, say - is not asked.
 */
const needsConnection = computed(() =>
  (doc.value?.features ?? []).some((f) => f.name === 'connection'),
)

/**
 * The connections this type reads through, first.
 *
 * The type says which kinds it expects, and those are grouped as suggested.
 * The rest stay in the list: the hint is what the type's author anticipated,
 * not a rule, and a connection that works but was not foreseen has to remain
 * choosable.
 */
const connectionOptions = computed(() => {
  const suits = new Set(datasources.getDatasourceIdentifiers(type.value)?.connections ?? [])
  return connections.value.map((each: any) => ({
    label: each.name || each.uid,
    value: each.uid,
    group:
      suits.size === 0 ? 'Verbindungen' : suits.has(each.type) ? 'Passend zum Typ' : 'Weitere',
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

/* `connection` is answered by its own select above, not by ModelFields. */
const missing = computed(() => {
  const required = (doc.value?.features ?? [])
    .filter((f) => !f.optional && !['name', 'type', 'uid', 'connection'].includes(f.name))
    .filter((f) => {
      const held = config.value[f.name]
      return held === undefined || held === null || held === ''
    })
    .map((f) => f.name)
  if (needsConnection.value && !connection.value) required.push('connection')
  return required
})

const canCreate = computed(() => !!type.value && !!name.value.trim() && !missing.value.length)

function create() {
  if (!canCreate.value) return
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
  datasources.saveDatasource(datasource)
  open.value = false
  emit('created', datasource.uid as string)
}
</script>

<template>
  <DModal v-model="open" title="Datenquelle anlegen" size="lg" @cancel="open = false">
    <div class="new">
      <section class="new__step">
        <h3 class="new__label">Typ</h3>
        <p class="new__lead">Was für Daten sollen gelesen werden? Die Beschreibung stammt aus dem Modell des Typs.</p>

        <h4 class="new__rubric">Aus einer Verbindung lesen</h4>
        <ul class="types">
          <li v-for="each in sourceTypes" :key="each">
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

        <template v-if="composerTypes.length">
          <h4 class="new__rubric">Aus vorhandenen Datenquellen zusammensetzen</h4>
          <ul class="types">
            <li v-for="each in composerTypes" :key="each">
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
        </template>
      </section>

      <section v-if="type" class="new__step">
        <h3 class="new__label">Name</h3>
        <DInput
          v-model="name"
          placeholder="Wofür diese Datenquelle steht"
          hint="Unter diesem Namen wählst du die Datenquelle im Widget aus."
          stacked
          required
        />
      </section>

      <section v-if="type && needsConnection" class="new__step">
        <h3 class="new__label">Verbindung</h3>
        <p v-if="!connectionOptions.length" class="new__warn">
          Es gibt noch keine Verbindung. Lege zuerst eine an — ohne sie hat die Datenquelle
          nichts, woraus sie lesen kann.
        </p>
        <p v-else-if="nothingSuits" class="new__warn">
          Keine der vorhandenen Verbindungen ist von diesem Typ vorgesehen. Du kannst
          trotzdem eine wählen — die Angabe ist ein Hinweis, keine Regel.
        </p>
        <DSelect
          v-if="connectionOptions.length"
          v-model="connection"
          :options="connectionOptions"
          value-key="value"
          label-key="label"
          group-key="group"
          placeholder="Verbindung wählen"
          hint="Der Endpunkt, aus dem diese Quelle liest."
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
          hint="Wofür diese Datenquelle da ist — danach lässt sich später suchen."
          :known="knownTags"
        />
      </section>

      <section v-if="type" class="new__step">
        <h3 class="new__label">Einstellungen</h3>
        <p v-if="doc?.documentation" class="new__lead">{{ doc.documentation }}</p>
        <!-- `connection` is answered by the select above -->
        <ModelFields :doc="doc" :config="config" :omit="['connection']" />
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

.new__rubric {
  margin: 6px 0 2px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-fg);
}

.new__warn {
  margin: 0;
  padding: 10px 12px;
  font-size: 0.85rem;
  color: var(--color-fg);
  background-color: var(--color-sunken);
  border-left: 2px solid var(--color-warn, var(--color-accent));
  border-radius: var(--radius-sm);
}

.types {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 8px;
  margin-bottom: 4px;
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
