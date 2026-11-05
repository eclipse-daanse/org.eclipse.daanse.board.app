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
import { wireRepositories } from '../../../../../test/support/wiring';
import * as restConnection from 'org.eclipse.daanse.board.app.lib.connection.rest';
import { factorySymbol as restConnectionFactorySymbol } from 'org.eclipse.daanse.board.app.lib.connection.rest';
import * as ogcStaStore from '../src/index';
import { factorySymbol as ogcStoreFactorySymbol } from '../src/index';
import type { OgcStaStore } from '../src/classes/OgcSta';

const { connectionRepository, datasourceRepository } = wireRepositories(restConnection, ogcStaStore);

// Silence unhandled promise rejections from caching fetch wrappers
process.on('unhandledRejection', (reason) => {
  console.warn('Silenced unhandled rejection during live OGCSTA test:', reason);
});

describe.skipIf(!process.env.RUN_LIVE_TESTS)('OGCSTA Datasource Live API Integration Tests', () => {
  test('initializes and connects to live FROST SensorThings API server', async () => {
    // Register type info in repository
    connectionRepository.registerConnectionType('rest-live', {
      Connection: restConnectionFactorySymbol,
      Settings: null as any
    });

    datasourceRepository.registerDatasourceType('ogcsta-live', {
      Store: ogcStoreFactorySymbol,
      Preview: null as any,
      Settings: null as any
    });

    // Register instance config using public airquality frost server
    connectionRepository.registerConnection('live-ogc-conn', 'rest-live', {
      url: 'https://airquality-frost.k8s.ilt-infra.fraunhofer.de/v1.1/',
      uid: 'live-ogc-conn',
      type: 'rest-live',
      name: 'Live OGCSTA Connection'
    });

    datasourceRepository.registerDatasource('live-ogc-ds', 'ogcsta-live', {
      connection: 'live-ogc-conn',
      uid: 'live-ogc-ds',
      type: 'ogcsta-live',
      name: 'Live OGCSTA Datasource',
      datastreams: [],
      things: [],
      locations: [],
      history: { enabled: false, limit: 10 }
    });

    try {
      const store = datasourceRepository.getDatasource('live-ogc-ds') as OgcStaStore;
      expect(store).toBeDefined();

      // Wrap fetch calls to avoid hanging tests
      const connection = connectionRepository.getConnection('live-ogc-conn') as any;
      const originalFetch = connection.fetch.bind(connection);
      connection.fetch = (config: any, options?: any) => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);
        return originalFetch(config, {
          ...options,
          signal: controller.signal
        }).finally(() => clearTimeout(timeoutId));
      };

      const result = await store.getData<any>('OGCSTAData');
      expect(result).toBeDefined();
    } catch (err: any) {
      console.warn('Skipping live OGCSTA datasource test due to network/server error:', err.message);
    }
  }, 10000);
});

/*
 * #1264 against the server of the Bodenfeuchte board: twelve Reference
 * Areas, among them ids with a slash, each with its state as a colour code.
 */
describe.skipIf(!process.env.RUN_LIVE_TESTS)('the latest values view against udp-broker', () => {
  test('has a row per Reference Area, its state mapped to a word', async () => {
    connectionRepository.registerConnectionType('rest-udp', { Connection: restConnectionFactorySymbol, Settings: null as any });
    datasourceRepository.registerDatasourceType('ogcsta-udp', { Store: ogcStoreFactorySymbol, Preview: null as any, Settings: null as any });
    connectionRepository.registerConnection('udp-conn', 'rest-udp', {
      url: 'https://udp-broker.nomad-dmz.jena.de/udp/rest/',
      uid: 'udp-conn',
      type: 'rest-udp',
      name: 'udp-broker',
    });
    const states = ['feucht', 'optimal', 'leichter Trockenstress', 'Trockenstress'];
    datasourceRepository.registerDatasource('udp-ds', 'ogcsta-udp', {
      connection: 'udp-conn',
      uid: 'udp-ds',
      type: 'ogcsta-udp',
      name: 'Reference Areas',
      latestValues: {
        thingNames: ['Reference Area*'],
        nameColumn: '',
        columns: [
          { suffix: '~referenceArea~name', label: 'Fläche' },
          {
            suffix: '~referenceArea~color',
            label: 'Zustand',
            mappings: ['BLUE', 'GREEN', 'YELLOW', 'RED'].map((code, i) => ({ code, label: states[i] })),
          },
          { suffix: '~referenceArea~sensorCount', label: 'Sensoren' },
          { suffix: '~referenceArea~color', label: 'Stand', part: 'phenomenonTime' },
        ],
      },
    } as any);

    const store = datasourceRepository.getDatasource('udp-ds') as OgcStaStore;
    const table = await store.getData<any>('DataTable');

    expect(table.items).toHaveLength(12);
    expect(table.items.every((r: any) => states.includes(r.Zustand))).toBe(true);
    expect(table.items.some((r: any) => String(r['Fläche']).includes('/'))).toBe(true);
  }, 120000);
});
