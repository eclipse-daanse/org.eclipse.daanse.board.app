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
import { RestConnection, factorySymbol } from '../src/index';

describe('RestConnection Tests', () => {
  test('creates new RestConnection instances via factory', () => {
    const factory = container.get<any>(factorySymbol);
    const configA = { url: 'https://jsonplaceholder.typicode.com/todos/1', uid: 'rest-a', type: 'rest', name: 'Rest A' };
    const configB = { url: 'https://jsonplaceholder.typicode.com/todos/1', uid: 'rest-b', type: 'rest', name: 'Rest B' };

    const connA = factory(configA);
    const connB = factory(configB);

    expect(connA).toBeInstanceOf(RestConnection);
    expect(connB).toBeInstanceOf(RestConnection);
    expect(connA).not.toBe(connB);
  });
});
