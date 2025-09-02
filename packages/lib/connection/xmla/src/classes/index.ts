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
import { createClientAsync, BasicAuthSecurity } from '../utils/XMLAClient'
import { MetadataStore } from './MetadataStorage'

export interface IXmlaConnectionConfiguration extends BaseConnectionConfig {
  url: string
  cubeName: string
  catalogName: string
  security: 'Basic' | 'None'
  user?: string
  password?: string
}

export interface SecurityOptions {
  type: 'None' | 'Basic'
  user?: string
  password?: string
}

export class XmlaConnection extends BaseConnection {
  public url: string = ''
  public catalogName: string = ''
  public cubeName: string = ''
  public metadata: MetadataStore = null as unknown as MetadataStore
  private api: XMLAApi = null as unknown as XMLAApi
  private apiPromiseResolve: ((value: unknown) => void) | undefined
  private apiPromise

  public security: 'Basic' | 'None' = 'None'
  public user: string = ''
  public password: string = ''

  constructor() {
    super()

    this.apiPromise = new Promise(resolve => {
      this.apiPromiseResolve = resolve
    })
  }

  async init(configuration: IXmlaConnectionConfiguration): Promise<void> {
    super.init(configuration)

    this.url = configuration.url
    this.catalogName = configuration.catalogName
    this.cubeName = configuration.cubeName
    this.security = configuration.security || 'None'
    this.user = configuration.user || ''
    this.password = configuration.password || ''

    this.api = await this.initApi()
    this.metadata = await this.initMetadata()

    if (this.apiPromiseResolve) {
      this.apiPromiseResolve(this.api)
    }
  }

  async initApi(): Promise<XMLAApi> {
    const client = await createClientAsync('xmla.wsdl')

    if (this.security === 'Basic') {
      client.setSecurity(new BasicAuthSecurity(this.user, this.password))
    }

    client.setEndpoint(this.url)
    const api = new XMLAApi(client, this.url)
    await api.startSession()

    return api
  }

  async initMetadata(): Promise<MetadataStore> {
    const metadataStore = new MetadataStore(this.api)

    await metadataStore.loadMetadata(this.catalogName, this.cubeName)
    return metadataStore
  }

  async fetch(config: IRequestParams): Promise<any> {
    await this.apiPromise
    const mdxResponce = await this.api.getMDX(
      config.data.mdx,
      this.catalogName,
      config.format,
    )
    return mdxResponce
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

    return true
  }



  static async getCatalogs(url: string, security: SecurityOptions): Promise<DBSchemaCatalog[]> {
    const client = await createClientAsync('xmla.wsdl')

    if (security.type === 'Basic' && security.user) {
      const securityClass = new BasicAuthSecurity(security.user, security.password)
      console.log('Security class:', securityClass)

      client.setSecurity(securityClass)
    }

    client.setEndpoint(url)
    console.log("Client", client)
    const api = new XMLAApi(client, url)
    await api.startSession()

    const { catalogs } = await api.getCatalogs()
    return catalogs
  }

  async getApi(): Promise<XMLAApi> {
    await this.apiPromise
    return this.api
  }
}
