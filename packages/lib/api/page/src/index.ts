/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
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
import type { Page } from 'org.eclipse.daanse.board.app.lib.model.workspace'

export type { Page }

/**
 * @deprecated The page is the model's `Page` now. The alias keeps the
 * existing import paths compiling; new code should say `Page`.
 */
export type PageI = Page

/**
 * A page as a caller describes one and as a stored board writes it.
 *
 * Plain data, because that is what the callers have: an object literal
 * when a board is created, and what came out of a file when one is loaded.
 * The registry turns it into the modelled page.
 */
export interface StoredPage {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  visibleInNavigation?: boolean;
  /**
   * Which registered layout arranges this board.
   *
   * The id, not the layout: a layout carries Vue components, which belong
   * to the bundle that registered them and are resolved through the
   * LayoutRepository. They used to be written into the stored board.
   */
  layoutId?: string;
  layoutSettings?: Record<string, any>;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundSize?: 'auto' | 'cover' | 'contain';
  backgroundPosition?: string;
  backgroundRepeat?: 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y';
}

export interface PageRegistryI {
    /** The pages by id, built from the workspace each time it is read. */
    pages: Record<string, Page>;
    defaultPageId: string | null;
    /** Adds a page to the workspace, or replaces the one with that id. */
    registerPage(page: StoredPage): Page;
    getPage(pageId: string): Page;
    getDefaultPage(): Page | null;
    setDefaultPage(pageId: string): void;
    unregisterPage(pageId: string): void;
    getAllPageIds(): string[];
    /** Writes changed values onto the page that carries this id. */
    updatePage(page: StoredPage): void;
    /** The pages the workspace holds, in order. */
    getPages(): Page[];
}

export const PAGE_REPOSITORY = serviceId<PageRegistryI>('PageRepository')
export const identifier = Symbol.for(PAGE_REPOSITORY)
