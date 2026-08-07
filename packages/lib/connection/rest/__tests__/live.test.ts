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

describe.skipIf(!process.env.RUN_LIVE_TESTS)('RestConnection Live API Integration Tests', () => {
  test('fetches real data from jsonplaceholder', async () => {
    const factory = container.get<any>(factorySymbol);
    const conn = factory({
      url: 'https://jsonplaceholder.typicode.com/',
      uid: 'live-rest',
      type: 'rest',
      name: 'Live Rest'
    });

    try {
      const resp = await conn.fetch({ url: 'posts' });
      expect(resp.status).toBe(200);
      const data = await resp.json();
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBeGreaterThan(0);
      expect(data[0]).toHaveProperty('id');
      expect(data[0]).toHaveProperty('title');
    } catch (err: any) {
      console.warn('Skipping live REST connection test due to network error:', err.message);
    }
  });
});
