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
 * The widget mounted as the board mounts it (#1283): it draws the chart and
 * draws it again when a setting changes - written into the same instance,
 * as the settings form does (#1203).
 */
import { describe, expect, it } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { VegawidgetPackage } from '../gen/VegawidgetPackage'
import { emptySettings, modelledSettings } from '../settingsModel'
import VegaWidget from '../VegaWidget.vue'
import { identifier } from 'org.eclipse.daanse.board.app.lib.api.datasource'

void VegawidgetPackage.eINSTANCE

/* Drawing is asynchronous twice over: the dynamic import, then Vega. */
const settle = async () => {
  for (let i = 0; i < 20; i++) {
    await flushPromises()
    await new Promise((resolve) => setTimeout(resolve, 10))
  }
}

const mountWith = (settings: unknown) =>
  mount(VegaWidget, {
    props: { id: 'w1', configv: settings as any },
    /* No source: the widget draws its sample. */
    global: { provide: { [identifier as symbol]: { getDatasource: () => { throw new Error('none') } } } },
    attachTo: document.body,
  })

describe('VegaWidget', () => {
  it('draws the chart', async () => {
    const settings = modelledSettings(undefined)
    settings.renderer = 'svg'
    const wrapper = mountWith(settings)
    await settle()
    const chart = wrapper.get('[data-testid="vega-chart"]')
    expect(chart.element.querySelector('svg .mark-rect')).toBeTruthy()
    expect(wrapper.find('[role="alert"]').exists()).toBe(false)
    wrapper.unmount()
  })

  it('follows a setting written into the same instance', async () => {
    const settings = modelledSettings(undefined)
    settings.renderer = 'svg'
    const wrapper = mountWith(settings)
    await settle()
    settings.title = 'Revenue'
    await settle()
    expect(wrapper.get('[data-testid="vega-chart"]').element.textContent).toContain('Revenue')
    settings.renderer = 'canvas'
    await settle()
    expect(wrapper.get('[data-testid="vega-chart"]').element.querySelector('svg')).toBeNull()
    wrapper.unmount()
  })

  it('adopts the stored JSON and hands the model object back to the board', async () => {
    const stored = { renderer: 'svg', layers: [{ mark: 'point', encodings: [
      { channel: 'x', field: 'category', type: 'nominal' },
      { channel: 'y', field: 'amount', type: 'quantitative' },
    ] }] }
    const wrapper = mountWith(stored)
    await settle()
    const handed = wrapper.emitted('update:configv')?.at(-1)?.[0] as ReturnType<typeof modelledSettings>
    expect(handed?.layers.get(0).mark).toBe('point')
    expect(wrapper.get('[data-testid="vega-chart"]').element.querySelector('svg .mark-symbol')).toBeTruthy()
    wrapper.unmount()
  })

  it('says so when the chart has no layer', async () => {
    const wrapper = mountWith(emptySettings())
    await settle()
    expect(wrapper.get('[role="alert"]').text()).toBe('Recipe.noLayers')
    wrapper.unmount()
  })

  it('draws in the board theme and follows a change of it', async () => {
    const root = document.documentElement
    root.style.setProperty('--color-fg', 'rgb(1, 2, 3)')
    const settings = modelledSettings({ renderer: 'svg', title: 'Themed', params: [{ name: 'limit', kind: 'value', value: '3' }] })
    const wrapper = mountWith(settings)
    await settle()
    const title = () => wrapper.get('[data-testid="vega-chart"]').element.querySelector('.role-title-text text')
    expect(title()?.getAttribute('fill')).toBe('rgb(1, 2, 3)')

    root.style.setProperty('--color-fg', 'rgb(9, 8, 7)')
    root.setAttribute('data-theme', 'light')
    await settle()
    expect(title()?.getAttribute('fill')).toBe('rgb(9, 8, 7)')

    root.style.removeProperty('--color-fg')
    root.removeAttribute('data-theme')
    wrapper.unmount()
  })
})
