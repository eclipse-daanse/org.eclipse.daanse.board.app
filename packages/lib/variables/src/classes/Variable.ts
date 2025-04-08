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

import { TinyEmitter } from 'tiny-emitter'
import { VariableStorage } from '../storage/VariableStorage'
import { RefreshType, VariableEvents } from '..'
import { type IVariableConfig } from '..'

export class Variable {
  private subscribers: any[] = []
  private innerValue: any

  public intervalFn: () => any = () => {}
  public description: string = ''
  private refreshInterval: number = 0
  private refreshType: RefreshType = RefreshType.None
  private refreshIntervalId: number = 0
  private refreshTrigger: string = null as unknown as string

  constructor(
    public name: string,
    protected storage: VariableStorage,
    private eventBus: TinyEmitter,
    config: IVariableConfig,
  ) {
    this.description = config.description
    this.eventBus = eventBus

    this.refreshInterval = config.refreshInterval || 0
    this.refreshInterval = Math.max(this.refreshInterval, 300)
    this.refreshType = config.refreshType || RefreshType.None
    this.refreshTrigger = config.refreshTrigger || (null as unknown as string)

    if (this.refreshType === RefreshType.Interval) {
      if (this.refreshInterval) {
        this.refreshIntervalId = setInterval(() => {
          this.intervalFn()
        }, this.refreshInterval) as unknown as number
      }
    } else if (this.refreshType === RefreshType.Trigger) {
      if (this.refreshTrigger) {
        this.eventBus.on(this.refreshTrigger, () => {
          this.intervalFn()
        })
      }
    }
  }

  set onInterval(onInterval: () => any) {
    this.intervalFn = onInterval
  }

  get value(): any {
    return this.innerValue
  }

  set value(value) {
    this.innerValue = value
    console.log('Value changed')
    console.log(this.subscribers[0])
    this.subscribers.forEach(subscriber => subscriber())
  }

  subscribe(subscriber: () => any) {
    this.subscribers.push(subscriber)
  }

  unsubscribe(subscriber: () => any) {
    this.subscribers = this.subscribers.filter(sub => sub !== subscriber)
  }

  notyfy() {
    this.eventBus.emit(VariableEvents.VariableUpdated)
    this.subscribers.forEach(subscriber => subscriber())
  }

  forceUpdate() {}

  clearInterval() {
    clearInterval(this.refreshIntervalId)
  }

  clearTrigger() {
    if (this.refreshTrigger) {
      this.eventBus.off(this.refreshTrigger)
    }
  }
}
