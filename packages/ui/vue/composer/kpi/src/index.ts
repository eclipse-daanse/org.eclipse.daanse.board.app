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

// Service id of lib.composer.kpi; Symbol.for is global, so this literal
// denotes the same symbol the factory package exports.
const KpiComposerIdentifier = Symbol.for('KpiComposer')
import Preview from './Preview.vue'
import Settings from './Settings.vue'

const previewSymbol = Symbol.for('KpiComposerPreview')
const settingsSymbol = Symbol.for('KpiComposerSettings')

export function activate({ services }: ActivationContext) {
  services.register('KpiComposerPreview', Preview)
  services.register('KpiComposerSettings', Settings)

  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .registerDatasourceType('KpiComposer', {
      icon: 'speed',
      kind: 'composer',
      Store: KpiComposerIdentifier,
      Preview: previewSymbol,
      Settings: settingsSymbol,
    })
}

export function deactivate({ services }: ActivationContext) {
  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .unregisterDatasourceType('KpiComposer')
  services.unregister('KpiComposerPreview')
  services.unregister('KpiComposerSettings')
}
