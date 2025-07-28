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
import { WSStore, type IWSStoreConfiguration } from './classes'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

const factorySymbol = Symbol.for('WSStoreFactory')

if (!container.isBound(WSStore)) {
  container.bind<WSStore>(WSStore).toSelf().inTransientScope()
}

if (!container.isBound(factorySymbol)) {
  container.bind<Factory<WSStore>>(factorySymbol).toFactory(() => {
    return (config: IWSStoreConfiguration) => {
      if (!WSStore.validateConfiguration(config)) {
        throw new Error(
          'Invalid WSStore configuration. Please provide a valid configuration.',
        )
      }
      const store = container.get<WSStore>(WSStore)
      store.init(config)

      return store
    }
  })
}

export { WSStore, IWSStoreConfiguration, factorySymbol }
