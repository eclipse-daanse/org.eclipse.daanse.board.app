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

import './assets/main.css'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/typography.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { init } from 'org.eclipse.daanse.board.app.lib.module1'
import { container, identifiers } from 'org.eclipse.daanse.board.app.lib.core'

// TODO: Move this to initialization of the app
import {
  ConnectionRepository,
  init as initConnection,
  identifier as ConnectionIdentifier,
} from 'org.eclipse.daanse.board.app.lib.repository.connection'
import {
  DatasourceRepository,
  init as initDatasource,
  identifier as DatasourceIdentifier,
} from 'org.eclipse.daanse.board.app.lib.repository.datasource'

import {
  ConnectionFactory,
  init as initConnectionFactory,
} from 'org.eclipse.daanse.board.app.lib.factory.connection'
import {
  DatasourceFactory,
  init as initDatasourceFactory,
} from 'org.eclipse.daanse.board.app.lib.factory.datasource'
import {
  RestConnection,
  init as initRestConnection,
  symbol as RestConnectionIdentifier,
} from 'org.eclipse.daanse.board.app.lib.connection.rest'
import {
  RestStore,
  init as initRestDatasource,
  symbol as RestDatasourceIdentifier,
} from 'org.eclipse.daanse.board.app.lib.datasource.rest'
import {
  WidgetRepository,
  init as initWidgetRepo,
  identifier as WidgetIdentifier,
} from 'org.eclipse.daanse.board.app.lib.repository.widget'
import { register as RegisterSample } from
  'org.eclipse.daanse.board.app.ui.vue.widget.sample'
import { register as RegisterImage } from
  'org.eclipse.daanse.board.app.ui.vue.widget.image'
import { register as RegisterProgress } from
  'org.eclipse.daanse.board.app.ui.vue.widget.progress'
import { register as RegisterVideo } from
  'org.eclipse.daanse.board.app.ui.vue.widget.video'
import { register as RegisterTextPlain } from
  'org.eclipse.daanse.board.app.ui.vue.widget.text.plain'
import { register as RegisterTextRich } from
  'org.eclipse.daanse.board.app.ui.vue.widget.text.rich'
import { register as RegisterSvgBase } from
  'org.eclipse.daanse.board.app.ui.vue.widget.svg.base'
import { register as RegisterSvgRepeat } from
  'org.eclipse.daanse.board.app.ui.vue.widget.svg.repeat'

const app = createApp(App)

init(container)
container.bind(identifiers.CONTAINER).toDynamicValue((ctx: any) => {
  return ctx
})

initConnection(container)
initDatasource(container)
initConnectionFactory(container)
initDatasourceFactory(container)
initRestConnection(container)
initRestDatasource(container)
initWidgetRepo(container)

RegisterSample(container.get<WidgetRepository>(WidgetIdentifier))
RegisterImage(container.get<WidgetRepository>(WidgetIdentifier))
RegisterProgress(container.get<WidgetRepository>(WidgetIdentifier))
RegisterVideo(container.get<WidgetRepository>(WidgetIdentifier))
RegisterTextPlain(container.get<WidgetRepository>(WidgetIdentifier))
RegisterTextRich(container.get<WidgetRepository>(WidgetIdentifier))
RegisterSvgBase(container.get<WidgetRepository>(WidgetIdentifier))
RegisterSvgRepeat(container.get<WidgetRepository>(WidgetIdentifier))

const connectionRepository = container.get<ConnectionRepository>(ConnectionIdentifier)
connectionRepository.registerConnectionType('rest', {
  Connection: RestConnectionIdentifier,
  Settings: null as any,
})

connectionRepository.registerConnection('test', 'rest', {
  url: 'https://jsonplaceholder.typicode.com/',
})

const datasourceRepository = container.get<DatasourceRepository>(DatasourceIdentifier)

datasourceRepository.registerDatasourceType('rest', {
  Store: RestDatasourceIdentifier,
  Preview: null as any,
  Settings: null as any,
})

datasourceRepository.registerDatasource('test', 'rest', {
  resourceUrl: 'posts',
  connection: 'test',
})

app.config.globalProperties.$container = container

app.use(createPinia())
app.use(router)

app.use(createVuestic())

app.mount('#app')
