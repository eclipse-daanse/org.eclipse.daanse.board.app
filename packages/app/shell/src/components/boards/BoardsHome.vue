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
 * The launcher - what the app opens with.
 *
 * A workspace holds one board, and the board holds the pages. Those are two
 * different things to look at, so they are two tabs: the board is what you
 * open and name, a page is what carries a layout and widgets. They used to
 * be one list, which is why making a page inside a board made it show up
 * here as a board of its own.
 */
import { computed, inject, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { v4 as uuidv4 } from 'uuid'
import { DButton, DIcon } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import BoardFloorplan from './BoardFloorplan.vue'
import WorkspaceStorage from './WorkspaceStorage.vue'
import { summarizePage, type PageSummary } from '@/composables/pageSummary'
import { useBoardUsage } from '@/composables/useBoardUsage'
import {
  identifier as WORKSPACE,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { useEList } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import type { PageRegistryI, PageI } from 'org.eclipse.daanse.board.app.lib.api.page'
import type { LayoutRepositoryI } from 'org.eclipse.daanse.board.app.lib.api.layout.page'

const props = defineProps<{
  pageRepo?: PageRegistryI
  layoutRepo?: LayoutRepositoryI
}>()

const router = useRouter()
const route = useRoute()

/* Used for the order the pages are counted in, nothing more. */
const { byUsage } = useBoardUsage()

const workspace = inject<Workspace>(WORKSPACE)!

/*
 * Reading the pages is what makes everything here re-run: the list is
 * watched on the workspace with a deep adapter, so it also reports a board
 * being renamed or replaced.
 */
const modelledPages = useEList(workspace, (w) => w.board?.pages)
const board = computed(() => {
  void modelledPages.value
  return workspace.board
})

/*
 * Two views of the same question - which board to open. Pages are not one
 * of them: they live inside a board, so they are an area of the workspace
 * once it is open, not a tab out here.
 */
type View = 'recent' | 'storage'
const view = ref<View>(route.query.view === 'storage' ? 'storage' : 'recent')

/*
 * Ordered by how much each page is actually used, so the ones worked with
 * daily stay at the front and the rest keep their place behind them - a
 * page is never hidden, only ranked.
 */
const pages = computed<PageSummary[]>(() => {
  void modelledPages.value
  const repo = props.pageRepo
  if (!repo) return []

  return repo
    .getAllPageIds()
    .slice()
    .sort(byUsage)
    .map((id: string) =>
      summarizePage(
        id,
        repo.getPage(id) as PageI | undefined,
        repo.getPage(id)?.layout?.toArray() ?? [],
        repo.getPage(id)?.widgets?.toArray() ?? [],
      ),
    )
})


/** What the board itself is worth saying: its pages, added up. */
const boardTotals = computed(() => ({
  pages: pages.value.length,
  widgets: pages.value.reduce((sum, page) => sum + page.widgetCount, 0),
  sources: new Set(pages.value.flatMap((page) => page.kinds)).size,
}))

/** Where opening the board lands: its default page, else the first one. */
const entryPageId = computed(
  () => props.pageRepo?.getDefaultPage()?.id ?? pages.value[0]?.id,
)

function openPage(id: string) {
  router.push(`/page/${id}`)
}


function openBoard() {
  const id = entryPageId.value
  if (id) openPage(id as string)
}

/**
 * A page, in the board that holds them.
 *
 * The registry makes the board if there is none yet - which is what
 * creating the first page of a fresh workspace does.
 */
function createPage() {
  const repo = props.pageRepo
  if (!repo || !props.layoutRepo) return

  const id = uuidv4()
  repo.registerPage({
    id,
    name: 'Neue Seite',
    description: '',
    icon: '',
    visibleInNavigation: true,
    /* The id; the layout itself is resolved from the repository on render. */
    layoutId: 'org.eclipse.daanse.board.app.ui.vue.layouts.base',
  })
  router.push(`/page/${id}/edit`)
}

function openStorage() {
  view.value = 'storage'
}

/**
 * Loading a state opens the board it holds.
 *
 * Landing back on the launcher was the old behaviour and the wrong one:
 * you came here to open something, and after opening it the app still
 * showed the list of things to open.
 */
function openRestored(ids: string[]) {
  const id = props.pageRepo?.getDefaultPage()?.id ?? ids[0]
  if (id) router.push(`/page/${id}`)
  else view.value = 'recent'
}
</script>

<template>
  <div class="boards">
   <div class="boards__panel">
    <header class="boards__bar">
      <div class="boards__views" role="tablist" aria-label="Ansicht">
        <button
          type="button"
          role="tab"
          :aria-selected="view === 'recent'"
          :class="['boards__view', { on: view === 'recent' }]"
          @click="view = 'recent'"
        >
          Oft benutzt
        </button>
        <button
          type="button"
          role="tab"
          :aria-selected="view === 'storage'"
          :class="['boards__view', { on: view === 'storage' }]"
          @click="view = 'storage'"
        >
          Speicher
        </button>
      </div>

    </header>

    <div class="boards__body">
    <!-- Nothing open and nothing built: say what a board is -->
    <div v-if="view === 'recent' && pages.length === 0" class="boards__empty">
      <BoardFloorplan
        class="boards__empty-plan"
        :items="[
          { id: 'a', x: 0, y: 0, width: 2, height: 1 },
          { id: 'b', x: 2, y: 0, width: 1, height: 2 },
          { id: 'c', x: 0, y: 1, width: 1, height: 1 },
          { id: 'd', x: 1, y: 1, width: 1, height: 1 },
        ]"
        :type-by-id="{ a: 'chart', b: 'map', c: 'table', d: 'text' }"
      />
      <h2 class="boards__empty-title">Noch kein Board</h2>
      <p class="boards__empty-text">
        Ein Board besteht aus Seiten, auf denen Widgets über deinen Datenquellen liegen.
        Lege eines an oder öffne einen gespeicherten Arbeitsstand.
      </p>
      <div class="boards__empty-actions">
        <DButton intent="primary" size="sm" @click="createPage">Board anlegen</DButton>
        <DButton size="sm" @click="openStorage">Aus Speicher öffnen</DButton>
      </div>
    </div>

    <!-- The board this workspace holds: one, so one card rather than a grid -->
    <div v-else-if="view === 'recent'" class="single">
      <h2 class="single__heading">Geöffnet</h2>
      <article
        class="single__card"
        tabindex="0"
        role="button"
        :aria-label="`Board ${board?.name ?? ''} öffnen`"
        @click="openBoard"
        @keydown.enter="openBoard"
        @keydown.space.prevent="openBoard"
      >
        <span class="single__icon" aria-hidden="true">
          <DIcon :name="board?.icon || 'dashboard'" size="lg" />
        </span>
        <div class="single__text">
          <h3 class="single__name">{{ board?.name || 'Board' }}</h3>
          <p v-if="board?.description" class="single__desc">{{ board.description }}</p>
          <p class="single__meta">
            {{ boardTotals.pages }} {{ boardTotals.pages === 1 ? 'Seite' : 'Seiten' }}
            · {{ boardTotals.widgets }}
            {{ boardTotals.widgets === 1 ? 'Widget' : 'Widgets' }}
          </p>
        </div>
        <div class="single__actions">
          <DButton intent="primary" size="sm" @click.stop="openBoard">Öffnen</DButton>
        </div>
      </article>

      <p class="single__note">
        Ein Arbeitsstand hält genau ein Board. Ein anderes bekommst du, indem du im
        Speicher einen anderen Stand öffnest; die Seiten dieses Boards liegen im
        Bereich „Seiten“.
      </p>
    </div>

    <WorkspaceStorage v-else @restored="openRestored" />
    </div>
   </div>
  </div>
</template>

<style scoped>
.single {
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* The same frame the grid view has, so switching tabs does not move the
     content it shows. */
  padding: 16px;
  max-width: 640px;
}

.single__heading {
  margin: 0;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--color-dim);
  text-transform: uppercase;
}

.single__card {
  cursor: pointer;
}

.single__card:hover,
.single__card:focus-visible {
  border-color: var(--color-accent);
}

.single__card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  background-color: var(--color-pane);
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-md);
}

.single__icon {
  display: grid;
  flex: none;
  place-items: center;
  width: 48px;
  height: 48px;
  color: var(--color-accent);
  background-color: var(--color-sunken);
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm);
}

.single__text {
  flex: 1;
  min-width: 0;
}

.single__name {
  margin: 0;
  font-size: 1.05rem;
  color: var(--color-fg);
}

.single__desc {
  margin: 3px 0 0;
  font-size: 0.85rem;
  color: var(--color-dim);
}

.single__meta {
  margin: 4px 0 0;
  font-size: 0.82rem;
  color: var(--color-dim);
}

.single__actions {
  display: flex;
  flex: none;
  gap: 6px;
}

.single__note {
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.5;
  color: var(--color-dim);
}

.boards {
  /* The page container is a column flexbox; without this the launcher
     shrinks to its content width instead of filling the surface. */
  display: flex;
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
  padding: 14px 16px 16px;
  background-color: var(--color-bg);
}

/*
 * One panel holds both views. The switch rides on its top edge the way the
 * other detail screens carry their tabs, so it reads as part of the surface
 * instead of floating above it.
 */
.boards__panel {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  background-color: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.boards__body {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
  background-color: var(--color-bg);
  overflow: auto;
}

/* The panel's top edge: the switch on the left, the tools for the current
   view on the right. */
.boards__bar {
  display: flex;
  align-items: center;
  gap: 12px;
  height: var(--spacing-panelHeader);
  flex: none;
  padding: 0 8px;
  border-bottom: 1px solid var(--color-divider);
}

.boards__views {
  display: flex;
  align-items: center;
  gap: 2px;
  height: 100%;
}

.boards__view {
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  height: 100%;
  padding: 0 12px;
  font-size: var(--text-sm);
  font-family: inherit;
  font-weight: 500;
  color: var(--color-dim);
  background: none;
  border: 0;
  cursor: pointer;
}

.boards__view:hover {
  color: var(--color-fg);
}

.boards__view.on {
  color: var(--color-fg);
  font-weight: 600;
}

/* Sits on the panel edge, over the divider */
.boards__view.on::after {
  content: '';
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: -1px;
  height: 2px;
  background-color: var(--color-accent);
  border-radius: 2px;
}

.boards__view:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}

.boards__title {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-fg);
}

.boards__count {
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--color-dim);
  padding: 1px 6px;
  border: 1px solid var(--color-divider);
  border-radius: 999px;
}

.boards__tools {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}

.boards__search {
  height: 22px;
  min-width: 180px;
  padding: 0 8px;
  font-size: var(--text-sm);
  color: var(--color-fg);
  background-color: var(--color-raised);
  border: 1px solid var(--color-divider);
  border-radius: 4px;
}

.boards__search:focus-visible,
.board:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}

.boards__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(232px, 1fr));
  align-content: start;
  gap: 16px;
  padding: 16px;
}

.board {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
  text-align: left;
  background-color: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-e1);
  cursor: pointer;
  transition: border-color 120ms ease, box-shadow 120ms ease, transform 120ms ease;
}

.board:hover {
  border-color: var(--color-outline);
  box-shadow: var(--shadow-e2);
  transform: translateY(-1px);
}

.board__body {
  padding: 12px;
}

.board__name {
  margin: 0;
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-fg);
}

.board__meta {
  margin: 2px 0 0;
  font-size: var(--text-xs);
  color: var(--color-dim);
}

.board__kinds {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin: 8px 0 0;
  padding: 0;
  list-style: none;
}

.board__kind {
  padding: 1px 6px;
  font-size: var(--text-xs);
  color: var(--color-dim);
  background-color: var(--color-canvas);
  border-radius: 3px;
}

.board__kind--more {
  color: var(--color-outline);
}

.board__edit {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 2px 8px;
  font-size: var(--text-xs);
  font-family: inherit;
  color: var(--color-fg);
  background-color: var(--color-raised);
  border: 1px solid var(--color-divider);
  border-radius: 3px;
  opacity: 0;
  cursor: pointer;
}

.board:hover .board__edit,
.board__edit:focus-visible {
  opacity: 1;
}

.board--new {
  box-shadow: none;
  align-items: center;
  justify-content: center;
  gap: 2px;
  min-height: 180px;
  font-family: inherit;
  background-color: transparent;
  border-style: dashed;
}

.board__plus {
  font-size: 20px;
  line-height: 1;
  color: var(--color-outline);
}

.board__usage {
  margin: 3px 0 0;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-variant-numeric: tabular-nums;
  color: var(--color-dim);
}

.boards__nomatch {
  grid-column: 1 / -1;
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-dim);
}

.boards__empty {
  max-width: 420px;
  margin: 10vh auto 0;
  padding: 0 16px;
  text-align: center;
}

.boards__empty-plan {
  width: 200px;
  margin: 0 auto 16px;
  border: 1px solid var(--color-divider);
  border-radius: 4px;
}

.boards__empty-title {
  margin: 0;
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-fg);
}

.boards__empty-text {
  margin: 8px 0 16px;
  font-size: var(--text-sm);
  line-height: 1.5;
  color: var(--color-dim);
}

.boards__empty-actions {
  display: flex;
  justify-content: center;
  gap: 8px;
}

@media (prefers-reduced-motion: reduce) {
  .board {
    transition: none;
  }

  .board:hover {
    transform: none;
  }
}
</style>
