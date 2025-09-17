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
import { type PageContextServiceI, identifier as PAGE_CONTEXT_SERVICE } from 'org.eclipse.daanse.board.app.lib.pagecontext.pagecontext_service'

enum VariableScope {
  Global = 'global',
  Page = 'page'
}

enum VariableAccessMode {
  ReadOnly = 'readonly',
  PageOnly = 'page-only',
  ExternalWritable = 'external-writable'
}
// Removed import to break circular dependency
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { type TinyEmitter } from 'tiny-emitter'
import { Serializable } from '../interface/JSONSerializableI'
import { inject } from 'inversify'
import { AccessError } from './AccessError'
import { v4 as uuid } from 'uuid'


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
  public readonly id: string = uuid()
  public type: string = null as unknown as string
  public name: string = null as unknown as string
  public scope: VariableScope = VariableScope.Global
  public accessMode: VariableAccessMode = VariableAccessMode.ExternalWritable
  public pageId?: string

  @inject(identifiers.TINY_EMITTER)
  public eventBus?: TinyEmitter;

  @inject(PAGE_CONTEXT_SERVICE)
  public pageContextService?: PageContextServiceI;

  // Removed injection to break circular dependency
  public storage?: any;

  public init(name: string, config: IVariableConfig & {scope?: VariableScope, accessMode?: VariableAccessMode, pageId?: string}) {
    this.name = name;
    this.scope = config.scope || VariableScope.Global;
    this.accessMode = config.accessMode || VariableAccessMode.ExternalWritable;
    this.pageId = config.pageId;

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
    const currentPageId = this.pageContextService?.getCurrentPageId();
    if(this.scope == VariableScope.Page &&  currentPageId != this.pageId && this.accessMode == VariableAccessMode.PageOnly) {
      throw new AccessError(this.name)
    }
    return this.innerValue

  }

  set value(value) {
    const currentPageId = this.pageContextService?.getCurrentPageId();
    if(this.scope == VariableScope.Page &&  currentPageId != this.pageId && this.accessMode == VariableAccessMode.PageOnly) {
      throw new AccessError(this.name)
    }
    if(this.accessMode == VariableAccessMode.ReadOnly) {
      throw new AccessError(this.name)
    }

    console.log('Setting value, current page:', currentPageId);
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
  public canWriteFromPage(): boolean {
    return this.accessMode === VariableAccessMode.PageOnly || this.accessMode === VariableAccessMode.ExternalWritable;
  }

  public canWriteFromExternal(): boolean {
    return this.accessMode === VariableAccessMode.ExternalWritable;
  }

  serialize(): any {
    const ret =   {
      id: this.id,
      name:this.name,
      description:this.description,
      refreshType:this.refreshType,
      refreshInterval:this.refreshInterval??undefined,
      type: this.type,
      scope: this.scope,
      accessMode: this.accessMode,
      pageId: this.pageId
    }
    return ret;
  }
}

export { Variable, symbol, VariableScope, VariableAccessMode }
