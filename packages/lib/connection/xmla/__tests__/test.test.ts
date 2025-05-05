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
import XmlaConnection from 'org.eclipse.daanse.board.app.lib.connection.xmla';

const container = new Container();
XmlaConnection.init(container);

const xmlaConnection = container.get<typeof XmlaConnection.XmlaConnection>(XmlaConnection.symbol);

const xmlaConnectionA = new xmlaConnection({ catalogName: 'catalog', cubeName: 'cube', url: 'http://localhost:8080' });
const xmlaConnectionB = new xmlaConnection({ catalogName: 'catalog', cubeName: 'cube', url: 'http://localhost:8080' });


assert.notStrictEqual(xmlaConnectionA, xmlaConnectionB);
