/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/


import { IMapProps } from './MapPreview'

//ToDo remove this and link to IconWidget
export interface IIconSettings {
  currentIcon: string;
  iconColor: string;
  iconSize: number;
  isIconFilled: boolean;
  strokeWeight: number;
  opticSize: number;
  grade: number;
}

export interface IPointPin {
  color: string;
  solid?: boolean;
}

export interface IPointAndAreaSettings {
  show_SubElements?: boolean,
  point_render_as: string,
  point_prop?: string,
  point_image_url?: string,
  point_image_size?: number,
  point: IIconSettings
  pointPin: IPointPin
  area: IMapProps,
  label?: any
}

export interface IDSRenderer {
  name: string,
  datastream: ICondition[],
  observations?: ObservationI[],
  renderer: IPointAndAreaSettings
  id: string;

}

export interface PlacementI {
  placement: ERefType,
}

export interface ObservationI {
  setting: any,
  component: string,
  renderer?: IPointAndAreaSettings,
  conditions?: ICondition[],
}

export interface ICondition {

  prop: string,
  comperator: Comperator
  value: string,

}


export interface IRenderer {
  name: string,
  thing: ICondition[],
  renderer: IPointAndAreaSettings,
  ds_renderer: (IDSRenderer & PlacementI)[],
  ObservationrefreshTime?: number | undefined,
  lastUpdate?: number | undefined,
  id: string;

}

interface ICompare {
  (loaction: Location): boolean;
}

export enum ERefType {
  Thing = 'Thing',
  OberservedArea = 'OberservedArea',
}

export enum Comperator {
  equals = 'eq',
  lessThen = 'lt',
  greaterThen = 'gt',
  lessThenEquals = 'lte',
  greaterThenEquals = 'gte',
  notEQuals = 'neq'
}
