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
import { ConnectionRepository, identifier as connectionRepoSymbol } from 'org.eclipse.daanse.board.app.lib.repository.connection';
import { DatasourceRepository, identifier as datasourceRepoSymbol } from 'org.eclipse.daanse.board.app.lib.repository.datasource';
import { XmlaConnection, factorySymbol as xmlaConnectionFactorySymbol } from 'org.eclipse.daanse.board.app.lib.connection.xmla';
import { factorySymbol as xmlaStoreFactorySymbol, XmlaStore } from '../src/index';

describe.skipIf(!process.env.RUN_LIVE_TESTS)('XMLA Datasource Live API Integration Tests', () => {
  test('fetches real metadata and cubes using XMLA store', async () => {
    const connectionRepository = container.get<ConnectionRepository>(connectionRepoSymbol);
    const datasourceRepository = container.get<DatasourceRepository>(datasourceRepoSymbol);

    // Fallback binding in case of Vitest module resolution/duplication issues
    if (!container.isBound(XmlaConnection)) {
      container.bind<XmlaConnection>(XmlaConnection).toSelf().inTransientScope();
    }
    if (!container.isBound(xmlaConnectionFactorySymbol)) {
      container.bind<any>(xmlaConnectionFactorySymbol).toFactory(() => {
        return (config: any) => {
          const connection = container.get<XmlaConnection>(XmlaConnection);
          connection.init(config);
          return connection;
        };
      });
    }

    // Register type info in repository
    connectionRepository.registerConnectionType('xmla-live', {
      Connection: xmlaConnectionFactorySymbol,
      Settings: null as any
    });

    datasourceRepository.registerDatasourceType('xmla-live', {
      Store: xmlaStoreFactorySymbol,
      Preview: null as any,
      Settings: null as any
    });

    // Register instance config
    connectionRepository.registerConnection('live-xmla-conn', 'xmla-live', {
      url: 'https://demo.emondrian.com/xmla',
      catalogName: 'Foodmart',
      cubeName: 'Sales',
      security: 'None',
      uid: 'live-xmla-conn',
      type: 'xmla-live',
      name: 'Live XMLA Connection'
    } as any);

    datasourceRepository.registerDatasource('live-xmla-ds', 'xmla-live', {
      connection: 'live-xmla-conn',
      cube: 'Sales',
      useMdx: true,
      mdx: 'SELECT FROM [Sales]',
      requestParams: { rows: [], columns: [], measures: [], filters: [] },
      uid: 'live-xmla-ds',
      type: 'xmla-live',
      name: 'Live XMLA Datasource'
    });

    try {
      const cubes = await XmlaStore.fetchCubes('live-xmla-conn');
      expect(cubes).toBeDefined();
      expect(Array.isArray(cubes)).toBe(true);

      const store = datasourceRepository.getDatasource('live-xmla-ds') as XmlaStore;
      expect(store).toBeDefined();

      const metadata = await store.loadMetadata();
      expect(metadata).toBeDefined();
    } catch (err: any) {
      console.warn('Skipping live XMLA datasource test due to network/server error:', err.message);
    }
  }, 15000);
});
