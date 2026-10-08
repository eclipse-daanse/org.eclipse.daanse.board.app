<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
-->
<script lang="ts" setup>
import { computed, type ModelRef, reactive, ref, toRefs, watch } from 'vue'
import { IconSettingsImpl } from '../gen/IconSettingsImpl'


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
import {
  DButton,
  DDivider,
  DIcon,
  DModal,
  DTabs,
} from 'org.eclipse.daanse.board.app.ui.vue.controls'


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
        // A modelled type, so built rather than written as a literal
        point: Object.assign(new IconSettingsImpl(), {
          currentIcon: 'add_location_alt',
          iconColor: '#545050',
          iconSize: 48,
          isIconFilled: false,
          strokeWeight: 2,
          opticSize: 24,
          grade: 1,
        }),
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
        // A modelled type, so built rather than written as a literal
        point: Object.assign(new IconSettingsImpl(), {
          currentIcon: 'add_location_alt',
          iconColor: '#545050',
          iconSize: 48,
          isIconFilled: false,
          strokeWeight: 2,
          opticSize: 24,
          grade: 1,
        }),
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
        // A modelled type, so built rather than written as a literal
        point: Object.assign(new IconSettingsImpl(), {
          currentIcon: 'add_location_alt',
          iconColor: '#545050',
          iconSize: 48,
          isIconFilled: false,
          strokeWeight: 2,
          opticSize: 24,
          grade: 1,
        }),
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

/*
 * The style being renamed, by id.
 *
 * One at a time, so the name in the tree is a label until it is clicked
 * and an input while it is being written - which is what the render-less
 * value component this replaced was doing, once per row.
 */
const editingName = ref<string | undefined>(undefined)

/**
 * What the selected renderer can be set up with.
 *
 * An observation renderer has only its own settings; a thing renderer can
 * be told how often to look again; a datastream renderer is placed against
 * the thing or its observed area. Everything else is conditions and the
 * two stylers.
 */
const tabNames = computed<string[]>(() => {
  const selected = selection.value
  if (!selected) return []
  if (selected.component && !selected.datastream) return ['Settings']
  if (layerModel.value?.type === 'OGCSTA') {
    return selected.thing
      ? ['Conditions', 'Points', 'Areas', 'Auto-update']
      : ['Conditions', 'Points', 'Areas', 'Placement']
  }
  return ['Conditions', 'Points', 'Areas']
})

const tabs = computed(() => tabNames.value.map((label) => ({ id: label, label })))

/* The tabs are addressed by name; everything below still counts them. */
const activeTab = computed<string>({
  get: () => tabNames.value[tabNo.value] ?? tabNames.value[0] ?? '',
  set: (label: string) => {
    const at = tabNames.value.indexOf(label)
    tabNo.value = at >= 0 ? at : 0
  },
})
</script>

<template>

  <DModal v-model="showModal" size="lg" title="Styles">
    <div class="tree_detail">
      <div class="tree">
        <div class="menu">

          <div class="menuitem">
            <div class="checked">
              <DButton intent="quiet" title="Add style" @click="addStyle">
                <DIcon name="add" size="sm" />
              </DButton>
            </div>
          </div>
          <DDivider />
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
                <DIcon
                  name="check"
                  size="sm"
                  :tone="layerModel?.styleIds?.includes(style.id) ? 'color-accent' : 'color-divider'"
                />
              </div>
              <div class="icon">
                <span class="marked">
                  <DIcon name="style" size="sm" />
                  <span class="marked__tag">Th</span>
                </span>
              </div>
              <div class="text">
                <input
                  v-if="editingName === style.id"
                  v-model="style.name"
                  class="item__input"
                  @blur="editingName = undefined"
                  @keyup.enter="editingName = undefined"
                >
                <span v-else @click="editingName = style.id">{{ style.name }}</span>

              </div>
              <div class="options">
                <template v-if="layerModel?.type =='OGCSTA' && (style as IRenderer)?.thing">
                  <DButton intent="quiet" title="Add datastream style" @click="addDSStyle">
                    <DIcon name="add" size="sm" />
                  </DButton>
                </template>
                <DButton intent="quiet" title="Delete style" @click="confirmDeleteStyle(style)">
                  <DIcon name="delete" size="sm" />
                </DButton>
              </div>
            </div>
            <template v-if="(style as IRenderer)?.thing">
              <div class="childs">
                <div v-for="substyle in (style as IRenderer)?.ds_renderer" :key="substyle.id" :class="{'active':substyle.id==(selection?.id)}" class="menuitem"
                      @click="selection=substyle">
                  <div></div>
                  <div class="icon">
                    <span class="marked">
                      <DIcon name="settings" size="sm" />
                      <span class="marked__tag">DS</span>
                    </span>
                  </div>
                  <div class="text">
                    <input
                      v-if="editingName === substyle.id"
                      v-model="substyle.name"
                      class="item__input"
                      @blur="editingName = undefined"
                      @keyup.enter="editingName = undefined"
                    >
                    <span v-else @click="editingName = substyle.id">{{ substyle.name }}</span>

                  </div>
                  <div class="options">
                    <DButton intent="quiet" title="Add observation" @click="promptAddObservation(substyle)">
                      <DIcon name="add" size="sm" />
                    </DButton>
                    <DButton intent="quiet" title="Delete datastream style" @click="()=>{
                        const parentStyle = style as IRenderer;
                        const index = parentStyle.ds_renderer.indexOf(substyle);
                        if(index !== -1){
                          parentStyle.ds_renderer.splice(index, 1);
                          if(selection?.id === substyle.id) selection = undefined;
                        }
                      }">
                      <DIcon name="delete" size="sm" />
                    </DButton>
                  </div>
                </div>

                <!-- Observation renderers (third level) -->
                <template v-for="substyle in (style as IRenderer)?.ds_renderer" :key="'obs-parent-'+substyle.id">
                  <div v-if="substyle.observations && substyle.observations.length > 0" class="childs">
                    <div v-for="(obs, obsIdx) in substyle.observations" :key="'obs-'+substyle.id+'-'+obsIdx" :class="{'active':obs===(selection)}" class="menuitem"
                          @click="selection=obs">
                      <div></div>
                      <div class="icon">
                        <span class="marked">
                          <DIcon name="visibility" size="sm" />
                          <span class="marked__tag">Obs</span>
                        </span>
                      </div>
                      <div class="text">
                        {{ obs.component || 'Observation' }}
                      </div>
                      <div class="options">
                        <DButton intent="quiet" title="Delete observation" @click="()=>{
                            if (!substyle.observations) return;
                            const index = substyle.observations.indexOf(obs);
                            if(index !== -1){
                              substyle.observations.splice(index, 1);
                              if(selection === obs) selection = undefined;
                            }
                          }">
                          <DIcon name="delete" size="sm" />
                        </DButton>
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
        <DTabs v-model="activeTab" :tabs="tabs" label="Renderer settings" />
        <!--<RenderPropertyListItemDataStream v-model="model"></RenderPropertyListItemDataStream>-->
        <div v-if="selection" class="content">
          <div class="scroller">
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
          </div>


        </div>
        <div v-else class="content center">
          <DIcon name="style" size="lg" class="empty__icon" />
          <span><span class="underline blue" @click="addStyle">create</span> or select Sytle to edit</span>
        </div>

      </div>
    </div>
    <template #actions>
      <DButton @click="showModal = false">Close</DButton>
    </template>
  </DModal>

  <!-- Delete Confirmation Modal -->
  <DModal
    v-model="showDeleteConfirmation"
    title="Delete style"
    size="sm"
    @cancel="cancelDelete"
  >
    <div class="prose">
      <p><strong>Warning:</strong> This style "{{ styleToDelete?.name }}" is used by {{ affectedLayers.length }} layer(s):</p>
      <ul style="margin: 10px 0; padding-left: 20px;">
        <li v-for="(layer, index) in affectedLayers" :key="index">
          {{ layer.name || layer.title || 'Unnamed Layer' }}
        </li>
      </ul>
      <p>If you delete this style, it will be removed from all these layers.</p>
      <p><strong>Do you want to continue?</strong></p>
    </div>
    <template #actions>
      <DButton intent="quiet" @click="cancelDelete">Cancel</DButton>
      <DButton intent="danger" @click="performDelete(styleToDelete)">Delete</DButton>
    </template>
  </DModal>

  <!-- Observation Renderer Type Selection Modal -->
  <DModal
    v-model="showObservationTypeDialog"
    title="Select observation renderer"
    size="md"
  >
    <div class="prose">
      <p>Choose which type of renderer to use for observations:</p>
      <div class="choices">
        <DButton
          v-for="[id, desc] in getAllDataPointRenderers()"
          :key="id"
          class="choice"
          @click="addObservationRenderer(id)"
        >
          <span class="choice__text">
            <span class="choice__name">{{ desc.name }}</span>
            <span class="choice__what">{{ desc.description }}</span>
          </span>
        </DButton>
      </div>
    </div>
  </DModal>
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
  max-height: 500px;
  overflow-y: auto;
}

.detail {
  border-left: 1px solid var(--color-divider);
}

/*
 * An icon with a two-letter tag in its corner: which kind of renderer a
 * row is - a thing, a datastream, an observation - without a word of it in
 * the row's own width.
 */
.marked {
  position: relative;
  display: inline-flex;
}

.marked__tag {
  position: absolute;
  top: -6px;
  right: -10px;
  padding: 0 3px;
  border-radius: 7px;
  background: var(--color-raised);
  color: var(--color-dim);
  font-family: var(--font-sans);
  font-size: 9px;
  line-height: 14px;
}

.item__input {
  width: 100%;
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-sm, 3px);
  background: var(--color-pane);
  color: var(--color-fg);
  font: inherit;
  padding: 1px 4px;
}

.prose {
  padding: 4px 2px;
  color: var(--color-fg);
  line-height: 1.5;
}

.choices {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
}

.choice {
  justify-content: flex-start;
  height: auto;
  padding: 8px 10px;
}

.choice__text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: left;
}

.choice__name {
  font-weight: 600;
}

.choice__what {
  font-size: var(--text-xs);
  opacity: 0.75;
}

.empty__icon {
  font-size: 74px;
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
    background-color: var(--color-raised);
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

  /* The panel scrolls inside the dialog; main.css paints the bar */
  .scroller {
    min-height: 100%;
    max-height: 100%;
    overflow-y: auto;
  }

  &.center {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    color: var(--color-dim);
  }
}

.underline {
  cursor: pointer;
}

.blue {
  color: var(--color-accent);
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
