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
import DatasourceFactoryModule from 'org.eclipse.daanse.board.app.lib.factory.datasource'
import DatasourceRepositoryModule from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import RssConnectionModule from 'org.eclipse.daanse.board.app.lib.connection.rss'
import RssDatasourceModule from 'org.eclipse.daanse.board.app.lib.datasource.rss'

const container = new Container()

container.bind(CoreModule.identifiers.CONTAINER).toDynamicValue((ctx: any) => {
  return ctx as Container
})

ConnectionFactoryModule.init(container)
ConnectionRepositoryModule.init(container)
RssConnectionModule.init(container)
RssDatasourceModule.init(container)
DatasourceFactoryModule.init(container)
DatasourceRepositoryModule.init(container)

const connectionRepository = container.get(
  ConnectionRepositoryModule.identifier,
) as ConnectionRepositoryModule.ConnectionRepository

connectionRepository.registerConnectionType('rss', {
  Connection: RssConnectionModule.symbol,
  Settings: null as any,
})

const datasourceRepository = container.get(
  DatasourceRepositoryModule.identifier,
) as DatasourceRepositoryModule.DatasourceRepository

datasourceRepository.registerDatasourceType('rss', {
  Store: RssDatasourceModule.symbol,
  Preview: null as any,
  Settings: null as any,
})

connectionRepository.registerConnection('test', 'rss', {
  url: 'https://www.reddit.com/.rss',
})

datasourceRepository.registerDatasource('test', 'rss', {
  connection: 'test',
})

const datasource = datasourceRepository.getDatasource('test')

const getData = async () => {
  const data = await datasource.getOriginalData()
  // assert.notEqual(data.length, 0, 'Expected data to be not empty')
  console.log('original data', data)
}

const getData2 = async () => {
  const data = await datasource.getData('object')
  console.log('data as object', data)
}

const getData3 = async () => {
  const data = await datasource.getData('DataTable')
  console.log('data as datatable', data)
}

// Can't be run in node
// getData()
// getData2()
// getData3()
// console.log(datasource);
