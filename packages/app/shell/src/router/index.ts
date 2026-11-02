/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

import { createRouter, createWebHistory } from 'vue-router'
import ViewReport from '@/pages/ViewReport.vue'
import ConnectionsAndData from '@/pages/ConnectionsAndData.vue'
import BoardPages from '@/pages/BoardPages.vue'
import OpenBoard from '@/pages/OpenBoard.vue'
import EditReport from '@/pages/EditReport.vue'
import { useLastOpenedState } from '@/composables/useLastOpenedState'
import { dataPath, pagePath, pagesPath } from 'org.eclipse.daanse.board.app.lib.api.page'

/**
 * The board an address that does not name one must mean.
 *
 * Only what this browser last opened can answer it - which is the same
 * source the restore on start-up reads, so an old address resolves to
 * exactly the board that would have been loaded anyway. Where it answers
 * nothing there is no board for the page to be in, and the launcher is
 * where one is opened.
 */
const rememberedBoard = () => useLastOpenedState().recall()?.boardId

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Static core routes (routes will be added dynamically via router.addRoute in main.ts)
    {
      /*
       * Nothing open: the launcher, where a board is created or opened.
       * With one open this redirects to it - see the guard in main.ts -
       * so that "the launcher" and "the board" are never the same screen.
       */
      path: '/',
      name: 'home',
      component: ViewReport,
    },
    {
      /*
       * The open board. The id is in the path so that coming back to the
       * address says which board is meant, rather than "whatever happens
       * to be loaded"; a board with no pages is open all the same, and
       * this is where its data and settings are reached from.
       */
      path: '/board/:boardid',
      name: 'board',
      component: OpenBoard,
    },
    {
      path: '/edit',
      name: 'edit',
      component: EditReport,
    },
    /*
     * The screen the mockups call "Verbindungen & Daten", under the board
     * it belongs to. It was flat while every page was nested, which left
     * the one area of a board whose address did not say which board.
     */
    {
      /* The pages of the open board. Under it, because that is where
        they are: a page only means anything inside the board that
        holds it. */
      path: '/board/:boardid/pages',
      name: 'pages',
      component: BoardPages,
    },
    {
      path: '/board/:boardid/pages/:pageid',
      name: 'page',
      component: ViewReport,
    },
    {
      path: '/board/:boardid/pages/:pageid/edit',
      name: 'pageEdit',
      component: EditReport,
    },
    {
      path: '/board/:boardid/data',
      name: 'data',
      component: ConnectionsAndData,
    },
    {
      path: '/datasources',
      redirect: () => dataPath(rememberedBoard()),
    },
    {
      /* Older still: a board id this screen never read. */
      path: '/:id/data',
      redirect: () => dataPath(rememberedBoard()),
    },
    /*
     * What these addresses used to be.
     *
     * Not only bookmarks: ui.vue.widget.page writes /page/:pageid into
     * the board itself as its `path` setting, so every stored board with
     * a page widget on it carries one.
     */
    {
      path: '/pages',
      redirect: () => pagesPath(rememberedBoard()),
    },
    {
      path: '/page/:pageid/edit',
      redirect: (to) => pagePath(rememberedBoard(), String(to.params.pageid), true),
    },
    {
      path: '/page/:pageid',
      redirect: (to) => pagePath(rememberedBoard(), String(to.params.pageid)),
    }
  ],
})

export default router
