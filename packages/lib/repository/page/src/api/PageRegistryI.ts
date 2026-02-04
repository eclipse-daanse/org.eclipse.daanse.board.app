/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/
import { PageI } from './PageI'

export interface PageRegistryI {
  pages: Record<string, PageI>

  defaultPageId: string | null

  registerPage(page: PageI): void

  getPage(pageId: string): PageI

  getDefaultPage(): PageI | null

  setDefaultPage(pageId: string): void

  unregisterPage(pageId: string): void

  getAllPageIds():string[]

  updatePage(page: PageI): void
}
