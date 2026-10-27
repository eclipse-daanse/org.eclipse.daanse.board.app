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

import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import {
  describeModel,
  registerModelDocs,
  resetModelDocs,
} from 'org.eclipse.daanse.board.app.ui.vue.composables'
import ModelFields from '../ModelFields.vue'

/* The real model files, so the form is tested against what ships. */
const ROOT = resolve(__dirname, '../../../../../../..')
const model = (path: string) => readFileSync(resolve(ROOT, path), 'utf8')

const XMLA_CONNECTION = model('packages/lib/connection/xmla/model/xmlaConnectionModel.ecore')
const CONNECTION_BASE = model('packages/lib/connection/base/model/model.ecore')
const XMLA_STORE = model('packages/lib/datasource/xmla/model/XmlaDataSourceModel.ecore')
const CSV_STORE = model('packages/lib/datasource/csv/model/CsvDataSourceModel.ecore')
const DATASOURCE_BASE = model('packages/lib/datasource/base/model/baseDataSourceModel.ecore')

/*
 * A translator shaped like i18next where it matters here: a key it holds
 * comes back translated, one it does not comes back as the defaultValue the
 * caller passed - or as the key, when none was passed.
 */
function translator(texts: Record<string, string>) {
  return {
    language: 'de',
    t: (key: string, options?: Record<string, unknown>) =>
      key in texts ? texts[key] : options && 'defaultValue' in options ? (options.defaultValue as string) : key,
  }
}

function labels(wrapper: ReturnType<typeof mount>) {
  return wrapper.findAll('label').map((each) => each.text().replace(/\s*\*\s*$/, '').trim())
}

describe('ModelFields', () => {
  beforeEach(() => {
    resetModelDocs()
    registerModelDocs(CONNECTION_BASE)
    registerModelDocs(DATASOURCE_BASE)
  })

  it('labels a field from the type\'s language pack, the model\'s words where the pack is silent', () => {
    const wrapper = mount(ModelFields, {
      props: { doc: describeModel(XMLA_CONNECTION), config: {}, namespace: 'connectionXmla' },
      global: {
        provide: {
          i18n: translator({
            'connectionXmla:Fields.url': 'Adresse',
            'connectionXmla:Fields.cubeName': 'Würfel',
            'connectionXmla:Hints.url': 'Die Adresse des Dienstes.',
          }),
        },
      },
    })

    const shown = labels(wrapper)
    expect(shown).toContain('Adresse')
    expect(shown).toContain('Würfel')
    /* Not in the pack: the model's name, made readable. */
    expect(shown).toContain('Catalog Name')
    expect(shown).not.toContain('Url')

    expect(wrapper.text()).toContain('Die Adresse des Dienstes.')
    /* Not in the pack: the model's documentation. */
    expect(wrapper.text()).toContain('The name of the catalog containing the cube.')
  })

  it('does not ask for a contained or opaque object as text', () => {
    const wrapper = mount(ModelFields, {
      props: { doc: describeModel(XMLA_STORE), config: {}, omit: ['connection'] },
    })

    const shown = labels(wrapper)
    expect(shown).toContain('Cube')
    expect(shown).not.toContain('Request Params')
    expect(shown).not.toContain('Drilldown State')
  })

  it('offers a field\'s choices as a select, and writes the pick into the config', async () => {
    const config: Record<string, unknown> = {}
    const wrapper = mount(ModelFields, {
      props: {
        doc: describeModel(XMLA_STORE),
        config,
        omit: ['connection'],
        choices: {
          cube: [
            { label: 'Sales', value: 'Sales' },
            { label: 'Warehouse', value: 'Warehouse' },
          ],
        },
      },
    })

    const select = wrapper.find('select')
    expect(select.exists()).toBe(true)
    expect(select.attributes('required')).toBeDefined()
    expect(select.findAll('option').map((o) => o.text())).toEqual(
      expect.arrayContaining(['Sales', 'Warehouse']),
    )

    const warehouse = select.findAll('option').find((o) => o.text() === 'Warehouse')!
    await select.setValue(warehouse.attributes('value'))
    expect(config.cube).toBe('Warehouse')
  })

  it('asks for the cube as text when no choices arrived', () => {
    const wrapper = mount(ModelFields, {
      props: { doc: describeModel(XMLA_STORE), config: {}, omit: ['connection'], choices: { cube: [] } },
    })
    expect(wrapper.find('select').exists()).toBe(false)
  })

  it('marks the CSV resource path as required', () => {
    const wrapper = mount(ModelFields, {
      props: { doc: describeModel(CSV_STORE), config: {}, omit: ['connection'] },
    })
    const tag = wrapper.findAll('label').find((l) => l.text().includes('Resource Url'))
    expect(tag).toBeDefined()
    const input = wrapper.find(`#${tag!.attributes('for')}`)
    expect(input.attributes('required')).toBeDefined()
  })
})
