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
import {
  KpiComposer,
  type IKpiComposerConfiguration
} from './classes'
import { container } from 'org.eclipse.daanse.board.app.lib.core'

const symbol = Symbol.for('KpiComposer')

if (!container.isBound(KpiComposer)) {
  container.bind(KpiComposer).toSelf().inTransientScope()
}

if (!container.isBound(symbol)) {
  container.bind<Factory<KpiComposer>>(symbol).toFactory(() => {
    return config => {
      if (!KpiComposer.validateConfiguration(config)) {
        throw new Error(
          'Invalid KpiComposer configuration. Please provide a valid configuration.',
        )
      }

      const composer = container.get<KpiComposer>(KpiComposer)
      composer.init(config)

      return composer
    }
  })
}

export { KpiComposer, IKpiComposerConfiguration, symbol }
