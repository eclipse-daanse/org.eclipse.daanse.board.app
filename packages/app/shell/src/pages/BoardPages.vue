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
 * The pages of the board that is open.
 *
 * A page belongs inside a workspace, which is why this is an area of the
 * open one rather than a tab on the launcher: the launcher is about which
 * board to open, and a page only means anything once one is.
 */
import { computed, inject, ref } from 'vue'
import { useRouter } from 'vue-router'
import { v4 as uuidv4 } from 'uuid'
import { DButton } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import BoardFloorplan from '@/components/boards/BoardFloorplan.vue'
import { summarizePage, type PageSummary } from '@/composables/pageSummary'
import { useBoardUsage } from '@/composables/useBoardUsage'
import {
  identifier as WORKSPACE,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { useEList } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import {
  identifier as PageIdentifier,
  type PageRegistryI,
  type PageI,
} from 'org.eclipse.daanse.board.app.lib.api.page'

const router = useRouter()
const query = ref('')

const { usageOf, byUsage, lastOpenedLabel } = useBoardUsage()

const workspace = inject<Workspace>(WORKSPACE)!
const pageRepo = inject<PageRegistryI>(PageIdentifier)

/* Reading the list is what makes the rest re-run. */
const modelledPages = useEList(workspace, (w) => w.board?.pages)
const board = computed(() => {
  void modelledPages.value
  return workspace.board
})

const pages = computed<PageSummary[]>(() => {
  void modelledPages.value
  if (!pageRepo) return []
  return pageRepo
    .getAllPageIds()
    .slice()
    .sort(byUsage)
    .map((id: string) =>
      summarizePage(
        id,
        pageRepo.getPage(id) as PageI | undefined,
        pageRepo.getPage(id)?.layout?.toArray() ?? [],
        pageRepo.getPage(id)?.widgets?.toArray() ?? [],
      ),
    )
})

const visiblePages = computed(() => {
  const needle = query.value.trim().toLowerCase()
  if (!needle) return pages.value
  return pages.value.filter(
    (p) =>
      p.name.toLowerCase().includes(needle) ||
      p.description.toLowerCase().includes(needle) ||
      p.kinds.some((k) => k.toLowerCase().includes(needle)),
  )
})

function openPage(id: string) {
  router.push(`/page/${id}`)
}

function editPage(id: string) {
  router.push(`/page/${id}/edit`)
}

/* The registry makes the board if there is none yet, which is what the
   first page of a fresh workspace does. */
function createPage() {
  if (!pageRepo) return
  const id = uuidv4()
  pageRepo.registerPage({
    id,
    name: 'Neue Seite',
    description: '',
    icon: '',
    visibleInNavigation: true,
    layoutId: 'org.eclipse.daanse.board.app.ui.vue.layouts.base',
  })
  router.push(`/page/${id}/edit`)
}
</script>

<template>
  <div class="pages">
    <div class="pages__panel">
      <header class="pages__bar">
        <h1 class="pages__title">
          Seiten
          <span v-if="pages.length" class="pages__count">{{ pages.length }}</span>
        </h1>
        <p v-if="board?.name" class="pages__of">in {{ board.name }}</p>

        <div class="pages__tools">
          <input
            v-model="query"
            class="pages__search"
            type="search"
            placeholder="Seiten filtern"
            aria-label="Seiten filtern"
          />
          <DButton intent="primary" size="sm" @click="createPage">Neue Seite</DButton>
        </div>
      </header>

      <div class="pages__body">
        <div class="pages__grid">
          <article
            v-for="page in visiblePages"
            :key="page.id"
            class="page"
            tabindex="0"
            role="button"
            :aria-label="`Seite ${page.name} öffnen`"
            @click="openPage(page.id)"
            @keydown.enter="openPage(page.id)"
            @keydown.space.prevent="openPage(page.id)"
          >
            <BoardFloorplan :items="page.items" :type-by-id="page.typeById" />

            <div class="page__body">
              <h2 class="page__name">{{ page.name }}</h2>
              <p class="page__meta">
                {{ page.widgetCount }} {{ page.widgetCount === 1 ? 'Widget' : 'Widgets' }}
                <template v-if="page.sourceCount">
                  · {{ page.sourceCount }}
                  {{ page.sourceCount === 1 ? 'Datenquelle' : 'Datenquellen' }}
                </template>
              </p>
              <p v-if="usageOf(page.id)" class="page__usage">
                {{ usageOf(page.id)?.count }}× geöffnet · zuletzt {{ lastOpenedLabel(page.id) }}
              </p>

              <ul v-if="page.kinds.length" class="page__kinds">
                <li v-for="kind in page.kinds.slice(0, 3)" :key="kind" class="page__kind">
                  {{ kind }}
                </li>
                <li v-if="page.kinds.length > 3" class="page__kind">
                  +{{ page.kinds.length - 3 }}
                </li>
              </ul>
            </div>

            <button
              class="page__edit"
              type="button"
              :aria-label="`Seite ${page.name} bearbeiten`"
              @click.stop="editPage(page.id)"
            >
              Bearbeiten
            </button>
          </article>

          <button class="page page--new" type="button" @click="createPage">
            <span class="page__plus" aria-hidden="true">+</span>
            <span class="page__name">Neue Seite</span>
            <span class="page__meta">Leer starten</span>
          </button>

          <p v-if="pages.length && visiblePages.length === 0" class="pages__nomatch">
            Keine Seite passt zu „{{ query }}“.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* The frame every full-surface area has: a panel on the canvas, a header
   with a rule under it, and the content scrolling below. */
.pages {
  display: flex;
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
  padding: 14px 16px 16px;
  background-color: var(--color-bg);
}

.pages__panel {
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

.pages__bar {
  display: flex;
  align-items: center;
  gap: 8px;
  height: var(--spacing-panelHeader);
  flex: none;
  padding: 0 8px;
  border-bottom: 1px solid var(--color-divider);
}

.pages__title {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-fg);
}

.pages__count {
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--color-dim);
}

.pages__of {
  margin: 0;
  font-size: var(--text-xs);
  color: var(--color-dim);
}

.pages__tools {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}

.pages__search {
  height: 22px;
  min-width: 180px;
  padding: 0 8px;
  font-size: var(--text-sm);
  color: var(--color-fg);
  background-color: var(--color-raised);
  border: 1px solid var(--color-divider);
  border-radius: 4px;
}

.pages__body {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
  background-color: var(--color-bg);
  overflow: auto;
}

.pages__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(232px, 1fr));
  align-content: start;
  gap: 16px;
  padding: 16px;
}

/* A page card is a board card: same thing, one level down. */
.page {
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

.page:hover,
.page:focus-visible {
  border-color: var(--color-outline);
  box-shadow: var(--shadow-e2);
  transform: translateY(-1px);
}

.page__body {
  padding: 12px;
}

.page__name {
  margin: 0;
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-fg);
}

.page__meta {
  margin: 2px 0 0;
  font-size: var(--text-xs);
  color: var(--color-dim);
}

.page__usage {
  margin: 3px 0 0;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-variant-numeric: tabular-nums;
  color: var(--color-dim);
}

.page__kinds {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin: 8px 0 0;
  padding: 0;
  list-style: none;
}

.page__kind {
  padding: 1px 6px;
  font-size: var(--text-xs);
  color: var(--color-dim);
  background-color: var(--color-canvas);
  border-radius: 3px;
}

/* Out of the way until the card is the one being looked at. */
.page__edit {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 2px 8px;
  font-family: inherit;
  font-size: var(--text-xs);
  color: var(--color-fg);
  background-color: var(--color-raised);
  border: 1px solid var(--color-divider);
  border-radius: 3px;
  opacity: 0;
  cursor: pointer;
}

.page:hover .page__edit,
.page__edit:focus-visible {
  opacity: 1;
}

.page--new {
  align-items: center;
  justify-content: center;
  gap: 2px;
  min-height: 180px;
  font-family: inherit;
  background-color: transparent;
  border-style: dashed;
  box-shadow: none;
}

.page__plus {
  font-size: 20px;
  line-height: 1;
  color: var(--color-outline);
}

.pages__nomatch {
  grid-column: 1 / -1;
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-dim);
}
</style>
