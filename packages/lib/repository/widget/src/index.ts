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

import { WidgetRepository, type WidgetConfig } from './classes'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

/** Dienst-ID im Namensraum der ServiceRegistry; `identifier` ist das dazu passende Symbol. */
const WIDGET_REPOSITORY = 'WidgetRepository'

const identifier = Symbol.for(WIDGET_REPOSITORY)

export function activate({ services }: ActivationContext) {
  services.register<WidgetRepository>(WIDGET_REPOSITORY, new WidgetRepository())
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(WIDGET_REPOSITORY)
}

export { WidgetRepository, type WidgetConfig, identifier, WIDGET_REPOSITORY }
