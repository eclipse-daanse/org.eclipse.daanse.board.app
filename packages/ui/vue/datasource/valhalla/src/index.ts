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
import {
  type DatasourceRepository,
  DATASOURCE_REPOSITORY,
} from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { factorySymbol as ValhallaDatasourceIdentifier } from 'org.eclipse.daanse.board.app.lib.datasource.valhalla'

import Preview from './Preview.vue'
import Settings from './Settings.vue'

const previewSymbol = Symbol.for('ValhallaPreview')
const settingsSymbol = Symbol.for('ValhallaSettings')

export function activate({ services }: ActivationContext) {
  services.register('ValhallaPreview', Preview)
  services.register('ValhallaSettings', Settings)

  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .registerDatasourceType('valhalla', {
      Store: ValhallaDatasourceIdentifier,
      Preview: previewSymbol,
      Settings: settingsSymbol,
    })
}

export function deactivate({ services }: ActivationContext) {
  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .unregisterDatasourceType('valhalla')
  services.unregister('ValhallaPreview')
  services.unregister('ValhallaSettings')
}
