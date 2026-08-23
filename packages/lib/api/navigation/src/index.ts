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

/**
 * The navigation contract.
 *
 * The contract and nothing else - the OSGi API bundle. The Ecore model
 * lives here too (model/, generated into src/gen): model classes are part
 * of a contract the way DTOs are part of an OSGi API package. The
 * implementation extends NavigationRegistry and provides the service.
 */

import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
import { NavigationRegistry } from './gen/NavigationRegistry'

export { NavigationRegistry } from './gen/NavigationRegistry'
export { NavigationItem } from './gen/NavigationItem'

/** Typed service id - the name and the contract declared once, here. */
export const NAVIGATION_REGISTRY_ID = serviceId<NavigationRegistry>('NavigationRegistry')

/** The matching symbol for Vue-side injection (Symbol.for of the id). */
export const NAVIGATION_REGISTRY = Symbol.for(NAVIGATION_REGISTRY_ID)
