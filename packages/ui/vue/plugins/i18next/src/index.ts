/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { I18NEXT } from "org.eclipse.daanse.board.app.lib.i18next"
import type {i18n} from "org.eclipse.daanse.board.app.lib.i18next"
import type {Plugin} from "@vue/runtime-core";
import { App } from 'vue'


/**
 * Haengt i18next als Vue-Plugin in die Anwendung.
 *
 * Braucht beides zur Aktivierungszeit: die i18next-Instanz und die
 * App-Instanz. Vorher stand das auf Modulebene hinter einem
 * `inititalized`-Wächter - der war noetig, weil ein Import mehrfach
 * ausgewertet werden konnte. `activate` laeuft genau einmal, der Waechter
 * entfaellt.
 */
export function activate({ services }: ActivationContext) {
  const i18n = services.getRequired<i18n>(I18NEXT)
  const app = services.getRequired<App<any>>('App')

  const I18nextVuePlugin: Plugin = {
    install(app) {
      app.provide('i18n', i18n)
    },
  }

  app.use(I18nextVuePlugin)
}

