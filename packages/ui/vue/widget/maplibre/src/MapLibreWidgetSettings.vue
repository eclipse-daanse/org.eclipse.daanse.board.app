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
import { computed, inject, type ShallowRef } from 'vue'
import { identifier, type DatasourceRepository } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { useEObject, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { DButton, DCheckbox, DColorInput, DIcon, DInput, DSelect, DSlider } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import type { MapLibreSettings } from './gen/MapLibreSettings'
import type { ThingLayer } from './gen/ThingLayer'
import { modelledSettings, newColorMapping, newGeoJsonLayer, newThingLayer } from './settingsModel'

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
        placeholder="https://kartenportal.jena.de/mapproxy/service"
        :hint="t('Settings.rasterUrlHint')"
      />
      <DInput v-model="settings.rasterLayers" :label="t('Settings.rasterLayers')" placeholder="stadtplan_sw" />
      <DSlider v-model="settings.rasterOpacity" :label="t('Settings.rasterOpacity')" :min="0" :max="1" :step="0.05" />
      <DCheckbox v-model="settings.rasterInvertDark" :label="t('Settings.rasterInvertDark')" />
      <DInput v-model="settings.rasterAttribution" :label="t('Settings.rasterAttribution')" />
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
          <DInput v-model="layer.url" :label="t('Settings.geoJsonUrl')" placeholder="https://example.org/areas.geojson" />
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
