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
 * The advanced overlay (#1291): only the difference to the compiled spec is
 * kept, it survives a change in the form, what it may not say is taken out,
 * it applies whether the Spec tab is shown or not, and the tab is shown only
 * to a reader who turned advanced editing on.
 */
import { beforeEach, describe, expect, it } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { identifier as PAGE_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.page'
import { identifier } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { ADVANCED_EDITING, usePreference } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import '../referencedPackages'
import { VegawidgetPackage } from '../gen/VegawidgetPackage'
import { compileRecipe } from '../recipe'
import { modelledSettings } from '../settingsModel'
import { diffOverlay, guarded, mergeOverlay, overlayPaths, overlayText, parseOverlay, withOverlay, withoutPath } from '../overlay'
import { VegaSpecTabProvider } from '../index'
import VegaSpecTab from '../VegaSpecTab.vue'
import VegaWidget from '../VegaWidget.vue'

void VegawidgetPackage.eINSTANCE

const bars = () => modelledSettings({ renderer: 'svg', layers: [{ mark: 'bar', encodings: [
  { channel: 'x', field: 'category', type: 'nominal' },
  { channel: 'y', field: 'amount', type: 'quantitative' },
] }] })

beforeEach(() => usePreference(ADVANCED_EDITING).set(false))

describe('the overlay', () => {
  it('merges objects by key and arrays by position, and reports what finds nothing', () => {
    const spec = { layer: [{ mark: { type: 'bar' } }, { mark: { type: 'rule' } }], title: 'A' } as never
    const { spec: merged, unused } = mergeOverlay(spec, { layer: [{}, { mark: { strokeDash: [4, 2] } }, { mark: { color: 'red' } }], title: 'B' })
    expect(merged).toEqual({ layer: [{ mark: { type: 'bar' } }, { mark: { type: 'rule', strokeDash: [4, 2] } }], title: 'B' })
    expect(unused).toEqual(['layer[2]'])
  })

  it('keeps only what differs, a removed key as null', () => {
    const compiled = { mark: { type: 'bar', tooltip: true }, encoding: { x: { field: 'a' } }, layer: [{ a: 1 }, { b: 2 }] }
    const edited = { mark: { type: 'bar', cornerRadius: 4 }, encoding: { x: { field: 'a' } }, layer: [{ a: 1 }, { b: 3 }] }
    expect(diffOverlay(compiled, edited)).toEqual({ mark: { cornerRadius: 4, tooltip: null }, layer: [{}, { b: 3 }] })
    expect(diffOverlay(compiled, compiled)).toBeUndefined()
  })

  it('takes out URLs, links, data of its own and another schema', () => {
    const { overlay, refused } = guarded({
      $schema: 'x', datasets: { t: [] }, data: { url: 'https://example.org/a.json' },
      layer: [{ data: { name: 'table' }, encoding: { href: { field: 'link' } } }],
      mark: { type: 'image', url: 'https://example.org/a.png' },
    })
    expect(overlay).toEqual({ layer: [{ data: { name: 'table' }, encoding: {} }], mark: { type: 'image' } })
    expect(refused).toEqual(['$schema', 'datasets', 'data', 'layer[0].encoding.href', 'mark.url'])
  })

  it('lists its overrides and removes one, empty parents with it', () => {
    const overlay = { mark: { strokeDash: [4, 2], color: 'red' }, layer: [{}, { title: 'x' }] }
    expect(overlayPaths(overlay)).toEqual(['mark.strokeDash', 'mark.color', 'layer[1].title'])
    expect(withoutPath(overlay, 'layer[1].title')).toEqual({ mark: { strokeDash: [4, 2], color: 'red' } })
    expect(overlayText(withoutPath({ title: 'x' }, 'title'))).toBe('')
  })

  it('survives a change in the form: the form writes the base, the overlay adds to it', () => {
    const settings = bars()
    const { overlay } = guarded(diffOverlay(compileRecipe(settings), { ...compileRecipe(settings), mark: { type: 'bar', tooltip: true, strokeDash: [4, 2] } }))
    settings.specOverlay = overlayText(overlay)
    settings.layers.get(0).color = 'teal'
    const { spec } = withOverlay(compileRecipe(settings), settings.specOverlay)
    expect((spec as any).mark).toEqual({ type: 'bar', color: 'teal', tooltip: true, strokeDash: [4, 2] })
  })

  it('draws the form chart when the stored overlay is broken', () => {
    const compiled = compileRecipe(bars())
    const drawn = withOverlay(compiled, '{ broken')
    expect(drawn.spec).toBe(compiled)
    expect(drawn.error).toBeTruthy()
    expect(() => parseOverlay('[1]')).toThrow()
  })
})

const settle = async () => {
  for (let i = 0; i < 20; i++) {
    await flushPromises()
    await new Promise((resolve) => setTimeout(resolve, 10))
  }
}

describe('the chart with an overlay', () => {
  it('applies the stored overlay with advanced editing off', async () => {
    const settings = bars()
    settings.specOverlay = JSON.stringify({ title: 'From the overlay' })
    const wrapper = mount(VegaWidget, {
      props: { id: 'w1', configv: settings as any },
      global: { provide: { [identifier as symbol]: { getDatasource: () => { throw new Error('none') } } } },
      attachTo: document.body,
    })
    await settle()
    expect(wrapper.get('[data-testid="vega-chart"]').element.textContent).toContain('From the overlay')
    wrapper.unmount()
  })
})

describe('the Spec tab', () => {
  const mountTab = (config: unknown) => {
    const widget = { uid: 'w1', type: 'VegaWidget', config }
    return { widget, view: mount(VegaSpecTab, {
      props: { widgetId: 'w1', widgetType: 'VegaWidget' },
      global: { provide: { [PAGE_REGISTRY as symbol]: { getPages: () => [{ widgets: [widget] }] } } },
    }) }
  }

  it('is offered to a reader who turned advanced editing on, and only for a chart', () => {
    const tab = new VegaSpecTabProvider()
    expect(tab.appliesTo('VegaWidget')).toBe(false)
    usePreference(ADVANCED_EDITING).set(true)
    expect(tab.appliesTo('VegaWidget')).toBe(true)
    expect(tab.appliesTo('ChartWidget')).toBe(false)
  })

  it('keeps of an edit only what differs from the form, and removes it again', async () => {
    const settings = bars()
    const { view } = mountTab(settings)
    await flushPromises()
    const area = view.get('[data-testid="vega-spec-text"]')
    const shown = JSON.parse((area.element as HTMLTextAreaElement).value)
    expect(shown.mark.type).toBe('bar')

    shown.mark.strokeDash = [4, 2]
    shown.config = { view: { stroke: null } }
    await area.setValue(JSON.stringify(shown))
    await view.get('[data-testid="vega-spec-apply"]').trigger('click')
    await flushPromises()
    expect(JSON.parse(settings.specOverlay!)).toEqual({ mark: { strokeDash: [4, 2] }, config: { view: { stroke: null } } })
    expect(view.text()).toContain('mark.strokeDash')

    await view.findAll('.spec-tab__list li button')[0].trigger('click')
    expect(JSON.parse(settings.specOverlay!)).toEqual({ config: { view: { stroke: null } } })
    view.unmount()
  })

  it('says so for text that is no JSON, and keeps the overlay as it was', async () => {
    const settings = bars()
    const { view } = mountTab(settings)
    await flushPromises()
    await view.get('[data-testid="vega-spec-text"]').setValue('{ not json')
    await view.get('[data-testid="vega-spec-apply"]').trigger('click')
    expect(view.find('[role="alert"]').exists()).toBe(true)
    expect(settings.specOverlay).toBe('')
    view.unmount()
  })

  it('hands the widget the model object when the board held plain JSON', async () => {
    const { widget } = mountTab({ layers: [] })
    await flushPromises()
    expect(typeof (widget.config as { eClass?: unknown }).eClass).toBe('function')
  })
})
