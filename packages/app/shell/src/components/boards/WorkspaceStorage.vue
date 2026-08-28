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
 * The storage view, on the same pattern as the other detail screens: a tree
 * on the left, the selected thing on the right.
 *
 * The tree holds places and the states kept in them; the right side opens a
 * state and shows the boards inside it, each with the floorplan it will have
 * once loaded. That is what the layout is for - you see what a stored state
 * contains before you replace your workspace with it.
 */
import { computed, inject, onMounted, ref, watch } from 'vue'
import BoardFloorplan from './BoardFloorplan.vue'
import {
  parseSnapshot,
  useWorkspaceOrigin,
  useWorkspaceSnapshot,
} from '@/composables/useWorkspaceSnapshot'
import { summarizeBoard, type BoardSummary } from '@/composables/boardSummary'
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
const entriesByPlace = ref<Record<string, Entity[]>>({})
const expanded = ref<Set<string>>(new Set())
const selectedPlace = ref<Repository | undefined>()
const selectedEntry = ref<Entity | undefined>()
const query = ref('')
const failure = ref('')
const busy = ref(false)

/** The entry this workspace came from - kept with the workspace, not with this view. */
const origin = useWorkspaceOrigin()

/** Naming form for storing the current workspace, shown instead of a state. */
const creating = ref(false)
const newName = ref('')

/**
 * Repositories reject with a plain string, so reading .message off it yields
 * undefined and the user is told nothing.
 */
function reason(error: unknown): string {
  if (typeof error === 'string') return error
  return (error as Error)?.message ?? String(error)
}

function label(entry: Entity): string {
  return entry.name ?? String(entry.uri).split('/').pop() ?? String(entry.uri)
}

function key(place: Repository): string {
  return String(place.uri)
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

/** The type is a static on the implementation class, so it is read off the prototype. */
function typeOf(place: Repository | undefined): string {
  const ctor = place ? (Object.getPrototypeOf(place)?.constructor as { type?: string }) : undefined
  return ctor && 'type' in ctor ? String(ctor.type) : ''
}

function isWritable(place: Repository | undefined): boolean {
  return typeof (place as WritableRepository)?.create === 'function'
}

/**
 * A repository type may bring its own screen - git needs a branch and a
 * commit before it can say what is stored.
 */
function viewFor(place: Repository | undefined) {
  const type = typeOf(place)
  if (!type || !repoManager?.isViewForRepoType(type)) return undefined
  return repoManager.getViewForRepoType(type)
}

const placeView = computed(() => viewFor(selectedPlace.value))

/* ------------------------------------------------------------------ tree */

async function loadPlaces() {
  places.value = (await repoManager?.getAvailableReposetories()) ?? []
  const first = places.value[0]
  if (first && expanded.value.size === 0) {
    selectedPlace.value = first
    await expand(first)
  }
}

async function expand(place: Repository) {
  expanded.value.add(key(place))
  expanded.value = new Set(expanded.value)
  await readEntries(place)
}

async function readEntries(place: Repository) {
  failure.value = ''
  busy.value = true
  try {
    entriesByPlace.value = { ...entriesByPlace.value, [key(place)]: await place.findAll() }
  } catch (error) {
    entriesByPlace.value = { ...entriesByPlace.value, [key(place)]: [] }
    failure.value = `Einträge konnten nicht gelesen werden: ${reason(error)}`
  } finally {
    busy.value = false
  }
}

function togglePlace(place: Repository) {
  selectedPlace.value = place
  creating.value = false
  if (expanded.value.has(key(place))) {
    expanded.value.delete(key(place))
    expanded.value = new Set(expanded.value)
  } else {
    expand(place)
  }
}

function entriesOf(place: Repository): Entity[] {
  const list = entriesByPlace.value[key(place)] ?? []
  const needle = query.value.trim().toLowerCase()
  const filtered = needle ? list.filter((e) => label(e).toLowerCase().includes(needle)) : list
  return [...filtered].sort((a, b) => label(a).localeCompare(label(b)))
}

function selectEntry(place: Repository, entry: Entity) {
  selectedPlace.value = place
  selectedEntry.value = entry
  creating.value = false
  failure.value = ''
}

function isOpen(entry: Entity): boolean {
  return String(entry.uri) === origin.value?.entryUri
}

function remember(entry: Entity, name: string) {
  origin.value = { placeUri: String(selectedPlace.value?.uri), entryUri: String(entry.uri), name }
}

/* --------------------------------------------------------------- reading */

/** The boards inside a stored state, summarised the way the launcher does it. */
function boardsIn(entry: Entity | undefined): BoardSummary[] {
  const data = parseSnapshot(entry?.data)
  if (!data?.pages) return []
  return Object.entries(data.pages).map(([id, page]) =>
    summarizeBoard(id, page?.info, page?.layout, page?.widgets),
  )
}

const boards = computed(() => boardsIn(selectedEntry.value))

const totals = computed(() => ({
  boards: boards.value.length,
  widgets: boards.value.reduce((sum, b) => sum + b.widgetCount, 0),
  sources: boards.value.reduce((sum, b) => sum + b.sourceCount, 0),
}))

/** Short summary for a tree row, so the tree says what is inside each state. */
function entrySummary(entry: Entity): string {
  const list = boardsIn(entry)
  if (list.length === 0) return 'leer'
  return `${list.length} ${list.length === 1 ? 'Board' : 'Boards'}`
}

/** What the current workspace would be stored as, shown before storing it. */
const pending = computed(() => {
  if (!creating.value) return { boards: 0, widgets: 0 }
  const data = parseSnapshot(capture())
  const list = Object.entries(data?.pages ?? {}).map(([id, page]) =>
    summarizeBoard(id, page?.info, page?.layout, page?.widgets),
  )
  return {
    boards: list.length,
    widgets: list.reduce((sum, b) => sum + b.widgetCount, 0),
  }
})

/* --------------------------------------------------------------- actions */

async function open(entry: Entity) {
  failure.value = ''
  try {
    const stored = await selectedPlace.value?.getEntityByUri(entry.uri as unknown as URL)
    const ids = restore(stored?.data ?? entry.data)
    remember(entry, label(entry))
    emit('restored', ids)
  } catch (error) {
    failure.value = `Laden fehlgeschlagen: ${reason(error)}`
  }
}

async function overwrite(entry: Entity) {
  const place = selectedPlace.value
  if (!place) return
  failure.value = ''
  try {
    await (place as WritableRepository).update({ ...entry, data: capture() } as Entity)
    remember(entry, label(entry))
    await readEntries(place)
    selectedEntry.value = entriesOf(place).find((e) => String(e.uri) === String(entry.uri))
  } catch (error) {
    failure.value = `Speichern fehlgeschlagen: ${reason(error)}`
  }
}

function startCreating(place: Repository) {
  selectedPlace.value = place
  selectedEntry.value = undefined
  creating.value = true
  newName.value = ''
  failure.value = ''
}

async function createEntry() {
  const place = selectedPlace.value
  const name = newName.value.trim()
  if (!place || !name) return
  failure.value = ''
  try {
    const entry = { name, uri: uriFor(place, name), data: capture() } as unknown as Entity
    await (place as WritableRepository).create(entry)
    remember(entry, name)
    await expand(place)
    creating.value = false
    selectedEntry.value = entriesOf(place).find((e) => label(e) === name)
  } catch (error) {
    failure.value = `Anlegen fehlgeschlagen: ${reason(error)}`
  }
}

async function remove(entry: Entity) {
  const place = selectedPlace.value
  if (!place) return
  failure.value = ''
  try {
    await (place as WritableRepository).delete(entry)
    if (isOpen(entry)) origin.value = undefined
    if (selectedEntry.value === entry) selectedEntry.value = undefined
    await readEntries(place)
  } catch (error) {
    failure.value = `Löschen fehlgeschlagen: ${reason(error)}`
  }
}

function download(entry: Entity) {
  const payload = typeof entry.data === 'string' ? entry.data : JSON.stringify(entry.data)
  const url = URL.createObjectURL(new Blob([payload], { type: 'application/json' }))
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
    <aside class="tree" aria-label="Speicher">
      <input
        v-model="query"
        class="tree__search"
        type="search"
        placeholder="Stände filtern"
        aria-label="Stände filtern"
      />

      <div class="tree__body" role="tree">
        <template v-for="place in places" :key="key(place)">
          <button
            type="button"
            role="treeitem"
            :aria-expanded="expanded.has(key(place))"
            :class="['row', 'row--place', { on: selectedPlace === place && !selectedEntry }]"
            @click="togglePlace(place)"
          >
            <span class="row__twist">{{ expanded.has(key(place)) ? '▾' : '▸' }}</span>
            <span class="row__name">{{ place.name }}</span>
            <span class="row__meta">{{ (entriesByPlace[key(place)] ?? []).length }}</span>
          </button>

          <template v-if="expanded.has(key(place))">
            <button
              v-for="entry in entriesOf(place)"
              :key="String(entry.uri)"
              type="button"
              role="treeitem"
              :class="['row', 'row--entry', { on: selectedEntry === entry }]"
              @click="selectEntry(place, entry)"
            >
              <span class="row__dot" :class="{ open: isOpen(entry) }" aria-hidden="true" />
              <span class="row__name">{{ label(entry) }}</span>
              <span class="row__meta">{{ entrySummary(entry) }}</span>
            </button>

            <p v-if="entriesOf(place).length === 0" class="row row--hint">
              {{ query ? 'Nichts gefunden' : 'Noch kein Stand' }}
            </p>

            <button
              v-if="isWritable(place)"
              type="button"
              class="row row--add"
              @click="startCreating(place)"
            >
              <span class="row__twist">＋</span>
              <span class="row__name">Aktuellen Stand ablegen…</span>
            </button>
          </template>
        </template>

        <p v-if="!places.length" class="row row--hint">Keine Speicherorte eingerichtet.</p>
      </div>
    </aside>

    <section class="detail">
      <p v-if="failure" class="detail__failure" role="alert">{{ failure }}</p>

      <template v-if="creating">
        <header class="detail__head">
          <h2 class="detail__name">Neuen Stand ablegen</h2>
          <span class="detail__facts">in {{ selectedPlace?.name }}</span>
        </header>
        <form class="create" @submit.prevent="createEntry">
          <label class="create__label" for="storage-name">Name</label>
          <input
            id="storage-name"
            v-model="newName"
            class="create__input"
            type="text"
            placeholder="z. B. bodenfeuchte"
          />
          <button class="btn btn--primary" type="submit" :disabled="!newName.trim()">Ablegen</button>
          <button class="btn" type="button" @click="creating = false">Abbrechen</button>
          <p class="create__hint">
            Abgelegt wird der gesamte Arbeitsstand: {{ pending.boards }}
            {{ pending.boards === 1 ? 'Board' : 'Boards' }} mit {{ pending.widgets }} Widgets, dazu
            Verbindungen, Datenquellen und Variablen.
          </p>
        </form>
      </template>

      <component
        :is="placeView"
        v-else-if="placeView && !selectedEntry"
        :repo="selectedPlace"
        :context="entriesByPlace[key(selectedPlace!)]"
        @close="readEntries(selectedPlace as Repository)"
      />

      <template v-else-if="selectedEntry">
        <header class="detail__head">
          <h2 class="detail__name">{{ label(selectedEntry) }}</h2>
          <span v-if="isOpen(selectedEntry)" class="detail__badge">geladen</span>
          <span class="detail__facts">
            {{ selectedPlace?.name }} · {{ totals.boards }}
            {{ totals.boards === 1 ? 'Board' : 'Boards' }} · {{ totals.widgets }} Widgets ·
            {{ totals.sources }} Datenquellen
          </span>
          <span class="detail__spacer" />
          <button class="btn btn--primary" type="button" @click="open(selectedEntry)">Laden</button>
          <button
            v-if="isWritable(selectedPlace)"
            class="btn"
            type="button"
            title="Aktuellen Arbeitsstand hierhin schreiben"
            @click="overwrite(selectedEntry)"
          >
            Überschreiben
          </button>
          <button class="btn" type="button" @click="download(selectedEntry)">Herunterladen</button>
          <button
            v-if="isWritable(selectedPlace)"
            class="btn btn--danger"
            type="button"
            @click="remove(selectedEntry)"
          >
            Löschen
          </button>
        </header>

        <div v-if="boards.length" class="boards">
          <article v-for="board in boards" :key="board.id" class="board">
            <BoardFloorplan :items="board.items" :type-by-id="board.typeById" />
            <div class="board__text">
              <h3 class="board__name">{{ board.name }}</h3>
              <p class="board__facts">
                {{ board.widgetCount }} Widgets · {{ board.sourceCount }}
                {{ board.sourceCount === 1 ? 'Datenquelle' : 'Datenquellen' }}
              </p>
              <p v-if="board.kinds.length" class="board__kinds">{{ board.kinds.join(' · ') }}</p>
            </div>
          </article>
        </div>
        <p v-else class="detail__hint">
          In diesem Stand liegt kein Board - er enthält nur Verbindungen, Quellen oder Variablen.
        </p>
      </template>

      <p v-else-if="busy" class="detail__hint">Wird gelesen…</p>
      <p v-else class="detail__hint">Wähle links einen Stand, um zu sehen, was darin liegt.</p>
    </section>
  </div>
</template>

<style scoped>
.storage {
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  flex: 1 1 auto;
  min-height: 0;
  background-color: var(--color-pane);
  overflow: hidden;
}

/* ------------------------------------------------------------------ tree */

.tree {
  display: flex;
  flex-direction: column;
  min-height: 0;
  border-right: 1px solid var(--color-divider);
}

.tree__search {
  margin: 8px;
  height: 26px;
  padding: 0 8px;
  font-size: var(--text-sm);
  font-family: inherit;
  color: var(--color-fg);
  background-color: var(--color-bg);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-xs);
}

.tree__body {
  flex: 1 1 auto;
  min-height: 0;
  padding: 0 4px 8px;
  overflow-y: auto;
}

.row {
  display: flex;
  align-items: baseline;
  flex-wrap: nowrap;
  gap: 6px;
  width: 100%;
  padding: 4px 6px;
  font-family: inherit;
  font-size: var(--text-base);
  color: var(--color-fg);
  text-align: left;
  background: none;
  border: 0;
  border-radius: var(--radius-xs);
  cursor: pointer;
}

.row:hover {
  background-color: var(--color-raised);
}

.row.on {
  background-color: color-mix(in srgb, var(--color-accent) 12%, transparent);
  box-shadow: inset 2px 0 0 var(--color-accent);
}

.row--place {
  font-weight: 600;
}

.row--entry {
  padding-left: 22px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: var(--text-sm);
}

.row--hint {
  padding-left: 22px;
  margin: 0;
  color: var(--color-dim);
  font-size: var(--text-sm);
  cursor: default;
}

.row--add {
  color: var(--color-dim);
  font-size: var(--text-sm);
}

.row__twist {
  width: 12px;
  flex: none;
  font-size: var(--text-xs);
  color: var(--color-dim);
}

.row__name {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.row__meta {
  margin-left: auto;
  padding-left: 8px;
  flex: none;
  font-family: inherit;
  font-size: var(--text-xs);
  color: var(--color-dim);
}

/* The state that is loaded right now carries the accent; the others stay quiet. */
.row__dot {
  width: 5px;
  height: 5px;
  flex: none;
  border-radius: 50%;
  background-color: transparent;
}

.row__dot.open {
  background-color: var(--color-accent);
}

/* ---------------------------------------------------------------- detail */

.detail {
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  background-color: var(--color-bg);
  overflow-y: auto;
}

.detail__head {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 12px;
  background-color: var(--color-pane);
  border-bottom: 1px solid var(--color-divider);
}

.detail__name {
  margin: 0;
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-fg);
}

.detail__facts {
  font-size: var(--text-sm);
  color: var(--color-dim);
}

.detail__spacer {
  flex: 1 1 auto;
}

.detail__badge {
  padding: 1px 6px;
  font-size: var(--text-xs);
  color: var(--color-accent);
  background-color: color-mix(in srgb, var(--color-accent) 14%, transparent);
  border-radius: var(--radius-xs);
}

.detail__hint {
  display: grid;
  place-items: center;
  flex: 1 1 auto;
  margin: 0;
  padding: 24px;
  font-size: var(--text-sm);
  color: var(--color-dim);
  text-align: center;
}

.detail__failure {
  margin: 12px 12px 0;
  padding: 8px 10px;
  font-size: var(--text-sm);
  color: var(--color-err);
  background-color: color-mix(in srgb, var(--color-err) 10%, transparent);
  border-radius: var(--radius-xs);
}

/* --------------------------------------------------- boards inside a state */

.boards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
  padding: 12px;
}

.board {
  background-color: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.board__text {
  padding: 8px 10px;
}

.board__name {
  margin: 0;
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-fg);
}

.board__facts {
  margin: 2px 0 0;
  font-size: var(--text-sm);
  color: var(--color-dim);
}

.board__kinds {
  margin: 4px 0 0;
  font-size: var(--text-xs);
  color: var(--color-dim);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ---------------------------------------------------------------- create */

.create {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  padding: 16px;
}

.create__label {
  font-size: var(--text-sm);
  color: var(--color-dim);
}

.create__input {
  height: 26px;
  min-width: 220px;
  padding: 0 8px;
  font-size: var(--text-base);
  font-family: inherit;
  color: var(--color-fg);
  background-color: var(--color-raised);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-xs);
}

.create__hint {
  flex: 1 0 100%;
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-dim);
}

/* --------------------------------------------------------------- buttons */

.btn {
  height: 24px;
  padding: 0 10px;
  font-size: var(--text-sm);
  font-family: inherit;
  color: var(--color-fg);
  background-color: var(--color-raised);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-xs);
  cursor: pointer;
}

.btn:hover {
  border-color: var(--color-outline);
}

.btn:disabled {
  opacity: 0.5;
  cursor: default;
}

.btn--primary {
  color: var(--color-onAccent);
  background-color: var(--color-accent);
  border-color: var(--color-accent);
}

.btn--danger {
  color: var(--color-err);
}

.btn:focus-visible,
.row:focus-visible,
.tree__search:focus-visible,
.create__input:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}
</style>
