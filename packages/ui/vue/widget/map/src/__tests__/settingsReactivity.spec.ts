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
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { defineComponent, h, nextTick, ref } from 'vue'
import { EVENT_ACTIONS_REGISTRY, EventsPackage } from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifier as DATASOURCES } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { MapSettingsPackage } from '../gen/MapSettingsPackage'
import { MapSettingsImpl } from '../gen/MapSettingsImpl'
import { LayerImpl } from '../gen/LayerImpl'
import type { MapSettings } from '../gen/MapSettings'
import { modelledLayer, modelledSettings } from '../settingsModel'

/* A WMS client as @camptocamp/ogc-client gives it, cut down to what is read */
function wmsClient() {
  return {
    _info: { title: 'Stadtplan Jena', name: 'jena' },
    getLayers: () => [{ name: 'stadtplan_sw', title: 'Stadtplan (S/W)', children: [] }],
    getOperationUrl: () => 'https://kartenportal.jena.de/mapproxy/service?',
  }
}

const createServiceWMS = vi.fn(async (_url: string) => wmsClient())
const createServiceWFS = vi.fn(async (_url: string) => {
  throw new Error('not a WFS')
})

vi.mock('../composables/ogcService', () => ({
  useOGCService: () => ({ createServiceWMS, createServiceWFS }),
}))

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'p1' } }),
  useRouter: () => ({ push: vi.fn() }),
}))

vi.mock('org.eclipse.daanse.board.app.ui.vue.composables', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>
  return {
    ...actual,
    useTranslation: () => ({ t: (key: string) => key }),
    useDatasourceRepository: (_id: unknown, _type: string, data: { value: unknown }) => {
      data.value = null
      return { update: vi.fn(), callEvent: vi.fn(), getDatasourceInstance: () => null }
    },
  }
})

/* Leaflet does not draw in jsdom: the map and its tile layers as plain elements */
vi.mock('@vue-leaflet/vue-leaflet', () => {
  const passThrough = (name: string) =>
    defineComponent({
      name,
      inheritAttrs: false,
      setup: (_props, { slots }) => () => h('div', { class: name }, slots.default?.()),
    })
  return {
    LMap: passThrough('l-map'),
    LTileLayer: passThrough('l-tile-layer'),
    LGeoJson: passThrough('l-geo-json'),
    LMarker: passThrough('l-marker'),
    LIcon: passThrough('l-icon'),
    LWmsTileLayer: defineComponent({
      name: 'LWmsTileLayer',
      props: { layers: String, visible: Boolean, opacity: Number },
      setup: (props) => () =>
        h('i', { class: 'wms', 'data-layers': props.layers, 'data-visible': String(props.visible) }),
    }),
  }
})

void EventsPackage.eINSTANCE
void MapSettingsPackage.eINSTANCE

/* jsdom has none; the widget only uses it to tell leaflet its size */
globalThis.ResizeObserver ??= class {
  observe() {}
  unobserve() {}
  disconnect() {}
} as unknown as typeof ResizeObserver

const MapsWidget = (await import('../MapsWidget.vue')).default
const MapsWidgetSettings = (await import('../MapsWidgetSettings.vue')).default

const provide = {
  [identifiers.TINY_EMITTER as symbol]: { emit: vi.fn(), on: vi.fn(), off: vi.fn() },
  [EVENT_ACTIONS_REGISTRY as unknown as symbol]: { registerInstance: vi.fn(), unregisterInstance: vi.fn() },
  [DATASOURCES as unknown as symbol]: {
    getDatasource: () => undefined,
    getDatasourceType: () => undefined,
  },
}

/*
 * What the overlay does: the settings and the preview are bound to the
 * same widget.config, and the settings write back into it.
 */
function overlay(config: unknown) {
  const held = ref<unknown>(config)
  const Host = defineComponent({
    setup: () => () => [
      h(MapsWidgetSettings as any, {
        modelValue: held.value,
        'onUpdate:modelValue': (next: unknown) => { held.value = next },
      }),
      h(MapsWidget as any, { datasourceId: '', id: 'w1', configv: held.value }),
    ],
  })
  return { wrapper: mount(Host, { global: { provide }, attachTo: document.body }), held }
}

async function settle() {
  for (let i = 0; i < 4; i++) {
    await flushPromises()
    await nextTick()
  }
}

beforeEach(() => {
  createServiceWMS.mockClear()
  document.body.innerHTML = ''
})

/*
 * A layer stored by an older board: the data source it reads, serialised
 * with its repositories, and the WMS client reduced to an address (#1252).
 * The shape is the one in the stored Bodenfeuchte board.
 */
const storedOgcLayer = {
  id: '340f6733-8700-4234-9c3c-63a9089a393a',
  opacity: 1,
  service: {
    subscribers: [null],
    name: 'DataSource xeonoi',
    type: 'ogcsta',
    uid: 'xeonoi',
    connectionRepository: { availableConnections: { rest: {} }, connectionsByType: { test: 'rest' } },
    variableRepository: { availableVariables: {}, tinyEmitter: { e: {} } },
  },
  geoJson: {},
  type: 'OGCSTA',
  name: 'OGCSTA',
  title: 'OGCSTA',
  attribution: '',
  level: 1,
  checked: true,
  children: [],
  hasChildren: false,
  expanded: false,
  styleIds: ['09479183-ffed-4011-abae-e855370dc824', null],
}

const storedWmsLayer = {
  id: 'f2b6c7a4-b178-41cc-af94-cd422a625fc7',
  opacity: 1,
  type: 'WMSLayer',
  name: 'stadtplan_sw',
  title: 'Stadtplan (S/W)',
  checked: false,
  service: { url: 'https://kartenportal.jena.de/mapproxy/service?SERVICE=WMS&REQUEST=GetCapabilities', type: 'WMS' },
  childs: [],
}

describe('a stored map, adopted into the model', () => {
  it('becomes one MapSettings per stored object, with its lists as ELists', () => {
    const stored = {
      center: [50.9, 11.6],
      datasourceIds: ['a', null],
      layers: [storedOgcLayer, storedWmsLayer],
      services: [{ id: 's1', type: 'WMS', url: 'https://example.org/wms', service: { _capabilitiesUrl: 'x' } }],
    }
    const made = modelledSettings(stored)!

    expect(made).toBeInstanceOf(MapSettingsImpl)
    expect(modelledSettings(stored)).toBe(made)
    expect(modelledSettings(made)).toBe(made)
    expect(made.center.toArray()).toEqual([50.9, 11.6])
    expect(made.datasourceIds.toArray()).toEqual(['a'])
    expect(made.layers.size()).toBe(2)
    expect(made.services.get(0).url).toBe('https://example.org/wms')
    // A stored client is junk; the address is what it is rebuilt from
    expect(made.services.get(0).service).toBeUndefined()
  })

  it('drops the junk of an old layer and keeps what it is drawn by', () => {
    const ogc = modelledLayer(storedOgcLayer)
    expect(ogc).toBeInstanceOf(LayerImpl)
    expect(ogc.id).toBe(storedOgcLayer.id)
    expect(ogc.checked).toBe(true)
    expect(ogc.service).toBeUndefined()
    expect(ogc.styleIds.toArray()).toEqual(['09479183-ffed-4011-abae-e855370dc824'])
    expect(JSON.stringify(ogc)).not.toContain('connectionRepository')
    expect(Object.keys(ogc)).not.toContain('children')

    const wms = modelledLayer(storedWmsLayer)
    expect(wms.checked).toBe(false)
    expect(wms.service).toEqual({ url: storedWmsLayer.service.url })
    expect(wms.childs).toBeUndefined()
    const saved = JSON.parse(JSON.stringify(wms))
    expect(saved).toMatchObject({ id: storedWmsLayer.id, checked: false, name: 'stadtplan_sw' })
  })
})

describe('the map settings with the preview open (#1262)', () => {
  it('list an added service, and an added layer reaches the list and the preview without a remount', async () => {
    const { wrapper, held } = overlay({})
    await settle()

    // Written back as the model's own object, as the settings form does
    expect(held.value).toBeInstanceOf(MapSettingsImpl)
    expect(wrapper.findAll('.tree__service')).toHaveLength(0)

    await wrapper.find('[data-section-id=services] .section__head button').trigger('click')
    await settle()
    const input = document.body.querySelector<HTMLInputElement>('input[placeholder="https://[serviceurl]"]')!
    input.value = 'https://kartenportal.jena.de/mapproxy/service'
    input.dispatchEvent(new Event('input'))
    document.body.querySelector<HTMLElement>('[data-testid=map-add-service-confirm]')!.click()
    await settle()

    const services = wrapper.findAll('.tree__service')
    expect(services).toHaveLength(1)
    expect(services[0].text()).toContain('Stadtplan Jena')

    const offered = wrapper.findAll('.tree__add').find((node) => node.text().includes('Stadtplan (S/W)'))!
    await offered.trigger('click')
    await settle()

    expect(wrapper.findAll('.list-group-item').map((item) => item.text()).join()).toContain('Stadtplan (S/W)')
    const drawn = wrapper.findAll('i.wms')
    expect(drawn).toHaveLength(1)
    expect(drawn[0].attributes('data-layers')).toBe('stadtplan_sw')

    // Hidden in the settings, hidden on the map
    const layer = (held.value as MapSettings).layers.get(0)
    layer.checked = false
    await settle()
    expect(wrapper.find('i.wms').attributes('data-visible')).toBe('false')

    // Removed in the settings, gone from both
    await wrapper.find('.list-group-item button[title="Settings.removeLayer"]').trigger('click')
    await settle()
    expect(wrapper.findAll('.list-group-item')).toHaveLength(0)
    expect(wrapper.findAll('i.wms')).toHaveLength(0)
    wrapper.unmount()
  })
})

describe('the map widget', () => {
  it('rebuilds the client of a layer added after it was mounted', async () => {
    const config = modelledSettings({})!
    const wrapper = mount(MapsWidget as any, {
      props: { datasourceId: '', id: 'w1', configv: config },
      global: { provide },
    })
    await settle()
    expect(wrapper.findAll('i.wms')).toHaveLength(0)

    config.layers.push(modelledLayer(storedWmsLayer))
    await settle()

    expect(createServiceWMS).toHaveBeenCalledWith(storedWmsLayer.service.url)
    const drawn = wrapper.findAll('i.wms')
    expect(drawn).toHaveLength(1)
    expect(drawn[0].attributes('data-layers')).toBe('stadtplan_sw')
    wrapper.unmount()
  })
})
