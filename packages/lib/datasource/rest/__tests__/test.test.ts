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
 * ********************************************************************/

import { describe, test, expect, vi, beforeEach } from 'vitest';
import { container } from 'org.eclipse.daanse.board.app.lib.core';
import { ConnectionRepository, identifier as connectionRepoSymbol } from 'org.eclipse.daanse.board.app.lib.repository.connection';
import { DatasourceRepository, identifier as datasourceRepoSymbol } from 'org.eclipse.daanse.board.app.lib.repository.datasource';
import { factorySymbol as restConnectionFactorySymbol } from 'org.eclipse.daanse.board.app.lib.connection.rest';
import { factorySymbol as restStoreFactorySymbol, RestStore } from '../src/index';

const mockFetch = vi.fn().mockResolvedValue({
  json: () => Promise.resolve([
    { id: 1, title: 'Test Post 1' },
    { id: 2, title: 'Test Post 2' }
  ])
});
vi.stubGlobal('fetch', mockFetch);

describe('REST Datasource Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('registers connection, datasource, and retrieves data correctly', async () => {
    const connectionRepository = container.get<ConnectionRepository>(connectionRepoSymbol);
    const datasourceRepository = container.get<DatasourceRepository>(datasourceRepoSymbol);

    // Get factories from container to ensure they are registered/initialized
    const connFactory = container.get<any>(restConnectionFactorySymbol);
    const storeFactory = container.get<any>(restStoreFactorySymbol);

    expect(connFactory).toBeDefined();
    expect(storeFactory).toBeDefined();

    // Register type info in repository
    connectionRepository.registerConnectionType('rest', {
      Connection: restConnectionFactorySymbol,
      Settings: null as any
    });

    datasourceRepository.registerDatasourceType('rest', {
      Store: restStoreFactorySymbol,
      Preview: null as any,
      Settings: null as any
    });

    // Register instance config
    connectionRepository.registerConnection('test-conn', 'rest', {
      url: 'https://jsonplaceholder.typicode.com/',
      uid: 'test-conn',
      type: 'rest',
      name: 'Test Connection'
    });

    datasourceRepository.registerDatasource('test-ds', 'rest', {
      resourceUrl: 'posts',
      connection: 'test-conn',
      uid: 'test-ds',
      type: 'rest',
      name: 'Test Datasource'
    });

    const datasource = datasourceRepository.getDatasource('test-ds') as RestStore;
    expect(datasource).toBeDefined();

    const originalData = await datasource.getOriginalData();
    expect(originalData).toEqual([
      { id: 1, title: 'Test Post 1' },
      { id: 2, title: 'Test Post 2' }
    ]);

    const tabularData = await datasource.getData('DataTable');
    expect(tabularData.headers).toContain('id');
    expect(tabularData.headers).toContain('title');
    expect(tabularData.items.length).toBe(2);
  });
});
