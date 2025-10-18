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
import { OGCSTAToChartComposer } from './classes'

export * from './classes/index'
export * from './interfaces/OGCSTAToChartData'

// Export symbol for dependency injection
export const symbol = Symbol.for('OGCSTAToChartComposer')

if (!container.isBound(OGCSTAToChartComposer)) {
  container.bind(OGCSTAToChartComposer).toSelf().inTransientScope()
}

if (!container.isBound(symbol)) {
  container.bind<Factory<OGCSTAToChartComposer>>(symbol).toFactory(() => {
    return config => {
      if (!OGCSTAToChartComposer.validateConfiguration(config)) {
        throw new Error(
          'Invalid OGCSTAToChartComposer configuration. Please provide a valid configuration.',
        )
      }

      const composer = container.get<OGCSTAToChartComposer>(OGCSTAToChartComposer)
      composer.init(config)

      return composer
    }
  })
}