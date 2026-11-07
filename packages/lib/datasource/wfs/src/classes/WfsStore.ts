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
import { type ConfigurationOf, BaseDatasource } from 'org.eclipse.daanse.board.app.lib.datasource.base'
import { CONNECTION_REPOSITORY, type IConnection, ConnectionRepository } from 'org.eclipse.daanse.board.app.lib.api.connection'
import type { FeatureCollection } from 'geojson'
import type { IWfsStoreConfiguration } from '../gen/IWfsStoreConfiguration'
import { featuresOf, getFeaturePath, tableOf, type WfsRequest } from '../wfs'

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
  private request: WfsRequest = {}
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
    }
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
      const response = await connection.fetch({ url: this.path }, { headers: { Accept: 'application/json, application/geo+json, text/xml;q=0.8' } })
      const answer = await response.text()
      if (!response.ok) throw Object.assign(new Error(answer.slice(0, 200) || response.statusText), { status: response.status })
      return featuresOf(answer, response.headers.get('content-type') ?? '', this.request.srsName)
    })()
    this.reading = reading
    void reading
      .then(() => (this.lastFailure = undefined))
      .catch((e: Error & { status?: number }) => (this.lastFailure = { status: e.status, message: e.message }))
      .finally(() => {
        if (this.reading === reading) this.reading = undefined
      })
    return reading
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
