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
} from 'org.eclipse.daanse.board.app.lib.connection.base'

export interface IRestConnectionConfig extends BaseConnectionConfig {
  url: string
}

export class RestConnection extends BaseConnection {
  private url

  constructor(configuration: IRestConnectionConfig) {
    super(configuration)

    // this.url = super.initVariable(configuration.url);
    this.url = configuration.url
  }

  // fetch(config: IRequestParams): Promise<any> {
  fetch(config: any): Promise<any> {
    // return fetch(this.url.value + config.url);
    return fetch(this.url + config.url)
  }

  setConfig(): void {
    throw new Error('Method not implemented.')
  }

  static validateConfiguration(configuration: IRestConnectionConfig) {
    if (!configuration.url) {
      return false
    }

    return true
  }
}
