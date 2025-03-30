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
import { Container } from 'inversify';
import WSConnection from 'org.eclipse.daanse.board.app.lib.connection.websocket';

const container = new Container();
WSConnection.init(container);

const wsConnection = container.get<typeof WSConnection.WSConnection>(WSConnection.symbol);

const wsConnectionA = new wsConnection({ url: 'http://localhost:8080' });
const wsConnectionB = new wsConnection({ url: 'http://localhost:8080' });


assert.notStrictEqual(wsConnectionA, wsConnectionB);
