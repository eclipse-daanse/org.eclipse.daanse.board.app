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
    <div class="configuration w-full h-full flex flex-col p-6  pl-18 ">
        <h1 class="text-2xl font-bold mb-6">Runtime Variables</h1>

        <!-- Search and control bar -->
        <div class="flex justify-between items-center mb-4">
            <div>
                <VaButton icon="add" @click="createVariable()">
                    Add Variable
                </VaButton>
            </div>
        </div>

        <!-- Variables list with grid layout -->
        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden flex-grow">
            <!-- Header row -->
            <div
                class="grid grid-cols-[180px_180px_180px_1fr_96px]
                    bg-gray-50 border-b border-gray-200
                    text-xs font-medium text-gray-500 uppercase tracking-wider
                "
            >
                <div class="px-6 py-3">Variable Name</div>
                <div class="px-6 py-3">Type</div>
                <div class="px-6 py-3">Current Value</div>
                <div class="px-6 py-3">Settings</div>
                <div class="px-6 py-3 text-right">Actions</div>
            </div>

            <!-- List items -->
            <div class="divide-y divide-gray-200">
                <div
                    class="grid grid-cols-[180px_180px_180px_1fr_96px]
                        items-center hover:bg-gray-50
                    "
                    v-for="variable in variables" :key="variable.key">
                    <div class="px-6 py-3">
                        {{ variable.name }}
                    </div>
                    <div class="px-6 py-3">
                        {{ variable.type }}
                    </div>
                    <div class="px-6 py-3">
                        {{ getVariableValue(variable.name) }}
                    </div>
                    <div class="px-6 py-3">
                        <!-- {{ variable }} -->
                    </div>
                    <div class="px-6 py-3 text-sm font-medium flex justify-end gap-2">
                        <VaButton icon="edit" size="small" preset="secondary"
                            @click="editVariable(variable.name)">
                        </VaButton>
                        <VaButton icon="delete" size="small" color="danger"
                            @click="removeVariable(variable.name)">
                        </VaButton>
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
import { onMounted, ref, computed } from 'vue';
import { VariableRepository, identifier }
    from 'org.eclipse.daanse.board.app.lib.repository.variable';
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { useVariablesStore } from '@/stores/VariablesPinia'

const { variables, createVariable, removeVariable, updateVariable } = useVariablesStore();


const showVariableModal = ref(false);
const currentlySelectedVariable = ref(null);
const currentlySelectedType = ref(null);
const options = ref([] as any[]);
const variableProxy = ref(null as unknown as any);

onMounted(() => {
    const variableRepository = container.get<VariableRepository>(identifier)
    const variableTypes = variableRepository.getRegisteredVariableTypes();
    options.value = variableTypes;
})

const saveVariable = () => {
    console.log(variableProxy.value)

    // Can do better. TODO: add the issue, update the logic
    updateVariable({
        name: variableProxy.value.name,
        originalName: currentlySelectedVariable.value,
        type: currentlySelectedType.value,
        config: {
            value: variableProxy.value.value,
            expression: variableProxy.value.expression,
        }
    })

    variableProxy.value = null;
    currentlySelectedVariable.value = null;
    showVariableModal.value = false;
}

const editVariable = (name: any) => {
    currentlySelectedVariable.value = name;
    const variableRepository = container.get<VariableRepository>(identifier)
    const variable = variableRepository.getVariable(name);
    if (variable) {
        currentlySelectedType.value = variable.type;
    }
    variableProxy.value = {
        value: variable?.value,
        expression: variable?.expression,
        name,
    }

    console.log(variableProxy.value)

    showVariableModal.value = true;
}

const currentEditor = computed(() => {
    const variableRepository = container.get<VariableRepository>(identifier)
    const type = currentlySelectedType.value;
    if (!type) {
        return null;
    }
    const identifiers = variableRepository.getVariableIdentifiers(type);
    return identifiers?.Settings;
})

const getVariableValue = (name: any) => {
    const variableRepository = container.get<VariableRepository>(identifier)
    const variable = variableRepository.getVariable(name);
    if (variable) {
        return variable.value;
    }
    return null;
}
</script>
