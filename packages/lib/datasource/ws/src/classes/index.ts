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
  BaseDatasource,
  IBaseConnectionConfiguration,
} from 'org.eclipse.daanse.board.app.lib.datasource.base'
import { type TwoWayConnection } from 'org.eclipse.daanse.board.app.lib.connection.twowayconnection'
import {
  identifier,
  ConnectionRepository,
} from 'org.eclipse.daanse.board.app.lib.repository.connection'
import { inject } from 'inversify'

export interface IWSStoreConfiguration extends IBaseConnectionConfiguration {
  connection: string
  topic?: string
}

export class WSStore extends BaseDatasource {
  private connection: any
  private accumulatedData: any[] = []
  private lastMessage: any = null
  private accumulate: boolean = false
  private topic = ''

  @inject(identifier)
  private connectionRepository!: ConnectionRepository

  init(configuration: IWSStoreConfiguration) {
    super.init(configuration)

    this.connection = configuration.connection
    this.accumulate = configuration.accumulate ?? false

    const connection = this.connectionRepository.getConnection(
      this.connection,
    ) as TwoWayConnection

    if (configuration.topic && connection.hasTopics()) {
      this.topic = configuration.topic
      ;(connection as any).connectStore(this, configuration.topic)
    }

    connection.subscribe((event, data, topic) => {
      switch (event) {
        case 'connect':
          this.onConnect()
          break
        case 'message':
          this.onMessage(data, topic)
          break
        case 'close':
          this.onClose()
          break
        case 'error':
          this.onError(data)
          break
      }
    })
  }

  private onError(error: any) {
    // throw new Error("Method not implemented.");
  }

  private onClose() {
    // throw new Error("Method not implemented.");
  }

  private onMessage(data: any, topic?: string) {
    if (this.topic && topic !== this.topic) return

    if (this.accumulate) {
      this.accumulatedData.push({
        message: data,
        timestamp: new Date(Date.now()).toTimeString(),
        topic: topic || 'default',
      })
    } else {
      this.lastMessage = {
        message: data,
        timestamp: new Date(Date.now()).toTimeString(),
        topic: topic || 'default',
      }
    }

    this.notify()
  }

  private onConnect() {
    // throw new Error("Method not implemented.");
  }

  private parseToDataTable(): any {
    let data = [this.lastMessage]
    if (this.accumulate) {
      data = this.accumulatedData
    }
    if (!Array.isArray(data)) return { items: [], headers: [], rows: [] }

    const headers: string[] = ['index']
    const rows: any[] = []

    const items = data.map((item: any, index: number) => {
      if (typeof item !== 'object') return {}

      const row: any = {
        index,
      }

      for (const key in item) {
        if (typeof item[key] === 'object' || Array.isArray(item[key])) continue

        if (!headers.includes(key)) {
          headers.push(key)
        }

        row[key] = item[key]
      }

      return row
    })

    items.forEach((item: any, index: number) => {
      rows[index] = []

      headers.forEach((header: string) => {
        rows[index].push(item[header])
      })
    })

    return { items, headers, rows }
  }

  destroy(): void {
    console.log('Destroying WSStore')

    const connection = this.connectionRepository.getConnection(
      this.connection,
    ) as TwoWayConnection

    if (connection && connection.hasTopics()) {
      ;(connection as any).disconnectStore(this)
    }
  }

  getData(type: string): any {
    let data = this.lastMessage
    if (this.accumulate) {
      data = this.accumulatedData
    }

    if (type === 'DataTable') {
      return this.parseToDataTable()
    }
    if (type === 'object') {
      return JSON.stringify(data)
    }
    if (type === 'string') {
      return JSON.stringify(data)
    }

    throw new Error('Method not implemented.')
  }

  getOriginalData() {
    throw new Error('Method not implemented.')
  }

  callEvent(event: string, params: any): void {
    throw new Error('Method not implemented.')
  }

  static validateConfiguration(configuration: IWSStoreConfiguration) {
    if (!configuration?.connection) {
      return false
    }
    return true
  }
}
