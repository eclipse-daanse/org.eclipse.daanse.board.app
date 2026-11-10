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
 * A control's settings as the shell shows them right after the control was
 * dragged from the palette: the palette hands a widget plain JSON settings
 * - { datasourceId, settings: {} } - and the form must still be one that
 * edits the model, list settings included.
 */
import { describe, it, expect, vi } from 'vitest'
import { defineComponent, h, nextTick, shallowRef } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import i18next from 'i18next'
import { SettingsForm } from 'org.eclipse.daanse.board.app.ui.vue.uimodel'
import { EventsPackage } from 'org.eclipse.daanse.board.app.lib.api.events'
import { ControlwidgetsPackage } from '../gen/ControlwidgetsPackage'
import { SliderSettingsImpl } from '../gen/SliderSettingsImpl'
import SliderWidget from '../SliderWidget.vue'
import { EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { ChoiceSettingsImpl } from '../gen/ChoiceSettingsImpl'
import sliderSettingsFormXmi from '../../model/ui-slider.xmi?raw'
import choiceSettingsFormXmi from '../../model/ui-choice.xmi?raw'
import optionFormXmi from '../../model/ui-option.xmi?raw'
import markFormXmi from '../../model/ui-mark.xmi?raw'
import settingsEcore from '../../model/model.ecore?raw'
import en from '../i18n/en.json'

void EventsPackage.eINSTANCE
void ControlwidgetsPackage.eINSTANCE

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'p1' } }),
  useRouter: () => ({ push: vi.fn() }),
}))

async function translator() {
  const i18n = i18next.createInstance()
  await i18n.init({ fallbackLng: 'en', lng: 'en', resources: { en: { control: en } } })
  return i18n
}

/*
 * The settings form bound the way the shell binds it: v-model on the
 * widget's config, which the form replaces with the modelled instance. The
 * config is held shallowly, as the shell's useEObject holds the widget.
 */
async function settingsForm(form: { xmi: string; uri: string; create: () => any; entryForms: any[] }, widget?: any) {
  /* What the palette gives a widget it drops on the board. */
  const config = shallowRef<unknown>({ datasourceId: undefined, settings: {} })
  const Host = defineComponent({
    setup: () => () => [
      /* The widget on the board, which mounts before its settings are opened. */
      widget ? h(widget, { id: 'w1', configv: config.value, 'onUpdate:configv': (next: unknown) => (config.value = next) }) : null,
      h(SettingsForm, {
        modelValue: config.value,
        'onUpdate:modelValue': (next: unknown) => (config.value = next),
        create: form.create,
        uiModelXmi: form.xmi,
        domainPackage: ControlwidgetsPackage.eINSTANCE,
        uiModelUri: form.uri,
        entryForms: form.entryForms,
        ecore: settingsEcore,
      }),
    ],
  })
  const view = mount(Host, {
    global: {
      provide: {
        i18n: await translator(),
        [identifiers.TINY_EMITTER as symbol]: { emit: vi.fn(), on: vi.fn(), off: vi.fn() },
        [EVENT_ACTIONS_REGISTRY as unknown as symbol]: { registerInstance: vi.fn(), unregisterInstance: vi.fn() },
      },
    },
    attachTo: document.body,
  })
  await flushPromises()
  return { view, widget: { get config() { return config.value } } }
}

function list(view: any, label: string) {
  const found = view.findAll('section.list').find((each: any) => each.find('.list__label').text() === label)
  expect(found, `a list labelled ${label}`).toBeDefined()
  return found
}

describe('the settings of a control fresh from the palette', () => {
  it('a slider takes a detent', async () => {
    const { view, widget } = await settingsForm({
      xmi: sliderSettingsFormXmi,
      uri: '/slider-settings.ui.xmi',
      create: () => new SliderSettingsImpl(),
      entryForms: [
        { xmi: markFormXmi, uri: '/slider-mark.ui.xmi' },
        { xmi: optionFormXmi, uri: '/control-option.ui.xmi' },
      ],
    })
    const settings = widget.config as any
    expect(settings).toBeInstanceOf(SliderSettingsImpl)
    expect(settings.datasourceId).toBeUndefined()

    const detents = list(view, en.Form.detents)
    expect(detents.find('.list__untyped').exists()).toBe(false)
    await detents.find('.list__head button').trigger('click')
    await nextTick()

    expect(settings.detents.size()).toBe(1)
    const detent = settings.detents.get(0)
    expect(detent.eClass()).toBe(ControlwidgetsPackage.eINSTANCE.getEClassifier('ControlOption'))
    expect(detent.eContainer()).toBe(settings)
    expect(list(view, en.Form.detents).findAll('.entry')).toHaveLength(1)

    /* Added, it opens on its own form, with the option's fields. */
    expect(list(view, en.Form.detents).find('.entry__body').text()).toContain(en.FormOption.value)
    view.unmount()
  })

  it('a slider on the board shows the detent its settings were given', async () => {
    const { view, widget } = await settingsForm(
      {
        xmi: sliderSettingsFormXmi,
        uri: '/slider-settings.ui.xmi',
        create: () => new SliderSettingsImpl(),
        entryForms: [
          { xmi: markFormXmi, uri: '/slider-mark.ui.xmi' },
          { xmi: optionFormXmi, uri: '/control-option.ui.xmi' },
        ],
      },
      SliderWidget,
    )
    const settings = widget.config as any
    expect(settings).toBeInstanceOf(SliderSettingsImpl)
    await list(view, en.Form.detents).find('.list__head button').trigger('click')
    await list(view, en.Form.detents).find('.list__head button').trigger('click')
    await nextTick()
    settings.detents.get(0).label = new VariableWrapper('low')
    settings.detents.get(1).label = new VariableWrapper('high')
    await flushPromises()
    expect(view.findAll('.control-slider__mark').map((m) => m.text())).toEqual(['low', 'high'])
    view.unmount()
  })

  it('a choice takes an option', async () => {
    const { view, widget } = await settingsForm({
      xmi: choiceSettingsFormXmi,
      uri: '/choice-settings.ui.xmi',
      create: () => new ChoiceSettingsImpl(),
      entryForms: [{ xmi: optionFormXmi, uri: '/control-option.ui.xmi' }],
    })
    const settings = widget.config as any
    await list(view, en.Form.options).find('.list__head button').trigger('click')
    await nextTick()
    expect(settings.options.size()).toBe(1)
    expect(list(view, en.Form.options).findAll('.entry')).toHaveLength(1)
    view.unmount()
  })
})
