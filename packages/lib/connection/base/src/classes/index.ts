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
}

export interface BaseConnectionConfig {
    url: string
}

// export default abstract class BaseConnection extends UsesComputedVariable implements IConnection {
export abstract class BaseConnection {
  abstract fetch(config: IRequestParams): Promise<any>
  abstract setConfig(config: any): void

  constructor(configuration: BaseConnectionConfig) {
    // super(configuration);
    // super.setUpdateCb(() => {
    //   console.log('Update', this);
    //   this.notify();
    // });
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
