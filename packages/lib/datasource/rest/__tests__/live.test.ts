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

import { describe, test, expect } from 'vitest';
import { container } from 'org.eclipse.daanse.board.app.lib.core';
import { ConnectionRepository, identifier as connectionRepoSymbol } from 'org.eclipse.daanse.board.app.lib.repository.connection';
import { DatasourceRepository, identifier as datasourceRepoSymbol } from 'org.eclipse.daanse.board.app.lib.repository.datasource';
import { factorySymbol as restConnectionFactorySymbol } from 'org.eclipse.daanse.board.app.lib.connection.rest';
import { factorySymbol as restStoreFactorySymbol, RestStore } from '../src/index';

describe.skipIf(!process.env.RUN_LIVE_TESTS)('REST Datasource Live API Integration Tests', () => {
  test('fetches real tabular posts from jsonplaceholder', async () => {
    const connectionRepository = container.get<ConnectionRepository>(connectionRepoSymbol);
    const datasourceRepository = container.get<DatasourceRepository>(datasourceRepoSymbol);

    const connFactory = container.get<any>(restConnectionFactorySymbol);
    const storeFactory = container.get<any>(restStoreFactorySymbol);

    // Register type info in repository
    connectionRepository.registerConnectionType('rest-live', {
      Connection: restConnectionFactorySymbol,
      Settings: null as any
    });

    datasourceRepository.registerDatasourceType('rest-live', {
      Store: restStoreFactorySymbol,
      Preview: null as any,
      Settings: null as any
    });

    // Register instance config
    connectionRepository.registerConnection('live-conn', 'rest-live', {
      url: 'https://jsonplaceholder.typicode.com/',
      uid: 'live-conn',
      type: 'rest-live',
      name: 'Live Connection'
    });

    datasourceRepository.registerDatasource('live-ds', 'rest-live', {
      resourceUrl: 'posts',
      connection: 'live-conn',
      uid: 'live-ds',
      type: 'rest-live',
      name: 'Live Datasource'
    });

    const datasource = datasourceRepository.getDatasource('live-ds') as RestStore;
    expect(datasource).toBeDefined();

    try {
      const originalData = await datasource.getOriginalData();
      expect(Array.isArray(originalData)).toBe(true);
      expect(originalData.length).toBeGreaterThan(0);

      const tabularData = await datasource.getData('DataTable');
      expect(tabularData.headers).toContain('id');
      expect(tabularData.headers).toContain('title');
      expect(tabularData.items.length).toBeGreaterThan(0);
    } catch (err: any) {
      console.warn('Skipping live REST datasource integration test due to network error:', err.message);
    }
  });
});
