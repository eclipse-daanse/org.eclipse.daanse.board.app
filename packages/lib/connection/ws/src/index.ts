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
import { WSConnection, type IWSConnectionConfiguration } from './classes'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

const factorySymbol = Symbol.for('WSConnectionFactory')

if (!container.isBound(WSConnection)) {
  container.bind<WSConnection>(WSConnection).toSelf().inTransientScope()
}

if (!container.isBound(factorySymbol)) {
  container.bind<Factory<WSConnection>>(factorySymbol).toFactory(() => {
    return (config: IWSConnectionConfiguration) => {
      if (!WSConnection.validateConfiguration(config)) {
        throw new Error(
          'Invalid WSConnection configuration. Please provide a valid configuration.',
        )
      }

      const connection = container.get<WSConnection>(WSConnection)
      connection.init(config)

      return connection
    }
  })
}

export { WSConnection, IWSConnectionConfiguration, factorySymbol }
