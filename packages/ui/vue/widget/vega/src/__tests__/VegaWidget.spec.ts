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
import { VegaWidgetSettingsImpl } from '../gen/VegaWidgetSettingsImpl'
import VegaWidget from '../VegaWidget.vue'

void VegawidgetPackage.eINSTANCE

/* Drawing is asynchronous twice over: the dynamic import, then Vega. */
const settle = async () => {
  for (let i = 0; i < 20; i++) {
    await flushPromises()
    await new Promise((resolve) => setTimeout(resolve, 10))
  }
}

const mountWith = (settings: VegaWidgetSettingsImpl) =>
  mount(VegaWidget, { props: { id: 'w1', configv: settings as any }, attachTo: document.body })

describe('VegaWidget', () => {
  it('draws the chart', async () => {
    const settings = new VegaWidgetSettingsImpl()
    settings.renderer = 'svg'
    const wrapper = mountWith(settings)
    await settle()
    const chart = wrapper.get('[data-testid="vega-chart"]')
    expect(chart.element.querySelector('svg .mark-rect')).toBeTruthy()
    expect(wrapper.find('[role="alert"]').exists()).toBe(false)
    wrapper.unmount()
  })

  it('follows a setting written into the same instance', async () => {
    const settings = new VegaWidgetSettingsImpl()
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

  it('takes the model defaults for what a stored chart does not hold', async () => {
    const settings = new VegaWidgetSettingsImpl()
    const wrapper = mountWith(settings)
    await settle()
    expect(settings.tooltip).toBe(true)
    expect(settings.renderer).toBe('canvas')
    wrapper.unmount()
  })
})
