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
import { ConnectionRepository, identifier as repositorySymbol } from '../src/index';

const testSymbol = Symbol.for('TestClass');

class TestClass {
  public testProperty: string = 'test';
  static validateConfiguration() {
    return true;
  }
}

// Bind a mock connection factory function for testSymbol
if (!container.isBound(testSymbol)) {
  container.bind<any>(testSymbol).toConstantValue((config: any) => {
    return new TestClass();
  });
}

describe('ConnectionRepository Tests', () => {
  test('registers connection types and connections correctly', () => {
    const connectionRepository = container.get<ConnectionRepository>(repositorySymbol);

    connectionRepository.registerConnectionType('test', {
      Connection: testSymbol,
      Settings: null as any,
    });

    connectionRepository.registerConnection('test-id', 'test', {
      url: 'null',
      uid: 'test-id',
      type: 'test',
      name: 'Test Name'
    });

    const connectionsRegistered = connectionRepository.registeredConnections;
    expect(connectionsRegistered.length).toBe(1);
    expect(connectionsRegistered[0]).toBe('test');

    const conn = connectionRepository.getConnection('test-id');
    expect(conn).toBeInstanceOf(TestClass);
  });
});
