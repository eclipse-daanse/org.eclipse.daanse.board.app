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

import { UsesComputedVariable } from 'org.eclipse.daanse.board.app.lib.variables'
import { type IDataRetrieveable } from './api/IDataRetrieveable'
export {type IDataRetrieveable} from './api/IDataRetrieveable'
// import type ConnectionRepository from "./ConnectionRepository";
// import UsesComputedVariable from "./connections/UsesComputedVariable";
// import type DatasourceRepository from "./DatasourceRepository";

export interface IBaseConnectionConfiguration {
  [key: string]: any
  name: string
  type: string
  uid: string
}

// export default abstract class BaseDatasource extends UsesComputedVariable implements IDataRetrieveable {
export abstract class BaseDatasource extends UsesComputedVariable implements IDataRetrieveable{
  private subscribers: any[] = []

  protected pollingInterval: number = 5000
  private pollingActive = false
  private pollingIntervalId: number | null = null
  protected pollingEnabled!: boolean

  public name: string = ''
  public type: string = ''
  public uid: string = ''

  init(configuration: IBaseConnectionConfiguration) {
    this.type = configuration.type
    this.name = configuration.name
    this.uid = configuration.uid

    this.setUpdateCb(() => {
      console.log('Test notify')
      this.notify()
    })

    this.pollingEnabled = configuration.pollingEnabled ?? false
  }

  subscribe(subscriber: () => any) {
    this.subscribers.push(subscriber)
    // Return unsubscribe function
    return () => {
      this.unsubscribe(subscriber)
    }
  }

  unsubscribe(subscriber: () => any) {
    this.subscribers = this.subscribers.filter(sub => sub !== subscriber)
  }

  notify() {
    this.subscribers.forEach(subscriber => {
      subscriber()
    })
  }

  startPolling(interval: number) {
    this.stopPolling()
    if (this.pollingActive) return

    this.pollingActive = true
    this.pollingInterval = interval

    this.pollingIntervalId = window.setInterval(async () => {
      if (!this.pollingActive) return
      try {
        const resp = await this.getOriginalData()
        console.log(resp)
        this.notify()
      } catch (error) {
        console.warn('Polling error', error)
      }
    }, this.pollingInterval)

    console.log('Started polling', this.pollingIntervalId)
  }

  stopPolling() {
    console.log('Stopping polling', this.pollingIntervalId)
    this.pollingActive = false

    if (this.pollingIntervalId !== null) {
      window.clearInterval(this.pollingIntervalId)
      this.pollingIntervalId = null
    }
  }

  static validateConfiguration(config: any): boolean {
    return true
  }

  abstract getData(type: string, options?: any): Promise<any>
  abstract getOriginalData(): any
  abstract callEvent(event: string, params: any): void

  abstract destroy(): void
}
