/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import { factorySymbol } from 'org.eclipse.daanse.board.app.lib.datasource.ogcsta'
import {
  type DatasourceRepository,
  DATASOURCE_REPOSITORY,
} from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import MapPreview from './MapPreview.vue'
import OGCSTAStoreSettings from './OGCSTAStoreSettings.vue'

const symbolForOgcStaPreview = Symbol.for('OgcStaPreview')
const symbolForOgcStaSettings = Symbol.for('OgcStaSettings')

export function activate({ services }: ActivationContext) {
  services.register('OgcStaPreview', MapPreview)
  services.register('OgcStaSettings', OGCSTAStoreSettings)

  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .registerDatasourceType('ogcsta', {
      Store: factorySymbol,
      Preview: symbolForOgcStaPreview,
      Settings: symbolForOgcStaSettings,
    })
}

export function deactivate({ services }: ActivationContext) {
  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .unregisterDatasourceType('ogcsta')
  services.unregister('OgcStaPreview')
  services.unregister('OgcStaSettings')
}

export { symbolForOgcStaPreview, symbolForOgcStaSettings }
