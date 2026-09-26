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
} from 'org.eclipse.daanse.board.app.lib.repository.datasource'

import { symbol as WeatherComposerIdentifier } from 'org.eclipse.daanse.board.app.lib.composer.weather'

import Preview from './Preview.vue'
import Settings from './Settings.vue'

const previewSymbol = Symbol.for('WeatherComposerPreview')
const settingsSymbol = Symbol.for('WeatherComposerSettings')

// Create factory function for WeatherComposer

export function activate({ services }: ActivationContext) {
  services.register('WeatherComposerPreview', Preview)
  services.register('WeatherComposerSettings', Settings)

  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .registerDatasourceType('weather', {
      Store: WeatherComposerIdentifier,
      Preview: previewSymbol,
      Settings: settingsSymbol,
    })
}

export function deactivate({ services }: ActivationContext) {
  services
    .getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
    .unregisterDatasourceType('weather')
  services.unregister('WeatherComposerPreview')
  services.unregister('WeatherComposerSettings')
}
