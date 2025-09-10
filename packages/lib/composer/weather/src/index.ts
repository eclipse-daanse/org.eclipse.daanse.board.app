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
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { WeatherComposer } from './classes'

export * from './classes/index'
export * from './interfaces/WeatherData'

// Export symbol for dependency injection
export const symbol = Symbol.for('WeatherComposer')

if (!container.isBound(WeatherComposer)) {
  container.bind(WeatherComposer).toSelf().inTransientScope()
}

if (!container.isBound(symbol)) {
  container.bind<Factory<WeatherComposer>>(symbol).toFactory(() => {
    return config => {
      if (!WeatherComposer.validateConfiguration(config)) {
        throw new Error(
          'Invalid WeatherComposer configuration. Please provide a valid configuration.',
        )
      }

      const composer = container.get<WeatherComposer>(WeatherComposer)
      composer.init(config)

      return composer
    }
  })
}