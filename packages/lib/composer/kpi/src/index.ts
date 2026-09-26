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

import { KpiComposer, type IKpiComposerConfiguration } from './classes'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

/** Dienst-ID im Namensraum der ServiceRegistry; `symbol` ist das dazu passende Symbol. */
const KPI_COMPOSER = 'KpiComposer'

const symbol = Symbol.for(KPI_COMPOSER)

/**
 * Erzeugt eine Instanz aus einer Konfiguration.
 *
 * Wird ueber die Dienst-ID aufgeloest und mit der Konfiguration aufgerufen.
 * Jeder Aufruf liefert eine eigene Instanz - vorher ueber inTransientScope,
 * jetzt schlicht ueber `new`.
 */
function createKpiComposer(config: any) {
  if (!KpiComposer.validateConfiguration(config)) {
    throw new Error(
      'Invalid KpiComposer configuration. Please provide a valid configuration.',
    )
  }

  const composer = new KpiComposer()
  composer.init(config)

  return composer
}

export function activate({ services }: ActivationContext) {
  services.register(KPI_COMPOSER, createKpiComposer)
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(KPI_COMPOSER)
}

export { KpiComposer, IKpiComposerConfiguration, symbol, KPI_COMPOSER }
