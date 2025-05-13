/**
  Copyright (c) 2025 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena
 */

import type { Container } from 'inversify'
import type { Plugin } from '@vue/runtime-core'
import { Options } from '@vitejs/plugin-vue'
import EndPointfinderModal from './modals/EndPointfinderModal.vue'
import { mount } from 'mount-vue-component'
import { App, Component } from 'vue'
import type { ConnectionRepository } from 'org.eclipse.daanse.board.app.lib.repository.connection'
import { identifier } from 'org.eclipse.daanse.board.app.lib.repository.connection'
import { useSparQLEndPointManager } from './sparql/SparqlEndpointRegistry'
import { RestConnection } from 'org.eclipse.daanse.board.app.lib.connection.rest'
import { useConnectionsStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.connection'
import { DataSourceDTO } from 'org.eclipse.daanse.board.app.ui.vue.stores.datasouce'

const init = (container: Container) => {

  const app: App<any> = container.get('App')
  app.use(endpointFinderPlugin)

  const { createConnection, connections } = useConnectionsStore()
  const conid = createConnection('rest', { url: 'https://www.govdata.de/sparql' })
  const connection = connections.find((ds: DataSourceDTO) => ds.uid === conid)
  const dsManager = container.get<ConnectionRepository>(identifier)


  const ds = dsManager.getConnection(conid)
  useSparQLEndPointManager().registerEndpoint(ds as RestConnection, 'SparqlDataEurope')
  useSparQLEndPointManager().setActive('SparqlDataEurope')
  console.log('📦 Endpointfinder initialized')
}


const endpointFinderPlugin: Plugin = {
  install(app, options: Options) {
    // configure the app
    const { vNode, destroy, el } = mount(EndPointfinderModal as unknown as Component, { props: {}, app: app })

    app.provide('endpointfinder', async () => {
      await vNode.component?.exposed?.run(() => {
      })
    })
  }
}
export {
  init
}
