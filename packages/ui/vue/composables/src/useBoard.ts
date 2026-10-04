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
 * What is on one board: its widgets and where they sit.
 *
 * Both belong to the page that holds them, and this is the way to them.
 * They used to live in two Pinia stores created per page id - `defineStore`
 * ran on every call, a store was made for every board ever visited, and
 * none was ever released.
 *
 * Reading and changing are deliberately separate. The lists handed out are
 * plain arrays that re-render when the model changes; the objects in them
 * are the modelled ones, so moving a widget is `item.x = …` and notifies by
 * itself. Adding and removing go through the registry, because a widget and
 * its placement have to arrive and leave together.
 */

import { computed, inject, toValue, type ComputedRef, type MaybeRefOrGetter } from 'vue'
import {
  identifier as PAGE_REPOSITORY,
  type LayoutItem,
  type Page,
  type PageRegistryI,
  type StoredLayoutItem,
  type StoredWidget,
  type Widget,
} from 'org.eclipse.daanse.board.app.lib.api.page'
import { useEList, useEObject } from './useEmf'

export interface Board {
  /** The page itself, or nothing while the route points at none. */
  page: ComputedRef<Page | undefined>
  /** What is on it, in order. */
  widgets: ComputedRef<Widget[]>
  /** Where each of them sits. */
  layout: ComputedRef<LayoutItem[]>
  /** Adds a widget and its placement, and hands back its uid. */
  addWidget(widget: StoredWidget, placement: Partial<StoredLayoutItem>): string
  /** Takes a widget off the board, and its placement with it. */
  removeWidget(widgetUid: string): void
  /** Writes a widget's settings back. */
  saveWidget(widget: StoredWidget): void
  /** Replaces everything on the board - loading one, or emptying it. */
  setBoard(widgets: StoredWidget[], layout: StoredLayoutItem[]): void
  /** Takes everything off it. */
  clear(): void
}

export function useBoard(pageId: MaybeRefOrGetter<string>): Board {
  const pages = inject<PageRegistryI>(PAGE_REPOSITORY)!

  const id = () => toValue(pageId) ?? ''
  const held = useEObject(() => (id() ? pages.getPage(id()) : undefined))
  const page = computed(() => held.value)

  const widgets = useEList(page, (p) => p.widgets) as unknown as ComputedRef<Widget[]>
  const layout = useEList(page, (p) => p.layout)

  return {
    page,
    widgets,
    layout,

    addWidget(widget, placement) {
      const uid = widget.uid || 'li_' + Math.random().toString(36).substring(7)
      pages.addWidget(id(), { ...widget, uid }, placement)
      return uid
    },

    removeWidget(widgetUid) {
      pages.removeWidget(id(), widgetUid)
    },

    saveWidget(widget) {
      pages.saveWidget(id(), widget)
    },

    setBoard(widgets, layout) {
      pages.setBoard(id(), widgets, layout)
    },

    clear() {
      pages.setBoard(id(), [], [])
    },
  }
}
