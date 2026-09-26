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

import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { type i18n, I18NEXT } from 'org.eclipse.daanse.board.app.lib.i18next'
import en from './lang/en.json'

const SPRACHE = 'en'
const NAMENSRAUM = 'image'

export function activate({ services }: ActivationContext) {
  services.getRequired<i18n>(I18NEXT).addResourceBundle(SPRACHE, NAMENSRAUM, en)
}

export function deactivate({ services }: ActivationContext) {
  services.getRequired<i18n>(I18NEXT).removeResourceBundle(SPRACHE, NAMENSRAUM)
}
