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
/*
 * The storage view: places on the left, their entries on the right.
 *
 * A master-detail rather than a list of everything, because the number of
 * stored states is unbounded - the entries pane searches, sorts and scrolls
 * on its own while the places stay put.
 */
import { computed, inject, onMounted, ref, watch } from 'vue'
import { useWorkspaceOrigin, useWorkspaceSnapshot } from '@/composables/useWorkspaceSnapshot'
import {
  type Repository,
  type WritableRepository,
  type RepositoryRegistryI,
  type Entity,
  identifier as RepoManagerId,
} from 'org.eclipse.daanse.board.app.lib.api.persistence'

const emit = defineEmits<{ restored: [ids: string[]] }>()

const repoManager = inject<RepositoryRegistryI>(RepoManagerId)
const { capture, restore } = useWorkspaceSnapshot()

const places = ref<Repository[]>([])
const selected = ref<Repository | undefined>()
const entries = ref<Entity[]>([])
const loading = ref(false)
const failure = ref('')
const query = ref('')

/** The entry this workspace came from - kept with the workspace, not with this view. */
const origin = useWorkspaceOrigin()
const saveName = ref(origin.value?.name ?? '')

/**
 * Repositories reject with a plain string, so reading .message off it yields
 * undefined and the user is told nothing.
 */
function reason(error: unknown): string {
  if (typeof error === 'string') return error
  return (error as Error)?.message ?? String(error)
}

/**
 * The repository keeps one file per entry and insists on the .json suffix, so
 * the name has to go into the path rather than be appended to the uri.
 */
function uriFor(place: Repository, name: string): URL {
  const uri = new URL(String(place.uri))
  uri.pathname = `/${name}.json`
  return uri
}

const writable = computed(() => typeof (selected.value as WritableRepository)?.create === 'function')

/**
 * A repository type may bring its own screen - git needs a branch and a
 * commit before it can say what is stored. The type is a static on the
 * implementation class, so it is read off the prototype.
 */
const placeType = computed(() => {
  const proto = selected.value ? Object.getPrototypeOf(selected.value) : undefined
  const ctor = proto?.constructor as { type?: string } | undefined
  return ctor && 'type' in ctor ? String(ctor.type) : ''
})

const placeView = computed(() => {
  const type = placeType.value
  if (!type || !repoManager?.isViewForRepoType(type)) return undefined
  return repoManager.getViewForRepoType(type)
})

const visibleEntries = computed(() => {
  const needle = query.value.trim().toLowerCase()
  const list = needle
    ? entries.value.filter((e) => label(e).toLowerCase().includes(needle))
    : entries.value
  return [...list].sort((a, b) => label(a).localeCompare(label(b)))
})

function label(entry: Entity): string {
  return entry.name ?? String(entry.uri).split('/').pop() ?? String(entry.uri)
}

function isCurrent(entry: Entity): boolean {
  return String(entry.uri) === origin.value?.entryUri
}

function remember(entry: Entity, name: string) {
  origin.value = {
    placeUri: String(selected.value?.uri),
    entryUri: String(entry.uri),
    name,
  }
}

async function loadPlaces() {
  places.value = (await repoManager?.getAvailableReposetories()) ?? []
  if (!selected.value && places.value.length) select(places.value[0])
}

async function select(place: Repository) {
  selected.value = place
  failure.value = ''
  loading.value = true
  try {
    entries.value = await place.findAll()
  } catch (error) {
    entries.value = []
    failure.value = `Einträge konnten nicht gelesen werden: ${reason(error)}`
  } finally {
    loading.value = false
  }
}

async function open(entry: Entity) {
  failure.value = ''
  try {
    const stored = await selected.value?.getEntityByUri(entry.uri as unknown as URL)
    const ids = restore(stored?.data ?? entry.data)
    remember(entry, label(entry))
    saveName.value = label(entry)
    emit('restored', ids)
  } catch (error) {
    failure.value = `Laden fehlgeschlagen: ${reason(error)}`
  }
}

async function saveTo(entry: Entity) {
  failure.value = ''
  try {
    await (selected.value as WritableRepository).update({ ...entry, data: capture() } as Entity)
    remember(entry, label(entry))
    await select(selected.value as Repository)
  } catch (error) {
    failure.value = `Speichern fehlgeschlagen: ${reason(error)}`
  }
}

async function saveAsNew() {
  const name = saveName.value.trim()
  if (!name || !selected.value) return
  failure.value = ''
  try {
    const entry = { name, uri: uriFor(selected.value, name), data: capture() } as unknown as Entity
    await (selected.value as WritableRepository).create(entry)
    remember(entry, name)
    await select(selected.value)
  } catch (error) {
    failure.value = `Anlegen fehlgeschlagen: ${reason(error)}`
  }
}

async function remove(entry: Entity) {
  failure.value = ''
  try {
    await (selected.value as WritableRepository).delete(entry)
    if (isCurrent(entry)) origin.value = undefined
    await select(selected.value as Repository)
  } catch (error) {
    failure.value = `Löschen fehlgeschlagen: ${reason(error)}`
  }
}

function download(entry: Entity) {
  const blob = new Blob([String(entry.data ?? '')], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = `${label(entry)}.json`
  anchor.click()
  URL.revokeObjectURL(url)
}

onMounted(loadPlaces)
watch(() => repoManager, loadPlaces)
</script>

<template>
  <div class="storage">
    <aside class="places" aria-label="Speicherorte">
      <h2 class="places__title">Orte</h2>
      <button
        v-for="place in places"
        :key="String(place.uri)"
        type="button"
        :class="['place', { on: place === selected }]"
        @click="select(place)"
      >
        <span class="place__name">{{ place.name }}</span>
        <span class="place__uri">{{ String(place.uri) }}</span>
      </button>
      <p v-if="!places.length" class="places__empty">Keine Speicherorte eingerichtet.</p>
    </aside>

    <section class="entries">
      <!-- A place with its own screen brings its own controls; two ways to
           save the same thing would only contradict each other. -->
      <header v-if="!placeView" class="entries__bar">
        <input
          v-model="query"
          class="entries__search"
          type="search"
          placeholder="Einträge filtern"
          aria-label="Einträge filtern"
        />
        <template v-if="writable">
          <input
            v-model="saveName"
            class="entries__name"
            type="text"
            placeholder="Name für neuen Stand"
            aria-label="Name für neuen Stand"
          />
          <button class="btn btn--primary" type="button" :disabled="!saveName.trim()" @click="saveAsNew">
            Hier speichern
          </button>
        </template>
      </header>

      <p v-if="failure" class="entries__failure" role="alert">{{ failure }}</p>

      <component
        :is="placeView"
        v-if="placeView"
        :repo="selected"
        :context="entries"
        @close="select(selected as Repository)"
      />

      <table v-else-if="visibleEntries.length" class="table">
        <thead>
          <tr><th>Name</th><th class="table__actions">Aktionen</th></tr>
        </thead>
        <tbody>
          <tr v-for="entry in visibleEntries" :key="String(entry.uri)" :class="{ current: isCurrent(entry) }">
            <td>
              <span class="entry__name">{{ label(entry) }}</span>
              <span v-if="isCurrent(entry)" class="entry__badge">geladen</span>
            </td>
            <td class="table__actions">
              <button class="btn" type="button" @click="open(entry)">Laden</button>
              <button v-if="writable" class="btn" type="button" @click="saveTo(entry)">Speichern</button>
              <button class="btn" type="button" title="Herunterladen" @click="download(entry)">↓</button>
              <button v-if="writable" class="btn" type="button" title="Löschen" @click="remove(entry)">✕</button>
            </td>
          </tr>
        </tbody>
      </table>

      <p v-else-if="loading" class="entries__hint">Wird gelesen…</p>
      <p v-else-if="selected" class="entries__hint">
        Hier liegt noch kein Stand.
        <template v-if="writable">Gib oben einen Namen ein, um den aktuellen abzulegen.</template>
      </p>
      <p v-else class="entries__hint">Wähle links einen Ort.</p>
    </section>
  </div>
</template>

<style scoped>
.storage {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 16px;
  align-items: start;
}

.places {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px;
  background-color: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
}

.places__title {
  margin: 0 0 4px;
  padding: 0 4px;
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-dim);
}

.place {
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 6px 8px;
  font-family: inherit;
  text-align: left;
  background: none;
  border: 0;
  border-radius: var(--radius-xs);
  cursor: pointer;
}

.place:hover {
  background-color: var(--color-raised);
}

.place.on {
  background-color: color-mix(in srgb, var(--color-accent) 12%, transparent);
  box-shadow: inset 2px 0 0 var(--color-accent);
}

.place__name {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-fg);
}

.place__uri {
  font-size: var(--text-xs);
  color: var(--color-dim);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.places__empty,
.entries__hint {
  margin: 8px 4px;
  font-size: var(--text-sm);
  color: var(--color-dim);
}

.entries {
  min-width: 0;
}

.entries__bar {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.entries__search,
.entries__name {
  height: 26px;
  padding: 0 8px;
  font-size: var(--text-sm);
  font-family: inherit;
  color: var(--color-fg);
  background-color: var(--color-raised);
  border: 1px solid var(--color-divider);
  border-radius: 4px;
}

.entries__search { min-width: 200px; }
.entries__name { margin-left: auto; min-width: 180px; }

.btn {
  height: 26px;
  padding: 0 10px;
  font-size: var(--text-sm);
  font-family: inherit;
  color: var(--color-fg);
  background-color: var(--color-raised);
  border: 1px solid var(--color-divider);
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover { border-color: var(--color-outline); }
.btn:disabled { opacity: 0.5; cursor: default; }

.btn--primary {
  color: var(--color-white);
  background-color: var(--color-accent);
  border-color: var(--color-accent);
}

.entries__search:focus-visible,
.entries__name:focus-visible,
.btn:focus-visible,
.place:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}

.entries__failure {
  margin: 0 0 12px;
  padding: 8px 10px;
  font-size: var(--text-sm);
  color: var(--color-err);
  background-color: color-mix(in srgb, var(--color-err) 10%, transparent);
  border-radius: var(--radius-xs);
}

.table {
  width: 100%;
  border-collapse: collapse;
  background-color: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.table th {
  padding: 7px 10px;
  font-size: var(--text-xs);
  font-weight: 600;
  text-align: left;
  color: var(--color-dim);
  border-bottom: 1px solid var(--color-divider);
}

.table td {
  padding: 6px 10px;
  font-size: var(--text-sm);
  border-bottom: 1px solid var(--color-divider);
}

.table tbody tr:last-child td { border-bottom: 0; }
.table tbody tr:hover { background-color: var(--color-raised); }

.table tbody tr.current {
  background-color: color-mix(in srgb, var(--color-accent) 8%, transparent);
  box-shadow: inset 2px 0 0 var(--color-accent);
}

.table__actions {
  width: 1%;
  white-space: nowrap;
  text-align: right;
}

.table__actions .btn + .btn { margin-left: 4px; }

.entry__name {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
}

.entry__badge {
  margin-left: 8px;
  padding: 1px 6px;
  font-size: var(--text-xs);
  color: var(--color-accent);
  background-color: color-mix(in srgb, var(--color-accent) 14%, transparent);
  border-radius: 3px;
}
</style>
