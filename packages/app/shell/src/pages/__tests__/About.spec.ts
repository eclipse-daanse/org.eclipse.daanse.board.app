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
 **********************************************************************/

// @vitest-environment jsdom

import { afterEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { MODULE_LOADER } from 'org.eclipse.daanse.board.app.lib.core'
import About from '../About.vue'
import en from '../../i18n/en.json'

const translator = {
  language: 'en',
  t: (key: string, options?: Record<string, unknown>) => {
    const text = key
      .replace(/^shell:/, '')
      .split('.')
      .reduce<any>((held, step) => held?.[step], en)
    if (typeof text !== 'string') return key
    return Object.entries(options ?? {}).reduce(
      (filled, [name, value]) => filled.split(`{{${name}}}`).join(String(value)),
      text,
    )
  },
}

const VERSIONS = {
  app: { name: '@eclipse-daanse/board.app', version: '0.1.0' },
  commit: '6230bae7a5f82d01674f8f49d1026d7806a6fd76',
  builtAt: '2026-11-11T12:00:00.000Z',
  bundles: [
    { id: 'ui.chart', name: 'Chart', version: '0.1.0', included: true },
    { id: 'ui.map', name: 'Map', version: '0.1.0', included: false },
  ],
  packages: [{ name: 'ui.chart', version: '0.1.0' }],
  dependencies: [{ name: 'vue', version: '3.5.24' }],
}

type Listener = { onModuleEvent(event: unknown): void }

/* A loader that knows the chart, and a bundle the deployment added. */
function fakeLoader() {
  const modules: Record<string, { state: string; error?: Error }> = {
    'ui.chart': { state: 'active' },
    'customer.extra': { state: 'active' },
  }
  const listeners = new Set<Listener>()
  return {
    modules,
    getManifests: () => [
      { id: 'ui.chart', name: 'Chart', version: '0.1.0' },
      { id: 'customer.extra', name: 'Extra', version: '2.0.0' },
    ],
    getModule: (id: string) => modules[id],
    addEventListener: (listener: Listener) => listeners.add(listener),
    removeEventListener: (listener: Listener) => listeners.delete(listener),
    emit: () => listeners.forEach((listener) => listener.onModuleEvent({ type: 'error' })),
    listeners,
  }
}

/* null: the server has no /versions.json, as when started from sources. */
function serving(body: unknown) {
  vi.stubGlobal(
    'fetch',
    vi.fn(async () =>
      body === null
        ? { ok: false, json: async () => ({}) }
        : { ok: true, json: async () => body },
    ),
  )
}

async function setUp(body: unknown = VERSIONS) {
  serving(body)
  const loader = fakeLoader()
  const wrapper = mount(About, {
    global: { provide: { [MODULE_LOADER]: loader, i18n: translator } },
  })
  await flushPromises()
  return { wrapper, loader }
}

const statusOf = (wrapper: Awaited<ReturnType<typeof setUp>>['wrapper'], name: string) =>
  wrapper
    .findAll('tbody tr.row')
    .find((row) => row.text().includes(name))
    ?.find('.status')
    .text()

afterEach(() => vi.unstubAllGlobals())

describe('the about screen', () => {
  it('names the build: its version, its commit and when it was made', async () => {
    const { wrapper } = await setUp()
    const facts = wrapper.find('.facts').text()
    expect(facts).toContain('0.1.0')
    expect(facts).toContain('6230bae7a')
    expect(facts).not.toContain('6230bae7a5f8')
  })

  it('shows the bundle the build left out as missing, first', async () => {
    const { wrapper } = await setUp()
    const first = wrapper.find('tbody tr.row')
    expect(first.text()).toContain('Map')
    expect(statusOf(wrapper, 'Map')).toBe(en.About.status.missing)
  })

  it('shows what the deployment brought as added, and what runs as active', async () => {
    const { wrapper } = await setUp()
    expect(statusOf(wrapper, 'Extra')).toBe(en.About.status.added)
    expect(statusOf(wrapper, 'Chart')).toBe(en.About.status.active)
  })

  /* A bundle can fail after the screen is open; the loader says so, and the screen follows. */
  it('follows the loader when a bundle fails while it is open', async () => {
    const { wrapper, loader } = await setUp()
    loader.modules['ui.chart'] = { state: 'error', error: new Error('no entry') }
    loader.emit()
    await flushPromises()
    expect(statusOf(wrapper, 'Chart')).toBe(en.About.status.failed)
    expect(wrapper.text()).toContain('no entry')
  })

  it('says so where there is no build to compare with, and still lists what runs', async () => {
    const { wrapper } = await setUp(null)
    expect(wrapper.text()).toContain(en.About.noBuild)
    expect(statusOf(wrapper, 'Chart')).toBe(en.About.status.active)
    expect(wrapper.text()).not.toContain(en.About.status.missing)
  })

  it('stops listening to the loader when it is closed', async () => {
    const { wrapper, loader } = await setUp()
    expect(loader.listeners.size).toBe(1)
    wrapper.unmount()
    expect(loader.listeners.size).toBe(0)
  })
})
