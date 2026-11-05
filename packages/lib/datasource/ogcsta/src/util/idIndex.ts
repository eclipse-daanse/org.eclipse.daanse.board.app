/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
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

import type { BoxedDatastream, BoxedLocation, BoxedThing, IOGCSTAData } from '../interfaces/OgcStaConfiguration'

/** Every object under one id: the catalogue can hold more than one copy. */
export type ById<T> = Map<string, T[]>

export interface CatalogueIndex {
  things: ById<BoxedThing>
  datastreams: ById<BoxedDatastream>
  locations: ById<BoxedLocation>
}

function add<T>(map: ById<T>, id: unknown, item: T) {
  if (id == null) return
  const key = String(id)
  const list = map.get(key)
  if (!list) map.set(key, [item])
  else if (!list.includes(item)) list.push(item)
}

/**
 * Things, datastreams and locations of a catalogue by id, wherever they
 * sit: in the flat lists, under a thing, under a location's things. A
 * lookup used to be a linear search over each of those places in turn.
 */
export function indexCatalogue(data: IOGCSTAData): CatalogueIndex {
  const index: CatalogueIndex = { things: new Map(), datastreams: new Map(), locations: new Map() }
  const thing = (t: BoxedThing) => {
    add(index.things, t.iotId, t)
    for (const ds of t.datastreams ?? []) add(index.datastreams, ds.iotId, ds)
    for (const loc of t.locations ?? []) add(index.locations, loc.iotId, loc)
  }
  for (const ds of data.datastreams ?? []) add(index.datastreams, ds.iotId, ds)
  for (const t of data.things ?? []) thing(t)
  for (const loc of data.locations ?? []) {
    add(index.locations, loc.iotId, loc)
    for (const t of loc.things ?? []) thing(t)
  }
  return index
}

/**
 * The index of a catalogue, built again only when one of its lists was
 * replaced. The store replaces a list on every load and merge.
 */
export class CatalogueIndexCache {
  private built: CatalogueIndex | undefined
  private from: unknown[] = []

  of(data: IOGCSTAData): CatalogueIndex {
    const lists = [data.things, data.datastreams, data.locations]
    if (!this.built || lists.some((list, i) => list !== this.from[i])) {
      this.built = indexCatalogue(data)
      this.from = lists
    }
    return this.built
  }

  clear() {
    this.built = undefined
  }
}
