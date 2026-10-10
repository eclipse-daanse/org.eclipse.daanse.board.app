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
 * One tree for both: connections, and under each the data sources that
 * read through it.
 *
 * They were two flat lists stacked on top of each other, which said
 * nothing about the one thing that matters when you are looking for a
 * source - which connection it comes through. A source names its
 * connection in its own configuration, so the tree is that relation drawn
 * out. Sources whose connection is gone or was never set are gathered at
 * the end rather than dropped, because a source that points nowhere is
 * exactly the one someone came here to find.
 *
 * Each source carries what reads from it. A count beside the name is the
 * difference between changing a setting and changing five widgets on two
 * boards.
 */
import { computed, inject, ref } from 'vue'
import {
  type ConnectionRepository,
  identifier as CONNECTION_REPOSITORY,
} from 'org.eclipse.daanse.board.app.lib.api.connection'
import {
  type DatasourceRepository,
  identifier as DATASOURCE_REPOSITORY,
} from 'org.eclipse.daanse.board.app.lib.api.datasource'
import {
  identifier as WORKSPACE,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { useEList } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { DButton, DIcon, DInput, DModal } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useDatasourceUsage } from '@/composables/useDatasourceUsage'
import NewConnectionDialog from '../connections/NewConnectionDialog.vue'
import NewDatasourceDialog from './NewDatasourceDialog.vue'
import TreeMenu, { type MenuItem } from './TreeMenu.vue'

/** A source as the tree shows it. */
interface Row {
  uid: string
  name: string
  type: string
  usage: string
  icon: string
  tags: string[]
}

/** A connection with what hangs under it, or the bucket for the loose ones. */
interface Group {
  uid: string
  name: string
  type: string
  orphan: boolean
  sources: Row[]
  itself: boolean
  icon?: string
  tags?: string[]
}

export interface Selection {
  type: 'Connection' | 'DataSource'
  itemId: string
}

const selected = defineModel<Selection | undefined>()

const connectionRepository = inject<ConnectionRepository>(CONNECTION_REPOSITORY)!
/*
 * Straight from the model: both lists are what the workspace holds, and the
 * adapter behind useEList re-renders this tree when something is added,
 * renamed or removed - no second copy to keep in step.
 */
const workspace = inject<Workspace>(WORKSPACE)!
const connections = useEList(workspace, (w) => w.connections)
const datasourceRepository = inject<DatasourceRepository>(DATASOURCE_REPOSITORY)!
const dataSources = useEList(workspace, (w) => w.datasources)
const { usageByDatasource, usageLabel } = useDatasourceUsage()

const emit = defineEmits<{
  findEndpoints: []
  /* Which half of the selection to show - the menu asks for one by name,
     where a plain click leaves the page to its own default. */
  view: [view: 'settings' | 'preview']
}>()

const search = ref('')
const collapsed = ref<Set<string>>(new Set())

/* Not a connection uid - a heading that groups what reads from sources
   rather than from an endpoint. */
const COMPOSED = '\u0000composed'

/** Whether a type composes other sources instead of reading an endpoint. */
function isComposer(type: string | undefined): boolean {
  return !!type && datasourceRepository.getDatasourceIdentifiers(type)?.kind === 'composer'
}

/**
 * What to draw beside a row.
 *
 * What the thing carries wins; failing that the type's own symbol, so a
 * workspace where nobody picked an icon still reads as more than rows of
 * text. The last fallback is for a type that is gone - a board from a
 * deployment that had a plugin this one does not.
 */
function iconFor(held: any, kind: 'connection' | 'source'): string {
  if (held.icon) return held.icon
  const type = held.type
  const registered =
    kind === 'connection'
      ? connectionRepository.getConnectionIdentifiers(type)?.icon
      : datasourceRepository.getDatasourceIdentifiers(type)?.icon
  return registered ?? (kind === 'connection' ? 'link' : 'database')
}

/* Two tags fit beside a name without pushing it out; the rest are counted.
   The name is what you read a row by. */
const TAGS_SHOWN = 2

/** EList or plain array, depending on where the object came from. */
function tagsOf(held: any): string[] {
  const tags = held.tags
  if (!tags) return []
  return Array.isArray(tags) ? tags : typeof tags.toArray === 'function' ? tags.toArray() : [...tags]
}

/** What the tree shows, with the sources hung under their connection. */
const groups = computed(() => {
  const usage = usageByDatasource()
  const term = search.value.trim().toLowerCase()

  const matches = (...words: (string | undefined)[]) =>
    !term || words.some((w) => (w ?? '').toLowerCase().includes(term))

  const sourcesOf = (connectionId: string | undefined): Row[] =>
    dataSources.value
      .filter((source) => source.connection?.uid === connectionId)
      .filter((source: any) => matches(source.name, source.type, source.uid, ...tagsOf(source)))
      .map((source: any) => ({
        uid: source.uid,
        name: source.name,
        type: source.type,
        usage: usageLabel(usage[source.uid] ?? { boards: 0, widgets: 0 }),
        icon: iconFor(source, 'source'),
        tags: tagsOf(source),
      }))

  const known: Group[] = connections.value.map((connection) => ({
    /* A connection just created has no type yet, and the row says so by
       showing none - the model has every feature optional for that reason. */
    uid: connection.uid ?? '',
    name: connection.name ?? '',
    type: connection.type ?? '',
    orphan: false,
    sources: sourcesOf(connection.uid),
    /* A connection stays visible while its own name matches, even with no
       source under it - otherwise searching would hide where to add one. */
    itself: matches(connection.name, connection.type, connection.uid, ...tagsOf(connection)),
    icon: iconFor(connection, 'connection'),
    tags: tagsOf(connection),
  }))

  const attached = new Set(connections.value.map((c) => c.uid))
  const row = (source: any): Row => ({
    uid: source.uid,
    name: source.name,
    type: source.type,
    usage: usageLabel(usage[source.uid] ?? { boards: 0, widgets: 0 }),
    icon: iconFor(source, 'source'),
    tags: tagsOf(source),
  })

  /* No connection, or one that is gone: the reference is the tell. */
  const unattached = dataSources.value
    .filter((source) => !source.connection || !attached.has(source.connection.uid))
    .filter((source: any) => matches(source.name, source.type, source.uid, ...tagsOf(source)))

  /* A composer reads from other sources, so having no connection is its
     normal state - not the same thing as a source that lost one. Listing
     both under "Ohne Verbindung" made every composer look broken. */
  const composed: Row[] = unattached.filter((source: any) => isComposer(source.type)).map(row)
  const loose: Row[] = unattached.filter((source: any) => !isComposer(source.type)).map(row)

  const shown = known.filter((group) => group.itself || group.sources.length)
  if (composed.length) {
    shown.push({
      uid: COMPOSED,
      name: 'Zusammengesetzt',
      type: '',
      orphan: true,
      sources: composed,
      itself: true,
      icon: 'layers',
      tags: [],
    })
  }
  if (loose.length) {
    shown.push({
      uid: '',
      name: 'Ohne Verbindung',
      type: '',
      orphan: true,
      sources: loose,
      itself: true,
      icon: 'link_off',
      tags: [],
    })
  }
  return shown
})

const isOpen = (uid: string) => !collapsed.value.has(uid)

function toggle(uid: string) {
  const next = new Set(collapsed.value)
  next.has(uid) ? next.delete(uid) : next.add(uid)
  collapsed.value = next
}

const isSelected = (type: Selection['type'], itemId: string) =>
  selected.value?.type === type && selected.value?.itemId === itemId

function select(type: Selection['type'], itemId: string) {
  selected.value = { type, itemId }
}

/*
 * Creating goes through a dialog now.
 *
 * It used to add an empty, typeless object and select it, which left a row
 * in the tree that stood for nothing until somebody finished it - and one
 * per accidental click. The dialog asks for the type first, because the
 * type's model is what says which fields exist and what they are for.
 */
const creatingConnection = ref(false)
const creatingDataSource = ref(false)
/* Set when the dialog was opened from a connection's own menu. */
const creatingFor = ref<string | undefined>(undefined)

/* A new thing is selected straight away: it is what you came to fill in. */
function onConnectionCreated(uid: string) {
  select('Connection', uid)
}

function onDataSourceCreated(uid: string) {
  select('DataSource', uid)
}

/*
 * The right-click menu.
 *
 * What it offers depends on what was clicked, so the target is held
 * alongside the position: a connection can take a new source, a source can
 * be previewed, and the empty space below the tree can only create.
 */
type MenuTarget =
  | { what: 'connection'; uid: string; name: string }
  | { what: 'source'; uid: string; name: string }
  | { what: 'nothing' }

const menuAt = ref<{ x: number; y: number } | undefined>(undefined)
const menuFor = ref<MenuTarget>({ what: 'nothing' })

const menuItems = computed<MenuItem[]>(() => {
  const target = menuFor.value
  if (target.what === 'connection') {
    return [
      { id: 'edit', label: 'Bearbeiten', icon: 'edit' },
      { id: 'add-source', label: 'Datenquelle hier anlegen', icon: 'add' },
      { id: 'remove', label: 'Verbindung löschen', icon: 'delete', danger: true, separated: true },
    ]
  }
  if (target.what === 'source') {
    return [
      { id: 'edit', label: 'Bearbeiten', icon: 'edit' },
      { id: 'preview', label: 'Daten ansehen', icon: 'table' },
      { id: 'remove', label: 'Datenquelle löschen', icon: 'delete', danger: true, separated: true },
    ]
  }
  return [
    { id: 'new-connection', label: 'Verbindung anlegen', icon: 'add_link' },
    { id: 'new-source', label: 'Datenquelle anlegen', icon: 'add' },
  ]
})

function openMenu(event: MouseEvent, target: MenuTarget) {
  menuFor.value = target
  menuAt.value = { x: event.clientX, y: event.clientY }
}

function closeMenu() {
  menuAt.value = undefined
}

function onMenuChoice(id: string) {
  const target = menuFor.value
  closeMenu()
  if (id === 'new-connection') return void (creatingConnection.value = true)
  if (id === 'new-source') return void (creatingDataSource.value = true)
  if (target.what === 'connection') {
    if (id === 'edit') select('Connection', target.uid)
    /* The dialog picks the connection itself; selecting it first is what
       makes it the obvious one to choose. */
    if (id === 'add-source') {
      select('Connection', target.uid)
      creatingFor.value = target.uid
      creatingDataSource.value = true
    }
    if (id === 'remove') confirmRemove('Connection', target.uid)
    return
  }
  if (target.what === 'source') {
    if (id === 'edit' || id === 'preview') {
      select('DataSource', target.uid)
      emit('view', id === 'preview' ? 'preview' : 'settings')
    }
    if (id === 'remove') confirmRemove('DataSource', target.uid)
  }
}

const removing = ref<Selection | undefined>(undefined)

function confirmRemove(type: Selection['type'], itemId: string) {
  removing.value = { type, itemId }
}

function doRemove() {
  const target = removing.value
  if (!target) return
  if (target.type === 'Connection') connectionRepository.removeConnection(target.itemId)
  else datasourceRepository.removeDatasource(target.itemId)
  if (isSelected(target.type, target.itemId)) selected.value = undefined
  removing.value = undefined
}

const removingLabel = computed(() => {
  const target = removing.value
  if (!target) return ''
  const held =
    target.type === 'Connection'
      ? connections.value.find((c: any) => c.uid === target.itemId)
      : dataSources.value.find((d) => d.uid === target.itemId)
  return held?.name ?? target.itemId
})

/** What a source would take with it - shown before it is taken. */
const removingUsage = computed(() => {
  const target = removing.value
  if (!target || target.type !== 'DataSource') return ''
  return usageLabel(usageByDatasource()[target.itemId] ?? { boards: 0, widgets: 0 })
})
</script>

<template>
  <section class="tree">
    <header class="tree__head">
      <h2 class="tree__title">Verbindungen &amp; Daten</h2>
      <DButton intent="quiet" size="sm" title="Verbindung anlegen" @click="creatingConnection = true">
        <DIcon name="add_link" size="sm" />
      </DButton>
      <DButton intent="quiet" size="sm" title="Datenquelle anlegen" @click="creatingFor = undefined; creatingDataSource = true">
        <DIcon name="add" size="sm" />
      </DButton>
      <DButton intent="quiet" size="sm" title="Endpunkte suchen" @click="emit('findEndpoints')">
        <DIcon name="travel_explore" size="sm" />
      </DButton>
    </header>

    <div class="tree__search">
      <DInput v-model="search" type="search" placeholder="Suchen…" stacked />
    </div>

    <div class="tree__body" @contextmenu.prevent="openMenu($event, { what: 'nothing' })">
      <p v-if="!groups.length" class="tree__empty">
        <template v-if="search">Nichts gefunden.</template>
        <template v-else>Noch keine Verbindung. Lege eine an, um Daten zu lesen.</template>
      </p>

      <ul v-else class="tree__list">
        <li v-for="group in groups" :key="group.uid || 'loose'">
          <div
            :class="['row', 'row--connection', { 'row--on': isSelected('Connection', group.uid) }]"
            @contextmenu.prevent.stop="
              openMenu(
                $event,
                group.orphan
                  ? { what: 'nothing' }
                  : { what: 'connection', uid: group.uid, name: group.name },
              )
            "
          >
            <button
              type="button"
              class="row__twist"
              :title="isOpen(group.uid) ? 'Zuklappen' : 'Aufklappen'"
              @click="toggle(group.uid)"
            >
              <DIcon :name="isOpen(group.uid) ? 'expand_more' : 'chevron_right'" size="sm" />
            </button>

            <button
              type="button"
              class="row__body"
              :disabled="group.orphan"
              @click="!group.orphan && select('Connection', group.uid)"
            >
              <DIcon :name="group.icon ?? 'link'" size="sm" class="row__icon" />
              <span class="row__name">{{ group.name }}</span>
              <span v-if="group.type" class="row__what">{{ group.type }}</span>
              <span
                v-for="tag in (group.tags ?? []).slice(0, TAGS_SHOWN)"
                :key="tag"
                class="row__tag"
                >{{ tag }}</span
              >
              <span v-if="(group.tags?.length ?? 0) > TAGS_SHOWN" class="row__tag row__tag--more">
                +{{ (group.tags?.length ?? 0) - TAGS_SHOWN }}
              </span>
              <span class="row__what">{{ group.sources.length }}</span>
            </button>

            <DButton
              v-if="!group.orphan"
              intent="quiet"
              size="sm"
              title="Verbindung löschen"
              @click.stop="confirmRemove('Connection', group.uid)"
            >
              <DIcon name="delete" size="sm" />
            </DButton>
          </div>

          <ul v-if="isOpen(group.uid)" class="tree__sources">
            <li v-for="source in group.sources" :key="source.uid">
              <div
                :class="['row', 'row--source', { 'row--on': isSelected('DataSource', source.uid) }]"
                @contextmenu.prevent.stop="
                  openMenu($event, { what: 'source', uid: source.uid, name: source.name })
                "
              >
                <!-- Empty, but the same width as a connection's chevron: the
                     row below has to start where the row above starts. -->
                <span class="row__twist row__twist--none" aria-hidden="true" />
                <button type="button" class="row__body" @click="select('DataSource', source.uid)">
                  <DIcon :name="source.icon" size="sm" class="row__icon" />
                  <span class="row__name">{{ source.name }}</span>
                  <span class="row__what">{{ source.type }}</span>
                  <span
                    v-for="tag in source.tags.slice(0, TAGS_SHOWN)"
                    :key="tag"
                    class="row__tag"
                    >{{ tag }}</span
                  >
                  <span v-if="source.tags.length > TAGS_SHOWN" class="row__tag row__tag--more">
                    +{{ source.tags.length - TAGS_SHOWN }}
                  </span>
                  <span v-if="source.usage" class="row__usage">{{ source.usage }}</span>
                </button>
                <DButton
                  intent="quiet"
                  size="sm"
                  title="Datenquelle löschen"
                  @click.stop="confirmRemove('DataSource', source.uid)"
                >
                  <DIcon name="delete" size="sm" />
                </DButton>
              </div>
            </li>
            <li v-if="!group.sources.length && !group.orphan" class="tree__none">
              Keine Datenquelle an dieser Verbindung.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>

  <TreeMenu :at="menuAt" :items="menuItems" @choose="onMenuChoice" @close="closeMenu" />

  <NewConnectionDialog v-model="creatingConnection" @created="onConnectionCreated" />
  <NewDatasourceDialog
    v-model="creatingDataSource"
    :for-connection="creatingFor"
    @created="onDataSourceCreated"
  />

  <DModal :model-value="!!removing" size="sm" @update:model-value="removing = undefined" @cancel="removing = undefined">
    <template #header>
      <DIcon name="warning" size="lg" tone="color-err" />
      <h2 class="confirm__title">
        {{ removing?.type === 'Connection' ? 'Verbindung löschen' : 'Datenquelle löschen' }}
      </h2>
    </template>
    <p class="confirm__text">
      „{{ removingLabel }}“ wird entfernt. Das lässt sich nicht rückgängig machen.
    </p>
    <p v-if="removingUsage" class="confirm__text confirm__text--warn">
      Verwendet in {{ removingUsage }} — die lesen danach ins Leere.
    </p>
    <template #actions>
      <DButton intent="quiet" @click="removing = undefined">Abbrechen</DButton>
      <DButton intent="danger" @click="doRemove">Löschen</DButton>
    </template>
  </DModal>
</template>

<style scoped>
.tree {
  display: flex;
  flex-direction: column;
  min-height: 0;
  height: 100%;
  border-right: 1px solid var(--color-divider);
  background: var(--color-pane);
  overflow: hidden;
}

.tree__head {
  display: flex;
  align-items: center;
  gap: 2px;
  flex: none;
  /* The panel's gutter, the same one the rows and the search box use. */
  padding: 7px 8px 7px 10px;
  border-bottom: 1px solid var(--color-divider);
}

.tree__title {
  flex: 1 1 auto;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-dim);
}

.tree__search {
  flex: none;
  padding: 8px 10px;
  border-bottom: 1px solid var(--color-divider);
}

/* The tree scrolls; main.css paints the bar from the theme */
.tree__body {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  padding: 4px 0;
}

.tree__list,
.tree__sources {
  margin: 0;
  padding: 0;
  list-style: none;
}

.tree__sources {
  /* One step, the width of the chevron column: a source's icon lands under
     its connection's name, which is what makes the nesting readable. */
  padding-left: 22px;
}

.row {
  display: flex;
  align-items: center;
  gap: 2px;
  /* The hover and selection band still runs the full width; only what is
     inside it starts at the gutter. */
  padding-left: 10px;
  padding-right: 4px;
}

.row:hover {
  background: var(--color-raised);
}

/* The selected row keeps its mark while the pointer is somewhere else */
.row--on,
.row--on:hover {
  background: color-mix(in srgb, var(--color-accent) 14%, transparent);
}

.row__twist {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 26px;
  flex: none;
  border: none;
  background: transparent;
  color: var(--color-dim);
  cursor: pointer;
}

.row__twist--none {
  cursor: default;
}

.row__body {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex: 1 1 auto;
  min-width: 0;
  padding: 3px 2px;
  border: none;
  background: transparent;
  font: inherit;
  text-align: left;
  color: var(--color-fg);
  cursor: pointer;
  /* A row with tags is two lines rather than a name squeezed out of its
     own row: the name is what you read it by. */
  flex-wrap: wrap;
}

.row__body:disabled {
  cursor: default;
}

.row__body:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -2px;
}

.row__name {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* Shrinks last: the tags beside it give way first. */
  min-width: 10ch;
}

.row--connection .row__name {
  font-weight: 600;
}

.row__icon {
  flex: none;
  color: var(--color-dim);
}

/* A tag is a word, not a chip: a row holding several of them turns into a
   bar of pills otherwise, and the name stops being the thing you read. */
.row__tag {
  flex: none;
  max-width: 84px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 6px;
  font-size: 0.72rem;
  line-height: 1.5;
  color: var(--color-accent);
  background-color: color-mix(in srgb, var(--color-accent) 12%, transparent);
  border-radius: 999px;
  white-space: nowrap;
}

.row__tag--more {
  color: var(--color-dim);
  background-color: var(--color-sunken);
}

.row__what {
  flex: none;
  font-size: var(--text-xs);
  color: var(--color-dim);
}

/* What reads from this source, pushed to the far end of the row */
.row__usage {
  flex: none;
  margin-left: auto;
  padding-left: 8px;
  font-size: var(--text-xs);
  color: var(--color-dim);
  white-space: nowrap;
}

.tree__empty {
  padding: 6px 10px;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-dim);
}

/*
 * Lines up with the names it stands in for, not with the gutter: it says
 * what is missing from this connection, so it belongs where those would be.
 */
.tree__none {
  /* 36px inside a list that is already indented 22: the text lands on the
     icon edge of the sources it stands in for. */
  padding: 6px 10px 6px 36px;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-dim);
}

.confirm__title {
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-fg);
}

.confirm__text {
  margin: 0 0 6px;
  color: var(--color-dim);
  line-height: 1.5;
}

.confirm__text--warn {
  color: var(--color-err);
}
</style>
