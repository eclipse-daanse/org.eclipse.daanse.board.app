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
const props = defineProps<{ services: Service[] }>()
const { services } = toRefs(props)
const styles = ref<any[]>([])
const tabNo = ref(0)
const selection = ref<any>(undefined)
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
    observation: {
      setting: {},
      component: 'generalValueUnitDataPointRenderer'
    },
    id: v4()
  })
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
                  @click="()=>{
                    const index = model.indexOf(style);
                    if(index !== -1){
                      model.splice(index, 1);
                      if(selection?.id === style.id) selection = undefined;
                    }
                  }"
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
              </div>
            </template>

          </div>


        </div>

      </div>
      <div class="detail">
        <VaTabs v-model="tabNo">
          <template #tabs>
            <template v-if=" layerModel?.type =='OGCSTA'">
              <template v-if="selection?.thing">
                <VaTab
                  v-for="tab in ['Conditions', 'Points', 'Areas', 'Auto-update']"
                  :key="tab"
                >
                  {{ tab }}
                </VaTab>
              </template>
              <template v-else>
                <VaTab
                  v-for="tab in ['Conditions', 'Points', 'Areas','Values']"
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
            <div v-if="tabNo == 1 || tabNo == 2" class="rowlayout">
              <PointStyler v-if="tabNo==1" v-model="(selection as IDSRenderer).renderer"></PointStyler>
              <AreaStyler v-if="tabNo==2" v-model="selection.renderer.area"></AreaStyler>
            </div>
            <div v-if="tabNo ==3 && layerModel?.type =='OGCSTA' && !selection.thing" class="full rowlayout">

                <PlacementSytler v-model="(selection as IDSRenderer&PlacementI)as PlacementI"></PlacementSytler>
                <OberservationsStyler v-model="(selection as IDSRenderer)"></OberservationsStyler>

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
