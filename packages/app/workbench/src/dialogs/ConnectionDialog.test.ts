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
import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, h, ref, shallowRef } from 'vue'
import { mount, type VueWrapper } from '@vue/test-utils'
import { WORKBENCH, type SavedConnection } from '../state/workbench'
import ConnectionDialog from './ConnectionDialog.vue'

const i18n = { language: 'en', t: (key: string) => key }

/* The board's connection form, as far as the dialog hands it the config. */
const Settings = defineComponent({
  props: { config: { type: Object, required: true } },
  setup: props => () => h('input', { class: 'catalog', value: (props.config as any).catalogName }),
})

const server: SavedConnection = {
  uid: 'xmla.own',
  name: 'Own server',
  url: 'https://example.org/xmla',
  catalog: 'FoodMart',
  cube: 'Sales',
  security: 'None',
}

let view: VueWrapper | undefined

function mountDialog(options: { open?: boolean; cubes?: string[] } = {}) {
  const wb = {
    activeId: ref<string | null>(options.open ? server.uid : null),
    catalog: ref(options.open ? server.catalog : ''),
    cubes: shallowRef((options.cubes ?? []).map(name => ({ CUBE_NAME: name }))),
    addConnection: vi.fn(async () => undefined),
    removeConnection: vi.fn(),
  }
  view = mount(ConnectionDialog, {
    attachTo: document.body,
    props: { modelValue: false, editing: server },
    global: { provide: { i18n, [WORKBENCH as symbol]: wb, XmlaConnectionSettings: Settings } },
  })
  return { view, wb }
}

const field = (selector: string) => document.body.querySelector<HTMLInputElement | HTMLSelectElement>(selector)

afterEach(() => {
  view?.unmount()
  view = undefined
  document.body.innerHTML = ''
})

describe('editing a server', () => {
  it('shows the catalogue and the cube it was stored with', async () => {
    const { view } = mountDialog()
    await view.setProps({ modelValue: true })
    expect(field('.catalog')?.value).toBe('FoodMart')
    const inputs = [...document.body.querySelectorAll<HTMLInputElement>('.connect input')]
    expect(inputs.map(input => input.value)).toContain('Sales')
  })

  it('offers the cubes the open server listed, with the stored one chosen', async () => {
    const { view } = mountDialog({ open: true, cubes: ['Warehouse', 'Sales'] })
    await view.setProps({ modelValue: true })
    const select = [...document.body.querySelectorAll<HTMLSelectElement>('.connect select')].at(-1)!
    const options = [...select.options].map(option => option.text)
    expect(options).toEqual(expect.arrayContaining(['Warehouse', 'Sales']))
    expect(select.options[select.selectedIndex].text).toBe('Sales')
  })

  it('keeps the cube when the server is saved again', async () => {
    const { view, wb } = mountDialog()
    await view.setProps({ modelValue: true })
    await document.body.querySelector('form')!.dispatchEvent(new Event('submit'))
    expect(wb.addConnection).toHaveBeenCalledWith(expect.objectContaining({ catalog: 'FoodMart', cube: 'Sales' }))
  })
})
