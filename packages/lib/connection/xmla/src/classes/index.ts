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

  async fetch(config: IRequestParams): Promise<any> {
    await this.apiPromise
    const mdxResponce = await this.api.getMDX(
      config.data.mdx,
      this.catalogName,
      config.format,
      config.properties,
    )
    return mdxResponce
  }

  setConfig(): void {
    throw new Error('Method not implemented.')
  }

  static validateConfiguration(configuration: IXmlaConnectionConfiguration) {
    return XmlaConnection.configurationProblems(configuration).length === 0
  }

  /**
   * What keeps this configuration from opening a connection, one phrase
   * each - empty when nothing does.
   *
   * Said rather than answered with false: a catalogue left empty because
   * the server could not be asked for its list otherwise surfaced as
   * "Invalid XmlaConnection configuration", which names neither the field
   * nor the cause.
   */
  static configurationProblems(configuration: Partial<IXmlaConnectionConfiguration>): string[] {
    const problems: string[] = []
    if (!configuration?.url) {
      problems.push('it has no URL of an XMLA server')
    }
    if (!configuration?.catalogName) {
      problems.push('it names no catalogue to query')
    }
    return problems
  }

  /** The catalogues the server at this URL offers. */
  static async getCatalogs(url: string, security: SecurityOptions): Promise<DBSchemaCatalog[]> {
    const api = await XmlaConnection.openApi(url, security)
    const { catalogs } = await api.getCatalogs()
    return catalogs ?? []
  }

  /** The cubes one of the server's catalogues holds. */
  static async getCubes(
    url: string,
    security: SecurityOptions,
    catalogName: string,
  ): Promise<MDSchemaCube[]> {
    const api = await XmlaConnection.openApi(url, security)
    const { cubes } = await api.getCubes(catalogName)
    return cubes ?? []
  }

  private static async openApi(url: string, security: SecurityOptions): Promise<XMLAApi> {
    const client = await createClientAsync('xmla.wsdl')

    if (security.type === 'Basic' && security.user) {
      client.setSecurity(new BasicAuthSecurity(security.user, security.password))
    }

    client.setEndpoint(url)
    const api = new XMLAApi(client, url)
    await api.startSession()
    return api
  }

  async getApi(): Promise<XMLAApi> {
    await this.apiPromise
    return this.api
  }
}
