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
/*
 * The model file itself, not the package around it: a value import from
 * the library would pull its runtime - and lib.core with it - into this
 * bundle, which has to share that, not carry a copy.
 */
import MODEL_ECORE from 'org.eclipse.daanse.board.app.lib.connection.rss/model/rssConnectionModel.ecore?raw'
import {
  type ConnectionRepository,
  CONNECTION_REPOSITORY,
} from 'org.eclipse.daanse.board.app.lib.api.connection'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

// Service id of lib.connection.rss; Symbol.for is global, so this literal
// denotes the same symbol the factory package exports.
const RssConnectionIdentifier = Symbol.for('RssConnectionFactory')
import Settings from './Settings.vue'

const settingsSymbol = Symbol.for('RssConnectionSettings')

export function activate({ services }: ActivationContext) {
  services.register('RssConnectionSettings', Settings)

  services
    .getRequired<ConnectionRepository>(CONNECTION_REPOSITORY)
    .registerConnectionType('rss', {
      icon: 'rss_feed',
      Model: MODEL_ECORE,
      Connection: RssConnectionIdentifier,
      Settings: settingsSymbol,
    })
}

export function deactivate({ services }: ActivationContext) {
  services
    .getRequired<ConnectionRepository>(CONNECTION_REPOSITORY)
    .unregisterConnectionType('rss')
  services.unregister('RssConnectionSettings')
}
