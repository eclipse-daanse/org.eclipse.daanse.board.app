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

import type { PageRegistryI, StoredPage } from 'org.eclipse.daanse.board.app.lib.api.page'
import {
  WORKSPACE,
  PageImpl,
  type Page,
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

  getPages(): Page[] {
    return this.workspace.pages.toArray()
  }

  /** Built on read, so it cannot drift from what the workspace holds. */
  get pages(): Record<string, Page> {
    const byId: Record<string, Page> = {}
    for (const page of this.getPages()) byId[page.id as string] = page
    return byId
  }

  get defaultPageId(): string | null {
    return (this.workspace.defaultPage?.id as string) ?? null
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

    if (!existing) this.workspace.pages.push(held)

    /* The first board registered is the one that opens, until told otherwise. */
    if (!this.workspace.defaultPage) this.workspace.defaultPage = held

    return held
  }

  getPage(pageId: string): Page {
    return this.getPages().find((page) => page.id === pageId) as Page
  }

  getDefaultPage(): Page | null {
    return this.workspace.defaultPage ?? null
  }

  setDefaultPage(pageId: string): void {
    const page = this.getPage(pageId)
    if (page) this.workspace.defaultPage = page
  }

  unregisterPage(pageId: string): void {
    const held = this.workspace.pages
    const at = held.toArray().findIndex((page: Page) => page.id === pageId)
    if (at < 0) return

    const removed = held.get(at)
    held.removeAt(at)

    /*
     * A reference rather than an id, so the default cannot survive as a
     * name for something that is gone. The next board takes over.
     */
    if (this.workspace.defaultPage === removed) {
      this.workspace.defaultPage = held.size() > 0 ? held.get(0) : undefined
    }
  }

  getAllPageIds(): string[] {
    return this.getPages().map((page) => page.id as string)
  }

  updatePage(page: StoredPage): void {
    this.registerPage(page)
  }
}
