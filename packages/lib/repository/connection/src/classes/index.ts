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
  ConnectionFactory,
  identifier as ConnectionFactoryIdentifier,
} from 'org.eclipse.daanse.board.app.lib.factory.connection'
import {
  type IRequestParams,
  type BaseConnectionConfig,
} from 'org.eclipse.daanse.board.app.lib.connection.base'
import { inject, injectable } from 'inversify'

export interface IConnection {
  fetch(config: IRequestParams): Promise<any>
  setConfig(config: any): void
}

export type PubSubEvents = 'connect' | 'message' | 'close' | 'error'

export interface PubSubConnection {
  setConfig(config: any): void
  subscribe(subscriber: (event: PubSubEvents, data?: any) => any): void
  unsubscribe(subscriber: () => any): void
  notify(event: PubSubEvents, data?: any): void
}

export interface ConnectionIdentifiers {
  Connection: symbol
  Settings: symbol
}

const connections = new Map<string, IConnection | PubSubConnection>()

@injectable()
export class ConnectionRepository {
  private availableConnections: Record<string, ConnectionIdentifiers> = {}

  constructor(
    @inject(ConnectionFactoryIdentifier)
    private connectionFactory: ConnectionFactory,
  ) {}

  removeConnection(connectionId: string): void {
    if (connections.has(connectionId)) {
      connections.delete(connectionId)
    }
  }

  getConnection(connectionId: string): IConnection | PubSubConnection {
    const connection = connections.get(connectionId)
    if (!connection)
      throw new Error(`Connection with id ${connectionId} not found`)

    return connection
  }

  registerConnectionType(
    name: string,
    identifiers: ConnectionIdentifiers,
  ): void {
    this.availableConnections[name] = identifiers
  }

  get registeredConnections(): string[] {
    return Object.keys(this.availableConnections)
  }

  getConnectionIdentifiers(type: string): ConnectionIdentifiers {
    return this.availableConnections[type]
  }

  registerConnection(
    connectionId: string,
    type: string,
    connectionConfig: BaseConnectionConfig,
  ): void {
    const identifiers = this.availableConnections[type]

    if (identifiers) {
      const connection = this.connectionFactory.createConnection<
        IConnection | PubSubConnection
      >(identifiers.Connection, connectionConfig)
      connections.set(connectionId, connection)
    }
  }
}
