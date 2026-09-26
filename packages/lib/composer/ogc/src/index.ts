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
  OgcFeatureComposer,
  type IOgcFeatureComposerConfiguration,
} from './classes'

/** Dienst-ID im Namensraum der ServiceRegistry; `symbol` ist das dazu passende Symbol. */
const OGC_FEATURE_COMPOSER = 'OgcFeatureComposer'

const symbol = Symbol.for(OGC_FEATURE_COMPOSER)

/**
 * Erzeugt eine Instanz aus einer Konfiguration.
 *
 * Wird ueber die Dienst-ID aufgeloest und mit der Konfiguration aufgerufen.
 * Jeder Aufruf liefert eine eigene Instanz - vorher ueber inTransientScope,
 * jetzt schlicht ueber `new`.
 */
function createOgcFeatureComposer(config: any) {
  if (!OgcFeatureComposer.validateConfiguration(config)) {
    throw new Error(
      'Invalid OgcFeatureComposer configuration. Please provide a valid configuration.',
    )
  }

  const composer = new OgcFeatureComposer()
  composer.init(config)

  return composer
}

export function activate({ services }: ActivationContext) {
  services.register(OGC_FEATURE_COMPOSER, createOgcFeatureComposer)
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(OGC_FEATURE_COMPOSER)
}

export {
  OgcFeatureComposer,
  IOgcFeatureComposerConfiguration,
  symbol,
  OGC_FEATURE_COMPOSER,
}
