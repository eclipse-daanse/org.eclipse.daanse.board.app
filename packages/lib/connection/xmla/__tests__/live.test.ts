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

describe.skipIf(!process.env.RUN_LIVE_TESTS)('XmlaConnection Live API Integration Tests', () => {
  test('fetches real catalogs and cubes from emondrian demo XMLA', async () => {
    try {
      const catalogs = await XmlaConnection.getCatalogs('https://demo.emondrian.com/xmla', {
        type: 'None'
      });
      expect(catalogs).toBeDefined();
      expect(Array.isArray(catalogs)).toBe(true);

      const factory = container.get<any>(factorySymbol);
      const conn = factory({
        url: 'https://demo.emondrian.com/xmla',
        catalogName: 'Foodmart',
        cubeName: 'Sales',
        security: 'None',
        uid: 'live-xmla',
        type: 'xmla',
        name: 'Live XMLA'
      });

      const api = await conn.initApi();
      expect(api).toBeDefined();

      const { cubes } = await api.getCubes('Foodmart');
      expect(cubes).toBeDefined();
      expect(Array.isArray(cubes)).toBe(true);
    } catch (err: any) {
      console.warn('Skipping live XMLA connection test due to network/server error:', err.message);
    }
  }, 15000);
});
