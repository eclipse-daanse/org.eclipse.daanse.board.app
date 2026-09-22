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
import { createPinia } from 'pinia'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/typography.css'
import App from './App.vue'

import { container } from 'org.eclipse.daanse.board.app.lib.core'
import {
  identifier as DATASOURCE_REPOSITORY,
  type DatasourceRepository,
} from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import 'org.eclipse.daanse.board.app.lib.repository.variable'
import { SyntheticDatasource } from './syntheticDatasource'
import { scenarios } from './scenarios'

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

const SYNTHETIC_STORE = Symbol.for('SyntheticPivotStore')
if (!container.isBound(SYNTHETIC_STORE)) {
  container.bind(SYNTHETIC_STORE).toConstantValue(() => new SyntheticDatasource(scenario))
}
const repository = container.get<DatasourceRepository>(DATASOURCE_REPOSITORY)
repository.registerDatasourceType('synthetic', {
  Store: SYNTHETIC_STORE,
  Preview: Symbol.for('SyntheticPivotPreview'),
  Settings: Symbol.for('SyntheticPivotSettings'),
})
repository.registerDatasource('synthetic', 'synthetic', {})

const app = createApp(App, { scenario })
app.use(createVuestic())
app.use(createPinia())
app.config.globalProperties.$container = container
app.provide('container', container)
app.mount('#app')
