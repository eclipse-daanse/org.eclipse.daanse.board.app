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
  if (widgetSettings.value.datasourceId) {

    const id = widgetSettings.value.datasourceId
    //Todo: How can i get The name of the store;
    const datasourceRepository = container.get<DatasourceRepository>(identifier)

    try {
      const OGCStore = datasourceRepository.getDatasource(widgetSettings.value.datasourceId)
      console.log(datasourceRepository
        .getDatasourceType(widgetSettings.value.datasourceId))
      const dsType = datasourceRepository.getDatasourceType(widgetSettings.value.datasourceId)

      if(dsType == 'OGC Composer'){
            ret.push({
              service: { '_info': { title: id + '[Composer]', name: id } },
              type: 'GEOJSON',
              level: 0,
              childs:   [
                {
                  'id': v4(),
                  'opacity': 1,
                  'service': OGCStore,
                  'geoJson': {},
                  'type': 'GEOJSON',
                  'name': 'GEOJSON',
                  'title': 'GEOJSON',
                  'attribution': ''
                }
                ]
            })
      } else if (dsType == 'rest') {
        ret.push({
          service: { '_info': { title: id + '[REST]', name: id } },
          type: 'REST-GEOJSON',
          level: 0,
          childs: [
            {
              'id': v4(),
              'opacity': 1,
              'service': OGCStore,
              'geoJson': {},
              'type': 'REST-GEOJSON',
              'name': 'REST-GEOJSON',
              'title': 'REST GeoJSON',
              'attribution': ''
            }
          ]
        })
      } else {
        ret.push({
          //service:{'_info':{title:OGCStore?.name+'['+OGCStore?.type+']',name:OGCStore?.name}},
          service: { '_info': { title: id + '[OGCSTA]', name: id } },
          type: 'OGCSTA',
          childs: [
            {
              'id': v4(),
              'opacity': 1,
              'service': OGCStore,
              'geoJson': {},
              'type': 'OGCSTA',
              'name': 'OGCSTA',
              'title': 'OGCSTA',
              'attribution': ''
            }
          ],
          level: 0
        })
      }
    } catch (e) {
      console.log('service not supported')
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

</script>

<template>
  <VaModal
    v-model="showModalSizeSmall"
    ok-text="add"
    size="small"
    @ok="addService"
  >
    <div class="va-modal__message">
      <h3 class="va-h3">
        Add new Service (WMS WFS)
      </h3>
      <div class="m-0">
        <div class="settings-container">
          <va-input v-model="url" placeholder="https://[serviceurl]"></va-input>
          <!--<va-button @click="addService">Add</va-button>-->
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
</style>
