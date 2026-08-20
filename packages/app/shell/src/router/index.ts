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
import EditReport from '@/pages/EditReport.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Static core routes (routes will be added dynamically via router.addRoute in main.ts)
    {
      path: '/',
      name: 'home',
      component: ViewReport,
    },
    {
      path: '/edit',
      name: 'edit',
      component: EditReport,
    },
    {
      path: '/:id/data',
      name: 'data',
      component: DataSettings,
    },
    {
      path:'/page/:pageid/edit',
      name:'pageEdit',
      component:EditReport,
    },
    {
      path:'/page/:pageid',
      name:'page',
      component:ViewReport,
    }
  ],
})

export default router
