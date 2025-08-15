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

import { computed, inject, onMounted, reactive, ref, watch } from 'vue'
import QueryBuilder from '../queryBuilder/QueryBuilder'
import { useSparQLEndPointManager } from '../sparql/SparqlEndpointRegistry'
import { Formats } from '../queryBuilder/FilterAPI'
import { VaBadge, VaStepper } from 'vuestic-ui'
import { type ConnectionRepository, identifier } from 'org.eclipse.daanse.board.app.lib.repository.connection'
import { DatasourceRepository, IDataRetrieveable, identifier as DataSourceIdentifier } from 'org.eclipse.daanse.board.app.lib.repository.datasource'
import type { Container } from 'inversify'
import SearchResultCard from '../components/Searchcard/SearchResultCard.vue'
import { ConnectionDTO, useConnectionsStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.connection'
import { DataSourceDTO, useDataSourcesStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.datasouce'
import FilterModal from './FilterModal.vue'
import { WidgetRepository, identifier as widgetRepoIdentifier } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import { useWidgetsStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.widgets'
import { ILayoutItem, useLayoutStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.layout'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { useRoute } from 'vue-router'

const route = useRoute();
const toogle = ref(false)
let createWidget:any,updateLayout:any,layout:any;

const run = () => {
  const pageID = route.params.pageid ?? '';
  const widgetStore = useWidgetsStore(pageID as string);
  const layoutStore = useLayoutStore(pageID as string);
  createWidget = widgetStore.createWidget;
  updateLayout = layoutStore.updateLayout;
  layout = layoutStore.layout;

  toogle.value = !toogle.value
}
const step = ref(0)
const formRef = ref()
const connectionForm = ref()

const { connections, createConnection } = useConnectionsStore()
const { dataSources, createDataSource,updateDataSource } = useDataSourcesStore()


const registeredWidgets = container.get<WidgetRepository>(widgetRepoIdentifier)

const widgetOptions = ref<any[]>([]) // z.B. aus einer Factory basierend auf store.type
const selectedWidgets = ref<any[]>([])

const stepsVailid = reactive({
  step0: false,
  step1: true,
  step2: true,
  step3: true
})
const steps = [
  {
    label: 'Search', icon: 'travel_explore', beforeLeave: (step: any) => {
      step.hasError = !stepsVailid.step0
    }
  },
  {
    label: 'Connection', icon: 'polyline', beforeLeave: (step: any) => {
      step.hasError = !stepsVailid.step1
    }
  },
  {
    label: 'DataSource', icon: 'store', beforeLeave: (step: any) => {
      step.hasError = !stepsVailid.step2
    }
  },
  { label: 'Widgets', icon: 'widgets', beforeLeave: (step: any) => { step.hasError = !stepsVailid.step3} }
]
onMounted(()=>{
  console.log('Mounting endpoint finder');
})
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


const connectionManager = container.get<ConnectionRepository>(identifier)
const storeManager = container.get<DatasourceRepository>(DataSourceIdentifier)
const types = storeManager.getDataSourceTypes()
let ds = ref<ConnectionDTO | undefined>()
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
  let con: ConnectionDTO | undefined = undefined

  const availableTypes = connectionManager.getRegisteredTypes()
  switch ('<' + format + '>') {
    case Formats.CSV:
    case Formats.JSON:
    case Formats.REST:
    case Formats.OGCSTA:
      if (availableTypes.includes('rest')) {
        const id = createConnection('rest', { url: url })
        con = connections.find((con: ConnectionDTO) => con.uid === id)
      }
      break
    case Formats.XMLA:
      if (availableTypes.includes('xmla')) {
        const id = createConnection('xmla', { url: url })
        con = connections.find((con: ConnectionDTO) => con.uid === id)
      }
      break

  }
  return con
}
const createStoreFromFormat = (format: string, aconnection: string, aresourceUri: string) => {
  let store = undefined
  switch ('<' + format + '>') {
    case Formats.CSV:

      const uid = createDataSource('csv', { connection: aconnection, resourceUrl: aresourceUri,separators:',' })
      return dataSources.find((ds: DataSourceDTO) => ds.uid === uid)

    case Formats.JSON:
      const uid_rest = createDataSource('rest', { connection: aconnection, resourceUrl: aresourceUri })
      return dataSources.find((ds: DataSourceDTO) => ds.uid === uid_rest)


    case Formats.REST:
      const uid_rest2 = createDataSource('rest', { connection: aconnection, resourceUrl: aresourceUri })
      return dataSources.find((ds: DataSourceDTO) => ds.uid === uid_rest2)

    case Formats.OGCSTA:
      const uid_ogcsta = createDataSource('ogcsta', { connection: aconnection, resourceUrl: aresourceUri })
      return dataSources.find((ds: DataSourceDTO) => ds.uid === uid_ogcsta)

    case Formats.XMLA:
      const uid_xmla = createDataSource('xmla', { connection: aconnection, resourceUrl: aresourceUri })
      return dataSources.find((ds: DataSourceDTO) => ds.uid === uid_xmla)

  }
  return null
}


const getComponent = computed(() => {
  const identifiers = storeManager.getDatasourceIdentifiers(store.value.type)
  return container.get(identifiers.Settings)
})
const getComponentConnection = computed(() => {
  if (!ds.value) return null
  const identifiers = connectionManager.getConnectionIdentifiers((ds.value as any).type)
  return container.get(identifiers.Settings)
})
const finish = () => {

  if(selectedWidgets.value.length>0){
    const newLayoutItems: ILayoutItem[] = []

    selectedWidgets.value.forEach((widget,index)=>{
      const id= createWidget(widget.type,{datasourceId:store.value?.uid},
        { title: '',
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
        transparency: 255})

      const slayout:ILayoutItem={
        id: id,
        x: 50 +(index*300),
        y: 50,
        width:200,
        height:100,
        z: 3005,
      }
      newLayoutItems.push(slayout)
      console.log('Endpointfinder created Widget:' +widget.type)
    });

    // Update layout once with all new items
    const updatedLayout = [...layout, ...newLayoutItems]
    updateLayout(updatedLayout)
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
  formRef.value?.resetValidation()
  connectionForm.value?.resetValidation()
  toogle.value = false
}
watch(()=>store.value?.config,(config)=>{
  console.log(config)
  //updateDataSource(config.uid,store)
},{deep:true})


defineExpose({
  run
})
</script>
<template>

  <va-modal :modelValue="toogle" class="infobox" hide-default-actions no-padding>
    <template #footer class="footer">
      <VaButton v-if="step!=3" :disabled="!(stepsVailid as any)['step'+step]" @click="step++">next</VaButton>
      <VaButton v-if="step==3" :disabled="!(stepsVailid as any)['step'+step]" @click="finish">finish</VaButton>
    </template>
    <template #default="{ ok }">
      <va-button
        class="mr-1 mb-1 close"
        preset="secondary"
        style="position: absolute;right: 0;"
        @click="finish()"
      >
        x
      </va-button>
      <va-card-content class="no-padding">
        <VaStepper
          color="#c29803"
          v-model="step"
          :steps="steps"
          controlsHidden
          linear
        >

          <template #step-content-0>
            <VaForm ref="formRef" class="flex flex-col items-baseline gap-6">
              <div class="flex padd15">
                <VaInput
                  v-model="form.searchString"
                  :loading="form.loading"
                  class="flex"
                  label="Search String"
                  @keyup="(e:any)=>{if(e.key=='Enter')search()}">
                  <template #prependInner>
                    <VaIcon
                      color="secondary"
                      name="search"
                    />
                  </template>
                </VaInput>
                <div class="buttonbar">
                  <VaBadge
                    :offset="[-5,5]"
                    :text="filterCount"
                    class="mr-6"
                    overlap
                    style="--va-badge-text-wrapper-border-radius: 50%;"

                  >
                    <VaButton icon="filter_alt" preset="secondary" round @click="openFilterModal"></VaButton>
                  </VaBadge>
                </div>

              </div>
            </VaForm>


            <VaScrollContainer
              v-if="resultAsTable.length>0"
              class="padd"
              vertical
            >
              <template v-for="result in resultAsTable">
                <SearchResultCard :class="{active:result==selectedItemsEmitted}" :result="result"
                                  @click="selectedItemsEmitted = result"></SearchResultCard>
                <br>
              </template>
            </VaScrollContainer>
          </template>
          <template #step-content-1>
            <div class="padd">
              <VaForm ref="connectionForm" v-model="stepsVailid['step1']" immediate>
                <h2 v-if="!ds_notFountInfo" class="title"> The following Connection will be created:</h2>
                <div v-else class="aflex">
                  <VaIcon
                    class="mr-2"
                    color="#ec9c1d"
                    name="warning"
                    size="2rem"
                  />
                  <h2 class="title"> The Connection cant be automatic detected, this happens if the Type of Dataset is not known or not supported.
                    Never the less you can try to configure the connection manualy:</h2>
                </div>
                <br>
                <br>
                <div class="aflex">

                  <va-input
                    v-if="ds"
                    :modelValue="ds?.name"
                    :rules="[(v:any) => !!v || 'Required',]"
                    label="Name"
                  ></va-input>


                  <va-input
                    :modelValue="ds?.type"
                    class="type-input"
                    label="Type"

                  />


                  <br>
                  <br>


                </div>
                <br>
                <component

                  :is="getComponentConnection"
                  :config="ds?.config"
                ></component>
              </VaForm>
            </div>
          </template>
          <template #step-content-2>

            <VaScrollContainer
              class="padd"
              vertical
            >
              <h2 class="title"> The following Store will be created:</h2>
              <br>
              <div class="aflex">

                <va-input
                  v-if="ds"
                  :modelValue="store?.name"
                  :rules="[(v:any) => !!v || 'Required',]"
                  label="Name"
                ></va-input>


                <va-input
                  :modelValue="store?.type"
                  class="type-input"
                  label="Type"

                />


                <br>
                <br>


              </div>
              <br>
              <component

                :is="getComponent"
                :config="store.config"
                :connections="connections"
                :dataSources="dataSources"
              ></component>
              <br>
            </VaScrollContainer>
          </template>
          <template #step-content-3>
            <VaScrollContainer class="padd" vertical>
              <h2 class="title">Widgets zur Datenquelle auswählen</h2>
              <br>

              <div class= "widgets_grid">
                <div class="widgets_grid-item"
                  v-for="widget in widgetOptions"
                  :key="widget.type"
                  :active="selectedWidgets.includes(widget)"
                  @click="() => {
                    if (selectedWidgets.includes(widget)) {
                      selectedWidgets.splice(selectedWidgets.indexOf(widget), 1)
                    } else {
                      selectedWidgets.push(widget)
                    }
                  }"
                >
                      <VaCheckbox :model-value="selectedWidgets.includes(widget)" />
                    <img class="m-2" :src="widget.icon" style="height:30px"/>
                    {{ widget.type }}

                </div>
              </div>
            </VaScrollContainer>
          </template>


        </VaStepper>
      </va-card-content>
    </template>
  </va-modal>
  <FilterModal ref="loadModalref" v-model="filter"></FilterModal>
</template>

<style lang="scss">
.infobox {
  .va-modal__dialog{
    max-width: 80%!important;
  }
  .footer, .va-modal__footer {

    background: #f7f7f7;
    padding: 10px 16px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
  }

  .va-stepper__navigation {
    padding: 30px 30px 0px 15px;
    /* border-bottom: 1px solid #ccc; */
    background: #f7f7f7;
    margin-bottom: 10px;
  }

  .va-stepper__step-content-wrapper, .va-stepper__step-content {
    padding: 0;
    margin: 0;
  }

  .va-modal__message {
    margin: 0;
  }

  .aflex {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 9px;
  }

  .store-item-header {
    display: none;
  }

  .store-item-content {
    border: none;
    padding: 0;
  }

  .datasource-list {
    .datasource-list-add-button {
      display: none;
    }
  }
}

</style>
<style lang="scss" scoped>
.widgets_grid {
  display: grid;
  grid-template-columns: repeat(3, 33%);
  gap: 1rem;
}

:deep() .widgets_grid-item {
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

}
.flex {
  width: 100%;
}

.flex {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;

}

.buttonbar {
  margin-top: 15px;
}

.padd {
  max-height: 75vh;
  padding: 15px 25px;
}

.padd15 {
  padding: 10px 25px 30px;
  border-bottom: 1px solid #e5e5e5;

}

.no-padding {
  padding: 0;
}


</style>
