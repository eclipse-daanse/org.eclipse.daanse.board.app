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
  type IRequestParams,
  type BaseConnectionConfig,
} from 'org.eclipse.daanse.board.app.lib.connection.base'

/*
 * The contract lives in lib.api.connection - re-exported here so old
 * import paths keep compiling during the transition.
 */
export type { IConnection, PubSubEvents, PubSubConnection, ConnectionIdentifiers } from 'org.eclipse.daanse.board.app.lib.api.connection'
import type { IConnection, PubSubEvents, PubSubConnection, ConnectionIdentifiers } from 'org.eclipse.daanse.board.app.lib.api.connection'

const connections = new Map<string, IConnection | PubSubConnection>()

/**
 * The slice of the service registry a repository needs: resolving the
 * identifiers its type entries carry. Injected through the constructor -
 * the repository names its dependency instead of reaching for a global.
 */
export interface IdentifierResolver {
  getRequired<T>(id: string): T
}

export class ConnectionRepository {
  constructor(private readonly resolver: IdentifierResolver) {}

  /**
   * Resolves one of the identifiers a registered type entry carries
   * (Connection factory, Settings component). All of them are created with
   * Symbol.for, so the symbol's description IS the service id.
   */
  resolveIdentifier<T>(identifier: symbol): T {
    return this.resolver.getRequired<T>(identifier.description as string)
  }

  private availableConnections: Record<string, ConnectionIdentifiers> = {}
  private connectionsByType: Record<string, string> = {}

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

  /**
   * Nimmt die Registrierung eines Verbindungstyps zurück.
   *
   * Gegenstück zu registerConnectionType, damit ein Modul seine
   * Registrierung in deactivate() wieder aufheben kann. Betrifft nur den
   * Typ; bestehende Verbindungen werden über removeConnection entfernt.
   *
   * @returns ob der Typ registriert war
   */
  unregisterConnectionType(name: string): boolean {
    if (!(name in this.availableConnections)) {
      return false
    }
    delete this.availableConnections[name]
    return true
  }

  get registeredConnections(): string[] {
    return Object.keys(this.availableConnections)
  }

  getConnectionIdentifiers(type: string): ConnectionIdentifiers {
    return this.availableConnections[type]
  }
  getRegisteredTypes() {
    return Object.keys(this.availableConnections)
  }
  getConnectionType(connectionId: string) {
    return this.connectionsByType[connectionId]
  }
  getConnectionId(connection: IConnection | PubSubConnection) {
    let key: string | undefined
    connections.forEach((aconnection, akey) => {
      if (connection === aconnection) {
        key = akey
      }
    })
    return key
  }
  getConnectionTypeFromConnection(connection: IConnection | PubSubConnection) {
    const id = this.getConnectionId(connection)
    if (!id) return undefined
    return this.getConnectionType(id)
  }
  registerConnection(
    connectionId: string,
    type: string,
    connectionConfig: BaseConnectionConfig,
  ): void {
    const identifiers = this.availableConnections[type]

    /*
     * Saying so rather than dropping it: the caller asked for a connection
     * of this type to exist, and it will not. Everything reading through it
     * fails later with "Connection with id ... not found", far from here.
     */
    if (!identifiers) {
      console.warn(
        `Connection "${connectionId}" not registered: no connection type "${type}". ` +
          `Known types: ${Object.keys(this.availableConnections).join(', ') || 'none'}`,
      )
      return
    }

    const connectionFactory = this.resolveIdentifier<(c: BaseConnectionConfig) => IConnection | PubSubConnection>(identifiers.Connection)
    const connection = connectionFactory(connectionConfig)
    connections.set(connectionId, connection)
    this.connectionsByType[connectionId] = type
  }
}
