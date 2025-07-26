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

export interface IMQTTConnectionConfiguration {
  url: string
  topic?: string
}

export class MQTTConnection extends TwoWayConnection {
  private url: any
  private client: MqttClient | null = null
  private topicsMaps: Map<any, string> = new Map()

  constructor() {
    super()
  }

  init(configuration: IMQTTConnectionConfiguration): void {
    console.log('MQTTConnection configuration', configuration)
    this.client = mqtt.connect(configuration.url)

    if (configuration.topic) {
      this.client.subscribe(configuration.topic)
    }

    this.client.on('connect', () => {
      super.onConnect()
    })

    this.client.on('message', (topic, message) => {
      console.log(topic, message.toString())
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
    this.removeTopics()
    this.topicsMaps.set(store, topic)
    this.updateTopicsList()
  }

  disconnectStore(store: any) {
    this.removeTopics()
    if (this.topicsMaps.has(store)) {
      this.topicsMaps.delete(store)
    }
    this.updateTopicsList()
  }

  removeTopics() {
    const topics = new Set(Array.from(this.topicsMaps.values()))
    this.client?.unsubscribe(Array.from(topics))
  }

  updateTopicsList() {
    const topics = new Set(Array.from(this.topicsMaps.values()))
    this.client?.subscribe(Array.from(topics))
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
