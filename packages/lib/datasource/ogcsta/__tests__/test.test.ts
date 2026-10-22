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
import { describe, test, vi } from 'vitest';
import { wireRepositories } from '../../../../../test/support/wiring';
import * as ogcStaStore from '../src/index';
import { factorySymbol as ogcStoreFactorySymbol } from '../src/index';
/* The class is not part of the package's public surface, so a test of its
 * own package reaches for it where it lives. */
import { OgcStaStore } from '../src/classes/OgcSta';

const { services, connectionRepository, datasourceRepository } = wireRepositories(ogcStaStore);

/* The store asks the repository for its connection; this is what it gets. */
const connection = { url: 'http://localhost:8080/v1.1' };
vi.spyOn(connectionRepository, 'getConnection').mockReturnValue(connection as any);

describe('OGCSTA Datasource Unit Tests', () => {
  test('validateConfiguration requires a connection', () => {
    const valid = OgcStaStore.validateConfiguration({ connection: 'conn-1' } as any);
    const invalid = OgcStaStore.validateConfiguration({ connection: '' } as any);

    assert.strictEqual(valid, true, 'Valid config should pass validation');
    assert.strictEqual(invalid, false, 'Config without connection should fail validation');
  });

  test('initializes and configures OgcStaStore properties', () => {
    datasourceRepository.registerDatasourceType('ogcsta', {
      Store: ogcStoreFactorySymbol,
      Preview: null as any,
      Settings: null as any,
    });

    datasourceRepository.registerDatasource('ogc-store-1', 'ogcsta', {
      connection: 'conn-1',
      uid: 'ogc-store-1',
      type: 'ogcsta',
      name: 'OGCSTA Store',
      datastreams: [],
      things: [],
      locations: [],
      history: { enabled: false, limit: 10 }
    } as any);

    const store = datasourceRepository.getDatasource('ogc-store-1') as OgcStaStore;
    assert.ok(store instanceof OgcStaStore, 'Store should be successfully initialized');
  });
});
