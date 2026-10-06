/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
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

/**
 * German for the icon widget.
 *
 * A language pack is a bundle of its own so it can be deployed after the
 * widget it speaks for - a customer adding a language, or a widget that
 * shipped with English only. It names the same namespace the widget reads
 * under; which of the two arrives first does not matter.
 */
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { type i18n, I18NEXT } from 'org.eclipse.daanse.board.app.lib.i18next'
import de from './lang/de.json'

const SPRACHE = 'de'
const NAMENSRAUM = 'icon'

export function activate({ services }: ActivationContext) {
  /*
   * Deep and overwriting: another pack may already hold keys for this
   * namespace - an older version of this one, or a partial translation
   * somebody shipped first - and adding to it is the point. Replacing
   * would drop whatever it had that this does not.
   */
  services
    .getRequired<i18n>(I18NEXT)
    .addResourceBundle(SPRACHE, NAMENSRAUM, de, true, true)
}

export function deactivate({ services }: ActivationContext) {
  services.getRequired<i18n>(I18NEXT).removeResourceBundle(SPRACHE, NAMENSRAUM)
}
