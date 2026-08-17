/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import type { Container } from 'inversify'
import type {PageI} from './api/PageI'
import { PageRegistryImpl } from './classes/PageRegistryImpl'
import type {PageRegistryI}  from './api/PageRegistryI'
import { events } from './api/Events'
/** Dienst-ID im Namensraum der ServiceRegistry; `identifier` ist das dazu passende Symbol. */
const PAGE_REPOSITORY = 'PageRepository'

const identifier = Symbol.for(PAGE_REPOSITORY)
import {container} from 'org.eclipse.daanse.board.app.lib.core'

if(!container.isBound(identifier)) {
  const pageRepository:PageRegistryI = new PageRegistryImpl()

  container
    .bind<PageRegistryI>(identifier)
    .toConstantValue(pageRepository)

  console.log('📦 PageRegistry registered')
}

export {
  type PageI,
  type PageRegistryI,
  type PageRegistryImpl,
  events,
  identifier, PAGE_REPOSITORY }
