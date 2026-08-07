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
import { factorySymbol, GraphQLConnection } from '../src/index';

describe('GraphQL Connection Tests', () => {
  test('factory creates distinct connection instances', () => {
    const factory = container.get<any>(factorySymbol);
    const connA = factory({ url: 'https://spacex-production.up.railway.app/' });
    const connB = factory({ url: 'https://spacex-production.up.railway.app/' });

    expect(connA).toBeInstanceOf(GraphQLConnection);
    expect(connB).toBeInstanceOf(GraphQLConnection);
    expect(connA).not.toBe(connB);
  });

  test('validates configuration validation logic', () => {
    const validate = GraphQLConnection.validateConfiguration;
    expect(validate({ url: '' })).toBe(false);
    expect(validate({ url: 'https://example.com/graphql' })).toBe(true);
  });

  test('initializes connection configuration parameters correctly', () => {
    const factory = container.get<any>(factorySymbol);
    const conn = factory({ url: 'https://example.com/graphql' });
    expect((conn as any).url).toBe('https://example.com/graphql');
  });

  test('fetch method throws Method not implemented', () => {
    const factory = container.get<any>(factorySymbol);
    const conn = factory({ url: 'https://example.com/graphql' });
    expect(() => conn.fetch({} as any)).toThrow(/Method not implemented/);
  });
});
