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
import { SqlXmlaStore, factorySymbol as sqlXmlaFactorySymbol } from '../src/index';

const connectionRepository = container.get<any>(connRepoId);
const datasourceRepository = container.get<any>(dsRepoId);

// Stub XMLA connection type
connectionRepository.registerConnectionType('xmla', {
  Connection: Symbol.for('XmlaConnectionFactory'),
  Settings: null as any,
});

datasourceRepository.registerDatasourceType('sql_xmla', {
  Store: sqlXmlaFactorySymbol,
  Preview: null as any,
  Settings: null as any,
});

describe('SQL_XMLA datasource/store integration tests', () => {
  test('registers and fetches data correctly', async () => {
    // 1. Register Mock XMLA Connection
    const mockXmlaConnection = {
      fetch: async (options: any) => {
        assert.strictEqual(options.data?.mdx, 'SELECT * FROM Accounting');
        return {
          Body: {
            ExecuteResponse: {
              return: {
                root: {
                  row: [
                    { Account: 'Assets', Amount: 1000 },
                    { Account: 'Liabilities', Amount: 500 }
                  ]
                }
              }
            }
          }
        };
      }
    };

    const xmlaConnFactory = () => mockXmlaConnection;
    if (!container.isBound(Symbol.for('XmlaConnectionFactory'))) {
      container.bind(Symbol.for('XmlaConnectionFactory')).toConstantValue(xmlaConnFactory);
    }

    connectionRepository.registerConnection('xmla-conn-1', 'xmla', {
      url: 'https://daans.emondrian.com/xmla',
      catalog: 'Accounting',
      uid: 'xmla-conn-1',
      type: 'xmla',
      name: 'Accounting XMLA'
    });

    datasourceRepository.registerDatasource('sql-xmla-ds-1', 'sql_xmla', {
      connection: 'xmla-conn-1',
      sql: 'SELECT * FROM Accounting',
      uid: 'sql-xmla-ds-1',
      type: 'sql_xmla',
      name: 'SQL XMLA'
    });

    const store = datasourceRepository.getDatasource('sql-xmla-ds-1');
    assert.ok(store instanceof SqlXmlaStore, 'Store should be successfully registered');

    // 2. Fetch DataTable
    const dt = await store.getData('DataTable');
    assert.deepStrictEqual(dt.headers, ['index', 'Account', 'Amount']);
    assert.strictEqual(dt.items.length, 2);
    assert.deepStrictEqual(dt.items[0], { index: 0, Account: 'Assets', Amount: 1000 });
  });
});
