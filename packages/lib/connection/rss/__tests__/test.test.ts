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
import { describe, test, vi, beforeEach, expect } from 'vitest';
import { container } from 'org.eclipse.daanse.board.app.lib.core';
import Parser from 'rss-parser/dist/rss-parser.js';
import { factorySymbol as rssFactorySymbol, RssConnection } from '../src/index';

// Mock rss-parser/dist/rss-parser.js
const mockParseURL = vi.fn().mockResolvedValue({
  title: 'Mocked Feed',
  items: [{ title: 'Item 1', link: 'http://example.com/1' }]
});

vi.mock('rss-parser/dist/rss-parser.js', () => {
  return {
    default: function() {
      return {
        parseURL: mockParseURL
      };
    }
  };
});

describe('RSS Connection Unit/Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('factory is bound and registers correctly in container', () => {
    const factory = container.get<any>(rssFactorySymbol);
    assert.ok(factory, 'RssConnectionFactory should be bound in the container');

    const config = { url: 'https://example.com/rss.xml', uid: 'rss-test', type: 'rss', name: 'RSS Connection' };
    const connection = factory(config);
    assert.ok(connection instanceof RssConnection, 'Should construct a valid RssConnection instance');
  });

  test('validateConfiguration requires a url', () => {
    const valid = RssConnection.validateConfiguration({ url: 'https://example.com/feed', uid: 'rss-test-1', type: 'rss', name: 'RSS 1' });
    const invalid = RssConnection.validateConfiguration({ url: '', uid: 'rss-test-2', type: 'rss', name: 'RSS 2' });

    assert.strictEqual(valid, true, 'Valid config should pass validation');
    assert.strictEqual(invalid, false, 'Config without URL should fail validation');
  });

  test('fetch calls rss-parser and prepends proxy', async () => {
    const factory = container.get<any>(rssFactorySymbol);
    const config = { url: 'example.com/rss.xml', uid: 'rss-test-3', type: 'rss', name: 'RSS 3' };
    const connection = factory(config);

    const data = await connection.fetch({});
    expect(mockParseURL).toHaveBeenCalledWith('https://cors-anywhere.herokuapp.com/example.com/rss.xml');
    assert.deepStrictEqual(data, {
      title: 'Mocked Feed',
      items: [{ title: 'Item 1', link: 'http://example.com/1' }]
    }, 'Fetch should return mocked feed data');
  });
});
