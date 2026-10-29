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

import type { ConnectionRepository } from 'org.eclipse.daanse.board.app.lib.api.connection'
import type { DatasourceRepository } from 'org.eclipse.daanse.board.app.lib.api.datasource'

/**
 * What an empty workspace starts with.
 *
 * It used to be a hard-coded entry in the connections store, which is
 * both the wrong layer for it and the reason it was never registered with
 * anything. Deciding what an application opens with is the application's
 * business, so it is the shell's - and only when nothing has been loaded,
 * so a stored board is never overwritten.
 *
 * A function of its own so that a test runs the startup the shell runs,
 * not a copy of it.
 */
export function seedEmptyWorkspace(
  connectionRepository: ConnectionRepository,
  datasourceRepository: DatasourceRepository,
): void {
  if (connectionRepository.getConnections().length > 0) return

  /*
   * Created without a type, then filled in, then saved once. Creating
   * with the type would build the live object straight away - under the
   * generated uid, and from a configuration that is not finished yet.
   * A source would be rejected outright for naming no connection.
   */
  const connection = connectionRepository.createConnection('')
  connection.uid = 'test'
  connection.name = 'Test Connection 01'
  connection.type = 'rest'
  connection.config = { url: 'https://jsonplaceholder.typicode.com/' }
  connectionRepository.saveConnection(connection)

  const source = datasourceRepository.createDatasource('')
  source.uid = 'test_ds'
  source.name = 'Test DataSource 01'
  source.type = 'rest'
  source.connection = connection
  source.config = { resourceUrl: 'posts' }
  datasourceRepository.saveDatasource(source)
}
