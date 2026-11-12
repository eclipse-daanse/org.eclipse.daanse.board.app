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
import { type PageContextServiceI, identifier as PAGE_CONTEXT_SERVICE } from 'org.eclipse.daanse.board.app.lib.api.pagecontext'
import { VARIABLE_CHANGED_EVENT } from 'org.eclipse.daanse.board.app.lib.api.variable'

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
import { type TinyEmitter } from 'tiny-emitter'
import { Serializable } from '../interface/JSONSerializableI'
import { AccessError } from './AccessError'
import { v4 as uuid } from 'uuid'


const TYPE = 'Variable'
const symbol = Symbol.for(TYPE)

/** What every variable instance receives from the factory. */
export interface VariableDependencies {
  eventBus?: TinyEmitter
  pageContextService?: PageContextServiceI
}

/** Whether two values of a variable are the same value: equal, or equal as JSON. */
function sameValue(a: unknown, b: unknown): boolean {
  if (Object.is(a, b)) return true
  if (!a || !b || typeof a !== 'object' || typeof b !== 'object') return false
  try {
    return JSON.stringify(a) === JSON.stringify(b)
  } catch {
    return false
  }
}

/** A value kept as it was, so a later change inside the same object is still a change. */
function snapshot(value: unknown): unknown {
  if (!value || typeof value !== 'object') return value
  try {
    return structuredClone(value)
  } catch {
    return value
  }
}

abstract class Variable implements Serializable{
  private subscribers: any[] = []
  private innerValue: any
  /*
   * What the board was last told this variable holds (#1288). Quiet while
   * the variable is set up - a board that loads is not a board whose
   * variables change - and the value it then holds is where changes count
   * from.
   */
  private announced: { value: unknown } | undefined
  private settingUp = false

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

  /*
   * Set by the factory right after construction (see this package's
   * activate) - plain properties, no container involved. Optional: a
   * variable works without an event bus or page context, with fewer
   * features.
   */
  public eventBus?: TinyEmitter;
  public pageContextService?: PageContextServiceI;

  // Removed injection to break circular dependency
  public storage?: any;

  public init(name: string, config: IVariableConfig & {scope?: VariableScope, accessMode?: VariableAccessMode, pageId?: string}) {
    /* A type's own init sets the first value right after this one returns. */
    this.settingUp = true
    queueMicrotask(() => {
      this.settingUp = false
      this.announced = { value: snapshot(this.currentValue()) }
    })
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
    this.announceChange()
  }

  /** The value as it reads now, or undefined where this page may not read it. */
  private currentValue(): unknown {
    try {
      return this.value
    } catch {
      return undefined
    }
  }

  /**
   * Tells the board that the variable holds another value (#1288): the
   * system event variable_changed, which rules map to actions. Once per
   * actual change - a value written again unchanged, or a notification
   * that changed nothing, says nothing.
   */
  protected announceChange(): void {
    if (this.settingUp || !this.eventBus) return
    const value = this.currentValue()
    const before = this.announced
    if (before && sameValue(before.value, value)) return
    this.announced = { value: snapshot(value) }
    this.eventBus.emit(VARIABLE_CHANGED_EVENT, {
      payload: {
        name: this.name,
        value,
        previous: before?.value,
        scope: this.scope,
        pageId: this.pageId,
        timestamp: Date.now(),
      },
    })
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
    this.announceChange()
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
