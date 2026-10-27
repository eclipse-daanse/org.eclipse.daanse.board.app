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
 * The chart's settings as the shell shows them: the written form, rendered
 * by SettingsForm against a modelled ChartSettings.
 *
 * Both defects this holds were silent. The series list's Add button put a
 * series into the EList and drew nothing, because the list read the EList
 * without listening to it. And every label the composer draws itself - the
 * group headings - came out as its key, because the composer provided its
 * own, empty, translator over the one the form provided.
 */

import { describe, it, expect } from 'vitest'
import { markRaw, nextTick } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import i18next from 'i18next'
import { SettingsForm } from 'org.eclipse.daanse.board.app.ui.vue.uimodel'
import { ChartSettingsImpl } from '../gen/ChartSettingsImpl'
import { ChartsettingsPackage } from '../gen/ChartsettingsPackage'
import { ChartsettingsFactory } from '../gen/ChartsettingsFactory'
import type { ChartSettings } from '../gen/ChartSettings'
import chartSettingsFormXmi from '../../model/ui.xmi?raw'
import seriesSettingsFormXmi from '../../model/ui-series.xmi?raw'
import settingsEcore from '../../model/model.ecore?raw'
import en from '../i18n/en.json'
import uimodelEn from '../../../../uimodel/src/i18n/en.json'

async function translator() {
  const i18n = i18next.createInstance()
  /*
   * Both packs, as the shell has them: a label that ended up asked in the
   * uimodel namespace only showed as "uimodel:..." once that namespace
   * existed and did not know the text.
   */
  await i18n.init({
    fallbackLng: 'en',
    lng: 'en',
    resources: { en: { chart: en, uimodel: uimodelEn } },
  })
  return i18n
}

async function settingsForm(settings: ChartSettings) {
  const view = mount(SettingsForm, {
    props: {
      /*
       * Raw, as the shell hands it over: mount() puts its props into
       * reactive(), and a proxied EObject builds its lists with the proxy
       * as their owner - the identity break CLAUDE.md warns about.
       */
      modelValue: markRaw(settings),
      create: () => new ChartSettingsImpl(),
      uiModelXmi: chartSettingsFormXmi,
      domainPackage: ChartsettingsPackage.eINSTANCE,
      uiModelUri: '/chart-settings.ui.xmi',
      entryForms: [{ xmi: seriesSettingsFormXmi, uri: '/chart-series.ui.xmi' }],
      ecore: settingsEcore,
    },
    global: { provide: { i18n: await translator() } },
    attachTo: document.body,
  })
  await flushPromises()
  return view
}

function addButton(view: Awaited<ReturnType<typeof settingsForm>>) {
  const list = view.find('section.list')
  expect(list.exists()).toBe(true)
  return list.find('.list__head button')
}

describe('the chart settings form', () => {
  it('adds a series to the model and shows it', async () => {
    const settings = new ChartSettingsImpl()
    const view = await settingsForm(settings)
    expect(view.findAll('.list .entry')).toHaveLength(0)

    await addButton(view).trigger('click')
    await nextTick()

    expect(settings.seriesSettings.size()).toBe(1)
    /* A real SeriesSettings, contained by the chart - so EMF hears it. */
    const series = settings.seriesSettings.get(0)
    expect(series.eClass()).toBe(ChartsettingsPackage.eINSTANCE.getEClassifier('SeriesSettings'))
    expect(series.eContainer()).toBe(settings)

    expect(view.findAll('.list .entry')).toHaveLength(1)
    expect(view.find('.list__count').text()).toBe('1')

    view.unmount()
  })

  it('shows a series that arrives in the model from elsewhere', async () => {
    const settings = new ChartSettingsImpl()
    const view = await settingsForm(settings)

    settings.seriesSettings.add(ChartsettingsFactory.eINSTANCE.createSeriesSettings())
    await nextTick()

    expect(view.findAll('.list .entry')).toHaveLength(1)
    view.unmount()
  })

  it('names its groups and its series list in words, not keys', async () => {
    const view = await settingsForm(new ChartSettingsImpl())
    const text = view.text()

    expect(text).toContain(en.Form.typeGroup)
    expect(text).toContain(en.Form.lineGroup)
    expect(view.find('.list__label').text()).toBe(en.Form.seriesSettings)
    expect(text).not.toMatch(/chart:Form/i)

    view.unmount()
  })

  it('names the groups of an open series too', async () => {
    const view = await settingsForm(new ChartSettingsImpl())
    await addButton(view).trigger('click')
    await nextTick()

    const entry = view.find('.list .entry__body')
    expect(entry.text()).toContain(en.FormSeries.seriesIdentity)
    expect(entry.text()).not.toMatch(/chart:FormSeries/i)

    view.unmount()
  })

  /*
   * What the integration build showed: field labels the composer had put
   * into words, sent through t('uimodel') once more and drawn as
   * "uimodel:Line and border colour"; a series titled "SeriesSettings 1";
   * a Type select on "—" over a chart drawn as bars.
   */
  describe('as a reader sees it', () => {
    /* Every text the form draws, labels and options included. */
    function texts(view: Awaited<ReturnType<typeof settingsForm>>): string[] {
      const drawn = view.findAll('label, legend, option, .entry__title, .list__label, .uim-group-label, p')
      return drawn.map((element) => element.text()).filter(Boolean)
    }

    const RAW_KEY = /\b[a-z][A-Za-z]*:[A-Z]\w*\.\w+/

    async function withOpenSeries() {
      const settings = new ChartSettingsImpl()
      const view = await settingsForm(settings)
      await addButton(view).trigger('click')
      await nextTick()
      return { settings, view }
    }

    it('draws no label in the uimodel namespace and no raw key', async () => {
      const { view } = await withOpenSeries()
      const drawn = texts(view)

      expect(drawn.filter((text) => text.includes('uimodel:'))).toEqual([])
      expect(drawn.filter((text) => RAW_KEY.test(text))).toEqual([])

      /* The ones that showed up broken, as words */
      expect(drawn).toContain(en.Form.borderColor)
      expect(drawn).toContain(en.Form.dateDisplayFormat)
      expect(drawn).toContain(en.Form.borderWidth)
      expect(drawn).toContain(en.FormSeries.seriesIndex)
      expect(drawn).toContain(en.FormSeries.xAxisId)
      /* An option is the value it stores, shown as it stands */
      expect(drawn).toContain('MMM yyyy')

      view.unmount()
    })

    it('titles a series entry in words, not by its class', async () => {
      const { view } = await withOpenSeries()

      expect(view.find('.entry__title').text()).toBe(`${en.Form.seriesSettings} 1`)
      expect(view.text()).not.toContain('SeriesSettings')

      view.unmount()
    })

    it('titles a named series by its name', async () => {
      const { settings, view } = await withOpenSeries()
      settings.seriesSettings.get(0).label!.value = 'Revenue'
      await nextTick()

      expect(view.find('.entry__title').text()).toBe('Revenue')
      view.unmount()
    })

    function selectLabelled(
      root: { findAll: (selector: string) => Array<{ find: (s: string) => any; text: () => string }> },
      label: string,
    ): HTMLSelectElement {
      const field = root.findAll('.field').find((candidate) => candidate.find('label').exists() && candidate.find('label').text() === label)
      expect(field, `a select labelled ${label}`).toBeDefined()
      return field!.find('select').element as HTMLSelectElement
    }

    it('shows an unset chart type as the type the chart is drawn with', async () => {
      const settings = new ChartSettingsImpl()
      expect(settings.chartType.value).toBeUndefined()
      const view = await settingsForm(settings)

      const select = selectLabelled(view.find('.uim-c-GroupWidget'), en.Form.chartType)
      expect(select.selectedOptions[0].text.trim()).toBe('bar')
      /* Shown, not written: the stored settings are as they were */
      expect(settings.chartType.value).toBeUndefined()

      view.unmount()
    })

    it('shows a chart type that is set', async () => {
      const settings = new ChartSettingsImpl()
      settings.chartType.value = 'line'
      const view = await settingsForm(settings)

      const select = selectLabelled(view.find('.uim-c-GroupWidget'), en.Form.chartType)
      expect(select.selectedOptions[0].text.trim()).toBe('line')

      view.unmount()
    })

    it("shows an unset series type as the chart's, not as a type of its own", async () => {
      const { view } = await withOpenSeries()

      const select = selectLabelled(view.find('.entry__body'), en.FormSeries.chartType)
      expect(select.value).toBe('')
      expect(select.selectedOptions[0].text.trim()).toBe(en.FormSeries.chartTypeHint)

      view.unmount()
    })

    /*
     * The dash patterns were listed as they are stored - and the solid one
     * is stored as "durchgezogen", which an English form showed as it
     * stands. The stored values stay, for the boards that hold them; the
     * words come from the language pack.
     */
    it('names the dash patterns in the reader\'s language and stores them as before', async () => {
      const { settings, view } = await withOpenSeries()
      const dash = en.Options.borderDash
      const words = [dash.solid, dash.dashed, dash.longDashes, dash.dotted, dash.dashDot]

      const seriesDash = selectLabelled(view.find('.entry__body'), en.FormSeries.borderDash)
      /* The chart's own is the one outside the series entry */
      const chartDash = view.findAll('.field')
        .filter((field) => field.find('label').exists() && field.find('label').text() === en.Form.borderDash)
        .map((field) => field.find('select').element as HTMLSelectElement)
        .find((select) => !select.closest('.entry__body'))!
      expect(chartDash, "the chart's dash select").toBeDefined()
      for (const select of [chartDash, seriesDash]) {
        const shown = [...select.options].map((option) => option.text.trim()).filter((text) => words.includes(text))
        expect(shown).toEqual(words)
      }
      expect(view.text()).not.toContain('durchgezogen')

      const solid = [...chartDash.options].find((option) => option.text.trim() === dash.solid)!
      chartDash.value = solid.value
      chartDash.dispatchEvent(new Event('change'))
      await nextTick()
      expect(settings.borderDash.value).toBe('durchgezogen')

      view.unmount()
    })

    it('says what an empty series list means instead of counting 0', async () => {
      const view = await settingsForm(new ChartSettingsImpl())

      expect(view.find('.list__count').exists()).toBe(false)
      expect(view.find('.list__empty').text()).toBe(en.Form.seriesSettingsHint)

      view.unmount()
    })
  })
})
