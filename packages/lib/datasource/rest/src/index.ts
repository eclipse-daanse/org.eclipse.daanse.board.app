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

import { Factory } from 'inversify'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { RestStore, type IRestStoreConfiguration } from './classes'

const factorySymbol = Symbol.for('RestStoreFactory')

if (!container.isBound(RestStore)) {
  container.bind(RestStore).toSelf().inTransientScope()
}

if (!container.isBound(factorySymbol)) {
  container.bind<Factory<RestStore>>(factorySymbol).toFactory(() => {
    return config => {
      if (!RestStore.validateConfiguration(config)) {
        throw new Error(
          'Invalid RestStore configuration. Please provide a valid configuration.',
        )
      }
      const store = container.get<RestStore>(RestStore)
      store.init(config)

      return store
    }
  })
}

// const symbol = Symbol.for('RestStore')

// const init = (container: Container) => {
//   container.bind(symbol).toConstantValue(RestStore);
// }

export { type RestStore, IRestStoreConfiguration, factorySymbol }
