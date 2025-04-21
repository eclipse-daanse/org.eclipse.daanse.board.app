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
  init as initI18next,
  symbolForI18n,
} from "org.eclipse.daanse.board.app.lib.i18next"

import {
  init as initCommonEn
} from "org.eclipse.daanse.board.app.ui.vue.lang.common.en"

import {
  init as initI18nextVuePlugin,
  I18nextVuePlugin
} from "org.eclipse.daanse.board.app.ui.vue.plugins.i18next"

import {
  init as initLangEnIconWidget,
} from "org.eclipse.daanse.board.app.ui.vue.lang.icon.en"
import {
  init as initLangEnIamgeWidget,
} from "org.eclipse.daanse.board.app.ui.vue.lang.image.en"
import {
  init as initLangEnPrgressWidget,
} from "org.eclipse.daanse.board.app.ui.vue.lang.progress.en"
import {
  init as initLangEnVideoWidget,
} from "org.eclipse.daanse.board.app.ui.vue.lang.video.en"
import {
  init as initLangEnSvgBaseWidget,
} from "org.eclipse.daanse.board.app.ui.vue.lang.svg.base.en"
import {
  init as initLangEnSvgRepeatWidget,
} from "org.eclipse.daanse.board.app.ui.vue.lang.svg.repeat.en"
import {
  init as initLangEnTextRichWidget,
} from "org.eclipse.daanse.board.app.ui.vue.lang.text.rich.en"
import {
  init as initLangEnTextPlainWidget,
} from "org.eclipse.daanse.board.app.ui.vue.lang.text.plain.en"


import {
  init as initWidgetRepo,
} from 'org.eclipse.daanse.board.app.lib.repository.widget'
import { init as initSample } from
  'org.eclipse.daanse.board.app.ui.vue.widget.sample'
import { init as initImage } from
  'org.eclipse.daanse.board.app.ui.vue.widget.image'
import { init as initProgress } from
  'org.eclipse.daanse.board.app.ui.vue.widget.progress'
import { init as initVideo } from
  'org.eclipse.daanse.board.app.ui.vue.widget.video'
import { init as initTextPlain } from
  'org.eclipse.daanse.board.app.ui.vue.widget.text.plain'
import { init as initTextRich } from
  'org.eclipse.daanse.board.app.ui.vue.widget.text.rich'
import { init as initSvgBase } from
  'org.eclipse.daanse.board.app.ui.vue.widget.svg.base'
import { init as initSvgRepeat } from
  'org.eclipse.daanse.board.app.ui.vue.widget.svg.repeat'

const app = createApp(App)

init(container)
container.bind(identifiers.CONTAINER).toDynamicValue((ctx: any) => {
  return ctx
})

initI18next(container)

initCommonEn(container)
initI18nextVuePlugin(container)

initConnection(container)
initDatasource(container)
initConnectionFactory(container)
initDatasourceFactory(container)
initRestConnection(container)
initRestDatasource(container)
initWidgetRepo(container)

initSample(container)
initImage(container)
initProgress(container)
initVideo(container)
initTextPlain(container)
initTextRich(container)
initSvgBase(container)
initSvgRepeat(container)

initLangEnIconWidget(container)
initLangEnIamgeWidget(container)
initLangEnPrgressWidget(container)
initLangEnSvgBaseWidget(container)
initLangEnSvgRepeatWidget(container)
initLangEnTextRichWidget(container)
initLangEnTextPlainWidget(container)
initLangEnVideoWidget(container)

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
app.use(I18nextVuePlugin);
app.use(createPinia())
app.use(router)

app.use(createVuestic())

app.mount('#app')
