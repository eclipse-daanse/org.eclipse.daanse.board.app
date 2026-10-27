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
import type { Credentials } from '@eclipse-daanse/xmla-client'

import { DEFAULT_TIMEOUT_SECONDS, XMLAApi } from './xml'
import type { RequestOptions } from './xml'

export interface IXmlaConnectionConfiguration extends BaseConnectionConfig {
  url: string
  cubeName: string
  catalogName: string
  security: 'Basic' | 'None'
  user?: string
  password?: string
  /** Seconds one request may take; 0 waits for as long as the server does. */
  timeout?: number | string
}

/** The timeout as configured; a form field may hand it over as text. */
function timeoutOf(value: number | string | undefined): number {
  if (value === undefined || value === '') return DEFAULT_TIMEOUT_SECONDS
  const seconds = Number(value)
  return Number.isFinite(seconds) && seconds >= 0 ? seconds : DEFAULT_TIMEOUT_SECONDS
}

export interface SecurityOptions {
  type: 'None' | 'Basic'
  user?: string
  password?: string
}

function credentialsOf(security: SecurityOptions): Credentials {
  if (security.type === 'Basic' && security.user) {
    return { kind: 'basic', username: security.user, password: security.password ?? '' }
  }
  return { kind: 'none' }
}

export class XmlaConnection extends BaseConnection {
  public url: string = ''
  public catalogName: string = ''
  public cubeName: string = ''

  public security: 'Basic' | 'None' = 'None'
  public user: string = ''
  public password: string = ''
  public timeout: number = DEFAULT_TIMEOUT_SECONDS

  private apiPromise: Promise<XMLAApi> | null = null

  init(configuration: IXmlaConnectionConfiguration): void {
    super.init(configuration)

    this.url = configuration.url
    this.catalogName = configuration.catalogName
    this.cubeName = configuration.cubeName
    this.security = configuration.security || 'None'
    this.user = configuration.user || ''
    this.password = configuration.password || ''
    this.timeout = timeoutOf(configuration.timeout)

    this.apiPromise = null
    // Connect eagerly, as before; a failure surfaces on first use.
    this.getApi().catch(() => {})
  }

  private async connect(): Promise<XMLAApi> {
    const api = new XMLAApi({
      url: this.url,
      catalog: this.catalogName,
      credentials: credentialsOf({ type: this.security, user: this.user, password: this.password }),
      timeoutSeconds: this.timeout,
    })
    await api.startSession()
    return api
  }

  /**
   * The api, connected once and shared. A failed connect is not kept, so
   * the next caller tries again rather than waiting forever.
   */
  getApi(): Promise<XMLAApi> {
    if (!this.apiPromise) {
      const connecting = this.connect()
      this.apiPromise = connecting
      connecting.catch(() => {
        if (this.apiPromise === connecting) this.apiPromise = null
      })
    }
    return this.apiPromise
  }

  /** `config.signal` gives up on the query; the connection stays usable. */
  async fetch(config: IRequestParams & RequestOptions): Promise<any> {
    const api = await this.getApi()
    config.signal?.throwIfAborted()
    return api.getMDX(config.data.mdx, this.catalogName, config.format, {
      signal: config.signal,
      properties: config.properties,
    })
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

  /** Lists the catalogs of a server not yet configured; no session needed. */
  static async getCatalogs(url: string, security: SecurityOptions): Promise<DBSchemaCatalog[]> {
    const api = new XMLAApi({ url, credentials: credentialsOf(security) })
    const { catalogs } = await api.getCatalogs()
    return catalogs ?? []
  }

  /** The cubes one of the server's catalogues holds; no session needed either. */
  static async getCubes(
    url: string,
    security: SecurityOptions,
    catalogName: string,
  ): Promise<MDSchemaCube[]> {
    const api = new XMLAApi({ url, credentials: credentialsOf(security) })
    const { cubes } = await api.getCubes(catalogName)
    return cubes ?? []
  }
}
