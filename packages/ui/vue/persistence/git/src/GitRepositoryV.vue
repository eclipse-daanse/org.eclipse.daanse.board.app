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
import { DButton, DIcon, DInput, DModal, DSelect, DTable } from 'org.eclipse.daanse.board.app.ui.vue.controls'

import { usePromisifiedModal } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { GitWritableRepository, AuthentificationError } from 'org.eclipse.daanse.board.app.lib.persistence.git'
import SaveInputGit from './SaveInputGit.vue'

//Props
const props = defineProps<{ repo: GitWritableRepository, context: { context: string, state?: any } | undefined }>()

//Emits
const emts = defineEmits<{ close: any }>()

//Refs
/*
 * Three columns. There was a fourth holding a newspaper icon on every
 * row, and a fifth with a download and a delete button whose only
 * handler was `ev.stopImmediatePropagation()` - they have never done
 * anything.
 */
const columns = ref([
  { key: 'name', label: 'Datei' },
  { key: 'date', label: 'Datum' },
  { key: 'size', label: 'Größe' },
])

const savedData = ref<Entity[]>([])
const branch = ref<string>('main')
const commit = ref<string>('')
const isTableLoading = ref<boolean>(false)
const token = ref<undefined | string>(undefined)
const selectedRow = ref<any>(undefined)

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

const branch_options = asyncComputed(async () => {
  return (await props.repo.getBranches()).map(b => b.name)
})
const commit_options = asyncComputed(async () => {
  return (await props.repo.getCommits()).map(c => c.creation_date)
})

async function getFiles() {
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
    notify({ message: 'Datei abgelegt' })
  } catch (ee) {
    let token = await run(null)
    if (!token) {
      notify({ title: 'Ablegen fehlgeschlagen', message: String(ee) })
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
    notify({ message: 'Datei abgelegt' })
  } catch (ee) {
    if (ee instanceof AuthentificationError) {
      //alert('not auth')
      let token = await run(null)
      if (!token) {
        notify({ title: 'Ablegen fehlgeschlagen', message: String(ee) })
      } else {
        await props.repo.auth({ auth: token })
        await save(e)
      }

    } else {
      notify({ title: 'Ablegen fehlgeschlagen', message: String(ee) })
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

/**
 * What just happened, said where it happened.
 *
 * This used to be a floating toast in the corner of the window, three
 * hex colours for its background. A save either worked or did not, and
 * the place to say so is beside the list it changed.
 */
const message = ref<{ text: string; bad?: boolean } | undefined>()
let clearAt: ReturnType<typeof setTimeout> | undefined

function notify(what: { message: string; title?: string; color?: string }) {
  message.value = {
    text: what.title ? `${what.title}: ${what.message}` : what.message,
    bad: !!what.title,
  }
  if (clearAt) clearTimeout(clearAt)
  clearAt = setTimeout(() => (message.value = undefined), 4000)
}

//Uses
const { isOpened, run, close } = usePromisifiedModal(auth)

const loadFile = async () => {
  const row = selectedRow.value
  try {
    let entity = await (props.repo as Repository).getEntityByUri(row.uri)
    if (entity && entity.data) {
      emts('close', entity?.data as any)
    }
    notify({ message: 'Datei geladen' })
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <div class="flex-nowrap">
    <Teleport defer to="#loadSaveModalFooter">
      <!-- Picking a branch and picking a commit is picking from a list. It
           was a dropdown button with a menu hanging off it, twice. -->
      <DSelect v-model="branch" label="Branch" :options="branch_options ?? []" size="sm" />
      <DSelect v-model="commit" label="Stand" :options="commit_options ?? []" size="sm" clearable />
    </Teleport>

    <SaveInputGit :repo="repo" @save="save" @override="override" />

    <Teleport defer to="#loadSaveModalFooter">
      <DButton intent="primary" :disabled="!selectedRow" @click="loadFile">
        <DIcon name="task" size="sm" />Laden
      </DButton>
    </Teleport>
  </div>

  <p v-if="message" :class="['note', { 'note--bad': message.bad }]" role="status">
    {{ message.text }}
  </p>

  <DTable
    v-model:selected="selectedRow"
    class="table"
    :items="savedData"
    :columns="columns"
    selectable
    :empty="isTableLoading ? 'Wird geladen…' : 'Keine Datei in diesem Stand'"
  />

  <DModal v-model="isOpened" size="sm">
    <template #header>
      <h2 class="token__title">Zugang zum Repository</h2>
    </template>

    <DInput
      v-model="token"
      label="Token"
      type="password"
      hint="Wird nur für diese Sitzung behalten."
    />

    <template #actions>
      <DButton intent="quiet" @click="() => { token = undefined; close(null) }">Abbrechen</DButton>
      <DButton intent="primary" @click="() => close(token)">Weiter</DButton>
    </template>
  </DModal>
</template>

<style scoped lang="scss">
.table {
  min-height: 100px;
}

.flex-nowrap {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-end;
  gap: 8px;
}

.note {
  margin: 8px 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
}

.note--bad {
  color: var(--color-err);
}

.token__title {
  margin: 0;
  font-size: var(--text-lg);
  font-weight: 600;
}
</style>
