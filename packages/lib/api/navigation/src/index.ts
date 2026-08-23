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
 * The contract and nothing else - the OSGi API bundle. Implementations
 * and consumers both depend on this package; neither depends on the other.
 */

import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
/*
 * Ecore-generated model classes live in the implementation package; the
 * types travel with the contract, the constructors do not. Moving the
 * models is a generator concern, noted as follow-up.
 */
import type { NavigationItem } from 'org.eclipse.daanse.board.app.lib.repository.navigation'

export type { NavigationItem }

export interface NavigationRegistry {
  registerNavigationItem(item: NavigationItem): boolean;
  unregisterNavigationItem(id: string): boolean;
  getNavigationItem(id?: string): NavigationItem;
  getAllNavigationItems(): NavigationItem;
  getAllNavigationItemsArray(): NavigationItem[];
}

export const NAVIGATION_REGISTRY_ID = serviceId<NavigationRegistry>('NavigationRegistry')
export const NAVIGATION_REGISTRY = Symbol.for(NAVIGATION_REGISTRY_ID)
