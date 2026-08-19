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

import type { ModuleManifest } from '@eclipse-daanse/tsm'

/**
 * Die echten Bundles der Anwendung: eigenständig gebaut, vom tsm-ModuleLoader
 * zur Laufzeit über ihre `entry`-URL geladen.
 *
 * Das ist die Gegenliste zu `modules.ts`. Dort steht der statisch gebündelte
 * Bestand, den noch unser Bootstrapper aktiviert; hier landet, was bereits
 * als Bundle vorliegt. Die Migration verschiebt Einträge von dort nach hier —
 * ist `modules.ts` leer, sind Bootstrapper und Sortierung löschbar, und der
 * Loader trägt allein.
 *
 * Ein Eintrag ist ein tsm-Manifest: `id`, `version`, `entry` (URL des
 * Bundles), `provides`/`requiresService` für die Dienste, `dependencies` für
 * Modulbezüge. Dienste aus dem statischen Bestand sind für ein Bundle ganz
 * normale Dienste — beide Welten teilen sich die BoardServiceRegistry, und
 * seit tsm `unsatisfied` kennt, wartet ein Bundle auf einen fehlenden
 * Pflichtdienst, statt zu scheitern.
 */
export const bundles: ModuleManifest[] = []
