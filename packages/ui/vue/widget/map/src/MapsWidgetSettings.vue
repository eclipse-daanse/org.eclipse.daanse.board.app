<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script lang="ts" setup>
import { computed, getCurrentInstance, inject, ref, watch, type ShallowRef } from 'vue'

import { WmsLayerList } from 'org.eclipse.daanse.board.app.ui.vue.common.map'
import { useOGCService } from './composables/ogcService'
import type { IMapSettings } from './Settings'
import type { IDSRenderer, IRenderer } from './api/Renderer'
import { RoadOverlay } from './gen/RoadOverlay'
import { clientOf, describedService } from './serviceClient'
import { WfsEndpoint, WmsEndpoint, type WmsLayerSummary } from '@camptocamp/ogc-client'
import { v4 } from 'uuid'
import type { WfsFeatureTypeBrief } from '@camptocamp/ogc-client/src/wfs/model'
import WFS from './WFS'
import RendererModal from './parts/RendererModal.vue'
import { computedAsync } from '@vueuse/core'
import { DatasourceRepository, identifier } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { logServices, logDatasource } from './utils/logger'
import { useEList, useEObject, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { modelledLayer, modelledSettings } from './settingsModel'
import type { MapSettings } from './gen/MapSettings'
import type { Layer } from './gen/Layer'
import {
  DButton,
  DCheckbox,
  DColorInput,
  DIcon,
  DInput,
  DModal,
  DRadioGroup,
  DSelect,
  DSlider,
} from 'org.eclipse.daanse.board.app.ui.vue.controls'

const instance = getCurrentInstance()

// Accept optional dataSources prop for compatibility with WidgetSettingsWindow
const props = defineProps<{
  dataSources?: any[]
}>()

const stored = defineModel<IMapSettings | MapSettings>({ required: true })
const { t } = useTranslation('map')

/*
 * The settings as the model's own object (#1262).
 *
 * A board hands a map its settings as plain JSON, and nothing hears a
 * plain array change: an added service or layer reached neither the lists
 * here, nor the preview, nor the board, until a mode switch mounted it all
 * again. Adopted, every list is a containment EList, and one watch on the
 * instance hears all of them. Written back at once, as the settings form
 * does for the other widgets, so that what is edited here is what is
 * saved - and what "Verwerfen" puts back. The widget on the board and the
 * preview share the same adoption (see ./settingsModel).
 */
const adoptedAtOpen = modelledSettings(stored.value)
if (adoptedAtOpen && adoptedAtOpen !== stored.value) stored.value = adoptedAtOpen
const settings = computed(() => modelledSettings(stored.value) as MapSettings)
/* What the template reads and binds: re-rendered on any change below it */
const widgetSettings = useEObject(() => settings.value) as ShallowRef<MapSettings>
const layers = useEList(() => settings.value, (held) => held.layers)

/* The overlay's presets, in the order the model lists them (#1235). */
const overlayOptions = computed(() => [
  { value: RoadOverlay.none, label: t('Settings.overlay.presets.none') },
  { value: RoadOverlay.stadiaLines, label: t('Settings.overlay.presets.stadiaLines') },
  { value: RoadOverlay.stadiaLinesLabels, label: t('Settings.overlay.presets.stadiaLinesLabels') },
  { value: RoadOverlay.esriTransportation, label: t('Settings.overlay.presets.esriTransportation') },
  { value: RoadOverlay.custom, label: t('Settings.overlay.presets.custom') },
])
const overlayIsStadia = computed(() =>
  widgetSettings.value.overlay === RoadOverlay.stadiaLines ||
  widgetSettings.value.overlay === RoadOverlay.stadiaLinesLabels,
)
const overlayNeedsAccount = computed(() =>
  overlayIsStadia.value || widgetSettings.value.overlay === RoadOverlay.esriTransportation,
)
const showModalSizeSmall = ref(false)
const serviceLoading = ref(false)
const showErrorModal = ref(false)
const errorMessage = ref('')
const OGCService = useOGCService()
const selectedNodes = ref([])



watch(selectedNodes, (chng) => {
  logServices('Selected nodes changed:', chng)
})

const url = ref('')

const addService = async () => {
  console.log('addService called with URL:', url.value)
  serviceLoading.value = true
  let wmsError = null
  let wfsError = null
  let hasService = false

  // Try WMS
  try {
    console.log('Trying WMS...')
    const service = await OGCService.createServiceWMS(url.value)
    console.log('WMS result:', service)
    if (service) {
      settings.value.services.push(describedService(service, url.value, 'WMS'))
      hasService = true
    }
  } catch (e) {
    console.log('WMS error:', e)
    wmsError = e
  }

  // Try WFS
  try {
    console.log('Trying WFS...')
    const service2 = await OGCService.createServiceWFS(url.value)
    console.log('WFS result:', service2)
    if (service2) {
      settings.value.services.push(describedService(service2, url.value, 'WFS'))
      hasService = true
    }
  } catch (e) {
    console.log('WFS error:', e)
    wfsError = e
  }

  // If both failed, show error
  if (!hasService) {
    const error: any = wmsError || wfsError
    errorMessage.value = error?.message || t('Settings.serviceFailed')
    showErrorModal.value = true
  } else {
    // Close modal and reset URL on success
    showModalSizeSmall.value = false
    url.value = ''
  }

  serviceLoading.value = false
}

const addChilds = (layer: any, service: any) => {
  const ret: any = []
  if (layer) layer.forEach((l: any) => {
    ret.push({
      'id': v4(),
      'opacity': 1,
      'service': service,
      'type': 'WMSLayer',
      'name': l.name,
      'title': l.title,
      'attribution': l.attribution,
      'childs': addChilds(l.children, service)
    })
  })
  return ret
}
// Cache for service nodes to prevent re-creating with new IDs
const serviceNodesCache = ref<Map<string, any>>(new Map())

const datasourceRepository = inject<DatasourceRepository>(identifier)!

const services = computedAsync(async () => {
  logServices('Computing services async')
  const ret: any = []
  const held = widgetSettings.value

  /*
   * A widget that has never had a service has none of the three lists the
   * settings write into - and this runs while the component is being set
   * up, so walking an absent one took the whole form with it and the tab
   * opened on nothing.
   */
  for (const service of held?.services ?? []) {
    logServices('Service:', service)

    const isFailed = !!(service as any).reconstructionFailed

    if (isFailed) {
      // Add failed service to tree with error marker
      logServices('Service failed reconstruction:', service.url)
      ret.push({
        id: service.id,
        service: { _info: { title: `${service.url} ${t('Settings.failed')}`, name: service.url } },
        type: service.type,
        level: 0,
        childs: [],
        failed: true
      })
      continue
    }

    if (service.type == 'WFS') {
      logServices('Processing WFS service')

      /* Read through clientOf: the model types the field as unknown,
        because what it holds is rebuilt from the URL rather than stored. */
      const wfs = clientOf(service.service)
      if (typeof wfs?.getFeatureTypes === 'function') {
        ret.push({
          id: service.id,
          service: service.service,
          type: 'WFS',
          level: 0,
          childs: (wfs.getFeatureTypes() as WfsFeatureTypeBrief[]).map(
          (featureType: WfsFeatureTypeBrief) => {
            return {
              'id': v4(),
              'opacity': 1,
              'service': service.id,
              'wfs_service': new WFS(wfs.getFeatureUrl!(featureType.name, { outputCrs: 'EPSG:4326', asJson: true, maxFeatures: 100 })),
              'geoJson': {},
              'type': 'WFSLayer',
              'name': featureType.name,
              'title': featureType.title,
              'attribution': ''
            }
          })
        })
      } else {
        logServices('WFS service missing getFeatureTypes method')
      }
    } else {
      logServices('Processing WMS service')

      const wms = clientOf(service.service)
      if (typeof wms?.getLayers === 'function') {
        const layers = wms.getLayers()
        console.log('[MapsWidgetSettings] WMS layers:', layers)
        ret.push({
          id: service.id,
          service: service.service,
          type: 'WMS',
          childs: addChilds(layers, service.service),
          level: 0
        })
        logServices('WMS service added to tree')
      } else {
        logServices('WMS service missing getLayers method')
      }
    }
  }
  // Process primary datasource and all additional datasources
  const allDatasourceIds = [held?.datasourceId, ...(held?.datasourceIds ?? [])].filter(Boolean)

  for (const id of allDatasourceIds) {
    if (!id) continue

    try {
      const OGCStore = datasourceRepository.getDatasource(id)
      logDatasource('Datasource type:', datasourceRepository.getDatasourceType(id))
      const dsType = datasourceRepository.getDatasourceType(id)

      // Check cache first
      if (!serviceNodesCache.value.has(id)) {
        let childNode: any

        if(dsType == 'OGC Composer'){
          childNode = {
            'id': v4(),
            'opacity': 1,
            'service': OGCStore,
            'geoJson': {},
            'type': 'GEOJSON',
            'name': 'GEOJSON',
            'title': 'GEOJSON',
            'attribution': '',
            'datasourceId': id
          }
        } else if (dsType == 'valhalla') {
          childNode = {
            'id': v4(),
            'opacity': 1,
            'service': OGCStore,
            'geoJson': {},
            'type': 'ROUTE',
            'name': 'Route',
            'title': 'Valhalla Route',
            'attribution': '',
            'datasourceId': id
          }
        } else if (dsType == 'rest') {
          childNode = {
            'id': v4(),
            'opacity': 1,
            'service': OGCStore,
            'geoJson': {},
            'type': 'REST-GEOJSON',
            'name': 'REST-GEOJSON',
            'title': 'REST GeoJSON',
            'attribution': '',
            'datasourceId': id
          }
        } else {
          childNode = {
            'id': v4(),
            'opacity': 1,
            'service': OGCStore,
            'geoJson': {},
            'type': 'OGCSTA',
            'name': 'OGCSTA',
            'title': 'OGCSTA',
            'attribution': '',
            'datasourceId': id
          }
        }

        serviceNodesCache.value.set(id, childNode)
      }

      const cachedChild = serviceNodesCache.value.get(id)

      if(dsType == 'OGC Composer'){
        ret.push({
          id,
          service: { '_info': { title: id + '[Composer]', name: id } },
          type: 'GEOJSON',
          level: 0,
          childs: [cachedChild]
        })
      } else if (dsType == 'valhalla') {
        ret.push({
          id,
          service: { '_info': { title: id + '[Valhalla Route]', name: id } },
          type: 'ROUTE',
          level: 0,
          childs: [cachedChild]
        })
      } else if (dsType == 'rest') {
        ret.push({
          id,
          service: { '_info': { title: id + '[REST]', name: id } },
          type: 'REST-GEOJSON',
          level: 0,
          childs: [cachedChild]
        })
      } else {
        ret.push({
          id,
          service: { '_info': { title: id + '[OGCSTA]', name: id } },
          type: 'OGCSTA',
          childs: [cachedChild],
          level: 0
        })
      }
    } catch (e) {
      logDatasource('Service not supported for datasource:', id)
    }
  }

  console.log('[MapsWidgetSettings] Final services array:', ret)
  console.log('[MapsWidgetSettings] Final services length:', ret.length)
  return ret
})
const value = ref(0.5)
const renderShow = ref(false)
/*
 * A node of the service tree becomes a layer of the model - with an id of
 * its own, so the same layer can be added twice, and shown at once.
 */
const addLayer = async (node: any) => {
  if (node.type == 'WFSLayer') {
    const data = await node.wfs_service.fetch()
    logServices('WFS data fetched:', data)
  }

  settings.value.layers.push(modelledLayer({ ...node, id: v4(), checked: true, styleIds: [] }))
}

const removeLayer = (layer: Layer) => {
  settings.value.layers.remove(layer)
}

/*
 * The order the layer list hands back, put into the list by moving entries:
 * the list belongs to the settings and cannot be swapped for the array.
 */
const reorderLayers = (order: Layer[]) => {
  const list = settings.value.layers
  order.forEach((layer, index) => {
    const from = list.indexOf(layer)
    if (from > -1 && from !== index) list.move(index, from)
  })
}

const selectedLayer = ref<Layer | undefined>(undefined)

/*
 * The style list itself, not a copy: the modal adds to it and removes from
 * it. It is an EList, which takes the array methods the modal uses.
 */
const modelswitch = computed(() => {
  const held = widgetSettings.value
  const list = selectedLayer.value?.type == 'OGCSTA' ? held.OGCSstyles : held.styles
  return list as unknown as (IDSRenderer | IRenderer)[]
})
const serviceList = useEList(() => settings.value, (held) => held.services)

// Multi-datasource management
const addServiceType = ref<'wms_wfs' | 'datasource'>('wms_wfs')
const newDatasourceId = ref('')

// Get available datasources from props or empty array
const availableDatasources = computed(() => {
  if (props.dataSources) {
    return props.dataSources
      .filter((ds: any) => ds.type === 'ogcsta' || ds.type === 'OGC Composer' || ds.type === 'rest' || ds.type === 'valhalla')
      .map((ds: any) => ({
        text: `${ds.name} (${ds.type})`,
        value: ds.uid
      }))
  }
  return []
})

const addServiceFromDatasource = () => {
  if (newDatasourceId.value && !widgetSettings.value.datasourceIds.includes(newDatasourceId.value)) {
    widgetSettings.value.datasourceIds.push(newDatasourceId.value)
    newDatasourceId.value = ''
    showModalSizeSmall.value = false
  }
}

const removeDatasource = (dsId: string) => {
  if (widgetSettings.value.datasourceIds.remove(dsId)) {
    // Clear from cache
    serviceNodesCache.value.delete(dsId)
  }
}

const assignDatasourceToLayer = (layer: any, dsId: string) => {
  layer.datasourceId = dsId
}

</script>

<template>
  <DModal v-model="showModalSizeSmall" size="sm" :title="t('Settings.addService')">
    <div class="settings-container">
      <DRadioGroup
        v-model="addServiceType"
        :options="[
          { value: 'wms_wfs', label: t('Settings.serviceTypes.wmsWfs') },
          { value: 'datasource', label: t('Settings.serviceTypes.datasource') },
        ]"
        value-key="value"
        label-key="label"
        stacked
      />

      <div v-if="addServiceType === 'wms_wfs'">
        <DInput v-model="url" :label="t('Settings.serviceUrl')" placeholder="https://[serviceurl]" />
      </div>

      <div v-else>
        <DSelect
          v-if="availableDatasources.length > 0"
          v-model="newDatasourceId"
          :options="availableDatasources"
          :label="t('Settings.selectDatasource')"
          :placeholder="t('Settings.chooseDatasource')"
          label-key="text"
          value-key="value"
        />
        <DInput
          v-else
          v-model="newDatasourceId"
          :placeholder="t('Settings.enterDatasourceId')"
          :label="t('Settings.datasourceId')"
        />
        <p class="note">
          {{ t('Settings.primaryDatasource') }} <strong>{{ widgetSettings.datasourceId }}</strong>
        </p>
      </div>
    </div>
    <template #actions>
      <DButton intent="quiet" @click="showModalSizeSmall = false">{{ t('common:Action.cancel') }}</DButton>
      <DButton
        intent="primary"
        data-testid="map-add-service-confirm"
        @click="addServiceType === 'wms_wfs' ? addService() : addServiceFromDatasource()"
      >
        {{ addServiceType === 'wms_wfs' ? t('Settings.add') : t('Settings.addDatasource') }}
      </DButton>
    </template>
  </DModal>

  <DModal v-model="showErrorModal" size="sm">
    <template #header>
      <DIcon name="error" size="lg" tone="color-err" />
      <h2 class="dialog__title">{{ t('Settings.serviceError') }}</h2>
    </template>
    <p class="note note--body">{{ errorMessage }}</p>
    <template #actions>
      <DButton @click="showErrorModal = false">{{ t('Settings.ok') }}</DButton>
    </template>
  </DModal>

  <RendererModal v-model="modelswitch" v-model:layer="selectedLayer as any" v-model:show="renderShow" :services="serviceList" :all-layers="layers as any"></RendererModal>
  <section class="settings-section" data-section-id="layers" :data-section="t('Settings.sections.layers')">

    <!-- The list is shared with the 3D map (#1274); the styles button is the Leaflet map's own. -->
    <WmsLayerList :layers="layers" @reorder="(order) => reorderLayers(order as Layer[])"
      @remove="(layer) => removeLayer(layer as Layer)">
      <template #actions="{ layer }">
        <DButton
          v-if="['WFSLayer', 'OGCSTA', 'GEOJSON', 'REST-GEOJSON'].includes(String((layer as Layer).type))"
          intent="quiet"
          :title="t('Settings.styles')"
          @click="()=>{selectedLayer=layer as Layer;renderShow=true}"
        >
          <DIcon name="settings" size="sm" />
        </DButton>
      </template>
    </WmsLayerList>

  </section>

  <section class="settings-section bottomframe" data-section-id="services" :data-section="t('Settings.sections.services')">
    <div class="section__head">
      <DIcon name="cable" size="sm" />
      <span class="section__title">{{ t('Settings.sections.services') }}</span>
      <DButton
        intent="quiet"
        :title="t('Settings.addService')"
        :busy="serviceLoading"
        @click="showModalSizeSmall = true"
      >
        <DIcon name="add_circle" size="sm" />
      </DButton>
    </div>

    <span v-if="services && services.length==0" class="empty">
      {{ t('Settings.noServices') }}
    </span>

    <!--
      Two levels, written out rather than fed to a tree: a service and the
      layers it offers is the whole depth, and a list of two kinds of row
      says that plainly.
    -->
    <ul v-else class="tree">
      <li v-for="node in services" :key="node.id" class="tree__service">
        <div class="tree__row">
          <DIcon v-if="node.failed" name="error" tone="color-err" />
          <DIcon v-else name="cable" />

          <b v-if="node.service._info.title">{{ node.service._info.title }}</b>
          <b v-else>{{ node.service._info.name }}</b>

          <!-- Only an added datasource can be taken away; the widget's own stays -->
          <DButton
            v-if="(node.type === 'OGCSTA' || node.type === 'GEOJSON' || node.type === 'REST-GEOJSON') &&
                  widgetSettings.datasourceIds?.includes(node.service._info.name)"
            intent="quiet"
            :title="t('Settings.removeDatasource')"
            @click.stop="removeDatasource(node.service._info.name)"
          >
            <DIcon name="delete" size="sm" />
          </DButton>
        </div>

        <ul v-if="node.childs && node.childs.length" class="tree__layers">
          <li v-for="child in node.childs" :key="child.id ?? child.title" class="tree__row">
            <span class="tree__add" @click="()=>addLayer(child)">
              <DIcon name="layers" class="nsee" />
              <DIcon name="add" class="nhidden" />
              {{ child.title }}
            </span>
          </li>
        </ul>
      </li>
    </ul>
  </section>

  <section class="settings-section bottomframe" data-section-id="map" :data-section="t('Settings.sections.map')">
    <div class="section__head">
      <DIcon name="map" size="sm" />
      <span class="section__title">{{ t('Settings.sections.map') }}</span>
    </div>

    <div class="settings-container">
      <DInput
        v-model="widgetSettings.baseMapUrl"
        :label="t('Settings.baseMap')"
        placeholder="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        :hint="t('Settings.baseMapHint')"
      />

      <DSelect
        v-model="widgetSettings.overlay"
        :options="overlayOptions"
        value-key="value"
        label-key="label"
        :label="t('Settings.overlay.label')"
      />
      <template v-if="widgetSettings.overlay && widgetSettings.overlay !== 'none'">
        <DInput
          v-if="widgetSettings.overlay === 'custom'"
          v-model="widgetSettings.overlayUrl"
          :label="t('Settings.overlay.url')"
          placeholder="https://tiles.example.org/{z}/{x}/{y}.png"
          :hint="t('Settings.baseMapHint')"
        />
        <DInput
          v-if="overlayIsStadia"
          v-model="widgetSettings.overlayApiKey"
          :label="t('Settings.overlay.apiKey')"
          :hint="t('Settings.overlay.apiKeyHint')"
        />
        <p v-if="overlayNeedsAccount" class="hint-text">{{ t('Settings.overlay.licence') }}</p>
        <DSlider
          v-model="widgetSettings.overlayOpacity"
          :label="t('Settings.overlay.opacity')"
          :min="0"
          :max="1"
          :step="0.05"
        />
        <DCheckbox
          v-model="widgetSettings.overlayInvertDark"
          :label="t('Settings.overlay.invertDark')"
          :hint="t('Settings.overlay.invertDarkHint')"
        />
      </template>

      <DCheckbox v-model="widgetSettings.fixed" :label="t('Settings.fixed')" />

      <DCheckbox
        v-model="widgetSettings.clusterGlobal"
        label="Cluster markers across renderers"
        hint="Combine markers of all renderers into shared clusters instead of one cluster set per renderer."
      />

      <DColorInput
        v-model="widgetSettings.selectionHighlightColor"
        :label="t('Settings.highlight')"
        :hint="t('Settings.highlightHint')"
      />
    </div>
  </section>

</template>
<style scoped>

.settings-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 15px;
}

.hint-text {
  font-size: 12px;
  color: var(--color-dim);
  margin: -8px 0 0 0;
  padding-left: 4px;
}

.section__head {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 8px;
  color: var(--color-fg);
}

.section__title {
  flex: 1 1 auto;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: 600;
}

.note {
  margin: 8px 0 0;
  font-size: var(--text-xs);
  color: var(--color-dim);
}

.note--body {
  font-size: var(--text-sm);
  color: var(--color-fg);
}

.dialog__title {
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-fg);
}

.failed {
  margin-left: 8px;
  font-size: 0.85em;
  color: var(--color-err);
}

.tree {
  margin: 0;
  padding: 0;
  list-style: none;
}

.tree__row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.tree__layers {
  margin: 0;
  padding-left: 18px;
  list-style: none;
}

.tree__add {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.empty {
  display: block;
  width: 100%;
  vertical-align: middle;
  text-align: center;
  font-variant: small-caps;
  font-style: italic;
  color: #5d5d5d;
}

.bottomframe {
  border-bottom: 1px solid var(--color-divider);

}

#header-va-4 {
  padding: 6px 12px 6px 12px;
}

</style>
<style>
.button {
  margin-top: 35px;
}

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
}

.nhidden, .row.nhidden {
  display: none;
}

.va-tree-node-root {
  &:hover {
    cursor: pointer;

    .nhidden {
      display: inline;
    }

    .nsee {
      display: none;
    }
  }
}

.list-group-item {
  &:hover {
    cursor: pointer;

    .nhidden {
      display: flex;
    }
  }
}

.sliderPopOver {
  /*background-color: #fefefe99 !important;*/
  padding: 2px 7px;

  .va-slider__handler {
    left: 51%;
    background-color: rgb(255 255 255) !important;
    border-color: rgb(153 169 200) !important;
    border-radius: 6px !important;
    border-width: 1px !important;
    width: 11px;
    height: 20px;

    .va-slider__handler__dot--focus {
      margin-top: 4px;
    }
  }
}
.mt4{
  margin-top: 4px;
}
</style>
