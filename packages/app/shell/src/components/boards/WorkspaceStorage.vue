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
 * The storage view, on the same pattern as the other detail screens: a list
 * on the left, the selected thing on the right.
 *
 * The left side holds the places; the right side shows the selected place -
 * what kind it is, the states kept in it, and storing the current workspace
 * there - or, once a state is picked, the boards inside it, each with the
 * floorplan it will have once loaded. One layout for every kind of place; a
 * kind that needs more, git with its branch and commit, adds its controls to
 * the place's header and nothing else (#1247). That is what the layout is for - you see what a stored state
 * contains before you replace your workspace with it.
 */
import { computed, inject, onMounted, ref, watch } from 'vue'
import { DButton, DIcon, DInput } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import BoardFloorplan from './BoardFloorplan.vue'
import {
  parseWorkspace,
  useWorkspaceFile,
  useWorkspaceOrigin,
} from '../../composables/useWorkspaceFile'
import { summarizePage, type PageSummary } from '../../composables/pageSummary'
import { useUnsavedChanges } from '../../composables/unsavedChanges'
import { useLastOpenedState } from '../../composables/useLastOpenedState'
import {
  identifier as WORKSPACE,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import {
  type Repository,
  type WritableRepository,
  type RepositoryRegistryI,
  type Entity,
  identifier as RepoManagerId,
} from 'org.eclipse.daanse.board.app.lib.api.persistence'
import {
  chooseDirectory,
  filesystemAvailable,
} from 'org.eclipse.daanse.board.app.lib.persistence.filesystem'

const emit = defineEmits<{ restored: [ids: string[]] }>()

/*
 * Where to open, when the caller knows (#1200).
 *
 * A board that has a place it came from is shown standing there, with
 * its name filled in, rather than on whatever place happens to be first.
 * Both are optional: opened from the topbar there is nothing to go on,
 * and then the view behaves as it always did.
 */
const props = defineProps<{ onPlace?: string; withName?: string }>()

const { remember: rememberOpened } = useLastOpenedState()
const workspace = inject<Workspace>(WORKSPACE)!

const repoManager = inject<RepositoryRegistryI>(RepoManagerId)
const { save, load, storeAs } = useWorkspaceFile()
const { t } = useTranslation('shell')

const places = ref<Repository[]>([])
const entriesByPlace = ref<Record<string, Entity[]>>({})
const selectedPlace = ref<Repository | undefined>()
const selectedEntry = ref<Entity | undefined>()
const query = ref('')
const failure = ref('')
const busy = ref(false)

/** The entry this workspace came from - kept with the workspace, not with this view. */
const origin = useWorkspaceOrigin()

/** Name for storing the current workspace in the selected place. */
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

/*
 * What kind of place it is, in words. A kind not named here is shown by
 * its type, which is better than nothing and tells a developer what to add.
 *
 * i18n-keys: shell:Storage.kind.*
 */
const KIND: Record<string, string> = {
  gitRepositories: 'Storage.kind.git',
  localRepositories: 'Storage.kind.local',
  fileSystemRepositories: 'Storage.kind.folder',
  restRepositories: 'Storage.kind.rest',
}

/* And as a sign in the list of places. */
const ICON: Record<string, string> = {
  gitRepositories: 'commit',
  localRepositories: 'web',
  fileSystemRepositories: 'folder',
  restRepositories: 'cloud',
}

function iconOf(place: Repository | undefined): string {
  return ICON[typeOf(place)] ?? 'inventory_2'
}

function kindOf(place: Repository | undefined): string {
  const type = typeOf(place)
  return KIND[type] ? t(KIND[type]) : type
}

/* ---------------------------------------------------------------- places */

async function loadPlaces() {
  places.value = (await repoManager?.getAvailableReposetories()) ?? []
  if (selectedPlace.value) return

  /* The place the caller named, where it is there to be found. */
  const asked = props.onPlace
    ? places.value.find((each) => String(each.uri) === props.onPlace)
    : undefined
  const open = asked ?? places.value[0]
  if (!open) return

  if (props.withName) newName.value = props.withName
  await selectPlace(open)
}

/*
 * A folder on the machine, as a place of its own.
 *
 * The picker has to be opened from the click itself - the browser hands out
 * a directory handle only while a gesture is in flight - so this cannot be
 * folded into loadPlaces or done on mount.
 */
const canUseFolders = filesystemAvailable()

async function connectFolder() {
  failure.value = ''
  try {
    const place = await chooseDirectory()
    /* Closing the picker is not a failure; nothing was chosen, nothing said. */
    if (!place) return
    await loadPlaces()
    await selectPlace(places.value.find((p) => String(p.uri) === String(place.uri)) ?? place)
  } catch (error) {
    failure.value = t('Storage.failure.connect', { reason: reason(error) })
  }
}

async function readEntries(place: Repository) {
  failure.value = ''
  busy.value = true
  try {
    entriesByPlace.value = { ...entriesByPlace.value, [key(place)]: await place.findAll() }
  } catch (error) {
    entriesByPlace.value = { ...entriesByPlace.value, [key(place)]: [] }
    failure.value = t('Storage.failure.read', { reason: reason(error) })
  } finally {
    busy.value = false
  }
}

/** Shows a place on the right; its entries are read the first time. */
async function selectPlace(place: Repository) {
  selectedPlace.value = place
  selectedEntry.value = undefined
  query.value = ''
  failure.value = ''
  if (!entriesByPlace.value[key(place)]) await readEntries(place)
}

/** Back from a state to the place it is kept in. */
function backToPlace() {
  selectedEntry.value = undefined
  failure.value = ''
}

/** The place view changed what the place reads - git's branch or commit. */
async function refreshPlace() {
  const place = selectedPlace.value
  if (!place) return
  selectedEntry.value = undefined
  await readEntries(place)
}

function entriesOf(place: Repository): Entity[] {
  const list = entriesByPlace.value[key(place)] ?? []
  const needle = query.value.trim().toLowerCase()
  const filtered = needle ? list.filter((e) => label(e).toLowerCase().includes(needle)) : list
  return [...filtered].sort((a, b) => label(a).localeCompare(label(b)))
}

/*
 * The folders a place's boards sit in.
 *
 * A board carries the path it was found under as its name - a folder place
 * walks its subfolders - so the structure is read back out of the names
 * rather than kept twice. Rendered as one flat list of rows with a depth
 * each, which keeps the markup and the keyboard order simple.
 *
 * While a filter is typed the folders are dropped and full paths are shown:
 * what is wanted then is the hit, not where it sits.
 */
const openFolders = ref<Set<string>>(new Set())

type Row =
  | { kind: 'folder'; id: string; name: string; depth: number; count: number }
  | { kind: 'entry'; id: string; name: string; depth: number; entry: Entity }

function toggleFolder(id: string) {
  const open = new Set(openFolders.value)
  open.has(id) ? open.delete(id) : open.add(id)
  openFolders.value = open
}

function rowsOf(place: Repository): Row[] {
  const entries = entriesOf(place)
  if (query.value.trim()) {
    return entries.map((entry) => ({
      kind: 'entry' as const,
      id: String(entry.uri),
      name: label(entry),
      depth: 0,
      entry,
    }))
  }

  const rows: Row[] = []
  const placeKey = key(place)

  const build = (prefix: string, depth: number) => {
    const names = new Set<string>()
    for (const entry of entries) {
      const path = label(entry)
      if (!path.startsWith(prefix)) continue
      const rest = path.slice(prefix.length)
      const slash = rest.indexOf('/')
      if (slash >= 0) names.add(rest.slice(0, slash))
    }
    for (const name of [...names].sort((a, b) => a.localeCompare(b))) {
      const folder = `${prefix}${name}/`
      const id = `${placeKey}|${folder}`
      rows.push({
        kind: 'folder',
        id,
        name,
        depth,
        count: entries.filter((e) => label(e).startsWith(folder)).length,
      })
      if (openFolders.value.has(id)) build(folder, depth + 1)
    }
    for (const entry of entries) {
      const path = label(entry)
      if (!path.startsWith(prefix)) continue
      const rest = path.slice(prefix.length)
      if (rest.includes('/')) continue
      rows.push({ kind: 'entry', id: String(entry.uri), name: rest, depth, entry })
    }
  }
  build('', 0)
  return rows
}

function selectEntry(place: Repository, entry: Entity) {
  selectedPlace.value = place
  selectedEntry.value = entry
  failure.value = ''
  if (!isRead(entry)) readEntry(place, entry)
}

/*
 * Some places list their entries without reading them - git fetches a
 * file's content only when asked for that file. Such an entry is read when
 * it is selected, so the right side can show what it holds.
 */
const reading = ref(false)

function isRead(entry: Entity): boolean {
  return entry.data !== undefined && entry.data !== null
}

async function readEntry(place: Repository, entry: Entity) {
  reading.value = true
  try {
    const stored = await place.getEntityByUri(entry.uri as unknown as URL)
    if (stored && isRead(stored)) entry.data = stored.data
  } catch (error) {
    if (selectedEntry.value === entry) {
      failure.value = t('Storage.failure.read', { reason: reason(error) })
    }
  } finally {
    reading.value = false
  }
}

function isOpen(entry: Entity): boolean {
  return String(entry.uri) === origin.value?.entryUri
}

function remember(entry: Entity, name: string) {
  origin.value = { placeUri: String(selectedPlace.value?.uri), entryUri: String(entry.uri), name }
}

/* --------------------------------------------------------------- reading */

/**
 * The boards inside a stored state, summarised the way the launcher does it.
 *
 * Read into the model without applying it - both the format written here
 * and the one stored before any of this end up as the same objects, so
 * this reads one shape rather than two.
 */
function boardsIn(entry: Entity | undefined): PageSummary[] {
  return summarize(parseWorkspace(entry?.data))
}

function summarize(held: Workspace | undefined): PageSummary[] {
  return (held?.board?.pages.toArray() ?? []).map((page) =>
    summarizePage(page.id as string, page, page.layout.toArray(), page.widgets.toArray()),
  )
}

const boards = computed(() => boardsIn(selectedEntry.value))

/*
 * What the state holds besides its pages.
 *
 * A stored state can carry connections, sources and variables and no
 * pages at all - that is what a person explores those connections from.
 * Counted off the pages alone, such a state looked empty, which is the
 * one thing it is not.
 */
const held = computed(() => parseWorkspace(selectedEntry.value?.data))

const totals = computed(() => ({
  boards: boards.value.length,
  widgets: boards.value.reduce((sum, b) => sum + b.widgetCount, 0),
  sources: boards.value.reduce((sum, b) => sum + b.sourceCount, 0),
  connections: held.value?.connections.toArray().length ?? 0,
  datasources: held.value?.datasources.toArray().length ?? 0,
  variables: held.value?.variables.toArray().length ?? 0,
}))

/** Short summary for a list row, so the list says what is inside each state. */
function entrySummary(entry: Entity): string {
  /* Not read yet is not empty - say nothing until it is known (#1247). */
  if (!isRead(entry)) return ''
  const list = boardsIn(entry)
  if (list.length > 0) {
    /* Pages, not boards: a stored state holds one board, and what is
      counted here is what is inside it. */
    const widgets = list.reduce((sum, b) => sum + b.widgetCount, 0)
    return `${t('Storage.pages', { count: list.length })} · ${t('Storage.widgets', { count: widgets })}`
  }
  /* No pages is not nothing: say what it does hold, where it holds any. */
  const inside = parseWorkspace(entry.data)
  const connections = inside?.connections.toArray().length ?? 0
  if (connections > 0) return t('Storage.entry.connections', { count: connections })
  return t('Storage.entry.empty')
}

/** What the current workspace would be stored as, shown before storing it. */
const pending = computed(() => {
  if (selectedEntry.value || !isWritable(selectedPlace.value)) return { boards: 0, widgets: 0 }
  const list = summarize(parseWorkspace(save()))
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
    const data = stored?.data ?? entry.data
    const ids = load(data, label(entry))
    remember(entry, label(entry))
    /* So a reload finds this board again; see useLastOpenedState. */
    const boardId = workspace.board?.id as string | undefined
    if (boardId) rememberOpened({ boardId, name: label(entry), data, origin: origin.value })
    emit('restored', ids)
  } catch (error) {
    failure.value = t('Storage.failure.load', { reason: reason(error) })
  }
}

async function overwrite(entry: Entity) {
  const place = selectedPlace.value
  if (!place) return
  failure.value = ''
  try {
    await (place as WritableRepository).update({ ...entry, data: save() } as Entity)
    useUnsavedChanges()?.markSaved()
    remember(entry, label(entry))
    await readEntries(place)
    selectedEntry.value = entriesOf(place).find((e) => String(e.uri) === String(entry.uri))
  } catch (error) {
    failure.value = t('Storage.failure.save', { reason: reason(error) })
  }
}

async function createEntry() {
  const place = selectedPlace.value
  const name = newName.value.trim()
  if (!place || !name) return
  failure.value = ''
  try {
    /* The same write the launcher makes when a board is created, so
      there is one way a state is first put somewhere, not two. It sets
      the origin itself; what is kept here is which place is selected. */
    await storeAs(place, name)
    selectedPlace.value = place
    await readEntries(place)
    newName.value = ''
    selectedEntry.value = entriesOf(place).find((e) => label(e) === name)
  } catch (error) {
    failure.value = t('Storage.failure.create', { reason: reason(error) })
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
    failure.value = t('Storage.failure.remove', { reason: reason(error) })
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
    <!-- ------------------------------------------------------ places -->
    <aside class="places" :aria-label="t('Storage.places')">
      <header class="places__head">
        <h2 class="places__title">{{ t('Storage.places') }}</h2>
      </header>

      <nav class="places__body">
        <button
          v-for="place in places"
          :key="key(place)"
          type="button"
          :aria-current="selectedPlace === place ? 'true' : undefined"
          :class="['place', { 'place--on': selectedPlace === place }]"
          @click="selectPlace(place)"
        >
          <DIcon class="place__icon" :name="iconOf(place)" size="sm" />
          <span class="place__text">
            <span class="place__name">{{ place.name }}</span>
            <span class="place__kind">{{ kindOf(place) }}</span>
          </span>
          <span v-if="entriesByPlace[key(place)]" class="place__count">
            {{ entriesByPlace[key(place)]!.length }}
          </span>
        </button>

        <p v-if="!places.length" class="places__none">{{ t('Storage.noPlaces') }}</p>
      </nav>

      <footer class="places__foot">
        <DButton v-if="canUseFolders" intent="quiet" size="sm" @click="connectFolder">
          <DIcon name="create_new_folder" size="sm" />{{ t('Storage.connectFolder') }}
        </DButton>
        <p v-else class="places__none">{{ t('Storage.noFolderSupport') }}</p>
      </footer>
    </aside>

    <!-- ------------------------------------------------------ detail -->
    <section class="detail">
      <div class="detail__inner">
        <p v-if="failure" class="failure" role="alert">
          <DIcon name="error" size="sm" />
          <span>{{ failure }}</span>
        </p>

        <!-- One state, as it would open -->
        <template v-if="selectedEntry">
          <header class="head">
            <div class="head__what">
              <DButton class="head__back" intent="quiet" size="sm" :title="t('Storage.backTo', { place: selectedPlace?.name })" @click="backToPlace">
                <DIcon name="arrow_back" size="sm" />{{ selectedPlace?.name }}
              </DButton>
              <h1 class="head__name">
                {{ label(selectedEntry) }}
                <span v-if="isOpen(selectedEntry)" class="head__badge">{{ t('Storage.loaded') }}</span>
              </h1>
            </div>
            <div class="actions" role="group" :aria-label="label(selectedEntry)">
              <DButton intent="primary" size="sm" :disabled="!isRead(selectedEntry)" @click="open(selectedEntry)">
                <DIcon name="open_in_browser" size="sm" />{{ t('Storage.load') }}
              </DButton>
              <DButton
                v-if="isWritable(selectedPlace)"
                size="sm"
                :title="t('Storage.overwriteLabel')"
                @click="overwrite(selectedEntry)"
              >
                {{ t('Storage.overwrite') }}
              </DButton>
              <DButton size="sm" :disabled="!isRead(selectedEntry)" @click="download(selectedEntry)">{{ t('Storage.download') }}</DButton>
              <DButton
                v-if="isWritable(selectedPlace)"
                intent="danger"
                size="sm"
                @click="remove(selectedEntry)"
              >
                {{ t('common:Action.delete') }}
              </DButton>
            </div>
          </header>

          <!-- Read on selection; until then a sketch of what is coming -->
          <template v-if="reading && !isRead(selectedEntry)">
            <ul class="figures" aria-hidden="true">
              <li v-for="n in 3" :key="n" class="figure figure--ghost" />
            </ul>
            <p class="quiet" role="status">{{ t('Storage.readingEntry') }}</p>
          </template>

          <template v-else-if="isRead(selectedEntry)">
            <ul class="figures">
              <li class="figure">
                <span class="figure__value">{{ totals.boards }}</span>
                <span class="figure__label">{{ t('Storage.figure.pages') }}</span>
              </li>
              <li class="figure">
                <span class="figure__value">{{ totals.widgets }}</span>
                <span class="figure__label">{{ t('Storage.figure.widgets') }}</span>
              </li>
              <li class="figure">
                <span class="figure__value">{{ totals.connections }}</span>
                <span class="figure__label">{{ t('Storage.figure.connections') }}</span>
              </li>
              <li class="figure">
                <span class="figure__value">{{ totals.datasources }}</span>
                <span class="figure__label">{{ t('Storage.figure.sources') }}</span>
              </li>
              <li class="figure">
                <span class="figure__value">{{ totals.variables }}</span>
                <span class="figure__label">{{ t('Storage.figure.variables') }}</span>
              </li>
            </ul>

            <section v-if="boards.length">
              <h2 class="section__heading">
                {{ t('Storage.figure.pages') }}
                <span class="section__count">{{ boards.length }}</span>
              </h2>
              <ul class="cards">
                <li v-for="board in boards" :key="board.id" class="card">
                  <BoardFloorplan class="card__plan" :items="board.items" :type-by-id="board.typeById" />
                  <div class="card__text">
                    <h3 class="card__name">{{ board.name }}</h3>
                    <p class="card__facts">
                      {{ t('Storage.widgets', { count: board.widgetCount }) }} ·
                      {{ t('Storage.sources', { count: board.sourceCount }) }}
                    </p>
                    <p v-if="board.kinds.length" class="card__kinds">{{ board.kinds.join(' · ') }}</p>
                  </div>
                </li>
              </ul>
            </section>
            <!-- No pages, but what is here is worth naming: this is the state
              one explores its connections from. -->
            <p v-else class="quiet">{{ t('Storage.noBoard') }}</p>
          </template>
        </template>

        <!-- The place: its kind, what is kept in it, and storing into it. The
          same for every kind; a kind's own view adds header controls only. -->
        <template v-else-if="selectedPlace">
          <header class="head head--place">
            <div class="head__what">
              <h1 class="head__name">{{ selectedPlace.name }}</h1>
              <p class="head__desc">
                <DIcon :name="iconOf(selectedPlace)" size="xs" />
                {{ kindOf(selectedPlace) }}
                <template v-if="!busy">
                  · {{ t('Storage.entries', { count: (entriesByPlace[key(selectedPlace)] ?? []).length }) }}
                </template>
              </p>
            </div>
            <component
              :is="placeView"
              v-if="placeView"
              :key="key(selectedPlace)"
              class="head__controls"
              :repo="selectedPlace"
              @refresh="refreshPlace"
            />
          </header>

          <section>
            <div class="section__bar">
              <h2 class="section__heading">
                {{ t('Storage.list.title') }}
                <span v-if="!busy" class="section__count">{{ entriesOf(selectedPlace).length }}</span>
              </h2>
              <DInput
                v-if="(entriesByPlace[key(selectedPlace)] ?? []).length > 5 || query"
                v-model="query"
                class="section__search"
                type="search"
                size="sm"
                :placeholder="t('Storage.filter')"
                :aria-label="t('Storage.filter')"
              />
            </div>

            <!-- Reading: the shape of a list, not a word in a corner -->
            <ul v-if="busy" class="list" aria-hidden="true">
              <li v-for="n in 4" :key="n" class="list__ghost" />
            </ul>
            <p v-if="busy" class="quiet" role="status">{{ t('Storage.reading') }}</p>

            <div v-else-if="entriesOf(selectedPlace).length === 0" class="empty">
              <DIcon class="empty__icon" :name="query ? 'search_off' : 'inventory_2'" size="lg" />
              <p class="empty__title">{{ query ? t('Storage.nothingFound') : t('Storage.noEntry') }}</p>
              <p v-if="!query" class="empty__text">
                {{ isWritable(selectedPlace) ? t('Storage.list.emptyWritable') : t('Storage.list.emptyReadOnly') }}
              </p>
            </div>

            <ul v-else class="list">
              <li v-for="row in rowsOf(selectedPlace)" :key="row.id">
                <!-- A folder the place walked into; its depth is its indent -->
                <button
                  v-if="row.kind === 'folder'"
                  type="button"
                  :aria-expanded="openFolders.has(row.id)"
                  class="row row--folder"
                  :style="{ paddingLeft: `${12 + row.depth * 18}px` }"
                  @click="toggleFolder(row.id)"
                >
                  <DIcon class="row__icon" :name="openFolders.has(row.id) ? 'folder_open' : 'folder'" size="sm" />
                  <span class="row__name">{{ row.name }}</span>
                  <span class="row__meta">{{ row.count }}</span>
                </button>

                <button
                  v-else
                  type="button"
                  class="row row--entry"
                  :style="{ paddingLeft: `${12 + row.depth * 18}px` }"
                  @click="selectEntry(selectedPlace, row.entry)"
                >
                  <DIcon class="row__icon" name="dashboard" size="sm" />
                  <span class="row__name">{{ row.name }}</span>
                  <span v-if="isOpen(row.entry)" class="row__badge">{{ t('Storage.loaded') }}</span>
                  <span class="row__meta">{{ entrySummary(row.entry) }}</span>
                  <DIcon class="row__go" name="chevron_right" size="sm" />
                </button>
              </li>
            </ul>
          </section>

          <section v-if="isWritable(selectedPlace)">
            <h2 class="section__heading">{{ t('Storage.create.title') }}</h2>
            <form class="store" @submit.prevent="createEntry">
              <DInput
                id="storage-name"
                v-model="newName"
                class="store__name"
                size="sm"
                stacked
                :label="t('Storage.create.name')"
                :placeholder="t('Storage.create.placeholder')"
              />
              <DButton intent="primary" size="sm" type="submit" :disabled="!newName.trim()">
                <DIcon name="save" size="sm" />{{ t('Storage.create.submit') }}
              </DButton>
              <p class="store__hint">
                {{ t('Storage.create.hint', { pages: t('Storage.pages', { count: pending.boards }), widgets: t('Storage.widgets', { count: pending.widgets }) }) }}
              </p>
            </form>
          </section>
        </template>

        <!--
          Nothing picked: it says what a state is and what can be done here
          instead, which is what one needs before picking.
        -->
        <div v-else class="nothing">
          <h2 class="nothing__title">{{ t('Storage.nothing.title') }}</h2>
          <p class="nothing__text">{{ t('Storage.nothing.text') }}</p>
          <ul class="nothing__points">
            <li>{{ t('Storage.nothing.open') }}</li>
            <li>{{ t('Storage.nothing.store') }}</li>
            <li>{{ t('Storage.nothing.carry') }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/*
 * Laid out like the other finished screens: a panel on the left as in
 * "Connections & data", and on the right the board overview's header,
 * figures, section headings and bordered lists.
 */
.storage {
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  flex: 1 1 auto;
  min-height: 0;
  background-color: var(--color-bg);
  overflow: hidden;
}

/* ---------------------------------------------------------------- places */

.places {
  display: flex;
  flex-direction: column;
  min-height: 0;
  background: var(--color-pane);
  border-right: 1px solid var(--color-divider);
}

.places__head {
  flex: none;
  padding: 9px 10px;
  border-bottom: 1px solid var(--color-divider);
}

.places__title {
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-dim);
}

.places__body {
  flex: 1 1 auto;
  min-height: 0;
  padding: 4px 0;
  overflow-y: auto;
}

.places__foot {
  flex: none;
  padding: 6px 6px;
  border-top: 1px solid var(--color-divider);
}

.places__none {
  margin: 0;
  padding: 6px 10px;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
}

.place {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 7px 10px;
  text-align: left;
  background: transparent;
  border: 0;
  box-shadow: inset 2px 0 0 transparent;
  cursor: pointer;
}

.place:hover {
  background: var(--color-raised);
}

.place--on,
.place--on:hover {
  background: color-mix(in srgb, var(--color-accent) 14%, transparent);
  box-shadow: inset 2px 0 0 var(--color-accent);
}

.place:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -2px;
}

.place__icon {
  flex: none;
  color: var(--color-dim);
}

.place--on .place__icon {
  color: var(--color-accent);
}

.place__text {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 0;
}

.place__name {
  overflow: hidden;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-fg);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.place__kind {
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-dim);
}

.place__count {
  flex: none;
  min-width: 20px;
  padding: 0 6px;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  line-height: 1.6;
  text-align: center;
  color: var(--color-dim);
  background: var(--color-raised);
  border-radius: 999px;
}

/* ---------------------------------------------------------------- detail */

.detail {
  min-width: 0;
  min-height: 0;
  overflow: auto;
}

.detail__inner {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 920px;
  padding: 20px 24px 32px;
}

.head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-divider);
}

.head__what {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  min-width: 0;
}

.head__back {
  margin-left: -8px;
}

.head__name {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xl);
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-fg);
  overflow-wrap: anywhere;
}

.head__desc {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
}

.head__badge,
.row__badge {
  padding: 1px 6px;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--color-accent);
  background-color: color-mix(in srgb, var(--color-accent) 14%, transparent);
  border-radius: var(--radius-xs);
}

/* A place's own controls - git's repository, branch and commit - sit in
  its header, as one row under the name. */
.head--place {
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: flex-start;
}

.head__controls {
  flex: none;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

/* ---------------------------------------------------------------- figures */

.figures {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.figure {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 112px;
  padding: 12px 14px;
  background-color: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
}

.figure--ghost {
  height: 60px;
}

.figure__value {
  font-family: var(--font-mono);
  font-size: var(--text-xl);
  line-height: 1.1;
  color: var(--color-fg);
}

.figure__label {
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  letter-spacing: 0.02em;
  color: var(--color-dim);
}

/* --------------------------------------------------------------- sections */

.section__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
}

.section__bar .section__heading {
  margin: 0;
}

.section__search {
  width: 240px;
}

.section__heading {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin: 0 0 8px;
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-fg);
}

.section__count {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: 400;
  color: var(--color-dim);
}

.quiet {
  margin: 8px 0 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
}

/* ------------------------------------------------------- entries of a place */

.list {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.list > li + li {
  border-top: 1px solid var(--color-divider);
}

.row {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 8px 12px;
  text-align: left;
  background: var(--color-pane);
  border: 0;
  cursor: pointer;
}

.row:hover {
  background-color: var(--color-raised);
}

.row:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -2px;
}

.row__icon {
  flex: none;
  color: var(--color-dim);
}

.row__name {
  min-width: 0;
  overflow: hidden;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  color: var(--color-fg);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.row--folder .row__name {
  font-weight: 600;
}

.row__meta {
  margin-left: auto;
  flex: none;
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
  font-size: var(--text-xs);
  color: var(--color-dim);
}

.row__go {
  flex: none;
  color: var(--color-dim);
  opacity: 0;
}

.row:hover .row__go,
.row:focus-visible .row__go {
  opacity: 1;
}

/* A sketch of rows while the place is read */
.list__ghost {
  height: 37px;
  background: var(--color-pane);
}

.figure--ghost,
.list__ghost {
  background-image: linear-gradient(
    90deg,
    transparent 0,
    color-mix(in srgb, var(--color-fg) 6%, transparent) 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: ghost 1.4s ease-in-out infinite;
}

@keyframes ghost {
  from {
    background-position: 100% 0;
  }
  to {
    background-position: -100% 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .figure--ghost,
  .list__ghost {
    animation: none;
  }
}

.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 28px 16px;
  text-align: center;
  background: var(--color-pane);
  border: 1px dashed var(--color-divider);
  border-radius: var(--radius-sm);
}

.empty__icon {
  color: var(--color-dim);
}

.empty__title {
  margin: 4px 0 0;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-fg);
}

.empty__text {
  margin: 0;
  max-width: 44ch;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
}

/* ------------------------------------------------------------------ store */

.store {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 8px 10px;
  padding: 12px 14px;
  background: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
}

.store__name {
  flex: 0 1 320px;
}

/* In a row, not a form column: no gap under the field. */
.store :deep(.field) {
  margin-bottom: 0;
}

.store__hint {
  flex: 1 0 100%;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
}

/* ------------------------------------------------------------------ cards */

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  background-color: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
}

.card__text {
  padding: 0 2px 2px;
}

.card__name {
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-fg);
}

.card__facts {
  margin: 2px 0 0;
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
  font-size: var(--text-xs);
  color: var(--color-dim);
}

.card__kinds {
  margin: 4px 0 0;
  overflow: hidden;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-dim);
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ---------------------------------------------------------------- failure */

.failure {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 0;
  padding: 10px 12px;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-err);
  background-color: color-mix(in srgb, var(--color-err) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-err) 35%, transparent);
  border-radius: var(--radius-sm);
}

/* ---------------------------------------------------------------- nothing */

.nothing {
  max-width: 440px;
  margin: 40px auto;
}

.nothing__title {
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-fg);
}

.nothing__text {
  margin: 6px 0 12px;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
}

.nothing__points {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nothing__points li {
  padding-left: 14px;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
  border-left: 2px solid var(--color-divider);
}
</style>
