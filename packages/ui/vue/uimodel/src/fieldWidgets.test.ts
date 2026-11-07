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
 * A bundle draws one field of a generated form with a widget of its own,
 * and the generic renderers, registered again each time a form opens, do
 * not take the field back.
 */
import { describe, expect, it } from 'vitest'
import { defineComponent, h, markRaw } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { componentRegistry } from '@emfts/vue-registry'
import type { EClass, EStructuralFeature } from '@emfts/core'
import SettingsForm from './SettingsForm.vue'
import SettingsListWidget from './SettingsListWidget.vue'
import { registerFieldWidget } from './fieldWidgets'
import { registerListRenderer } from './registerRenderer'
import { ContainmentfixturePackage } from './gen/ContainmentfixturePackage'
import { ContainmentfixtureFactory } from './gen/ContainmentfixtureFactory'
import fixtureEcore from '../model/containment-fixture.ecore?raw'

const NS = 'http://org.eclipse.daanse.board.app.ui.vue.uimodel.containmentfixture'
const XMI = `<?xml version="1.0" encoding="UTF-8"?>
<uimodel:UIModel xmlns:xmi="http://www.omg.org/XMI" xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0" name="FieldWidgetFixture">
  <targetClasses href="${NS}#//FixtureSettings"/>
  <components xsi:type="uimodel:FormView" name="FieldWidgetFixtureView">
    <fields xsi:type="uimodel:InputWidget" name="children" feature="${NS}#//FixtureSettings/children" label="fixture:Form.children"/>
  </components>
</uimodel:UIModel>`

/* Draws a mark of its own around the generic list, as a bundle's widget would. */
const Around = defineComponent({
  props: ['eObject', 'feature', 'custom'],
  setup(props) {
    return () => h('div', { class: 'around' }, [h('span', { class: 'around__own' }, 'own part'), h(SettingsListWidget, { ...props })])
  },
})

function settingsClass(): EClass {
  return ContainmentfixturePackage.eINSTANCE.getEClassifier('FixtureSettings') as EClass
}
function childrenFeature(): EStructuralFeature {
  return settingsClass().getEStructuralFeature('children') as EStructuralFeature
}

describe('a field widget of a bundle', () => {
  it('wins over the generic renderer, also when that is registered again', () => {
    registerListRenderer(settingsClass())
    const off = registerFieldWidget(settingsClass(), 'children', Around)
    registerListRenderer(settingsClass(), new Set())
    expect(componentRegistry.getComponentForFeature(childrenFeature())).toBe(Around)
    off()
    expect(componentRegistry.getComponentForFeature(childrenFeature())).toBe(SettingsListWidget)
  })

  it('replaces its own earlier registration for the same feature', () => {
    const Other = defineComponent({ render: () => h('i') })
    const first = registerFieldWidget(settingsClass(), 'children', Around)
    const second = registerFieldWidget(settingsClass(), 'children', Other)
    expect(componentRegistry.getComponentForFeature(childrenFeature())).toBe(Other)
    first()
    expect(componentRegistry.getComponentForFeature(childrenFeature())).toBe(Other)
    second()
  })

  it('is drawn by the generated form, with the generic list inside it', async () => {
    const off = registerFieldWidget(settingsClass(), 'children', Around)
    const settings = ContainmentfixtureFactory.eINSTANCE.createFixtureSettings()
    const view = mount(SettingsForm, {
      props: {
        modelValue: markRaw(settings),
        create: () => ContainmentfixtureFactory.eINSTANCE.createFixtureSettings(),
        uiModelXmi: XMI,
        domainPackage: ContainmentfixturePackage.eINSTANCE,
        uiModelUri: '/field-widget-fixture.ui.xmi',
        ecore: fixtureEcore,
      },
      attachTo: document.body,
    })
    await flushPromises()
    expect(view.find('.around .around__own').exists()).toBe(true)
    expect(view.findComponent(SettingsListWidget).exists()).toBe(true)
    view.unmount()
    off()
  })
})
