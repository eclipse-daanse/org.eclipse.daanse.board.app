<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
-->
<script lang="ts" setup>
import { type ModelRef, reactive, ref, toRefs, watch } from 'vue'


import { v4 } from 'uuid'
import {
  Comperator,
  ERefType,
  type ICondition,
  type IDSRenderer,
  type IPointAndAreaSettings,
  type IRenderer, type PlacementI
} from './../api/Renderer'
import ConditionSettings from './../parts/conditionLogic/ConditionSettings.vue'
import PointStyler from './../parts/styler/PointStyler.vue'
import AreaStyler from './../parts/styler/AreaStyler.vue'
import type { LayerI, Service } from './../Settings'
import type { WfsEndpoint } from '@camptocamp/ogc-client'
import { computedAsync } from '@vueuse/core'
import PlacementSytler from './../parts/styler/PlacementSytler.vue'
import OberservationsStyler from './../parts/styler/OberservationsStyler.vue'
import AutoUpdateSettings from './styler/AutoUpdateSettings.vue'
import { useDataPointRegistry } from './../composables/datapointRegistry'


const model: ModelRef<(IDSRenderer | IRenderer)[]> = defineModel<(IDSRenderer | IRenderer)[]>({
  default:
    () => {
      return (
        reactive([]
        ))
    }
})

const showModal = defineModel<boolean>('show', { default: () => false })

const layerModel = defineModel<LayerI | undefined>('layer', { default: () => undefined })
const props = defineProps<{ services: Service[], allLayers?: LayerI[] }>()
const { services, allLayers } = toRefs(props)
const styles = ref<any[]>([])
const tabNo = ref(0)
const selection = ref<any>(undefined)

// Confirmation dialog state
const showDeleteConfirmation = ref(false)
const styleToDelete = ref<any>(null)
const affectedLayers = ref<LayerI[]>([])

// Observation renderer type selection
const showObservationTypeDialog = ref(false)
const observationParentRenderer = ref<any>(null)
const { getAll: getAllDataPointRenderers, getById } = useDataPointRegistry()

// Check which layers use a specific style
const getLayersUsingStyle = (styleId: string): LayerI[] => {
  if (!allLayers?.value) return []
  return allLayers.value.filter(layer =>
    layer.styleIds?.includes(styleId)
  )
}

// Open delete confirmation dialog
const confirmDeleteStyle = (style: any) => {
  const usedByLayers = getLayersUsingStyle(style.id)

  if (usedByLayers.length > 0) {
    styleToDelete.value = style
    affectedLayers.value = usedByLayers
    showDeleteConfirmation.value = true
  } else {
    // If no layers use it, delete immediately
    performDelete(style)
  }
}

// Actually perform the delete
const performDelete = (style: any) => {
  // Remove style from all layers that use it
  affectedLayers.value.forEach(layer => {
    const index = layer.styleIds?.indexOf(style.id)
    if (index !== undefined && index !== -1) {
      layer.styleIds?.splice(index, 1)
    }
  })

  // Delete the style
  const index = model.value.indexOf(style)
  if (index !== -1) {
    model.value.splice(index, 1)
    if (selection.value?.id === style.id) {
      selection.value = undefined
    }
  }

  // Reset dialog state
  showDeleteConfirmation.value = false
  styleToDelete.value = null
  affectedLayers.value = []
}

// Cancel delete
const cancelDelete = () => {
  showDeleteConfirmation.value = false
  styleToDelete.value = null
  affectedLayers.value = []
}

const addStyle = () => {
  if (layerModel.value?.type == 'OGCSTA') {
    model.value.push({
      name: 'new Style',
      thing: [
        {
          prop: 'name',
          comperator: Comperator.equals,
          value: 'example'
        }
      ],
      renderer: {
        point_render_as: 'icon',
        point_prop: 'name',
        point: {
          currentIcon: 'add_location_alt',
          iconColor: '#545050',
          iconSize: 48,
          isIconFilled: false,
          strokeWeight: 2,
          opticSize: 24,
          grade: 1
        },
        pointPin: {
          color: '#ccc'
        },
        area: {
          stroke: true,
          color: '#ccc',
          weight: 2,
          opacity: 1,
          lineCap: 'None',
          dashOffset: '2',
          fill: true,
          fillOpacity: 1,
          className: ''
        }
      },
      ds_renderer: [],
      id: v4()
    } as IRenderer)
  } else {
    model.value.push({
      name: 'new Style',
      datastream: [
        {
          prop: 'name',
          comperator: Comperator.equals,
          value: '*'
        }
      ],
      placement: ERefType.Thing,
      renderer: {
        point_render_as: 'icon',
        point_prop: 'name',
        point: {
          currentIcon: 'add_location_alt',
          iconColor: '#545050',
          iconSize: 48,
          isIconFilled: false,
          strokeWeight: 2,
          opticSize: 24,
          grade: 1
        },
        pointPin: {
          color: '#ccc'
        },
        area: {
          stroke: true,
          color: '#ccc',
          weight: 2,
          opacity: 1,
          lineCap: 'None',
          dashOffset: '2',
          fill: true,
          fillOpacity: 1,
          className: ''
        }
      },
      id: v4()
    } as IDSRenderer)
  }

}
const addDSStyle = () => {
  selection.value.ds_renderer.push({
    name: 'new DS Style',
    datastream: [
      {
        prop: 'name',
        comperator: Comperator.equals,
        value: '*'
      }
    ],
    placement: ERefType.Thing,
    renderer: {
      point_render_as: 'icon',
      point_prop: 'name',
      point: {
        currentIcon: 'add_location_alt',
        iconColor: '#545050',
        iconSize: 48,
        isIconFilled: false,
        strokeWeight: 2,
        opticSize: 24,
        grade: 1
      },
      pointPin: {
        color: '#ccc'
      },
      area: {
        stroke: true,
        color: '#ccc',
        weight: 2,
        opacity: 1,
        lineCap: 'None',
        dashOffset: '2',
        fill: true,
        fillOpacity: 1,
        className: ''
      }
    },
    observations: [],
    id: v4()
  })
}

const promptAddObservation = (dsRenderer: any) => {
  observationParentRenderer.value = dsRenderer
  showObservationTypeDialog.value = true
}

const addObservationRenderer = (componentId: string) => {
  if (!observationParentRenderer.value) return

  const desc = getById(componentId)
  const newObservation: any = {
    component: componentId
  }

  // If it's a layer renderer (like GeoJSON), add default settings
  if (desc?.isLayerRenderer) {
    newObservation.setting = {
      conditions: [],
      renderer: {
        point_render_as: 'icon',
        point_prop: 'name',
        point: {
          currentIcon: 'add_location_alt',
          iconColor: '#545050',
          iconSize: 48,
          isIconFilled: false,
          strokeWeight: 2,
          opticSize: 24,
          grade: 1
        },
        pointPin: {
          color: '#ccc'
        },
        area: {
          stroke: true,
          color: '#3388ff',
          weight: 3,
          opacity: 1,
          lineCap: 'None',
          dashOffset: '2',
          fill: true,
          fillOpacity: 0.2,
          fillColor: '#3388ff',
          className: ''
        }
      }
    }
  } else {
    newObservation.setting = {}
  }

  // Initialize observations array if not exists
  if (!observationParentRenderer.value.observations) {
    observationParentRenderer.value.observations = []
  }

  observationParentRenderer.value.observations.push(newObservation)

  showObservationTypeDialog.value = false
  observationParentRenderer.value = null
}
const thingsProps = computedAsync(async () => {
  const layer = layerModel.value
  if (!layer) return []

  if (layer.type == 'WFSLayer') {
    try {
      const service = services.value.find(s => s.id == layer.service)
      const featurePropsDetails = await (service?.service as WfsEndpoint)?.getFeatureTypePropDetails(layer.name ?? '')
      console.log(featurePropsDetails)
      return Object.entries(featurePropsDetails).map(
        (featureProps) => {
          return { 'text': featureProps[0], 'selector': featureProps[0], suggestions: featureProps[1].uniqueValues.map(val => val.value) }
        })
    } catch (e) {
      console.log(e)
      return []
    }
  } else if (layer.type == 'GEOJSON' && layer.geoJson) {
    try {
      const geoJson = layer.geoJson
      if (!geoJson?.features || geoJson.features.length === 0) {
        return []
      }

      // Extract all unique property keys and their values from features
      const propsMap = new Map<string, Set<any>>()

      for (const feature of geoJson.features) {
        if (feature.properties) {
          for (const [key, value] of Object.entries(feature.properties)) {
            if (!propsMap.has(key)) {
              propsMap.set(key, new Set())
            }
            propsMap.get(key)?.add(value)
          }
        }
      }

      return Array.from(propsMap.entries()).map(([key, valuesSet]) => ({
        text: key,
        selector: key,
        suggestions: Array.from(valuesSet)
      }))
    } catch (e) {
      console.log(e)
      return []
    }
  } else {
    return []
  }

}, [])
watch(showModal, (val) => {
  if (val) {
    selection.value = undefined
  }
})
watch(selection,()=>{
  tabNo.value = 0
})
</script>

<template>

  <VaModal
    v-model="showModal"
    hide-default-actions
    maxWidth="1200px"
    overlay-opacity="0.2"
  >
    <div class="tree_detail">
      <div class="tree">
        <div class="menu">

          <div class="menuitem">
            <div class="checked">
              <VaIcon
                class="material-icons"
                @click="addStyle"
              >
                add
              </VaIcon>
            </div>
          </div>
          <va-divider></va-divider>
          <div v-for="style in model" :key="style.id"
          >
            <div :class="{'active':style.id==selection?.id}" class="menuitem" @click="selection=style">
              <div class="checked" @click="()=>{
                            const index = layerModel?.styleIds?.indexOf(style.id);
                            if(index!=-1){
                                layerModel?.styleIds?.splice(index!,1)
                            }else{
                                layerModel?.styleIds?.push(style.id)
                            }
                        }">
                <VaIcon
                  :color="(layerModel?.styleIds?.includes(style.id))?'primary':'#eeeeee'"
                  class="material-icons"
                >
                  checked
                </VaIcon>
              </div>
              <div class="icon">
                <VaBadge
                  :offset="[5,14]"
                  class="mr-6"
                  color="#efefef"
                  overlap
                  style="--va-badge-text-wrapper-border-radius: 50%;"
                  text="Th"
                >
                  <VaIcon
                    class="material-icons"
                  >
                    style

                  </VaIcon>
                </VaBadge>
              </div>
              <div class="text">
                <VaValue v-slot="v">
                  <input v-if="v.value" v-model="style.name" class="item__input" style="width: 100%;" @blur="v.value = false">
                  <span v-else @click="v.value = true">
                            {{ style.name }}
                            </span>

                  <!--<VaButton :icon="v.value ? 'save' : 'edit'" preset="plain" size="small" @click="v.value = !v.value" />-->
                </VaValue>

              </div>
              <div class="options">
                <template v-if="layerModel?.type =='OGCSTA' && (style as IRenderer)?.thing">
                  <VaButton
                    icon="add"
                    preset="secondary"
                    round
                    @click="addDSStyle"
                  />
                </template>
                <VaButton
                  icon="delete"
                  preset="secondary"
                  round
                  @click="confirmDeleteStyle(style)"
                />
              </div>
            </div>
            <template v-if="(style as IRenderer)?.thing">
              <div class="childs">
                <div v-for="substyle in (style as IRenderer)?.ds_renderer" :key="substyle.id" :class="{'active':substyle.id==(selection?.id)}" class="menuitem"
                      @click="selection=substyle">
                  <div></div>
                  <div class="icon">
                    <VaBadge
                      :offset="[5,14]"
                      class="mr-6"
                      color="#efefef"
                      overlap
                      style="--va-badge-text-wrapper-border-radius: 50%;"
                      text="DS"
                    >
                      <VaIcon
                        class="material-icons"
                      >
                        format_paint

                      </VaIcon>
                    </VaBadge>
                  </div>
                  <div class="text">
                    <VaValue v-slot="v">
                      <input v-if="v.value" v-model="substyle.name" class="item__input" style="width: 100%;" @blur="v.value = false">
                      <span v-else @click="v.value = true">
                            {{ substyle.name }}
                            </span>

                      <!--<VaButton :icon="v.value ? 'save' : 'edit'" preset="plain" size="small" @click="v.value = !v.value" />-->
                    </VaValue>

                  </div>
                  <div class="options">
                    <VaButton
                      icon="add"
                      preset="secondary"
                      round
                      @click="promptAddObservation(substyle)"
                    />
                    <VaButton
                      icon="delete"
                      preset="secondary"
                      round
                      @click="()=>{
                        const parentStyle = style as IRenderer;
                        const index = parentStyle.ds_renderer.indexOf(substyle);
                        if(index !== -1){
                          parentStyle.ds_renderer.splice(index, 1);
                          if(selection?.id === substyle.id) selection = undefined;
                        }
                      }"
                    />
                  </div>
                </div>

                <!-- Observation renderers (third level) -->
                <template v-for="substyle in (style as IRenderer)?.ds_renderer" :key="'obs-parent-'+substyle.id">
                  <div v-if="substyle.observations && substyle.observations.length > 0" class="childs">
                    <div v-for="(obs, obsIdx) in substyle.observations" :key="'obs-'+substyle.id+'-'+obsIdx" :class="{'active':obs===(selection)}" class="menuitem"
                          @click="selection=obs">
                      <div></div>
                      <div class="icon">
                        <VaBadge
                          :offset="[5,14]"
                          class="mr-6"
                          color="#efefef"
                          overlap
                          style="--va-badge-text-wrapper-border-radius: 50%;"
                          text="Obs"
                        >
                          <VaIcon
                            class="material-icons"
                          >
                            visibility
                          </VaIcon>
                        </VaBadge>
                      </div>
                      <div class="text">
                        {{ obs.component || 'Observation' }}
                      </div>
                      <div class="options">
                        <VaButton
                          icon="delete"
                          preset="secondary"
                          round
                          @click="()=>{
                            if (!substyle.observations) return;
                            const index = substyle.observations.indexOf(obs);
                            if(index !== -1){
                              substyle.observations.splice(index, 1);
                              if(selection === obs) selection = undefined;
                            }
                          }"
                        />
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </template>

          </div>


        </div>

      </div>
      <div class="detail">
        <VaTabs v-model="tabNo">
          <template #tabs>
            <template v-if=" layerModel?.type =='OGCSTA'">
              <!-- Thing Renderer -->
              <template v-if="selection?.thing">
                <VaTab
                  v-for="tab in ['Conditions', 'Points', 'Areas', 'Auto-update']"
                  :key="tab"
                >
                  {{ tab }}
                </VaTab>
              </template>
              <!-- Observation Renderer -->
              <template v-else-if="selection?.component && !selection?.datastream">
                <VaTab>Settings</VaTab>
              </template>
              <!-- DS Renderer -->
              <template v-else-if="layerModel?.type =='OGCSTA'">
                <VaTab
                  v-for="tab in ['Conditions', 'Points', 'Areas', 'Placement']"
                  :key="tab"
                >
                  {{ tab }}
                </VaTab>
              </template>
              <template v-else>
                <VaTab
                  v-for="tab in ['Conditions', 'Points', 'Areas']"
                  :key="tab"
                >
                  {{ tab }}
                </VaTab>
              </template>
            </template>
            <template v-else>
              <VaTab
                v-for="tab in ['Conditions', 'Points', 'Areas']"
                :key="tab"
              >
                {{ tab }}
              </VaTab>
            </template>

          </template>
        </VaTabs>
        <!--<RenderPropertyListItemDataStream v-model="model"></RenderPropertyListItemDataStream>-->
        <div v-if="selection" class="content">
          <VaScrollContainer
            class="scroller"
            vertical
          >
            <!-- Observation Renderer Content -->
            <template v-if="selection?.component && !selection?.datastream">
              <div class="full">
                <component
                  :is="getById(selection.component)?.setupComponent"
                  v-if="getById(selection.component)?.setupComponent"
                  v-model="selection.setting"
                />
              </div>
            </template>

            <!-- DS/Thing Renderer Content -->
            <template v-else>
              <div v-if="tabNo == 1 || tabNo == 2" class="rowlayout">
                <PointStyler v-if="tabNo==1" v-model="(selection as IDSRenderer).renderer"></PointStyler>
                <AreaStyler v-if="tabNo==2" v-model="selection.renderer.area"></AreaStyler>
              </div>
              <div v-if="tabNo ==3 && layerModel?.type =='OGCSTA' && !selection.thing" class="full rowlayout">

                  <PlacementSytler v-model="(selection as IDSRenderer&PlacementI)as PlacementI"></PlacementSytler>

              </div>
              <div v-else-if="tabNo ==3 && layerModel?.type =='OGCSTA' && selection.thing" class="full">
                <AutoUpdateSettings v-model="selection"></AutoUpdateSettings>
              </div>
              <div v-else class="full">
                <template v-if="layerModel?.type =='OGCSTA' && selection.thing">
                  <ConditionSettings v-if="tabNo==0" v-model="selection.thing"></ConditionSettings>
                </template>
                <template v-else>

                  <ConditionSettings v-if="tabNo==0" v-model="selection.datastream"
                                      v-model:thing-props="thingsProps"></ConditionSettings>

                </template>
              </div>
            </template>
          </VaScrollContainer>


        </div>
        <div v-else class="content center">
          <VaIcon :size="74" class="material-icons">
            style
          </VaIcon>
          <span><span class="underline blue" @click="addStyle">create</span> or select Sytle to edit</span>
        </div>

      </div>
    </div>


  </VaModal>

  <!-- Delete Confirmation Modal -->
  <VaModal
    v-model="showDeleteConfirmation"
    title="Delete Style"
    size="small"
    ok-text="Delete"
    cancel-text="Cancel"
    @ok="performDelete(styleToDelete)"
    @cancel="cancelDelete"
  >
    <div style="padding: 10px;">
      <p><strong>Warning:</strong> This style "{{ styleToDelete?.name }}" is used by {{ affectedLayers.length }} layer(s):</p>
      <ul style="margin: 10px 0; padding-left: 20px;">
        <li v-for="(layer, index) in affectedLayers" :key="index">
          {{ layer.name || layer.title || 'Unnamed Layer' }}
        </li>
      </ul>
      <p>If you delete this style, it will be removed from all these layers.</p>
      <p><strong>Do you want to continue?</strong></p>
    </div>
  </VaModal>

  <!-- Observation Renderer Type Selection Modal -->
  <VaModal
    v-model="showObservationTypeDialog"
    title="Select Observation Renderer Type"
    size="medium"
    hide-default-actions
  >
    <div style="padding: 20px;">
      <p style="margin-bottom: 15px;">Choose which type of renderer to use for observations:</p>
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <VaButton
          v-for="[id, desc] in getAllDataPointRenderers()"
          :key="id"
          @click="addObservationRenderer(id)"
          style="justify-content: flex-start;"
        >
          <div style="text-align: left;">
            <div style="font-weight: bold;">{{ desc.name }}</div>
            <div style="font-size: 0.85em; opacity: 0.7;">{{ desc.description }}</div>
          </div>
        </VaButton>
      </div>
    </div>
  </VaModal>
</template>

<style scoped>
.full{
  position:relative;
}
.tree_detail {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-content: flex-start;
  gap: 5px;
}

.tree {
  width: 300px;

}

.detail {
  border-left: 1px solid #ccc;
}

.menuitem {
  display: grid;
  grid-template-columns: 25px 35px 1fr  min-content;
  align-items: center;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 5px;
  cursor: pointer;

  .checked {
    margin-top: -5px;
  }

  &.active {
    background-color: #e5e7eb;
  }

  .options {
    display: flex;
    flex-direction: row;
  }

}

.childs {
  grid-column: span 4;
  padding-left: 15px;
}

.content {
  width: 846px;
  height: 500px;
  padding: 0 0 0 15px;

  .scroller {
    min-height: 100%;
  }

  &.center {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    color: #8f8f8f;
  }
}

.underline {
  cursor: pointer;
}

.blue {
  color: rgb(19, 51, 112);
}

.rowlayout {
  display: grid;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  grid-template-columns: 66% 1fr;
  gap: 15px;
}

</style>
