/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import type { Factory } from 'inversify'

import { OgcStaStore } from './classes/OgcSta'
import { FILTER, FILTERRESET, UPDATE_MQTT_SUBSCRIPTIONS, MQTT_UNSUBSCRIBE_ALL } from './interfaces/Constances'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

const factorySymbol = Symbol.for('OgcStaStoreFactory')

if (!container.isBound(OgcStaStore)) {
  container.bind<OgcStaStore>(OgcStaStore).toSelf().inTransientScope()
}

if (!container.isBound(factorySymbol)) {
  container.bind<Factory<OgcStaStore>>(factorySymbol).toFactory(() => {
    return config => {
      if (!OgcStaStore.validateConfiguration(config)) {
        throw new Error(
          'Invalid OgcStaStore configuration. Please provide a valid configuration.',
        )
      }
      const store = container.get<OgcStaStore>(OgcStaStore)
      store.init(config)

      return store
    }
  })
}

export { factorySymbol, FILTER, FILTERRESET, UPDATE_MQTT_SUBSCRIPTIONS, MQTT_UNSUBSCRIBE_ALL }
