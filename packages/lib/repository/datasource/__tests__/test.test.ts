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
import { wireRepositories } from '../../../../../test/support/wiring';

const testSymbol = Symbol.for('TestClass');

class TestClass {
  public testProperty: string = 'test';
  static validateConfiguration() {
    return true;
  }
}

/*
 * The repository resolves a type entry's identifier through the registry it
 * was given, and a symbol's description is the service id - so the stand-in
 * factory is registered under exactly that name.
 */
const { services, datasourceRepository } = wireRepositories();
services.register(testSymbol.description!, () => new TestClass());

describe('DatasourceRepository Tests', () => {
  test('registers datasource types and datasources correctly', () => {
    datasourceRepository.registerDatasourceType('test', {
      Store: testSymbol,
      Preview: null as any,
      Settings: null as any,
    });

    datasourceRepository.registerDatasource('test-id', 'test', {
      url: 'null',
      type: 'test',
    });

    const datasourcesRegistered = datasourceRepository.registeredDatasources;
    expect(datasourcesRegistered.length).toBe(1);
    expect(datasourcesRegistered[0]).toBe('test');

    const ds = datasourceRepository.getDatasource('test-id');
    expect(ds).toBeInstanceOf(TestClass);
  });
});
