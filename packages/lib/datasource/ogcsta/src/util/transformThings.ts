/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/
import { BoxedDatastream, BoxedLocation, BoxedThing, IOGCSTAData } from '../interfaces/OgcStaConfiguration'
import { Datastream, Datastreams } from '../client'


export const transformFromThingLocationDastreamToLocationThingDatastream=(things: BoxedThing[]):IOGCSTAData=> {
  const ret:IOGCSTAData={locations:[],things:things,datastreams:[]}
  const locations: BoxedLocation[] = [];
  let datastreams: (Datastreams | Datastream)[] = [];
  for (const thing of things ?? []) {
    if(thing.datastreams){
      datastreams = [...datastreams,...thing.datastreams] ;
      for (const datastream of thing.datastreams ?? []) {
        datastream.thing = thing;
      }
    }
    for (const location of thing.locations ?? []) {
      if (!location.things) {
        location.things = [];
      }
      const isAlreadyinLocation = locations.find((l: BoxedLocation) => l.iotId  === location.iotId);
      if (isAlreadyinLocation) {
        const allredyexistingThing = isAlreadyinLocation.Things ?? [].find((t: BoxedThing) => t.iotId == thing.iotId);
        if (!allredyexistingThing) {
          if (!isAlreadyinLocation.Things) {
            isAlreadyinLocation.Things = [];
          }
          isAlreadyinLocation.Things.push(thing);
        }
      } else {
        location.things.push(thing);
        locations.push(location as BoxedLocation);

      }
    }
  }
  ret.datastreams = datastreams as BoxedDatastream[];
  ret.locations = locations;
  return ret;
}
