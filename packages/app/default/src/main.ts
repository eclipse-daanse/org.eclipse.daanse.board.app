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
import 'reflect-metadata'

import { createApp } from 'vue'
import { createPinia, setActivePinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { init } from 'org.eclipse.daanse.board.app.lib.module1'
import { container, identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { init as initLogger } from 'org.eclipse.daanse.board.app.lib.logger'

const app = createApp(App)
app.use(createVuestic({
  config: {
    colors: {
      presets: {
        light: {
          primary: '#606060',
          lightPrim: '#cbcbcb',
          orange: '#c29803',
          //active:"rgba(255,201,132,0.25)",
          active: "rgba(147,147,147,0.25)",
          /*secondary: '#E79542',*/
          textPrimary: '#3a3a3a',
        }
      }
    }
  },
}))

init(container)
initLogger(container)
container.bind(identifiers.CONTAINER).toDynamicValue((ctx: any) => {
  return ctx
})


app.config.globalProperties.$container = container
app.provide('container', container);
app.provide('codeEditorType', 'monaco');
const symbolForApp = Symbol.for('App');
container.bind('App').toConstantValue(app);
const pinia = createPinia();
setActivePinia(pinia)
app.use(pinia)

import {
  type PageI,
  identifier as PageReoIdentifier,
  type PageRegistryI
} from 'org.eclipse.daanse.board.app.lib.repository.page'
loadPackages()
// TODO: Move this to initialization of the app
import {
  type ConnectionRepository,
  identifier as ConnectionIdentifier,
} from 'org.eclipse.daanse.board.app.lib.repository.connection'
import {
  DatasourceRepository,
  identifier as DatasourceIdentifier,
} from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import 'org.eclipse.daanse.board.app.lib.connection.rest'
import 'org.eclipse.daanse.board.app.lib.connection.rss'
import { XmlaConnection } from 'org.eclipse.daanse.board.app.lib.connection.xmla'
import 'org.eclipse.daanse.board.app.lib.connection.graphql'
import 'org.eclipse.daanse.board.app.lib.connection.websocket'
import 'org.eclipse.daanse.board.app.lib.connection.mqtt'
import 'org.eclipse.daanse.board.app.lib.datasource.rest'
import 'org.eclipse.daanse.board.app.lib.datasource.csv'
import 'org.eclipse.daanse.board.app.lib.datasource.rss'
import 'org.eclipse.daanse.board.app.lib.datasource.graphql'
import 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import 'org.eclipse.daanse.board.app.lib.datasource.sql_xmla'
import 'org.eclipse.daanse.board.app.lib.datasource.websocket'
import 'org.eclipse.daanse.board.app.lib.datasource.kpi_tmp'
import 'org.eclipse.daanse.board.app.lib.datasource.ogcsta'
import 'org.eclipse.daanse.board.app.lib.datasource.sparql'
import 'org.eclipse.daanse.board.app.lib.composer.chart'
import 'org.eclipse.daanse.board.app.lib.composer.datatable'
import 'org.eclipse.daanse.board.app.lib.composer.kpi'
import 'org.eclipse.daanse.board.app.lib.composer.weather'
import 'org.eclipse.daanse.board.app.lib.composer.ogcsta2chart'

import 'org.eclipse.daanse.board.app.lib.repository.widget'
import 'org.eclipse.daanse.board.app.ui.vue.widget.sample'
import 'org.eclipse.daanse.board.app.ui.vue.widget.image'
import 'org.eclipse.daanse.board.app.ui.vue.widget.progress'
import 'org.eclipse.daanse.board.app.ui.vue.widget.video'
import 'org.eclipse.daanse.board.app.ui.vue.widget.text.plain'
import 'org.eclipse.daanse.board.app.ui.vue.widget.text.rich'
import 'org.eclipse.daanse.board.app.ui.vue.widget.svg.base'
import 'org.eclipse.daanse.board.app.ui.vue.widget.svg.repeat'
import 'org.eclipse.daanse.board.app.ui.vue.widget.table.data'
import 'org.eclipse.daanse.board.app.ui.vue.datasource.rest'
import 'org.eclipse.daanse.board.app.ui.vue.connection.rest'
import 'org.eclipse.daanse.board.app.ui.vue.widget.table.pivot'
import 'org.eclipse.daanse.board.app.ui.vue.widget.table.kpi'
import 'org.eclipse.daanse.board.app.ui.vue.widget.icon'
import 'org.eclipse.daanse.board.app.ui.vue.widget.vanta'
import 'org.eclipse.daanse.board.app.ui.vue.widget.code'
import 'org.eclipse.daanse.board.app.ui.vue.widget.rss'
import 'org.eclipse.daanse.board.app.ui.vue.widget.mermaid'
import 'org.eclipse.daanse.board.app.ui.vue.widget.chart'
import 'org.eclipse.daanse.board.app.ui.vue.widget.markdown'
import 'org.eclipse.daanse.board.app.ui.vue.widget.timeline'
import 'org.eclipse.daanse.board.app.ui.vue.connection.xmla'
import 'org.eclipse.daanse.board.app.ui.vue.datasource.csv'
import 'org.eclipse.daanse.board.app.ui.vue.connection.rss'
import 'org.eclipse.daanse.board.app.ui.vue.datasource.rss'
import 'org.eclipse.daanse.board.app.ui.vue.connection.graphql'
import 'org.eclipse.daanse.board.app.ui.vue.datasource.graphql'
import 'org.eclipse.daanse.board.app.ui.vue.datasource.xmla'
import 'org.eclipse.daanse.board.app.ui.vue.datasource.sql_xmla'
import 'org.eclipse.daanse.board.app.ui.vue.connection.ws'
import 'org.eclipse.daanse.board.app.ui.vue.datasource.ws'
import 'org.eclipse.daanse.board.app.ui.vue.connection.mqtt'
import 'org.eclipse.daanse.board.app.ui.vue.composer.chart'
import 'org.eclipse.daanse.board.app.ui.vue.composer.datatable'
import 'org.eclipse.daanse.board.app.ui.vue.composer.kpi'
import 'org.eclipse.daanse.board.app.ui.vue.composer.ogc'
import 'org.eclipse.daanse.board.app.ui.vue.composer.weather'
import 'org.eclipse.daanse.board.app.ui.vue.composer.ogcsta2chart'
import 'org.eclipse.daanse.board.app.ui.vue.datasource.kpi'

import 'org.eclipse.daanse.board.app.ui.vue.datasource.ogcsta'
import 'org.eclipse.daanse.board.app.ui.vue.widget.map'
import 'org.eclipse.daanse.board.app.ui.vue.widget.weather'

import 'org.eclipse.daanse.board.app.lib.variables'
import {
  // init as initVariableWrapperFactory,
  identifier as variableFactoryWrapperIdentifier,
} from 'org.eclipse.daanse.board.app.lib.factory.variableWrapper'
import 'org.eclipse.daanse.board.app.lib.repository.variable'

import 'org.eclipse.daanse.board.app.ui.vue.variable.constant'
import 'org.eclipse.daanse.board.app.ui.vue.variable.computed'

import 'org.eclipse.daanse.board.app.ui.vue.widget.wrapper'


import { identifier as LayoutRepositoryIdentifier, type LayoutRepositoryI }
  from 'org.eclipse.daanse.board.app.lib.repository.layout.page'
import 'org.eclipse.daanse.board.app.ui.vue.layouts.base'
import 'org.eclipse.daanse.board.app.ui.vue.layouts.grid'

const pageRepo = container.get<PageRegistryI>(PageReoIdentifier)
const layoutRepo = container.get<LayoutRepositoryI>(LayoutRepositoryIdentifier)
const baseLayout
  = layoutRepo.getLayout('org.eclipse.daanse.board.app.ui.vue.layouts.base')


if (baseLayout) {
  pageRepo.registerPage({
    id:'abc',
    name:'Seite 1',
    description:'Seite 1',
    icon:'icon.png',
    visibleInNavigation:true,
    layout: baseLayout
  } as PageI)
  pageRepo.registerPage({
    id:'abe',
    name:'Seite 2',
    description:'Seite 2',
    icon:'icon.png',
    visibleInNavigation:true,
    layout: baseLayout
  } as PageI)
}




if (document.readyState === 'complete') {
  // load-Event ist schon vorbei
  onLoaded()
} else {
  window.addEventListener('load', onLoaded)
}
function onLoaded() {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.display = 'none'
  }
}

// variableRepository.registerVariableType('constant', {
//   Variable: ConstantVariableSymbol,
//   Settings: null as any,
// })

async function loadPackages() {
  await import("org.eclipse.daanse.board.app.lib.i18next")
  await import("org.eclipse.daanse.board.app.ui.vue.plugins.i18next")
  await import("org.eclipse.daanse.board.app.ui.vue.lang.common.en")
  await import("org.eclipse.daanse.board.app.ui.vue.lang.icon.en")
  await import("org.eclipse.daanse.board.app.ui.vue.lang.image.en")
  await import("org.eclipse.daanse.board.app.ui.vue.lang.progress.en")
  await import("org.eclipse.daanse.board.app.ui.vue.lang.video.en")
  await import("org.eclipse.daanse.board.app.ui.vue.lang.svg.base.en")
  await import("org.eclipse.daanse.board.app.ui.vue.lang.svg.repeat.en")
  await import("org.eclipse.daanse.board.app.ui.vue.lang.text.rich.en")
  await import("org.eclipse.daanse.board.app.ui.vue.lang.text.plain.en")
  await import('org.eclipse.daanse.board.app.ui.vue.lang.wrapper.en')
  await import("org.eclipse.daanse.board.app.lib.settings.manager")
  await import("org.eclipse.daanse.board.app.ui.vue.plugins.endpointfinder")

  await import("org.eclipse.daanse.board.app.lib.repository.persistence")
  await import("org.eclipse.daanse.board.app.lib.persistence.local")
  await import("org.eclipse.daanse.board.app.lib.persistence.util")
  await import("org.eclipse.daanse.board.app.lib.persistence.rest")
  await import("org.eclipse.daanse.board.app.lib.persistence.git")
  await import("org.eclipse.daanse.board.app.ui.vue.persistence.git")
  await import("org.eclipse.daanse.board.app.lib.persistence.loader")
  await import("org.eclipse.daanse.board.app.ui.vue.page_provider")
  await import("org.eclipse.daanse.board.app.ui.vue.widget.page")


  // Register pages after layouts are loaded

}

//initSettingsManager(container)

app.config.globalProperties.$container = container
app.provide('container', container)
app.provide('codeEditorType', 'monaco')



app.use(router)

app.mount('#app')
