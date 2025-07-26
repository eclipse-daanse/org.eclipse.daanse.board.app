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


import {  RefreshType, VariableEvents } from '..'
import { type IVariableConfig } from '..'
import {
  type VariableRepository,
  identifier as variableRepositoryIdentifier
} from 'org.eclipse.daanse.board.app.lib.repository.variable'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { type TinyEmitter } from 'tiny-emitter'
import { Serializable } from '../interface/JSONSerializableI'
import { inject } from 'inversify'


const TYPE = 'Variable'
const symbol = Symbol.for(TYPE)

abstract class Variable implements Serializable{
  private subscribers: any[] = []
  private innerValue: any

  public intervalFn: () => any = () => {}
  public description: string = ''
  private refreshInterval: number = 0
  private refreshType: RefreshType = RefreshType.None
  private refreshIntervalId: number = 0
  private refreshTrigger: string = null as unknown as string
  public type: string = null as unknown as string
  public name: string = null as unknown as string

  @inject(identifiers.TINY_EMITTER)
  public eventBus?: TinyEmitter;

  @inject(variableRepositoryIdentifier)
  public storage?: VariableRepository;

  public init(name: string, config: IVariableConfig) {
    this.name = name;

    this.update(config);
  }

  public rename(newName: string){
    this.name = newName;
  }
  public update(config: IVariableConfig){
    this.description = config.description
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
        this.eventBus?.on(this.refreshTrigger, () => {
          this.intervalFn()
        })
      }
    }
    this.eventBus?.emit(VariableEvents.VariableUpdated)
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

  getSubscriptions(): any[] {
    return this.subscribers
  }

  notyfy() {
    this.eventBus?.emit(VariableEvents.VariableUpdated)
    this.subscribers.forEach(subscriber => subscriber())
  }

  forceUpdate() {}

  clearInterval() {
    clearInterval(this.refreshIntervalId)
  }

  clearTrigger() {
    if (this.refreshTrigger) {
      this.eventBus?.off(this.refreshTrigger)
    }
  }
  serialize(): any {
    const ret =   {
      name:this.name,
      description:this.description,
      refreshType:this.refreshType,
      refreshInterval:this.refreshInterval??undefined,
      type: this.type
    }
    return ret;
  }
}

export { Variable, symbol }
