/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
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

/**
 * The connection contract.
 *
 * The contract and nothing else - the OSGi API bundle. Implementations
 * and consumers both depend on this package; neither depends on the other.
 */

import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
import type { IRequestParams, BaseConnectionConfig } from 'org.eclipse.daanse.board.app.lib.connection.base'
import type { Connection } from 'org.eclipse.daanse.board.app.lib.model.workspace'

export type { IRequestParams, BaseConnectionConfig }
export type { Connection }

export interface IConnection {
    fetch(config: IRequestParams, options?: any): Promise<any>;
    setConfig(config: any): void;
}

export interface PubSubConnection {
    setConfig(config: any): void;
    subscribe(subscriber: (event: PubSubEvents, data?: any) => any): void;
    unsubscribe(subscriber: () => any): void;
    notify(event: PubSubEvents, data?: any): void;
}

export type PubSubEvents = 'connect' | 'message' | 'close' | 'error';

export interface ConnectionIdentifiers {
    Connection: symbol;
    Settings: symbol;
}

export interface ConnectionRepository {
  /**
  * Resolves one of the identifiers a registered type entry carries
  * (Connection factory, Settings component). All of them are created with
  * Symbol.for, so the symbol's description IS the service id.
  */
  resolveIdentifier<T>(identifier: symbol): T;
  removeConnection(connectionId: string): void;
  getConnection(connectionId: string): IConnection | PubSubConnection;
  registerConnectionType(name: string, identifiers: ConnectionIdentifiers): void;
  /**
  * Nimmt die Registrierung eines Verbindungstyps zurück.
  *
  * Gegenstück zu registerConnectionType, damit ein Modul seine
  * Registrierung in deactivate() wieder aufheben kann. Betrifft nur den
  * Typ; bestehende Verbindungen werden über removeConnection entfernt.
  *
  * @returns ob der Typ registriert war
  */
  unregisterConnectionType(name: string): boolean;
  get registeredConnections(): string[];
  getConnectionIdentifiers(type: string): ConnectionIdentifiers;
  getRegisteredTypes(): string[];
  getConnectionType(connectionId: string): string;
  getConnectionId(connection: IConnection | PubSubConnection): string | undefined;
  getConnectionTypeFromConnection(connection: IConnection | PubSubConnection): string | undefined;
  registerConnection(connectionId: string, type: string, connectionConfig: BaseConnectionConfig): void;

  /*
   * The modelled side. A connection is an object in the workspace; the live
   * thing that talks to the endpoint is built from it and kept beside it.
   * Everything below writes both, so there is one way to change a
   * connection rather than one per caller.
   */

  /** The connections the workspace holds, in order. */
  getConnections(): Connection[];
  /** One of them, or nothing if no connection carries that uid. */
  getConnectionModel(connectionId: string): Connection | undefined;
  /** Adds one to the workspace and builds its live object. */
  createConnection(type: string, config?: Record<string, unknown>): Connection;
  /** Rebuilds the live object after the modelled one was changed. */
  saveConnection(connection: Connection): void;
  /**
   * Replaces every connection at once - what loading a stored workspace
   * does. Takes plain objects because that is the shape a stored board
   * holds; each becomes a modelled connection with its live object.
   */
  setConnections(connections: StoredConnection[]): void;
}

/** A connection as a stored board writes it. */
export interface StoredConnection {
  uid: string;
  name: string;
  type: string;
  config?: Record<string, unknown>;
}

export const CONNECTION_REPOSITORY = serviceId<ConnectionRepository>('ConnectionRepository')
export const identifier = Symbol.for(CONNECTION_REPOSITORY)
