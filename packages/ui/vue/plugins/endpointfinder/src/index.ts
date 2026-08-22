/**
  Copyright (c) 2025 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena
 */

import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core';
import type { Plugin } from '@vue/runtime-core'
import EndPointfinderModal from './modals/EndPointfinderModal.vue'
import { mount } from 'mount-vue-component'
import { App, Component } from 'vue'
import type { ConnectionRepository } from 'org.eclipse.daanse.board.app.lib.repository.connection'
import { CONNECTION_REPOSITORY, identifier } from 'org.eclipse.daanse.board.app.lib.repository.connection'
import { useSparQLEndPointManager } from './sparql/SparqlEndpointRegistry'
import type { RestConnection } from 'org.eclipse.daanse.board.app.lib.connection.rest'
import { useConnectionsStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.connection'
import { DataSourceDTO } from 'org.eclipse.daanse.board.app.ui.vue.stores.datasouce'

/**
 * Haengt den Endpointfinder in die Anwendung und legt die Standardverbindung
 * zur SPARQL-Quelle an.
 *
 * Braucht die App-Instanz und das ConnectionRepository, und ausserdem einen
 * angemeldeten REST-Verbindungstyp - der Store legt beim Aufruf eine Verbindung
 * dieses Typs an. Genau deshalb lief dieses Paket bisher in einer eigenen
 * Nachlaufphase: die Bedingung stand nirgends, sie war nur eingehalten.
 */
export function activate({ services, log }: ActivationContext) {
  const endpointFinderPlugin: Plugin = {
    install(app) {
      const { vNode } = mount(EndPointfinderModal as unknown as Component, { props: {}, app })
      app.provide('endpointfinder', async () => {
        await vNode.component?.exposed?.run(() => {})
      })
    },
  }

  services.getRequired<App<any>>('App').use(endpointFinderPlugin)

  const { createConnection } = useConnectionsStore()
  const conid = createConnection('rest', { url: 'https://www.govdata.de/sparql' })

  const connectionRepository = services.getRequired(CONNECTION_REPOSITORY)
  const verbindung = connectionRepository.getConnection(conid)

  useSparQLEndPointManager().registerEndpoint(verbindung as RestConnection, 'SparqlDataEurope')
  useSparQLEndPointManager().setActive('SparqlDataEurope')
  log.info('Endpointfinder bereit')
}


