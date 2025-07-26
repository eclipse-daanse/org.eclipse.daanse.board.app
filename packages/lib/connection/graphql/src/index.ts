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
import {
  GraphQLConnection,
  type IGraphQLConnectionConfiguration,
} from './classes'

const factorySymbol = Symbol.for('GraphQLConnectionFactory')

if (!container.isBound(GraphQLConnection)) {
  container
    .bind<GraphQLConnection>(GraphQLConnection)
    .toSelf()
    .inTransientScope()
}

if (!container.isBound(factorySymbol)) {
  container.bind<Factory<GraphQLConnection>>(factorySymbol).toFactory(() => {
    return (config: IGraphQLConnectionConfiguration) => {
      if (!GraphQLConnection.validateConfiguration(config)) {
        throw new Error(
          'Invalid GraphQLConnection configuration. Please provide a valid configuration.',
        )
      }

      const connection = container.get<GraphQLConnection>(GraphQLConnection)
      connection.init(config)

      return connection
    }
  })
}

export {
  type GraphQLConnection,
  IGraphQLConnectionConfiguration,
  factorySymbol,
}
