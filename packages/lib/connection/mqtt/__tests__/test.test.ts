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
import { describe, test, vi, beforeEach, expect } from 'vitest';
import { container } from 'org.eclipse.daanse.board.app.lib.core';
import { init as initLogger } from 'org.eclipse.daanse.board.app.lib.logger';
import mqtt from 'mqtt';
import { factorySymbol as mqttFactorySymbol, MQTTConnection } from '../src/index';

// Initialize the logger bindings on the shared container
initLogger(container);

// Mock the mqtt library
const mockClient = {
  subscribe: vi.fn(),
  unsubscribe: vi.fn(),
  on: vi.fn((event, callback) => {
    if (event === 'connect') {
      // Simulate connect event callback immediately
      setTimeout(callback, 0);
    }
  }),
  connected: true
};

vi.mock('mqtt', () => {
  return {
    default: {
      connect: vi.fn(() => mockClient)
    }
  };
});

describe('MQTT Connection Integration/Unit Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('factory is bound and registers correctly in container', () => {
    const factory = container.get<any>(mqttFactorySymbol);
    assert.ok(factory, 'MQTTConnectionFactory should be bound in the container');

    const config = { url: 'mqtt://localhost:1883', uid: 'mqtt-test', type: 'mqtt', name: 'MQTT Connection' };
    const connection = factory(config);
    assert.ok(connection instanceof MQTTConnection, 'Should construct a valid MQTTConnection instance');
  });

  test('validateConfiguration requires a url', () => {
    const valid = MQTTConnection.validateConfiguration({ url: 'mqtt://localhost:1883', uid: 'mqtt-test-1', type: 'mqtt', name: 'MQTT 1' });
    const invalid = MQTTConnection.validateConfiguration({ url: '', uid: 'mqtt-test-2', type: 'mqtt', name: 'MQTT 2' });

    assert.strictEqual(valid, true, 'Valid config should pass validation');
    assert.strictEqual(invalid, false, 'Config without URL should fail validation');
  });

  test('initializes and subscribes to topic', async () => {
    const factory = container.get<any>(mqttFactorySymbol);
    const config = { url: 'mqtt://test-broker.com', topic: 'test/topic', uid: 'mqtt-test-2', type: 'mqtt', name: 'MQTT 2' };

    factory(config);

    // Verify it called mqtt.connect with correct URL
    expect(mqtt.connect).toHaveBeenCalledWith('mqtt://test-broker.com');

    // Verify topic subscription
    expect(mockClient.subscribe).toHaveBeenCalledWith('test/topic');
  });
});
