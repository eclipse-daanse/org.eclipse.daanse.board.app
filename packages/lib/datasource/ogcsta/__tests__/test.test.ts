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
import { container } from 'org.eclipse.daanse.board.app.lib.core';
import { identifier as connRepoId } from 'org.eclipse.daanse.board.app.lib.repository.connection';
import { init as initLogger } from 'org.eclipse.daanse.board.app.lib.logger';
import { factorySymbol as ogcStoreFactorySymbol, OgcStaStore } from '../src/index';

// Initialize global logger
initLogger(container);

// Setup mock connection repository in container if needed
const connectionRepository = {
  getConnection: vi.fn().mockReturnValue({
    url: 'http://localhost:8080/v1.1'
  })
};

if (!container.isBound(connRepoId)) {
  container.bind(connRepoId).toConstantValue(connectionRepository);
}

describe('OGCSTA Datasource Unit Tests', () => {
  test('validateConfiguration requires a connection', () => {
    const valid = OgcStaStore.validateConfiguration({ connection: 'conn-1' } as any);
    const invalid = OgcStaStore.validateConfiguration({ connection: '' } as any);

    assert.strictEqual(valid, true, 'Valid config should pass validation');
    assert.strictEqual(invalid, false, 'Config without connection should fail validation');
  });

  test('initializes and configures OgcStaStore properties', () => {
    const store = container.get<OgcStaStore>(OgcStaStore);
    store.init({
      connection: 'conn-1',
      uid: 'ogc-store-1',
      type: 'ogcsta',
      name: 'OGCSTA Store',
      datastreams: [],
      things: [],
      locations: [],
      history: { enabled: false, limit: 10 }
    });

    assert.ok(store instanceof OgcStaStore, 'Store should be successfully initialized');
  });
});
