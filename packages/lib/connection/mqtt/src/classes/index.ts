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

import { TwoWayConnection } from 'org.eclipse.daanse.board.app.lib.connection.twowayconnection'
import { type MqttClient } from 'mqtt'
import mqtt from 'mqtt'
import type { BaseConnectionConfig } from 'org.eclipse.daanse.board.app.lib.connection.base'
import { inject, injectable } from 'inversify'
import {
  LoggerFactory,
  identifier as loggerIdentifier,
  type ILogger
} from 'org.eclipse.daanse.board.app.lib.logger'

export interface IMQTTConnectionConfiguration extends BaseConnectionConfig{
  url: string
  topic?: string
}

@injectable()
export class MQTTConnection extends TwoWayConnection {
  @inject(loggerIdentifier)
  private loggerFactory!: LoggerFactory

  private logMqtt!: ILogger
  private url: any
  private client: MqttClient | null = null
  private topicsMaps: Map<any, string> = new Map()

  constructor() {
    super()
  }

  init(configuration: IMQTTConnectionConfiguration): void {
    // Initialize logger from factory
    this.logMqtt = this.loggerFactory.createLogger('daanse:mqtt:connection')

    this.logMqtt('MQTTConnection configuration', configuration)
    this.client = mqtt.connect(configuration.url)

    if (configuration.topic) {
      this.client.subscribe(configuration.topic)
    }

    this.client.on('connect', () => {
      super.onConnect()
    })

    this.client.on('message', (topic, message) => {
      this.logMqtt('Message:', topic, message.toString())
      super.onMessage(message.toString(), topic)
    })

    this.client.on('close', () => {
      super.onClose()
    })

    this.client.on('error', error => {
      super.onError(error)
    })
  }

  setConfig(topic: string): void {
    // throw new Error("Method not implemented.");
  }

  connectStore(store: any, topic: string) {
    // Only add/update, don't remove all topics first
    const hadTopic = this.topicsMaps.has(store)
    const oldTopic = this.topicsMaps.get(store)

    this.topicsMaps.set(store, topic)

    // Only subscribe to new topic if it's different or didn't exist
    if (!hadTopic || oldTopic !== topic) {
      if (this.client && this.client.connected) {
        this.client.subscribe(topic)
        this.logMqtt(' Subscribed to', topic)
      }
    }
  }

  disconnectStore(store: any) {
    if (!this.topicsMaps.has(store)) {
      return
    }

    const topic = this.topicsMaps.get(store)
    this.topicsMaps.delete(store)

    // Check if any other store is still using this topic
    const stillUsed = Array.from(this.topicsMaps.values()).includes(topic!)

    // Only unsubscribe if no other store uses this topic and client is connected
    if (!stillUsed && topic && this.client && this.client.connected) {
      this.client.unsubscribe(topic)
      this.logMqtt(' Unsubscribed from', topic)
    }
  }

  removeTopics() {
    if (!this.client || !this.client.connected) {
      return
    }
    const topics = new Set(Array.from(this.topicsMaps.values()))
    this.client.unsubscribe(Array.from(topics))
  }

  updateTopicsList() {
    if (!this.client || !this.client.connected) {
      return
    }
    const topics = new Set(Array.from(this.topicsMaps.values()))
    this.client.subscribe(Array.from(topics))
  }

  hasTopics(): boolean {
    return true
  }

  static validateConfiguration(configuration: IMQTTConnectionConfiguration) {
    if (!configuration.url) {
      return false
    }

    return true
  }
}
