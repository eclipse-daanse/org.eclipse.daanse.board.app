<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<script lang="ts" setup>
import { DChip, DDivider, DModal, DSwitch } from 'org.eclipse.daanse.board.app.ui.vue.controls'

import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'
import { reactive, ref, watch } from 'vue'
import { type Filter, type Format, Formats, type MapSection } from '../queryBuilder/FilterAPI'

const toogle = ref<boolean>(false)
const run = () => {
  toogle.value = !toogle.value
}
defineExpose({
  run
})

const model = defineModel<Filter[]>({
  default: reactive([
    { formats: {} } as Format, { mapSection: {} } as MapSection])
})

const formats = ref([
  { name: 'OGC', key: Formats.WMS, active: true },
  { name: 'SensorThings', key: Formats.OGCSTA, active: true },
  { name: 'XMLA', key: Formats.XMLA, active: true },
  { name: 'CSV', key: Formats.CSV, active: true },
  { name: 'JSON', key: Formats.JSON, active: true }
])

const formatFilter = ref<boolean>(false)

const map = ref(null)

const mapSettings = reactive({
  baseMapUrl: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
  zoom: 14,
  attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  center: [50.93115286, 11.60392726],
  map_filter_on: false
})


const init = () => {

  const mapSection: MapSection | undefined = model.value?.find((f: any) => f['mapSection']) as MapSection
  const formats: Format | undefined = model.value?.find((f: any) => f['formats']) as Format
  if (mapSection) {
    mapSettings.map_filter_on = true
    try {
      map.value ?? ({} as any).leafletObject.fitBounds(mapSection.mapSection)
    } catch (e) {

    }
  }
  if (formats) {

    formatFilter.value = true
  }

}
const move = () => {
  let mapSection: MapSection | undefined = model.value?.find((f: any) => f['mapSection']) as MapSection
  if (!mapSection) {
    mapSection = { mapSection: {} } as MapSection
    model.value.push(mapSection)
  }

  mapSection.mapSection = map.value ?? ({} as any).leafletObject.getBounds()

}
watch(() => mapSettings.map_filter_on, (val) => {
  const mapSection: MapSection | undefined = model.value?.find((f: any) => f['mapSection']) as MapSection
  if (!val) {
    if (mapSection) {
      const pos = model.value.indexOf(mapSection)
      if (pos != -1) model.value.splice(pos)
      //mapSection.mapSection = undefined;
    }
  }
})

const prevented = ref(false)
watch(formatFilter, (val) => {
  const formatsInModel: Format | undefined = model.value?.find((f: any) => f['formats']) as Format
  if (prevented.value) {
    prevented.value = false
    return
  }
  if (formatsInModel?.formats) {
    if (val) {
      //model.value!.formats = formats.value.map(e=>e.key);
      formats.value.forEach(e => e.active = false)

      formatsInModel.formats.forEach(e => {
        formats.value.findLast((f: any) => f.key == e)!.active = true
      })
    } else {
      //formatsInModel.formats = undefined;
      const pos = model.value.indexOf(formatsInModel)
      if (pos != -1) model.value.splice(pos)

      formats.value.forEach(e => e.active = true)
    }
  }
})

const toogleFormat = (format: any) => {
  let formatsInModel: Format | undefined = model.value?.find((f: any) => f['formats']) as Format
  if (!formatsInModel) {
    formatsInModel = { formats: [] } as Format
    model.value.push(formatsInModel)
  }
  if (formatFilter.value) {

    format.active = !format.active

    const index = formatsInModel.formats!.indexOf(format.key)
    if (index == -1) {
      formatsInModel.formats?.push(format.key)
    } else {
      formatsInModel.formats?.splice(index)
    }
    if (formatsInModel.formats.length == 0) {
      formatFilter.value = false
    }

  } else {
    prevented.value = true
    formats.value.forEach(e => e.active = false)
    format.active = true
    formatsInModel!.formats = [format.key]
    formatFilter.value = true
  }
}


</script>

<template>
  <DModal v-model="toogle" title="Filter" size="md" @open="init">
    <div class="filters">
      <div class="line">
        <span class="line__label">Format</span>
        <DSwitch v-model="formatFilter" label="Nur ausgewählte Formate" />
      </div>

      <!-- A chip per format, dimmed when it is not in the filter. It used
           to carry a colour of its own; the name is what identifies it. -->
      <div class="list_of_formats">
        <DChip
          v-for="format in formats"
          :key="format.key"
          :tone="format.active ? 'accent' : 'neutral'"
          class="pointer"
          @click="toogleFormat(format)"
        >
          {{ format.name }}
        </DChip>
      </div>

      <DDivider />

      <div class="line">
        <span class="line__label">Region</span>
        <DSwitch v-model="mapSettings.map_filter_on" label="Nur im Kartenausschnitt" />
      </div>

      <div class="map">
        <l-map
          id="map"
          ref="map"
          :center="mapSettings.center as any"
          :max-zoom="21"
          :useGlobalLeaflet="true"
          :zoom="mapSettings.zoom as number"
          style="height: 100%"
          @move="() => { move(); mapSettings.map_filter_on = true }"
        >
          <l-tile-layer
            :attribution="mapSettings.attribution"
            :options="{ maxNativeZoom: 19, maxZoom: 25 }"
            :url="mapSettings.baseMapUrl"
          />
        </l-map>
      </div>
    </div>
  </DModal>
</template>

<style lang="scss" scoped>
.filters {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.list_of_formats {
  display: flex;
  flex-direction: row;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.map {
  width: 100%;
  height: 250px;
  position: relative;
}

.line {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
}

.line__label {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-fg);
}

.pointer {
  cursor: pointer;
}
</style>
