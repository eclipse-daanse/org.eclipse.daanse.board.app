/*
  Copyright (c) 2025 Contributors to the Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena
*/

import 'reflect-metadata'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { NavigationRegistryImpl } from './NavigationRegistryImpl'
import { NavigationRegistry } from './gen/NavigationRegistry'

export { NavigationItem } from './gen/NavigationItem'
export { NavigationRegistry } from './gen/NavigationRegistry'
export { NavigationRegistryImpl } from './NavigationRegistryImpl'

/** Dienst-ID im Namensraum der ServiceRegistry; `NAVIGATION_REGISTRY` ist das dazu passende Symbol. */
export const NAVIGATION_REGISTRY_ID = 'NavigationRegistry'

export const NAVIGATION_REGISTRY = Symbol.for(NAVIGATION_REGISTRY_ID)

/** Singleton ohne eigene Abhaengigkeiten - siehe lib.repository.connection. */
export function activate({ services }: ActivationContext) {
  services.register(NAVIGATION_REGISTRY_ID, new NavigationRegistryImpl())
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(NAVIGATION_REGISTRY_ID)
}

export const identifier = NAVIGATION_REGISTRY
