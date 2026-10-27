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

import { describe, test, expect, vi } from 'vitest';
import { DefaultServiceRegistry } from '@eclipse-daanse/tsm';
import { activate, XmlaConnection, factorySymbol } from '../src/index';

/*
 * A connection opens its XMLA session the moment it is initialised, and
 * what this test asks about is the factory, not the session. Left alone
 * that call reaches for a server, and its rejection outlives the test as
 * an unhandled one. A request that never settles is the session never
 * starting, which is exactly what is wanted here.
 */
vi.stubGlobal('fetch', vi.fn(() => new Promise(() => {})));


/*
 * The package registers its factory when it is activated; the Inversify
 * container these tests were written against is gone. The id is a string,
 * and factorySymbol is Symbol.for(it).
 */
function factoryOf() {
  const services = new DefaultServiceRegistry();
  activate({ services } as never);
  return services.getRequired<(config: never) => never>(
    Symbol.keyFor(factorySymbol) ?? String(factorySymbol.description),
  );
}

describe('XmlaConnection Tests', () => {
  test('creates new XmlaConnection instances via factory', () => {
    const factory = factoryOf();
    const configA = { url: 'http://localhost:8080', catalogName: 'catalogA', cubeName: 'cubeA', uid: 'xmla-a', type: 'xmla', name: 'Xmla A' };
    const configB = { url: 'http://localhost:8080', catalogName: 'catalogB', cubeName: 'cubeB', uid: 'xmla-b', type: 'xmla', name: 'Xmla B' };

    const connA = factory(configA);
    const connB = factory(configB);

    expect(connA).toBeInstanceOf(XmlaConnection);
    expect(connB).toBeInstanceOf(XmlaConnection);
    expect(connA).not.toBe(connB);
  });

  /*
   * A catalogue the server could not be asked for is left empty. What the
   * factory says then has to name that field, not "invalid configuration".
   */
  test('says which field keeps a configuration from opening', () => {
    const factory = factoryOf();

    expect(() => factory({ url: 'http://localhost:8080', catalogName: '', name: 'Sales' } as never))
      .toThrow('XMLA connection "Sales" cannot open: it names no catalogue to query.');
    expect(() => factory({ url: '', catalogName: '' } as never))
      .toThrow('it has no URL of an XMLA server and it names no catalogue to query');
  });
});
