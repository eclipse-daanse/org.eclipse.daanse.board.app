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
import CoreModule from 'org.eclipse.daanse.board.app.lib.core'
import ConnectionFactoryModule from 'org.eclipse.daanse.board.app.lib.factory.connection'
import ConnectionRepositoryModule from 'org.eclipse.daanse.board.app.lib.repository.connection'

const container = new Container()

container.bind(CoreModule.identifiers.CONTAINER).toDynamicValue((ctx: any) => {
  return ctx as Container
})

const testSymbol = Symbol.for('TestClass')

class TestClass {
  public testProperty: string = 'test'
  constructor() {
    console.log('TestClass instantiated')
  }

  static validateConfiguration() {
    return true
  }
}

container.bind(testSymbol).toConstantValue(TestClass)

ConnectionFactoryModule.init(container)
ConnectionRepositoryModule.init(container)

const ConnectionRepository = container.get(
  ConnectionRepositoryModule.identifier,
) as ConnectionRepositoryModule.ConnectionRepository
ConnectionRepository.registerConnectionType('test', {
  Connection: testSymbol,
  Settings: null as any,
})
ConnectionRepository.registerConnection('test', 'test', { url: 'null' })
const connectionsRegistered = ConnectionRepository.registeredConnections
console.log(ConnectionRepository)
console.log(connectionsRegistered)

assert.equal(
  connectionsRegistered.length,
  1,
  'Expected one connection registered',
)
