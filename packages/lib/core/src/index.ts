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

import { DefaultServiceRegistry, serviceId, type ModuleLoader } from '@eclipse-daanse/tsm'
import type { TinyEmitter } from 'tiny-emitter'
import type { ActivationContext, ActivatableModule } from './api/ActivationContext'

/**
 * Well-known symbols, kept for Vue-side injection: the host's DI bridge
 * provides every service under Symbol.for(id), and these constants are those
 * symbols under a stable name.
 */
const identifiers = {
  TINY_EMITTER: Symbol.for('TINY_EMITTER'),
}

/*
 * Typed service ids for what the framework side of the application offers.
 * A ServiceId<T> is the id string carrying its contract as a phantom type:
 * the name and the type are declared once, here, and a consumer that writes
 * `services.getRequired(TINY_EMITTER)` gets the right type or a compile
 * error - the tsm answer to OSGi naming a service by its interface.
 *
 * Ids for services owned by other packages live next to their contracts in
 * those packages; these are only the ones the launcher itself registers.
 */

/** The application-wide event bus, registered by platform.system. */
const TINY_EMITTER = serviceId<TinyEmitter>('TINY_EMITTER')

/** The framework publishing itself, registered by the launcher. */
const MODULE_LOADER = serviceId<ModuleLoader>('ModuleLoader')

/** The mounted Vue application, registered by the shell. */
const APP = serviceId<import('vue').App>('App')

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
  serviceId,
  TINY_EMITTER,
  MODULE_LOADER,
  APP,
  type ActivationContext,
  type ActivatableModule,
}
export type { ServiceId, ServiceOf } from '@eclipse-daanse/tsm'
