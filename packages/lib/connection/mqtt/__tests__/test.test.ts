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
import mqtt from 'mqtt';
import { wireRepositories } from '../../../../../test/support/wiring';
import * as mqttConnection from '../src/index';
import { factorySymbol, MQTTConnection } from '../src/index';

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


/*
 * The package registers its factory when it is activated; the Inversify
 * container these tests were written against is gone. The id is a string,
 * and factorySymbol is Symbol.for(it). The connection takes a logger
 * through the registry, so it is wired with the rest.
 */
function factoryOf() {
  const { services } = wireRepositories(mqttConnection);
  return services.getRequired<(config: never) => never>(factorySymbol.description!);
}

describe('MQTT Connection Integration/Unit Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('factory is registered on activation and builds a connection', () => {
    const factory = factoryOf() as any;
    assert.ok(factory, 'MQTTConnectionFactory should be registered on activation');

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
    const factory = factoryOf() as any;
    const config = { url: 'mqtt://test-broker.com', topic: 'test/topic', uid: 'mqtt-test-2', type: 'mqtt', name: 'MQTT 2' };

    factory(config);

    // Verify it called mqtt.connect with correct URL
    expect(mqtt.connect).toHaveBeenCalledWith('mqtt://test-broker.com');

    // Verify topic subscription
    expect(mockClient.subscribe).toHaveBeenCalledWith('test/topic');
  });
});
