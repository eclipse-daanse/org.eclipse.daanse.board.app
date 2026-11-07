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
 * A field says what it is for in the reader's language (#1285): a hint the
 * form's package translates wins over the model's English documentation.
 */
import { describe, expect, it } from 'vitest'
import { markRaw } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import i18next from 'i18next'
import SettingsForm from './SettingsForm.vue'
import { ContainmentfixturePackage } from './gen/ContainmentfixturePackage'
import { ContainmentfixtureFactory } from './gen/ContainmentfixtureFactory'
import fixtureEcore from '../model/containment-fixture.ecore?raw'
import uimodelEn from './i18n/en.json'

const NS = 'http://org.eclipse.daanse.board.app.ui.vue.uimodel.containmentfixture'
const XMI = `<?xml version="1.0" encoding="UTF-8"?>
<uimodel:UIModel xmlns:xmi="http://www.omg.org/XMI" xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0" name="HintFixture">
  <targetClasses href="${NS}#//FixtureSettings"/>
  <components xsi:type="uimodel:FormView" name="HintFixtureView">
    <fields xsi:type="uimodel:InputWidget" name="title" feature="${NS}#//FixtureSettings/title" label="fixture:Form.title"/>
  </components>
</uimodel:UIModel>`

async function formIn(fixture: Record<string, unknown>, missing?: (key: string) => void) {
  void ContainmentfixturePackage.eINSTANCE
  const i18n = i18next.createInstance()
  await i18n.init({
    lng: 'de', fallbackLng: 'de', resources: { de: { fixture, uimodel: uimodelEn } },
    saveMissing: !!missing,
    missingKeyHandler: (_languages: readonly string[], namespace: string, key: string) => missing?.(`${namespace}:${key}`),
  })
  const view = mount(SettingsForm, {
    props: {
      modelValue: markRaw(ContainmentfixtureFactory.eINSTANCE.createFixtureSettings()),
      create: () => ContainmentfixtureFactory.eINSTANCE.createFixtureSettings(),
      uiModelXmi: XMI,
      domainPackage: ContainmentfixturePackage.eINSTANCE,
      uiModelUri: '/hint-fixture.ui.xmi',
      ecore: fixtureEcore,
    },
    global: { provide: { i18n } },
    attachTo: document.body,
  })
  await flushPromises()
  return view
}

describe('the hint under a field', () => {
  it('is the translated one where the package has it', async () => {
    const view = await formIn({ Form: { title: 'Titel' }, Hints: { FixtureSettings: { title: 'Der Titel über allem.' } } })
    expect(view.text()).toContain('Der Titel über allem.')
    view.unmount()
  })

  it('is the model documentation where the package has none, and asks for no missing text', async () => {
    const asked: string[] = []
    const view = await formIn({ Form: { title: 'Titel' } }, (key) => asked.push(key))
    expect(view.text()).toContain('A plain value beside the contained ones')
    expect(view.text()).not.toContain('Hints.')
    expect(asked.filter((key) => key.includes('Hints'))).toEqual([])
    view.unmount()
  })
})
