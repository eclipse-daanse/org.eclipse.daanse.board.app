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
import { computed, inject, watch } from 'vue'
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
import { useWorkspaceFile } from '@/composables/useWorkspaceFile'

const route = useRoute()
const router = useRouter()
const { t } = useTranslation('shell')

const workspace = inject<Workspace>(WORKSPACE)!
const pageRepo = inject<PageRegistryI>(PageIdentifier)
const { load } = useWorkspaceFile()

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
  i18n-keys: shell:Board.figure.variables */
const totals = computed(() => [
  { key: 'pages', value: pages.value.length },
  { key: 'connections', value: connections.value.length },
  { key: 'datasources', value: datasources.value.length },
  { key: 'variables', value: variables.value.length },
])

/** Named, not only counted - a list of two is worth reading. */
const held = computed(() => [
  {
    key: 'connections',
    items: connections.value.map((each: any) => ({
      uid: each.uid as string,
      name: (each.name as string) || (each.uid as string),
      type: each.type as string,
    })),
  },
  {
    key: 'datasources',
    items: datasources.value.map((each: any) => ({
      uid: each.uid as string,
      name: (each.name as string) || (each.uid as string),
      type: each.type as string,
    })),
  },
])

function openPage(id: string) {
  router.push(`/page/${id}`)
}

/** The page the board opens on: the one it names, else the first. */
const entryPageId = computed(
  () => (pageRepo?.getDefaultPage()?.id as string | undefined) ?? (pages.value[0]?.id as string | undefined),
)
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
        <h1 class="head__name">{{ board.name || t('Boards.open.fallbackName') }}</h1>
        <p v-if="board.description" class="head__desc">{{ board.description }}</p>
      </div>
      <div class="head__actions">
        <DButton v-if="entryPageId" intent="primary" size="sm" @click="openPage(entryPageId)">
          {{ t('Boards.open.action') }}
        </DButton>
        <DButton size="sm" @click="router.push('/datasources')">{{ t('Board.toData') }}</DButton>
        <DButton size="sm" @click="router.push('/pages')">{{ t('Board.toPages') }}</DButton>
      </div>
    </header>

    <!-- Figures speak mono, as everything countable in this interface does. -->
    <ul class="figures">
      <li v-for="total in totals" :key="total.key" class="figure">
        <span class="figure__value">{{ total.value }}</span>
        <span class="figure__label">{{ t(`Board.figure.${total.key}`) }}</span>
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
        <li v-for="item in group.items" :key="item.uid" class="holds__item">
          <span class="holds__name">{{ item.name }}</span>
          <span class="holds__type">{{ item.type }}</span>
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

.head__name {
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xl);
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-fg);
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
  padding: 12px 14px;
  background-color: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
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
  padding: 7px 12px;
  background-color: var(--color-pane);
}

.holds__item + .holds__item {
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
