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

import { component, activate } from '@eclipse-daanse/tsm'
import { useDataPointRegistry } from 'org.eclipse.daanse.board.app.ui.vue.widget.map'
import GeoJsonDataRendererDescription from './GeoJsonDataRendererDescription'

/**
 * Lifecycle-only component: it offers no service, it just has something to
 * do when its bundle starts - register the GeoJSON renderer with the map's
 * DataPointRegistry. The registry is module state of the map bundle; the
 * shared-library rewrite makes this import reach that copy.
 *
 * Immediate by virtue of its @activate method: it runs whether or not
 * anyone ever resolves it.
 */
@component({})
export class GeoJsonRendererComponent {
  @activate()
  register(): void {
    useDataPointRegistry().registerDataPointRenderer(new GeoJsonDataRendererDescription())
  }
}

export { GeoJsonDataRendererDescription }
