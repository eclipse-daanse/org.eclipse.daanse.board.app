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

export interface IOGCSTAHistoryConfig {
  enabled: boolean;
  timeRange?: {
    start?: string; // ISO 8601 DateTime
    end?: string;   // ISO 8601 DateTime
    startVariable?: string; // Variable name for start time
    endVariable?: string;   // Variable name for end time
  };
  resultTime?: {
    start?: string;
    end?: string;
    startVariable?: string;
    endVariable?: string;
  };
  phenomenonTime?: {
    start?: string;
    end?: string;
    startVariable?: string;
    endVariable?: string;
  };
  orderBy?: 'phenomenonTime desc' | 'phenomenonTime asc' | 'resultTime desc' | 'resultTime asc';
  limit?: number; // $top parameter
}

export interface IOGCSTAConfigartion extends IBaseConnectionConfiguration{
  connection: string;
  history?: IOGCSTAHistoryConfig;
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
