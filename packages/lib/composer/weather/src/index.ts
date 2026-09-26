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
import { WeatherComposer } from './classes'

export * from './classes/index'
export * from './interfaces/WeatherData'

// Export symbol for dependency injection
/** Dienst-ID im Namensraum der ServiceRegistry; `symbol` ist das dazu passende Symbol. */
export const WEATHER_COMPOSER = 'WeatherComposer'

export const symbol = Symbol.for(WEATHER_COMPOSER)

/**
 * Erzeugt eine Instanz aus einer Konfiguration.
 *
 * Wird ueber die Dienst-ID aufgeloest und mit der Konfiguration aufgerufen.
 * Jeder Aufruf liefert eine eigene Instanz - vorher ueber inTransientScope,
 * jetzt schlicht ueber `new`.
 */
function createWeatherComposer(config: any) {
  if (!WeatherComposer.validateConfiguration(config)) {
    throw new Error(
      'Invalid WeatherComposer configuration. Please provide a valid configuration.',
    )
  }

  const composer = new WeatherComposer()
  composer.init(config)

  return composer
}

export function activate({ services }: ActivationContext) {
  services.register(WEATHER_COMPOSER, createWeatherComposer)
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(WEATHER_COMPOSER)
}
