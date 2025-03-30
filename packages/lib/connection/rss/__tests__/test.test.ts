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
import RssConnection from 'org.eclipse.daanse.board.app.lib.connection.rss';

const container = new Container();
RssConnection.init(container);

const rssConnection = container.get<typeof RssConnection.RssConnection>(RssConnection.symbol);

const rssConnectionA = new rssConnection({ url: 'http://localhost:8080' });
const rssConnectionB = new rssConnection({ url: 'http://localhost:8080' });


assert.notStrictEqual(rssConnectionA, rssConnectionB);
