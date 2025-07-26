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
import { XmlaStore, type IXmlaStoreConfiguration } from './classes'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

const factorySymbol = Symbol.for('XmlaStoreFactory')

if (!container.isBound(XmlaStore)) {
  container.bind<XmlaStore>(XmlaStore).toSelf().inSingletonScope()
}

if (!container.isBound(factorySymbol)) {
  container.bind<Factory<XmlaStore>>(factorySymbol).toFactory(() => {
    return (config: IXmlaStoreConfiguration) => {
      if (!XmlaStore.validateConfiguration(config)) {
        throw new Error(
          'Invalid XmlaStore configuration. Please provide a valid configuration.',
        )
      }
      const store = container.get<XmlaStore>(XmlaStore)
      store.init(config)

      return store
    }
  })
}

export { XmlaStore, IXmlaStoreConfiguration, factorySymbol }
