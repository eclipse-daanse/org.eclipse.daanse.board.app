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
import { SqlXmlaStore, type ISqlXmlaStoreConfiguration } from './classes'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

const factorySymbol = Symbol.for('SqlXmlaStoreFactory')

if (!container.isBound(SqlXmlaStore)) {
  container.bind<SqlXmlaStore>(SqlXmlaStore).toSelf().inTransientScope()
}

if (!container.isBound(factorySymbol)) {
  container.bind<Factory<SqlXmlaStore>>(factorySymbol).toFactory(() => {
    return config => {
      if (!SqlXmlaStore.validateConfiguration(config)) {
        throw new Error(
          'Invalid SqlXmlaStore configuration. Please provide a valid configuration.',
        )
      }
      const store = container.get<SqlXmlaStore>(SqlXmlaStore)
      store.init(config)

      return store
    }
  })
}

export { SqlXmlaStore, ISqlXmlaStoreConfiguration, factorySymbol }
