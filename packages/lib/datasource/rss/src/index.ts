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
import { RssStore, type IRssStoreConfiguration } from './classes'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

const factorySymbol = Symbol.for('RssStoreFactory')

if (!container.isBound(RssStore)) {
  container.bind<RssStore>(RssStore).toSelf().inTransientScope()
}

if (!container.isBound(factorySymbol)) {
  container.bind<Factory<RssStore>>(factorySymbol).toFactory(() => {
    return (config: IRssStoreConfiguration) => {
      if (!RssStore.validateConfiguration(config)) {
        throw new Error(
          'Invalid RssStore configuration. Please provide a valid configuration.',
        )
      }
      const store = container.get<RssStore>(RssStore)
      store.init(config)

      return store
    }
  })
}

export { RssStore, IRssStoreConfiguration, factorySymbol }
