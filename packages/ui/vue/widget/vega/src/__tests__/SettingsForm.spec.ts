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
 * The chart configured in its generated form (#1285): the forms load
 * against the model, each shows what the mark reads and hides the rest,
 * and a field offers the names of the data while it is typed.
 */
import { describe, expect, it } from 'vitest'
import { markRaw, nextTick } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import i18next from 'i18next'
import { SettingsForm } from 'org.eclipse.daanse.board.app.ui.vue.uimodel'
import { VegawidgetPackage } from '../gen/VegawidgetPackage'
import { VegawidgetFactory } from '../gen/VegawidgetFactory'
import type { VegaWidgetSettings } from '../gen/VegaWidgetSettings'
import type { MarkType } from '../gen/MarkType'
import { compileRecipe } from '../recipe'
import { emptySettings } from '../settingsModel'
import settingsFormXmi from '../../model/ui.xmi?raw'
import layerFormXmi from '../../model/ui-layer.xmi?raw'
import encodingFormXmi from '../../model/ui-encoding.xmi?raw'
import transformFormXmi from 'org.eclipse.daanse.board.app.lib.datasource.base/model/ui-transform.xmi?raw'
import paramFormXmi from '../../model/ui-param.xmi?raw'
import facetFormXmi from '../../model/ui-facet.xmi?raw'
import datasetFormXmi from '../../model/ui-dataset.xmi?raw'
import columnTypeFormXmi from 'org.eclipse.daanse.board.app.lib.datasource.base/model/ui-column-type.xmi?raw'
import settingsEcore from '../../model/model.ecore?raw'
import en from '../i18n/en.json'
import de from '../i18n/de.json'
import uimodelEn from '../../../../uimodel/src/i18n/en.json'

void VegawidgetPackage.eINSTANCE
const factory = VegawidgetFactory.eINSTANCE

async function translator(lng: 'en' | 'de' = 'en') {
  const i18n = i18next.createInstance()
  await i18n.init({ fallbackLng: 'en', lng, resources: { en: { vega: en, uimodel: uimodelEn }, de: { vega: de, uimodel: uimodelEn } } })
  return i18n
}

async function settingsForm(settings: VegaWidgetSettings, suggest?: (owner: unknown, feature: string) => string[], lng: 'en' | 'de' = 'en') {
  const view = mount(SettingsForm, {
    props: {
      modelValue: markRaw(settings),
      create: () => emptySettings(),
      uiModelXmi: settingsFormXmi,
      domainPackage: VegawidgetPackage.eINSTANCE,
      uiModelUri: '/vega-settings.ui.xmi',
      entryForms: [
        { xmi: layerFormXmi, uri: '/vega-layer.ui.xmi' },
        { xmi: encodingFormXmi, uri: '/vega-encoding.ui.xmi' },
        { xmi: transformFormXmi, uri: '/vega-transform.ui.xmi' },
        { xmi: paramFormXmi, uri: '/vega-param.ui.xmi' },
        { xmi: facetFormXmi, uri: '/vega-facet.ui.xmi' },
        { xmi: datasetFormXmi, uri: '/vega-dataset.ui.xmi' },
        { xmi: columnTypeFormXmi, uri: '/vega-column-type.ui.xmi' },
      ],
      ecore: settingsEcore,
      suggest: suggest as never,
    },
    global: { provide: { i18n: await translator(lng) } },
    attachTo: document.body,
  })
  await flushPromises()
  return view
}

/** A chart of one layer with these encodings, as the form would leave it. */
function chart(mark: MarkType, encodings: Array<Record<string, unknown>>, layerSettings: Record<string, unknown> = {}) {
  const settings = emptySettings()
  const layer = factory.createLayer()
  layer.mark = mark
  Object.assign(layer, layerSettings)
  for (const each of encodings) {
    const encoding = factory.createEncoding()
    Object.assign(encoding, each)
    layer.encodings.add(encoding)
  }
  settings.layers.add(layer)
  return settings
}

/* What the form calls its fields - a checkbox label carries its hint after it. */
const labels = (view: Awaited<ReturnType<typeof settingsForm>>) => {
  const drawn = view.findAll('label, legend, .list__label').map((element) => element.text()).filter(Boolean)
  return { has: (label: string) => drawn.some((text) => text.startsWith(label)) }
}

/* The four charts the ticket names, each as the form builds it. */
const CHARTS: Record<string, { settings: () => VegaWidgetSettings; shows: string[]; hides: string[] }> = {
  bar: {
    settings: () => chart('bar', [{ channel: 'x', field: 'category' }, { channel: 'y', field: 'amount', type: 'quantitative' }]),
    shows: [en.FormLayer.cornerRadius],
    hides: [en.FormLayer.innerRadius, en.FormLayer.interpolate, en.FormLayer.filled],
  },
  line: {
    settings: () => chart('line', [{ channel: 'x', field: 'date', type: 'temporal' }, { channel: 'y', field: 'amount', type: 'quantitative' }]),
    shows: [en.FormLayer.interpolate, en.FormLayer.showPoints],
    hides: [en.FormLayer.cornerRadius, en.FormLayer.innerRadius],
  },
  scatter: {
    settings: () => chart('point', [{ channel: 'x', field: 'width', type: 'quantitative' }, { channel: 'y', field: 'height', type: 'quantitative' }]),
    shows: [en.FormLayer.filled],
    hides: [en.FormLayer.interpolate, en.FormLayer.cornerRadius],
  },
  donut: {
    settings: () => chart('arc', [{ channel: 'theta', field: 'amount', type: 'quantitative' }, { channel: 'color', field: 'category' }], { innerRadius: 50 }),
    shows: [en.FormLayer.innerRadius, en.FormLayer.cornerRadius],
    hides: [en.FormLayer.interpolate, en.FormLayer.filled],
  },
}

describe('the chart settings form', () => {
  for (const [name, { settings, shows, hides }] of Object.entries(CHARTS)) {
    it(`shows what a ${name} chart reads and hides the rest`, async () => {
      const held = settings()
      const view = await settingsForm(held)
      const drawn = labels(view)
      for (const label of shows) expect(drawn.has(label), label).toBe(true)
      for (const label of hides) expect(drawn.has(label), label).toBe(false)
      /* What the form holds is a chart: the recipe compiles. */
      expect(() => compileRecipe(held)).not.toThrow()
      view.unmount()
    })
  }

  it('follows a changed mark at once', async () => {
    const settings = CHARTS.bar.settings()
    const view = await settingsForm(settings)
    expect(labels(view).has(en.FormLayer.innerRadius)).toBe(false)
    settings.layers.get(0).mark = 'arc'
    await flushPromises()
    expect(labels(view).has(en.FormLayer.innerRadius)).toBe(true)
    view.unmount()
  })

  it('adds a layer and an encoding to the model', async () => {
    const settings = emptySettings()
    const view = await settingsForm(settings)
    const layers = view.findAll('section.list').find((list) => list.find('.list__label').text() === en.Form.layers)!
    await layers.find('.list__head button').trigger('click')
    await nextTick()
    expect(settings.layers.size()).toBe(1)
    expect(settings.layers.get(0).eContainer()).toBe(settings)

    const encodings = view.findAll('section.list').find((list) => list.find('.list__label').text() === en.FormLayer.encodings)!
    await encodings.find('.list__head button').trigger('click')
    await nextTick()
    expect(settings.layers.get(0).encodings.size()).toBe(1)
    view.unmount()
  })

  it('draws every label in words, not as a key', async () => {
    const settings = CHARTS.bar.settings()
    const view = await settingsForm(settings)
    const drawn = view.findAll('label, legend, option, .list__label').map((element) => element.text())
    expect(drawn.filter((text) => /\bvega:|uimodel:/.test(text))).toEqual([])
    view.unmount()
  })

  it('offers the names of the data while a field is typed', async () => {
    const settings = CHARTS.bar.settings()
    const asked: string[] = []
    const view = await settingsForm(settings, (_owner, feature) => {
      asked.push(feature)
      return feature === 'field' ? ['category', 'amount', 'region'] : []
    })
    await flushPromises()
    expect(asked).toContain('field')
    const offered = view.findAll('datalist option').map((option) => option.attributes('value'))
    expect(offered).toContain('region')
    view.unmount()
  })

  it('explains each field in the language of the reader', async () => {
    const view = await settingsForm(CHARTS.bar.settings(), undefined, 'de')
    expect(view.text()).toContain(de.Hints.Layer.mark)
    expect(view.text()).toContain(de.Hints.Encoding.field)
    expect(view.text()).not.toContain('The kind of mark the layer draws.')
    view.unmount()
  })
})
