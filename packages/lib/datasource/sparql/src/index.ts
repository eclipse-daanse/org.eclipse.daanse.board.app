/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import { Factory, type Container } from 'inversify'
import SparqlStore from './classes/SparqlStore'
import type { ISparqlStoreConfiguration } from './interfaces/ISparqlStoreConfiguration'
import { symbol } from './interfaces/Constances'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

if (!container.isBound(SparqlStore)) {
  container.bind(SparqlStore).toSelf().inTransientScope()
}

if (!container.isBound(symbol)) {
  container.bind<Factory<SparqlStore>>(symbol).toFactory(() => {
    return (config: ISparqlStoreConfiguration) => {
      if (!SparqlStore.validateConfiguration(config)) {
        throw new Error(
          'Invalid SparqlStore configuration. Please provide a valid configuration.',
        )
      }
      const store = container.get<SparqlStore>(SparqlStore)
      store.init(config)

      return store
    }
  })
}

// const init = (container: Container) => {
//   container.bind(symbol).toConstantValue(SparqlStore);
//   console.log('📦 SparqlStore initialized')
// }

export { symbol, SparqlStore, ISparqlStoreConfiguration }
