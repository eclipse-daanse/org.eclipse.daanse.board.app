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
import { createGraphiQLFetcher, type Fetcher } from '@graphiql/toolkit'

export interface IGraphQLConnectionConfiguration extends BaseConnectionConfig {
  url: string
}

export class GraphQLConnection extends BaseConnection {
  private url: any
  public fetcher: Fetcher | null

  constructor(configuration: IGraphQLConnectionConfiguration) {
    super(configuration)

    // this.url = super.initVariable(configuration.url);
    this.url = configuration.url

    // TODO: fix reactivity for computed string
    if (typeof window === 'undefined') {
      this.fetcher = null // For testing purposes. Node.js does not have a fetch implementation.
    } else {
      this.fetcher = createGraphiQLFetcher({
        // url: this.url.value
        url: this.url,
      })
    }
  }

  fetch(config: IRequestParams): Promise<any> {
    throw new Error('Method not implemented.')
  }

  setConfig(): void {
    throw new Error('Method not implemented.')
  }

  static validateConfiguration(configuration: IGraphQLConnectionConfiguration) {
    if (!configuration.url) {
      return false
    }

    return true
  }
}
