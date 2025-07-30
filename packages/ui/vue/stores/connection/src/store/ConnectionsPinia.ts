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
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import {
  ConnectionRepository,
  identifier,
} from 'org.eclipse.daanse.board.app.lib.repository.connection'
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
  const connectionRepository = container.get<ConnectionRepository>(identifier)

  const createConnection = (type: any, config: any = {}) => {
    const uid = Math.random().toString(36).substring(7)
    const name = 'Connection ' + uid
    config['name'] = name;
    config['type'] = type;
    config['uid'] = uid;
    connectionRepository.registerConnection(uid, type, config)
    connections.value.push({ uid, type, name, config })
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
    connection.config['name'] = connectionProxy.name
    connection.config['type'] =connectionProxy.type
    connection.config['uid'] =connectionProxy.uid

    connectionRepository.registerConnection(connectionId, connection.type, connection.config as BaseConnectionConfig)
    console.log(connectionRepository)
  }

  const updateConnections = (connectionProxies: ConnectionDTO[]) => {
    connections.value.splice(0)
    connectionProxies.forEach((connectionProxy) => {
      connections.value.push(connectionProxy)

      connectionProxy.config['name'] = connectionProxy.name
      connectionProxy.config['type'] =connectionProxy.type
      connectionProxy.config['uid'] =connectionProxy.uid

      connectionRepository.registerConnection(
        connectionProxy.uid,
        connectionProxy.type,
        connectionProxy.config as BaseConnectionConfig,
      )
    })
  }

  return { connections, createConnection, removeConnection, updateConnection, updateConnections }
})
