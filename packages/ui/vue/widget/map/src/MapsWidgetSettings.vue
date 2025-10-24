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
import { DatasourceRepository, identifier } from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import type { Container } from 'inversify'

const container = inject('container') as Container
const instance = getCurrentInstance()

// Accept optional dataSources prop for compatibility with WidgetSettingsWindow
const props = defineProps<{
  dataSources?: any[]
}>()

const opened = ref({
  widgetSectionLayer: true,
  widgetSection: false,
  widgetServiceSection: true,
  storeSection: false,
  widgetMapSection: false
})

const widgetSettings = defineModel<IMapSettings>({ required: true })
const showModalSizeSmall = ref(false)
const serviceLoading = ref(false)
const OGCService = useOGCService()
const drag = ref(false)
const selectedNodes = ref([])


watch(selectedNodes, (chng) => {
  console.log(chng)
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
  serviceLoading.value = true
  const service = await OGCService.createServiceWMS(url.value)
  if (service) {
    widgetSettings.value.services.push({
      service: service,
      url: url.value,
      type: 'WMS',
      id: v4()
    })
  }
  const service2 = await OGCService.createServiceWFS(url.value)
  if (service2) {
    widgetSettings.value.services.push({
      service: service2,
      url: url.value,
      type: 'WFS',
      id: v4()
    })
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
  console.log('computedAsync')
  const ret: any = []
  for (let service of widgetSettings.value.services) {
    console.log(service)
    if (service.type == 'WFS') {
      console.log(service.service instanceof WfsEndpoint)
      if (!(service.service instanceof WfsEndpoint)) {
        serviceLoading.value = true
        service.service = await OGCService.createServiceWFS(service.url)
        serviceLoading.value = false
      }
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
      console.log('else')
      console.log(service.service)
      if (!(service.service instanceof WmsEndpoint)) {
        console.log('creating WMS Service')
        serviceLoading.value = true
        service.service = await OGCService.createServiceWMS(service.url)
        serviceLoading.value = false
      }

      ret.push({
        service: service.service,
        type: 'WMS',
        childs: addChilds(service.service.getLayers(), service.service),
        level: 0
      })
      console.log('after push'
      )
    }

  }
  // Process primary datasource and all additional datasources
  const allDatasourceIds = [widgetSettings.value.datasourceId, ...widgetSettings.value.datasourceIds].filter(Boolean)

  for (const id of allDatasourceIds) {
    if (!id) continue

    const datasourceRepository = container.get<DatasourceRepository>(identifier)

    try {
      const OGCStore = datasourceRepository.getDatasource(id)
      console.log(datasourceRepository.getDatasourceType(id))
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
      console.log('service not supported for datasource:', id)
    }
  }

  return ret
})
const value = ref(0.5)
const renderShow = ref(false)
const addLayer = async (node: any) => {
  node['checked'] = true
  if (node['type'] == 'WFSLayer') {
    const data = await node['wfs_service'].fetch()
    console.log(data)
  }
  node['styleIds'] = []
  widgetSettings.value.layers.push(node)
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
      .filter((ds: any) => ds.type === 'ogcsta' || ds.type === 'OGC Composer' || ds.type === 'rest')
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
  <VaModal
    v-model="showModalSizeSmall"
    :ok-text="addServiceType === 'wms_wfs' ? 'Add' : 'Add Datasource'"
    size="small"
    @ok="addServiceType === 'wms_wfs' ? addService() : addServiceFromDatasource()"
  >
    <div class="va-modal__message">
      <h3 class="va-h3">
        Add Service
      </h3>
      <div class="m-0">
        <div class="settings-container">
          <VaRadio
            v-model="addServiceType"
            option="wms_wfs"
            label="WMS/WFS Service"
            style="margin-bottom: 10px"
          />
          <VaRadio
            v-model="addServiceType"
            option="datasource"
            label="Datasource"
            style="margin-bottom: 15px"
          />

          <div v-if="addServiceType === 'wms_wfs'">
            <va-input v-model="url" placeholder="https://[serviceurl]"></va-input>
          </div>

          <div v-else>
            <VaSelect
              v-if="availableDatasources.length > 0"
              v-model="newDatasourceId"
              :options="availableDatasources"
              label="Select Datasource"
              placeholder="Choose a datasource"
              text-by="text"
              value-by="value"
            />
            <va-input
              v-else
              v-model="newDatasourceId"
              placeholder="Enter Datasource ID"
              label="Datasource ID"
            />
            <div style="margin-top: 10px; font-size: 12px; color: #666;">
              Primary datasource: <strong>{{ widgetSettings.datasourceId }}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </VaModal>

  <RendererModal v-model="modelswitch" v-model:layer="selectedLayer as any" v-model:show="renderShow" :services="widgetSettings.services"></RendererModal>
  <va-collapse v-model="opened.widgetSectionLayer" header="Layers" icon="layers">

        <span v-if="widgetSettings.layers.length==0" class="empty">
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
            <VaIcon v-if="element.checked" class="material-icons" @click="element.checked=false">
              layers
            </VaIcon>
            <VaIcon v-if="!element.checked" class="material-icons" @click="element.checked=true">
              layers_clear
            </VaIcon>
            {{ element.title }}
          </div>
          <div class="row nhidden options">
            <VaIcon class="material-icons">
              opacity
            </VaIcon>
            <div :id="element.id" class="slider nhidden sliderPopOver">
              <div style="min-width: 150px">
                <VaSlider v-model="element.opacity" :max="1"
                          :min="0" :step="0.01" color="#555" />
              </div>
            </div>
            <div v-if="element.type=='WFSLayer' || element.type=='OGCSTA' || element.type=='GEOJSON' || element.type=='REST-GEOJSON'">
              <VaButton
                icon="format_paint"
                preset="secondary"
                round
                @click="()=>{selectedLayer=element;renderShow=true}"
              >

              </VaButton>
            </div>


          </div>


        </li>
      </template>
    </Draggable>

  </va-collapse>

  <va-collapse v-model="opened.widgetServiceSection" class="bottomframe" header="Services" icon="home">
    <template #header="{ value, attrs, iconAttrs, text }">
      <div id="header-va-4" aria-controls="panel-va-4" aria-disabled="false" aria-expanded="false" class="va-collapse__header" role="button"
            style="color: currentcolor;" tabindex="0">

        <VaIcon
          class="material-icons"
        >cable
        </VaIcon>
        <div class="va-collapse__header__text">Services</div>

        <VaButton
          :loading="serviceLoading"
          icon="add_circle"
          preset="secondary"
          round
          @click="(e:any)=>{e.stopImmediatePropagation();showModalSizeSmall=true;}"
        />
        <VaIcon
          :class="value ? 'rotate-[-180deg]':''"
          name="va-arrow-down"
          v-bind="iconAttrs"
        />
      </div>
    </template>

    <template #body>

                                <span v-if="services && services.length==0" class="empty">
                                No Services here
                    </span>
      <VaTreeView v-if="services" :nodes="services" childrenBy="childs">
        <template #content="node">
          <template v-if="node.level == 0">
            <VaIcon class="material-icons">
              cable
            </VaIcon>

            <b v-if="node.service._info.title">{{ node.service._info.title }}</b>
            <b v-else>{{ node.service._info.name }}</b>

            <!-- Show delete button only for additional datasources (not primary datasourceId) -->
            <VaButton
              class="mt4"
              v-if="(node.type === 'OGCSTA' || node.type === 'GEOJSON' || node.type === 'REST-GEOJSON') &&
                    widgetSettings.datasourceIds.includes(node.service._info.name)"
              icon="delete"
              preset="plain"
              size="small"
              @click.stop="removeDatasource(node.service._info.name)"
              style="margin-left: 10px"
            />
          </template>
          <template v-else>
                                  <span @click="()=>addLayer(node)">
                                    <VaIcon class="material-icons nsee">
                                        layers
                                    </VaIcon>
                                    <VaIcon class="material-icons nhidden">
                                        add
                                    </VaIcon>

                                    {{ node.title }}
                                  </span>
          </template>

        </template>
      </VaTreeView>


    </template>

  </va-collapse>

  <va-collapse v-model="opened.widgetMapSection" class="bottomframe" header="Services" icon="map">
    <template #header="{ value, attrs, iconAttrs, text }">
      <div id="header-va-4" aria-controls="panel-va-4" aria-disabled="false" aria-expanded="false" class="va-collapse__header" role="button"
            style="color: currentcolor;" tabindex="0">

        <VaIcon
          class="material-icons"
        >map
        </VaIcon>
        <div class="va-collapse__header__text">Map</div>

        <VaIcon
          :class="value ? 'rotate-[-180deg]':''"
          name="va-arrow-down"
          v-bind="iconAttrs"
        />
      </div>
    </template>

    <template #body>

      <div class="settings-container">
        <va-checkbox
          v-model="widgetSettings.fixed"
          label="Map fixed"
        />
      </div>

    </template>

  </va-collapse>


</template>
<style scoped>


.settings-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 15px;
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
  padding: var(--va-tree-node-padding);
  list-style: none;

  &:hover {
    background-color: #d6dde3;
    border-radius: var(--va-tree-node-border-radius);
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
  border-bottom: 1px solid var(--va-background-border);

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
