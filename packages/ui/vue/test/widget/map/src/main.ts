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
import { activate as startI18n, addTranslations, I18NEXT } from 'org.eclipse.daanse.board.app.lib.i18next'
/* Each package brings its own texts; without the loader, nobody collects them - so here, by hand. */
import { MapTranslations } from 'org.eclipse.daanse.board.app.ui.vue.widget.map/src/i18n'
import { IconTranslations } from 'org.eclipse.daanse.board.app.ui.vue.widget.icon/src/i18n'
import { DatasourceOgcstaTranslations } from 'org.eclipse.daanse.board.app.ui.vue.datasource.ogcsta/src/i18n'
import { CommonTranslations } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { ControlsTranslations } from 'org.eclipse.daanse.board.app.ui.vue.controls/src/i18n'


// Import required modules for Maps Widget
import 'org.eclipse.daanse.board.app.lib.datasource.ogcsta'
import 'org.eclipse.daanse.board.app.ui.vue.datasource.ogcsta'
import 'org.eclipse.daanse.board.app.ui.vue.widget.icon'

const app = createApp(App)

/* The widgets speak through i18next; without it they show their keys. */
startI18n({ services } as never)
for (const Texts of [MapTranslations, IconTranslations, DatasourceOgcstaTranslations, CommonTranslations, ControlsTranslations]) {
  addTranslations(new Texts())
}
app.provide('i18n', services.getRequired(I18NEXT))

// Setup global properties
services.register(APP, app)

app.mount('#app')
