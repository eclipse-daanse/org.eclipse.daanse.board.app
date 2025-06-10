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


import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/typography.css'



import { createApp } from 'vue'
import { createPinia, setActivePinia } from 'pinia'

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
  init as initRssConnection,
} from 'org.eclipse.daanse.board.app.lib.connection.rss'
import {
  XmlaConnection,
  init as initXmlaConnection,
  symbol as XmlaConnectionIdentifier,
} from 'org.eclipse.daanse.board.app.lib.connection.xmla'
import {
  init as initGraphQlConnection
} from 'org.eclipse.daanse.board.app.lib.connection.graphql'
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
  init as initCsvDatasource,
} from 'org.eclipse.daanse.board.app.lib.datasource.csv'
import {
  init as initRssDatasource,
} from 'org.eclipse.daanse.board.app.lib.datasource.rss'
import {
  init as initGraphqlDatasource,
} from 'org.eclipse.daanse.board.app.lib.datasource.graphql'
import {
  init as initXmlaDatasource,
} from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import {
  init as initSqlXmlaDatasource,
} from 'org.eclipse.daanse.board.app.lib.datasource.sql_xmla'
import {
  init as initWebsocketDatasource,
} from 'org.eclipse.daanse.board.app.lib.datasource.websocket'
import {
  init as initOGcStaDatasource,
} from 'org.eclipse.daanse.board.app.lib.datasource.ogcsta'
import {init as initSparqlDataSource} from "org.eclipse.daanse.board.app.lib.datasource.sparql"
import { init as initChartComposer } from 'org.eclipse.daanse.board.app.lib.composer.chart'
import { init as initDatatableComposer } from 'org.eclipse.daanse.board.app.lib.composer.datatable'

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
  init as initLangEnWidgetWrapper,
} from 'org.eclipse.daanse.board.app.ui.vue.lang.wrapper.en'

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
import { init as initPivotTableUI } from 'org.eclipse.daanse.board.app.ui.vue.widget.table.pivot'
import { init as initIconWidget } from 'org.eclipse.daanse.board.app.ui.vue.widget.icon'
import { init as initVantaWidget } from 'org.eclipse.daanse.board.app.ui.vue.widget.vanta'
import { init as initCodeWidget } from 'org.eclipse.daanse.board.app.ui.vue.widget.code'
import { init as initRssWidget } from 'org.eclipse.daanse.board.app.ui.vue.widget.rss'
import { init as initMermaidWidget } from 'org.eclipse.daanse.board.app.ui.vue.widget.mermaid'
import { init as initChartWidgetUI } from 'org.eclipse.daanse.board.app.ui.vue.widget.chart'
import { init as initMarkdownWidget } from 'org.eclipse.daanse.board.app.ui.vue.widget.markdown'
import { init as initXmlaConnectionUI } from 'org.eclipse.daanse.board.app.ui.vue.connection.xmla'
import {
  init as initCsvDatasourceUI
} from 'org.eclipse.daanse.board.app.ui.vue.datasource.csv'
import {
  init as initRssConnectionUI
} from 'org.eclipse.daanse.board.app.ui.vue.connection.rss'
import {
  init as initRssDatasourceUI
} from 'org.eclipse.daanse.board.app.ui.vue.datasource.rss'
import {
  init as initGraphqlConnectionUI
} from 'org.eclipse.daanse.board.app.ui.vue.connection.graphql'
import {
  init as initGraphqlDatasourceUI
}
from 'org.eclipse.daanse.board.app.ui.vue.datasource.graphql'
import {
  init as initXmlaDatasourceUI
} from 'org.eclipse.daanse.board.app.ui.vue.datasource.xmla'
import {
  init as initSqlXmlaDatasourceUI
} from 'org.eclipse.daanse.board.app.ui.vue.datasource.sql_xmla'
import {
  init as initWebsocketConnectionUI
} from 'org.eclipse.daanse.board.app.ui.vue.connection.ws'
import {
  init as initWebsocketDatasourceUI
} from 'org.eclipse.daanse.board.app.ui.vue.datasource.ws'
import {
  init as initMqttConnectionUI
} from 'org.eclipse.daanse.board.app.ui.vue.connection.mqtt'
import {
  init as initChartComposerUi
} from 'org.eclipse.daanse.board.app.ui.vue.composer.chart'
import {
  init as initDatatableComposerUI
} from 'org.eclipse.daanse.board.app.ui.vue.composer.datatable'

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

import {init as initWrapper} from "org.eclipse.daanse.board.app.ui.vue.widget.wrapper";
/*import {init as initSytles } from 'org.eclipse.daanse.board.app.ui.vue.styles.daanse';*/

import {init as initSparqlDataSourceUI} from "org.eclipse.daanse.board.app.ui.vue.datasource.sparql"
import {init as initEndpointfinderPlugin}
  from "org.eclipse.daanse.board.app.ui.vue.plugins.endpointfinder"
import {init as initPresitenceRepos} from "org.eclipse.daanse.board.app.lib.repository.persistence"
import {init  as initPesistaneceLocal} from "org.eclipse.daanse.board.app.lib.persistence.local"
import {init as initSettingsManager} from "org.eclipse.daanse.board.app.lib.settings.manager"
import {init as initPersistenceReopLoader}
  from "org.eclipse.daanse.board.app.lib.persistence.loader"
import {init as initPersistenceHelper} from "org.eclipse.daanse.board.app.lib.persistence.util"
import {init as initPersistenceRest} from "org.eclipse.daanse.board.app.lib.persistence.rest"
import {init as initPersistenceGit} from "org.eclipse.daanse.board.app.lib.persistence.git"
import {init as initPersistenceGitUI} from "org.eclipse.daanse.board.app.ui.vue.persistence.git"

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.display = 'none';
  }
});
const app = createApp(App)
app.use(createVuestic({
  config: {
    colors: {
      presets: {
        light: {
          primary: '#606060',
          lightPrim:'#cbcbcb',
          orange:'#c29803',
          //active:"rgba(255,201,132,0.25)",
          active:"rgba(147,147,147,0.25)",
          /*secondary: '#E79542',*/
          textPrimary: '#3a3a3a',
        }
      }
    }
  },
}))
init(container)
container.bind(identifiers.CONTAINER).toDynamicValue((ctx: any) => {
  return ctx
})

const tinyEmitter = new TinyEmitter();
container.bind(identifiers.TINY_EMITTER).toConstantValue(tinyEmitter)
app.config.globalProperties.$container = container
app.provide('container',container);
app.provide('codeEditorType', 'monaco');
const symbolForApp = Symbol.for('App');
container.bind('App').toConstantValue(app);
initSettingsManager(container)
initI18next(container)
//initSytles(container)
initCommonEn(container)
initI18nextVuePlugin(container)

initConnection(container)
initDatasource(container)
initConnectionFactory(container)
initRestConnection(container)
initRssConnection(container)
initXmlaConnection(container)
initWebsocketConnection(container)
initMqttConnection(container)
initGraphQlConnection(container)
initWebsocketDatasource(container)
initRestDatasource(container)
initRssDatasource(container)
initGraphqlDatasource(container)
initCsvDatasource(container)
initXmlaDatasource(container)
initSqlXmlaDatasource(container)
initSparqlDataSource(container)
initWidgetRepo(container)
initDatasourceFactory(container)
initOGcStaDatasource(container)
initChartComposer(container)
initDatatableComposer(container)


initWrapper(container)
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
initRssWidget(container)
initVantaWidget(container)
initMermaidWidget(container)
initMarkdownWidget(container)
initCodeWidget(container)

initLangEnWidgetWrapper(container)
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

initPersistenceHelper(container)
initPresitenceRepos(container)
initPesistaneceLocal(container)
initPersistenceRest(container)
initPersistenceGit(container)
initPersistenceGitUI(container)
initPersistenceReopLoader(container)
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
//@ts-ignore
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
  url: 'https://jsonplaceholder.typicode.com/',uid:'test',type:'rest',name:'test'
})
const pinia = createPinia();
setActivePinia(pinia)
app.use(pinia)

const datasourceRepository = container.get<DatasourceRepository>(DatasourceIdentifier)
initRestDatasourceUI(container)
initRestConnectionUI(container)
initPivotTableUI(container)
initXmlaConnectionUI(container)
initXmlaDatasourceUI(container)
initCsvDatasourceUI(container)
initSqlXmlaDatasourceUI(container)
initOgcStaConnectionUI(container)
initWebsocketConnectionUI(container)
initWebsocketDatasourceUI(container)
initMqttConnectionUI(container)
initSparqlDataSourceUI(container)
initRssConnectionUI(container)
initRssDatasourceUI(container)
initGraphqlConnectionUI(container)
initGraphqlDatasourceUI(container)
initEndpointfinderPlugin(container)
initChartComposerUi(container)
initDatatableComposerUI(container)
initChartWidgetUI(container)

datasourceRepository.registerDatasource('test_ds', 'rest', {
  resourceUrl: 'posts',
  connection: 'test',
})

app.use(I18nextVuePlugin);

app.use(router)



app.mount('#app')
