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
 * The help under a field of the progress settings, in the reader's language.
 *
 * The labels followed the language and the help under them did not: it is
 * the feature's GenModel documentation, which is English. The pack now holds
 * it under FormHelp beside Form, and the model's sentence is what is left
 * where a pack has none.
 */

import { describe, it, expect } from 'vitest'
import { markRaw } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import i18next from 'i18next'
import { SettingsForm } from 'org.eclipse.daanse.board.app.ui.vue.uimodel'
import { ProgressSettingsImpl } from '../gen/ProgressSettingsImpl'
import { ProgresswidgetsPackage } from '../gen/ProgresswidgetsPackage'
import progressSettingsFormXmi from '../../model/ui.xmi?raw'
import settingsEcore from '../../model/model.ecore?raw'
import en from '../i18n/en.json'
import de from '../i18n/de.json'
import uimodelEn from '../../../../uimodel/src/i18n/en.json'
import uimodelDe from '../../../../uimodel/src/i18n/de.json'

type Pack = Record<string, unknown>

async function translator(lng: string, progress: { en: Pack; de: Pack }) {
  const i18n = i18next.createInstance()
  await i18n.init({
    fallbackLng: 'en',
    lng,
    resources: {
      en: { progress: progress.en, uimodel: uimodelEn },
      de: { progress: progress.de, uimodel: uimodelDe },
    },
  })
  return i18n
}

/*
 * Every field that can take its value from a variable injects the variable
 * repository. The shell provides it from the service registry; without it
 * here, each field logged a Vue warning that printed the settings EObjects
 * in full (#1404). No variables: nothing in this test binds one.
 */
const noVariables = { getVariable: () => undefined, getAllVariables: () => [] }

async function settingsForm(i18n: Awaited<ReturnType<typeof translator>>) {
  const view = mount(SettingsForm, {
    props: {
      modelValue: markRaw(new ProgressSettingsImpl()),
      create: () => new ProgressSettingsImpl(),
      uiModelXmi: progressSettingsFormXmi,
      domainPackage: ProgresswidgetsPackage.eINSTANCE,
      uiModelUri: '/progress-settings.ui.xmi',
      ecore: settingsEcore,
    },
    global: { provide: { i18n, [Symbol.for('VariableRepository')]: noVariables } },
    attachTo: document.body,
  })
  await flushPromises()
  return view
}

/** The help drawn under the field with this label. */
function helpOf(view: Awaited<ReturnType<typeof settingsForm>>, label: string): string | undefined {
  const field = view.findAll('.field').find((f) => f.find('label').exists() && f.find('label').text() === label)
  expect(field, `a field labelled ${label}`).toBeDefined()
  const hint = field!.find('.field__hint')
  return hint.exists() ? hint.text() : undefined
}

const without = (pack: Pack, section: string): Pack =>
  Object.fromEntries(Object.entries(pack).filter(([key]) => key !== section))

describe('the help under a progress setting', () => {
  it('is German when the board is', async () => {
    const view = await settingsForm(await translator('de', { en, de }))

    expect(helpOf(view, de.Form.fillColor)).toBe(de.FormHelp.fillColor)
    expect(helpOf(view, de.Form.min)).toBe(de.FormHelp.min)
    expect(view.text()).not.toContain(en.FormHelp.fillColor)

    view.unmount()
  })

  it('is the English text in English', async () => {
    const view = await settingsForm(await translator('en', { en, de }))

    expect(helpOf(view, en.Form.fillColor)).toBe(en.FormHelp.fillColor)
    view.unmount()
  })

  it("is the model's own sentence where no pack has one", async () => {
    const packs = { en: without(en, 'FormHelp'), de: without(de, 'FormHelp') }
    const view = await settingsForm(await translator('de', packs))

    expect(helpOf(view, de.Form.fillColor)).toBe('The color representing the filled portion of the progress bar.')
    expect(view.text()).not.toMatch(/progress:FormHelp/)

    view.unmount()
  })
})
