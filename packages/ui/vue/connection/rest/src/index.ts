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
import { REST_CONNECTION_FACTORY } from 'org.eclipse.daanse.board.app.lib.connection.rest'
import {
  type ConnectionRepository,
  CONNECTION_REPOSITORY,
} from 'org.eclipse.daanse.board.app.lib.repository.connection'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

// Service id of lib.connection.rest; Symbol.for is global, so this literal
// denotes the same symbol the factory package exports.
const RestConnectionIdentifier = Symbol.for(REST_CONNECTION_FACTORY)
import Settings from './Settings.vue'

const settingsSymbol = Symbol.for('RestConnectionSettings')

export function activate({ services }: ActivationContext) {
  services.register('RestConnectionSettings', Settings)

  services
    .getRequired<ConnectionRepository>(CONNECTION_REPOSITORY)
    .registerConnectionType('rest', {
      Connection: RestConnectionIdentifier,
      Settings: settingsSymbol,
    })
}

export function deactivate({ services }: ActivationContext) {
  services
    .getRequired<ConnectionRepository>(CONNECTION_REPOSITORY)
    .unregisterConnectionType('rest')
  services.unregister('RestConnectionSettings')
}
