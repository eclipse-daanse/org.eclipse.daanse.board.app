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
import { XmlaConnection, type IXmlaConnectionConfiguration } from './classes'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

const factorySymbol = Symbol.for('XmlaConnectionFactory')

if (!container.isBound(XmlaConnection)) {
  container.bind<XmlaConnection>(XmlaConnection).toSelf().inTransientScope()
}

if (!container.isBound(factorySymbol)) {
  container.bind<Factory<XmlaConnection>>(factorySymbol).toFactory(() => {
    return (config: IXmlaConnectionConfiguration) => {
      if (!XmlaConnection.validateConfiguration(config)) {
        throw new Error(
          'Invalid XmlaConnection configuration. Please provide a valid configuration.',
        )
      }

      const connection = container.get<XmlaConnection>(XmlaConnection)
      connection.init(config)

      return connection
    }
  })
}

export { XmlaConnection, IXmlaConnectionConfiguration, factorySymbol }
