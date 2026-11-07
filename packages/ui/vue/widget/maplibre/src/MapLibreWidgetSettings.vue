<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0
Contributors:
    Smart City Jena
-->
<script setup lang="ts">
/**
 * The settings of the 3D map (#1266): base map, view, 3D, and the data
 * layers. Hand-written because the layers are lists of contained objects,
 * which the form model cannot show yet.
 *
 * The settings are adopted and written back at once, as the Leaflet map's
 * settings do (#1262), so the board and the preview hold the same
 * instance; every field writes into it, and the adapter of the widget
 * hears the change.
 */
import { computed, inject, onUnmounted, reactive, ref, watch, type ShallowRef } from 'vue'
import { identifier, type DatasourceRepository } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { useEObject, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { DButton, DCheckbox, DColorInput, DIcon, DIconPicker, DInput, DSelect, DSlider } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import type { MapLibreSettings } from './gen/MapLibreSettings'
import type { ThingLayer } from './gen/ThingLayer'
import { modelledSettings, newColorMapping, newGeoJsonLayer, newThingLayer, newModelLayer, newWmsLayer, newWmsService } from './settingsModel'
import type { WmsLayer } from './gen/WmsLayer'
import type { WmsService } from './gen/WmsService'
import type { ModelLayer } from './gen/ModelLayer'
import { loadModel, modelStatus } from './models/modelLoader'
import { placing } from './models/placementMode'
import { MaplibreFactory } from './gen/MaplibreFactory'
import { WmsLayerList, useOGCService } from 'org.eclipse.daanse.board.app.ui.vue.common.map'

const props = defineProps<{ dataSources?: { uid: string; name?: string; type?: string }[] }>()
const stored = defineModel<MapLibreSettings>({ required: true })
const { t } = useTranslation('maplibre')

const adoptedAtOpen = modelledSettings(stored.value)
if (adoptedAtOpen !== stored.value) stored.value = adoptedAtOpen
const settings = useEObject(() => modelledSettings(stored.value)) as ShallowRef<MapLibreSettings>

const repository = inject<DatasourceRepository | undefined>(identifier, undefined)
/* The OGC STA sources to choose from; the widget's own when none is chosen. */
const sources = computed(() => {
  const listed = props.dataSources ?? repository?.getDatasources?.().map((d) => ({ uid: d.uid, name: d.name, type: d.type })) ?? []
  return [
    { value: '', label: t('Settings.widgetSource') },
    ...listed.filter((d) => d.type === 'ogcsta').map((d) => ({ value: d.uid, label: d.name || d.uid })),
  ]
})

const pointStyles = computed(() => [
  { value: 'circle', label: t('Settings.pointStyles.circle') },
  { value: 'pin', label: t('Settings.pointStyles.pin') },
])

const encodings = computed(() => [
  { value: 'terrarium', label: 'Terrarium' },
  { value: 'mapbox', label: 'Mapbox (Terrain-RGB)' },
])

/** A number field writes a number; an empty or unreadable one leaves the value. */
function setNumber(target: object, name: string, value: unknown) {
  const n = Number(value)
  if (value === '' || value === null || !Number.isFinite(n)) return
  ;(target as Record<string, number>)[name] = n
}

const namesOf = (layer: ThingLayer) => layer.thingNames.toArray().join(', ')
function setNames(layer: ThingLayer, value: unknown) {
  const names = String(value ?? '')
    .split(',')
    .map((n) => n.trim())
    .filter(Boolean)
  layer.thingNames.clear()
  for (const name of names) layer.thingNames.add(name)
}

/* ------------------------------------------------------------- WMS (#1274) */

const ogc = useOGCService()
/** The layers a service offers, by service id, once its capabilities were read. */
const offered = reactive<Record<string, { name: string; title: string }[]>>({})
/** The offered layers of a service, or undefined while they were not read. */
const offeredOf = (service: { id?: string | null }): { name: string; title: string }[] | undefined =>
  offered[service.id ?? '']
/** An example address for the GeoJSON field. */
const geoJsonExample = 'https://example.org/areas.geojson'
const loading = ref('')
const newServiceUrl = ref('')
const serviceError = ref('')

/** The named layers of a client - a group without a name cannot be asked for. */
const namedLayers = (client: { getLayers?: () => unknown }) =>
  ((client.getLayers?.() ?? []) as { name?: string; title?: string }[])
    .filter((layer) => !!layer.name)
    .map((layer) => ({ name: String(layer.name), title: String(layer.title ?? layer.name) }))

async function addService() {
  const url = newServiceUrl.value.trim()
  if (!url) return
  loading.value = 'new'
  serviceError.value = ''
  try {
    const client = await ogc.createServiceWMS(url)
    const service = newWmsService(url, client?._info?.title ?? '', client?.getOperationUrl?.('GetMap') ?? '')
    settings.value.services.add(service)
    offered[service.id!] = namedLayers(client)
    newServiceUrl.value = ''
  } catch {
    serviceError.value = t('Settings.wmsFailed')
  } finally {
    loading.value = ''
  }
}

async function toggleOffered(service: WmsService) {
  const id = service.id ?? ''
  if (offered[id]) {
    delete offered[id]
    return
  }
  loading.value = id
  try {
    offered[id] = namedLayers(await ogc.createServiceWMS(String(service.url ?? '')))
  } catch {
    serviceError.value = t('Settings.wmsFailed')
  } finally {
    loading.value = ''
  }
}

function addWmsLayer(service: WmsService, layer: { name: string; title: string }) {
  settings.value.wmsLayers.add(newWmsLayer(String(service.id), layer.name, layer.title))
}

function removeService(service: WmsService) {
  for (const layer of settings.value.wmsLayers.toArray()) {
    if (layer.serviceId === service.id) settings.value.wmsLayers.remove(layer)
  }
  settings.value.services.remove(service)
  delete offered[service.id ?? '']
}

/* The order the list hands back, put into the list by moving entries: the list belongs to the settings. */
function reorderWmsLayers(order: unknown[]) {
  const list = settings.value.wmsLayers
  order.forEach((layer, index) => {
    const from = list.indexOf(layer as WmsLayer)
    if (from > -1 && from !== index) list.move(index, from)
  })
}

/* -------------------------------------------------------- 3D models (#1281) */

const modelFormats = computed(() => [
  { value: '', label: t('Settings.models.formats.auto') },
  { value: 'fbx', label: 'FBX' },
  { value: 'gltf', label: 'glTF / GLB' },
])

/* The data sources a model layer can stand on: the ones that answer points (WFS and others with GeoJSON). */
const pointSources = computed(() => {
  const listed = props.dataSources ?? repository?.getDatasources?.().map((d) => ({ uid: d.uid, name: d.name, type: d.type })) ?? []
  return [
    { value: '', label: t('Settings.models.noDatasource') },
    ...listed.filter((d) => ['wfs', 'valhalla', 'rest'].includes(String(d.type))).map((d) => ({ value: d.uid, label: d.name || d.uid })),
  ]
})
function addRule(layer: ModelLayer) {
  const rule = MaplibreFactory.eINSTANCE.createModelRule()
  rule.property = layer.rules.size() ? String(layer.rules.get(layer.rules.size() - 1).property ?? '') : ''
  layer.rules.add(rule)
}

function addModelLayer() {
  settings.value.modelLayers.add(newModelLayer(t('Settings.models.newLayer')))
}
function removeModelLayer(layer: ModelLayer) {
  if (placing.value?.layerId === layer.id) placing.value = null
  settings.value.modelLayers.remove(layer)
}

/* Placing: clicks on the map of these settings - the preview - add, move or remove instances. */
const placingId = computed(() => (placing.value?.settings === settings.value ? placing.value.layerId : undefined))
function togglePlacing(layer: ModelLayer) {
  placing.value = placingId.value === layer.id ? null : { settings: settings.value, layerId: String(layer.id) }
}
onUnmounted(() => {
  if (placing.value?.settings === settings.value) placing.value = null
})

/* The settings load a model as soon as its address is set, to say at once whether it can be read. */
watch(
  () => settings.value.modelLayers.toArray().map((layer) => [String(layer.url ?? '').trim(), layer.format]),
  (wanted) => {
    for (const [url, format] of wanted) if (url) loadModel(String(url), String(format ?? '')).catch(() => undefined)
  },
  { immediate: true, deep: true },
)
function modelError(url: unknown): string | undefined {
  const status = modelStatus[String(url ?? '').trim()]
  if (status?.state !== 'error') return undefined
  if (status.error === 'blocked') return t('Settings.models.errors.blocked')
  if (status.error === 'http') return t('Settings.models.errors.http', { status: status.status })
  return t('Settings.models.errors.format')
}
function modelHint(url: unknown): string {
  const status = modelStatus[String(url ?? '').trim()]
  if (status?.state === 'loading') return t('Settings.models.loading')
  if (status?.state === 'ready') return t('Settings.models.ready')
  return t('Settings.models.urlHint')
}

function addThingLayer() {
  settings.value.thingLayers.add(newThingLayer(t('Settings.newThingLayer')))
}
function addGeoJsonLayer() {
  settings.value.geoJsonLayers.add(newGeoJsonLayer(t('Settings.newGeoJsonLayer')))
}
function addColor(layer: ThingLayer) {
  layer.colors.add(newColorMapping('', '#888888'))
}
</script>

<template>
  <section class="settings-section" data-section-id="base" :data-section="t('Settings.sections.base')">
    <div class="section__head">
      <DIcon name="map" size="sm" />
      <span class="section__title">{{ t('Settings.sections.base') }}</span>
    </div>
    <div class="settings-container">
      <DInput v-model="settings.styleUrl" :label="t('Settings.styleUrl')" :hint="t('Settings.styleUrlHint')" />
      <DInput v-model="settings.darkStyleUrl" :label="t('Settings.darkStyleUrl')" />
      <DInput
        v-model="settings.rasterUrl"
        :label="t('Settings.rasterUrl')"
        placeholder="https://tile.example.org/{z}/{x}/{y}.png"
        :hint="t('Settings.rasterUrlHint')"
      />
      <DSlider v-model="settings.rasterOpacity" :label="t('Settings.rasterOpacity')" :min="0" :max="1" :step="0.05" />
      <DCheckbox v-model="settings.rasterInvertDark" :label="t('Settings.rasterInvertDark')" />
      <DInput v-model="settings.rasterAttribution" :label="t('Settings.rasterAttribution')" />
      <DInput v-model="settings.attribution" :label="t('Settings.attribution')" :rows="2"
        placeholder="© OpenStreetMap contributors" :hint="t('Settings.attributionHint')" />
      <DCheckbox v-model="settings.attributionCompact" :label="t('Settings.attributionCompact')" />
    </div>
  </section>

  <section class="settings-section" data-section-id="wms" :data-section="t('Settings.sections.wms')">
    <div class="section__head">
      <DIcon name="layers" size="sm" />
      <span class="section__title">{{ t('Settings.sections.wms') }}</span>
    </div>
    <div class="settings-container">
      <WmsLayerList :layers="settings.wmsLayers.toArray()" @reorder="reorderWmsLayers"
        @remove="(layer) => settings.wmsLayers.remove(layer as WmsLayer)" />

      <div v-for="service in settings.services.toArray()" :key="service.id" class="wms-service">
        <div class="wms-service__head">
          <DIcon name="cable" size="sm" />
          <span class="wms-service__title" :title="service.url">{{ service.title || service.url }}</span>
          <DButton intent="quiet" size="sm" :busy="loading === service.id" :title="t('Settings.wmsShowLayers')"
            @click="toggleOffered(service)">
            <DIcon :name="offeredOf(service) ? 'expand_less' : 'expand_more'" size="sm" />
          </DButton>
          <DButton intent="quiet" size="sm" :title="t('Settings.remove')" @click="removeService(service)">
            <DIcon name="delete" size="sm" />
          </DButton>
        </div>
        <ul v-if="offeredOf(service)" class="wms-service__layers">
          <li v-for="offer in offeredOf(service)" :key="offer.name" class="wms-service__layer"
            @click="addWmsLayer(service, offer)">
            <DIcon name="add" size="sm" />{{ offer.title || offer.name }}
          </li>
        </ul>
      </div>

      <div class="row">
        <DInput v-model="newServiceUrl" :label="t('Settings.wmsUrl')" placeholder="https://kartenportal.jena.de/mapproxy/service"
          :error="serviceError" />
        <DButton :busy="loading === 'new'" :disabled="!newServiceUrl" @click="addService">
          <DIcon name="add" size="sm" />{{ t('Settings.add') }}
        </DButton>
      </div>
    </div>
  </section>

  <section class="settings-section" data-section-id="view" :data-section="t('Settings.sections.view')">
    <div class="section__head">
      <DIcon name="3d_rotation" size="sm" />
      <span class="section__title">{{ t('Settings.sections.view') }}</span>
    </div>
    <div class="settings-container">
      <div class="row">
        <DInput type="number" :model-value="settings.centerLat" :label="t('Settings.centerLat')" :step="0.0001"
          @update:model-value="(v) => setNumber(settings, 'centerLat', v)" />
        <DInput type="number" :model-value="settings.centerLon" :label="t('Settings.centerLon')" :step="0.0001"
          @update:model-value="(v) => setNumber(settings, 'centerLon', v)" />
      </div>
      <DSlider v-model="settings.zoom" :label="t('Settings.zoom')" :min="1" :max="20" :step="0.5" />
      <DSlider v-model="settings.pitch" :label="t('Settings.pitch')" :min="0" :max="85" :step="1" suffix="°" />
      <DSlider v-model="settings.bearing" :label="t('Settings.bearing')" :min="-180" :max="180" :step="1" suffix="°" />
      <DCheckbox v-model="settings.interactive" :label="t('Settings.interactive')" />
    </div>
  </section>

  <section class="settings-section" data-section-id="threeD" :data-section="t('Settings.sections.threeD')">
    <div class="section__head">
      <DIcon name="apartment" size="sm" />
      <span class="section__title">{{ t('Settings.sections.threeD') }}</span>
    </div>
    <div class="settings-container">
      <DCheckbox v-model="settings.buildings" :label="t('Settings.buildings')" />
      <template v-if="settings.buildings">
        <DColorInput v-model="settings.buildingColor" :label="t('Settings.buildingColor')" />
        <DSlider v-model="settings.buildingOpacity" :label="t('Settings.buildingOpacity')" :min="0" :max="1" :step="0.05" />
        <DInput v-model="settings.buildingSourceLayer" :label="t('Settings.buildingSourceLayer')" />
      </template>
      <DInput v-model="settings.terrainUrl" :label="t('Settings.terrainUrl')" :hint="t('Settings.terrainUrlHint')" />
      <template v-if="settings.terrainUrl">
        <DSelect v-model="settings.terrainEncoding" :options="encodings" value-key="value" label-key="label"
          :label="t('Settings.terrainEncoding')" />
        <DSlider v-model="settings.terrainExaggeration" :label="t('Settings.terrainExaggeration')" :min="0" :max="5" :step="0.1" />
      </template>
      <DCheckbox v-model="settings.sky" :label="t('Settings.sky')" />
      <DColorInput v-model="settings.selectionColor" :label="t('Settings.selectionColor')" />
    </div>
  </section>

  <section class="settings-section" data-section-id="things" :data-section="t('Settings.sections.things')">
    <div class="section__head">
      <DIcon name="sensors" size="sm" />
      <span class="section__title">{{ t('Settings.sections.things') }}</span>
      <DButton intent="quiet" size="sm" @click="addThingLayer"><DIcon name="add" size="sm" />{{ t('Settings.add') }}</DButton>
    </div>
    <div class="settings-container">
      <p v-if="settings.thingLayers.size() === 0" class="note">{{ t('Settings.noThingLayers') }}</p>
      <details v-for="(layer, index) in settings.thingLayers.toArray()" :key="layer.id ?? index" class="layer" open>
        <summary class="layer__head">
          <span class="layer__name">{{ layer.name || layer.id }}</span>
          <DButton intent="quiet" size="sm" :title="t('Settings.remove')" @click.prevent="settings.thingLayers.remove(layer)">
            <DIcon name="delete" size="sm" />
          </DButton>
        </summary>
        <div class="settings-container">
          <DInput v-model="layer.name" :label="t('Settings.layerName')" />
          <DCheckbox v-model="layer.visible" :label="t('Settings.visible')" />
          <DSelect v-model="layer.datasourceId" :options="sources" value-key="value" label-key="label"
            :label="t('Settings.datasource')" />
          <DInput :model-value="namesOf(layer)" :label="t('Settings.thingNames')" placeholder="Reference Area*"
            :hint="t('Settings.thingNamesHint')" @change="(e: Event) => setNames(layer, (e.target as HTMLInputElement).value)" />
          <DInput v-model="layer.colorSuffix" :label="t('Settings.colorSuffix')" placeholder="~referenceArea~color"
            :hint="t('Settings.colorSuffixHint')" />
          <div v-for="(mapping, at) in layer.colors.toArray()" :key="at" class="row">
            <DInput v-model="mapping.code" :label="t('Settings.code')" placeholder="RED" />
            <DColorInput v-model="mapping.color" :label="t('Settings.color')" />
            <DButton intent="quiet" size="sm" :title="t('Settings.remove')" @click="layer.colors.remove(mapping)">
              <DIcon name="delete" size="sm" />
            </DButton>
          </div>
          <DButton size="sm" @click="addColor(layer)"><DIcon name="add" size="sm" />{{ t('Settings.addColor') }}</DButton>
          <DColorInput v-model="layer.fillColor" :label="t('Settings.fillColor')" />
          <DSlider v-model="layer.fillOpacity" :label="t('Settings.fillOpacity')" :min="0" :max="1" :step="0.05" />
          <DColorInput v-model="layer.outlineColor" :label="t('Settings.outlineColor')" />
          <DSelect v-model="layer.pointStyle" :options="pointStyles" value-key="value" label-key="label"
            :label="t('Settings.pointStyle')" />
          <DSlider v-if="layer.pointStyle === 'pin'" v-model="layer.markerSize" :label="t('Settings.markerSize')"
            :min="0.5" :max="3" :step="0.1" />
          <DIconPicker v-if="layer.pointStyle === 'pin'" v-model="layer.markerIcon" :label="t('Settings.markerIcon')"
            :hint="t('Settings.markerIconHint')" />
          <DCheckbox v-model="layer.extrude" :label="t('Settings.extrude')" />
          <template v-if="layer.extrude">
            <DInput v-model="layer.heightSuffix" :label="t('Settings.heightSuffix')" placeholder="~referenceArea~sensorCount" />
            <DInput type="number" :model-value="layer.heightFactor" :label="t('Settings.heightFactor')"
              @update:model-value="(v) => setNumber(layer, 'heightFactor', v)" />
            <DInput type="number" :model-value="layer.baseHeight" :label="t('Settings.baseHeight')"
              @update:model-value="(v) => setNumber(layer, 'baseHeight', v)" />
          </template>
          <DInput type="number" :model-value="layer.refreshSeconds" :label="t('Settings.refreshSeconds')"
            @update:model-value="(v) => setNumber(layer, 'refreshSeconds', v)" />
        </div>
      </details>
    </div>
  </section>

  <section class="settings-section" data-section-id="models" :data-section="t('Settings.sections.models')">
    <div class="section__head">
      <DIcon name="park" size="sm" />
      <span class="section__title">{{ t('Settings.sections.models') }}</span>
      <DButton intent="quiet" size="sm" @click="addModelLayer"><DIcon name="add" size="sm" />{{ t('Settings.add') }}</DButton>
    </div>
    <div class="settings-container">
      <p v-if="settings.modelLayers.size() === 0" class="note">{{ t('Settings.models.none') }}</p>
      <details v-for="(layer, index) in settings.modelLayers.toArray()" :key="layer.id ?? index" class="layer" open>
        <summary class="layer__head">
          <span class="layer__name">{{ layer.name || layer.id }}</span>
          <DButton intent="quiet" size="sm" :title="t('Settings.remove')" @click.prevent="removeModelLayer(layer)">
            <DIcon name="delete" size="sm" />
          </DButton>
        </summary>
        <div class="settings-container">
          <DInput v-model="layer.name" :label="t('Settings.layerName')" />
          <DCheckbox v-model="layer.visible" :label="t('Settings.visible')" />
          <DInput v-model="layer.url" :label="t('Settings.models.url')" placeholder="https://example.org/tree.glb"
            :error="modelError(layer.url)" :hint="modelHint(layer.url)" />
          <DSelect v-model="layer.format" :options="modelFormats" value-key="value" label-key="label"
            :label="t('Settings.models.format')" />
          <DInput type="number" :model-value="layer.scale" :label="t('Settings.models.scale')" :step="0.01"
            :hint="t('Settings.models.scaleHint')" @update:model-value="(v) => setNumber(layer, 'scale', v)" />
          <DSlider v-model="layer.rotation" :label="t('Settings.models.rotation')" :min="0" :max="359" :step="1" suffix="°" />
          <DInput type="number" :model-value="layer.altitudeOffset" :label="t('Settings.models.altitudeOffset')"
            @update:model-value="(v) => setNumber(layer, 'altitudeOffset', v)" />
          <DButton :intent="placingId === layer.id ? 'primary' : 'default'" @click="togglePlacing(layer)">
            <DIcon name="ads_click" size="sm" />{{ placingId === layer.id ? t('Settings.models.placing') : t('Settings.models.place') }}
          </DButton>
          <p v-if="placingId === layer.id" class="note">{{ t('Settings.models.placeHint') }}</p>
          <DSelect v-model="layer.datasourceId" :options="pointSources" value-key="value" label-key="label"
            :label="t('Settings.models.datasource')" :hint="t('Settings.models.datasourceHint')" />
          <template v-if="layer.datasourceId">
            <DInput v-model="layer.heightProperty" :label="t('Settings.models.heightProperty')" placeholder="baumhoehe"
              :hint="t('Settings.models.heightPropertyHint')" />
            <DInput type="number" :model-value="layer.defaultHeight" :label="t('Settings.models.defaultHeight')"
              @update:model-value="(v) => setNumber(layer, 'defaultHeight', v)" />
            <div v-for="(rule, at) in layer.rules.toArray()" :key="at" class="row">
              <DInput v-model="rule.property" :label="t('Settings.models.ruleProperty')" placeholder="gattung_deutsch" />
              <DInput v-model="rule.value" :label="t('Settings.models.ruleValue')" placeholder="Linde" />
              <DColorInput v-model="rule.color" :label="t('Settings.color')" />
              <DInput v-model="rule.url" :label="t('Settings.models.ruleUrl')" :placeholder="t('Settings.models.ruleUrlHint')" />
              <DButton intent="quiet" size="sm" :title="t('Settings.remove')" @click="layer.rules.remove(rule)">
                <DIcon name="delete" size="sm" />
              </DButton>
            </div>
            <DButton size="sm" @click="addRule(layer)"><DIcon name="add" size="sm" />{{ t('Settings.models.addRule') }}</DButton>
          </template>
          <p class="note">{{ t('Settings.models.count', { count: layer.instances.size() }) }}</p>
          <div v-for="instance in layer.instances.toArray()" :key="instance.id" class="row">
            <DInput type="number" :model-value="instance.lat" :label="t('Settings.centerLat')" :step="0.00001"
              @update:model-value="(v) => setNumber(instance, 'lat', v)" />
            <DInput type="number" :model-value="instance.lon" :label="t('Settings.centerLon')" :step="0.00001"
              @update:model-value="(v) => setNumber(instance, 'lon', v)" />
            <DInput type="number" :model-value="instance.scale" :label="t('Settings.models.instanceScale')" :step="0.1"
              @update:model-value="(v) => setNumber(instance, 'scale', v)" />
            <DButton intent="quiet" size="sm" :title="t('Settings.remove')" @click="layer.instances.remove(instance)">
              <DIcon name="delete" size="sm" />
            </DButton>
          </div>
        </div>
      </details>
    </div>
  </section>

  <section class="settings-section" data-section-id="geojson" :data-section="t('Settings.sections.geojson')">
    <div class="section__head">
      <DIcon name="polyline" size="sm" />
      <span class="section__title">{{ t('Settings.sections.geojson') }}</span>
      <DButton intent="quiet" size="sm" @click="addGeoJsonLayer"><DIcon name="add" size="sm" />{{ t('Settings.add') }}</DButton>
    </div>
    <div class="settings-container">
      <p v-if="settings.geoJsonLayers.size() === 0" class="note">{{ t('Settings.noGeoJsonLayers') }}</p>
      <details v-for="(layer, index) in settings.geoJsonLayers.toArray()" :key="layer.id ?? index" class="layer" open>
        <summary class="layer__head">
          <span class="layer__name">{{ layer.name || layer.id }}</span>
          <DButton intent="quiet" size="sm" :title="t('Settings.remove')" @click.prevent="settings.geoJsonLayers.remove(layer)">
            <DIcon name="delete" size="sm" />
          </DButton>
        </summary>
        <div class="settings-container">
          <DInput v-model="layer.name" :label="t('Settings.layerName')" />
          <DCheckbox v-model="layer.visible" :label="t('Settings.visible')" />
          <DInput v-model="layer.url" :label="t('Settings.geoJsonUrl')" :placeholder="geoJsonExample" />
          <DInput v-model="layer.geoJson" :label="t('Settings.geoJson')" :rows="4" />
          <DColorInput v-model="layer.color" :label="t('Settings.color')" />
          <DSlider v-model="layer.opacity" :label="t('Settings.fillOpacity')" :min="0" :max="1" :step="0.05" />
          <DCheckbox v-model="layer.extrude" :label="t('Settings.extrude')" />
          <template v-if="layer.extrude">
            <DInput v-model="layer.heightProperty" :label="t('Settings.heightProperty')" />
            <DInput type="number" :model-value="layer.heightFactor" :label="t('Settings.heightFactor')"
              @update:model-value="(v) => setNumber(layer, 'heightFactor', v)" />
            <DInput type="number" :model-value="layer.baseHeight" :label="t('Settings.baseHeight')"
              @update:model-value="(v) => setNumber(layer, 'baseHeight', v)" />
          </template>
        </div>
      </details>
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

.row {
  display: flex;
  gap: 8px;
  align-items: flex-end;
}

.row > * {
  flex: 1 1 0;
}

.row > button {
  flex: none;
}

.wms-service__head {
  display: flex;
  align-items: center;
  gap: 6px;
}

.wms-service__title {
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wms-service__layers {
  margin: 4px 0 0;
  padding-left: 22px;
  list-style: none;
}

.wms-service__layer {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.wms-service__layer:hover {
  text-decoration: underline;
}

.layer {
  border: 1px solid var(--color-border, #ccc);
  border-radius: 6px;
}

.layer__head {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 6px 10px;
  cursor: pointer;
}

.layer__name {
  flex: 1 1 auto;
  font-weight: 600;
}

.note {
  margin: 0;
  font-size: var(--text-xs);
  color: var(--color-dim);
}
</style>
