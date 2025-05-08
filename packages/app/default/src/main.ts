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
import 'org.eclipse.daanse.board.app.ui.vue.datasource.ogcsta/dist/ui.vue.datasource.ogcsta.css'
import 'org.eclipse.daanse.board.app.ui.vue.widget.map/dist/ui.vue.widget.map.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { init } from 'org.eclipse.daanse.board.app.lib.module1'
import { container, identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { TinyEmitter } from 'tiny-emitter'

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
  XmlaConnection,
  init as initXmlaConnection,
  symbol as XmlaConnectionIdentifier,
} from 'org.eclipse.daanse.board.app.lib.connection.xmla'
import {
  init as initWebsocketConnection,
} from 'org.eclipse.daanse.board.app.lib.connection.websocket'
import {
  init as initMqttConnection,
} from 'org.eclipse.daanse.board.app.lib.connection.mqtt'
import {
  RestStore,
  init as initRestDatasource,
  symbol as RestDatasourceIdentifier,
} from 'org.eclipse.daanse.board.app.lib.datasource.rest'
import {
  init as initXmlaDatasource,
} from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import {
  init as initWebsocketDatasource,
} from 'org.eclipse.daanse.board.app.lib.datasource.websocket'
import {
  init as initOGcStaDatasource,
} from 'org.eclipse.daanse.board.app.lib.datasource.ogcsta'

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
import { init as initSample } from 'org.eclipse.daanse.board.app.ui.vue.widget.sample'
import { init as initImage } from 'org.eclipse.daanse.board.app.ui.vue.widget.image'
import { init as initProgress } from 'org.eclipse.daanse.board.app.ui.vue.widget.progress'
import { init as initVideo } from 'org.eclipse.daanse.board.app.ui.vue.widget.video'
import { init as initTextPlain } from 'org.eclipse.daanse.board.app.ui.vue.widget.text.plain'
import { init as initTextRich } from 'org.eclipse.daanse.board.app.ui.vue.widget.text.rich'
import { init as initSvgBase } from 'org.eclipse.daanse.board.app.ui.vue.widget.svg.base'
import { init as initSvgRepeat } from 'org.eclipse.daanse.board.app.ui.vue.widget.svg.repeat'
import { init as initTableData } from 'org.eclipse.daanse.board.app.ui.vue.widget.table.data'
import { init as initRestDatasourceUI } from 'org.eclipse.daanse.board.app.ui.vue.datasource.rest'
import { init as initRestConnectionUI } from 'org.eclipse.daanse.board.app.ui.vue.connection.rest'
import { init as initIconWidget } from 'org.eclipse.daanse.board.app.ui.vue.widget.icon'
import { init as initXmlaConnectionUI } from 'org.eclipse.daanse.board.app.ui.vue.connection.xmla'
import {
  init as initXmlaDatasourceUI
} from 'org.eclipse.daanse.board.app.ui.vue.datasource.xmla'
import {
  init as initWebsocketConnectionUI
} from 'org.eclipse.daanse.board.app.ui.vue.connection.ws'
import {
  init as initWebsocketDatasourceUI
} from 'org.eclipse.daanse.board.app.ui.vue.datasource.ws'
import {
  init as initMqttConnectionUI
} from 'org.eclipse.daanse.board.app.ui.vue.connection.mqtt'

import { init as initOgcStaConnectionUI }
  from 'org.eclipse.daanse.board.app.ui.vue.datasource.ogcsta'
import { init as initWidgetMap } from 'org.eclipse.daanse.board.app.ui.vue.widget.map'

import { init as initVariable, ConstantVariableSymbol }
  from 'org.eclipse.daanse.board.app.lib.variables'
import { VariableFactory, init as initVariableFactory, identifier as variableFactoryIdentifier }
  from 'org.eclipse.daanse.board.app.lib.factory.variable'
import {
  VariableRepository,
  init as initVariableRepository,
  identifier as variablerepositoryIdentifier
} from 'org.eclipse.daanse.board.app.lib.repository.variable'

import { init as initConstantVariable } from "org.eclipse.daanse.board.app.ui.vue.variable.constant"
import { init as initComputedVariable } from "org.eclipse.daanse.board.app.ui.vue.variable.computed"

const app = createApp(App)

init(container)
container.bind(identifiers.CONTAINER).toDynamicValue((ctx: any) => {
  return ctx
})

const tinyEmitter = new TinyEmitter();
container.bind(identifiers.TINY_EMITTER).toConstantValue(tinyEmitter)
app.config.globalProperties.$container = container
app.provide('container',container);
initI18next(container)

initCommonEn(container)
initI18nextVuePlugin(container)

initConnection(container)
initDatasource(container)
initConnectionFactory(container)
initRestConnection(container)
initXmlaConnection(container)
initWebsocketConnection(container)
initMqttConnection(container)
initWebsocketDatasource(container)
initRestDatasource(container)
initXmlaDatasource(container)
initWidgetRepo(container)
initDatasourceFactory(container)
initOGcStaDatasource(container)

initSample(container)
initImage(container)
initProgress(container)
initVideo(container)
initTextPlain(container)
initTextRich(container)
initSvgBase(container)
initSvgRepeat(container)
initIconWidget(container)
initWidgetMap(container)


initLangEnIconWidget(container)
initLangEnIamgeWidget(container)
initLangEnPrgressWidget(container)
initLangEnSvgBaseWidget(container)
initLangEnSvgRepeatWidget(container)
initLangEnTextRichWidget(container)
initLangEnTextPlainWidget(container)
initLangEnVideoWidget(container)
initTableData(container)

initVariable(container)
initVariableFactory(container)
initVariableRepository(container)
initConstantVariable(container)
initComputedVariable(container)

// const variableFactory = container.get<VariableFactory>(variableFactoryIdentifier)
const variableRepository = container.get<VariableRepository>(variablerepositoryIdentifier)

// variableRepository.registerVariableType('constant', {
//   Variable: ConstantVariableSymbol,
//   Settings: null as any,
// })

variableRepository.registerVariable('test', 'constant', {
  value: 'posts',
})

variableRepository.registerVariable('testComputed', 'computed', {
  expression: '$test + 123',
})

window.test = function (value) {
  const testVar = variableRepository.getVariable('test')
  testVar.value = value
}

const connectionRepository = container.get<ConnectionRepository>(ConnectionIdentifier)

// connectionRepository.registerConnection('test_xmla', 'xmla', {
//   url: 'https://ssemenkoff.dev/emondrian/xmla',
//   catalogName: 'catalog',
//   cubeName: 'cube',
// });


XmlaConnection.getCatalogs('https://ssemenkoff.dev/emondrian/xmla').then((catalogs) => {
  console.log('catalogs', catalogs)
});
XmlaConnection.getCubes('https://ssemenkoff.dev/emondrian/xmla', "FoodMart").then((cubes) => {
  console.log('catalogs', cubes)
});

connectionRepository.registerConnection('test', 'rest', {
  url: 'https://jsonplaceholder.typicode.com/',
})

const datasourceRepository = container.get<DatasourceRepository>(DatasourceIdentifier)
initRestDatasourceUI(container)
initRestConnectionUI(container)
initXmlaConnectionUI(container)
initXmlaDatasourceUI(container)
initOgcStaConnectionUI(container)
initWebsocketConnectionUI(container)
initWebsocketDatasourceUI(container)
initMqttConnectionUI(container)

datasourceRepository.registerDatasource('test_ds', 'rest', {
  resourceUrl: '$test',
  connection: 'test',
})

app.use(I18nextVuePlugin);
app.use(createPinia())
app.use(router)

app.use(createVuestic())

app.mount('#app')
