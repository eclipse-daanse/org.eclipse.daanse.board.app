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
 * The Leaflet that vue-leaflet draws with (#1302): the ES module build,
 * which vue-leaflet imports itself when a map mounts. A layer made by any
 * other copy of Leaflet - the UMD build of a plain `import 'leaflet'` - is
 * not one of its layers. Imported by the same name, it is the same module.
 */
import type * as Leaflet from 'leaflet'

export function loadLeaflet(): Promise<typeof Leaflet> {
  return import('leaflet/dist/leaflet-src.esm') as unknown as Promise<typeof Leaflet>
}
