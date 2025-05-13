/**
  Copyright (c) 2025 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena
 */
import type { SparqlEndpointRegistryI } from './SparqlEndpointRegistry.api'
import { type RestConnection } from 'org.eclipse.daanse.board.app.lib.connection.rest'


const connections: Record<string, RestConnection> = {}
const activeConnectionIds: string[] = []

export function useSparQLEndPointManager() {

  const registerEndpoint = (connection: RestConnection, id: string) => {
    connections[id] = connection

  }
  const getEndpointsByName = (name: string) => {
    return connections[name]
  }
  const getAllActiveEndpoints = () => {
    return Object.fromEntries(Object.entries(connections).filter((k) => activeConnectionIds.includes(k[0]))) as Record<string, RestConnection>
  }
  const getActiveEndpoints = (id: string) => {
    if (activeConnectionIds.includes(id)) {
      return connections[id]
    } else {
      return undefined
    }
  }
  const setActive = (id: string) => {
    if (activeConnectionIds.includes(id)) return
    if (!connections[id]) return
    activeConnectionIds.push(id)
  }
  const setInActive = (id: string) => {
    const pos = activeConnectionIds.indexOf(id)
    if (pos != -1) activeConnectionIds.splice(pos)
  }
  return {
    registerEndpoint,
    getEndpointsByName,
    getActiveEndpoints,
    setActive,
    setInActive,
    getAllActiveEndpoints
  } as SparqlEndpointRegistryI
}
