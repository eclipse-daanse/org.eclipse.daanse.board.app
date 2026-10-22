/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
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

import { DefaultServiceRegistry } from '@eclipse-daanse/tsm'
import { TinyEmitter } from 'tiny-emitter'
import { TINY_EMITTER, type ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { CONNECTION_REPOSITORY, type ConnectionRepository } from 'org.eclipse.daanse.board.app.lib.api.connection'
import { DATASOURCE_REPOSITORY, type DatasourceRepository } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import * as logger from 'org.eclipse.daanse.board.app.lib.logger'
import * as events from 'org.eclipse.daanse.board.app.lib.events'
import * as variables from 'org.eclipse.daanse.board.app.lib.variables'
import * as variableRepository from 'org.eclipse.daanse.board.app.lib.repository.variable'
import * as connectionRepository from 'org.eclipse.daanse.board.app.lib.repository.connection'
import * as datasourceRepository from 'org.eclipse.daanse.board.app.lib.repository.datasource'

/**
 * A package a test wires in: importing one registers nothing, `activate`
 * does. That is the whole point of the move to tsm, and it is why a test
 * has to name what it wires rather than rely on an import's side effect.
 */
export interface TestableModule {
  activate(context: ActivationContext): void
}

/**
 * A registry holding the repositories, the variable factories, and whatever
 * else the test names.
 *
 * The order is fixed: the repositories and the variable support come first,
 * because a connection or a store resolves through them while it is being
 * built. A store that was handed a registry without them fails inside
 * `registerDatasource`, far from the line that forgot it.
 */
export function wireRepositories(...modules: TestableModule[]) {
  const services = new DefaultServiceRegistry()
  /* A module writes to its log while it activates; nothing reads it here. */
  const silent = { debug() {}, info() {}, warn() {}, error() {} }
  const context = { services, log: silent } as unknown as ActivationContext

  /*
   * The event bus is a dependency of the variable factories and of every
   * computed store parameter, which take it without complaint when it is
   * missing and then quietly never fire.
   */
  services.register(TINY_EMITTER, new TinyEmitter())

  for (const module of [
    logger,
    events,
    variables,
    variableRepository,
    connectionRepository,
    datasourceRepository,
    ...modules,
  ]) {
    module.activate(context)
  }

  return {
    services,
    connectionRepository: services.getRequired(CONNECTION_REPOSITORY) as ConnectionRepository,
    datasourceRepository: services.getRequired(DATASOURCE_REPOSITORY) as DatasourceRepository,
  }
}
