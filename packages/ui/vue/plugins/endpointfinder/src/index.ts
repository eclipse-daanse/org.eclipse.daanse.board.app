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
import type { ConnectionRepository } from 'org.eclipse.daanse.board.app.lib.api.connection'
import { CONNECTION_REPOSITORY, identifier } from 'org.eclipse.daanse.board.app.lib.api.connection'
import { useSparQLEndPointManager } from './sparql/SparqlEndpointRegistry'
import type { RestConnection } from 'org.eclipse.daanse.board.app.lib.connection.rest'

/** The id the finder's own SPARQL endpoint is registered under. */
export const SPARQL_CONNECTION_ID = 'ui.vue.plugins.endpointfinder.sparql'

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

  /*
   * Live only, not a connection in the workspace. The finder's own endpoint
   * is not part of anybody's board: put into the workspace it showed up as
   * a second "Connection <uuid>" beside the seeded one, was stored with
   * every board, and - created after the shell had started tracking -
   * marked a workspace nobody had touched as unsaved.
   */
  const connectionRepository = services.getRequired(CONNECTION_REPOSITORY)
  connectionRepository.registerConnection(SPARQL_CONNECTION_ID, 'rest', {
    uid: SPARQL_CONNECTION_ID,
    name: 'SparqlDataEurope',
    type: 'rest',
    url: 'https://www.govdata.de/sparql',
  })
  const verbindung = connectionRepository.getConnection(SPARQL_CONNECTION_ID)

  useSparQLEndPointManager().registerEndpoint(verbindung as RestConnection, 'SparqlDataEurope')
  useSparQLEndPointManager().setActive('SparqlDataEurope')
  log.info('Endpointfinder bereit')
}

/* Its texts - collected by lib.i18next, see src/i18n. */
export { PluginsEndpointfinderTranslations } from './i18n'
