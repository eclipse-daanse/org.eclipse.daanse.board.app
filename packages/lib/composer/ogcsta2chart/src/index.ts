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
import { OGCSTAToChartComposer } from './classes'
import type { EventActionsRegistry } from 'org.eclipse.daanse.board.app.lib.events'
import ecoreModelContent from '../model/OGCSTAToChartActions.ecore?raw'

export * from './classes/index'
export * from './interfaces/OGCSTAToChartData'
export * from './interfaces/OGCSTAToChartComposerInterface'

// Export symbol for dependency injection
export const symbol = Symbol.for('OGCSTAToChartComposer')

// Widget type identifier - used for action registration and instance registration
export const WIDGET_TYPE = 'OGCSTAToChartComposer'

/** Dienst-ID im Namensraum der ServiceRegistry; `symbol` ist das dazu passende Symbol. */
export const OGCSTA_TO_CHART_COMPOSER = 'OGCSTAToChartComposer'

/**
 * Meldet die Composer-Fabrik an und traegt die Aktionen aus dem Ecore-Modell
 * ein.
 *
 * Beides haengt an der EventActionsRegistry. Vorher wurde die mit
 * `container.isBound` abgefragt und bei Abwesenheit stillschweigend
 * uebersprungen - die Aktionen fehlten dann in der EventManager-Oberflaeche,
 * ohne dass etwas darauf hinwies. Jetzt steht die Registry in `requires`.
 */
export function activate({ services, log }: ActivationContext) {
  const actionsRegistry = services.getRequired<EventActionsRegistry>('EventActionsRegistry')

  services.register(OGCSTA_TO_CHART_COMPOSER, (config: any) => {
    if (!OGCSTAToChartComposer.validateConfiguration(config)) {
      throw new Error(
        'Invalid OGCSTAToChartComposer configuration. Please provide a valid configuration.',
      )
    }

    const composer = new OGCSTAToChartComposer(
      services.getRequired('DatasourceRepository'),
      actionsRegistry,
    )
    composer.init(config)

    // Vorschau-Instanzen bleiben unangemeldet, sonst verdraengen sie die echte
    if (config._isTemporaryPreview) {
      composer.setInstanceId(`preview-${config.uid || config.name}-${Date.now()}`)
      return composer
    }

    const instanceId = config.uid || config.name || `composer-${Date.now()}`
    composer.setInstanceId(instanceId)
    actionsRegistry.registerInstance(instanceId, composer, WIDGET_TYPE)

    return composer
  })

  actionsRegistry.registerActionsFromEcoreString(
    WIDGET_TYPE,
    ecoreModelContent,
    'system',
    'OGCSTAToChartActions.ecore',
  )
  log.info(`Aktionen fuer ${WIDGET_TYPE} aus dem Ecore-Modell eingetragen`)
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(OGCSTA_TO_CHART_COMPOSER)
}
