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
import { symbol as sparqlStoreSymbol, SparqlStore } from '../src/index';

const connectionRepository = container.get<any>(connRepoId);
const datasourceRepository = container.get<any>(dsRepoId);

connectionRepository.registerConnectionType('rest', {
  Connection: restConnFactorySymbol,
  Settings: null as any,
});

datasourceRepository.registerDatasourceType('sparql', {
  Store: sparqlStoreSymbol,
  Preview: null as any,
  Settings: null as any,
});

describe('SPARQL datasource/store integration tests', () => {
  test('runs all tests successfully', async () => {
    // 1. Store Registration
    connectionRepository.registerConnection('sparql-conn-test', 'rest', {
      url: 'https://dbpedia.org/sparql',
      uid: 'sparql-conn-test',
      type: 'rest',
      name: 'sparql-conn-test'
    });

    datasourceRepository.registerDatasource('sparql-store-test', 'sparql', {
      connection: 'sparql-conn-test',
      query: 'SELECT ?s ?p ?o WHERE { ?s ?p ?o } LIMIT 2',
      uid: 'sparql-store-test',
      type: 'sparql',
      name: 'sparql-store-test'
    });

    const store = datasourceRepository.getDatasource('sparql-store-test');
    assert.ok(store instanceof SparqlStore, 'SPARQL Store should be successfully registered');

    // 2. Mock SPARQL fetch JSON response
    const connection = connectionRepository.getConnection('sparql-conn-test');
    const mockSparqlJson = {
      head: {
        vars: ['s', 'p', 'o']
      },
      results: {
        bindings: [
          {
            s: { type: 'uri', value: 'http://example.org/a' },
            p: { type: 'uri', value: 'http://example.org/b' },
            o: { type: 'literal', value: 'Hello' }
          },
          {
            s: { type: 'uri', value: 'http://example.org/c' },
            p: { type: 'uri', value: 'http://example.org/d' },
            o: { type: 'literal', value: 'World' }
          }
        ]
      }
    };

    connection.fetch = async () => {
      return {
        ok: true,
        json: async () => mockSparqlJson
      };
    };

    // 3. Verify getData
    const dt = await store.getData('DataTable');
    assert.deepStrictEqual(dt.headers, ['s', 'p', 'o'], 'Headers should match vars');
    assert.strictEqual(dt.items.length, 2, 'Should return 2 rows');
    assert.deepStrictEqual(dt.items[0], {
      s: 'http://example.org/a',
      p: 'http://example.org/b',
      o: 'Hello'
    }, 'First row bindings should be mapped correctly');
  });
});
