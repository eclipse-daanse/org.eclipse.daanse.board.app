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
 * The settings of a WFS data source (#1282): the connection that is the
 * service, the feature type - chosen from what GetCapabilities lists - and
 * how the features are asked for. A service that offers no WFS says so in
 * its own words ("Service unknown or not permitted").
 */
import { computed, ref, watch } from 'vue'
import { DButton, DIcon, DInput, DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { useOGCService } from 'org.eclipse.daanse.board.app.ui.vue.common.map'
import { columnTypesOfSchema, describeFeatureTypePath, exceptionOf, getCapabilitiesPath } from 'org.eclipse.daanse.board.app.lib.datasource.wfs'

const { config, connections } = defineProps<{ config: any; dataSources?: any; connections: any[] }>()
const { t } = useTranslation('datasourceWfs')

const restConnections = computed(() =>
  (connections ?? []).filter((c: any) => c.type === 'rest').map((c: any) => ({ value: c.uid, label: c.name || c.uid })),
)
const connection = computed(() => (connections ?? []).find((c: any) => c.uid === config.connection))
/** The address of the service: the connection's, and the path of these settings. */
const serviceUrl = computed(() => (connection.value ? `${connection.value?.config?.url ?? ''}${config.url ?? ''}` : ''))

const versions = [
  { value: '2.0.0', label: '2.0.0' },
  { value: '1.1.0', label: '1.1.0' },
]

/* The feature types the service lists, once asked. */
const types = ref<{ value: string; label: string }[]>([])
const loading = ref(false)
const error = ref('')
const ogc = useOGCService()

async function readCapabilities() {
  if (!serviceUrl.value) return
  loading.value = true
  error.value = ''
  try {
    // In the GetFeatureInfo mode the layers are those of the WMS (#1282).
    const client = featureInfo.value ? await ogc.createServiceWMS(serviceUrl.value) : await ogc.createServiceWFS(serviceUrl.value)
    const listed = featureInfo.value ? client?.getLayers?.() : client?.getFeatureTypes?.()
    types.value = ((listed ?? []) as { name?: string; title?: string }[])
      .filter((type) => !!type.name)
      .map((type) => ({ value: String(type.name), label: type.title ? `${type.title} (${type.name})` : String(type.name) }))
    if (!types.value.length) error.value = t('Settings.noTypes')
  } catch {
    types.value = []
    // The service's own words, where it sent any.
    try {
      const answer = await (await fetch(`${connection.value?.config?.url ?? ''}${getCapabilitiesPath({ url: config.url })}`)).text()
      error.value = exceptionOf(answer) ?? t('Settings.noWfs')
    } catch {
      error.value = t('Settings.unreachable')
    }
  } finally {
    loading.value = false
  }
}
const featureInfo = computed(() => config.mode === 'getFeatureInfo')
const modes = computed(() => [
  { value: 'wfs', label: t('Settings.modes.wfs') },
  { value: 'getFeatureInfo', label: t('Settings.modes.getFeatureInfo') },
])
watch([serviceUrl, featureInfo], () => void readCapabilities(), { immediate: true })

/* ------------------------------------------------ column types (#1295) */

/*
 * What the properties are: written by hand here, as a data source's
 * settings are a form of their own and a list in it is a list of rows. In
 * the WFS mode they are read from DescribeFeatureType; GetFeatureInfo says
 * nothing about its attributes.
 */
/* i18n-keys: datasourceWfs:Settings.valueTypes.* */
const valueTypes = computed(() => ['string', 'number', 'date', 'boolean'].map((value) => ({ value, label: t(`Settings.valueTypes.${value}`) })))
const columns = computed<any[]>(() => (Array.isArray(config.columnTypes) ? config.columnTypes : []))
function addColumn() {
  config.columnTypes = [...columns.value, { column: '', type: 'number', unit: '', label: '' }]
}
function removeColumn(index: number) {
  config.columnTypes = columns.value.filter((_, at) => at !== index)
}
const describing = ref(false)
async function readColumnTypes() {
  if (!connection.value) return
  describing.value = true
  error.value = ''
  try {
    const answer = await (await fetch(`${connection.value?.config?.url ?? ''}${describeFeatureTypePath({ url: config.url, typeName: config.typeName, version: config.version })}`)).text()
    const read = columnTypesOfSchema(answer)
    if (!read.length) error.value = exceptionOf(answer) ?? t('Settings.noColumns')
    // Units and labels already set stay.
    const kept = new Map(columns.value.map((each) => [each.column, each]))
    config.columnTypes = read.map((each) => ({ unit: '', label: '', ...kept.get(each.column), ...each }))
  } catch {
    error.value = t('Settings.unreachable')
  } finally {
    describing.value = false
  }
}

/** A number field writes a number; empty writes the default. */
function setNumber(name: string, value: unknown, fallback: number) {
  const n = Number(value)
  config[name] = value === '' || value === null || !Number.isFinite(n) ? fallback : n
}
</script>

<template>
  <div class="wfs-settings">
    <DSelect v-model="config.connection" :options="restConnections" value-key="value" label-key="label"
      :label="t('Fields.connection')" :hint="t('Hints.connection')" />
    <DInput v-model="config.url" :label="t('Fields.url')" :hint="t('Hints.url')" placeholder="" />
    <DSelect :model-value="config.mode || 'wfs'" :options="modes" value-key="value" label-key="label" :label="t('Fields.mode')"
      :hint="t('Hints.mode')" @update:model-value="(v) => (config.mode = v)" />
    <div class="wfs-settings__row">
      <DSelect v-if="types.length" v-model="config.typeName" :options="types" value-key="value" label-key="label"
        :label="t('Fields.typeName')" />
      <DInput v-else v-model="config.typeName" :label="t('Fields.typeName')" placeholder="baumbestand:strassenbaeume" />
      <DButton intent="quiet" :busy="loading" :title="t('Settings.reload')" @click="readCapabilities">
        <DIcon name="refresh" size="sm" />
      </DButton>
    </div>
    <p v-if="error" class="wfs-settings__error">{{ error }}</p>
    <template v-if="!featureInfo">
      <DSelect v-model="config.version" :options="versions" value-key="value" label-key="label" :label="t('Fields.version')" />
      <DInput v-model="config.outputFormat" :label="t('Fields.outputFormat')" placeholder="application/json" :hint="t('Hints.outputFormat')" />
      <DInput v-model="config.srsName" :label="t('Fields.srsName')" placeholder="EPSG:4326" />
    </template>
    <template v-else>
      <DInput type="number" :model-value="config.tileSize" :label="t('Fields.tileSize')" :hint="t('Hints.tileSize')" :step="0.005"
        @update:model-value="(v) => setNumber('tileSize', v, 0.01)" />
      <DInput type="number" :model-value="config.pointTolerance" :label="t('Fields.pointTolerance')"
        @update:model-value="(v) => setNumber('pointTolerance', v, 70)" />
    </template>
    <DInput type="number" :model-value="config.maxFeatures" :label="t('Fields.maxFeatures')" :hint="t('Hints.maxFeatures')"
      @update:model-value="(v) => setNumber('maxFeatures', v, 1000)" />
    <DInput v-model="config.bbox" :label="t('Fields.bbox')" placeholder="13.44,52.44,13.46,52.45" :hint="t('Hints.bbox')" />
    <section class="wfs-settings__columns">
      <div class="wfs-settings__head">
        <span>{{ t('Settings.columnTypes') }}</span>
        <DButton v-if="!featureInfo" intent="quiet" size="sm" :busy="describing" :title="t('Settings.readColumns')" @click="readColumnTypes">
          <DIcon name="schema" size="sm" />
        </DButton>
        <DButton intent="quiet" size="sm" :title="t('Settings.addColumn')" @click="addColumn"><DIcon name="add" size="sm" /></DButton>
      </div>
      <div v-for="(column, index) in columns" :key="index" class="wfs-settings__column">
        <DInput v-model="column.column" :label="t('Fields.column')" />
        <DSelect v-model="column.type" :options="valueTypes" value-key="value" label-key="label" :label="t('Fields.type')" />
        <DInput v-model="column.unit" :label="t('Fields.unit')" placeholder="m" />
        <DButton intent="quiet" size="sm" :title="t('Settings.removeColumn')" @click="removeColumn(index)"><DIcon name="delete" size="sm" /></DButton>
      </div>
    </section>
    <DInput v-if="!featureInfo" v-model="config.filter" :label="t('Fields.filter')" placeholder="gattung_deutsch='Linde'" :hint="t('Hints.filter')" />
  </div>
</template>

<style scoped>
.wfs-settings {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.wfs-settings__row {
  display: flex;
  gap: 8px;
  align-items: flex-end;
}

.wfs-settings__row > :first-child {
  flex: 1 1 auto;
}

.wfs-settings__columns {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.wfs-settings__head {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
}

.wfs-settings__head > span {
  flex: 1 1 auto;
}

/* One column type per block: no row wider than the settings. */
.wfs-settings__column {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 6px 8px;
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-xs, 4px);
}

.wfs-settings__column > button {
  align-self: flex-end;
}

.wfs-settings__error {
  margin: -8px 0 0;
  color: var(--color-err);
  font-size: var(--text-sm);
}
</style>
