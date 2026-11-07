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
import {
  type Box,
  type ConfigurationOf,
  BaseDatasource,
  VIEWPORT_EVENT,
  Viewports,
  gridTileBox,
  typed,
  viewportOf,
} from 'org.eclipse.daanse.board.app.lib.datasource.base'
import { CONNECTION_REPOSITORY, type IConnection, ConnectionRepository } from 'org.eclipse.daanse.board.app.lib.api.connection'
import type { Feature, FeatureCollection } from 'geojson'
import type { IWfsStoreConfiguration } from '../gen/IWfsStoreConfiguration'
import { exceptionOf, featuresOf, getFeaturePath, tableOf, type WfsRequest } from '../wfs'
import { featureInfoPath, featuresOfFeatureInfo, mergedOf, tilesOf, type FeatureInfoRequest } from '../featureInfo'

/** What the store says when it could not read: for the preview and the settings. */
export interface WfsFailure {
  status?: number
  message: string
}

/* How many tiles of the viewport extent are kept, the least recently used dropped first. */
export const TILE_CACHE_SIZE = 256

/**
 * A WFS feature type as a data source (#1282): GetFeature through the REST
 * connection whose address is the service, the answer as a GeoJSON
 * FeatureCollection - from GeoJSON or from GML. One read is shared by all
 * that ask while it runs.
 *
 * With the extent viewport (#1297) it reads the tiles that the maps on it
 * show, each tile once: a map sends VIEWPORT_EVENT when it has moved, and
 * the store reads the tiles of the view it has not read yet, then tells its
 * subscribers.
 */
@injectable()
export class WfsStore extends BaseDatasource {
  private connection = ''
  private request: WfsRequest & FeatureInfoRequest = {}
  private mode = 'wfs'
  private extent: 'fixed' | 'viewport' = 'fixed'
  private minZoom = 14
  private viewports = new Viewports()
  /** The features of each tile read, by its key in the grid; in the order last used. */
  private tiles = new Map<string, Feature[]>()
  private tileReads = new Map<string, Promise<Feature[]>>()
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
    this.extent = configuration.extent === 'viewport' ? 'viewport' : 'fixed'
    const minZoom = configuration.minZoom == null ? NaN : Number(configuration.minZoom)
    this.minZoom = Number.isFinite(minZoom) ? minZoom : 14
    this.tiles.clear()
    this.tileReads.clear()
    this.columnTypes = configuration.columnTypes ?? []
    if (this.pollingEnabled) this.startPolling(this.pollingInterval)
  }

  /** The GetFeature path asked for, after the address of the connection. */
  get path(): string {
    return getFeaturePath(this.request)
  }

  private get tileSize(): number {
    const size = Number(this.request.tileSize ?? 0.01)
    return Number.isFinite(size) && size > 0 ? size : 0.01
  }

  /* Whether the area is that of the maps: the extent viewport, and a map has sent its view. */
  private get followsViewport(): boolean {
    return this.extent === 'viewport' && this.viewports.size > 0
  }

  private read(): Promise<FeatureCollection> {
    if (this.followsViewport) return this.readViewport()
    if (this.reading) return this.reading
    const reading = (async () => {
      const connection = this.connectionRepository.getConnection(this.connection) as IConnection
      if (this.mode === 'getFeatureInfo') return this.readFeatureInfo(connection)
      return this.readFeatures(connection, this.path)
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

  private async readFeatures(connection: IConnection, path: string): Promise<FeatureCollection> {
    const response = await connection.fetch({ url: path }, { headers: { Accept: 'application/json, application/geo+json, text/xml;q=0.8' } })
    const answer = await response.text()
    if (!response.ok) throw Object.assign(new Error(answer.slice(0, 200) || response.statusText), { status: response.status })
    return featuresOf(answer, response.headers.get('content-type') ?? '', this.request.srsName)
  }

  private async readFeatureInfoTile(connection: IConnection, tile: Box): Promise<Feature[]> {
    const response = await connection.fetch({ url: featureInfoPath(this.request, tile) }, { headers: { Accept: 'text/xml' } })
    const answer = await response.text()
    if (!response.ok) throw Object.assign(new Error(answer.slice(0, 200) || response.statusText), { status: response.status })
    const exception = exceptionOf(answer)
    if (exception) throw new Error(exception)
    return featuresOfFeatureInfo(answer)
  }

  /**
   * The extent viewport: the tiles in view of the maps, each read once and
   * kept. Below minZoom no tile is in view. A tile that fails fails the read,
   * with its reason, and is read again the next time.
   */
  private async readViewport(): Promise<FeatureCollection> {
    const keys = this.viewports.tiles(this.tileSize, this.minZoom)
    try {
      const answers = await Promise.all(keys.map((key) => this.readTile(key)))
      this.lastFailure = undefined
      return this.typedCollection(mergedOnce(answers))
    } catch (e) {
      const failure = e as Error & { status?: number }
      this.lastFailure = { status: failure.status, message: failure.message }
      throw e
    }
  }

  private readTile(key: string): Promise<Feature[]> {
    const kept = this.tiles.get(key)
    if (kept) {
      this.tiles.delete(key)
      this.tiles.set(key, kept)
      return Promise.resolve(kept)
    }
    const running = this.tileReads.get(key)
    if (running) return running
    const box = gridTileBox(key, this.tileSize)
    const connection = this.connectionRepository.getConnection(this.connection) as IConnection
    const reading = (
      this.mode === 'getFeatureInfo'
        ? this.readFeatureInfoTile(connection, box)
        : this.readFeatures(connection, getFeaturePath({ ...this.request, bbox: box.join(',') })).then((c) => c.features)
    )
      .then((features) => {
        if (this.tileReads.get(key) !== reading) return features
        this.tiles.set(key, features)
        while (this.tiles.size > TILE_CACHE_SIZE) this.tiles.delete(this.tiles.keys().next().value as string)
        return features
      })
      .finally(() => {
        if (this.tileReads.get(key) === reading) this.tileReads.delete(key)
      })
    this.tileReads.set(key, reading)
    return reading
  }

  /**
   * The GetFeatureInfo mode: every tile of the box at once, the features of
   * all of them once each. A tile that fails fails the read, with its reason.
   */
  private async readFeatureInfo(connection: IConnection): Promise<FeatureCollection> {
    const tiles = tilesOf(this.request.bbox, Number(this.request.tileSize ?? 0.01))
    if (!tiles.length) throw new Error('The GetFeatureInfo mode needs a box (west,south,east,north).')
    const answers = await Promise.all(tiles.map((tile) => this.readFeatureInfoTile(connection, tile)))
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

  acceptedEvents(): readonly string[] {
    return this.extent === 'viewport' ? [VIEWPORT_EVENT] : []
  }

  /**
   * A map's view (#1297), with the extent viewport; other events it does not
   * take - a new read is a new request, through polling or a reload. The
   * subscribers hear of it once the tiles of the new view are read, and only
   * where the view changed.
   */
  async callEvent(event: string, params?: unknown): Promise<void> {
    if (event !== VIEWPORT_EVENT || this.extent !== 'viewport') return
    const viewport = viewportOf(params)
    if (!viewport || !this.viewports.set(viewport)) return
    await this.readViewport().catch(() => undefined)
    this.notify()
  }

  destroy(): void {
    this.stopPolling()
  }
}

export type { IWfsStoreConfiguration }

/*
 * The features of several tiles, each once: a feature on the edge of two
 * tiles is in both answers. By its id, and where it has none by what it is.
 */
function mergedOnce(answers: Feature[][]): FeatureCollection {
  const seen = new Set<string>()
  const features: Feature[] = []
  for (const answer of answers) {
    for (const feature of answer) {
      const key = feature.id !== undefined && feature.id !== null ? `#${feature.id}` : JSON.stringify([feature.geometry, feature.properties])
      if (seen.has(key)) continue
      seen.add(key)
      features.push(feature)
    }
  }
  return { type: 'FeatureCollection', features }
}
