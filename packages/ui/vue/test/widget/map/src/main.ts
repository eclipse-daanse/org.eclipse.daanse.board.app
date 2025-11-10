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
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/typography.css'
import App from './App.vue'
import 'leaflet/dist/leaflet.css'

import { init } from 'org.eclipse.daanse.board.app.lib.module1'
import { container, identifiers } from 'org.eclipse.daanse.board.app.lib.core'

// Initialize container
init(container)
container.bind(identifiers.CONTAINER).toDynamicValue((ctx: any) => {
  return ctx
})

// Import required modules for Maps Widget
import 'org.eclipse.daanse.board.app.lib.datasource.ogcsta'
import 'org.eclipse.daanse.board.app.ui.vue.datasource.ogcsta'
import 'org.eclipse.daanse.board.app.ui.vue.widget.icon'

const app = createApp(App)

// Setup Vuestic UI
app.use(createVuestic())

// Setup global properties
app.config.globalProperties.$container = container
app.provide('container', container)

// Setup pinia
const pinia = createPinia()
setActivePinia(pinia)
app.use(pinia)

app.mount('#app')
