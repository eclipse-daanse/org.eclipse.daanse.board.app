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
import App from './App.vue'
import 'leaflet/dist/leaflet.css'

import { APP, services } from 'org.eclipse.daanse.board.app.lib.core'


// Import required modules for Maps Widget
import 'org.eclipse.daanse.board.app.lib.datasource.ogcsta'
import 'org.eclipse.daanse.board.app.ui.vue.datasource.ogcsta'
import 'org.eclipse.daanse.board.app.ui.vue.widget.icon'

const app = createApp(App)

// Setup global properties
services.register(APP, app)

app.mount('#app')
