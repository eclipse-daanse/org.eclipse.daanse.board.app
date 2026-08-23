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
// Service id of lib.datasource.websocket; Symbol.for is global, so this literal
// denotes the same symbol the factory package exports.
const WSDatasourceIdentifier = Symbol.for('WSStoreFactory')
import Preview from './Preview.vue'
import Settings from './Settings.vue'

const previewSymbol = Symbol.for('WsPreview')
const settingsSymbol = Symbol.for('WsSettings')

export function activate({ services }: ActivationContext) {
  services.register('WsPreview', Preview)
  services.register('WsSettings', Settings)

  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .registerDatasourceType('ws', {
      Store: WSDatasourceIdentifier,
      Preview: previewSymbol,
      Settings: settingsSymbol,
    })
}

export function deactivate({ services }: ActivationContext) {
  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .unregisterDatasourceType('ws')
  services.unregister('WsPreview')
  services.unregister('WsSettings')
}
