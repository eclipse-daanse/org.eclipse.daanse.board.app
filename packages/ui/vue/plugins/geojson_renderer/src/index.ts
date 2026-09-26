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

/**
 * Meldet den GeoJSON-Renderer bei der Datenpunkt-Registrierung an.
 *
 * Die Registrierung ist ein Vue-Composable ohne Dienst-ID, deshalb keine
 * `requires`-Angabe - das Modul haengt ueber seinen Import an
 * ui.vue.widget.map.
 */
export function activate() {
  useDataPointRegistry().registerDataPointRenderer(new GeoJsonDataRendererDescription())
}

export { GeoJsonDataRendererDescription }
