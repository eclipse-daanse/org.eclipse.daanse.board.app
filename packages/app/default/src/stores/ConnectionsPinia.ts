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
import { ref, getCurrentInstance } from 'vue'
import { defineStore } from 'pinia'
import type { Container } from 'inversify'
import {
  ConnectionRepository,
  identifier,
} from 'org.eclipse.daanse.board.app.lib.repository.connection'

interface ConnectionDTO {
  uid: string
  name: string
  type: string
  config: {
    url: string
    [key: string]: any
  }
}

export const useConnectionsStore = defineStore('connections', () => {
  const instance = getCurrentInstance()
  const container = instance?.appContext.config.globalProperties.$container as Container

  const connections = ref([] as ConnectionDTO[])
  const connectionRepository = container.get<ConnectionRepository>(identifier)

  const createConnection = (type: any, config: any = {}) => {
    const uid = Math.random().toString(36).substring(7)
    const name = 'Connection ' + uid

    connectionRepository.registerConnection(uid, type, config)
    connections.value.push({ uid, type, name, config })
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

    connectionRepository.registerConnection(connectionId, connection.type, connection.config)
    console.log(connectionRepository)
  }

  const updateConnections = (connectionProxies: ConnectionDTO[]) => {
    connections.value.splice(0)
    connectionProxies.forEach((connectionProxy) => {
      connections.value.push(connectionProxy)

      connectionRepository.registerConnection(
        connectionProxy.uid,
        connectionProxy.type,
        connectionProxy.config,
      )
    })
  }

  return { connections, createConnection, removeConnection, updateConnection, updateConnections }
})
