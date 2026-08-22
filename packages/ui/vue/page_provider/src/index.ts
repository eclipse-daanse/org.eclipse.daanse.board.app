/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import { PAGE_CONTEXT } from 'org.eclipse.daanse.board.app.lib.pagecontext.pagecontext_service'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
import {identifier as pagecontext_service_id,type PageContextServiceI } from "org.eclipse.daanse.board.app.lib.pagecontext.pagecontext_service"
import { VuePageProvider } from './classes/VuePageProvider'

/** Typed service id - the name and the contract declared once, here. */
const VUE_PAGE_PROVIDER = serviceId<VuePageProvider>('VuePageProvider')

const identifier = Symbol.for(VUE_PAGE_PROVIDER)

const vuePageProvider = new VuePageProvider()

/**
 * Meldet den Vue-Seitenanbieter an und haengt ihn in den PageContextService.
 *
 * Vorher wurde dessen Anwesenheit mit `container.isBound` geprueft und bei
 * Abwesenheit nur eine Meldung ausgegeben - der Anbieter blieb dann
 * unverbunden. Jetzt steht die Bedingung in `requires`.
 */
export function activate({ services }: ActivationContext) {
  services.register(VUE_PAGE_PROVIDER, vuePageProvider)
  services.getRequired(PAGE_CONTEXT).setProvider(vuePageProvider)
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(VUE_PAGE_PROVIDER)
}

export { VuePageProvider, identifier, VUE_PAGE_PROVIDER, vuePageProvider };


