/*
  Copyright (c) 2025 Contributors to the Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena
*/

import 'reflect-metadata'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { NavigationRegistryImpl } from './NavigationRegistryImpl'
import { NavigationRegistry } from './gen/NavigationRegistry'

export { NavigationItem } from './gen/NavigationItem'
export { NavigationRegistry } from './gen/NavigationRegistry'
export { NavigationRegistryImpl } from './NavigationRegistryImpl'

export const NAVIGATION_REGISTRY = Symbol.for('NavigationRegistry')

// Bind NavigationRegistry to container
if (!container.isBound(NAVIGATION_REGISTRY)) {
  container.bind<NavigationRegistry>(NAVIGATION_REGISTRY).to(NavigationRegistryImpl).inSingletonScope()
}

export const identifier = NAVIGATION_REGISTRY
