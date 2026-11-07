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
/*
 * A font that arrives after the chart was laid out (#1305): the widget lays
 * the chart out again, at the size it has, and stops listening once it is
 * gone.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { identifier } from 'org.eclipse.daanse.board.app.lib.api.datasource'

const fitTo = vi.fn(async () => {})
vi.mock('../embedChart', async (original) => ({ ...(await original<typeof import('../embedChart')>()), fitTo }))

import '../referencedPackages'
import { modelledSettings } from '../settingsModel'
import VegaWidget from '../VegaWidget.vue'

const fonts = Object.assign(new EventTarget(), { ready: Promise.resolve() })
const size = (name: 'clientWidth' | 'clientHeight', value: number) =>
  Object.defineProperty(HTMLElement.prototype, name, { configurable: true, get: () => value })

beforeEach(() => {
  Object.defineProperty(document, 'fonts', { configurable: true, value: fonts })
  size('clientWidth', 640)
  size('clientHeight', 360)
})
afterEach(() => {
  delete (HTMLElement.prototype as unknown as Record<string, unknown>).clientWidth
  delete (HTMLElement.prototype as unknown as Record<string, unknown>).clientHeight
  fitTo.mockClear()
})

const settle = async () => {
  for (let i = 0; i < 20; i++) {
    await flushPromises()
    await new Promise((resolve) => setTimeout(resolve, 10))
  }
}

describe('a font that arrives late', () => {
  it('lays the chart out again at its size, and not after unmount', async () => {
    const wrapper = mount(VegaWidget, {
      props: { id: 'w1', configv: modelledSettings({ renderer: 'svg' }) as any },
      global: { provide: { [identifier as symbol]: { getDatasource: () => { throw new Error('none') } } } },
      attachTo: document.body,
    })
    await settle()
    fitTo.mockClear()

    fonts.dispatchEvent(new Event('loadingdone'))
    await settle()
    expect(fitTo).toHaveBeenCalledWith(expect.anything(), 640, 360)

    wrapper.unmount()
    fitTo.mockClear()
    fonts.dispatchEvent(new Event('loadingdone'))
    await settle()
    expect(fitTo).not.toHaveBeenCalled()
  })
})
