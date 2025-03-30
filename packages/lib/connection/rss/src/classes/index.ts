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
  type IRequestParams,
} from 'org.eclipse.daanse.board.app.lib.connection.base'
import Parser from 'rss-parser/dist/rss-parser.js'

export interface IRssConnectionConfiguration extends BaseConnectionConfig {
  url: string
}

export class RssConnection extends BaseConnection {
  private url
  private parser

  constructor(configuration: IRssConnectionConfiguration) {
    super(configuration)

    // this.url = super.initVariable(configuration.url);
    this.url = configuration.url
    this.parser = new Parser()
  }

  fetch(config: IRequestParams): Promise<any> {
    return this.parser.parseURL(
      'https://cors-anywhere.herokuapp.com/' + this.url,
    )
    // return fetch(this.url.value + config.url);
  }

  setConfig(): void {
    throw new Error('Method not implemented.')
  }

  static validateConfiguration(configuration: IRssConnectionConfiguration) {
    if (!configuration.url) {
      return false
    }

    return true
  }
}
