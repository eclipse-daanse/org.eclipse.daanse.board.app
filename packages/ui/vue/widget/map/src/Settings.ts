/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/
import  type { IDSRenderer, IRenderer } from './api/Renderer'
import WFS from './WFS'
import { TileLayer } from 'leaflet'
import type { Service } from './gen/Service'
import WMS = TileLayer.WMS


export interface IMapSettings {
  datasourceId?: string,
  datasourceIds: string[],
  baseMapUrl: string,
  zoom: number,
  center: number[],
  attribution: string,
  layers: LayerI[],
  styles: IDSRenderer[],
  OGCSstyles: IRenderer[],
  services: Service[];
  fixed:boolean,
  selectionHighlightColor?: string,
  selectedThingId?: string | null
  clusterGlobal?: boolean,
}

export interface LayerI {
  service: string | WMS,
  type: string,
  childs: LayerI
  level: number,
  styleIds?: string[],
  name?: string,
  title?: string,
  attribution?: string,
  geoJson?: any,
  wfs_service?: WFS,
  opacity?: number,
  datasourceId?: string
}

/*
 * The model's Service, not a second declaration of it.
 *
 * The same four fields stood here by hand, all of them required, with
 * `service: any`. The generated one is an EObject and makes every field
 * optional - which is why the literals that used to satisfy the local
 * copy are built through the factory now (#1098).
 */
export type { Service }
