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
import DataSettings from '@/pages/DataSettings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:id',
      name: 'home',
      component: ViewReport,
    },
    // {
    //   path: '/:id/edit',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: EditReport
    // },
    {
      path: '/:id/data',
      name: 'data',
      component: DataSettings,
    },
    // {
    //   path: '/configuration',
    //   name: 'config',
    //   component: Configuration
    // },
    // {
    //   path: '/test',
    //   name: 'test',
    //   component: Test
    // }
  ],
})

export default router
