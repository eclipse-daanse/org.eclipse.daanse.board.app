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
import { activate, XmlaConnection, factorySymbol } from '../src/index';


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
});
