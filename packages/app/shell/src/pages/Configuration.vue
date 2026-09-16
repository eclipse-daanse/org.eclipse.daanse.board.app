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
/*
 * The variables a workspace holds.
 *
 * They are modelled, so this reads the workspace's own list and changes it
 * through the repository - no store in between. What it replaces kept a
 * Pinia store that mirrored the repository, listened on an event bus to
 * notice its own writes, and reached into a private Map to rename.
 *
 * The two halves used to be two tables side by side, and the page-scoped
 * one was unreachable until a board had been picked from a select above
 * it. Reach is a property of a variable, not a place to keep it, so there
 * is one list and the boards are headings in it.
 */
import { computed, inject, onBeforeUnmount, onMounted, ref } from 'vue'
import {
  type VariableRepository,
  identifier as VARIABLE_REPOSITORY,
} from 'org.eclipse.daanse.board.app.lib.api.variable'
import {
  identifier as WORKSPACE,
  type Page,
  type Variable,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { useEList } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { TINY_EMITTER } from 'org.eclipse.daanse.board.app.lib.core'
import { VariableEvents } from 'org.eclipse.daanse.board.app.lib.variables'
import type { TinyEmitter } from 'tiny-emitter'
import { SettingsForm, isModelled } from 'org.eclipse.daanse.board.app.ui.vue.uimodel'
import {
  DButton,
  DIcon,
  DInput,
  DModal,
  DSelect,
} from 'org.eclipse.daanse.board.app.ui.vue.controls'

/* Injected here, in setup, which is the only place inject() works. The
   page used to call it inside editVariable and saveVariable, where it
   returns undefined - which is why editing threw instead of opening. */
const repository = inject<VariableRepository>(VARIABLE_REPOSITORY)!
const workspace = inject<Workspace>(WORKSPACE)!
const eventBus = inject<TinyEmitter>(Symbol.for(TINY_EMITTER))

const variables = useEList(workspace, (w) => w.variables)
const pages = useEList(workspace, (w) => w.board?.pages)

/*
 * A value is the live object's, not the model's, and it changes without
 * the model changing - a clock ticks, a query comes back. This counter is
 * what makes those show up; the bus is where a variable announces them.
 */
const valueTick = ref(0)
const onValueChange = () => (valueTick.value += 1)
onMounted(() => eventBus?.on(VariableEvents.VariableUpdated, onValueChange))
onBeforeUnmount(() => eventBus?.off(VariableEvents.VariableUpdated, onValueChange))

function valueOf(variable: Variable): string {
  void valueTick.value
  try {
    const live = repository.getVariableById(variable.uid as string)
    const value = live?.value
    if (value === undefined || value === null) return ''
    return typeof value === 'object' ? JSON.stringify(value) : String(value)
  } catch {
    /* A page-only variable read from outside its board says so by throwing. */
    return 'nur auf seiner Seite lesbar'
  }
}

/** The variables under the reach they have, boards last and named. */
const sections = computed(() => {
  const global = variables.value.filter((v) => (v.scope ?? 'global') === 'global')
  const byPage = pages.value
    .map((page: Page) => ({
      title: page.name as string,
      lead: 'Nur auf diesem Board',
      page,
      rows: variables.value.filter((v) => v.scope === 'page' && v.page === page),
    }))
    .filter((section) => section.rows.length > 0)

  const orphans = variables.value.filter((v) => v.scope === 'page' && !v.page)

  return [
    { title: 'Überall', lead: 'Auf jedem Board lesbar', page: undefined, rows: global },
    ...byPage,
    ...(orphans.length
      ? [{ title: 'Ohne Board', lead: 'Das Board dazu gibt es nicht mehr', page: undefined, rows: orphans }]
      : []),
  ]
})

const types = ref<string[]>([])
onMounted(() => (types.value = repository.getRegisteredVariableTypes()))

const reachOptions = computed(() => [
  { text: 'Überall', value: '' },
  ...pages.value.map((page: Page) => ({ text: page.name as string, value: page.id as string })),
])

const accessOptions = [
  { text: 'Von außen beschreibbar', value: 'external-writable' },
  { text: 'Nur auf seiner Seite', value: 'page-only' },
  { text: 'Nur lesbar', value: 'readonly' },
]

// ------------------------------------------------------------- the dialog

const dialogOpen = ref(false)
const editingUid = ref<string | null>(null)
const draftType = ref('')
const draftReach = ref('')
const draftName = ref('')
const draftAccess = ref('external-writable')

/*
 * Only what the type asks for. The name, the reach and who may write are
 * every variable's and are asked beside this, so they do not travel in the
 * bag a form turns into a modelled instance - a form replaces what it is
 * given with an instance of its own class, and anything else in it is gone.
 */
const draft = ref<any>({})

const isEditing = computed(() => editingUid.value !== null)

/**
 * The chosen type's form, as the model of it.
 *
 * A type says what it needs in an Ecore beside its registration, and the
 * fields are drawn from that - one description instead of a class and a
 * template that can drift apart. A type that still has a hand-written
 * component falls back to it below.
 */
const typeForm = computed(() =>
  draftType.value ? repository.getVariableIdentifiers(draftType.value)?.settingsForm : undefined,
)

/** The hand-written component, for a type that has not been modelled. */
const typeEditor = computed(() =>
  draftType.value ? repository.getVariableIdentifiers(draftType.value)?.Settings : null,
)

function openNew(): void {
  editingUid.value = null
  draftType.value = types.value[0] ?? ''
  draftReach.value = ''
  draftName.value = 'Variable ' + Math.random().toString(36).substring(7)
  draftAccess.value = 'external-writable'
  draft.value = {}
  dialogOpen.value = true
}

function openEdit(variable: Variable): void {
  editingUid.value = variable.uid as string
  draftType.value = (variable.type as string) ?? ''
  draftReach.value = (variable.page?.id as string) ?? ''
  draftName.value = variable.name as string
  draftAccess.value = (variable.accessMode as string) ?? 'external-writable'

  /*
   * What is on screen is what is running, not what was stored: a variable
   * that has been refreshed since holds the newer value.
   */
  const live = repository.getVariableById(variable.uid as string)
  const { name: _name, ...settings } = {
    ...((variable.definition ?? {}) as Record<string, unknown>),
    ...(live?.serialize?.() ?? {}),
  }
  draft.value = settings
  dialogOpen.value = true
}

/**
 * A modelled settings object as plain values again.
 *
 * The form hands back an instance of the settings class, which keeps its
 * values in private fields behind the getters - so spreading it would give
 * the fields and not the values. The class says what it has; this asks it.
 */
function plainOf(settings: any): Record<string, unknown> {
  if (!isModelled(settings)) return { ...(settings ?? {}) }

  const out: Record<string, unknown> = {}
  for (const feature of settings.eClass().getEAllStructuralFeatures()) {
    const value = settings.eGet(feature)
    if (value !== undefined) out[feature.getName()] = value
  }
  return out
}

/**
 * Picking a different type empties what the last one was asked.
 *
 * A form turns what it is given into an instance of its own class and
 * keeps it; handed an instance of the class before, it has nothing it
 * recognises and draws no fields at all. The key beside it remounts the
 * form, and this gives it an empty object to start from.
 */
function onTypeChosen(): void {
  draft.value = {}
}

function save(): void {
  repository.registerVariable(draftName.value, draftType.value, {
    ...plainOf(draft.value),
    uid: editingUid.value ?? undefined,
    accessMode: draftAccess.value,
    scope: draftReach.value ? 'page' : 'global',
    pageId: draftReach.value || undefined,
  })
  dialogOpen.value = false
  editingUid.value = null
}

// ----------------------------------------------------------- the deletion

const pendingDelete = ref<Variable | null>(null)

function confirmDelete(): void {
  if (pendingDelete.value) repository.removeVariable(pendingDelete.value.uid as string)
  pendingDelete.value = null
}
</script>

<template>
  <div class="variables">
    <header class="variables__head">
      <div>
        <h1 class="variables__title">Variablen</h1>
        <p class="variables__lead">
          Ein benannter Wert, den Widgets und Datenquellen lesen. Manche gelten überall,
          manche nur auf einem Board.
        </p>
      </div>
      <DButton intent="primary" @click="openNew">
        <DIcon name="add" size="sm" />Variable anlegen
      </DButton>
    </header>

    <section v-for="section in sections" :key="section.title" class="reach">
      <h2 class="reach__title">
        {{ section.title }}<span class="reach__lead">{{ section.lead }}</span>
      </h2>

      <ul v-if="section.rows.length" class="rows">
        <li v-for="variable in section.rows" :key="variable.uid" class="row">
          <span class="row__name">{{ variable.name }}</span>
          <span class="row__type">{{ variable.type }}</span>
          <span class="row__value">{{ valueOf(variable) }}</span>
          <span class="row__tools">
            <DButton intent="quiet" size="sm" title="Variable bearbeiten" @click="openEdit(variable)">
              <DIcon name="edit" size="sm" />
            </DButton>
            <DButton intent="quiet" size="sm" title="Variable löschen" @click="pendingDelete = variable">
              <DIcon name="delete" size="sm" />
            </DButton>
          </span>
        </li>
      </ul>

      <p v-else class="reach__empty">Noch keine.</p>
    </section>

    <DModal
      v-model="dialogOpen"
      :title="isEditing ? 'Variable bearbeiten' : 'Variable anlegen'"
      size="md"
    >
      <div class="form">
        <DSelect
          v-model="draftType"
          label="Typ"
          :options="types"
          @update:model-value="onTypeChosen"
        />
        <DSelect
          v-model="draftReach"
          label="Gilt"
          :options="reachOptions"
          label-key="text"
          value-key="value"
        />
        <DSelect
          v-model="draftAccess"
          label="Beschreibbar"
          :options="accessOptions"
          label-key="text"
          value-key="value"
        />

        <!-- The name is every variable's, so it is asked here rather than
             three times over in three type forms. -->
        <DInput v-model="draftName" label="Name" />

        <!-- And what the chosen type needs, said by the type itself. -->
        <SettingsForm
          v-if="typeForm"
          :key="draftType"
          v-model="draft"
          :create="typeForm.create"
          :ui-model-xmi="typeForm.xmi"
          :domain-package="typeForm.ePackage()"
          :ui-model-uri="typeForm.uri"
        />
        <component :is="typeEditor" v-else-if="typeEditor" v-model="draft" />
      </div>

      <template #actions>
        <DButton intent="quiet" @click="dialogOpen = false">Abbrechen</DButton>
        <DButton intent="primary" @click="save">{{ isEditing ? 'Speichern' : 'Anlegen' }}</DButton>
      </template>
    </DModal>

    <DModal :model-value="!!pendingDelete" size="sm" @update:model-value="pendingDelete = null">
      <template #header>
        <DIcon name="warning" size="lg" tone="color-err" />
        <h2 class="confirm__title">Variable löschen</h2>
      </template>
      <p class="confirm__text">
        {{ pendingDelete?.name }} wird entfernt. Widgets, die darauf zeigen, finden sie
        danach nicht mehr.
      </p>
      <template #actions>
        <DButton intent="quiet" @click="pendingDelete = null">Abbrechen</DButton>
        <DButton intent="danger" @click="confirmDelete">Löschen</DButton>
      </template>
    </DModal>
  </div>
</template>

<style scoped>
.variables {
  display: flex;
  flex-direction: column;
  gap: 28px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 28px 32px 40px;
  font-family: var(--font-sans);
  color: var(--color-fg);
  background-color: var(--color-bg);
}

.variables__head,
.reach {
  width: 100%;
  max-width: 940px;
}

.variables__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.variables__title {
  margin: 0 0 6px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.variables__lead {
  margin: 0;
  max-width: 56ch;
  font-size: var(--text-base);
  line-height: 1.55;
  color: var(--color-dim);
}

/* ------------------------------------------------------------ the reaches */

.reach__title {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin: 0 0 2px;
  font-size: var(--text-base);
  font-weight: 600;
}

.reach__lead {
  font-weight: 400;
  font-size: var(--text-sm);
  color: var(--color-dim);
}

.reach__empty {
  margin: 0;
  padding: 12px 0;
  border-top: 1px solid var(--color-divider);
  font-size: var(--text-base);
  color: var(--color-dim);
}

.rows {
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--color-divider);
}

/*
 * A name, what makes it, and what it says right now. No heading row: three
 * words over three columns told nobody anything the columns did not, and
 * the fourth said "Actions" over two icons.
 */
.row {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1.4fr) minmax(0, 2fr) auto;
  align-items: center;
  gap: 16px;
  padding: 7px 8px 7px 0;
  border-bottom: 1px solid var(--color-divider);
  font-size: var(--text-base);
}

.row:hover {
  background-color: color-mix(in srgb, var(--color-pane) 60%, transparent);
}

.row__name {
  font-family: var(--font-mono);
  overflow-wrap: anywhere;
}

.row__type,
.row__value {
  color: var(--color-dim);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.row__value {
  font-family: var(--font-mono);
  color: var(--color-fg);
}

.row__tools {
  display: flex;
  gap: 2px;
}

/* -------------------------------------------------------------- the dialog */

.form {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.confirm__title {
  margin: 0;
  font-size: var(--text-lg);
  font-weight: 600;
}

.confirm__text {
  margin: 0;
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-dim);
}

@media (max-width: 640px) {
  .variables {
    padding: 20px 16px 32px;
  }

  .row {
    grid-template-columns: minmax(0, 1fr) auto;
    row-gap: 2px;
  }

  .row__type,
  .row__value {
    grid-column: 1;
    white-space: normal;
  }
}
</style>
