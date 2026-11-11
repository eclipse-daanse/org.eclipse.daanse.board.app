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

/*
 * The gauge's settings form, edited the way a person edits it: a choice is
 * made, then another field is typed in. The shape is a plain attribute
 * rather than a wrapper, so the select has only EMF to tell it the shape
 * moved - and it used to keep the value it was first drawn with, showing
 * the old shape again as soon as anything else in the form changed.
 *
 * A fresh GaugeSettings starts the shape at the generated enum member - the
 * name, THREE_QUARTER - while the form lists the literals the model gives
 * them, threeQuarter. The select has to read the one as the other, or it
 * shows no shape at all over a gauge drawn with one.
 */
import { describe, it, expect, vi } from 'vitest'
import { defineComponent, h, shallowRef } from 'vue'
import { flushPromises, mount, type DOMWrapper, type VueWrapper } from '@vue/test-utils'
import i18next from 'i18next'
import { SettingsForm } from 'org.eclipse.daanse.board.app.ui.vue.uimodel'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { GaugewidgetsPackage } from '../gen/GaugewidgetsPackage'
import { GaugeSettingsImpl } from '../gen/GaugeSettingsImpl'
import { GaugeShape } from '../gen/GaugeShape'
import gaugeSettingsFormXmi from '../../model/ui.xmi?raw'
import gaugeThresholdFormXmi from '../../model/ui-threshold.xmi?raw'
import settingsEcore from '../../model/model.ecore?raw'
import en from '../i18n/en.json'

void GaugewidgetsPackage.eINSTANCE

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'p1' } }),
  useRouter: () => ({ push: vi.fn() }),
}))

async function translator() {
  const i18n = i18next.createInstance()
  await i18n.init({ fallbackLng: 'en', lng: 'en', resources: { en: { gauge: en } } })
  return i18n
}

async function gaugeForm(initial: unknown = { datasourceId: undefined }) {
  const config = shallowRef<unknown>(initial)
  const Host = defineComponent({
    setup: () => () =>
      h(SettingsForm, {
        modelValue: config.value,
        'onUpdate:modelValue': (next: unknown) => (config.value = next),
        create: () => new GaugeSettingsImpl(),
        uiModelXmi: gaugeSettingsFormXmi,
        domainPackage: GaugewidgetsPackage.eINSTANCE,
        uiModelUri: '/gauge-settings.ui.xmi',
        entryForms: [{ xmi: gaugeThresholdFormXmi, uri: '/gauge-threshold.ui.xmi' }],
        ecore: settingsEcore,
      }),
  })
  const view = mount(Host, {
    global: {
      provide: {
        i18n: await translator(),
        [identifiers.TINY_EMITTER as symbol]: { emit: vi.fn(), on: vi.fn(), off: vi.fn() },
      },
    },
    attachTo: document.body,
  })
  await flushPromises()
  return { view, settings: () => config.value as GaugeSettingsImpl }
}

/* The field whose label reads as given, and the control inside it. */
function field(view: VueWrapper, label: string, control: string) {
  const row = view
    .findAll('.field')
    .find((each) => each.find('.field__label').exists() && each.find('.field__label').text() === label)
  expect(row, `a field labelled ${label}`).toBeDefined()
  return row!.find(control)
}

function shownOption(select: DOMWrapper<Element>): string {
  const element = select.element as HTMLSelectElement
  return element.options[element.selectedIndex]?.text ?? ''
}

describe('a select in a settings form', () => {
  it('keeps showing the choice after another field is typed in', async () => {
    const { view, settings } = await gaugeForm()
    const shape = () => field(view, en.Form.shape, 'select')

    const half = [...(shape().element as HTMLSelectElement).options].find(
      (option) => option.text === en.Options.shape.half,
    )
    await shape().setValue(half!.value)
    await flushPromises()
    expect(settings().shape).toBe('half')
    expect(shownOption(shape())).toBe(en.Options.shape.half)

    await field(view, en.Form.unit, 'input').setValue('km/h')
    await flushPromises()
    expect(settings().unit.value).toBe('km/h')

    expect(settings().shape).toBe('half')
    expect(shownOption(shape())).toBe(en.Options.shape.half)
    view.unmount()
  })

  it('shows a choice made in the settings themselves', async () => {
    const { view, settings } = await gaugeForm()
    settings().shape = 'full' as GaugeSettingsImpl['shape']
    await flushPromises()
    expect(shownOption(field(view, en.Form.shape, 'select'))).toBe(en.Options.shape.full)
    view.unmount()
  })

  it('shows the shape a fresh gauge starts with', async () => {
    const { view, settings } = await gaugeForm()
    expect(settings().shape).toBe(GaugeShape.THREE_QUARTER)
    expect(shownOption(field(view, en.Form.shape, 'select'))).toBe(en.Options.shape.threeQuarter)
    view.unmount()
  })

  it('shows a shape held by its enum name', async () => {
    const fresh = new GaugeSettingsImpl()
    fresh.shape = GaugeShape.HALF
    const { view } = await gaugeForm(fresh)
    expect(shownOption(field(view, en.Form.shape, 'select'))).toBe(en.Options.shape.half)
    view.unmount()
  })
})
