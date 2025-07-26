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

import { MQTTConnection, type IMQTTConnectionConfiguration } from './classes'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { Factory } from 'inversify'

const factorySymbol = Symbol.for('MQTTConnectionFactory')

if (!container.isBound(MQTTConnection)) {
  container.bind<MQTTConnection>(MQTTConnection).toSelf().inTransientScope()
}

if (!container.isBound(factorySymbol)) {
  container.bind<Factory<MQTTConnection>>(factorySymbol).toFactory(() => {
    return (config: IMQTTConnectionConfiguration) => {
      if (!MQTTConnection.validateConfiguration(config)) {
        throw new Error(
          'Invalid MQTTConnection configuration. Please provide a valid configuration.',
        )
      }

      const connection = container.get<MQTTConnection>(MQTTConnection)
      connection.init(config)

      return connection
    }
  })
}

export { MQTTConnection, IMQTTConnectionConfiguration, factorySymbol }
