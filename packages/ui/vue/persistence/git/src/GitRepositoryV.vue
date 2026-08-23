<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type {
  Repository,
  Entity,
  WritableRepository
} from 'org.eclipse.daanse.board.app.lib.api.persistence'

import { asyncComputed } from '@vueuse/core'
import { useToast } from 'vuestic-ui'

import { usePromisifiedModal } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { GitWritableRepository, AuthentificationError } from 'org.eclipse.daanse.board.app.lib.persistence.git'
import SaveInputGit from './SaveInputGit.vue'

//Props
const props = defineProps<{ repo: GitWritableRepository, context: { context: string, state?: any } | undefined }>()

//Emits
const emts = defineEmits<{ close: any }>()

//Refs
const columns = ref([
  { key: 'icon', label: 'icon' },
  { key: 'name', label: 'file' },
  { key: 'date', label: 'date' },
  { key: 'size', label: 'size' },
  { key: 'options', label: 'options' }])

const savedData = ref<Entity[]>([])
const branch = ref<string>('main')
const commit = ref<string>('')
const isTableLoading = ref<boolean>(false)
const inputkeyModal = ref<boolean>(false)
const token = ref<undefined | string>(undefined)
const selectedRow = ref<any>(null)

//Logic
watch(() => props.repo, async (_new) => {
  await getFiles()
}, { immediate: true })

watch(branch, async (name) => {
  const branch = (await props.repo.getBranches()).find(b => b.name == name)
  if (branch) {
    props.repo.setBranch(branch)
    props.repo.getCommits()
    getFiles()
  }
})
watch(commit, async (date) => {
  const commit = (await props.repo.getCommits()).find(c => c.creation_date == date)
  if (commit) {
    props.repo.setCommit(commit)
    getFiles()
  }
})
const rowClick = async (row: any) => {
  selectedRow.value = row

}
const branch_options = asyncComputed(async () => {
  return (await props.repo.getBranches()).map(b => b.name)
})
const commit_options = asyncComputed(async () => {
  console.log('updated')
  return (await props.repo.getCommits()).map(c => c.creation_date)
})

async function getFiles() {
  console.log('update')
  if (props.repo != undefined) {
    try {
      isTableLoading.value = true
      savedData.value = await (props.repo as Repository).findAll()
    } catch (e) {
      savedData.value = []
    } finally {
      isTableLoading.value = false
    }
  } else savedData.value = []
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
    let token = await run(null)
    if (!token) {
      notify({ title: 'Error on saving File', message: (ee as any), color: '#d23a1f', position: 'bottom-right', duration: 2000 })
    } else {
      await props.repo.auth({ auth: token })
      override(e)
    }
  } finally {
    //emts('close')
  }
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
  } catch (ee) {
    if (ee instanceof AuthentificationError) {
      //alert('not auth')
      let token = await run(null)
      if (!token) {
        notify({ title: 'Error on saving File', message: (ee as any), color: '#d23a1f', position: 'bottom-right', duration: 2000 })
      } else {
        await props.repo.auth({ auth: token })
        await save(e)
      }

    } else {
      notify({ title: 'Error on saving File', message: (ee as any), color: '#d23a1f', position: 'bottom-right', duration: 2000 })
      console.log(e)
    }

  } finally {
    await getFiles()
    //emts('close')
  }
}
const auth = () => {
  return token.value
}

//Uses
const { init, notify, closeAll } = useToast()
const { isOpened, run, close } = usePromisifiedModal(auth)
const getRowClass = (item: any) => {
  if (!selectedRow.value) return ''
  return item.name === selectedRow.value.item.name ? { class: ['selected bg-gray-200'] } : ''
}
const loadFile = async () => {
  const row = selectedRow.value
  try {
    let entity = await (props.repo as Repository).getEntityByUri(row.item.uri)
    if (entity && entity.data) {
      emts('close', entity?.data as any)
    }
    notify({ message: 'File loaded', color: '#dee5f2',
      position: 'bottom-right', duration: 2000 })
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>

  <div class="flex-nowrap">
    <Teleport defer to="#loadSaveModalFooter">
      <span class="va-title">Branch: </span>
      <VaButtonDropdown

        :label="branch"
        preset="secondary"
        border-color="primary"
      >
        <VaMenuList
          :options="branch_options"
          @selected="(v) => {branch=v}"
        />
      </VaButtonDropdown>
      <div class="space"></div>

      <div class="commit">

        <span class="va-title">Commit: </span>
        <VaButtonDropdown
          :label="commit"
          preset="secondary"
          border-color="primary"
        >
          <VaMenuList
            :options="commit_options"
            @selected="(v) => {commit=v}"
          />
        </VaButtonDropdown>
      </div>
    </Teleport>
    <SaveInputGit :repo="repo" @save="save" @override="override"></SaveInputGit>
    <Teleport defer to="#loadSaveModalFooter">
      <VaButton @click="loadFile" :disabled="!selectedRow" icon="task" border-color="primary"
                preset="secondary"> load</VaButton>
    </Teleport>

  </div>
  <VaDataTable
    class="table"
    striped
    virtual-scroller
    :loading="isTableLoading"
    :items="savedData"
    :columns="columns"
    hoverable
    @row:click="rowClick"
    :row-bind="getRowClass"
  >
    <template #cell(options)="{ rowIndex ,row}">
      <VaButton
        preset="plain"
        icon="download"
        class="ml-3"
        @click="(ev)=>{ev.stopImmediatePropagation();}"
      />
      <VaButton
        preset="plain"
        icon="delete"
        class="ml-3"
        @click="(ev)=>{ev.stopImmediatePropagation();}"
      />

    </template>
    <template #cell(icon)="{ rowIndex ,row}">
      <VaIcon name="newspaper" />

    </template>
  </VaDataTable>
  <VaModal
    size="auto"
    hide-default-actions
    v-model="isOpened">
    <div class="deleteDailog">
            <span class="va-h5">
                Please provide a token to access the Repo:
            </span><br /><br />
      <VaInput
        v-model="token"
        class="minwidth100"
        placeholder="Token"
      />
    </div>
    <template #footer class="footer">
      <VaButton preset="secondary" @click="()=>{token=undefined;close(null)}">
        cancel
      </VaButton>
      <VaButton preset="secondary" @click="()=>{close(token)}"> ok</VaButton>
    </template>
  </VaModal>
</template>

<style scoped lang="scss">
.table {
  min-height: 100px;

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

::v-deep(.additional-class) {
  font-weight: bolder;
}

.space {
  width: 25px;
}

.flex-nowrap {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
}

.minwidth100 {
  min-width: 100%;
}

::v-deep(.selected) {
  font-weight: bolder;
  background-color: var(--va-css-variables-hover-color) !important;
}
</style>

<style>
.va-inner-loading--active {
  height: auto !important;
}
</style>
