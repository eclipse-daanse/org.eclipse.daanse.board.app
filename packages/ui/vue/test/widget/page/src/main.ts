/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import 'reflect-metadata'
import { createApp } from 'vue'
import { createPinia, setActivePinia } from 'pinia'
import { createVuestic } from 'vuestic-ui'
import { createRouter, createWebHashHistory } from 'vue-router'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/typography.css'
import App from './App.vue'

import { init } from 'org.eclipse.daanse.board.app.lib.module1'
import { container, identifiers } from 'org.eclipse.daanse.board.app.lib.core'

init(container)
container.bind(identifiers.CONTAINER).toDynamicValue((ctx: any) => {
  return ctx
})

// Load core DI repositories and managers
import 'org.eclipse.daanse.board.app.lib.repository.page'
import 'org.eclipse.daanse.board.app.lib.repository.connection'
import 'org.eclipse.daanse.board.app.lib.repository.datasource'
import 'org.eclipse.daanse.board.app.lib.repository.widget'
import 'org.eclipse.daanse.board.app.lib.repository.navigation'
import 'org.eclipse.daanse.board.app.lib.repository.route'
import 'org.eclipse.daanse.board.app.lib.variables'
import 'org.eclipse.daanse.board.app.lib.factory.variableWrapper'
import 'org.eclipse.daanse.board.app.lib.repository.variable'
import 'org.eclipse.daanse.board.app.ui.vue.eventmanager'
import 'org.eclipse.daanse.board.app.lib.repository.page'

const app = createApp(App)
app.use(createVuestic())
app.config.globalProperties.$container = container
app.provide('container', container)

const pinia = createPinia()
setActivePinia(pinia)
app.use(pinia)

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/:pageid?', component: App },
  ]
})
app.use(router)

app.mount('#app')
