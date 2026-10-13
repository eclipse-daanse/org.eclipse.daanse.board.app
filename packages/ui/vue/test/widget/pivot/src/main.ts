/*
  Copyright (c) 2026 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena
*/

import 'reflect-metadata'
import { createApp } from 'vue'
import App from './App.vue'
import { translator } from 'org.eclipse.daanse.board.app.ui.vue.widget.table.pivot/src/navigation/testing'
import tablePivot from 'org.eclipse.daanse.board.app.ui.vue.widget.table.pivot/src/i18n/en.json'
import xmla from 'org.eclipse.daanse.board.app.ui.vue.common.xmla/src/i18n/en.json'
// The application's sheet: its tokens and the utilities the table is laid out with.
import '../../../../../../app/shell/src/assets/main.css'

// English, as the application would give it, without starting its i18n bundle.
createApp(App)
  .provide('i18n', translator({ tablePivot, xmla }))
  .mount('#app')
