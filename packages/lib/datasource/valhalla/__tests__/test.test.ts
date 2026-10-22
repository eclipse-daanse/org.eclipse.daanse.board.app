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
 **********************************************************************/

import assert from 'assert';
import { describe, test } from 'vitest';
import { container } from 'org.eclipse.daanse.board.app.lib.core';
import { identifier as connRepoId } from 'org.eclipse.daanse.board.app.lib.repository.connection';
import { identifier as dsRepoId } from 'org.eclipse.daanse.board.app.lib.repository.datasource';
import { factorySymbol as restConnFactorySymbol } from 'org.eclipse.daanse.board.app.lib.connection.rest';
import { ValhallaStore, factorySymbol as valhallaFactorySymbol, SET_WAYPOINTS } from '../src/index';

const connectionRepository = container.get<any>(connRepoId);
const datasourceRepository = container.get<any>(dsRepoId);

connectionRepository.registerConnectionType('rest', {
  Connection: restConnFactorySymbol,
  Settings: null as any,
});

datasourceRepository.registerDatasourceType('valhalla', {
  Store: valhallaFactorySymbol,
  Preview: null as any,
  Settings: null as any,
});

describe('Valhalla datasource/store integration tests', () => {
  test('calculates route via connection fetch', async () => {
    // 1. Register Mock REST Connection
    connectionRepository.registerConnection('valhalla-conn', 'rest', {
      url: 'https://valhalla.map.com',
      uid: 'valhalla-conn',
      type: 'rest',
      name: 'Valhalla Routing Engine'
    });

    datasourceRepository.registerDatasource('valhalla-ds', 'valhalla', {
      connection: 'valhalla-conn',
      costing: 'auto',
      units: 'kilometers',
      uid: 'valhalla-ds',
      type: 'valhalla',
      name: 'Valhalla Route Store'
    });

    const store = datasourceRepository.getDatasource('valhalla-ds');
    assert.ok(store instanceof ValhallaStore, 'Store should be successfully registered');

    // 2. Mock REST Response for Routing
    const connection = connectionRepository.getConnection('valhalla-conn');
    const mockTrip = {
      trip: {
        legs: [
          {
            maneuvers: [
              {
                instruction: 'Turn right on Main St',
                length: 0.5,
                time: 30,
                type: 2,
                street_names: ['Main St'],
                begin_shape_index: 0,
                end_shape_index: 1
              }
            ],
            shape: '', // Empty polyline shape is safe
            summary: {
              length: 0.5,
              time: 30
            }
          }
        ],
        summary: {
          length: 0.5,
          time: 30
        },
        locations: [
          { lat: 50.9, lon: 11.5 },
          { lat: 50.91, lon: 11.51 }
        ]
      }
    };

    connection.fetch = async () => {
      return {
        ok: true,
        json: async () => mockTrip
      };
    };

    // 3. Trigger SET_WAYPOINTS routing calculation
    await store.callEvent(SET_WAYPOINTS, {
      waypoints: [
        { lat: 50.9, lon: 11.5, name: 'Start' },
        { lat: 50.91, lon: 11.51, name: 'End' }
      ]
    });

    // 4. Assert GeoJSON route mapping results
    const geojson = await store.getData('geojson');
    assert.ok(geojson, 'Should output routing geojson');
    assert.strictEqual(geojson.type, 'FeatureCollection');
    assert.strictEqual(geojson.features.length, 3, 'Should have 1 leg feature + 2 waypoint features');
  });
});
