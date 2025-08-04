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
  DataTableComposer,
  type IDataTableComposerConfiguration
} from './classes'
import { container } from 'org.eclipse.daanse.board.app.lib.core';

const symbol = Symbol.for('DataTableComposer')

if (!container.isBound(DataTableComposer)) {
  container.bind(DataTableComposer).toSelf().inTransientScope()
}

if (!container.isBound(symbol)) {
  container.bind<Factory<DataTableComposer>>(symbol).toFactory(() => {
    return config => {
      if (!DataTableComposer.validateConfiguration(config)) {
        throw new Error(
          'Invalid DataTableComposer configuration. Please provide a valid configuration.',
        )
      }

      const composer = container.get<DataTableComposer>(DataTableComposer)
      composer.init(config)

      return composer
    }
  });
}

export { DataTableComposer, IDataTableComposerConfiguration, symbol }
