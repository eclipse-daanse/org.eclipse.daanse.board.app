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
 * The board launcher - what the app opens with.
 *
 * It shows the boards that exist, each with its floorplan, so choosing one
 * is recognition rather than reading a list. Everything on a card comes
 * from the board itself (its layout, its widgets, its data sources);
 * nothing is decoration standing in for data we do not have.
 */
import { computed, inject, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { v4 as uuidv4 } from 'uuid'
import BoardFloorplan from './BoardFloorplan.vue'
import WorkspaceStorage from './WorkspaceStorage.vue'
import { summarizeBoard, type BoardSummary } from '@/composables/boardSummary'
import { useBoardUsage } from '@/composables/useBoardUsage'
import {
  identifier as WORKSPACE,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { useEList } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { useLayoutStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.layout'
import { useWidgetsStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.widgets'
import type { PageRegistryI, PageI } from 'org.eclipse.daanse.board.app.lib.api.page'
import type { LayoutRepositoryI } from 'org.eclipse.daanse.board.app.lib.api.layout.page'

const props = defineProps<{
  pageRepo?: PageRegistryI
  layoutRepo?: LayoutRepositoryI
}>()

const router = useRouter()
const route = useRoute()
const query = ref('')

const { usageOf, byUsage, lastOpenedLabel } = useBoardUsage()

/** Boards and storage are two views of the same place, not two places. */
const view = ref<'boards' | 'storage'>(route.query.view === 'storage' ? 'storage' : 'boards')



/* The modelled pages - reading this list is what makes the summary re-run. */
const pages = useEList(inject<Workspace>(WORKSPACE)!, (w) => w.pages)

/*
 * Ordered by how much each board is actually used, so the ones worked with
 * daily stay at the front and the rest keep their place behind them - a
 * board is never hidden, only ranked.
 */
const boards = computed<BoardSummary[]>(() => {
  /* Reading the modelled list is what makes this re-run. */
  const held = pages.value
  void held
  const repo = props.pageRepo
  if (!repo) return []

  return repo
    .getAllPageIds()
    .slice()
    .sort(byUsage)
    .map((id: string) =>
      summarizeBoard(id, repo.getPage(id) as PageI | undefined, useLayoutStore(id).layout, useWidgetsStore(id).widgets),
    )
})

const visibleBoards = computed(() => {
  const needle = query.value.trim().toLowerCase()
  if (!needle) return boards.value
  return boards.value.filter(
    (b) =>
      b.name.toLowerCase().includes(needle) ||
      b.description.toLowerCase().includes(needle) ||
      b.kinds.some((k) => k.toLowerCase().includes(needle)),
  )
})

function openBoard(id: string) {
  router.push(`/page/${id}`)
}

function editBoard(id: string) {
  router.push(`/page/${id}/edit`)
}

function createBoard() {
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
</script>

<template>
  <div class="boards">
   <div class="boards__panel">
    <header class="boards__bar">
      <div class="boards__views" role="tablist" aria-label="Ansicht">
        <button
          type="button"
          role="tab"
          :aria-selected="view === 'boards'"
          :class="['boards__view', { on: view === 'boards' }]"
          @click="view = 'boards'"
        >
          Oft genutzt
          <span v-if="boards.length" class="boards__count">{{ boards.length }}</span>
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

      <div v-if="view === 'boards'" class="boards__tools">
        <input
          v-model="query"
          class="boards__search"
          type="search"
          placeholder="Boards filtern"
          aria-label="Boards filtern"
        />
        <button class="boards__action boards__action--primary" type="button" @click="createBoard">
          Neues Board
        </button>
      </div>
    </header>

    <div class="boards__body">
    <!-- Nothing built yet: say what a board is and offer the one useful move -->
    <div v-if="view === 'boards' && boards.length === 0" class="boards__empty">
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
        Ein Board ist eine Seite mit Widgets über deinen Datenquellen. Lege eines an oder
        öffne einen gespeicherten Arbeitsstand.
      </p>
      <div class="boards__empty-actions">
        <button class="boards__action boards__action--primary" type="button" @click="createBoard">
          Neues Board
        </button>
        <button class="boards__action" type="button" @click="openStorage">
          Aus Speicher öffnen
        </button>
      </div>
    </div>

    <div v-else-if="view === 'boards'" class="boards__grid">
      <article
        v-for="board in visibleBoards"
        :key="board.id"
        class="board"
        tabindex="0"
        role="button"
        :aria-label="`Board ${board.name} öffnen`"
        @click="openBoard(board.id)"
        @keydown.enter="openBoard(board.id)"
        @keydown.space.prevent="openBoard(board.id)"
      >
        <BoardFloorplan :items="board.items" :type-by-id="board.typeById" />

        <div class="board__body">
          <h2 class="board__name">{{ board.name }}</h2>
          <p class="board__meta">
            {{ board.widgetCount }} {{ board.widgetCount === 1 ? 'Widget' : 'Widgets' }}
            <template v-if="board.sourceCount">
              · {{ board.sourceCount }} {{ board.sourceCount === 1 ? 'Datenquelle' : 'Datenquellen' }}
            </template>
          </p>
          <p v-if="usageOf(board.id)" class="board__usage">
            {{ usageOf(board.id)?.count }}× geöffnet · zuletzt {{ lastOpenedLabel(board.id) }}
          </p>

          <ul v-if="board.kinds.length" class="board__kinds">
            <li v-for="kind in board.kinds.slice(0, 3)" :key="kind" class="board__kind">
              {{ kind }}
            </li>
            <li v-if="board.kinds.length > 3" class="board__kind board__kind--more">
              +{{ board.kinds.length - 3 }}
            </li>
          </ul>
        </div>

        <button
          class="board__edit"
          type="button"
          :aria-label="`Board ${board.name} bearbeiten`"
          @click.stop="editBoard(board.id)"
        >
          Bearbeiten
        </button>
      </article>

      <button class="board board--new" type="button" @click="createBoard">
        <span class="board__plus" aria-hidden="true">+</span>
        <span class="board__name">Neues Board</span>
        <span class="board__meta">Leer starten</span>
      </button>

      <p v-if="visibleBoards.length === 0" class="boards__nomatch">
        Kein Board passt zu „{{ query }}“.
      </p>
    </div>

    <WorkspaceStorage v-else @restored="view = 'boards'" />
    </div>
   </div>
  </div>
</template>

<style scoped>
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
.boards__action:focus-visible,
.board:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}

.boards__action {
  height: 22px;
  padding: 0 10px;
  font-size: var(--text-sm);
  font-family: inherit;
  color: var(--color-fg);
  background-color: var(--color-raised);
  border: 1px solid var(--color-divider);
  border-radius: 4px;
  cursor: pointer;
}

.boards__action:hover {
  border-color: var(--color-outline);
}

.boards__action--primary {
  color: var(--color-white);
  background-color: var(--color-accent);
  border-color: var(--color-accent);
}

.boards__action--primary:hover {
  filter: brightness(1.08);
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
