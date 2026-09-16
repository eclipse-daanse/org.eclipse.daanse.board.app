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

import type {
  PageRegistryI,
  StoredPage,
  StoredWidget,
  StoredLayoutItem,
} from 'org.eclipse.daanse.board.app.lib.api.page'
import {
  DATASOURCE_REPOSITORY,
  type DatasourceRepository,
} from 'org.eclipse.daanse.board.app.lib.api.datasource'
import {
  WORKSPACE,
  BoardImpl,
  PageImpl,
  WidgetImpl,
  LayoutItemImpl,
  type LayoutItem,
  type Board,
  type Page,
  type Widget,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'

/** The slice of the service registry this needs. */
export interface IdentifierResolver {
  getRequired<T>(id: string): T
}

/**
 * The pages a workspace holds.
 *
 * They live in the model rather than in a record of their own, and changes
 * are announced the way every other modelled change is - through the
 * object's own notification. This class used to extend SubscribeNotifyImpl
 * and publish three event names of its own, which was a second
 * notification mechanism beside Vue's and EMF's for no reason anyone could
 * name.
 */
export class PageRegistryImpl implements PageRegistryI {
  constructor(private readonly resolver: IdentifierResolver) {}

  /*
   * Resolved on first use, not in the constructor: this registry is created
   * while its own module activates, and the workspace may not be registered
   * yet at that point.
   */
  private workspaceHeld: Workspace | undefined

  private get workspace(): Workspace {
    if (!this.workspaceHeld) {
      this.workspaceHeld = this.resolver.getRequired<Workspace>(WORKSPACE)
    }
    return this.workspaceHeld
  }

  /**
   * The board that holds the pages, made if it is not there yet.
   *
   * A workspace holds one board or none, and registering a page is one of
   * the ways the first one comes into being - a page has to belong to
   * something.
   */
  private get board(): Board {
    let held = this.workspace.board
    if (!held) {
      held = new BoardImpl()
      held.id = crypto.randomUUID()
      held.name = 'Board'
      this.workspace.board = held
    }
    return held
  }

  getPages(): Page[] {
    return this.workspace.board?.pages.toArray() ?? []
  }

  /** Built on read, so it cannot drift from what the workspace holds. */
  get pages(): Record<string, Page> {
    const byId: Record<string, Page> = {}
    for (const page of this.getPages()) byId[page.id as string] = page
    return byId
  }

  get defaultPageId(): string | null {
    return (this.workspace.board?.defaultPage?.id as string) ?? null
  }

  registerPage(page: StoredPage): Page {
    const existing = this.getPage(page.id)
    const held = existing ?? new PageImpl()

    held.id = page.id
    held.name = page.name
    held.description = page.description
    held.icon = page.icon
    held.visibleInNavigation = page.visibleInNavigation ?? true
    held.layoutId = page.layoutId
    held.layoutSettings = page.layoutSettings
    held.backgroundColor = page.backgroundColor
    held.backgroundImage = page.backgroundImage
    held.backgroundSize = page.backgroundSize
    held.backgroundPosition = page.backgroundPosition
    held.backgroundRepeat = page.backgroundRepeat

    const board = this.board
    if (!existing) board.pages.push(held)

    /* The first page registered is the one that opens, until told otherwise. */
    if (!board.defaultPage) board.defaultPage = held

    return held
  }

  getPage(pageId: string): Page {
    return this.getPages().find((page) => page.id === pageId) as Page
  }

  /**
   * The page to open when none is asked for.
   *
   * What the board names, but only if that page is still one of its own. A
   * stored state can carry a reference to a page that is not in it - an
   * older one wrote the default as a position in the file rather than as a
   * path to the page - and answering with it sends the caller to a board
   * that shows "this page does not exist".
   */
  getDefaultPage(): Page | null {
    const board = this.workspace.board
    if (!board) return null
    const named = board.defaultPage
    if (named && board.pages.toArray().includes(named)) return named
    return board.pages.size() > 0 ? board.pages.get(0) : null
  }

  setDefaultPage(pageId: string): void {
    const page = this.getPage(pageId)
    if (page && this.workspace.board) this.workspace.board.defaultPage = page
  }

  unregisterPage(pageId: string): void {
    const board = this.workspace.board
    if (!board) return
    const held = board.pages
    const at = held.toArray().findIndex((page: Page) => page.id === pageId)
    if (at < 0) return

    const removed = held.get(at)
    held.removeAt(at)

    /*
     * A reference rather than an id, so the default cannot survive as a
     * name for something that is gone. The next board takes over.
     */
    if (board.defaultPage === removed) {
      board.defaultPage = held.size() > 0 ? held.get(0) : undefined
    }
  }

  getAllPageIds(): string[] {
    return this.getPages().map((page) => page.id as string)
  }

  updatePage(page: StoredPage): void {
    this.registerPage(page)
  }

  // ----------------------------------------------------- what is on a board

  private get datasources(): DatasourceRepository {
    return this.resolver.getRequired<DatasourceRepository>(DATASOURCE_REPOSITORY)
  }

  /**
   * Writes a widget's plain values onto the modelled one.
   *
   * The source is held as a reference and the id kept in the settings, in
   * that order - one direction, because the reference is the truth and the
   * id is what a widget's own settings read.
   */
  private applyWidget(held: Widget, widget: StoredWidget): void {
    held.uid = widget.uid
    held.type = widget.type
    held.wrapperConfig = widget.wrapperConfig ?? {}

    const config = (widget.config ?? {}) as Record<string, unknown>
    const datasourceId = config['datasourceId'] as string | undefined
    held.datasource = datasourceId
      ? this.datasources.getDatasourceModel(datasourceId)
      : undefined
    config['datasourceId'] = held.datasource?.uid ?? datasourceId
    held.config = config
  }

  addWidget(
    pageId: string,
    widget: StoredWidget,
    placement: Partial<StoredLayoutItem> = {},
  ): Widget | undefined {
    const page = this.getPage(pageId)
    if (!page) return undefined

    const held = new WidgetImpl()
    this.applyWidget(held, widget)
    page.widgets.push(held)

    const item = new LayoutItemImpl()
    item.id = widget.uid
    item.width = placement.width ?? 300
    item.height = placement.height ?? 150
    item.x = placement.x ?? 0
    item.y = placement.y ?? 0
    /* On top of what is already there, unless told where to go. */
    item.z = placement.z ?? Math.max(0, ...page.layout.toArray().map((l: LayoutItem) => l.z ?? 0)) + 1
    item.group = placement.group
    page.layout.push(item)

    return held
  }

  saveWidget(pageId: string, widget: StoredWidget): void {
    const page = this.getPage(pageId)
    const held = page?.widgets.toArray().find((w: Widget) => w.uid === widget.uid)
    if (held) this.applyWidget(held, widget)
  }

  removeWidget(pageId: string, widgetUid: string): void {
    const page = this.getPage(pageId)
    if (!page) return

    const widgets = page.widgets
    const atWidget = widgets.toArray().findIndex((w: Widget) => w.uid === widgetUid)
    if (atWidget > -1) widgets.removeAt(atWidget)

    /* Its placement goes with it - a layout item for nothing places nothing. */
    const layout = page.layout
    const atItem = layout.toArray().findIndex((item: LayoutItem) => item.id === widgetUid)
    if (atItem > -1) layout.removeAt(atItem)
  }

  setBoard(pageId: string, widgets: StoredWidget[], layout: StoredLayoutItem[]): void {
    const page = this.getPage(pageId)
    if (!page) return

    page.widgets.clear()
    for (const widget of widgets) {
      const held = new WidgetImpl()
      this.applyWidget(held, widget)
      page.widgets.push(held)
    }

    page.layout.clear()
    for (const item of layout) {
      const held = new LayoutItemImpl()
      held.id = item.id
      held.x = item.x
      held.y = item.y
      held.z = item.z
      held.width = item.width
      held.height = item.height
      held.group = item.group
      page.layout.push(held)
    }
  }
}
