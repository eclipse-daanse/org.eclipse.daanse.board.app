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

import assert from 'assert';
import { describe, test } from 'vitest';
import { container } from 'org.eclipse.daanse.board.app.lib.core';
import { identifier as connRepoId } from 'org.eclipse.daanse.board.app.lib.repository.connection';
import { identifier as dsRepoId } from 'org.eclipse.daanse.board.app.lib.repository.datasource';
import { factorySymbol as restConnFactorySymbol } from 'org.eclipse.daanse.board.app.lib.connection.rest';
import { factorySymbol as csvStoreFactorySymbol } from '../src/index';

const connectionRepository = container.get<any>(connRepoId);
const datasourceRepository = container.get<any>(dsRepoId);

connectionRepository.registerConnectionType('rest', {
  Connection: restConnFactorySymbol,
  Settings: null as any,
});

datasourceRepository.registerDatasourceType('csv', {
  Store: csvStoreFactorySymbol,
  Preview: null as any,
  Settings: null as any,
});

describe('CSV datasource/store integration tests', () => {
  test('runs all tests successfully', async () => {
    // 1. Store Registration
    connectionRepository.registerConnection('csv-conn-test', 'rest', {
      url: 'https://example.com/api/',
      uid: 'csv-conn-test',
      type: 'rest',
      name: 'csv-conn-test'
    });

    datasourceRepository.registerDatasource('csv-store-test', 'csv', {
      connection: 'csv-conn-test',
      resourceUrl: 'data.csv',
      separators: [','],
      uid: 'csv-store-test',
      type: 'csv',
      name: 'csv-store-test'
    });

    const store = datasourceRepository.getDatasource('csv-store-test');
    assert.ok(store, 'CSV Store should be successfully registered');

    // Mock fetch on the connection
    const mockCsvContent = 'id,name,role\n1,Alice,Admin\n2,Bob,User';
    const connection = connectionRepository.getConnection('csv-conn-test');
    connection.fetch = async () => {
      return {
        ok: true,
        text: async () => mockCsvContent
      };
    };

    // Verify getData
    const dt = await store.getData('DataTable');
    assert.deepStrictEqual(dt.headers, ['id', 'name', 'role']);
    assert.strictEqual(dt.items.length, 2);
    assert.deepStrictEqual(dt.items[0], { id: '1', name: 'Alice', role: 'Admin' });
    assert.deepStrictEqual(dt.items[1], { id: '2', name: 'Bob', role: 'User' });

    // 3. Test Row Skipping
    datasourceRepository.registerDatasource('csv-store-skip-test', 'csv', {
      connection: 'csv-conn-test',
      resourceUrl: 'data.csv',
      separators: [','],
      skipRowsFromStart: 1, // Skip the headers row and treat line 2 as headers
      uid: 'csv-store-skip-test',
      type: 'csv',
      name: 'csv-store-skip-test'
    });

    const skipStore = datasourceRepository.getDatasource('csv-store-skip-test');
    const dtSkip = await skipStore.getData('DataTable');
    assert.deepStrictEqual(dtSkip.headers, ['1', 'Alice', 'Admin']);
    assert.strictEqual(dtSkip.items.length, 1);
    assert.deepStrictEqual(dtSkip.items[0], { '1': '2', 'Alice': 'Bob', 'Admin': 'User' });
  });
});
