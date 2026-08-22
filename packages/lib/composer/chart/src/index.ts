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

import { DATASOURCE_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
import type { DatasourceRepository } from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import { ChartComposer, type IChartComposerConfiguration } from './classes'

/** Typed service id - the name and the contract declared once, here. */
const CHART_COMPOSER = serviceId<ReturnType<typeof createChartComposer>>('ChartComposer')

const symbol = Symbol.for(CHART_COMPOSER)

/**
 * Erzeugt einen Composer aus einer Konfiguration.
 *
 * Wird vom DatasourceRepository als `Store` aufgelöst und mit der
 * Konfiguration aufgerufen. Jeder Aufruf liefert eine eigene Instanz —
 * vorher über inTransientScope, jetzt schlicht über `new`.
 */
/**
 * Factory factory: the repository is closed over once, at activation - the
 * config-taking function the registry hands out carries its dependency
 * instead of looking anything up.
 */
function createChartComposer(repository: DatasourceRepository) {
  return (config: IChartComposerConfiguration): ChartComposer => {
  if (!ChartComposer.validateConfiguration(config)) {
    throw new Error(
      'Invalid ChartComposer configuration. Please provide a valid configuration.',
    )
  }

  const composer = new ChartComposer(repository)
  composer.init(config)
  return composer
  }
}

export function activate({ services }: ActivationContext) {
  services.register(CHART_COMPOSER, createChartComposer(services.getRequired(DATASOURCE_REPOSITORY)))
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(CHART_COMPOSER)
}

export { ChartComposer, IChartComposerConfiguration, symbol, CHART_COMPOSER }
