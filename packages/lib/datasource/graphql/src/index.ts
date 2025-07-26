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
import { GraphQLStore, type IGraphQLStoreConfiguration } from './classes'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

const factorySymbol = Symbol.for('GraphQLStoreFactory')

if (!container.isBound(GraphQLStore)) {
  container.bind<GraphQLStore>(GraphQLStore).toSelf().inTransientScope()
}

if (!container.isBound(factorySymbol)) {
  container.bind<Factory<GraphQLStore>>(factorySymbol).toFactory(() => {
    return (config: IGraphQLStoreConfiguration) => {
      if (!GraphQLStore.validateConfiguration(config)) {
        throw new Error(
          'Invalid GraphQLStore configuration. Please provide a valid configuration.',
        )
      }
      const store = container.get<GraphQLStore>(GraphQLStore)
      store.init(config)

      return store
    }
  })
}

export { GraphQLStore, IGraphQLStoreConfiguration, factorySymbol }
