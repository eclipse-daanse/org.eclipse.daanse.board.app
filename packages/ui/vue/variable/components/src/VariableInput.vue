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
import { onMounted, ref, computed } from 'vue';
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { identifier, VariableRepository } from 'org.eclipse.daanse.board.app.lib.repository.variable'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'


const options = ref([] as Array<VariableOption>);
const model = defineModel<VariableWrapper<any>>({ required: true });
const props = defineProps<{ label?: string }>();

interface VariableOption {
  label: string;
  value: string;
}

let usesVariable = ref(false);
if (model.value.isSet) {
  usesVariable.value = true;
}

onMounted(() => {
  const variableRepository = container.get<VariableRepository>(identifier)
  options.value = variableRepository.getAllVariables().map(([name, value]) => {
    const variable = variableRepository.getVariable(name);

    return {
      label: variable.name,
      value: variable.value,
    }
  });
})

const getVariableValue = (name: string) => {
  const variableRepository = container.get<VariableRepository>(identifier)
  const variable = variableRepository.getVariable(name);
  return variable ? variable.value : null;
}

const onChange = (e: any) => {
  model.value.value = e.target.value;
}

const setVariable = (v: VariableOption) => {
  const name = v.label;
  const variableRepository = container.get<VariableRepository>(identifier)
  const variable = variableRepository.getVariable(name);

  model.value.setTo(variable);
}

const selectModel = computed(() => {
  const name = model.value.variable || '' as string;
  let variable = null as null | VariableWrapper<any>;

  if (name) {
    const variableRepository = container.get<VariableRepository>(identifier)
    variable = variableRepository.getVariable(name);
  }

  return {
    label: name,
    value: variable?.value || null,
  }
})
</script>
<template>
  <div class="flex items-end justify-between gap-2 variable-input">
    <template v-if="!usesVariable">
      <div class="input-block">
        <slot :value="model.value" :change="onChange"></slot>
      </div>
      <VaIcon
        name="code"
        class="toggle"
        @click="usesVariable = true"
      />
    </template>
    <template v-else>
      <VaSelect
        :model-value="selectModel"
        :options="options"
        text-by="label"
        placeholder="Select an variable to bind"
        class="input-block"
        :label="props.label"
        @update:modelValue="setVariable"
      >
        <template #content="{ value }">
          {{ value.label }} ({{ getVariableValue(value.label) }})
        </template>
        <template #option="{ option, selectOption }">
          <div class="flex items-center justify-between" @click="selectOption(option)">
            {{ option.label }} ({{ option.value }})
          </div>
        </template>
      </VaSelect>
      <VaIcon
        name="code"
        color="#E19840"
        class="toggle"
        @click="usesVariable = false"
      />
    </template>
    <!-- TODO: replace with propper icon -->
  </div>
</template>

<style>
.variable-input {
  width: 100%;
  align-items: flex-end;
}

.variable-input .toggle {
  margin-bottom: 10px;
}

.variable-input .input-block {
  flex-grow: 1;
}
</style>
