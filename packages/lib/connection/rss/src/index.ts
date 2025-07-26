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
import { RssConnection, type IRssConnectionConfiguration } from './classes'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

const factorySymbol = Symbol.for('RssConnectionFactory')

if (!container.isBound(RssConnection)) {
  container.bind<RssConnection>(RssConnection).toSelf().inTransientScope()
}

if (!container.isBound(factorySymbol)) {
  container.bind<Factory<RssConnection>>(factorySymbol).toFactory(() => {
    return (config: IRssConnectionConfiguration) => {
      if (!RssConnection.validateConfiguration(config)) {
        throw new Error(
          'Invalid RssConnection configuration. Please provide a valid configuration.',
        )
      }

      const connection = container.get<RssConnection>(RssConnection)
      connection.init(config)

      return connection
    }
  })
}

export { RssConnection, IRssConnectionConfiguration, factorySymbol }
