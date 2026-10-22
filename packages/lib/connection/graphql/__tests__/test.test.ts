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
import { DefaultServiceRegistry } from '@eclipse-daanse/tsm';
import { activate, factorySymbol } from '../src/index';

/*
 * The package registers its factory when it is activated; the Inversify
 * container these tests were written against is gone.
 */
function factoryOf() {
  const services = new DefaultServiceRegistry();
  activate({ services } as never);
  // Registered under the service id; factorySymbol is Symbol.for(that id),
  // which the registry cannot look up.
  return services.getRequired<(config: unknown) => unknown>(
    Symbol.keyFor(factorySymbol) ?? String(factorySymbol.description),
  );
}

describe('GraphQL Connection Tests', () => {
  test('factory creates distinct connection instances', () => {
    const factory = factoryOf();
    const connA = factory({ url: 'https://spacex-production.up.railway.app/' });
    const connB = factory({ url: 'https://spacex-production.up.railway.app/' });

    /*
     * The class is exported as a type only, so instanceof has nothing to
     * check against; what the caller can see is that each call hands back
     * its own connection, which is what the test is named for.
     */
    expect(connA).toBeTruthy();
    expect(connB).toBeTruthy();
    expect(connA).not.toBe(connB);
  });

  test('validates configuration validation logic', () => {
    /* The factory is where the validation shows: it refuses what fails. */
    const factory = factoryOf();
    expect(() => factory({ url: '' })).toThrow(/Invalid GraphQLConnection configuration/);
    expect(factory({ url: 'https://example.com/graphql' })).toBeTruthy();
  });

  test('initializes connection configuration parameters correctly', () => {
    const factory = factoryOf();
    const conn = factory({ url: 'https://example.com/graphql' });
    expect((conn as any).url).toBe('https://example.com/graphql');
  });

  test('fetch method throws Method not implemented', () => {
    const factory = factoryOf();
    const conn = factory({ url: 'https://example.com/graphql' });
    expect(() => conn.fetch({} as any)).toThrow(/Method not implemented/);
  });
});
