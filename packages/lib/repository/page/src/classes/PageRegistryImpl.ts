/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import { PageI } from '../api/PageI'
import type {PageRegistryI}  from '../api/PageRegistryI'
import {SubscribeNotifyImpl} from 'org.eclipse.daanse.board.app.lib.utils.subscriber'
import { events } from '../api/Events'

export class PageRegistryImpl extends SubscribeNotifyImpl implements PageRegistryI {

  public pages: Record<string, PageI> = {}
  public defaultPageId: string | null = null

  registerPage(page: PageI): void {
    this.pages[page.id] = page
    // Automatically set first registered page as default if none is set
    if (this.defaultPageId === null) {
      this.defaultPageId = page.id
    }
    this.notify(events.PAGE_REGISTRATION)
  }

  getPage(pageId: string): PageI {
    return this.pages[pageId]
  }

  getDefaultPage(): PageI | null {
    if (this.defaultPageId && this.pages[this.defaultPageId]) {
      return this.pages[this.defaultPageId]
    }
    return null
  }

  setDefaultPage(pageId: string): void {
    if (this.pages[pageId]) {
      this.defaultPageId = pageId
    }
  }

  unregisterPage(pageId: string): void {
    delete this.pages[pageId]
    // Reset default if the default page was unregistered
    if (this.defaultPageId === pageId) {
      const remainingIds = Object.keys(this.pages)
      this.defaultPageId = remainingIds.length > 0 ? remainingIds[0] : null
    }
    this.notify(events.PAGE_UNREGISTRATION)
  }
  getAllPageIds():string[] {
    return Object.keys(this.pages)
  }
  updatePage(page: PageI): void {
    this.pages[page.id] = page
    this.notify(events.PAGE_UPDATE)
  }

}
