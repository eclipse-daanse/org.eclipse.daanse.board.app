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

import type { PageI } from './api/PageI'
import { PageRegistryImpl } from './classes/PageRegistryImpl'
import type { PageRegistryI } from './api/PageRegistryI'
import { events } from './api/Events'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

/** Dienst-ID im Namensraum der ServiceRegistry; `identifier` ist das dazu passende Symbol. */
const PAGE_REPOSITORY = 'PageRepository'

const identifier = Symbol.for(PAGE_REPOSITORY)

export function activate({ services }: ActivationContext) {
  services.register<PageRegistryI>(PAGE_REPOSITORY, new PageRegistryImpl())
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(PAGE_REPOSITORY)
}

export {
  type PageI,
  type PageRegistryI,
  type PageRegistryImpl,
  events,
  identifier,
  PAGE_REPOSITORY,
}
