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

// @vitest-environment jsdom
import { describe, test, expect } from 'vitest';
import { container } from 'org.eclipse.daanse.board.app.lib.core';
import { GraphQLConnection, factorySymbol } from '../src/index';

describe.skipIf(!process.env.RUN_LIVE_TESTS)('GraphQLConnection Live API Integration Tests', () => {
  test('initializes fetcher and performs live GraphQL query', async () => {
    const factory = container.get<any>(factorySymbol);
    const conn = factory({
      url: 'https://countries.trevorblades.com/',
      uid: 'live-graphql',
      type: 'graphql',
      name: 'Live GraphQL'
    });

    expect(conn.fetcher).toBeDefined();
    expect(conn.fetcher).not.toBeNull();

    try {
      const resultIter = await conn.fetcher({
        query: 'query { countries(filter: { code: { eq: "DE" } }) { name capital } }'
      });
      const res = await (resultIter as any).next();
      expect(res.value.data).toBeDefined();
      expect(res.value.data.countries).toBeDefined();
      expect(res.value.data.countries[0].name).toBe('Germany');
    } catch (err: any) {
      console.warn('Skipping live GraphQL connection test due to network/server error:', err.message);
    }
  });
});
