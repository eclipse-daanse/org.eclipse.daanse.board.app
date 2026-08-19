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

import * as Vue from 'vue'
import * as VueRouter from 'vue-router'
import { initTsmRuntime } from '@eclipse-daanse/tsm'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

/**
 * Das Bibliotheks-Bundle für Vue: es stellt die Vue-Instanz der Anwendung
 * als geteilte Bibliothek bereit, damit URL-geladene Bundles sie über
 * `__tsm__.require('vue')` beziehen, statt eine eigene Kopie zu bündeln.
 *
 * Warum ein Bundle und nicht der Host: Wer Vue liefert, ist damit eine
 * Frage des Wirings statt einer Registrierungszeile in main.ts. Das Manifest
 * dieses Moduls trägt die `tsm.library`-Capability; die `sharedDependencies`
 * der Konsumenten werden vom Resolver dagegen geprüft, und die tsm-Konsole
 * kann zeigen, wer Vue anbietet und wer es verbraucht — wie ein Bundle in
 * OSGi, das ein Paket exportiert, während das Framework nur vermittelt.
 *
 * Übergangsbedingung: Solange die Host-Anwendung selbst statisch gebaut ist,
 * MUSS hier dieselbe Instanz ausgegeben werden, mit der der Host rendert —
 * zwei Vue-Kopien wären zwei Reaktivitätssysteme. Das ist derzeit
 * konstruktiv gesichert, weil dieses Modul im Modulgraphen des Hosts lebt
 * und `import * as Vue from 'vue'` dort genau eine Auflösung hat. Wird die
 * Host-Shell selbst ein Bundle, dreht sich die Richtung um: dann ist die
 * Datei dieses Bundles über die Import-Map die einzige Vue-Quelle, auch für
 * den Host.
 */

/** Muss zur tatsächlich gebündelten Version passen; geprüft in index.test.ts. */
const VERSIONEN = {
  vue: '3.5.24',
  'vue-router': '5.0.6',
} as const

export function activate({ log }: ActivationContext) {
  const runtime = initTsmRuntime()

  runtime.register('vue', Vue, VERSIONEN.vue, 'platform.vue')
  runtime.register('vue-router', VueRouter, VERSIONEN['vue-router'], 'platform.vue')

  log.info(`geteilte Bibliotheken bereit: vue@${VERSIONEN.vue}, vue-router@${VERSIONEN['vue-router']}`)
}

/**
 * Bewusst kein deactivate: Eine geteilte Bibliothek kann nicht zur Laufzeit
 * verschwinden, solange Konsumenten laufen — jede Komponente im Baum hängt an
 * dieser Vue-Instanz. Entladbar wird das erst, wenn der Resolver Konsumenten
 * vorher stoppt; bis dahin wäre ein unregister eine Attrappe.
 */

export { VERSIONEN }
