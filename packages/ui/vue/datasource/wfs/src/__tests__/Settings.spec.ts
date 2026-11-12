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
 * #1282: the settings of a WFS data source list the feature types of the
 * service, and say in the service's words why there are none.
 */
import { describe, it, expect, vi, afterEach } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { reactive } from 'vue'
import Settings from '../Settings.vue'

const createServiceWFS = vi.fn()
const createServiceWMS = vi.fn()
vi.mock('org.eclipse.daanse.board.app.ui.vue.common.map', async (original) => ({
  ...((await original()) as object),
  useOGCService: () => ({ createServiceWFS, createServiceWMS }),
}))

const connections = [{ uid: 'berlin', name: 'Berlin', type: 'rest', config: { url: 'https://gdi.berlin.de/services/wfs/baumbestand' } }]

afterEach(() => {
  vi.unstubAllGlobals()
  createServiceWFS.mockReset()
  createServiceWMS.mockReset()
})

describe('the WFS settings', () => {
  it('offer the feature types the service lists', async () => {
    createServiceWFS.mockResolvedValue({
      getFeatureTypes: () => [{ name: 'baumbestand:strassenbaeume', title: 'Straßenbäume' }, { name: '' }],
    })
    const config = reactive<any>({ connection: 'berlin', url: '', typeName: '' })
    const wrapper = mount(Settings, { props: { config, connections } })
    await flushPromises()
    expect(createServiceWFS).toHaveBeenCalledWith('https://gdi.berlin.de/services/wfs/baumbestand')
    expect(wrapper.find('.wfs-settings__error').exists()).toBe(false)
    const options = wrapper.findAll('option').map((o) => o.text())
    expect(options).toContain('Straßenbäume (baumbestand:strassenbaeume)')
  })

  it('offer the WMS layers in the GetFeatureInfo mode', async () => {
    createServiceWMS.mockResolvedValue({ getLayers: () => [{ name: 'Bäume', title: 'Bäume' }] })
    const config = reactive<any>({ connection: 'berlin', url: '', mode: 'getFeatureInfo' })
    const wrapper = mount(Settings, { props: { config, connections } })
    await flushPromises()
    expect(createServiceWMS).toHaveBeenCalled()
    expect(createServiceWFS).not.toHaveBeenCalled()
    expect(wrapper.findAll('option').map((o) => o.text())).toContain('Bäume (Bäume)')
  })

  it('read the column types of the feature type from DescribeFeatureType (#1295)', async () => {
    createServiceWFS.mockResolvedValue({ getFeatureTypes: () => [{ name: 'baumbestand:strassenbaeume' }] })
    vi.stubGlobal('fetch', vi.fn(async () => new Response(
      '<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"><xsd:complexType name="t"><xsd:sequence>' +
      '<xsd:element name="baumhoehe" type="xsd:double"/><xsd:element name="art" type="xsd:string"/>' +
      '</xsd:sequence></xsd:complexType></xsd:schema>',
    )))
    const config = reactive<any>({ connection: 'berlin', url: '', typeName: 'baumbestand:strassenbaeume', columnTypes: [{ column: 'baumhoehe', type: 'string', unit: 'm' }] })
    const wrapper = mount(Settings, { props: { config, connections } })
    await flushPromises()
    await wrapper.find('.wfs-settings__head button').trigger('click')
    await flushPromises()
    expect(config.columnTypes).toEqual([
      { column: 'baumhoehe', type: 'number', unit: 'm', label: '' },
      { column: 'art', type: 'string', unit: '', label: '' },
    ])
    // The list is the generated form of the shared column type.
    expect(wrapper.findComponent({ name: 'SettingsForm' }).exists()).toBe(true)
    expect(wrapper.find('.wfs-settings__columns').findAll('input').some((input) => (input.element as HTMLInputElement).value === 'baumhoehe')).toBe(true)
  })

  it('show which area is read in a generated form, and write it into the configuration', async () => {
    createServiceWFS.mockResolvedValue({ getFeatureTypes: () => [] })
    const config = reactive<any>({ connection: 'berlin', url: '', typeName: 't', extent: 'viewport', minZoom: 15 })
    const wrapper = mount(Settings, { props: { config, connections } })
    await flushPromises()
    const forms = wrapper.findAllComponents({ name: 'SettingsForm' })
    const extent = forms.find((f) => f.props('uiModelUri') === '/wfs-extent.ui.xmi')!
    expect(extent.exists()).toBe(true)
    expect(extent.text()).toContain('Fields.minZoom')
    expect(extent.text()).toContain('Fields.maxViewportFeatures')
    ;(extent.props('modelValue') as any).maxViewportFeatures = 800
    await flushPromises()
    expect(config.maxViewportFeatures).toBe(800)
    expect(config.minZoom).toBe(15)
    expect(config.extent).toBe('viewport')
  })

  it('say why there are none in the service words', async () => {
    createServiceWFS.mockRejectedValue(new Error('Not a valid WFS GetCapabilities response'))
    vi.stubGlobal('fetch', vi.fn(async () => new Response(
      '<ServiceExceptionReport><ServiceException>Service unknown or not permitted</ServiceException></ServiceExceptionReport>',
    )))
    const config = reactive<any>({ connection: 'berlin', url: '' })
    const wrapper = mount(Settings, { props: { config, connections } })
    await flushPromises()
    expect(wrapper.find('.wfs-settings__error').text()).toBe('Service unknown or not permitted')
  })
})
