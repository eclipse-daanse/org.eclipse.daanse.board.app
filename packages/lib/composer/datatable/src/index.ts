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

import { DATASOURCE_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import {
  DataTableComposer,
  type IDataTableComposerConfiguration,
} from './classes'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
import type { DatasourceRepository } from 'org.eclipse.daanse.board.app.lib.api.datasource'

/** Typed service id - the name and the contract declared once, here. */
const DATA_TABLE_COMPOSER = serviceId<ReturnType<typeof createDataTableComposer>>('DataTableComposer')

const symbol = Symbol.for(DATA_TABLE_COMPOSER)

/**
 * Erzeugt eine Instanz aus einer Konfiguration.
 *
 * Wird ueber die Dienst-ID aufgeloest und mit der Konfiguration aufgerufen.
 * Jeder Aufruf liefert eine eigene Instanz - vorher ueber inTransientScope,
 * jetzt schlicht ueber `new`.
 */
/**
 * Factory factory: the repository is closed over once, at activation - the
 * config-taking function the registry hands out carries its dependency
 * instead of looking anything up.
 */
function createDataTableComposer(repository: DatasourceRepository) {
  return (config: any) => {
  if (!DataTableComposer.validateConfiguration(config)) {
    throw new Error(
      'Invalid DataTableComposer configuration. Please provide a valid configuration.',
    )
  }

  const composer = new DataTableComposer(repository)
  composer.init(config)

  return composer
  }
}

export function activate({ services }: ActivationContext) {
  services.register(DATA_TABLE_COMPOSER, createDataTableComposer(services.getRequired(DATASOURCE_REPOSITORY)))
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(DATA_TABLE_COMPOSER)
}

export {
  DataTableComposer,
  IDataTableComposerConfiguration,
  symbol,
  DATA_TABLE_COMPOSER,
}
