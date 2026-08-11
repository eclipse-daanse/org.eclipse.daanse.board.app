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

import type { ModuleEntry } from 'org.eclipse.daanse.board.app.lib.core'

/**
 * Die Module der Anwendung, in Aktivierungsreihenfolge.
 *
 * Diese Liste löst die nebenwirkungsgetriebenen `import '…'`-Anweisungen in
 * `main.ts` ab. Sie wächst, während die Pakete auf `activate` umgestellt
 * werden; noch nicht umgestellte Pakete stehen weiterhin als Import in
 * `main.ts` und registrieren sich beim Laden selbst.
 *
 * Ein Eintrag hier ist gleichzeitig die Vorlage für das spätere
 * tsm-Manifest: `id` wird zur Modul-ID, `load` zum `entry`.
 */
export const modules: ModuleEntry[] = [
  {
    id: 'ui.vue.widget.sample',
    load: () => import('org.eclipse.daanse.board.app.ui.vue.widget.sample'),
  },
]
