<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<!--
  App shell after docs/mdx-workbench-layout-mockups.html: topbar on top, a
  fixed 52px activity rail on the left, content beside it.

  The rail keeps a 52px column and opens over the content while the
  pointer or the keyboard is on it; the column itself never changes, so
  nothing under the pointer moves. What it lists, and in which order, is
  its own business - see Rail.vue.

  View/Edit left the navigation: they are modes of the open board and
  live in the topbar.
-->

<script setup lang="ts">
import Header from './components/common/Header.vue'
import Rail from './components/common/Rail.vue'
import WorkspaceStorage from './components/boards/WorkspaceStorage.vue'
import { DButton, DModal } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { inject, computed } from 'vue'
import {
  identifier as WORKSPACE,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { useTheme } from './theme/useTheme'
import { useRoute, useRouter } from 'vue-router'
import {
  useGlobalLoading,
  useEList,
  useTranslation,
} from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { useStorageDialog } from './composables/useStorageDialog'
import { useRestoreLastOpened } from './composables/useRestoreLastOpened'
import { useKeepLastOpened } from './composables/useKeepLastOpened'

const { isLoading } = useGlobalLoading()
const { t } = useTranslation('shell')
/* The theme writes the tokens; everything paints from those. */
useTheme()

const route = useRoute()
const router = useRouter()
const workspace = inject<Workspace>(WORKSPACE)!

/**
 * Coming up with something already open.
 *
 * The workspace lives in memory, so every reload starts with nothing;
 * what this browser last opened is kept beside it. Restoring that used
 * to be the board screen's doing, which is why a reload was restored at
 * /board/:id and nowhere else - the launcher offered "no board yet" for
 * a board sitting complete in storage, and a page blamed itself for not
 * existing (#1175).
 *
 * It happens here, in setup, before any screen renders: the shell is
 * where "what is open" belongs, and `load` reaches its repositories
 * through inject, which a router guard is not in a position to do.
 */
const { restoreLastOpened } = useRestoreLastOpened()
if (!workspace.board) restoreLastOpened()

/*
 * And kept in step from here on. It used to be written when a board was
 * made or opened and never again, so a reload replayed the board as it
 * had been at that moment - without the connections, sources and pages
 * made since.
 */
useKeepLastOpened()

/*
 * Storage is a dialog over whatever is on screen, so leaving it leaves
 * one where one was. It is mounted here rather than on a screen because
 * every screen reaches the same one.
 */
const { open: storageOpen, openOn: storageOn, hide: hideStorage } = useStorageDialog()

/** A state opened from the dialog is a board opened: go to it, and close. */
function openRestored() {
  hideStorage()
  const id = workspace.board?.id as string | undefined
  router.push(id ? `/board/${id}` : '/')
}

/*
 * Without an open board there is no side menu.
 *
 * The areas the rail lists - the board, its data, its settings - are all
 * properties of a board, so none of them means anything before one is
 * open. The launcher is the one screen where none is, and it is the one
 * route that says so.
 *
 * A board with no pages is open all the same: one explores its
 * connections from it. So what decides this is whether a board is open,
 * never whether it has pages.
 */
/* Watched on the workspace: a board appearing replaces the reference, and
  an adapter on the board that was there at setup would miss it. */
const modelledPages = useEList(workspace, (w) => w.board?.pages)
const noBoard = computed(() => {
  void modelledPages.value
  return String(route.name) === 'home' || !workspace.board
})
</script>

<template>
  <div class="shell">
    <div v-if="isLoading" class="global-loading-bar">
      <div class="global-loading-bar-progress"></div>
    </div>

    <Header />

    <div :class="['shell-body', { 'shell-body--norail': noBoard }]">
      <Rail v-if="!noBoard" />

      <main class="content">
        <router-view :key="$route.fullPath" />
      </main>
    </div>

    <!-- A named way out as well as the cross: this dialog is a place one
      works in for a while, not a question with two answers, and the way
      back to the board should not be a 22px grey glyph in a corner. -->
    <DModal v-model="storageOpen" size="lg" :title="t('Header.storageLabel')">
      <div class="storage-dialog">
        <WorkspaceStorage :on-place="storageOn?.placeUri" :with-name="storageOn?.name" @restored="openRestored" />
      </div>
      <template #actions>
        <DButton size="sm" @click="hideStorage">{{ t('Storage.back') }}</DButton>
      </template>
    </DModal>
  </div>
</template>

<style scoped>
.shell {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-height: 0;
  background: var(--color-bg);
}
/*
 * Not clipped here.
 *
 * The rail reaches up into the actions row of the topbar, and an
 * overflow on this box cut exactly that off - it looked like a stacking
 * order and was a pair of scissors. What has to be clipped is the
 * content beside it, and that clips itself.
 */
.shell-body {
  flex: 1 1 auto;
  display: grid;
  grid-template-columns: var(--spacing-rail, 52px) minmax(0, 1fr);
  min-height: 0;
}

/* The launcher has no rail, so the content takes the whole width */
.shell-body--norail {
  grid-template-columns: minmax(0, 1fr);
}

/* Storage is a two-pane view; in a dialog it needs a height of its own,
  or it collapses to the height of whichever pane is shorter. */
.storage-dialog {
  display: flex;
  flex-direction: column;
  height: min(620px, 70vh);
  min-height: 0;
}
.storage-dialog > :deep(*) {
  min-height: 0;
  flex: 1 1 auto;
}

.content {
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.global-loading-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 8000;
  overflow: hidden;
}
.global-loading-bar-progress {
  height: 100%;
  width: 30%;
  background: var(--color-brandFill);
  animation: loading-slide 1.2s ease-in-out infinite;
}
@keyframes loading-slide {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(400%);
  }
}
</style>

<style>
@import './assets/main.css';
@import 'floating-vue/dist/style.css';

</style>
