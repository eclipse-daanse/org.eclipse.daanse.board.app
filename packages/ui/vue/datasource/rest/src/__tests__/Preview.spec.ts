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

/* What the endpoint does, per test: answer this, or refuse. */
let whole: unknown = answer
let refuses = false

class StubObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

const store = {
  getData: vi.fn(async () => {
    if (refuses) throw new Error('404')
    return (whole as any)?.entries ?? null
  }),
  getOriginalData: vi.fn(async () => {
    if (refuses) throw new Error('404')
    return whole
  }),
  destroy: vi.fn(),
}

const repository = {
  getDatasourceIdentifiers: () => ({ Store: Symbol.for('store'), Preview: null, Settings: null }),
  resolveIdentifier: () => () => store,
}

beforeEach(() => {
  whole = answer
  refuses = false
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

/*
 * Why there is nothing, where there is nothing (#1194).
 *
 * An answer that did not come back, one that came back empty and one
 * that has not come back yet drew the same blank pane - and a rejected
 * read drew it with the reason in the console, where nobody looking at
 * the screen will find it.
 */
describe('when there is nothing to show', () => {
  it('says the endpoint gave nothing, rather than drawing empty panes', async () => {
    whole = null
    const preview = previewOf()
    await flushPromises()

    expect(preview.find('[role="alert"]').text()).toBe('Preview.failed')
    expect(preview.findAll('.tree')).toHaveLength(0)
  })

  it('says the same where the read was refused outright', async () => {
    refuses = true
    const preview = previewOf()
    await flushPromises()

    expect(preview.find('[role="alert"]').text()).toBe('Preview.failed')
    expect(preview.findAll('.tree')).toHaveLength(0)
  })

  it('says an answer came back empty, which is not the same thing', async () => {
    whole = {}
    const preview = previewOf()
    await flushPromises()

    expect(preview.find('[role="status"]').text()).toBe('Preview.empty')
    expect(preview.findAll('.tree')).toHaveLength(0)
  })

  it('draws the trees where there is an answer', async () => {
    const preview = previewOf()
    await flushPromises()

    expect(preview.find('[role="alert"]').exists()).toBe(false)
    expect(preview.findAll('.tree')).toHaveLength(2)
  })
})

/*
 * The state between asking and being answered (#1194), and the one the
 * two views used to disagree about.
 */
describe('while the source has not answered', () => {
  it('says it is reading', async () => {
    /* Both halves are awaited together, so both have to be let go. */
    const waiting: Array<(value: unknown) => void> = []
    const held = () => new Promise((resolve) => waiting.push(resolve))
    const answerNow = (value: unknown) => waiting.forEach((resolve) => resolve(value))
    const slow = {
      getData: vi.fn(held),
      getOriginalData: vi.fn(held),
      destroy: vi.fn(),
    }
    const preview = mount(Preview, {
      props: { dataSource: { type: 'rest', config: { selectedJSONValue: '' } } },
      global: {
        provide: {
          [datasourceRepository]: {
            getDatasourceIdentifiers: () => ({ Store: Symbol.for('store'), Preview: null, Settings: null }),
            resolveIdentifier: () => () => slow,
          },
        },
      },
    })
    await flushPromises()

    expect(preview.find('[role="status"]').text()).toBe('Preview.loading')
    expect(preview.findAll('.tree')).toHaveLength(0)

    answerNow(answer)
    await flushPromises()
    expect(preview.find('[role="status"]').exists()).toBe(false)
  })

  /*
   * The map decides "is there anything" on the whole answer too, so a
   * path that selects nothing does not make one of them say empty while
   * the other draws a full answer.
   */
  it('draws the trees where the path selected nothing but the answer holds something', async () => {
    const preview = mount(Preview, {
      props: { dataSource: { type: 'rest', config: { selectedJSONValue: 'nope' } } },
      global: {
        provide: {
          [datasourceRepository]: {
            getDatasourceIdentifiers: () => ({ Store: Symbol.for('store'), Preview: null, Settings: null }),
            resolveIdentifier: () => () => ({
              getData: vi.fn(async () => null),
              getOriginalData: vi.fn(async () => answer),
              destroy: vi.fn(),
            }),
          },
        },
      },
    })
    await flushPromises()

    expect(preview.find('[role="status"]').exists()).toBe(false)
    expect(preview.find('[role="alert"]').exists()).toBe(false)
    expect(preview.findAll('.tree').length).toBeGreaterThan(0)
  })
})

