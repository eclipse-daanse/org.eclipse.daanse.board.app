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
import { XmlaConnection, factorySymbol } from '../src/index';

describe('XmlaConnection Tests', () => {
  test('creates new XmlaConnection instances via factory', () => {
    const factory = container.get<any>(factorySymbol);
    const configA = { url: 'http://localhost:8080', catalogName: 'catalogA', cubeName: 'cubeA', uid: 'xmla-a', type: 'xmla', name: 'Xmla A' };
    const configB = { url: 'http://localhost:8080', catalogName: 'catalogB', cubeName: 'cubeB', uid: 'xmla-b', type: 'xmla', name: 'Xmla B' };

    const connA = factory(configA);
    const connB = factory(configB);

    expect(connA).toBeInstanceOf(XmlaConnection);
    expect(connB).toBeInstanceOf(XmlaConnection);
    expect(connA).not.toBe(connB);
  });
});
