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
import { factorySymbol as wsConnFactorySymbol } from 'org.eclipse.daanse.board.app.lib.connection.websocket';
import { factorySymbol as wsStoreFactorySymbol, WSStore } from '../src/index';

// Retrieve repositories
const connectionRepository = container.get<any>(connRepoId);
const datasourceRepository = container.get<any>(dsRepoId);

connectionRepository.registerConnectionType('ws', {
  Connection: wsConnFactorySymbol,
  Settings: null as any,
});

datasourceRepository.registerDatasourceType('ws', {
  Store: wsStoreFactorySymbol,
  Preview: null as any,
  Settings: null as any,
});

describe('WS datasource/store integration tests', () => {
  test('runs all tests successfully', async () => {
    // 1. Store Registration
    connectionRepository.registerConnection('ws-conn-test', 'ws', {
      url: 'ws://localhost:9999',
      uid: 'ws-conn-test',
      type: 'ws',
      name: 'ws-conn-test'
    });

    datasourceRepository.registerDatasource('ws-store-test', 'ws', {
      connection: 'ws-conn-test',
      accumulate: true,
      topic: 'test-topic',
      uid: 'ws-store-test',
      type: 'ws',
      name: 'ws-store-test'
    });

    const store = datasourceRepository.getDatasource('ws-store-test');
    assert.ok(store, 'WS Store should be successfully registered');

    // 2. Mock receiving messages from connection
    const connection = connectionRepository.getConnection('ws-conn-test');
    let onMessageCallback: any = null;
    connection.subscribe = (cb: any) => {
      onMessageCallback = cb;
    };

    // Re-initialize to trigger the subscription mock
    store.init({
      connection: 'ws-conn-test',
      accumulate: true,
      topic: 'test-topic',
      uid: 'ws-store-test',
      type: 'ws',
      name: 'ws-store-test'
    });

    // Simulate connection connect and message
    assert.ok(onMessageCallback, 'Store should subscribe to connection events');
    onMessageCallback('connect');
    onMessageCallback('message', '{"sensor":"temperature","value":22.5}', 'test-topic');

    // Verify getData
    const rawResultStr = store.getData('object');
    const parsedObj = JSON.parse(rawResultStr);
    assert.strictEqual(parsedObj.length, 1, 'Should accumulate 1 message');
    assert.strictEqual(parsedObj[0].message, '{"sensor":"temperature","value":22.5}');
    assert.strictEqual(parsedObj[0].topic, 'test-topic');

    // Verify DataTable parsing
    const dt = store.getData('DataTable');
    assert.strictEqual(dt.items.length, 1);
    assert.ok(dt.headers.includes('message'));
    assert.ok(dt.headers.includes('topic'));
    assert.strictEqual(dt.rows[0][1], '{"sensor":"temperature","value":22.5}');
  });
});
