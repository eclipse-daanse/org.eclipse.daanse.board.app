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

/*
 * What a datasource is configured with comes from the model now.
 *
 * There used to be a hand-written interface of the same name here, with an
 * index signature that let any key through. Every datasource mirrored it
 * with a second hand-written interface listing the keys it actually reads -
 * while the Ecore beside it said the same thing again, generated into
 * src/gen and imported by nobody. Three declarations of one fact.
 *
 * The model is the one that survives: it is what the generated Impl, the
 * EPackage and anything rendering a form from it all read.
 */
export type { IBaseConnectionConfiguration } from './gen/IBaseConnectionConfiguration'
export { IBaseConnectionConfigurationImpl } from './gen/IBaseConnectionConfigurationImpl'
export { BaseconnectionPackage } from './gen/BaseconnectionPackage'
export { BaseconnectionFactory } from './gen/BaseconnectionFactory'

import type { EObject } from '@emfts/core'
import type { IBaseConnectionConfiguration } from './gen/IBaseConnectionConfiguration'
import { BaseconnectionPackage } from './gen/BaseconnectionPackage'

/**
 * A modelled configuration as plain data: its features, without the EObject
 * machinery around them.
 *
 * Both shapes are real. A configuration read back from a stored board is an
 * object with the model's keys and nothing else; one built through a factory
 * is an EObject that also notifies, knows its EClass and can be rendered from
 * the model. Everything that only reads values takes the first, and an
 * EObject satisfies it too - it has those keys as well.
 */
export type ConfigurationOf<T> = Omit<T, keyof EObject>

/*
 * Building the EPackage on load: until it exists the class literals are
 * null, an instance cannot say what it is, and nothing downstream can
 * resolve a feature by name.
 */
void BaseconnectionPackage.eINSTANCE

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

  init(configuration: ConfigurationOf<IBaseConnectionConfiguration>) {
    /*
     * Optional in the model, because a configuration is also read back from
     * a stored board where a key may be missing. The class keeps the plain
     * strings it has always exposed.
     */
    this.type = configuration.type ?? ''
    this.name = configuration.name ?? ''
    this.uid = configuration.uid ?? ''

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
  abstract callEvent(event: string, params: any, shouldUpdate?: boolean): Promise<void> | void

  abstract destroy(): void
}
