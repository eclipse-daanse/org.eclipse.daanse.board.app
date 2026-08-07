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
import { factorySymbol as wsFactorySymbol, WSConnection } from '../src/index';

// Mock global WebSocket class
class MockWebSocket {
  url: string;
  onopen: any;
  onmessage: any;
  onclose: any;
  onerror: any;

  constructor(url: string) {
    this.url = url;
    setTimeout(() => {
      if (this.onopen) this.onopen();
    }, 0);
  }
}

global.WebSocket = MockWebSocket as any;

describe('WS Connection Unit/Integration Tests', () => {
  test('factory is bound and registers correctly in container', () => {
    const factory = container.get<any>(wsFactorySymbol);
    assert.ok(factory, 'WSConnectionFactory should be bound in the container');

    const config = { url: 'ws://localhost:8080', uid: 'ws-test', type: 'ws', name: 'WS Connection' };
    const connection = factory(config);
    assert.ok(connection instanceof WSConnection, 'Should construct a valid WSConnection instance');
  });

  test('validateConfiguration requires a url', () => {
    const valid = WSConnection.validateConfiguration({ url: 'ws://localhost:8080' });
    const invalid = WSConnection.validateConfiguration({ url: '' });

    assert.strictEqual(valid, true, 'Valid config should pass validation');
    assert.strictEqual(invalid, false, 'Config without URL should fail validation');
  });

  test('initializes and triggers connection open', async () => {
    const factory = container.get<any>(wsFactorySymbol);
    const config = { url: 'ws://localhost:9000', uid: 'ws-test-2', type: 'ws', name: 'WS 2' };
    const connection = factory(config);

    let wasConnectedEventFired = false;
    connection.subscribe((event: string) => {
      if (event === 'connect') {
        wasConnectedEventFired = true;
      }
    });

    // Wait for the simulated open event
    await new Promise(resolve => setTimeout(resolve, 10));

    assert.strictEqual(wasConnectedEventFired, true, 'Connection should emit "connect" event after open');
  });
});
