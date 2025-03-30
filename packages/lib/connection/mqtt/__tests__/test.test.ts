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

import assert from 'assert'
import { Container } from 'inversify'
import MQTTConnection from 'org.eclipse.daanse.board.app.lib.connection.mqtt'

const container = new Container()
MQTTConnection.init(container)

const mqttConnection = container.get<typeof MQTTConnection.MQTTConnection>(
  MQTTConnection.symbol,
)

const mqttConnectionA = new mqttConnection({ url: 'http://localhost:8080' })
const mqttConnectionB = new mqttConnection({ url: 'http://localhost:8080' })

assert.notStrictEqual(mqttConnectionA, mqttConnectionB)
