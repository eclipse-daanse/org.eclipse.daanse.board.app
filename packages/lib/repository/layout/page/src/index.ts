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

import { LayoutRepository } from './classes/LayoutRepository'
import type { LayoutRepositoryI } from './interfaces/LayoutRepositoryI'
import type { LayoutI } from './interfaces/LayoutI'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

/** Dienst-ID im Namensraum der ServiceRegistry; `identifier` ist das dazu passende Symbol. */
const LAYOUT_REPOSITORY = 'LayoutRepository'

const identifier = Symbol.for(LAYOUT_REPOSITORY)

export function activate({ services }: ActivationContext) {
  services.register<LayoutRepositoryI>(
    LAYOUT_REPOSITORY,
    new LayoutRepository(),
  )
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(LAYOUT_REPOSITORY)
}

export { identifier, type LayoutI, type LayoutRepositoryI, LAYOUT_REPOSITORY }
