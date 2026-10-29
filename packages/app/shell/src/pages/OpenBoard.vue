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

const totals = computed(() => ({
  pages: pages.value.length,
  connections: connections.value.length,
  datasources: datasources.value.length,
}))

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
    <header class="board__head">
      <h1 class="board__name">{{ board.name || t('Boards.open.fallbackName') }}</h1>
      <p v-if="board.description" class="board__desc">{{ board.description }}</p>
      <p class="board__meta">
        {{ t('Boards.open.pages', { count: totals.pages }) }}
        · {{ t('Boards.open.connections', { count: totals.connections }) }}
        · {{ t('Boards.open.datasources', { count: totals.datasources }) }}
      </p>
    </header>

    <!-- Its pages, where it has any: what one came to look at. -->
    <section v-if="pages.length" class="board__pages">
      <h2 class="board__heading">{{ t('Header.crumb.pages') }}</h2>
      <ul class="pages">
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

    <!--
      No pages is a board one explores its connections from, not a broken
      one. What it holds is named, and both ways on are offered.
    -->
    <section v-else class="board__nopages">
      <h2 class="board__heading">{{ t('Board.noPages.title') }}</h2>
      <p class="board__text">{{ t('Board.noPages.text') }}</p>
    </section>

    <div class="board__actions">
      <DButton v-if="entryPageId" intent="primary" size="sm" @click="openPage(entryPageId)">
        {{ t('Boards.open.action') }}
      </DButton>
      <DButton size="sm" @click="router.push('/datasources')">
        {{ t('Board.toData') }}
      </DButton>
      <DButton size="sm" @click="router.push('/pages')">
        {{ t('Board.toPages') }}
      </DButton>
    </div>
  </div>
</template>

<style scoped>
.board {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  height: 100%;
  min-height: 0;
  overflow: auto;
}

.board__name {
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xl, 1.4rem);
  color: var(--color-fg);
}

.board__desc,
.board__meta,
.board__text {
  margin: 4px 0 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
}

.board__heading {
  margin: 0 0 8px;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  color: var(--color-fg);
}

.pages {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.page {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px;
  background-color: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  cursor: pointer;
}

.page:hover {
  border-color: var(--color-outline);
}

.page__plan {
  width: 140px;
  height: 90px;
}

.page__name {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg);
}

.board__actions {
  display: flex;
  gap: 8px;
}
</style>
