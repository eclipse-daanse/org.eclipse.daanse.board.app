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

import {
  BaseConnection,
  type BaseConnectionConfig,
  IRequestParams,
} from 'org.eclipse.daanse.board.app.lib.connection.base'

import { XMLAApi } from './xml'
import { createClientAsync } from "../utils/XMLAClient";
import { MetadataStore } from './MetadataStorage'

export interface IXmlaConnectionConfiguration extends BaseConnectionConfig {
  url: string
  cubeName: string
  catalogName: string
}

export class XmlaConnection extends BaseConnection {
  public readonly url: any
  public readonly catalogName: string
  public cubeName: string
  public metadata: MetadataStore = null as unknown as MetadataStore

  private api: XMLAApi | null = null
  private apiPromise: Promise<XMLAApi>
  private metadataPromise: Promise<MetadataStore>

  constructor(configuration: IXmlaConnectionConfiguration) {
    super(configuration)

    this.url = configuration.url
    this.catalogName = configuration.catalogName
    this.cubeName = configuration.cubeName

    this.apiPromise = this.initApi()
    this.apiPromise.then(api => {
      this.api = api
    })

    this.metadataPromise = this.initMetadata()
    this.metadataPromise.then(metadataStore => {
      this.metadata = metadataStore
    })
  }

  async initApi(): Promise<XMLAApi> {
    const client = await createClientAsync("xmla.wsdl");

    client.setEndpoint(this.url);
    const api = new XMLAApi(client, this.url);
    await api.startSession();

    return api;
  }

  async initMetadata(): Promise<MetadataStore> {
    const api = await this.apiPromise
    const metadataStore = new MetadataStore(api)

    await metadataStore.loadMetadata(this.catalogName, this.cubeName)
    return metadataStore
  }

  async fetch(config: IRequestParams): Promise<any> {
    const api = await this.apiPromise;
    const mdxResponce = await api.getMDX(config.data.mdx, this.catalogName, config.format);
    return mdxResponce;
  }

  setConfig(): void {
    throw new Error('Method not implemented.')
  }

  static validateConfiguration(configuration: IXmlaConnectionConfiguration) {
    if (!configuration.url) {
      return false
    }

    if (!configuration.catalogName) {
      return false
    }

    if (!configuration.cubeName) {
      return false
    }

    return true
  }

  static async getCubes(
    url: string,
    catalogName: string,
  ): Promise<MDSchemaCube[]> {
    const client = await createClientAsync("xmla.wsdl");

    client.setEndpoint(url);
    const api = new XMLAApi(client, url);
    await api.startSession();

    const { cubes } = await api.getCubes(catalogName);
    return cubes;
  }

  static async getCatalogs(url: string): Promise<DBSchemaCatalog[]> {
    const client = await createClientAsync("xmla.wsdl");

    client.setEndpoint(url);
    const api = new XMLAApi(client, url);
    await api.startSession();

    const { catalogs } = await api.getCatalogs();
    return catalogs;
  }

  async getKpis(): Promise<{ kpis: any[] }> {
    const api = await this.apiPromise

    const kpis = await api.getKpis(this.catalogName);
    return kpis;
  }

  async getProperties(): Promise<any[]> {
    await this.metadataPromise
    return this.metadata.getProperties()
  }

  async getLevels(): Promise<any[]> {
    await this.metadataPromise
    return this.metadata.getLevels()
  }

  async getMember(
    parentLevel: MDSchemaLevel,
    parentName: string,
  ): Promise<any> {
    await this.metadataPromise
    await this.apiPromise

    if (this.api) {
      return await this.api.getMember(parentLevel, parentName)
    } else {
      throw new Error('API is not initialized')
    }
  }
}
