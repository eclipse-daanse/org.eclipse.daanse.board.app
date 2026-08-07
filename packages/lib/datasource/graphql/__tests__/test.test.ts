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
import { factorySymbol as graphqlConnFactorySymbol } from 'org.eclipse.daanse.board.app.lib.connection.graphql';
import { factorySymbol as graphqlStoreFactorySymbol } from 'org.eclipse.daanse.board.app.lib.datasource.graphql';

// Retrieve repositories from the shared container
const connectionRepository = container.get<any>(connRepoId);
const datasourceRepository = container.get<any>(dsRepoId);

// Register the connection and datasource types
connectionRepository.registerConnectionType('graphql', {
  Connection: graphqlConnFactorySymbol,
  Settings: null as any,
});

datasourceRepository.registerDatasourceType('graphql', {
  Store: graphqlStoreFactorySymbol,
  Preview: null as any,
  Settings: null as any,
});

// Test 1: Store Registration
async function testStoreRegistration() {
  console.info('Running: testStoreRegistration');

  connectionRepository.registerConnection('graphql-conn-test', 'graphql', {
    url: 'https://example.com/graphql',
    uid: 'graphql-conn-test',
    type: 'graphql',
    name: 'graphql-conn-test',
  });

  datasourceRepository.registerDatasource('graphql-store-test', 'graphql', {
    connection: 'graphql-conn-test',
    query: 'query { test }',
    uid: 'graphql-store-test',
    type: 'graphql',
    name: 'graphql-store-test',
  });

  const store = datasourceRepository.getDatasource('graphql-store-test');
  assert.ok(store, 'GraphQL Store should be successfully registered and retrieved');
  console.info('✅ Passed: Store Registration.');
}

// Test 2: Verify getData returns mock GraphQL data
async function testStoreGetData() {
  console.info('Running: testStoreGetData');
  const connection = connectionRepository.getConnection('graphql-conn-test');

  // Mock fetcher to simulate graphQL query execution
  const mockFetcher = async () => {
    return {
      next: async () => {
        return {
          value: {
            data: { test: 'graphql-data-success' }
          }
        };
      }
    };
  };

  connection.fetcher = mockFetcher;

  const store = datasourceRepository.getDatasource('graphql-store-test');
  const result = await store.getData('object');
  assert.deepStrictEqual(result, { test: 'graphql-data-success' }, 'Should retrieve mocked graphQL query data');
  console.info('✅ Passed: Store getData retrieval.');
}

// Test 3: Verify parseToDataTable formatting
async function testStoreParseToDataTable() {
  console.info('Running: testStoreParseToDataTable');
  const store = datasourceRepository.getDatasource('graphql-store-test');
  const rawData = [
    { id: '1', name: 'Alpha' },
    { id: '2', name: 'Beta' }
  ];
  const table = store.parseToDataTable(rawData);

  assert.ok(Array.isArray(table.items), 'Items should be an array');
  assert.strictEqual(table.items.length, 2);
  assert.ok(table.headers.includes('id'), 'Headers should include id');
  assert.ok(table.headers.includes('name'), 'Headers should include name');
  assert.deepStrictEqual(table.rows[0], [0, '1', 'Alpha'], 'Rows should match structure');
  console.info('✅ Passed: Store parseToDataTable formatting.');
}

describe('GraphQL datasource/store integration tests', () => {
  test('runs all tests successfully', async () => {
    await testStoreRegistration();
    await testStoreGetData();
    await testStoreParseToDataTable();
  });
});
