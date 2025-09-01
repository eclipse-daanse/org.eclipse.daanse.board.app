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

import type { XMLAApi } from 'org.eclipse.daanse.board.app.ui.vue.connection.xmla'

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

// const MDDISPINFO_CHILD_COUNT = 65535;

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
  private initPromise: Promise<void>

  constructor(api: XMLAApi) {
    this.api = api

    this.initPromise = new Promise(resolve => {
      this.initPromiseResolve = resolve
    })
  }

  public async waitForInit() {
    return this.initPromise
  }

  public async loadMetadata(catalogName: string, cubeName: string) {
    if (!this.api) throw new Error('API is not initialized')

    const [
      dimensions,
      hierarchies,
      levels,
      measureGroups,
      measures,
      sets,
      properties,
    ] = await Promise.all([
      await this.api.getDimensions(catalogName, cubeName),
      await this.api.getHierarchies(catalogName, cubeName),
      await this.api.getLevels(catalogName, cubeName),
      await this.api.getMeasureGroups(catalogName, cubeName),
      await this.api.getMeasures(catalogName, cubeName),
      await this.api.getSets(catalogName, cubeName),
      await this.api.getProperties(catalogName, cubeName),
    ])

    this.storage.dimensions = dimensions
    this.storage.hierarchies = hierarchies
    this.storage.levels = levels
    this.storage.measureGroups = measureGroups
    this.storage.measures = measures
    this.storage.sets = sets
    this.storage.properties = properties

    this.initPromiseResolve()
    return this.initPromise
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

  public getLevels() {
    return this.storage.levels
  }
}
