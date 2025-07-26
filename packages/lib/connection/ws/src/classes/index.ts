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

import { TwoWayConnection } from 'org.eclipse.daanse.board.app.lib.connection.twowayconnection'

export interface IWSConnectionConfiguration {
  url: string
}

export class WSConnection extends TwoWayConnection {
  private socket: WebSocket | null = null

  constructor() {
    super()
  }

  init(configuration: IWSConnectionConfiguration): void {
    this.socket = new WebSocket(configuration.url)

    this.socket.onopen = () => {
      super.onConnect()
    }

    this.socket.onmessage = (event: any) => {
      super.onMessage(event.data)
    }

    this.socket.onclose = () => {
      super.onClose()
    }

    this.socket.onerror = error => {
      super.onError(error)
    }
  }

  setConfig(): void {
    throw new Error('Method not implemented.')
  }

  static validateConfiguration(configuration: IWSConnectionConfiguration) {
    if (!configuration.url) {
      return false
    }

    return true
  }

  hasTopics(): boolean {
    return false
  }
}
