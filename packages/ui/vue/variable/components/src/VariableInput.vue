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
import { inject, onMounted, ref, computed, watch } from 'vue';
import { identifier, VariableRepository } from 'org.eclipse.daanse.board.app.lib.api.variable'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'


const options = ref([] as Array<VariableOption>);
const model = defineModel<VariableWrapper<any>>({ required: true });
const props = defineProps<{ label?: string }>();

interface VariableOption {
  label: string;
  value: string;
}

let usesVariable = ref(false);

// Watch for model changes and update usesVariable accordingly
watch(() => model.value?.isSet, (isSet) => {
  if (isSet) {
    usesVariable.value = true;
  }
}, { immediate: true });

onMounted(() => {
  const variableRepository = inject<VariableRepository>(identifier)!
  options.value = variableRepository.getAllVariables().map(([name, value]) => {
    const variable = variableRepository.getVariable(name);

    return {
      label: variable.name,
      value: variable.value,
    }
  });
})

const getVariableValue = (name: string) => {
  const variableRepository = inject<VariableRepository>(identifier)!
  const variable = variableRepository.getVariable(name);
  return variable ? variable.value : null;
}

/**
 * The new value, however the control reports it.
 *
 * A control in the slot may hand back the value or the event that carried
 * it - Vuestic's inputs emit update:modelValue with the value, a plain
 * input emits an event. Reading both here is what lets the slot take any
 * control without its caller knowing which kind it got.
 */
function valueOf(given: unknown): string {
  const event = given as { target?: { value?: unknown } } | null
  if (event && typeof event === 'object' && event.target && 'value' in event.target) {
    return String(event.target.value ?? '')
  }
  return given == null ? '' : String(given)
}

const onChange = (given: unknown) => {
  if (model.value) {
    model.value.value = valueOf(given);
  }
}

const setVariable = (v: VariableOption) => {
  if (!model.value) return;
  const name = v.label;
  const variableRepository = inject<VariableRepository>(identifier)!
  const variable = variableRepository.getVariable(name);

  model.value.setTo(variable);
}

const selectModel = computed(() => {
  const name = model.value?.variable || '' as string;
  let variable = null as null | VariableWrapper<any>;

  if (name) {
    const variableRepository = inject<VariableRepository>(identifier)!
    variable = variableRepository.getVariable(name);
  }

  return {
    label: name,
    value: variable?.value || null,
  }
})
</script>
<template>
  <div v-if="model" class="flex items-end justify-between gap-2 variable-input">
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
