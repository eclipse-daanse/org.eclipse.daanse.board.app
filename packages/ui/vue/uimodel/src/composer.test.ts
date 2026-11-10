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
 * A bundle outside the board renders a UIModel with the board's composer.
 *
 * Everything here is imported from the package's public entry, which is
 * what another bundle receives through the import map; nothing comes from
 * @emfts/uimodel-composer directly, because a bundle that did that would
 * carry the second copy this API exists to prevent.
 */

import { describe, it, expect } from 'vitest'
import { defineComponent, h, nextTick, type PropType } from 'vue'
import { mount } from '@vue/test-utils'
import { EPackageRegistry, type EObject, type EPackage } from '@emfts/core'
import {
  UIModelComposer,
  UimodelPackage,
  composerRegistryWith,
  defaultComposers,
  loadUIModel,
  trackExpressionTick,
  type UIModelComponent,
} from './index'
import { ContainmentfixtureFactory } from './gen/ContainmentfixtureFactory'
import { ContainmentfixturePackage } from './gen/ContainmentfixturePackage'
import type { FixtureSettings } from './gen/FixtureSettings'

const NS = 'http://org.eclipse.daanse.board.app.ui.vue.uimodel.containmentfixture'

const XMI = `<?xml version="1.0" encoding="UTF-8"?>
<uimodel:UIModel xmlns:xmi="http://www.omg.org/XMI" xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0" name="FixtureTable">
  <targetClasses href="${NS}#//FixtureSettings"/>
  <components xsi:type="uimodel:TableView" name="children"
      feature="${NS}#//FixtureSettings/children"/>
</uimodel:UIModel>`

/** A composer of the second bundle's own, drawing a TableView its way. */
const OwnTable = defineComponent({
  props: {
    component: { type: Object as PropType<UIModelComponent>, required: true },
    model: { type: Object as PropType<EObject>, required: true },
  },
  setup(props) {
    return () => {
      // Read through the tick, as the composer's own do, so a change in the
      // model reaches this one too
      trackExpressionTick()
      const settings = props.model as unknown as FixtureSettings
      return h(
        'ul',
        { class: 'own-table', 'data-name': props.component.name },
        [...settings.children].map((child) => h('li', child.label ?? '')),
      )
    }
  },
})

function settingsWith(...labels: string[]): FixtureSettings {
  void ContainmentfixturePackage.eINSTANCE
  const factory = ContainmentfixtureFactory.eINSTANCE
  const settings = factory.createFixtureSettings()
  for (const label of labels) {
    const child = factory.createFixtureChild()
    child.label = label
    settings.children.push(child)
  }
  return settings
}

function load() {
  return loadUIModel(XMI, ContainmentfixturePackage.eINSTANCE as unknown as EPackage, '/fixture-table.xmi')
}

describe('the composer offered to other bundles', () => {
  it('renders a UIModel with a composer of the bundle\'s own', async () => {
    const uiModel = load()
    expect(uiModel).toBeDefined()
    const settings = settingsWith('first', 'second')

    const wrapper = mount(UIModelComposer, {
      props: {
        uiModel: uiModel!,
        model: settings as unknown as EObject,
        composerRegistry: composerRegistryWith({ TableView: OwnTable }),
      },
    })

    const table = wrapper.find('ul.own-table')
    expect(table.exists()).toBe(true)
    expect(table.attributes('data-name')).toBe('children')
    expect(table.findAll('li').map((li) => li.text())).toEqual(['first', 'second'])

    // A change in the model reaches the bundle's composer
    const third = ContainmentfixtureFactory.eINSTANCE.createFixtureChild()
    third.label = 'third'
    settings.children.push(third)
    await nextTick()
    expect(wrapper.findAll('ul.own-table li').map((li) => li.text())).toEqual(['first', 'second', 'third'])
  })

  it('keeps the default composers beside the bundle\'s own', () => {
    const registry = composerRegistryWith({ TableView: OwnTable })

    expect(registry.getComposer('TableView')).toBe(OwnTable)
    expect(registry.getComposer('FormView')).toBe(defaultComposers().FormView)
    expect(registry.getComposer('MasterDetail')).toBe(defaultComposers().MasterDetail)
  })

  it('registers exactly one UimodelPackage, the one it hands out', () => {
    const uiModel = load()

    const nsURI = UimodelPackage.eINSTANCE.getNsURI()!
    expect(EPackageRegistry.INSTANCE.getEPackage(nsURI)).toBe(UimodelPackage.eINSTANCE)
    const uimodelPackages = [...EPackageRegistry.INSTANCE.values()].filter(
      (p) => (p as EPackage).getNsURI?.() === nsURI,
    )
    expect(uimodelPackages).toHaveLength(1)
    expect(uiModel!.eClass().getEPackage()).toBe(UimodelPackage.eINSTANCE)
  })
})
