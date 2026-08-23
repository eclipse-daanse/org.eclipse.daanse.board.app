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
} from 'org.eclipse.daanse.board.app.lib.api.datasource'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { factorySymbol as XmlaDatasourceIndentifier } from 'org.eclipse.daanse.board.app.lib.datasource.xmla'

import Preview from './Preview.vue'
import Settings from './Settings.vue'

const previewSymbol = Symbol.for('XmlaPreview')
const settingsSymbol = Symbol.for('XmlaSettings')

export function activate({ services }: ActivationContext) {
  services.register('XmlaPreview', Preview)
  services.register('XmlaSettings', Settings)

  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .registerDatasourceType('xmla', {
      Store: XmlaDatasourceIndentifier,
      Preview: previewSymbol,
      Settings: settingsSymbol,
    })
}

export function deactivate({ services }: ActivationContext) {
  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .unregisterDatasourceType('xmla')
  services.unregister('XmlaPreview')
  services.unregister('XmlaSettings')
}
