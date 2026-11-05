/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/
import { BoxedDatastream, BoxedLocation, BoxedThing, IOGCSTAData } from '../interfaces/OgcStaConfiguration'


/**
 * The things of a server answer, turned around for a map: every location
 * with the things at it, every datastream with its thing.
 *
 * Locations are kept by id. A second thing at a location already seen goes
 * into that location's `things` - it used to go into `Things`, which the
 * map did not read, by an operator-precedence slip (#1250).
 */
export const transformFromThingLocationDastreamToLocationThingDatastream = (things: BoxedThing[]): IOGCSTAData => {
  const locations = new Map<unknown, BoxedLocation>()
  const datastreams: BoxedDatastream[] = []
  for (const thing of things ?? []) {
    for (const datastream of thing.datastreams ?? []) {
      datastream.thing = thing
      datastreams.push(datastream)
    }
    for (const location of thing.locations ?? []) {
      const key = location.iotId ?? location
      let known = locations.get(key)
      if (!known) {
        known = location
        known.things = []
        locations.set(key, known)
      }
      if (!known.things.some((t) => t === thing || (t.iotId != null && t.iotId === thing.iotId))) {
        known.things.push(thing)
      }
    }
  }
  return { things: things, datastreams, locations: [...locations.values()] }
}
