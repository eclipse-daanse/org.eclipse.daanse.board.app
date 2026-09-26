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

import type { ServiceRegistry, ModuleLogger } from '@eclipse-daanse/tsm'

/**
 * Context a package receives on activation and deactivation.
 *
 * The fields are a subset of tsm's `ModuleContext`, so a package written
 * against this contract can later be activated by tsm unchanged.
 */
export interface ActivationContext {
  /** Register and resolve services */
  readonly services: ServiceRegistry
  /** Logger, prefixed with the activated module's id */
  readonly log: ModuleLogger
}

/**
 * Contract an activatable package fulfils.
 *
 * A package exports `activate` and - if it can withdraw its registrations -
 * `deactivate`. Importing the package itself must not have any effect.
 */
export interface ActivatableModule {
  activate(context: ActivationContext): void | Promise<void>
  deactivate?(context: ActivationContext): void | Promise<void>
}
