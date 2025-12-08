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

import { useDataPointRegistry } from 'org.eclipse.daanse.board.app.ui.vue.widget.map'
import GeoJsonDataRendererDescription from './GeoJsonDataRendererDescription'

const register = () => {
  console.log('Registering GeoJSON Data Renderer')
  useDataPointRegistry().registerDataPointRenderer(new GeoJsonDataRendererDescription())
}

register()

export { GeoJsonDataRendererDescription }
