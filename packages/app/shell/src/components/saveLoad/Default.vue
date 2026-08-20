<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script setup lang="ts">
import { ref, watch } from 'vue'
import type {
  Entity,
  Repository,
  WritableRepository
} from 'org.eclipse.daanse.board.app.lib.repository.persistence'
import SaveInput from './SaveInput.vue'
import { useToast } from 'vuestic-ui'
import { stringify } from 'flatted'

//Uses
const { init, notify, closeAll } = useToast()

//Props
const props = defineProps<{
  repo: Repository,
  context: { context: string, state?: any } | undefined
}>()

//Emits
const emts = defineEmits<{ close: any }>()

//Refs
const releaseEndPointUrl = ref<String>('')
const isTableLoading = ref<boolean>(false)
const savedData = ref<Entity[]>([])
const saveInputComponent = ref()
const deleteFile = ref(undefined)
const sureDelete = ref(false)
const saveUploadFile = ref(false)
const selectedRow = ref<any>(null)
const columns = ref([
  { key: 'icon', label: 'icon' },
  { key: 'name', label: 'file' },
  { key: 'date', label: 'date' },
  { key: 'size', label: 'size' },
  { key: 'options', label: 'options', width: releaseEndPointUrl.value ? '130px' : '90px' }])

//Logic
if (window && window['__env'] && window['__env'].settings
  && window['__env'].settings.releaseEndPointUrl) {
  releaseEndPointUrl.value = window['__env'].settings.releaseEndPointUrl
}

watch(() => props.repo, async (_new) => {
  if (_new != undefined) {
    try {
      isTableLoading.value = true
      savedData.value = await (props.repo as Repository).findAll()
    } catch (e) {
      savedData.value = []
    } finally {
      isTableLoading.value = false
    }
  } else savedData.value = []
}, { immediate: true })


const downloadItemById = async (row) => { //@ToDo refactor this
  const data = (await props.repo.getEntityByUri(row.uri))?.data
  let blob = new Blob([JSON.stringify(data)], { type: 'application/json' })
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.style.display = 'none'
  a.href = url
  // the filename you want
  let path = (row.uri as URL).pathname
  if (path.startsWith('/')) path = path.slice(1)
  a.download = path.replaceAll('/', '_')
  document.body.appendChild(a)
  a.click()
  window.URL.revokeObjectURL(url)

}
const deleteItemById = (row) => {
  deleteFile.value = row
  sureDelete.value = true
}

const save = async (e: Entity) => {
  if (!props.context?.state) {
    console.log('no context')
    return false
  }
  e.data = props.context!.state
  try {
    await (props.repo as WritableRepository).create(e)

    notify({ message: 'File saved', color: '#dee5f2', position: 'bottom-right', duration: 2000 })
    await reload();
  } catch (ee) {
    notify({
      title: 'Error on saving File', message: ee, color: '#d23a1f',
      position: 'bottom-right', duration: 2000
    })
    console.log(e)
  } finally {
    //emts('close')
  }
}

const override = async (e: Entity) => {
  if (!props.context?.state) {
    console.log('no context')
    return false
  }
  e.data = props.context!.state
  try {
    await (props.repo as WritableRepository).update(e)
    notify({ message: 'File saved', color: '#dee5f2', position: 'bottom-right', duration: 2000 })
  } catch (ee) {
    console.log(e)
    notify({
      title: 'Error on saving File', message: ee, color: '#d23a1f',
      position: 'bottom-right', duration: 2000
    })
  } finally {
    emts('close')
  }
}
const load = async () => {
  const row = selectedRow.value
  try {
    let entity = await (props.repo as Repository).getEntityByUri(row.item.uri)
    if (entity && entity.data) {
      emts('close',entity?.data as any)
    }
    notify({ message: 'File loaded', color: '#dee5f2', position: 'bottom-right', duration: 2000 })

  } catch (e) {
    console.log(e)
  }
}
const rowClick = async (row: any) => {
  selectedRow.value = row

  if (saveInputComponent) (saveInputComponent as any).value.setNameSuggestion(row.item.name)


}

const cancel = () => {
  deleteFile.value = undefined
}

const sdelete = async () => { //@Todo check if Repo is WritableRepository
  if (deleteFile.value) {
    await (props.repo as WritableRepository).delete(deleteFile.value as Entity)
  }
  cancel()
  await reload()
}

const getRowClass = (item: any) => {
  if (!selectedRow.value) return ''
  return item.name === selectedRow.value.item.name ? { class: ['selected bg-gray-200'] } : ''
}
const  reload = async()=>{
  try {
    isTableLoading.value = true
    savedData.value = await (props.repo as Repository).findAll()
  } catch (e) {
    savedData.value = []
  } finally {
    isTableLoading.value = false
  }
}
</script>

<template>
  <SaveInput :repo="repo" ref="saveInputComponent" @save="save" @override="override">
  </SaveInput>
  <Teleport defer to="#loadSaveModalFooter">
    <VaButton @click="load" :disabled="!selectedRow"
              icon="task" border-color="primary" preset="secondary"> load
    </VaButton>
  </Teleport>

  <VaDataTable
    class="table"
    virtual-scroller
    :items="savedData"
    :columns="columns"
    hoverable
    :loading="isTableLoading"
    striped
    @row:click="rowClick"
    :row-bind="getRowClass"
  >
    <template #cell(options)="{ rowIndex ,row}">
      <VaButton
        preset="plain"
        icon="download"
        class="ml-3"
        @click="(ev)=>{ev.stopImmediatePropagation();downloadItemById(row.rowData)}"
      />
      <VaButton
        preset="plain"
        icon="delete"
        class="ml-3"
        @click="(ev)=>{ev.stopImmediatePropagation();deleteItemById(row.rowData)}"
      />
    </template>
    <template #cell(icon)="{ rowIndex ,row}">
      <VaIcon name="newspaper" />
    </template>
  </VaDataTable>

  <VaModal
    size="auto"
    hide-default-actions
    v-model="sureDelete">
    <div class="deleteDailog">
      <h5 class="va-h5">
        Delete Item ?
      </h5>
    </div>
    <template #footer class="footer">
      <VaButton preset="secondary" @click="()=>{cancel(),sureDelete=false}">
        cancel
      </VaButton>
      <VaButton color="danger" @click="()=>{sdelete(),sureDelete=false}"> Delete</VaButton>
    </template>
  </VaModal>
</template>


<style scoped lang="scss">
.table {
  ::v-deep(th) {
    /* border: 1px solid var(--va-background-border);*/
  }

  ::v-deep(tr) {
    border-bottom: 1px solid var(--va-background-border);

    td {
      /*height: 4rem;*/
      white-space: normal;
    }
  }
}

::v-deep(.selected) {
  font-weight: bolder;
  background-color: var(--va-css-variables-hover-color) !important;
}

</style>
