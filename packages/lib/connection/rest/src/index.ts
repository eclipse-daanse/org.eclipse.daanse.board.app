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
import { RestConnection, type IRestConnectionConfig } from './classes'

const factorySymbol = Symbol.for('RestConnectionFactory')

if (!container.isBound(RestConnection)) {
  container.bind(RestConnection).toSelf().inTransientScope()
}

if (!container.isBound(factorySymbol)) {
  container.bind<Factory<RestConnection>>(factorySymbol).toFactory(() => {
    return config => {
      if (!RestConnection.validateConfiguration(config)) {
        throw new Error(
          'Invalid RestConnection configuration. Please provide a valid configuration.',
        )
      }

      const connection = container.get<RestConnection>(RestConnection)
      connection.init(config)

      return connection
    }
  })
}

export { RestConnection, IRestConnectionConfig, factorySymbol }
