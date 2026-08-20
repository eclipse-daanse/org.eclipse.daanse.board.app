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

import { TinyEmitter } from 'tiny-emitter'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

/**
 * The system bundle: owner of the application-wide base services that no
 * feature package should have to create as a side effect.
 *
 * Today that is one service - the event bus. It used to be constructed and
 * bound inside lib.core's import, an anonymous side effect nobody's manifest
 * accounted for; now its provider is named, and every module that lists
 * TINY_EMITTER in requiresService is wired against this one.
 *
 * Deliberately NOT here: the Vue app instance ('App'). It is created by the
 * host launcher - the composition root - and registered there; a package
 * cannot own an instance only the host can construct.
 */

export function activate({ services, log }: ActivationContext) {
  services.register('TINY_EMITTER', new TinyEmitter())
  log.info('system services ready: TINY_EMITTER')
}

/**
 * No deactivate: the event bus carries subscriptions from every part of the
 * application; withdrawing it while consumers live would be a sham teardown.
 */
