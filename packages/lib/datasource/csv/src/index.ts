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
import { CsvStore, type ICsvStoreConfiguration } from './classes'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

const factorySymbol = Symbol.for('CsvStoreFactory')

if (!container.isBound(CsvStore)) {
  container.bind(CsvStore).toSelf().inTransientScope()
}

if (!container.isBound(factorySymbol)) {
  container.bind<Factory<CsvStore>>(factorySymbol).toFactory(() => {
    return config => {
      if (!CsvStore.validateConfiguration(config)) {
        throw new Error(
          'Invalid CsvStore configuration. Please provide a valid configuration.',
        )
      }
      const store = container.get<CsvStore>(CsvStore)
      store.init(config)

      return store
    }
  })
}

export { type CsvStore, ICsvStoreConfiguration, factorySymbol }
