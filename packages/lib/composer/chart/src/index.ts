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
import {
  ChartComposer,
  type IChartComposerConfiguration
} from './classes'

const symbol = Symbol.for('ChartComposer')

if (!container.isBound(ChartComposer)) {
  container.bind(ChartComposer).toSelf().inTransientScope()
}

if (!container.isBound(symbol)) {
  container.bind<Factory<ChartComposer>>(symbol).toFactory(() => {
    return config => {
      if (!ChartComposer.validateConfiguration(config)) {
        throw new Error(
          'Invalid ChartComposer configuration. Please provide a valid configuration.',
        )
      }

      const composer = container.get<ChartComposer>(ChartComposer)
      composer.init(config)

      return composer
    }
  })
}


export { ChartComposer, IChartComposerConfiguration, symbol }
