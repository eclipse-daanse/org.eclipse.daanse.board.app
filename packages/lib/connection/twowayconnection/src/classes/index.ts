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

export type PubSubSubsriber = (
  event: PubSubEvents,
  data?: any,
  topic?: string,
) => void
export type PubSubEvents = 'connect' | 'message' | 'close' | 'error'

export interface PubSubConnection {
  setConfig(config: any): void
  subscribe(subscriber: (event: PubSubEvents, data?: any) => any): void
  unsubscribe(subscriber: () => any): void
  notify(event: PubSubEvents, data?: any): void
}

export abstract class TwoWayConnection implements PubSubConnection {
  abstract setConfig(config: any): void
  private ready = false
  private subscribers: PubSubSubsriber[] = []

  constructor() {}

  onMessage(data: any, topic?: string) {
    this.notify('message', data, topic)
  }

  onConnect() {
    this.ready = true
    this.notify('connect')
  }

  onClose() {
    this.ready = false
    this.notify('close')
  }

  onError(error: any) {
    this.ready = false
    this.notify('error', error)
  }

  subscribe(
    subscriber: (event: PubSubEvents, data?: any, topic?: string) => any,
  ) {
    this.subscribers.push(subscriber)
  }

  unsubscribe(subscriber: () => any) {
    this.subscribers = this.subscribers.filter(sub => sub !== subscriber)
  }

  notify(event: PubSubEvents, data?: any, topic?: string) {
    this.subscribers.forEach(subscriber => {
      subscriber(event, data, topic)
    })
  }

  abstract hasTopics(): boolean
}
