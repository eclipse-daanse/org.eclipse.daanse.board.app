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

import { symbol as OGCSTAToChartComposerIdentifier } from 'org.eclipse.daanse.board.app.lib.composer.ogcsta2chart'

import Preview from './Preview.vue'
import Settings from './Settings.vue'

const previewSymbol = Symbol.for('OGCSTAToChartComposerPreview')
const settingsSymbol = Symbol.for('OGCSTAToChartComposerSettings')

// Create factory function for OGCSTAToChartComposer

export function activate({ services }: ActivationContext) {
  services.register('OGCSTAToChartComposerPreview', Preview)
  services.register('OGCSTAToChartComposerSettings', Settings)

  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .registerDatasourceType('ogcsta2chart', {
      kind: 'composer',
      Store: OGCSTAToChartComposerIdentifier,
      Preview: previewSymbol,
      Settings: settingsSymbol,
    })
}

export function deactivate({ services }: ActivationContext) {
  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .unregisterDatasourceType('ogcsta2chart')
  services.unregister('OGCSTAToChartComposerPreview')
  services.unregister('OGCSTAToChartComposerSettings')
}
