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
import { describe, test, vi } from 'vitest';
import { container } from 'org.eclipse.daanse.board.app.lib.core';
import { identifier as connRepoId } from 'org.eclipse.daanse.board.app.lib.repository.connection';
import { identifier as dsRepoId } from 'org.eclipse.daanse.board.app.lib.repository.datasource';
import { factorySymbol as rssConnFactorySymbol } from 'org.eclipse.daanse.board.app.lib.connection.rss';
import { factorySymbol as rssStoreFactorySymbol, RssStore } from '../src/index';

const connectionRepository = container.get<any>(connRepoId);
const datasourceRepository = container.get<any>(dsRepoId);

connectionRepository.registerConnectionType('rss', {
  Connection: rssConnFactorySymbol,
  Settings: null as any,
});

datasourceRepository.registerDatasourceType('rss', {
  Store: rssStoreFactorySymbol,
  Preview: null as any,
  Settings: null as any,
});

// Test 1: Store Registration
async function testStoreRegistration() {
  console.info('Running: testStoreRegistration');

  connectionRepository.registerConnection('rss-conn-test', 'rss', {
    url: 'https://example.com/rss.xml',
    uid: 'rss-conn-test',
    type: 'rss',
    name: 'rss-conn-test',
  });

  datasourceRepository.registerDatasource('rss-store-test', 'rss', {
    connection: 'rss-conn-test',
    uid: 'rss-store-test',
    type: 'rss',
    name: 'rss-store-test',
  });

  const store = datasourceRepository.getDatasource('rss-store-test');
  assert.ok(store, 'RSS Store should be successfully registered and retrieved');
  console.info('✅ Passed: Store Registration.');
}

// Test 2: Verify getData returns mock RSS data
async function testStoreGetData() {
  console.info('Running: testStoreGetData');
  const connection = connectionRepository.getConnection('rss-conn-test');

  // Mock fetch to simulate feed download
  const mockFetch = async () => {
    return {
      title: 'Hacker News',
      items: [
        { title: 'Item Alpha', link: 'http://alpha.com' },
        { title: 'Item Beta', link: 'http://beta.com' }
      ]
    };
  };

  connection.fetch = mockFetch;

  const store = datasourceRepository.getDatasource('rss-store-test');

  const objectResult = await store.getData('object');
  assert.strictEqual(objectResult.title, 'Hacker News', 'Should get raw object feed title');
  assert.strictEqual(objectResult.items.length, 2, 'Should get raw items');

  const dtResult = await store.getData('DataTable');
  assert.ok(Array.isArray(dtResult.items), 'Parsed DataTable should have items array');
  assert.ok(dtResult.headers.includes('title'), 'DataTable headers should contain title');
  assert.ok(dtResult.headers.includes('link'), 'DataTable headers should contain link');
  assert.deepStrictEqual(dtResult.rows[0], [0, 'Item Alpha', 'http://alpha.com'], 'First row should match items list');
  console.info('✅ Passed: Store getData retrieval.');
}

// Test 3: Verify parseToDataTable formatting
async function testStoreParseToDataTable() {
  console.info('Running: testStoreParseToDataTable');
  const store = datasourceRepository.getDatasource('rss-store-test');
  const rawData = [
    { title: 'Story 1', creator: 'John' },
    { title: 'Story 2', creator: 'Doe' }
  ];
  const table = store.parseToDataTable(rawData);

  assert.strictEqual(table.items.length, 2);
  assert.ok(table.headers.includes('title'));
  assert.ok(table.headers.includes('creator'));
  assert.deepStrictEqual(table.rows[0], [0, 'Story 1', 'John']);
  console.info('✅ Passed: Store parseToDataTable formatting.');
}

describe('RSS datasource/store integration tests', () => {
  test('runs all tests successfully', async () => {
    await testStoreRegistration();
    await testStoreGetData();
    await testStoreParseToDataTable();
  });
});
