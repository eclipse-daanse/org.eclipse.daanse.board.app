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

/*
 * A cube's metadata, kept between page loads.
 *
 * An OLAP server can take its time over metadata - eMondrian on ClickHouse
 * works out a hierarchy's cardinality on the first Discover that touches it,
 * seconds for the airport hierarchies of OnTime - and the answer does not
 * change until the schema does. So it is kept in IndexedDB under the cube's
 * LAST_SCHEMA_UPDATE: a new schema is a new key, and the old entries of the
 * cube are dropped when the new one is written.
 *
 * Where there is no IndexedDB (tests, a locked-down browser) the entries
 * live in memory for as long as the page does.
 */

export interface CachedMetadata {
  /** The top of the cube explorer; absent until it has been loaded once. */
  explorer?: {
    dimensionNames: string[]
    measureGroups: MDSchemaMeasureGroup[]
    measures: MDSchemaMeasure[]
    sets: MDSchemaSet[]
  }
  /** Hierarchies by dimension unique name, as dimensions were opened. */
  hierarchies?: Record<string, MDSchemaHierarchy[]>
  properties?: MDSchemaProperty[]
  /** Levels by hierarchy unique name, as they were asked for. */
  levels: Record<string, MDSchemaLevel[]>
  /** Dimensions by unique name, as they were asked for. */
  dimensions: Record<string, MDSchemaDimension[]>
}

const DATABASE = 'daanse-xmla-metadata'
const STORE = 'cubes'

const memory = new Map<string, CachedMetadata>()
let opening: Promise<IDBDatabase | null> | null = null

function database(): Promise<IDBDatabase | null> {
  if (typeof indexedDB === 'undefined') return Promise.resolve(null)
  opening ??= new Promise(resolve => {
    try {
      const request = indexedDB.open(DATABASE, 1)
      request.onupgradeneeded = () => request.result.createObjectStore(STORE)
      request.onsuccess = () => resolve(request.result)
      request.onerror = () => resolve(null)
      request.onblocked = () => resolve(null)
    } catch {
      resolve(null)
    }
  })
  return opening
}

function done<T>(request: IDBRequest<T>): Promise<T | undefined> {
  return new Promise(resolve => {
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => resolve(undefined)
  })
}

/** The key of a cube at one version of its schema. */
export function cacheKey(url: string, catalog: string, cube: string, schemaVersion: string): string {
  return [url, catalog, cube, schemaVersion].join('\u001f')
}

const cubePrefix = (key: string) => key.slice(0, key.lastIndexOf('\u001f') + 1)

export async function readCached(key: string): Promise<CachedMetadata | undefined> {
  const db = await database()
  if (!db) return memory.get(key)
  try {
    return (await done(db.transaction(STORE).objectStore(STORE).get(key))) as CachedMetadata | undefined
  } catch {
    return undefined
  }
}

export async function writeCached(key: string, value: CachedMetadata): Promise<void> {
  const db = await database()
  if (!db) {
    for (const old of memory.keys()) if (old !== key && cubePrefix(old) === cubePrefix(key)) memory.delete(old)
    memory.set(key, value)
    return
  }
  try {
    const store = db.transaction(STORE, 'readwrite').objectStore(STORE)
    const keys = ((await done(store.getAllKeys())) ?? []) as string[]
    const write = db.transaction(STORE, 'readwrite').objectStore(STORE)
    for (const old of keys) if (old !== key && cubePrefix(old) === cubePrefix(key)) write.delete(old)
    // Plain data only: what the store holds is cloned, not referenced.
    write.put(JSON.parse(JSON.stringify(value)), key)
  } catch (error) {
    console.info('Cube metadata not kept:', error instanceof Error ? error.message : error)
  }
}

/** For tests: forget what is held in memory. */
export function clearMemoryCache(): void {
  memory.clear()
}
