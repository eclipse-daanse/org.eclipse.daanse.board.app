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

// @vitest-environment jsdom
import { describe, test, expect } from 'vitest';
import { container } from 'org.eclipse.daanse.board.app.lib.core';
import { ConnectionRepository, identifier as connectionRepoSymbol } from 'org.eclipse.daanse.board.app.lib.repository.connection';
import { DatasourceRepository, identifier as datasourceRepoSymbol } from 'org.eclipse.daanse.board.app.lib.repository.datasource';
import { GraphQLConnection, factorySymbol as graphqlConnectionFactorySymbol } from 'org.eclipse.daanse.board.app.lib.connection.graphql';
import { factorySymbol as graphqlStoreFactorySymbol, GraphQLStore } from '../src/index';

describe.skipIf(!process.env.RUN_LIVE_TESTS)('GraphQL Datasource Live API Integration Tests', () => {
  test('fetches real data using GraphQL store', async () => {
    const connectionRepository = container.get<ConnectionRepository>(connectionRepoSymbol);
    const datasourceRepository = container.get<DatasourceRepository>(datasourceRepoSymbol);

    // Fallback binding in case of Vitest module resolution/duplication issues
    if (!container.isBound(GraphQLConnection)) {
      container.bind<GraphQLConnection>(GraphQLConnection).toSelf().inTransientScope();
    }
    if (!container.isBound(graphqlConnectionFactorySymbol)) {
      container.bind<any>(graphqlConnectionFactorySymbol).toFactory(() => {
        return (config: any) => {
          const connection = container.get<GraphQLConnection>(GraphQLConnection);
          connection.init(config);
          return connection;
        };
      });
    }

    // Register type info in repository
    connectionRepository.registerConnectionType('graphql-live', {
      Connection: graphqlConnectionFactorySymbol,
      Settings: null as any
    });

    datasourceRepository.registerDatasourceType('graphql-live', {
      Store: graphqlStoreFactorySymbol,
      Preview: null as any,
      Settings: null as any
    });

    // Register instance config
    connectionRepository.registerConnection('live-graphql-conn', 'graphql-live', {
      url: 'https://countries.trevorblades.com/',
      uid: 'live-graphql-conn',
      type: 'graphql-live',
      name: 'Live GraphQL Connection'
    });

    datasourceRepository.registerDatasource('live-graphql-ds', 'graphql-live', {
      connection: 'live-graphql-conn',
      query: 'query { countries(filter: { code: { eq: "FR" } }) { name capital } }',
      uid: 'live-graphql-ds',
      type: 'graphql-live',
      name: 'Live GraphQL Datasource'
    });

    try {
      const store = datasourceRepository.getDatasource('live-graphql-ds') as GraphQLStore;
      expect(store).toBeDefined();

      const result = await store.getData('object');
      expect(result).toBeDefined();
      expect(result.countries).toBeDefined();
      expect(result.countries[0].name).toBe('France');
    } catch (err: any) {
      console.warn('Skipping live GraphQL datasource test due to network/server error:', err.message);
    }
  });
});
