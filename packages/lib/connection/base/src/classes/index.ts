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

// import UsesComputedVariable from "./UsesComputedVariable";

export interface IRequestParams {
  url: string
  [key: string]: any
}

export interface BaseConnectionConfig {
  url: string
  name: string
  type: string
  uid: string
}

// export default abstract class BaseConnection extends UsesComputedVariable implements IConnection {
export abstract class BaseConnection {
  abstract fetch(config: IRequestParams): Promise<any>
  abstract setConfig(config: any): void
  public name: string = ''
  public type: string = ''
  public uid: string = ''

  constructor() {}

  init(configuration: BaseConnectionConfig) {
    this.type = configuration.type
    this.name = configuration.name
    this.uid = configuration.uid
  }

  private subscribers: any[] = []

  subscribe(subscriber: () => any) {
    this.subscribers.push(subscriber)
  }

  unsubscribe(subscriber: () => any) {
    this.subscribers = this.subscribers.filter(sub => sub !== subscriber)
  }

  notify() {
    this.subscribers.forEach(subscriber => {
      subscriber()
    })
  }
}
