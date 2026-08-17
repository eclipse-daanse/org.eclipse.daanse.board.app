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
import {
  type ConnectionRepository,
  CONNECTION_REPOSITORY,
} from 'org.eclipse.daanse.board.app.lib.repository.connection'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

import { factorySymbol as GraphqlConnectionIdentifier } from 'org.eclipse.daanse.board.app.lib.connection.graphql'

import Settings from './Settings.vue'

const settingsSymbol = Symbol.for('GraphqlConnectionSettings')

export function activate({ services }: ActivationContext) {
  services.register('GraphqlConnectionSettings', Settings)

  services
    .getRequired<ConnectionRepository>(CONNECTION_REPOSITORY)
    .registerConnectionType('graphql', {
      Connection: GraphqlConnectionIdentifier,
      Settings: settingsSymbol,
    })
}

export function deactivate({ services }: ActivationContext) {
  services
    .getRequired<ConnectionRepository>(CONNECTION_REPOSITORY)
    .unregisterConnectionType('graphql')
  services.unregister('GraphqlConnectionSettings')
}
