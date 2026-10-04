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
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import {
  type DatasourceRepository,
  DATASOURCE_REPOSITORY,
} from 'org.eclipse.daanse.board.app.lib.api.datasource'

// Service id of lib.composer.chart; Symbol.for is global, so this literal
// denotes the same symbol the factory package exports.
const ChartComposerIdentifier = Symbol.for('ChartComposer')
import Preview from './Preview.vue'
import Settings from './Settings.vue'

const previewSymbol = Symbol.for('ChartPreview')
const settingsSymbol = Symbol.for('ChartSettings')

export function activate({ services }: ActivationContext) {
  services.register('ChartPreview', Preview)
  services.register('ChartSettings', Settings)

  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .registerDatasourceType('chart', {
      icon: 'bar_chart',
      kind: 'composer',
      Store: ChartComposerIdentifier,
      Preview: previewSymbol,
      Settings: settingsSymbol,
    })
}

export function deactivate({ services }: ActivationContext) {
  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .unregisterDatasourceType('chart')
  services.unregister('ChartPreview')
  services.unregister('ChartSettings')
}
