/**
  Copyright (c) 2025 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena
 */
import { type RestConnection } from 'org.eclipse.daanse.board.app.lib.connection.rest'

export interface SparqlEndpointRegistryI {
  registerEndpoint(connection: RestConnection, id: string): void

  getEndpointsByName(name: string): RestConnection | undefined

  getActiveEndpoints(id: string): RestConnection | undefined

  getAllActiveEndpoints(): Record<string, RestConnection> | undefined

  setActive(id: string): void

  setInActive(id: string): void
}
