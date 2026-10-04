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

import { PageRegistryImpl } from './classes/PageRegistryImpl'
import type { PageI, PageRegistryI, StoredPage } from 'org.eclipse.daanse.board.app.lib.api.page'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { PAGE_REPOSITORY, identifier } from 'org.eclipse.daanse.board.app.lib.api.page'
export { PAGE_REPOSITORY, identifier } from 'org.eclipse.daanse.board.app.lib.api.page'



export function activate({ services }: ActivationContext) {
  services.register<PageRegistryI>(PAGE_REPOSITORY, new PageRegistryImpl(services))
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(PAGE_REPOSITORY)
}

export {
  type PageI,
  type PageRegistryI,
  type PageRegistryImpl,
  type StoredPage,
}
