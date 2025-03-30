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

import assert from 'assert'
import { Container } from 'inversify'
import GraphQLConnection from 'org.eclipse.daanse.board.app.lib.connection.graphql'

const container = new Container()
GraphQLConnection.init(container)

const graphqlConnection = container.get<
  typeof GraphQLConnection.GraphQLConnection
>(GraphQLConnection.symbol)

const graphqlConnectionA = new graphqlConnection({
  url: 'https://spacex-production.up.railway.app/',
})
const graphqlConnectionB = new graphqlConnection({
  url: 'https://spacex-production.up.railway.app/',
})

assert.notStrictEqual(graphqlConnectionA, graphqlConnectionB)
