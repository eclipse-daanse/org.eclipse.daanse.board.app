/*
  Copyright (c) 2025 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import type { IDataPointDescription } from 'org.eclipse.daanse.board.app.ui.vue.widget.map'
import GeoJsonDataRenderer from './GeoJsonDataRenderer.vue'
import GeoJsonDataRendererSettings from './GeoJsonDataRendererSettings.vue'

export default class GeoJsonDataRendererDescription implements IDataPointDescription {
  public readonly component: any = GeoJsonDataRenderer
  public readonly setupComponent: any = GeoJsonDataRendererSettings
  public readonly description: string = 'Renders observations as GeoJSON features on the map'
  public readonly name: string = 'GeoJSON Data Renderer'
  public readonly namespace: string = 'geojson'
  public readonly qualifiedName: string = 'GeoJsonDataRenderer'
  public readonly isLayerRenderer: boolean = true
  public readonly example: any = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [11.587408017353823, 50.92828047934907]
    },
    properties: {
      name: 'Example Point'
    }
  }
}
