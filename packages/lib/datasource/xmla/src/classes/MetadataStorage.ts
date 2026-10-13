/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
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

import type { XMLAApi } from 'org.eclipse.daanse.board.app.lib.connection.xmla'
import { cacheKey, readCached, writeCached, type CachedMetadata } from './metadataCache'

interface MetadataStorage {
  hierarchies: MDSchemaHierarchy[]
  dimensions: MDSchemaDimension[]
  levels: MDSchemaLevel[]
  measureGroups: MDSchemaMeasureGroup[]
  measures: MDSchemaMeasure[]
  sets: MDSchemaSet[]
  properties: MDSchemaProperty[]
}

interface Cache {
  levelsState: Map<string, any>
  membersState: Map<string, any>
  levelMembers: Map<string, { loaded: boolean; hasMore: boolean }>
  childMembers: Map<string, { loaded: boolean; hasMore: boolean }>
  members: Map<string, any>
}

type Restrictions = Record<string, string>

// const MDDISPINFO_CHILD_COUNT = 65535;

/*
 * The metadata of one cube, asked for in the pieces that are needed.
 *
 * A Discover over the whole cube is what costs: eMondrian works out the
 * cardinality of every hierarchy on the first one that touches them all -
 * some ten seconds on OnTime, two hierarchies of airports doing most of it.
 * Restricted to one hierarchy or one dimension the same rows come in
 * milliseconds to half a second. So nothing here asks MDSCHEMA_HIERARCHIES
 * or MDSCHEMA_LEVELS for the whole cube:
 *
 * - a query needs the levels of its own hierarchies and the properties
 *   (loadQueryMetadata), and gets its answer without waiting for the rest;
 * - the cube explorer starts from the dimensions' names, measures and sets
 *   (loadMetadata), which cost nothing; the dimensions' captions follow
 *   (dimensionsReady), and a dimension's hierarchies are asked for when it
 *   is opened (loadHierarchies) - the airports of OnTime, three seconds
 *   each, only for whoever opens them. Levels it does not show.
 *
 * Whatever came is kept between page loads (metadataCache), under the
 * cube's LAST_SCHEMA_UPDATE.
 */
export class MetadataStore {
  private storage: MetadataStorage = {
    hierarchies: [],
    dimensions: [],
    levels: [],
    measureGroups: [],
    measures: [],
    sets: [],
    properties: [],
  }

  private cache: Cache = {
    levelsState: new Map(),
    membersState: new Map(),
    levelMembers: new Map(),
    childMembers: new Map(),
    members: new Map(),
  }

  private api: XMLAApi | null = null

  private initPromiseResolve: any
  private initPromise: Promise<void> | null = null;

  private catalog = ''
  private cube = ''
  private kept: Promise<{ key: string | null; entry: CachedMetadata }> | null = null
  private loads = new Map<string, Promise<unknown>>()
  private treeLoad: Promise<void> | null = null
  private dimensionDetails: Promise<void> = Promise.resolve()

  public init(api: XMLAApi) {
    this.api = api

    this.initPromise = new Promise(resolve => {
      this.initPromiseResolve = resolve
    });
  }

  public async waitForInit() {
    return this.initPromise
  }

  /** The top of the cube explorer: dimensions by name, measures, sets. */
  public async loadMetadata(catalogName: string, cubeName: string) {
    this.forCube(catalogName, cubeName)
    this.treeLoad ??= this.loadTree()
    try {
      await this.treeLoad
    } catch (error) {
      this.treeLoad = null
      throw error
    }
    this.initPromiseResolve()
    return this.initPromise
  }

  /** What a query on these hierarchies needs: their levels and the properties. */
  public async loadQueryMetadata(catalogName: string, cubeName: string, hierarchies: string[]) {
    this.forCube(catalogName, cubeName)
    const levels = await Promise.all([this.loadProperties(), ...hierarchies.map(h => this.loadLevels(h))])
    const dimensions = new Set(
      levels.slice(1).flatMap(list => (list as MDSchemaLevel[]).map(l => l.DIMENSION_UNIQUE_NAME)),
    )
    await Promise.all([...dimensions].map(d => this.loadDimension(d)))
  }

  /** Once the dimensions' own rows - captions, types - have come in. */
  public dimensionsReady(): Promise<void> {
    return this.dimensionDetails
  }

  /** A dimension's hierarchies, for the explorer opening it. */
  public loadHierarchies(dimension: string): Promise<MDSchemaHierarchy[]> {
    return this.once(`hierarchies ${dimension}`, async () => {
      const { entry } = await this.keptEntry()
      let rows = entry.hierarchies?.[dimension]
      if (!rows) {
        rows = await this.discover('MDSCHEMA_HIERARCHIES', { DIMENSION_UNIQUE_NAME: dimension })
        const loaded = rows
        await this.keep(e => ((e.hierarchies ??= {})[dimension] = loaded))
      }
      this.storage.hierarchies = [
        ...this.storage.hierarchies.filter(h => h.DIMENSION_UNIQUE_NAME !== dimension),
        ...rows,
      ]
      return rows
    })
  }

  public async getMetadataStorage() {
    await this.initPromise
    return this.storage
  }

  public getHierarchies() {
    return this.storage.hierarchies
  }

  public getMeasures() {
    return this.storage.measures
  }

  public getProperties() {
    return this.storage.properties
  }

  /** The levels loaded so far: those of the hierarchies asked for. */
  public getLevels() {
    return this.storage.levels
  }

  public getDimensions() {
    return this.storage.dimensions
  }

  private forCube(catalogName: string, cubeName: string) {
    if (this.catalog === catalogName && this.cube === cubeName) return
    this.catalog = catalogName
    this.cube = cubeName
    this.kept = null
    this.loads.clear()
    this.treeLoad = null
  }

  private discover(type: string, restrictions: Restrictions = {}): Promise<any[]> {
    if (!this.api) throw new Error('API is not initialized')
    return this.api.discover(type, { CATALOG_NAME: this.catalog, CUBE_NAME: this.cube, ...restrictions })
  }

  /** Once per store: the entry kept for this cube at its current schema. */
  private keptEntry() {
    this.kept ??= (async () => {
      let key: string | null = null
      try {
        const cubes = await this.api!.discover('MDSCHEMA_CUBES', { CATALOG_NAME: this.catalog })
        const version = cubes.find((c: MDSchemaCube) => c.CUBE_NAME === this.cube)?.LAST_SCHEMA_UPDATE
        // Without a version there is nothing to tell a stale entry by.
        if (version) key = cacheKey(this.api!.url, this.catalog, this.cube, String(version))
      } catch {
        key = null
      }
      const entry = (key && (await readCached(key))) || { levels: {}, dimensions: {} }
      entry.levels ??= {}
      entry.dimensions ??= {}
      return { key, entry }
    })()
    return this.kept
  }

  private async keep(change: (entry: CachedMetadata) => void) {
    const { key, entry } = await this.keptEntry()
    change(entry)
    if (key) void writeCached(key, entry)
  }

  /** One load per piece; a failed one is not kept, the next call tries again. */
  private once<T>(id: string, load: () => Promise<T>): Promise<T> {
    let pending = this.loads.get(id) as Promise<T> | undefined
    if (!pending) {
      pending = load()
      this.loads.set(id, pending)
      pending.catch(() => this.loads.delete(id))
    }
    return pending
  }

  private loadProperties(): Promise<MDSchemaProperty[]> {
    return this.once('properties', async () => {
      const { entry } = await this.keptEntry()
      const properties = entry.properties ?? (await this.discover('MDSCHEMA_PROPERTIES'))
      if (!entry.properties) await this.keep(e => (e.properties = properties))
      this.storage.properties = properties
      return properties
    })
  }

  private loadLevels(hierarchy: string): Promise<MDSchemaLevel[]> {
    return this.once(`levels ${hierarchy}`, async () => {
      const { entry } = await this.keptEntry()
      let levels = entry.levels[hierarchy]
      if (!levels) {
        levels = await this.discover('MDSCHEMA_LEVELS', { HIERARCHY_UNIQUE_NAME: hierarchy })
        await this.keep(e => (e.levels[hierarchy] = levels))
      }
      this.storage.levels = [
        ...this.storage.levels.filter(l => l.HIERARCHY_UNIQUE_NAME !== hierarchy),
        ...levels,
      ]
      return levels
    })
  }

  private loadDimension(dimension: string): Promise<MDSchemaDimension[]> {
    return this.once(`dimension ${dimension}`, async () => {
      const { entry } = await this.keptEntry()
      let rows = entry.dimensions[dimension]
      if (!rows) {
        rows = await this.discover('MDSCHEMA_DIMENSIONS', { DIMENSION_UNIQUE_NAME: dimension })
        await this.keep(e => (e.dimensions[dimension] = rows))
      }
      this.mergeDimensions(rows)
      return rows
    })
  }

  private mergeDimensions(rows: MDSchemaDimension[]) {
    const names = new Set(rows.map(d => d.DIMENSION_UNIQUE_NAME))
    this.storage.dimensions = [
      ...this.storage.dimensions.filter(d => !names.has(d.DIMENSION_UNIQUE_NAME)),
      ...rows,
    ]
  }

  private async loadTree() {
    const { entry } = await this.keptEntry()
    let explorer = entry.explorer
    if (!explorer) {
      /*
       * The dimensions' names from MDSCHEMA_MEASUREGROUP_DIMENSIONS, which
       * computes nothing; a server without that rowset gets the one
       * whole-cube MDSCHEMA_DIMENSIONS instead, with the rows it needs.
       */
      let names: string[] = []
      try {
        const rows = await this.discover('MDSCHEMA_MEASUREGROUP_DIMENSIONS')
        names = [...new Set(rows.map((r: { DIMENSION_UNIQUE_NAME: string }) => r.DIMENSION_UNIQUE_NAME))]
      } catch {
        names = []
      }
      if (!names.length) {
        const all: MDSchemaDimension[] = await this.discover('MDSCHEMA_DIMENSIONS')
        names = all.map(d => d.DIMENSION_UNIQUE_NAME)
        await this.keep(e => all.forEach(d => (e.dimensions[d.DIMENSION_UNIQUE_NAME] = [d])))
      }
      const [measureGroups, measures, sets] = await Promise.all([
        this.discover('MDSCHEMA_MEASUREGROUPS'),
        this.discover('MDSCHEMA_MEASURES'),
        this.discover('MDSCHEMA_SETS'),
      ])
      explorer = { dimensionNames: names, measureGroups, measures, sets }
      const loaded = explorer
      await this.keep(e => (e.explorer = loaded))
    }
    await this.loadProperties()
    this.storage.measureGroups = explorer.measureGroups
    this.storage.measures = explorer.measures
    this.storage.sets = explorer.sets
    for (const hierarchies of Object.values(entry.hierarchies ?? {})) {
      const dimension = hierarchies[0]?.DIMENSION_UNIQUE_NAME
      if (dimension) void this.loadHierarchies(dimension)
    }

    /*
     * The tree is drawn from the names at once; a dimension's own row, with
     * its caption, replaces the stand-in when it comes.
     */
    const kept = explorer.dimensionNames.filter(d => entry.dimensions[d])
    const missing = explorer.dimensionNames.filter(d => !entry.dimensions[d])
    this.mergeDimensions([
      ...kept.flatMap(d => entry.dimensions[d]),
      ...missing.map(standIn),
    ])
    this.storage.dimensions = explorer.dimensionNames
      .map(name => this.storage.dimensions.find(d => d.DIMENSION_UNIQUE_NAME === name))
      .filter((d): d is MDSchemaDimension => !!d)
    this.dimensionDetails = Promise.all(missing.map(d => this.loadDimension(d))).then(() => {
      this.storage.dimensions = explorer!.dimensionNames
        .map(name => this.storage.dimensions.find(d => d.DIMENSION_UNIQUE_NAME === name))
        .filter((d): d is MDSchemaDimension => !!d)
    })
  }
}

/** A dimension known by name only, until its row comes. */
function standIn(name: string): MDSchemaDimension {
  return {
    DIMENSION_UNIQUE_NAME: name,
    DIMENSION_NAME: name.replace(/^\[|\]$/g, ''),
    DIMENSION_CAPTION: name.replace(/^\[|\]$/g, ''),
    // MD_DIMTYPE_MEASURE is 2; the measures are the one dimension the explorer treats apart.
    DIMENSION_TYPE: name === '[Measures]' ? '2' : '0',
  } as MDSchemaDimension
}
