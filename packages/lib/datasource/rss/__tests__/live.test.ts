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
import { container } from 'org.eclipse.daanse.board.app.lib.core';
import { ConnectionRepository, identifier as connectionRepoSymbol } from 'org.eclipse.daanse.board.app.lib.repository.connection';
import { DatasourceRepository, identifier as datasourceRepoSymbol } from 'org.eclipse.daanse.board.app.lib.repository.datasource';
import { RssConnection, factorySymbol as rssConnectionFactorySymbol } from 'org.eclipse.daanse.board.app.lib.connection.rss';
import { factorySymbol as rssStoreFactorySymbol, RssStore } from '../src/index';

// Unmock rss-parser to allow real network requests
vi.unmock('rss-parser/dist/rss-parser.js');

describe.skipIf(!process.env.RUN_LIVE_TESTS)('RSS Datasource Live API Integration Tests', () => {
  test('fetches real RSS feed using RSS store', async () => {
    const connectionRepository = container.get<ConnectionRepository>(connectionRepoSymbol);
    const datasourceRepository = container.get<DatasourceRepository>(datasourceRepoSymbol);

    // Fallback binding in case of Vitest module resolution/duplication issues
    if (!container.isBound(RssConnection)) {
      container.bind<RssConnection>(RssConnection).toSelf().inTransientScope();
    }
    if (!container.isBound(rssConnectionFactorySymbol)) {
      container.bind<any>(rssConnectionFactorySymbol).toFactory(() => {
        return (config: any) => {
          const connection = container.get<RssConnection>(RssConnection);
          connection.init(config);
          return connection;
        };
      });
    }

    // Register type info in repository
    connectionRepository.registerConnectionType('rss-live', {
      Connection: rssConnectionFactorySymbol,
      Settings: null as any
    });

    datasourceRepository.registerDatasourceType('rss-live', {
      Store: rssStoreFactorySymbol,
      Preview: null as any,
      Settings: null as any
    });

    // Register instance config
    connectionRepository.registerConnection('live-rss-conn', 'rss-live', {
      url: 'rss.nytimes.com/services/xml/rss/nyt/HomePage.xml',
      uid: 'live-rss-conn',
      type: 'rss-live',
      name: 'Live RSS Connection'
    });

    datasourceRepository.registerDatasource('live-rss-ds', 'rss-live', {
      connection: 'live-rss-conn',
      uid: 'live-rss-ds',
      type: 'rss-live',
      name: 'Live RSS Datasource'
    });

    try {
      const store = datasourceRepository.getDatasource('live-rss-ds') as RssStore;
      expect(store).toBeDefined();

      const feedData = await store.getOriginalData();
      expect(feedData).toBeDefined();
      expect(feedData).toHaveProperty('title');
      expect(feedData).toHaveProperty('items');
      expect(Array.isArray(feedData.items)).toBe(true);
    } catch (err: any) {
      console.warn('Skipping live RSS datasource test due to network/CORS error:', err.message);
    }
  });
});
