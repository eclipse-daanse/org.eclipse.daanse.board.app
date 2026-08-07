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
import { identifier as dsRepoId } from 'org.eclipse.daanse.board.app.lib.repository.datasource';
import { factorySymbol as kpiStoreFactorySymbol, KpiStore } from '../src/index';

const connectionRepository = container.get<any>(connRepoId);
const datasourceRepository = container.get<any>(dsRepoId);

datasourceRepository.registerDatasourceType('kpi', {
  Store: kpiStoreFactorySymbol,
  Preview: null as any,
  Settings: null as any,
});

describe('KPI datasource/store integration tests', () => {
  test('runs all tests successfully', async () => {
    // 1. Setup mock connection in the repository
    const mockConnection = {
      catalogName: 'Accounting',
      getApi: async () => ({
        getKpis: async () => ({
          kpis: [
            {
              KPI_NAME: 'Sales',
              KPI_CAPTION: 'Gross Sales',
              KPI_VALUE: '[Measures].[Sales Amount]',
              KPI_GOAL: '100000',
              KPI_DISPLAY_FOLDER: 'Finance\\Revenue'
            }
          ]
        })
      }),
      fetch: async (params: any) => {
        // Find the GUID generated dynamically in MDX query
        const mdxStr = params.data.mdx;
        const matches = mdxStr.match(/Sales_[a-f0-9\-]+_Value/);
        const valKey = matches ? matches[0] : 'Sales_Value';

        return {
          Body: {
            ExecuteResponse: {
              return: {
                root: {
                  row: {
                    [valKey]: 120000,
                    [`Sales_Goal`]: 100000
                  }
                }
              }
            }
          }
        };
      }
    };

    connectionRepository.getConnection = vi.fn().mockReturnValue(mockConnection);

    // 2. Register store
    datasourceRepository.registerDatasource('kpi-store-test', 'kpi', {
      connection: 'mock-xmla-connection',
      cube: 'AccountingCube',
      kpis: ['Sales'],
      uid: 'kpi-store-test',
      type: 'kpi',
      name: 'kpi-store-test'
    });

    const store = datasourceRepository.getDatasource('kpi-store-test');
    assert.ok(store instanceof KpiStore, 'Should retrieve KpiStore instance');

    // 3. Fetch data and verify parsed structure
    const data = await store.getData('DataTable');
    assert.ok(Array.isArray(data), 'Result should be an array of folders/KPIs');
    assert.strictEqual(data.length, 1);
    assert.strictEqual(data[0].type, 'Folder');
    assert.strictEqual(data[0].name, 'Finance');

    const subFolder = data[0].children[0];
    assert.strictEqual(subFolder.type, 'Folder');
    assert.strictEqual(subFolder.name, 'Revenue');

    const kpiNode = subFolder.children[0];
    assert.strictEqual(kpiNode.type, 'KPI');
    assert.strictEqual(kpiNode.name, 'Sales');
    assert.strictEqual(kpiNode.value, 120000);
  });
});
