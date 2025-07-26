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
import { KpiStore, type IKpiStoreConfiguration } from './classes'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

const factorySymbol = Symbol.for('KpiStoreFactory')

if (!container.isBound(KpiStore)) {
  container.bind<KpiStore>(KpiStore).toSelf().inTransientScope()
}

if (!container.isBound(factorySymbol)) {
  container.bind<Factory<KpiStore>>(factorySymbol).toFactory(() => {
    return (config: IKpiStoreConfiguration) => {
      if (!KpiStore.validateConfiguration(config)) {
        throw new Error(
          'Invalid KpiStore configuration. Please provide a valid configuration.',
        )
      }
      const store = container.get<KpiStore>(KpiStore)
      store.init(config)

      return store
    }
  })
}

export { KpiStore, IKpiStoreConfiguration, factorySymbol }
