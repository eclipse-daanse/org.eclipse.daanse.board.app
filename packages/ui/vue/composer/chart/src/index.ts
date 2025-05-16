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
import { Container } from 'inversify'
import {
  DatasourceRepository,
  identifier,
} from 'org.eclipse.daanse.board.app.lib.repository.datasource'

import { symbol as ChartComposerIdentifier } from 'org.eclipse.daanse.board.app.lib.composer.chart'

import Preview from './Preview.vue'
import Settings from './Settings.vue'

const init = (container: Container) => {
  const datasourceRepository = container.get<DatasourceRepository>(identifier)

  const previewSymbol = Symbol.for('ChartPreview')
  const settingsSymbol = Symbol.for('ChartSettings')

  container.bind(previewSymbol).toConstantValue(Preview)
  container.bind(settingsSymbol).toConstantValue(Settings)

  datasourceRepository.registerDatasourceType('chart', {
    Store: ChartComposerIdentifier,
    Preview: previewSymbol,
    Settings: settingsSymbol,
  })
}

export { init }
