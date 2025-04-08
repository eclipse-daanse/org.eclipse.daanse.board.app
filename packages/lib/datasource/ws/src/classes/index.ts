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

// import { extractDataByPath } from "@/utils/helpers";
import { injectable, inject, Container } from 'inversify'
import { BaseDatasource, IBaseConnectionConfiguration } from 'org.eclipse.daanse.board.app.lib.datasource.base'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
// import type { ComputedString } from "@/plugins/variables/ComputedString";

export interface IWSStoreConfiguration extends IBaseConnectionConfiguration {
  connection: string
  topic?: string
}

export class WSStore extends BaseDatasource {
  private connection: any
  private accumulatedData: any[] = []
  private topic = ''

  constructor(configuration: IWSStoreConfiguration,
    @inject(identifiers.CONTAINER) private container: Container,) {
    super(configuration, container)

    this.connection = configuration.connection

    // const connectionRepository = (this as any).connectionRepository
    // const connection = connectionRepository.getConnection(
    //   this.connection,
    // ) as TwoWayConnection

    // if (configuration.topic && connection.hasTopics()) {
    //   this.topic = configuration.topic
    //   ;(connection as MQTTConnection).connectStore(this, configuration.topic)
    // }

    // connection.subscribe((event, data, topic) => {
    //   switch (event) {
    //     case 'connect':
    //       this.onConnect()
    //       break
    //     case 'message':
    //       this.onMessage(data, topic)
    //       break
    //     case 'close':
    //       this.onClose()
    //       break
    //     case 'error':
    //       this.onError(data)
    //       break
    //   }
    // })
  }

  private onError(error: any) {
    // throw new Error("Method not implemented.");
  }

  private onClose() {
    // throw new Error("Method not implemented.");
  }

  private onMessage(data: any, topic?: string) {
    if (this.topic && topic !== this.topic) return

    this.accumulatedData.push({
      message: data,
      timestamp: new Date(Date.now()).toTimeString(),
      topic: topic || 'default',
    })

    this.notify()
  }

  private onConnect() {
    // throw new Error("Method not implemented.");
  }

  private parseToDataTable(): any {
    // const data = this.accumulatedData
    // if (!Array.isArray(data)) return { items: [], headers: [], rows: [] }

    // const headers: string[] = ['index']
    // const rows: any[] = []

    // const items = data.map((item: any, index: number) => {
    //   if (typeof item !== 'object') return {}

    //   const row: IDataTableRow = {
    //     index,
    //   }

    //   for (const key in item) {
    //     if (typeof item[key] === 'object' || Array.isArray(item[key])) continue

    //     if (!headers.includes(key)) {
    //       headers.push(key)
    //     }

    //     row[key] = item[key]
    //   }

    //   return row
    // })

    // items.forEach((item: IDataTableRow, index: number) => {
    //   rows[index] = []

    //   headers.forEach((header: string) => {
    //     rows[index].push(item[header])
    //   })
    // })

    // return { items, headers, rows }
  }

  destroy(): void {
    console.log('Destroying WSStore')

    // const connectionRepository = (this as any).connectionRepository
    // const connection = connectionRepository.getConnection(
    //   this.connection,
    // ) as TwoWayConnection

    // if (connection && connection.hasTopics()) {
    //   ;(connection as MQTTConnection).disconnectStore(this)
    // }
  }

  getData(type: string): Promise<any> {
    // if (type === 'DataTable') {
    //   return this.parseToDataTable() as unknown as Promise<DataMap[T]>
    // }
    // if (type === 'object') {
    //   return { messages: this.accumulatedData } as unknown as Promise<
    //     DataMap[T]
    //   >
    // }
    // if (type === 'string') {
    //   return JSON.stringify(this.accumulatedData) as unknown as Promise<
    //     DataMap[T]
    //   >
    // }

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
