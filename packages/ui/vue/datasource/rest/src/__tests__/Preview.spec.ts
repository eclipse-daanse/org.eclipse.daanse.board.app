/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
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
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { identifier as datasourceRepository } from 'org.eclipse.daanse.board.app.lib.api.datasource'

/* Stood in for, because what is under test is the number it is handed. */
vi.mock('vue-json-pretty', () => ({
  default: {
    name: 'VueJsonPretty',
    props: ['data', 'height', 'deep', 'virtual', 'selectedValue'],
    template: '<div class="tree" :data-height="height" />',
  },
}))

import Preview from '../Preview.vue'

/** How tall the panes pretend to be; jsdom lays nothing out on its own. */
const PANE = 900

const answer = { entries: [{ id: 1 }, { id: 2 }] }

class StubObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

const store = {
  getData: vi.fn(async () => answer.entries),
  getOriginalData: vi.fn(async () => answer),
  destroy: vi.fn(),
}

const repository = {
  getDatasourceIdentifiers: () => ({ Store: Symbol.for('store'), Preview: null, Settings: null }),
  resolveIdentifier: () => () => store,
}

beforeEach(() => {
  vi.stubGlobal('ResizeObserver', StubObserver)
  Object.defineProperty(HTMLElement.prototype, 'clientHeight', {
    configurable: true,
    get: () => PANE,
  })
})

afterEach(() => {
  vi.unstubAllGlobals()
  delete (HTMLElement.prototype as any).clientHeight
})

function previewOf() {
  return mount(Preview, {
    props: { dataSource: { type: 'rest', config: { selectedJSONValue: '' } } },
    global: {
      provide: { [datasourceRepository]: repository },
    },
  })
}

/*
 * Virtual scrolling draws the rows that fit in the height it is given and
 * no others, so a height left at its starting value is a tree drawn in the
 * top third of its pane with the rest of the pane empty.
 *
 * Both panes stand behind a v-if on the store, and the store is built in a
 * mounted hook - so when this component mounted, neither element existed.
 * Measuring there read nothing, observed nothing, and never ran again.
 */
describe('how tall the trees are drawn', () => {
  it('measures each pane once it is there', async () => {
    const preview = previewOf()
    await flushPromises()

    const trees = preview.findAll('.tree')
    expect(trees).toHaveLength(2)
    for (const tree of trees) {
      expect(tree.attributes('data-height')).toBe(String(PANE))
    }
  })

  it('has no pane to measure before the store is built', () => {
    const preview = previewOf()
    expect(preview.findAll('.tree')).toHaveLength(0)
  })
})
