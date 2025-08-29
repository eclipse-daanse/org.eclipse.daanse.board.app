<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<template>
  <div class="configuration w-full h-full flex flex-col p-6 pl-18">
    <h1 class="text-2xl font-bold mb-6">Variables Configuration</h1>

    <!-- Two column layout -->
    <div class="flex gap-6 flex-grow">
      <!-- Left column: Global Variables -->
      <div class="w-1/2 flex flex-col">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">Global Variables</h2>
          <VaButton icon="add" @click="store.createVariable()">
            Add Global Variable
          </VaButton>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden flex-grow">
          <!-- Header row -->
          <div class="grid grid-cols-[1fr_120px_120px_80px] bg-gray-50 border-b
                    border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider">
            <div class="px-4 py-3">Name</div>
            <div class="px-4 py-3">Type</div>
            <div class="px-4 py-3">Value</div>
            <div class="px-4 py-3 text-right">Actions</div>
          </div>

          <!-- List items -->
          <div class="divide-y divide-gray-200">
            <template v-for="variable in store.variables" :key="variable.id">
              <div class="grid grid-cols-[1fr_120px_120px_80px] items-center
                        hover:bg-gray-50" v-if="variable.scope == VariableScope.Global">
                <div class="px-4 py-3 truncate">{{ variable.name }}</div>
                <div class="px-4 py-3">{{ variable.type }}</div>
                <div class="px-4 py-3 truncate">{{ getVariableValue(variable.id) }}
                </div>
                <div class="px-4 py-3 flex justify-end gap-1">
                  <VaButton icon="edit" size="small" preset="secondary"
                            @click="editVariable(variable.id)"></VaButton>
                  <VaButton icon="delete" size="small" color="danger"
                            @click="store.removeVariable(variable.id)"></VaButton>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>

      <!-- Right column: Page Variables -->
      <div class="w-1/2 flex flex-col">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">Page Variables</h2>
          <VaButton icon="add" @click="createPageVariable" :disabled="!selectedPageId">
            Add Page Variable
          </VaButton>
        </div>

        <!-- Page selector -->
        <div class="mb-4">
          <VaSelect
            v-model="selectedPageId"
            label="Select Page"
            :options="pages"
            value-by="id"
            text-by="name"
            placeholder="Choose a page to view variables"
            @update:model-value="onPageSelected"
          />
        </div>

        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden flex-grow">
          <!-- Header row -->
          <div class="grid grid-cols-[1fr_120px_120px_80px] bg-gray-50 border-b
                    border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider">
            <div class="px-4 py-3">Name</div>
            <div class="px-4 py-3">Access Mode</div>
            <div class="px-4 py-3">Value</div>
            <div class="px-4 py-3 text-right">Actions</div>
          </div>

          <!-- Page variables list -->
          <div class="divide-y divide-gray-200"
                v-if="selectedPageId && currentPageVariables">
            <div class="grid grid-cols-[1fr_120px_120px_80px] items-center
                        hover:bg-gray-50"
                  v-for="variable in currentPageVariables" :key="variable.id">
              <div class="px-4 py-3 truncate">{{ variable.name }}</div>
              <div class="px-4 py-3">
                {{ getAccessModeText(variable.accessMode) }}
              </div>
              <div class="px-4 py-3 truncate">{{ variable.value }}</div>
              <div class="px-4 py-3 flex justify-end gap-1">
                <VaButton icon="edit" size="small" preset="secondary"
                          @click="editVariable(variable.id)"></VaButton>
                <VaButton icon="delete" size="small" color="danger"
                          @click="store.removeVariable(variable.id)"></VaButton>
              </div>
            </div>
          </div>

          <!-- Empty state for page variables -->
          <div v-else-if="selectedPageId" class="p-8 text-center text-gray-500">
            <div class="text-2xl mb-2">📋</div>
            <p>No page variables found for this page</p>
          </div>

          <!-- No page selected state -->
          <div v-else class="p-8 text-center text-gray-500">
            <div class="text-2xl mb-2">📄</div>
            <p>Select a page to view its variables</p>
          </div>
        </div>
      </div>
    </div>
    <VaModal
      v-model="showVariableModal" title="Edit Variable"
      ok-text="Save" cancel-text="Cancel"
      @ok="saveVariable" @cancel="showVariableModal = false"
    >
      <div class="flex flex-col gap-4">
        <VaSelect
          :options="options"
          v-model="currentlySelectedType"
          label="Type"
        ></VaSelect>
        <component :is="currentEditor" v-model="variableProxy"
                    :variable="currentlySelectedVariable">
        </component>
        <VaSelect
          v-model="variableProxy.accessMode"
          label="Access Mode"
          :options="[
                    { value: 'readonly', text: 'Read Only' },
                    { value: 'page-only', text: 'Page Only' },
                    { value: 'external-writable', text: 'External Writable' }
                ]"
          value-by="value"
          text-by="text"
          placeholder="Select access mode" />


      </div>
    </VaModal>

    <!-- Empty state (uncomment to use) -->
    <!--
  <div class="p-8 flex flex-col items-center justify-center text-center text-gray-500">
    <div class="text-5xl mb-4">📋</div>
    <p class="mb-4">No variables found</p>
    <VaButton preset="primary" icon="add">Add Variable</VaButton>
  </div>
  -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { type VariableRepository, identifier }
  from 'org.eclipse.daanse.board.app.lib.repository.variable'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { useVariablesStore } from '@/stores/VariablesPinia'
import {
  VariableScope,
  VariableAccessMode,
  type Variable,
  CONSTANT_VARIABLE
} from 'org.eclipse.daanse.board.app.lib.variables'
import { identifier as PageRepoIdentifier, type PageRegistryI }
  from 'org.eclipse.daanse.board.app.lib.repository.page'

const store = useVariablesStore()

const pages = ref([] as any[])
const selectedPageId = ref<string>('')


const showVariableModal = ref(false)
const currentlySelectedVariable = ref(null)
const currentlySelectedVariableVar = ref<Variable | null>(null)
const currentlySelectedType = ref(null)
const options = ref([] as any[])
const variableProxy = ref(null as unknown as any)

onMounted(() => {
  const variableRepository = container.get<VariableRepository>(identifier)
  const pageRepository = container.get<PageRegistryI>(PageRepoIdentifier)

  const variableTypes = variableRepository.getRegisteredVariableTypes()
  options.value = variableTypes

  // Load all pages
  pages.value = pageRepository.getAllPageIds().map(id => pageRepository.getPage(id))
})

const saveVariable = () => {
  // Build config object based on variable type and available fields
  const config: any = {}

  // Copy all fields from variableProxy except 'name' (which is handled separately)
  Object.keys(variableProxy.value).forEach(key => {
    if (key !== 'name') {
      config[key] = variableProxy.value[key]
    }
  })

  // Update the actual variable in the repository with new values
  const variableRepository = container.get<VariableRepository>(identifier)
  const variable = variableRepository.getVariableById(currentlySelectedVariable.value)
  if (variable) {
    // Update the variable with new properties from proxy
    Object.keys(variableProxy.value).forEach(key => {
      if (key !== 'name' && key !== 'id' && variable.hasOwnProperty(key)) {
        (variable as any)[key] = variableProxy.value[key]
      }
    })
  }

  store.updateVariable({
    id: currentlySelectedVariable.value,
    name: variableProxy.value.name,
    originalName: variable?.name,
    type: currentlySelectedType.value,
    config
  })

  variableProxy.value = null
  currentlySelectedVariable.value = null
  currentlySelectedVariableVar.value = null
  showVariableModal.value = false
}

const editVariable = (id: any) => {
  currentlySelectedVariable.value = id
  const variableRepository = container.get<VariableRepository>(identifier)
  const variable = variableRepository.getVariableById(id)
  if (variable) {
    currentlySelectedType.value = variable.type
    currentlySelectedVariableVar.value = variable
  }

  // Create proxy object with all variable properties
  variableProxy.value = {
    id: variable?.id,
    name: variable?.name,
    value: variable?.value,
    expression: variable?.expression,
    scope: variable?.scope || 'global',
    accessMode: variable?.accessMode || 'external-writable',
    pageId: variable?.pageId,
    ...variable?.serialize?.() // Include any additional serialized properties
  }

  showVariableModal.value = true
}

const currentEditor = computed(() => {
  const variableRepository = container.get<VariableRepository>(identifier)
  const type = currentlySelectedType.value
  if (!type) {
    return null
  }
  const identifiers = variableRepository.getVariableIdentifiers(type)
  return identifiers?.Settings
})

const getVariableValue = (id: any) => {
  const variableRepository = container.get<VariableRepository>(identifier)
  const variable = variableRepository.getVariableById(id)
  if (variable) {
    return variable.value
  }
  return null
}

const currentPageVariables = computed(() => {
  if (!selectedPageId.value) return []
  if (!store.variables || !Array.isArray(store.variables)) return []

  return store.variables.filter(v => {
    return v.pageId === selectedPageId.value
  })
})


const getAccessModeText = (mode: string) => {
  switch (mode) {
    case VariableAccessMode.ReadOnly:
      return 'Read Only'
    case VariableAccessMode.PageOnly:
      return 'Page Only'
    case VariableAccessMode.ExternalWritable:
      return 'External'
    default:
      return mode
  }
}

const createPageVariable = () => {
  store.createVariable(CONSTANT_VARIABLE, {
    value: 'test', pageId: selectedPageId.value,
    accessMode: VariableAccessMode.ExternalWritable, scope: VariableScope.Page
  })
}

const onPageSelected = (pageId: string) => {
  // The computed property will automatically update
}
</script>
