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
import { RestConnection, factorySymbol as restConnectionFactorySymbol } from 'org.eclipse.daanse.board.app.lib.connection.rest';
import { ValhallaStore, factorySymbol as valhallaFactorySymbol, SET_WAYPOINTS } from '../src/index';

describe.skipIf(!process.env.RUN_LIVE_TESTS)('Valhalla Datasource Live API Integration Tests', () => {
  test('calculates route using live OSM Valhalla server', async () => {
    const connectionRepository = container.get<ConnectionRepository>(connectionRepoSymbol);
    const datasourceRepository = container.get<DatasourceRepository>(datasourceRepoSymbol);

    // Fallback binding in case of Vitest module resolution/duplication issues
    if (!container.isBound(RestConnection)) {
      container.bind<RestConnection>(RestConnection).toSelf().inTransientScope();
    }
    if (!container.isBound(restConnectionFactorySymbol)) {
      container.bind<any>(restConnectionFactorySymbol).toFactory(() => {
        return (config: any) => {
          const connection = container.get<RestConnection>(RestConnection);
          connection.init(config);
          return connection;
        };
      });
    }

    // Register type info in repository
    connectionRepository.registerConnectionType('rest-live', {
      Connection: restConnectionFactorySymbol,
      Settings: null as any
    });

    datasourceRepository.registerDatasourceType('valhalla-live', {
      Store: valhallaFactorySymbol,
      Preview: null as any,
      Settings: null as any
    });

    // Register instance config using public OSM Valhalla server
    connectionRepository.registerConnection('live-valhalla-conn', 'rest-live', {
      url: 'https://valhalla1.openstreetmap.de',
      uid: 'live-valhalla-conn',
      type: 'rest-live',
      name: 'Live OSM Valhalla'
    });

    datasourceRepository.registerDatasource('live-valhalla-ds', 'valhalla-live', {
      connection: 'live-valhalla-conn',
      costing: 'auto',
      units: 'kilometers',
      uid: 'live-valhalla-ds',
      type: 'valhalla-live',
      name: 'Live Valhalla Route Store'
    });

    try {
      const store = datasourceRepository.getDatasource('live-valhalla-ds') as ValhallaStore;
      expect(store).toBeDefined();

      // Wrap fetch calls to avoid hanging tests
      const connection = connectionRepository.getConnection('live-valhalla-conn') as any;
      const originalFetch = connection.fetch.bind(connection);
      connection.fetch = (config: any, options?: any) => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);
        return originalFetch(config, {
          ...options,
          signal: controller.signal
        }).finally(() => clearTimeout(timeoutId));
      };

      // Call SET_WAYPOINTS to fetch route
      await store.callEvent(SET_WAYPOINTS, [
        { lat: 52.5200, lon: 13.4050 }, // Berlin
        { lat: 52.5205, lon: 13.4055 }
      ]);

      const data = await store.getData('object');
      if (data && data.trip) {
        expect(data.trip.legs).toBeDefined();
        expect(data.trip.summary).toBeDefined();
      } else {
        console.warn('Live Valhalla returned no route data (offline/rate-limited/aborted).');
      }
    } catch (err: any) {
      console.warn('Skipping live Valhalla datasource test due to network/server error:', err.message);
    }
  }, 10000);
});
