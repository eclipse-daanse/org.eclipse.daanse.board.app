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
import type { Page, Widget as ModelWidget, LayoutItem } from 'org.eclipse.daanse.board.app.lib.model.workspace'

export type { Page, LayoutItem }

/**
 * A widget, with what its two opaque bags actually hold.
 *
 * The model calls `config` and `wrapperConfig` plain objects, because a
 * widget type models its own settings for itself (ui/vue/widget/*\/model)
 * and those are not contained here yet. What the application puts in them
 * is the same everywhere, and saying so here is what lets a caller read
 * `widget.config.settings` without reaching for a cast.
 */
export type Widget = ModelWidget & {
  config?: { datasourceId?: string; settings?: Record<string, any>; [key: string]: any }
  wrapperConfig?: Record<string, any>
}

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

    /*
     * What is on a board. Widgets and their placement belong to the page
     * that holds them, which is why they are here rather than in a registry
     * of their own - there never was one, only a Pinia store per page id
     * that nothing ever released.
     */

    /**
     * Adds a widget to a board, placed where it is told.
     *
     * Both halves in one call: a widget with no placement is on the board
     * and nowhere on it, which is the state the two Pinia stores could
     * reach whenever one of them was written and the other was not.
     */
    addWidget(pageId: string, widget: StoredWidget, placement: Partial<StoredLayoutItem>): Widget | undefined;
    /** Takes a widget off a board, and its placement with it. */
    removeWidget(pageId: string, widgetUid: string): void;
    /** Replaces everything on a board - what loading a stored one does. */
    setBoard(pageId: string, widgets: StoredWidget[], layout: StoredLayoutItem[]): void;
    /** Writes the widget's own settings back and re-resolves its source. */
    saveWidget(pageId: string, widget: StoredWidget): void;
}

/** A widget as a caller describes one and as a stored board writes it. */
export interface StoredWidget {
  uid: string;
  type: string;
  /**
   * The widget's own settings, including `datasourceId`.
   *
   * The model holds the source as a reference; the id here is what a
   * widget's settings read, and is projected from the reference on save.
   */
  config?: { datasourceId?: string; settings?: Record<string, any>; [key: string]: any };
  wrapperConfig?: Record<string, any>;
}

/** Where a widget sits, as a stored board writes it. */
export interface StoredLayoutItem {
  id: string;
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
  /** Which group it belongs to, if any - members move and are picked as one. */
  group?: string;
}

export const PAGE_REPOSITORY = serviceId<PageRegistryI>('PageRepository')
export const identifier = Symbol.for(PAGE_REPOSITORY)
