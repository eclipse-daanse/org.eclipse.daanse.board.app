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
import { DButton, DIcon } from 'org.eclipse.daanse.board.app.ui.vue.controls'
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
  <section class="pages">
    <header class="pages__head">
      <div class="pages__title">
        <span class="pages__icon" aria-hidden="true">
          <DIcon :name="board?.icon || 'dashboard'" size="sm" />
        </span>
        <h1 class="pages__name">Seiten<template v-if="board?.name"> von {{ board.name }}</template></h1>
      </div>
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

    <div class="pages__grid">
      <article
        v-for="page in visiblePages"
        :key="page.id"
        class="card"
        tabindex="0"
        role="button"
        :aria-label="`Seite ${page.name} öffnen`"
        @click="openPage(page.id)"
        @keydown.enter="openPage(page.id)"
        @keydown.space.prevent="openPage(page.id)"
      >
        <BoardFloorplan :items="page.items" :type-by-id="page.typeById" />

        <div class="card__body">
          <h2 class="card__name">{{ page.name }}</h2>
          <p class="card__meta">
            {{ page.widgetCount }} {{ page.widgetCount === 1 ? 'Widget' : 'Widgets' }}
            <template v-if="page.sourceCount">
              · {{ page.sourceCount }}
              {{ page.sourceCount === 1 ? 'Datenquelle' : 'Datenquellen' }}
            </template>
          </p>
          <p v-if="usageOf(page.id)" class="card__usage">
            {{ usageOf(page.id)?.count }}× geöffnet · zuletzt {{ lastOpenedLabel(page.id) }}
          </p>
        </div>

        <button
          class="card__edit"
          type="button"
          :aria-label="`Seite ${page.name} bearbeiten`"
          @click.stop="editPage(page.id)"
        >
          Bearbeiten
        </button>
      </article>

      <button class="card card--new" type="button" @click="createPage">
        <span class="card__plus" aria-hidden="true">+</span>
        <span class="card__name">Neue Seite</span>
        <span class="card__meta">Leer starten</span>
      </button>

      <p v-if="pages.length && visiblePages.length === 0" class="pages__nomatch">
        Keine Seite passt zu „{{ query }}“.
      </p>
    </div>
  </section>
</template>

<style scoped>
.pages {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
  padding: 14px 16px 16px;
  background-color: var(--color-bg);
}

.pages__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex: none;
  padding-bottom: 10px;
}

.pages__title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pages__icon {
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  color: var(--color-accent);
  background-color: var(--color-sunken);
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm);
}

.pages__name {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-fg);
}

.pages__tools {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pages__search {
  padding: 5px 9px;
  font: inherit;
  font-size: 0.85rem;
  color: var(--color-fg);
  background-color: var(--color-sunken);
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm);
}

.pages__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 12px;
  align-content: start;
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
}

.card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-align: left;
  background-color: var(--color-pane);
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-md);
  cursor: pointer;
}

.card:hover,
.card:focus-visible {
  border-color: var(--color-accent);
}

.card__body {
  padding: 10px 12px;
}

.card__name {
  margin: 0;
  font-size: 0.92rem;
  color: var(--color-fg);
}

.card__meta,
.card__usage {
  margin: 3px 0 0;
  font-size: 0.8rem;
  color: var(--color-dim);
}

.card__edit {
  padding: 7px 12px;
  font: inherit;
  font-size: 0.8rem;
  color: var(--color-dim);
  text-align: left;
  background: none;
  border: 0;
  border-top: 1px solid var(--color-divider, var(--color-outline));
  cursor: pointer;
}

.card__edit:hover {
  color: var(--color-fg);
  background-color: var(--color-sunken);
}

.card--new {
  align-items: center;
  justify-content: center;
  gap: 2px;
  min-height: 150px;
  color: var(--color-dim);
  background: none;
  border-style: dashed;
}

.card__plus {
  font-size: 1.4rem;
  line-height: 1;
}

.pages__nomatch {
  grid-column: 1 / -1;
  margin: 0;
  padding: 12px 2px;
  font-size: 0.85rem;
  color: var(--color-dim);
}
</style>
