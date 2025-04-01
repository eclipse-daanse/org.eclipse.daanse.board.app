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
import DatasourceFactoryModule from 'org.eclipse.daanse.board.app.lib.factory.datasource'
import DatasourceRepositoryModule from 'org.eclipse.daanse.board.app.lib.repository.datasource'

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

DatasourceFactoryModule.init(container)
DatasourceRepositoryModule.init(container)

const DatasourceRepository = container.get(
  DatasourceRepositoryModule.identifier,
) as DatasourceRepositoryModule.DatasourceRepository

DatasourceRepository.registerDatasourceType('test', {
  Store: testSymbol,
  Preview: null as any,
  Settings: null as any,
})
DatasourceRepository.registerDatasource('test', 'test', {
  url: 'null',
  type: 'test',
})

const datasourcesRegistered = DatasourceRepository.registeredDatasources

assert.equal(
  datasourcesRegistered.length,
  1,
  'Expected one datasource registered',
)
