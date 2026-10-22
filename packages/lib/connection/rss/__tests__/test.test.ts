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
import { DefaultServiceRegistry } from '@eclipse-daanse/tsm';
import Parser from 'rss-parser/dist/rss-parser.js';
import { activate, factorySymbol as rssFactorySymbol, RssConnection } from '../src/index';

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


/*
 * The package registers its factory when it is activated; the Inversify
 * container these tests were written against is gone. The id is a string,
 * and factorySymbol is Symbol.for(it).
 */
function factoryOf() {
  const services = new DefaultServiceRegistry();
  activate({ services } as never);
  return services.getRequired<(config: never) => never>(
    Symbol.keyFor(rssFactorySymbol) ?? String(rssFactorySymbol.description),
  );
}

describe('RSS Connection Unit/Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('factory is bound and registers correctly in container', () => {
    const factory = factoryOf();
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
    const factory = factoryOf();
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
