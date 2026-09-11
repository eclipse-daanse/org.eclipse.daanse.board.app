<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<script setup lang="ts">
import { inject, computed, onMounted, ref } from 'vue'
import {
  DatasourceRepository,
  identifier,
} from 'org.eclipse.daanse.board.app.lib.api.datasource'
import {
  identifier as WORKSPACE,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { useEList } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { cloneDeep } from 'lodash'
import { DButton, DInput, DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls'

const props = withDefaults(
  defineProps<{
    itemId: string
    /**
     * Which half of a source is shown.
     *
     * The two used to sit side by side in one strip. The page around this
     * makes them tabs, because reading the data and changing the settings
     * are two different visits.
     */
    view?: 'settings' | 'preview'
  }>(),
  { view: 'settings' },
)

const datasourceProxy = ref({} as any)

const datasourceRepository = inject<DatasourceRepository>(identifier)!
const workspace = inject<Workspace>(WORKSPACE)!
const connections = useEList(workspace, (w) => w.connections)
/* A composer's settings pick the sources it reads from. */
const dataSources = useEList(workspace, (w) => w.datasources)

const availableDatasources = computed(() => {
  return datasourceRepository.registeredDatasources
})

/*
 * Edited on a copy and committed on Save, the way it always was - what
 * changed is only where the copy comes from and where it goes back to.
 */
onMounted(() => {
  const dataSource = datasourceRepository.getDatasourceModel(props.itemId)
  datasourceProxy.value = dataSource
    ? {
        uid: dataSource.uid,
        name: dataSource.name,
        type: dataSource.type,
        config: cloneDeep(dataSource.config ?? {}),
      }
    : {}
})

const saveDataSource = () => {
  const dataSource = datasourceRepository.getDatasourceModel(props.itemId)
  if (dataSource) {
    dataSource.name = datasourceProxy.value.name
    dataSource.type = datasourceProxy.value.type
    dataSource.config = datasourceProxy.value.config
    /* The settings name the connection by id; the model holds the reference. */
    dataSource.connection = connections.value.find(
      (connection) => connection.uid === datasourceProxy.value.config?.connection,
    )
    datasourceRepository.saveDatasource(dataSource)
  }
  emit('close')
}

const previewComponent = computed(() => {
  const identifiers = datasourceRepository.getDatasourceIdentifiers(datasourceProxy.value.type)

  if (!identifiers) {
    return null
  }

  return datasourceRepository.resolveIdentifier(identifiers.Preview)
})

const settingsComponent = computed(() => {
  const identifiers = datasourceRepository.getDatasourceIdentifiers(datasourceProxy.value.type)

  if (!identifiers) {
    return null
  }

  return datasourceRepository.resolveIdentifier(identifiers.Settings)
})

const updateConfig = (config: any) => {
  datasourceProxy.value.config = config
}

const emit = defineEmits(['close'])
</script>
<template>
  <div class="editor">
    <template v-if="view === 'settings'">
      <div class="editor__fields">
        <DInput v-model="datasourceProxy.uid" label="UID" readonly />
        <DInput v-model="datasourceProxy.name" label="Name" />
        <DSelect v-model="datasourceProxy.type" label="Typ" :options="availableDatasources" />
        <component
          :is="settingsComponent"
          :config="datasourceProxy.config"
          :connections="connections"
          :dataSources="dataSources"
        />
      </div>
      <div class="editor__actions">
        <DButton intent="quiet" @click="$emit('close')">Schließen</DButton>
        <DButton intent="primary" @click="saveDataSource">Speichern</DButton>
      </div>
    </template>

    <div v-else class="editor__preview">
      <component
        :is="previewComponent"
        :data-source="datasourceProxy"
        :key="datasourceProxy.uid"
        @updateConfig="updateConfig"
      />
    </div>
  </div>
</template>

<style scoped>
.editor {
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
  min-height: 0;
}

.editor__fields {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 620px;
}

.editor__actions {
  display: flex;
  justify-content: flex-end;
  gap: 7px;
}

.editor__preview {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  overflow: auto;
}
</style>
