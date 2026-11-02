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
 * The board that is open.
 *
 * The state the shell had no route for: a board is open, and no page of
 * it is being looked at. The launcher and the page both existed; what
 * sat between them was reconstructed in three places from
 * `workspace.board`, because no address said it.
 *
 * A board with no pages belongs here too - it is what a person explores
 * its connections from - which is why nothing on this screen asks
 * whether there are pages before deciding that a board is open.
 */
import { computed, inject, nextTick, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  identifier as WORKSPACE,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import {
  type PageRegistryI,
  identifier as PageIdentifier,
} from 'org.eclipse.daanse.board.app.lib.api.page'
import { useEList, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { DButton } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import BoardFloorplan from '@/components/boards/BoardFloorplan.vue'
import { useLastOpenedState } from '@/composables/useLastOpenedState'
import { useWorkspaceFile, useWorkspaceOrigin } from '@/composables/useWorkspaceFile'
import { useStorageDialog } from '@/composables/useStorageDialog'
import { boardTarget, BOARD_OVERVIEW } from '@/composables/boardTarget'
import { useBoardUsage } from '@/composables/useBoardUsage'

const route = useRoute()
const router = useRouter()
const { t } = useTranslation('shell')

const workspace = inject<Workspace>(WORKSPACE)!
const pageRepo = inject<PageRegistryI>(PageIdentifier)
const { load, saveInPlace } = useWorkspaceFile()
const { usageOf } = useBoardUsage()
const origin = useWorkspaceOrigin()
const { show: showStorage } = useStorageDialog()

/*
 * Watched on the workspace, not on the board.
 *
 * A board arrives here by being loaded, which replaces workspace.board -
 * and an adapter attached to the board that was there at setup is
 * attached to nothing when there was none. The list is watched on the
 * workspace with a deep adapter, so a board appearing is a change it
 * reports; reading it is what makes everything below re-run.
 */
const pages = useEList(workspace, (w) => w.board?.pages)
const board = computed(() => {
  void pages.value
  return workspace.board
})
const connections = useEList(workspace, (w) => w.connections)
const datasources = useEList(workspace, (w) => w.datasources)

/*
 * The address names a board; this screen shows the one that is open.
 *
 * A reload arrives here with nothing loaded, because the workspace lives
 * in memory. The state this browser opened last is kept beside it, so a
 * reload of the same board finds it again. A link followed on another
 * machine does not - nothing in the id says where the state is stored -
 * and lands on the launcher, which is where one opens something.
 */
const { recall } = useLastOpenedState()

function settle() {
  const asked = route.params.boardid as string | undefined
  const open = board.value?.id as string | undefined
  if (open && (!asked || asked === open)) return

  const last = recall()
  if (asked && last?.boardId === asked) {
    try {
      load(last.data, last.name)
      return
    } catch {
      /* Stored by an older shape, or no longer readable. */
    }
  }
  router.replace('/')
}

watch(() => route.params.boardid, settle, { immediate: true })

const variables = useEList(workspace, (w) => w.variables)
const eventMappings = useEList(workspace, (w) => w.eventMappings)

/*
 * What the board holds, as figures.
 *
 * Counted off what the workspace holds rather than off what lies on a
 * page: a board whose purpose is its connections has none of the latter
 * and plenty of the former.
 */
/* Named through a key, so the collector is told they are in use.
  i18n-keys: shell:Board.figure.pages,
  i18n-keys: shell:Board.figure.connections,
  i18n-keys: shell:Board.figure.datasources,
  i18n-keys: shell:Board.figure.variables,
  i18n-keys: shell:Board.figure.events */
const totals = computed(() => [
  { key: 'pages', value: pages.value.length },
  { key: 'connections', value: connections.value.length },
  { key: 'datasources', value: datasources.value.length },
  { key: 'variables', value: variables.value.length },
  { key: 'events', value: eventMappings.value.length },
])

/** Named, not only counted - a list of two is worth reading. */
const held = computed(() => [
  {
    key: 'connections',
    kind: 'Connection' as const,
    items: connections.value.map((each: any) => ({
      uid: each.uid as string,
      name: (each.name as string) || (each.uid as string),
      type: each.type as string,
    })),
  },
  {
    key: 'datasources',
    kind: 'DataSource' as const,
    items: datasources.value.map((each: any) => ({
      uid: each.uid as string,
      name: (each.name as string) || (each.uid as string),
      type: each.type as string,
    })),
  },
])

/* A name one can follow. The data screen takes the selection from the
  address, so pointing at one connection is a link like any other. */
function show(kind: 'Connection' | 'DataSource', uid: string) {
  router.push({ path: '/datasources', query: { select: uid, kind } })
}

/**
 * Where a figure leads: the area it counts.
 *
 * Asked of the router rather than assumed - events are contributed by a
 * module, so that area exists only where the module is loaded, and a
 * figure with nowhere to go stays a figure rather than a dead button.
 *
 * The guard is also what hid a plain mistake: variables pointed at
 * `/variables`, a path registered nowhere - the screen is
 * `/configuration` - so the tile silently stayed a figure forever.
 */
const figureTargets: Record<string, string> = {
  pages: '/pages',
  connections: '/datasources',
  datasources: '/datasources',
  variables: '/configuration',
  events: '/events',
}

function targetFor(key: string): string | undefined {
  const path = figureTargets[key]
  if (!path) return undefined
  return router.resolve(path).matched.length ? path : undefined
}

function openPage(id: string) {
  router.push(`/page/${id}`)
}

/**
 * Where "open" goes.
 *
 * The page one was last on, else the one the board names, else its
 * first - the same rule the rail's board entry used to apply, which is
 * now the only place that needs it. A board with no pages has nowhere to
 * open, and the button is not offered at all.
 */
const entryPath = computed(() => {
  const target = boardTarget({
    pageIds: pages.value.map((page: any) => page.id as string),
    defaultPageId: pageRepo?.defaultPageId,
    lastOpened: (id) => usageOf(id)?.lastOpened,
  })
  return target === BOARD_OVERVIEW ? undefined : target
})

/* ------------------------------------------------------------ the name */

/**
 * The heading is the name, and editing it is editing the board.
 *
 * A board made in the app is called nothing at all and shows a label
 * standing in for a name; this is the one screen that is about the
 * board itself, so it is where the name is given.
 */
const renaming = ref(false)
const draft = ref('')
const nameField = ref<HTMLInputElement | undefined>()

function startRenaming() {
  draft.value = (board.value?.name as string) ?? ''
  renaming.value = true
  nextTick(() => {
    nameField.value?.focus()
    nameField.value?.select()
  })
}

/* An empty name is no name: the board keeps the one it had. */
function commitName() {
  if (!renaming.value) return
  renaming.value = false
  const named = draft.value.trim()
  if (!board.value || !named || named === board.value.name) return
  board.value.name = named
}

function cancelRenaming() {
  renaming.value = false
}

/* --------------------------------------------------------- keeping it */

const storing = ref(false)
const stored = ref(false)
const storeFailed = ref('')

/**
 * Keeping the board.
 *
 * Where it came from, if it came from anywhere. A board that was never
 * stored has no entry to write over and no name to write it under, so
 * storage opens over the board and asks for both - over it, so closing
 * it leaves the board where it was.
 */
async function store() {
  if (storing.value) return
  storing.value = true
  stored.value = false
  storeFailed.value = ''
  try {
    if (await saveInPlace()) {
      stored.value = true
      /* Long enough to be read, short enough not to linger. */
      setTimeout(() => (stored.value = false), 2500)
      return
    }
    showStorage()
  } catch (error: any) {
    storeFailed.value = String(error?.message ?? error)
  } finally {
    storing.value = false
  }
}
</script>

<template>
  <div v-if="board" class="board">
    <!--
      The board, then what it holds, then the way on. A board whose
      purpose is its connections has no pages to show, so what it holds
      is the substance of this screen rather than a footnote under it.
    -->
    <header class="head">
      <div class="head__what">
        <input
          v-if="renaming"
          ref="nameField"
          v-model="draft"
          class="head__name head__name--editing"
          type="text"
          :aria-label="t('Board.rename')"
          @keydown.enter="commitName"
          @keydown.esc="cancelRenaming"
          @blur="commitName"
        />
        <button
          v-else
          type="button"
          class="head__name head__name--button"
          :title="t('Board.rename')"
          @click="startRenaming"
        >
          {{ board.name || t('Boards.open.fallbackName') }}
        </button>
        <p v-if="board.description" class="head__desc">{{ board.description }}</p>
      </div>
      <div class="head__actions">
        <span v-if="storeFailed" class="head__failed" role="alert">{{ storeFailed }}</span>
        <span v-else-if="stored" class="head__kept" role="status">{{ t('Board.kept') }}</span>
        <DButton
          size="sm"
          :disabled="storing"
          :title="origin ? t('Board.keepIn', { name: origin.name }) : t('Board.keepSomewhere')"
          @click="store"
        >
          {{ t('common:Action.save') }}
        </DButton>
        <DButton v-if="entryPath" intent="primary" size="sm" @click="router.push(entryPath)">
          {{ t('Boards.open.action') }}
        </DButton>
      </div>
    </header>

    <!-- Figures speak mono, as everything countable in this interface does. -->
    <ul class="figures">
      <li v-for="total in totals" :key="total.key">
        <button
          v-if="targetFor(total.key)"
          type="button"
          class="figure figure--link"
          @click="router.push(targetFor(total.key)!)"
        >
          <span class="figure__value">{{ total.value }}</span>
          <span class="figure__label">{{ t(`Board.figure.${total.key}`) }}</span>
        </button>
        <div v-else class="figure">
          <span class="figure__value">{{ total.value }}</span>
          <span class="figure__label">{{ t(`Board.figure.${total.key}`) }}</span>
        </div>
      </li>
    </ul>

    <section v-if="pages.length" class="pages">
      <h2 class="section__heading">{{ t('Header.crumb.pages') }}</h2>
      <ul class="pages__list">
        <li v-for="page in pages" :key="page.id as string">
          <button type="button" class="page" @click="openPage(page.id as string)">
            <BoardFloorplan
              class="page__plan"
              :items="page.layout.toArray().map((item: any) => ({
                id: item.widgetId ?? item.id,
                x: item.x ?? 0,
                y: item.y ?? 0,
                width: item.width ?? 1,
                height: item.height ?? 1,
              }))"
            />
            <span class="page__name">{{ page.name || page.id }}</span>
          </button>
        </li>
      </ul>
    </section>

    <!-- What it reads through, named. Counting them says a board exists;
      naming them says what it is for. -->
    <section v-for="group in held" :key="group.key" class="holds">
      <h2 class="section__heading">
        {{ t(`Board.figure.${group.key}`) }}
        <span class="section__count">{{ group.items.length }}</span>
      </h2>
      <p v-if="!group.items.length" class="holds__none">{{ t('Board.holds.none') }}</p>
      <ul v-else class="holds__list">
        <li v-for="item in group.items" :key="item.uid">
          <button type="button" class="holds__item" @click="show(group.kind, item.uid)">
            <span class="holds__name">{{ item.name }}</span>
            <span class="holds__type">{{ item.type }}</span>
          </button>
        </li>
      </ul>
    </section>

    <p v-if="!pages.length" class="board__note">{{ t('Board.noPages.text') }}</p>
  </div>
</template>

<style scoped>
.board {
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  min-height: 0;
  padding: 20px 24px;
  overflow: auto;
}

/* A column to read down, not a sheet pulled to the window's width. */
.board > * {
  width: 100%;
  max-width: 880px;
}

/* ------------------------------------------------------------- the head */

.head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-divider);
}

/* The name takes the room; the actions keep theirs. */
.head__what {
  min-width: 0;
  flex: 1 1 auto;
  max-width: 40ch;
}

.head__name {
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xl);
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-fg);
}

/*
 * The name reads as a heading and is one; that it can be edited shows
 * on approach rather than as a control sitting beside it the whole time.
 */
.head__name--button {
  display: block;
  padding: 2px 6px;
  margin-left: -6px;
  border: 1px solid transparent;
  border-radius: var(--radius-sm, 3px);
  background: transparent;
  text-align: left;
  cursor: text;
}
.head__name--button:hover {
  border-color: var(--color-divider);
}
.head__name--button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}

/* The same box, so committing the name does not make the heading jump. */
.head__name--editing {
  display: block;
  width: 100%;
  min-width: 14ch;
  padding: 2px 6px;
  margin-left: -6px;
  border: 1px solid var(--color-accent);
  border-radius: var(--radius-sm, 3px);
  background: var(--color-bg);
}
.head__name--editing:focus {
  outline: none;
}

.head__kept,
.head__failed {
  align-self: center;
  font-size: var(--text-sm);
}
.head__kept {
  color: var(--color-ok);
}
.head__failed {
  color: var(--color-err);
}

.head__desc {
  margin: 4px 0 0;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  color: var(--color-dim);
}

.head__actions {
  display: flex;
  flex: none;
  align-items: flex-start;
  gap: 6px;
}

/* ---------------------------------------------------------- the figures */

/* Tiles sized by their content: a single digit in a quarter of the window
  reads as a mistake, not as a figure. */
.figures {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.figures > li {
  min-width: 112px;
}

.figure {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  padding: 12px 14px;
  text-align: left;
  background-color: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
}

.figure--link {
  cursor: pointer;
}

.figure--link:hover {
  border-color: var(--color-outline);
}

.figure--link:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
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

/* ------------------------------------------------- pages and what it reads */

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
  color: var(--color-dim);
}

.pages__list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.page {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  background-color: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  cursor: pointer;
}

.page:hover {
  border-color: var(--color-outline);
}

.page__plan {
  width: 150px;
  height: 96px;
}

.page__name {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg);
}

.holds__list {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.holds__item {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  padding: 7px 12px;
  text-align: left;
  background: var(--color-pane);
  border: 0;
  cursor: pointer;
}

.holds__item:hover {
  background-color: var(--color-raised);
}

.holds__item:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -2px;
}

.holds__list > li + li .holds__item {
  border-top: 1px solid var(--color-divider);
}

.holds__name {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  color: var(--color-fg);
}

.holds__type {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-dim);
}

.holds__none,
.board__note {
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
}
</style>
