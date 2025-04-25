<!--
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

-->
<script lang="ts" setup>
import { Comperator, ERefType, type ICondition, type IDSRenderer } from './../../api/Renderer'
import { type ModelRef, reactive, ref } from 'vue'

export interface ThingProp {
  text: string,
  selector: string,
  suggestions?: any[]
}

const model: ModelRef<ICondition[]> = defineModel<ICondition[]>({
  default:
    () => reactive([])
})
const newCreateProp = ref()
const newCreateValue = ref()
const newCreateComperator = ref({
  text: '==',
  selector: Comperator.equals
})
const thingsPropOptions: ModelRef<ThingProp[]> = defineModel<ThingProp[]>('thingProps', {
  default: () => reactive([{
      text: 'id',
      selector: '@iot.id'
    },
      {
        text: 'name',
        selector: 'name'
      },
      {
        text: 'decription',
        selector: 'description'
      },
      {
        text: 'property',
        selector: 'property'
      },
      {
        text: 'observation',
        selector: 'Observations.0.result'
      },
      {
        text: 'all',
        selector: '*'
      }]
  )
})

const ComperatorOptions = [{
  text: '==',
  selector: Comperator.equals
},
  {
    text: '>',
    selector: Comperator.greaterThen
  },
  {
    text: '>=',
    selector: Comperator.greaterThenEquals
  },
  {
    text: '<',
    selector: Comperator.lessThen
  },
  {
    text: '<=',
    selector: Comperator.lessThenEquals
  },
  {
    text: '!=',
    selector: Comperator.notEQuals
  }
]


const filtercolumns = [
  { key: 'prop', sortable: true },
  { key: 'comperator', sortable: true },
  { key: 'value', sortable: true },
  { key: 'actions', width: 80 }
]
const addNewOption = (val: any) => {
  const option = {
    text: val,
    selector: val
  }
  thingsPropOptions.value.push(option)
  return option
}
const addContition = () => {
  model.value.push({
    comperator: newCreateComperator.value.selector,
    value: newCreateValue.value,
    prop: newCreateProp.value.selector
  } as ICondition)
  newCreateComperator.value = {
    text: '==',
    selector: Comperator.equals
  }
  newCreateValue.value = ''
  newCreateProp.value = ''

}
</script>

<template>
  <VaDataTable
    :columns="filtercolumns"
    :items="model"
    class="table-crud ds prop"
    striped
  >
    <template #headerAppend>
      <tr class="table-crud__slot">
        <th class="p-1">
          <VaSelect
            v-model="newCreateProp"
            :options="thingsPropOptions"
            :track-by="(option:any) => option.selector"
            allow-create
            placeholder="Select an option"
            @create-new="(val:any)=>{

                                newCreateProp = addNewOption(val);
                            }"
          />
        </th>
        <th class="p-1">
          <VaSelect
            v-model="newCreateComperator"
            :options="ComperatorOptions"
            :track-by="(option:any) => option.selector"
          />
        </th>
        <th class="p-1">
          <template v-if="thingsPropOptions.find(s=>s.selector == newCreateProp?.selector)?.suggestions">
            <VaSelect
              v-model="newCreateValue"
              :options="thingsPropOptions.find(s=>s.selector == newCreateProp?.selector)?.suggestions"
              :track-by="(option:any) => option.selector"
              allow-create
              placeholder="Select an option"
              @create-new="(val:any)=>{
                                newCreateValue = val;
                            }"
            />
          </template>
          <VaInput v-else v-model="newCreateValue"
                    placeholder="Enter value"
          />
        </th>
        <th class="p-1">
          <VaButton
            :disabled="!newCreateProp  || !newCreateValue"
            block
            style="min-width: 40px; float: right;"
            @click="addContition"
          >
            Add
          </VaButton>
        </th>
      </tr>
    </template>


    <template #cell(actions)="{ rowIndex }">
      <VaButton
        class="ml-3"
        icon="delete"
        preset="plain"
        style="min-width: 40px; float: right;"
        @click="()=>{
                        model.splice(rowIndex,1)
                    }"
      />
    </template>
    <template #cell(prop)="{ value, row }">
      <div class="table-inline__cell">
        <VaValue v-slot="doShowInput">
          <VaSelect
            v-if="doShowInput.value"
            :model-value="value"
            :options="thingsPropOptions"
            :track-by="(option:any) => option.selector"
            allow-create
            placeholder="Select an option"
            @create-new="(val:any)=>{
                            const option = addNewOption(val);
                                  row.rowData['prop'] = option.selector;
                                  doShowInput.value = false
                            }"
            @update:modelValue="(event:any) => {
                                  row.rowData['prop'] = event.selector
                                  doShowInput.value = false
                                }"
          />
          <span
            :class="doShowInput.value ? 'table-inline__item--hidden' : ''"
            class="table-inline__item"
            @click="doShowInput.value = true"
          >
                            {{ value }}
                      </span>
        </VaValue>
      </div>
    </template>
    <template #cell(comperator)="{ value, row }">
      <div class="table-inline__cell">
        <VaValue v-slot="doShowInput">
          <VaSelect
            v-if="doShowInput.value"
            :model-value="{text:ComperatorOptions.filter(e=>e.selector==value)[0].text,selector:value}"
            :options="ComperatorOptions"
            :track-by="(option:any) => option.selector"
            @update:modelValue="(event:any) => {
                                  row.rowData['comperator'] = event.selector
                                  doShowInput.value = false
                                }"
          />
          <span
            :class="doShowInput.value ? 'table-inline__item--hidden' : ''"
            class="table-inline__item"
            @click="doShowInput.value = true"
          >
                            {{ ComperatorOptions.filter(e => e.selector == value)[0].text }}
                      </span>
        </VaValue>
      </div>
    </template>
    <template #cell(value)="{ value, row }">
      <div class="table-inline__cell">
        <VaValue v-slot="doShowInput">

          <VaInput
            v-if="doShowInput.value"
            :model-value="value"
            @blur="doShowInput.value = false"
            @change="(event:any) => {
                                  row.rowData['value'] = event.target.value
                                  doShowInput.value = false
                                }"
          />
          <span
            :class="doShowInput.value ? 'table-inline__item--hidden' : ''"
            class="table-inline__item"
            @click="doShowInput.value = true"
          >
                            {{ value }}
                      </span>
        </VaValue>
      </div>
    </template>
  </VaDataTable>
</template>

<style>
.row {
  align-items: flex-start;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  min-width: 0;
  flex-direction: row;
}
</style>
