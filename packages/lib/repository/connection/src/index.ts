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

import { container } from 'org.eclipse.daanse.board.app.lib.core'
import {
  ConnectionRepository,
  type ConnectionIdentifiers,
  type IConnection,
  type PubSubConnection,
  type PubSubEvents,
} from './classes'

const identifier = Symbol.for('ConnectionRepository')

if (!container.isBound(identifier)) {
  console.log('Binding ConnectionRepository to container', container)

  container
    .bind<ConnectionRepository>(identifier)
    .to(ConnectionRepository)
    .inSingletonScope()
}

export { type ConnectionRepository, identifier }
export type {
  ConnectionIdentifiers,
  IConnection,
  PubSubConnection,
  PubSubEvents,
}
