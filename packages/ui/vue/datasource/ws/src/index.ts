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

import { symbol as WSDatasourceIdentifier } from 'org.eclipse.daanse.board.app.lib.datasource.websocket'

import Preview from './Preview.vue'
import Settings from './Settings.vue'

const init = (container: Container) => {
  const datasourceRepository = container.get<DatasourceRepository>(identifier)

  const previewSymbol = Symbol.for('WsPreview')
  const settingsSymbol = Symbol.for('WsSettings')

  container.bind(previewSymbol).toConstantValue(Preview)
  container.bind(settingsSymbol).toConstantValue(Settings)

  datasourceRepository.registerDatasourceType('ws', {
    Store: WSDatasourceIdentifier,
    Preview: previewSymbol,
    Settings: settingsSymbol,
  })
}

export { init }
