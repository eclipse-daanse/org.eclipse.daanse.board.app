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
import type { ActivationContext, ActivatableModule } from './api/ActivationContext'

/**
 * Well-known symbols, kept for Vue-side injection: the host's DI bridge
 * provides every service under Symbol.for(id), and these constants are those
 * symbols under a stable name.
 */
const identifiers = {
  TINY_EMITTER: Symbol.for('TINY_EMITTER'),
}

/**
 * The application's ServiceRegistry - tsm's DefaultServiceRegistry, nothing
 * else. The Inversify container and the transitional bridge that mirrored
 * registrations into it are gone: the migration they carried is complete,
 * and they died the way they were designed to - by becoming unused.
 */
const services = new DefaultServiceRegistry()

export {
  identifiers,
  services,
  type ActivationContext,
  type ActivatableModule,
}
