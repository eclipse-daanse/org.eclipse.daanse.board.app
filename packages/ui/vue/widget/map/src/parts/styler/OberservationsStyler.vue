<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
-->
<script lang="ts" setup>

import { ERefType, type IDSRenderer } from '../../api/Renderer'
import { computed, type ModelRef, reactive, ref } from 'vue'
import { useDataPointRegistry } from '../../composables/datapointRegistry'
import { LIcon, LMarker } from '@vue-leaflet/vue-leaflet'
import MapPreviewPoint from './../../parts/MapPreviewPoint.vue'
import {IconWidget}  from 'org.eclipse.daanse.board.app.ui.vue.widget.icon'

const model: ModelRef<IDSRenderer> = defineModel<IDSRenderer>({ required: true })

const { getAll, getById } = useDataPointRegistry()

const rendererOptions = computed(() => {
    let ret: any = []
    getAll().forEach((val, key) => ret.push({ name: val.name, id: val.namespace + val.qualifiedName }))
    return ret
  }
)
const dataPointcomponentDesc = computed(() => {
  return getById(value.value)
})
const value = computed({
  get: () => (model.value as any)?.observations?.[0]?.component,
  set: (val: string) => {
    let m = model.value as any
    if (!m.observations) m.observations = []
    if (!m.observations[0]) m.observations[0] = { setting: {}, component: val }
    else m.observations[0].component = val
    model.value = m
  }
})
</script>

<template>

  <div class="max-w-xs">
    <VaSelect
      v-if="rendererOptions"
      v-model="value"
      :options="rendererOptions"
      label="renderer"
      placeholder="Select an option"
      text-by="name"
      value-by="id"
    />


  <template v-if="dataPointcomponentDesc">


    <div class="flex flex-col md6 pa-3">
      <template v-if="dataPointcomponentDesc.setupComponent && model.observations && model.observations[0]">
        <component :is="dataPointcomponentDesc.setupComponent"
          v-model="(model.observations[0] as any).setting"></component>
      </template>

    </div>
  </template>
      <div class="flex flex-col md6 pa-3">
        <MapPreviewPoint ref="MapPrev3" id="mapf">

          <l-marker
            :lat-lng="[50.92828047934907,11.587408017353823]">
            <l-icon class-name="someExtraClass">


              <template v-if="model.renderer.point_render_as=='icon'">
                <div class="pin icon round">
                  <div class="inner">
                    <IconWidget :config="model.renderer.point" v-model:configv="model.renderer.point"
                                :datasourceId="''"></IconWidget>
                    <!--<IconWidget ref="iconMapComponent2" v-bind="model.renderer.point"></IconWidget>-->
                  </div>

                </div>


              </template>
              <template v-if="model.renderer.point_render_as=='prop'">
                <div class="pin round contain">
                  <div class="inner">
                    {{ model.renderer.point_prop }}
                  </div>
                </div>
              </template>

              <template v-if="dataPointcomponentDesc && model.observations && model.observations[0]">
              <component :is="dataPointcomponentDesc.component" ref="valuedatalabelrenderer"
                          :config="(model.observations[0] as any).setting"
                          :data="dataPointcomponentDesc.example"></component>
              </template>
            </l-icon>
          </l-marker>
        </MapPreviewPoint>
      </div>

  </div>
  <div></div>


</template>

<style>
#mapf{
  position: absolute;
  right: 15px;
  width: 250px;
  top: 5px;
}
#map_t{
  min-height: 250px;
}
#map_t{
  min-height: 250px;
}

</style>
