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
import { DButton, DCheckbox, DChip, DIcon, DInput, DModal } from 'org.eclipse.daanse.board.app.ui.vue.controls'

import { computed, inject, reactive, ref, watch } from 'vue'
import QueryBuilder from '../queryBuilder/QueryBuilder'
import { useSparQLEndPointManager } from '../sparql/SparqlEndpointRegistry'
import { Formats } from '../queryBuilder/FilterAPI'
import { type ConnectionRepository, identifier } from 'org.eclipse.daanse.board.app.lib.api.connection'
import { DatasourceRepository, IDataRetrieveable, type Datasource, identifier as DataSourceIdentifier } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import SearchResultCard from '../components/Searchcard/SearchResultCard.vue'
import { type Connection } from 'org.eclipse.daanse.board.app.lib.api.connection'
import {
  identifier as WORKSPACE,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { useEList } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import FilterModal from './FilterModal.vue'
import { WidgetRepository, identifier as widgetRepoIdentifier } from 'org.eclipse.daanse.board.app.lib.api.widget'
import { useBoard } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { useRoute } from 'vue-router'

const route = useRoute();
const toogle = ref(false)

/* The board the route points at - widgets and their placement together. */
const board = useBoard(() => (route.params.pageid as string) ?? '')

const run = () => {
  toogle.value = !toogle.value
}
const step = ref(0)

const connectionRepository = inject<ConnectionRepository>(identifier)!
const connections = useEList(inject<Workspace>(WORKSPACE)!, (w) => w.connections)
const dataSources = useEList(inject<Workspace>(WORKSPACE)!, (w) => w.datasources)


const registeredWidgets = inject<WidgetRepository>(widgetRepoIdentifier)!

const widgetOptions = ref<any[]>([]) // z.B. aus einer Factory basierend auf store.type
const selectedWidgets = ref<any[]>([])

const stepsVailid = reactive({
  step0: false,
  step1: true,
  step2: true,
  step3: true
})
/*
 * The four steps, in the order they are taken. What the framework's own
 * stepper added to this was a beforeLeave hook per step that set a
 * hasError flag nothing ever read; whether a step may be left is the
 * stepsVailid entry beside it, which the Weiter button already asks.
 */
const steps = [
  { label: 'Suchen', icon: 'travel_explore' },
  { label: 'Verbindung', icon: 'polyline' },
  { label: 'Datenquelle', icon: 'store' },
  { label: 'Widgets', icon: 'widgets' },
]

const form = reactive({
  searchString: '',
  loading: false
})
const loadModalref = ref<any>(null)
const openFilterModal = async () => {
  return await loadModalref.value?.run(() => {
  })
}
const filterCount = ref('')
const filter = ref([])
const results = ref<Record<string, any>>({})

watch(filter, () => {
  if (!filter.value) {
    filterCount.value = ''
    return
  }
  const lengthOfNonUndefined = Object.keys(filter.value).reduce((accumulator, currentValue, currentIndex) => ((filter.value as any)[currentValue] != undefined) ? accumulator + 1 : accumulator, 0)
  if (lengthOfNonUndefined == 0) {
    filterCount.value = ''
    return
  }
  filterCount.value = lengthOfNonUndefined.toString()
}, { immediate: true, deep: true })

const resultAsTable = computed(() => {
  let reducedTable: any[] = []
  for (let resultKey of Object.keys(results.value!)) {
    reducedTable = reducedTable.concat(
      (results.value as any)[resultKey].results?.bindings?.map((b: any) => {
        b['endpoint'] = { value: (resultKey) }
        return b
      })
    )
  }
  return reducedTable
})
const search = async () => {
  form.loading = true
  const val = form.searchString
  const listOfEndPoints = useSparQLEndPointManager().getAllActiveEndpoints()

  if (listOfEndPoints) {
    results.value = await new QueryBuilder().setEndpoints(listOfEndPoints).setFilter(filter.value).query(val)
  }
  form.loading = false

}


const connectionManager = inject<ConnectionRepository>(identifier)!
const storeManager = inject<DatasourceRepository>(DataSourceIdentifier)!
const types = storeManager.getDataSourceTypes()
let ds = ref<Connection | undefined>()
const ds_type = ref('rest')
let store: any = ref<IDataRetrieveable | undefined>()
const ds_notFountInfo = ref(false)
const selectedItemsEmitted = ref()
watch(selectedItemsEmitted, () => {
  ds_notFountInfo.value = false
  let uri = null
  try {
    uri = new URL(selectedItemsEmitted.value?.accessUrl?.value)
    ds.value = createConnectionFromFormat(selectedItemsEmitted.value?.format?.value, uri.origin)
  } catch (e) {
    console.log(e)
  }
  if (ds.value) {
    stepsVailid['step0'] = true
  } else {
    ds_notFountInfo.value = true
    stepsVailid['step0'] = false
  }

})

watch(step, (val) => {
  if (val == 2) {
    let uri = null
    try {
      uri = new URL(selectedItemsEmitted.value?.accessUrl?.value)
      if (!ds.value) throw new Error('connection not found')
      const id = ds.value?.uid
      if (!id) throw new Error('id not found')
      store.value = reactive(createStoreFromFormat(selectedItemsEmitted.value?.format?.value, id, uri!.pathname))
    } catch (e) {
      console.log(e)
    }

    if (!store) {
    }// show pickup list

  }
  if (val === 3) {
    // Beispiel: hole mögliche Widgets für store.type

    console.log(registeredWidgets.getAllWidgets())
    const availableWidgets = Object.entries(registeredWidgets.getAllWidgets())
      .filter(([_, widget])=>(widget.supportedDSTypes as string[]).includes(store.value?.type))
      .filter(([_, widget]) => widget.icon)
      .map(([name, widget]) => ({ type: name, icon: widget.icon }))
      console.log(availableWidgets)

      widgetOptions.value = availableWidgets

  }

})
const createConnectionFromFormat = (format: string, url: string) => {
  let con: Connection | undefined = undefined

  const availableTypes = connectionManager.getRegisteredTypes()
  switch ('<' + format + '>') {
    case Formats.CSV:
    case Formats.JSON:
    case Formats.REST:
    case Formats.OGCSTA:
      if (availableTypes.includes('rest')) {
        con = connectionRepository.createConnection('rest', { url: url })
      }
      break
    case Formats.XMLA:
      if (availableTypes.includes('xmla')) {
        con = connectionRepository.createConnection('xmla', { url: url })
      }
      break

  }
  return con
}
const createStoreFromFormat = (format: string, aconnection: string, aresourceUri: string) => {
  let store = undefined
  switch ('<' + format + '>') {
    case Formats.CSV:

      return storeManager.createDatasource('csv', { connection: aconnection, resourceUrl: aresourceUri,separators:',' })

    case Formats.JSON:
      return storeManager.createDatasource('rest', { connection: aconnection, resourceUrl: aresourceUri })


    case Formats.REST:
      return storeManager.createDatasource('rest', { connection: aconnection, resourceUrl: aresourceUri })

    case Formats.OGCSTA:
      return storeManager.createDatasource('ogcsta', { connection: aconnection, resourceUrl: aresourceUri })

    case Formats.XMLA:
      return storeManager.createDatasource('xmla', { connection: aconnection, resourceUrl: aresourceUri })

  }
  return null
}


const getComponent = computed(() => {
  const identifiers = storeManager.getDatasourceIdentifiers(store.value.type)
  return storeManager.resolveIdentifier(identifiers.Settings)
})
const getComponentConnection = computed(() => {
  if (!ds.value) return null
  const identifiers = connectionManager.getConnectionIdentifiers((ds.value as any).type)
  return connectionManager.resolveIdentifier(identifiers.Settings)
})
const finish = () => {

  if(selectedWidgets.value.length>0){
    selectedWidgets.value.forEach((widget,index)=>{
      board.addWidget({
        uid: '',
        type: widget.type,
        config: { datasourceId: store.value?.uid, settings: {} },
        wrapperConfig: { title: '',
        backgroundColor: '#fff',
        backgroundColorTransparence: 255,
        titleColor: '#7c7c7c',
        titleFontSize: 15,
        borderSize: 0,
        borderColor: '#ccc',
        padding:0,
        blur:0,
        borderRadius: 15,
        fullscreen: false,
        shadowColor: '#333',
        shadowBlur: 12,
        shadowX: 5,
        shadowY: 5,
        shadowTransparence: 25,
        transparency: 255 },
      }, {
        x: 50 + (index * 300),
        y: 50,
        width: 200,
        height: 100,
        z: 3005,
      })
    });
  }
  selectedWidgets.value = [];
  ds.value = undefined
  store.value = undefined
  step.value = 0
  filter.value = []
  form.searchString = ''
  results.value = {}
  stepsVailid.step0 = false
  stepsVailid.step1 = true
  stepsVailid.step2 = true
  stepsVailid.step3 = true
  toogle.value = false
}
defineExpose({
  run
})
</script>
<template>
  <DModal v-model="toogle" size="lg" @cancel="finish()">
    <template #header>
      <h2 class="finder__title">Datenquelle finden</h2>
    </template>

    <!-- Four steps, taken in order, so they are numbered and the one being
         taken is marked. The framework's stepper did the same and brought
         a controls bar that had to be hidden. -->
    <ol class="steps" aria-label="Schritte">
      <li
        v-for="(entry, index) in steps"
        :key="entry.label"
        :class="['step', { 'step--on': index === step, 'step--done': index < step }]"
        :aria-current="index === step ? 'step' : undefined"
      >
        <DIcon :name="entry.icon" size="sm" />
        <span class="step__label">{{ entry.label }}</span>
      </li>
    </ol>

    <div class="finder">
      <!-- 1. searching -->
      <template v-if="step === 0">
        <div class="search">
          <DInput
            v-model="form.searchString"
            label="Suche"
            placeholder="Wonach suchst du?"
            @keyup="(e: any) => { if (e.key == 'Enter') search() }"
          />
          <DButton title="Filter" @click="openFilterModal">
            <DIcon name="filter_alt" size="sm" />Filter<DChip v-if="filterCount" numeric>{{ filterCount }}</DChip>
          </DButton>
        </div>

        <div v-if="resultAsTable.length > 0" class="results">
          <SearchResultCard
            v-for="result in resultAsTable"
            :key="result.title.value"
            :class="{ active: result == selectedItemsEmitted }"
            :result="result"
            @click="selectedItemsEmitted = result"
          />
        </div>
      </template>

      <!-- 2. the connection that will be made -->
      <template v-else-if="step === 1">
        <h3 v-if="!ds_notFountInfo" class="finder__lead">Diese Verbindung wird angelegt:</h3>
        <p v-else class="finder__warn">
          <DIcon name="warning" size="lg" tone="color-warn" />
          Die Verbindung lässt sich nicht automatisch bestimmen - das passiert, wenn der Typ
          des Datensatzes unbekannt oder nicht unterstützt ist. Du kannst sie von Hand einrichten.
        </p>

        <div class="pair">
          <DInput v-if="ds" :model-value="ds?.name" label="Name" readonly />
          <DInput :model-value="ds?.type" label="Typ" readonly />
        </div>

        <component :is="getComponentConnection" :config="ds?.config" />
      </template>

      <!-- 3. the data source that will be made -->
      <template v-else-if="step === 2">
        <h3 class="finder__lead">Diese Datenquelle wird angelegt:</h3>

        <div class="pair">
          <DInput v-if="ds" :model-value="store?.name" label="Name" readonly />
          <DInput :model-value="store?.type" label="Typ" readonly />
        </div>

        <component
          :is="getComponent"
          :config="store.config"
          :connections="connections"
          :dataSources="dataSources"
        />
      </template>

      <!-- 4. what to put on the board -->
      <template v-else>
        <h3 class="finder__lead">Widgets zur Datenquelle auswählen</h3>

        <div class="widgets_grid">
          <button
            v-for="widget in widgetOptions"
            :key="widget.type"
            type="button"
            :class="['widgets_grid-item', { on: selectedWidgets.includes(widget) }]"
            @click="() => {
              if (selectedWidgets.includes(widget)) {
                selectedWidgets.splice(selectedWidgets.indexOf(widget), 1)
              } else {
                selectedWidgets.push(widget)
              }
            }"
          >
            <DCheckbox :model-value="selectedWidgets.includes(widget)" />
            <img :src="widget.icon" alt="" class="widgets_grid-icon" />
            {{ widget.type }}
          </button>
        </div>
      </template>
    </div>

    <template #actions>
      <DButton
        v-if="step != 3"
        intent="primary"
        :disabled="!(stepsVailid as any)['step' + step]"
        @click="step++"
      >
        Weiter
      </DButton>
      <DButton
        v-else
        intent="primary"
        :disabled="!(stepsVailid as any)['step' + step]"
        @click="finish"
      >
        Fertig
      </DButton>
    </template>
  </DModal>

  <FilterModal ref="loadModalref" v-model="filter" />
</template>

<style lang="scss">
/*
 * Unscoped on purpose: what it reaches are the settings components the
 * two middle steps mount, which come from other bundles.
 */
.finder {
  .store-item-header {
    display: none;
  }

  .store-item-content {
    border: none;
    padding: 0;
  }

  .datasource-list .datasource-list-add-button {
    display: none;
  }
}
</style>

<style lang="scss" scoped>
.finder__title {
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: 600;
}

/* The steps, as the sequence they are. */
.steps {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin: 0 0 18px;
  padding: 0 0 12px;
  list-style: none;
  border-bottom: 1px solid var(--color-divider);
  counter-reset: step;
}

.step {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
}

.step::before {
  counter-increment: step;
  content: counter(step) '.';
  font-variant-numeric: tabular-nums;
}

.step--done {
  color: var(--color-fg);
}

.step--on {
  color: var(--color-accent);
  font-weight: 600;
}

.finder {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 62vh;
  overflow-y: auto;
}

.finder__lead {
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: 600;
}

.finder__warn {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  line-height: 1.55;
  color: var(--color-dim);
}

.search {
  display: flex;
  align-items: flex-end;
  gap: 10px;
}

.search > :first-child {
  flex: 1 1 auto;
  min-width: 0;
}

.results {
  display: flex;
  flex-direction: column;
}

.pair {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.pair > * {
  flex: 1 1 200px;
  min-width: 0;
}

.widgets_grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 8px;
}

.widgets_grid-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 8px 10px;
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
  background-color: var(--color-raised);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg);
  cursor: pointer;
  text-align: left;
}

.widgets_grid-item:hover {
  border-color: var(--color-outline);
}

.widgets_grid-item.on {
  border-color: var(--color-accent);
}

.widgets_grid-icon {
  height: 30px;
}
</style>
