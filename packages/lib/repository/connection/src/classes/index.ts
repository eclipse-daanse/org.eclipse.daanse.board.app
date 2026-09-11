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
export type { IConnection, PubSubEvents, PubSubConnection, ConnectionIdentifiers, StoredConnection } from 'org.eclipse.daanse.board.app.lib.api.connection'
import type { IConnection, PubSubEvents, PubSubConnection, ConnectionIdentifiers, StoredConnection } from 'org.eclipse.daanse.board.app.lib.api.connection'
import {
  WORKSPACE,
  ConnectionImpl,
  type Connection,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'

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

  /*
   * Resolved on first use, not in the constructor: this repository is
   * created while its own module activates, and the workspace may not be
   * registered yet at that point.
   */
  private workspaceHeld: Workspace | undefined

  private get workspace(): Workspace {
    if (!this.workspaceHeld) {
      this.workspaceHeld = this.resolver.getRequired<Workspace>(WORKSPACE)
    }
    return this.workspaceHeld
  }

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

  /**
   * Takes a connection out of the workspace and lets go of its live object.
   *
   * Both halves, because both existed: the live object used to be left
   * registered when a connection was deleted, since the removal happened in
   * a store that knew nothing about it.
   */
  removeConnection(connectionId: string): void {
    connections.delete(connectionId)
    this.connectionsByType[connectionId] = undefined as unknown as string

    const held = this.workspace.connections
    const at = held.toArray().findIndex((connection: Connection) => connection.uid === connectionId)
    if (at > -1) held.removeAt(at)
  }

  getConnections(): Connection[] {
    return this.workspace.connections.toArray()
  }

  getConnectionModel(connectionId: string): Connection | undefined {
    return this.getConnections().find((connection) => connection.uid === connectionId)
  }

  createConnection(type: string, config: Record<string, unknown> = {}): Connection {
    const connection = new ConnectionImpl()
    connection.uid = Math.random().toString(36).substring(7)
    connection.name = 'Connection ' + connection.uid
    connection.type = type
    connection.config = config

    this.workspace.connections.push(connection)
    this.saveConnection(connection)
    return connection
  }

  /**
   * Rebuilds the live object from a connection that was changed.
   *
   * The uid, name and type are copied into the config because that is where
   * a connection's own init() reads them - the one place that happens now,
   * rather than at each caller.
   */
  saveConnection(connection: Connection): void {
    const config = (connection.config ?? {}) as Record<string, unknown>
    config['uid'] = connection.uid
    config['name'] = connection.name
    config['type'] = connection.type
    connection.config = config

    /*
     * A connection with no type yet is a legitimate half-finished thing -
     * the tree creates one and the person picks the type afterwards. There
     * is nothing to build from it until then, and it is not a mistake.
     */
    if (!connection.type) return

    this.registerConnection(
      connection.uid as string,
      connection.type as string,
      config as unknown as BaseConnectionConfig,
    )
  }

  setConnections(stored: StoredConnection[]): void {
    const held = this.workspace.connections
    for (const connection of held.toArray()) {
      this.removeConnection(connection.uid as string)
    }
    held.clear()

    for (const entry of stored) {
      const connection = new ConnectionImpl()
      connection.uid = entry.uid
      connection.name = entry.name
      connection.type = entry.type
      connection.config = entry.config ?? {}
      held.push(connection)
      this.saveConnection(connection)
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
