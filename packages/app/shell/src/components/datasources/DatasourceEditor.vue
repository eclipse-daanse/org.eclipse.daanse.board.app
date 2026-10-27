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
import { useEList, useRegistrations, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { cloneDeep } from 'lodash'
import { DButton, DIconPicker, DInput, DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import TagInput from './TagInput.vue'

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

const typeIcon = computed(
  () =>
    datasourceRepository.getDatasourceIdentifiers(datasourceProxy.value.type)?.icon ?? 'database',
)

/* Every tag already in use, so the same thing is not filed twice. */
const knownTags = computed(() => {
  const all = new Set<string>()
  for (const source of dataSources.value as any[]) {
    for (const tag of source.tags ?? []) all.add(tag)
  }
  return [...all].sort()
})

const availableDatasources = useRegistrations(
  datasourceRepository,
  () => datasourceRepository.registeredDatasources,
)

/*
 * Edited on a copy and committed on Save, the way it always was - what
 * changed is only where the copy comes from and where it goes back to.
 */
const load = () => {
  const dataSource = datasourceRepository.getDatasourceModel(props.itemId)
  datasourceProxy.value = dataSource
    ? {
        uid: dataSource.uid,
        name: dataSource.name,
        type: dataSource.type,
        icon: dataSource.icon ?? '',
        tags: [...(dataSource.tags ?? [])],
        config: cloneDeep(dataSource.config ?? {}),
      }
    : { tags: [] }
  saved.value = JSON.stringify(datasourceProxy.value.config ?? {})
}

/*
 * Set when the settings were stored but the live source could not be built
 * from them - a composer told too little to compose, say. The editor stays
 * open and says so, next to the fields its settings mark as missing; it
 * used to close on an uncaught error and show nothing at all.
 */
const notLive = ref(false)

/*
 * What the configuration was when it was last loaded or saved, as text.
 *
 * A preview edits the copy - the query a person builds there is a change
 * to the source - and it used to vanish with the tab: nothing said it had
 * not been kept, and the only way to keep it was the Save of another tab.
 * Comparing against this is what lets the preview say so and offer Save.
 * Saving there is deliberate, not automatic: every step of building a
 * query would otherwise rebuild the live store and every widget on it.
 */
const saved = ref('{}')
const unsaved = computed(() => JSON.stringify(datasourceProxy.value.config ?? {}) !== saved.value)

onMounted(load)

/* The preview holds the query it shows in state of its own, so going back
  to the saved version builds it afresh. */
const discarded = ref(0)
const discard = () => {
  load()
  discarded.value += 1
}

/**
 * Applies the copy to the source and keeps editing. Answers whether the live
 * source could be built from it, which is what decides the editor closes.
 */
const commit = () => {
  notLive.value = false
  const dataSource = datasourceRepository.getDatasourceModel(props.itemId)
  if (dataSource) {
    dataSource.name = datasourceProxy.value.name
    dataSource.type = datasourceProxy.value.type
    dataSource.icon = datasourceProxy.value.icon?.trim() || undefined
    /* Replaced wholesale: the EList is the model's, the array was a copy. */
    dataSource.tags.clear()
    for (const tag of datasourceProxy.value.tags ?? []) dataSource.tags.add(tag)
    dataSource.config = datasourceProxy.value.config
    /* The settings name the connection by id; the model holds the reference. */
    dataSource.connection = connections.value.find(
      (connection) => connection.uid === datasourceProxy.value.config?.connection,
    )
    try {
      datasourceRepository.saveDatasource(dataSource)
    } catch (error) {
      console.warn(`${dataSource.uid} is not live yet:`, error)
      notLive.value = true
    }
    /* saveDatasource writes the configuration to the model before it builds
      the store from it, so what the editor holds is what is stored - also
      when the store could not be built, which is what notLive says. */
    saved.value = JSON.stringify(datasourceProxy.value.config ?? {})
  }
  return !notLive.value
}

const saveDataSource = () => {
  if (commit()) emit('close')
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
const { t } = useTranslation('shell')
</script>
<template>
  <div class="editor">
    <template v-if="view === 'settings'">
      <div class="editor__fields">
        <DInput v-model="datasourceProxy.uid" label="UID" readonly />
        <DInput v-model="datasourceProxy.name" :label="t('Editor.name')" />
        <DSelect v-model="datasourceProxy.type" :label="t('Editor.type')" :options="availableDatasources" />
        <DIconPicker
          v-model="datasourceProxy.icon"
          :label="t('Editor.icon')"
          :fallback="typeIcon"
          :hint="t('Editor.iconHint')"
        />
        <TagInput
          v-model="datasourceProxy.tags"
          :label="t('Editor.tags')"
          :hint="t('Datasource.tagsHint')"
          :known="knownTags"
        />
        <component
          :is="settingsComponent"
          :config="datasourceProxy.config"
          :connections="connections"
          :dataSources="dataSources"
        />
      </div>
      <p v-if="notLive" class="editor__error" role="alert">{{ t('Editor.notLive') }}</p>
      <div class="editor__actions">
        <DButton intent="quiet" @click="$emit('close')">{{ t('common:Action.close') }}</DButton>
        <DButton intent="primary" @click="saveDataSource">{{ t('common:Action.save') }}</DButton>
      </div>
    </template>

    <template v-else>
      <div v-if="unsaved" class="editor__unsaved" role="status">
        <span class="editor__unsaved-text">{{ t('Editor.unsaved') }}</span>
        <DButton intent="quiet" size="sm" @click="discard">{{ t('Editor.discard') }}</DButton>
        <DButton intent="primary" size="sm" @click="commit">{{ t('common:Action.save') }}</DButton>
      </div>
      <div class="editor__preview">
        <component
          :is="previewComponent"
          :data-source="datasourceProxy"
          :key="`${datasourceProxy.uid}-${discarded}`"
          @updateConfig="updateConfig"
        />
      </div>
    </template>
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

.editor__error {
  margin: 0;
  padding: 10px 12px;
  font-size: var(--text-sm);
  line-height: 1.45;
  color: var(--color-err);
  border: 1px solid var(--color-err);
  border-radius: var(--radius-xs);
}

.editor__actions {
  display: flex;
  justify-content: flex-end;
  gap: 7px;
}

.editor__unsaved {
  display: flex;
  align-items: center;
  gap: 7px;
  flex: none;
  padding: 8px 12px;
  font-size: var(--text-sm);
  color: var(--color-fg);
  background-color: var(--color-sunken);
  border-left: 2px solid var(--color-warn, var(--color-accent));
  border-radius: var(--radius-sm);
}

.editor__unsaved-text {
  flex: 1;
}

.editor__preview {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  overflow: auto;
}
</style>
