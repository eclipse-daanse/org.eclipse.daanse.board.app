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

import type { ActivationContext } from "org.eclipse.daanse.board.app.lib.core"
import {type PageContextServiceI } from './api/PageContextServiceI'
import {type PageContextProviderI } from './api/PageContextProviderI'
import { PageContextService } from './classes/PageContextService'

/** Dienst-ID im Namensraum der ServiceRegistry; `identifier` ist das dazu passende Symbol. */
const PAGE_CONTEXT = 'PageContext'

const identifier = Symbol.for(PAGE_CONTEXT)

/** Singleton ohne eigene Abhaengigkeiten - siehe lib.repository.connection. */
export function activate({ services }: ActivationContext) {
  services.register(PAGE_CONTEXT, new PageContextService())
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(PAGE_CONTEXT)
}

export {identifier, PAGE_CONTEXT, type PageContextServiceI, type PageContextProviderI}

