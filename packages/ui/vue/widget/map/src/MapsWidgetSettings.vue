<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script lang="ts" setup>
import { computed, getCurrentInstance, inject, onMounted, ref, watch } from 'vue'

import Draggable from 'vuedraggable-es'
import { useOGCService } from './composables/Service'
import type { IMapSettings, LayerI } from './Settings'
import { WfsEndpoint, WmsEndpoint, type WmsLayerSummary } from '@camptocamp/ogc-client'
import { v4 } from 'uuid'
import type { WfsFeatureTypeBrief } from '@camptocamp/ogc-client/src/wfs/model'
import WFS from './WFS'
import RendererModal from './parts/RendererModal.vue'
import { computedAsync } from '@vueuse/core'
import { DatasourceRepository, identifier } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { logServices, logDatasource } from './utils/logger'
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

const widgetSettings = defineModel<IMapSettings>({ required: true })
const showModalSizeSmall = ref(false)
const serviceLoading = ref(false)
const showErrorModal = ref(false)
const errorMessage = ref('')
const OGCService = useOGCService()
const drag = ref(false)
const selectedNodes = ref([])



watch(selectedNodes, (chng) => {
  logServices('Selected nodes changed:', chng)
})
const dragOptions = computed(() => {
  return {

    group: 'description',
    disabled: false,
    ghostClass: 'ghost'
  }
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
      widgetSettings.value.services.push({
        service: service,
        url: url.value,
        type: 'WMS',
        id: v4()
      })
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
      widgetSettings.value.services.push({
        service: service2,
        url: url.value,
        type: 'WFS',
        id: v4()
      })
      hasService = true
    }
  } catch (e) {
    console.log('WFS error:', e)
    wfsError = e
  }

  // If both failed, show error
  if (!hasService) {
    const error: any = wmsError || wfsError
    errorMessage.value = error?.message || 'Failed to load service. The URL is not a valid WMS or WFS service.'
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

const services = computedAsync(async () => {
  logServices('Computing services async')
  const ret: any = []

  /*
   * A widget that has never had a service has none of the three lists the
   * settings write into - and this runs while the component is being set
   * up, so walking an absent one took the whole form with it and the tab
   * opened on nothing.
   */
  for (let service of widgetSettings.value.services ?? []) {
    logServices('Service:', service)

    const isFailed = !!(service as any).reconstructionFailed

    if (isFailed) {
      // Add failed service to tree with error marker
      logServices('Service failed reconstruction:', service.url)
      ret.push({
        service: { _info: { title: `${service.url} (failed)`, name: service.url } },
        type: service.type,
        level: 0,
        childs: [],
        failed: true
      })
      continue
    }

    if (service.type == 'WFS') {
      logServices('Processing WFS service')

      if (service.service && typeof service.service.getFeatureTypes === 'function') {
        ret.push({
          service: service.service,
          type: 'WFS',
          level: 0,
          childs: service.service.getFeatureTypes().map(
          (featureType: WfsFeatureTypeBrief) => {
            return {
              'id': v4(),
              'opacity': 1,
              'service': service.id,
              'wfs_service': new WFS(service.service.getFeatureUrl(featureType.name, { outputCrs: 'EPSG:4326', asJson: true, maxFeatures: 100 })),
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
      console.log('[MapsWidgetSettings] WMS service object:', service)
      console.log('[MapsWidgetSettings] service.service:', service.service)
      console.log('[MapsWidgetSettings] service.service._info:', service.service?._info)
      console.log('[MapsWidgetSettings] getLayers type:', typeof service.service?.getLayers)

      if (service.service && typeof service.service.getLayers === 'function') {
        const layers = service.service.getLayers()
        console.log('[MapsWidgetSettings] WMS layers:', layers)
        ret.push({
          service: service.service,
          type: 'WMS',
          childs: addChilds(layers, service.service),
          level: 0
        })
        logServices('WMS service added to tree')
        console.log('[MapsWidgetSettings] ret after adding WMS:', JSON.parse(JSON.stringify(ret)))
      } else {
        logServices('WMS service missing getLayers method')
      }
    }
  }
  // Process primary datasource and all additional datasources
  const allDatasourceIds = [widgetSettings.value.datasourceId, ...(widgetSettings.value.datasourceIds ?? [])].filter(Boolean)

  for (const id of allDatasourceIds) {
    if (!id) continue

    const datasourceRepository = inject<DatasourceRepository>(identifier)!

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
          service: { '_info': { title: id + '[Composer]', name: id } },
          type: 'GEOJSON',
          level: 0,
          childs: [cachedChild]
        })
      } else if (dsType == 'valhalla') {
        ret.push({
          service: { '_info': { title: id + '[Valhalla Route]', name: id } },
          type: 'ROUTE',
          level: 0,
          childs: [cachedChild]
        })
      } else if (dsType == 'rest') {
        ret.push({
          service: { '_info': { title: id + '[REST]', name: id } },
          type: 'REST-GEOJSON',
          level: 0,
          childs: [cachedChild]
        })
      } else {
        ret.push({
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
const addLayer = async (node: any) => {
  // Create a new layer object with its own styleIds array to avoid sharing references
  const newLayer = { ...node, checked: true, styleIds: [] }

  if (newLayer.type == 'WFSLayer') {
    const data = await newLayer.wfs_service.fetch()
    logServices('WFS data fetched:', data)
  }

  widgetSettings.value.layers.push(newLayer)
}

const removeLayer = (layer: any) => {
  const index = widgetSettings.value.layers.indexOf(layer)
  if (index > -1) {
    widgetSettings.value.layers.splice(index, 1)
  }
}

const selectedLayer = ref<LayerI | undefined>(undefined)

const modelswitch = computed(() => {
  if (selectedLayer.value?.type == 'OGCSTA') {
    return widgetSettings.value.OGCSstyles
  }
  return widgetSettings.value.styles
})

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
  const index = widgetSettings.value.datasourceIds.indexOf(dsId)
  if (index > -1) {
    widgetSettings.value.datasourceIds.splice(index, 1)
    // Clear from cache
    serviceNodesCache.value.delete(dsId)
  }
}

const assignDatasourceToLayer = (layer: any, dsId: string) => {
  layer.datasourceId = dsId
}

</script>

<template>
  <DModal v-model="showModalSizeSmall" size="sm" title="Add service">
    <div class="settings-container">
      <DRadioGroup
        v-model="addServiceType"
        :options="[
          { value: 'wms_wfs', label: 'WMS/WFS service' },
          { value: 'datasource', label: 'Datasource' },
        ]"
        value-key="value"
        label-key="label"
        stacked
      />

      <div v-if="addServiceType === 'wms_wfs'">
        <DInput v-model="url" label="Service URL" placeholder="https://[serviceurl]" />
      </div>

      <div v-else>
        <DSelect
          v-if="availableDatasources.length > 0"
          v-model="newDatasourceId"
          :options="availableDatasources"
          label="Select datasource"
          placeholder="Choose a datasource"
          label-key="text"
          value-key="value"
        />
        <DInput
          v-else
          v-model="newDatasourceId"
          placeholder="Enter datasource ID"
          label="Datasource ID"
        />
        <p class="note">
          Primary datasource: <strong>{{ widgetSettings.datasourceId }}</strong>
        </p>
      </div>
    </div>
    <template #actions>
      <DButton intent="quiet" @click="showModalSizeSmall = false">Cancel</DButton>
      <DButton
        intent="primary"
        @click="addServiceType === 'wms_wfs' ? addService() : addServiceFromDatasource()"
      >
        {{ addServiceType === 'wms_wfs' ? 'Add' : 'Add datasource' }}
      </DButton>
    </template>
  </DModal>

  <DModal v-model="showErrorModal" size="sm">
    <template #header>
      <DIcon name="error" size="lg" tone="color-err" />
      <h2 class="dialog__title">Service error</h2>
    </template>
    <p class="note note--body">{{ errorMessage }}</p>
    <template #actions>
      <DButton @click="showErrorModal = false">OK</DButton>
    </template>
  </DModal>

  <RendererModal v-model="modelswitch" v-model:layer="selectedLayer as any" v-model:show="renderShow" :services="widgetSettings.services" :all-layers="widgetSettings.layers"></RendererModal>
  <section class="settings-section" data-section="Layers">

        <span v-if="!widgetSettings.layers?.length" class="empty">
            No Layers here
        </span>

    <Draggable v-else v-model="widgetSettings.layers" :animation="150" :component-data="{
          tag: 'ul',
          type: 'transition-group',
          name: !drag ? 'flip-list' : null
        }" class="list-group" item-key="id" v-bind="dragOptions" @end="drag = false"
                @start="drag = true">
      <template #item="{ element  }">
        <li class="list-group-item">
          <div class="row dragIcon">
            <DIcon v-if="element.reconstructionFailed" name="error" tone="color-err" />
            <DIcon
              v-else
              :name="element.checked ? 'layers' : 'layers_clear'"
              :title="element.checked ? 'Hide layer' : 'Show layer'"
              @click="element.checked = !element.checked"
            />
            {{ element.title }}
            <span v-if="element.reconstructionFailed" class="failed">(failed)</span>
          </div>
          <div class="row nhidden options">
            <DIcon name="opacity" />
            <div :id="element.id" class="slider nhidden sliderPopOver">
              <div class="slider__track">
                <DSlider v-model="element.opacity" :min="0" :max="1" :step="0.01" />
              </div>
            </div>
            <div v-if="element.type=='WFSLayer' || element.type=='OGCSTA' || element.type=='GEOJSON' || element.type=='REST-GEOJSON'">
              <DButton
                intent="quiet"
                title="Styles"
                @click="()=>{selectedLayer=element;renderShow=true}"
              >
                <DIcon name="settings" size="sm" />
              </DButton>
            </div>
            <DButton intent="danger" title="Remove layer" @click.stop="removeLayer(element)">
              <DIcon name="delete" size="sm" />
            </DButton>

          </div>


        </li>
      </template>
    </Draggable>

  </section>

  <section class="settings-section bottomframe" data-section="Services">
    <div class="section__head">
      <DIcon name="cable" size="sm" />
      <span class="section__title">Services</span>
      <DButton
        intent="quiet"
        title="Add service"
        :busy="serviceLoading"
        @click="showModalSizeSmall = true"
      >
        <DIcon name="add_circle" size="sm" />
      </DButton>
    </div>

    <span v-if="services && services.length==0" class="empty">
      No Services here
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
            title="Remove datasource"
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

  <section class="settings-section bottomframe" data-section="Map">
    <div class="section__head">
      <DIcon name="map" size="sm" />
      <span class="section__title">Map</span>
    </div>

    <div class="settings-container">
      <DInput
        v-model="widgetSettings.baseMapUrl"
        label="Base map URL"
        placeholder="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        hint="Tile server URL template. Use {z}, {x}, {y} placeholders for zoom and coordinates."
      />

      <DCheckbox v-model="widgetSettings.fixed" label="Map fixed" />

      <DColorInput
        v-model="widgetSettings.selectionHighlightColor"
        label="Selection highlight colour"
        hint="Colour used to highlight selected Things on the map."
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

.slider__track {
  min-width: 150px;
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

.list-group-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 6px;
    align-items: center;
  }

  cursor: move;
  padding: 4px;
  list-style: none;

  &:hover {
    background-color: #d6dde3;
    border-radius: var(--radius-xs);
  }
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

.options {
  padding-top: 6px;
  padding-left: 12px;
  border-top: 1px dotted #00000047;
}

.row.nhidden {
  display: none;
}

.dragIcon {
  cursor: n-resize;;
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
