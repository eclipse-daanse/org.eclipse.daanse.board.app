/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/
import { Datastream, Observation, Thing, Location } from '../client'
import { IBaseConnectionConfiguration } from 'org.eclipse.daanse.board.app.lib.datasource.base'

export interface IOGCSTAConfigartion extends IBaseConnectionConfiguration{
  connection: string;
}
export abstract class DataTypeBase {}
export interface IOGCSTAData {
  things?: BoxedThing[],
  datastreams?: BoxedDatastream[],
  observations?: (Observation&{ds_source?:string})[],
  locations?: BoxedLocation[]
}
export interface BoxedLocation extends Location{
  Things:BoxedThing[]
}
export interface BoxedDatastream extends Datastream{
  Thing:BoxedThing
  observations:Observation[]
}
export interface BoxedThing extends Thing{
  Datastreams?: BoxedDatastream[],
  Locations?: BoxedLocation[]
}
export class OGCSTAData extends DataTypeBase implements IOGCSTAData{
  things?: BoxedThing[] = [];
  datastreams?: BoxedDatastream[] = [];
  observations?: (Observation&{ds_source?:string})[] = [];
  locations?: BoxedLocation[] = [];
}
