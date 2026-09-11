/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import SparqlStore from './classes/SparqlStore'
import type { ISparqlStoreConfiguration } from './interfaces/ISparqlStoreConfiguration'
import { symbol } from './interfaces/Constances'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
import { SparqlstorePackage } from './gen/SparqlstorePackage'
import { SparqlstoreFactory } from './gen/SparqlstoreFactory'
import { ISparqlStoreConfigurationImpl } from './gen/ISparqlStoreConfigurationImpl'
/*
 * Building the EPackage on load: until it exists the class literals are
 * null, an instance cannot say what it is, and nothing can render a form
 * from the model.
 */
void SparqlstorePackage.eINSTANCE

/** Typed service id - the name and the contract declared once, here. */
const SPARQL_STORE = serviceId<(config: ISparqlStoreConfiguration) => SparqlStore>('SparqlStore')

/**
 * Erzeugt einen Store aus einer Konfiguration.
 *
 * Die Instanz kommt ueber `construct`, nicht ueber `new`: die Klasse loest
 * ihre Dienste ueber `@inject` auf, und `construct` traegt sie ein. Jeder
 * Aufruf liefert eine eigene Instanz - vorher ueber `inTransientScope`.
 */
export function activate({ services }: ActivationContext) {
  services.register(SPARQL_STORE, (config: ISparqlStoreConfiguration) => {
    if (!SparqlStore.validateConfiguration(config)) {
      throw new Error(
        'Invalid SparqlStore configuration. Please provide a valid configuration.',
      )
    }

    const store = services.construct(SparqlStore)
    store.init(config)

    return store
  })
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(SPARQL_STORE)
}

// const init = (container: Container) => {
//   container.bind(symbol).toConstantValue(SparqlStore);
//   console.log('📦 SparqlStore initialized')
// }

export { symbol, SparqlStore, ISparqlStoreConfiguration }
export { SparqlstorePackage, SparqlstoreFactory, ISparqlStoreConfigurationImpl }
