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
 * The application's real bundles: built on their own, loaded at runtime by
 * the tsm ModuleLoader through their `entry` URL.
 *
 * This is the counterpart list to `modules.ts`. Over there lives the
 * statically bundled stock still activated by our bootstrapper; whatever
 * already exists as a bundle lands here. The migration moves entries from
 * there to here - once `modules.ts` is empty, bootstrapper and ordering can
 * be deleted and the loader carries alone.
 *
 * An entry is a tsm manifest: `id`, `version`, `entry` (the bundle's URL),
 * `provides`/`requiresService` for services, `dependencies` for module
 * references. Services from the static stock are perfectly ordinary services
 * to a bundle - both worlds share the BoardServiceRegistry, and since tsm
 * knows `unsatisfied`, a bundle waits for a missing required service instead
 * of failing.
 */
export const bundles: ModuleManifest[] = []
