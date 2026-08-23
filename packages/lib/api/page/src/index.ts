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
 * The page registry contract.
 *
 * The contract and nothing else - the OSGi API bundle. Implementations
 * and consumers both depend on this package; neither depends on the other.
 */

import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
import type { LayoutI } from 'org.eclipse.daanse.board.app.lib.api.layout.page'

export interface PageI {
    id: string;
    name: string;
    icon: string;
    description: string;
    visibleInNavigation: boolean;
    backgroundColor?: string;
    backgroundImage?: string;
    backgroundSize?: 'auto' | 'cover' | 'contain';
    backgroundPosition?: string;
    backgroundRepeat?: 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y';
    layoutSettings?: Record<string, any>;
    layout: LayoutI;
}

export interface PageRegistryI {
    pages: Record<string, PageI>;
    defaultPageId: string | null;
    registerPage(page: PageI): void;
    getPage(pageId: string): PageI;
    getDefaultPage(): PageI | null;
    setDefaultPage(pageId: string): void;
    unregisterPage(pageId: string): void;
    getAllPageIds(): string[];
    updatePage(page: PageI): void;
}

export const PAGE_REPOSITORY = serviceId<PageRegistryI>('PageRepository')
export const identifier = Symbol.for(PAGE_REPOSITORY)
