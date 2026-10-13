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
import { TinyEmitter } from 'tiny-emitter'
import App from './App.vue'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { identifier as DATASOURCE_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { identifier as VARIABLE_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.variable'
import { translator } from 'org.eclipse.daanse.board.app.ui.vue.widget.table.pivot/src/navigation/testing'
import tablePivot from 'org.eclipse.daanse.board.app.ui.vue.widget.table.pivot/src/i18n/en.json'
import xmla from 'org.eclipse.daanse.board.app.ui.vue.common.xmla/src/i18n/en.json'
import { EPackageRegistry } from '@emfts/core'
import { EventsPackage } from 'org.eclipse.daanse.board.app.lib.api.events'
import { PivotTablePackage } from 'org.eclipse.daanse.board.app.ui.vue.widget.table.pivot/src/gen/PivotTablePackage'
import { SyntheticDatasource } from './syntheticDatasource'
import { scenarios } from './scenarios'
// The application's sheet: its tokens, so the table is drawn as on a board.
import '../../../../../../app/shell/src/assets/main.css'

// ?scenario=<name>, or ?rows=<n>&columns=<n> for a plain table of that size
const params = new URLSearchParams(location.search)
const scenarioName = params.get('scenario') ?? 'tall'
const scenario =
  params.has('rows') && params.has('columns')
    ? {
        spec: {
          rows: { hierarchies: [{ name: 'Row', fanout: [Number(params.get('rows'))] }] },
          columns: { hierarchies: [{ name: 'Column', fanout: [Number(params.get('columns'))] }] },
        },
      }
    : scenarios[scenarioName]
if (!scenario) throw new Error(`Unknown scenario ${scenarioName}`)

// The widget's model, built and registered as loading its bundle would; it
// refers to the events model, which goes first
EPackageRegistry.INSTANCE.registerPackage(EventsPackage.eINSTANCE)
void PivotTablePackage.eINSTANCE

const datasource = new SyntheticDatasource(scenario)
const bus = new TinyEmitter()

// What the board provides the widget, with the synthetic datasource as its only one
createApp(App, { scenario, datasource, bus })
  .provide(DATASOURCE_REPOSITORY, { getDatasource: (id: string) => (id === 'synthetic' ? datasource : undefined) })
  .provide(VARIABLE_REPOSITORY, { getVariable: () => undefined })
  .provide(identifiers.TINY_EMITTER, bus)
  .provide('i18n', translator({ tablePivot, xmla }))
  .mount('#app')
