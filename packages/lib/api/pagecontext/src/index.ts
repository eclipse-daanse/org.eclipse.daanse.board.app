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
 * The page context contract.
 *
 * The contract and nothing else - the OSGi API bundle. Implementations
 * and consumers both depend on this package; neither depends on the other.
 */

import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'

export interface PageContextServiceI {
    getCurrentPageId(): string | undefined;
    setProvider(provider: PageContextProviderI): void;
}

export interface PageContextProviderI {
    getCurrentPageId(): string | undefined;
}

export const PAGE_CONTEXT = serviceId<PageContextServiceI>('PageContext')
export const identifier = Symbol.for(PAGE_CONTEXT)
