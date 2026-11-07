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

import { injectable, inject } from '@eclipse-daanse/tsm'
import { type ConfigurationOf, BaseDatasource, typed } from 'org.eclipse.daanse.board.app.lib.datasource.base'
import { CONNECTION_REPOSITORY, type IConnection, ConnectionRepository } from 'org.eclipse.daanse.board.app.lib.api.connection'
import type { FeatureCollection } from 'geojson'
import type { IWfsStoreConfiguration } from '../gen/IWfsStoreConfiguration'
import { exceptionOf, featuresOf, getFeaturePath, tableOf, type WfsRequest } from '../wfs'
import { featureInfoPath, featuresOfFeatureInfo, mergedOf, tilesOf, type FeatureInfoRequest } from '../featureInfo'

/** What the store says when it could not read: for the preview and the settings. */
export interface WfsFailure {
  status?: number
  message: string
}

/**
 * A WFS feature type as a data source (#1282): GetFeature through the REST
 * connection whose address is the service, the answer as a GeoJSON
 * FeatureCollection - from GeoJSON or from GML. One read is shared by all
 * that ask while it runs.
 */
@injectable()
export class WfsStore extends BaseDatasource {
  private connection = ''
  private request: WfsRequest & FeatureInfoRequest = {}
  private mode = 'wfs'
  private columnTypes: unknown = []
  private reading?: Promise<FeatureCollection>
  /** Why the last read failed, if it did. */
  lastFailure?: WfsFailure

  @inject(CONNECTION_REPOSITORY)
  private connectionRepository!: ConnectionRepository

  static validateConfiguration(configuration: IWfsStoreConfiguration) {
    return !!configuration.connection && !!String(configuration.typeName ?? '').trim()
  }

  init(configuration: ConfigurationOf<IWfsStoreConfiguration>) {
    super.init(configuration)
    this.connection = configuration.connection ?? ''
    this.request = {
      url: configuration.url,
      typeName: configuration.typeName,
      version: configuration.version,
      outputFormat: configuration.outputFormat,
      srsName: configuration.srsName,
      maxFeatures: configuration.maxFeatures,
      bbox: configuration.bbox,
      filter: configuration.filter,
      tileSize: configuration.tileSize,
      pointTolerance: configuration.pointTolerance,
    }
    this.mode = configuration.mode === 'getFeatureInfo' ? 'getFeatureInfo' : 'wfs'
    this.columnTypes = configuration.columnTypes ?? []
    if (this.pollingEnabled) this.startPolling(this.pollingInterval)
  }

  /** The GetFeature path asked for, after the address of the connection. */
  get path(): string {
    return getFeaturePath(this.request)
  }

  private read(): Promise<FeatureCollection> {
    if (this.reading) return this.reading
    const reading = (async () => {
      const connection = this.connectionRepository.getConnection(this.connection) as IConnection
      if (this.mode === 'getFeatureInfo') return this.readFeatureInfo(connection)
      const response = await connection.fetch({ url: this.path }, { headers: { Accept: 'application/json, application/geo+json, text/xml;q=0.8' } })
      const answer = await response.text()
      if (!response.ok) throw Object.assign(new Error(answer.slice(0, 200) || response.statusText), { status: response.status })
      return featuresOf(answer, response.headers.get('content-type') ?? '', this.request.srsName)
    })()
    this.reading = reading.then((collection) => this.typedCollection(collection))
    const typedReading = this.reading
    void typedReading
      .then(() => (this.lastFailure = undefined))
      .catch((e: Error & { status?: number }) => (this.lastFailure = { status: e.status, message: e.message }))
      .finally(() => {
        if (this.reading === typedReading) this.reading = undefined
      })
    return typedReading
  }

  /**
   * The GetFeatureInfo mode: every tile of the box at once, the features of
   * all of them once each. A tile that fails fails the read, with its reason.
   */
  private async readFeatureInfo(connection: IConnection): Promise<FeatureCollection> {
    const tiles = tilesOf(this.request.bbox, Number(this.request.tileSize ?? 0.01))
    if (!tiles.length) throw new Error('The GetFeatureInfo mode needs a box (west,south,east,north).')
    const answers = await Promise.all(
      tiles.map(async (tile) => {
        const response = await connection.fetch({ url: featureInfoPath(this.request, tile) }, { headers: { Accept: 'text/xml' } })
        const answer = await response.text()
        if (!response.ok) throw Object.assign(new Error(answer.slice(0, 200) || response.statusText), { status: response.status })
        const exception = exceptionOf(answer)
        if (exception) throw new Error(exception)
        return featuresOfFeatureInfo(answer)
      }),
    )
    return mergedOf(answers)
  }

  /** The features with their properties read by the column types (#1295). */
  private typedCollection(collection: FeatureCollection): FeatureCollection {
    const properties = typed(collection.features.map((feature) => (feature.properties ?? {}) as Record<string, unknown>), this.columnTypes)
    if (properties.every((each, index) => each === collection.features[index].properties)) return collection
    return { ...collection, features: collection.features.map((feature, index) => ({ ...feature, properties: properties[index] })) }
  }

  async getOriginalData(): Promise<unknown> {
    return this.read().catch(() => ({ type: 'FeatureCollection', features: [] }))
  }

  async getData(type: string): Promise<unknown> {
    let collection: FeatureCollection
    try {
      collection = await this.read()
    } catch {
      collection = { type: 'FeatureCollection', features: [] }
    }
    if (type === 'DataTable') return tableOf(collection)
    return collection
  }

  /* A WFS takes no events; a new read is a new request, through polling or a reload. */
  callEvent(): void {}

  destroy(): void {
    this.stopPolling()
  }
}

export type { IWfsStoreConfiguration }
