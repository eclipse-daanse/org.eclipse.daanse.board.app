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
 * WMS services and layers in the settings of the 3D map (#1274): a service
 * is added by its address and read by its capabilities, a layer it offers is
 * added to the map. The client is the shared one of ui.vue.common.map,
 * replaced here by a stand-in that answers as the Jena city map does.
 */
import { describe, it, expect, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { EventsPackage } from 'org.eclipse.daanse.board.app.lib.api.events'
import { MaplibrePackage } from '../gen/MaplibrePackage'
import MapLibreWidgetSettings from '../MapLibreWidgetSettings.vue'
import { modelledSettings } from '../settingsModel'

void EventsPackage.eINSTANCE
void MaplibrePackage.eINSTANCE

const createServiceWMS = vi.fn(async (url: string) => ({
  _info: { title: 'Stadtplan Jena' },
  getOperationUrl: () => `${url}?map`,
  getLayers: () => [
    { name: '', title: 'Group' },
    { name: 'stadtplan_sw', title: 'Stadtplan (S/W)' },
  ],
}))
vi.mock('org.eclipse.daanse.board.app.ui.vue.common.map', async (original) => ({
  ...((await original()) as object),
  useOGCService: () => ({ createServiceWMS }),
}))

describe('the WMS section of the 3D map settings (#1274)', () => {
  it('adds a service by its address, and a layer it offers to the map', async () => {
    const stored = modelledSettings({})
    const wrapper = mount(MapLibreWidgetSettings, { props: { modelValue: stored } })
    const section = wrapper.find('[data-section-id="wms"]')
    await section.find('input').setValue('https://kartenportal.jena.de/mapproxy/service')
    const add = section.findAll('button').find((b) => b.text().includes('Settings.add'))!
    await add.trigger('click')
    await flushPromises()

    expect(createServiceWMS).toHaveBeenCalledWith('https://kartenportal.jena.de/mapproxy/service')
    expect(stored.services.toArray().map((s) => [s.title, s.getMapUrl])).toEqual([
      ['Stadtplan Jena', 'https://kartenportal.jena.de/mapproxy/service?map'],
    ])
    const offered = wrapper.findAll('.wms-service__layer')
    expect(offered.map((o) => o.text())).toEqual(['addStadtplan (S/W)'])

    await offered[0].trigger('click')
    expect(stored.wmsLayers.toArray().map((l) => [l.name, l.serviceId, l.checked])).toEqual([
      ['stadtplan_sw', stored.services.get(0).id, true],
    ])
    expect(wrapper.find('.wms-layers__item').text()).toContain('Stadtplan (S/W)')
  })
})

describe('the symbol layers in the settings of the 3D map (#1296)', () => {
  it('are a generated form: layer, data, model, encodings, parts and instances, and say whether the model can be read', async () => {
    const stored = modelledSettings({ modelLayers: [{ id: 'trees', name: 'Bäume', url: 'http://localhost:8080/tree.fbx', size: { height: { field: 'Baumhöhe' } } }] })
    const wrapper = mount(MapLibreWidgetSettings, { props: { modelValue: stored } })
    await flushPromises()
    const section = wrapper.find('[data-section-id="models"]')
    expect(section.find('.symbol-status__name').text()).toBe('Bäume')
    expect(section.findComponent({ name: 'SettingsForm' }).exists()).toBe(true)
    // The hand-written fields of before are gone; what the form shows comes from the model.
    expect(section.text()).not.toContain('Settings.models.heightProperty')
    expect(section.text()).toContain('maplibre:Symbols.MapLibreSettings.modelLayers')
  })
})
