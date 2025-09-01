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
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import {
  DatasourceRepository,
  identifier,
} from 'org.eclipse.daanse.board.app.lib.repository.datasource'

import { symbol as KpiComposerIdentifier } from 'org.eclipse.daanse.board.app.lib.composer.kpi'

import Preview from './Preview.vue'
import Settings from './Settings.vue'


const datasourceRepository = container.get<DatasourceRepository>(identifier)

const previewSymbol = Symbol.for('KpiComposerPreview')
const settingsSymbol = Symbol.for('KpiComposerSettings')

container.bind(previewSymbol).toConstantValue(Preview)
container.bind(settingsSymbol).toConstantValue(Settings)

datasourceRepository.registerDatasourceType('KpiComposer', {
  Store: KpiComposerIdentifier,
  Preview: previewSymbol,
  Settings: settingsSymbol,
})
