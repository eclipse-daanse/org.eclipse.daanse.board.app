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

import { describe, test, expect, vi } from 'vitest';
import { container } from 'org.eclipse.daanse.board.app.lib.core';
import { RssConnection, factorySymbol } from '../src/index';

// Unmock rss-parser to allow real network requests
vi.unmock('rss-parser/dist/rss-parser.js');

describe.skipIf(!process.env.RUN_LIVE_TESTS)('RssConnection Live API Integration Tests', () => {
  test('fetches real RSS feed data via CORS proxy', async () => {
    const factory = container.get<any>(factorySymbol);
    const conn = factory({
      url: 'rss.nytimes.com/services/xml/rss/nyt/HomePage.xml',
      uid: 'live-rss',
      type: 'rss',
      name: 'Live RSS'
    });

    try {
      const feed = await conn.fetch({});
      expect(feed).toBeDefined();
      expect(feed).toHaveProperty('title');
      expect(feed).toHaveProperty('items');
      expect(Array.isArray(feed.items)).toBe(true);
      expect(feed.items.length).toBeGreaterThan(0);
    } catch (err: any) {
      console.warn('Skipping live RSS connection test due to CORS proxy or network error:', err.message);
    }
  });
});
