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
import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  ConnectionRepository,
  identifier,
} from 'org.eclipse.daanse.board.app.lib.api.connection'
import {type BaseConnectionConfig} from 'org.eclipse.daanse.board.app.lib.connection.base'

export interface ConnectionDTO {
  uid: string
  name: string
  type: string
  config: {
    url: string
    [key: string]: any
  }
}

let repository: ConnectionRepository | undefined

/** Called by this package's activate - dependency injection at the module boundary. */
export function provideRepository(instance: ConnectionRepository): void {
  repository = instance
}

function requireRepository(): ConnectionRepository {
  if (!repository) {
    throw new Error('ConnectionRepository not provided - is the ui.vue.stores.connection module active?')
  }
  return repository
}

export const useConnectionsStore = defineStore('connections', () => {

  const connections = ref([
    {
      uid: 'test',
      name: 'Test Connection 01',
      type: 'rest',
      config: {
        url: 'https://jsonplaceholder.typicode.com/',
      },
    },
  ] as ConnectionDTO[])
  /*
   * Injected at module activation (see ../index.ts). The store is a global
   * singleton and may be first used outside component setup, so Vue's
   * inject() is not available here.
   */
  const connectionRepository = requireRepository()

  /**
   * Puts a connection into the repository, where the live object that talks
   * to it is built.
   *
   * Every path that adds or changes one goes through here - creating,
   * editing, loading a stored board, and the list this store starts with.
   * That last one used to be missed: the seeded connection existed in the
   * array and nowhere else, so every datasource reading through it failed
   * with "Connection with id test not found" until someone opened the
   * connection and pressed save. There is no autoload, so on a normal start
   * this list is all there is.
   *
   * The uid, name and type are copied into the config because that is where
   * a connection's own init() reads them.
   */
  const register = (connection: ConnectionDTO) => {
    connection.config['name'] = connection.name
    connection.config['type'] = connection.type
    connection.config['uid'] = connection.uid
    connectionRepository.registerConnection(
      connection.uid,
      connection.type,
      connection.config as BaseConnectionConfig,
    )
  }

  connections.value.forEach(register)

  const createConnection = (type: any, config: any = {}) => {
    const uid = Math.random().toString(36).substring(7)
    const connection: ConnectionDTO = { uid, type, name: 'Connection ' + uid, config }
    connections.value.push(connection)
    register(connection)
    return uid;
  }

  const removeConnection = (connectionId: string) => {
    const index = connections.value.findIndex((c) => c.uid === connectionId)

    if (index > -1) {
      connections.value.splice(index, 1)
    }
  }

  const updateConnection = (connectionId: string, connectionProxy: ConnectionDTO) => {
    const connection = connections.value.find((c) => c.uid === connectionId)

    if (!connection) return

    connection.uid = connectionProxy.uid
    connection.type = connectionProxy.type
    connection.name = connectionProxy.name
    connection.config = connectionProxy.config

    register(connection)
  }

  const updateConnections = (connectionProxies: ConnectionDTO[]) => {
    connections.value.splice(0)
    connectionProxies.forEach((connectionProxy) => {
      connections.value.push(connectionProxy)
      register(connectionProxy)
    })
  }

  return { connections, createConnection, removeConnection, updateConnection, updateConnections }
})
