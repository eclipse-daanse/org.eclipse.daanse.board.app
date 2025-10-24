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
  fixed:boolean
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

export interface Service {
  type: string,
  url: string,
  service: any
  id: string
}
