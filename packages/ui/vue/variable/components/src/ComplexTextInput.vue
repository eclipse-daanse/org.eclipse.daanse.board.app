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
import { VariableComplexStringWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { Mentionable } from 'vue-mention';
import { onMounted, ref, nextTick, useSlots } from 'vue';
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { identifier, VariableRepository } from 'org.eclipse.daanse.board.app.lib.repository.variable'

interface VariableOption {
  currentValue: string;
  value: string;
}

const model = defineModel<VariableComplexStringWrapper>({ required: true });
const props = defineProps<{ label?: string }>();
const variableItems = ref([] as Array<VariableOption>);
const inputRef = ref();
// const slots = useSlots();

onMounted(() => {
  const variableRepository = container.get<VariableRepository>(identifier)
  variableItems.value = variableRepository.getAllVariables().map(([name]) => {
    const variable = variableRepository.getVariable(name);

    return {
      value: variable.name,
      currentValue: variable.value,
    }
  });
})

const onVariableSelect = () => {
  nextTick(() => {
    const el = inputRef.value?.querySelector('input, textarea') as HTMLInputElement | null;
    if (!el) return;

    const pos = el.selectionStart as number;
    const currentText = el.value;

    if (currentText.charAt(pos) !== '}') {
      model.value.value =
        currentText.slice(0, pos) + '}' + currentText.slice(pos);

      nextTick(() => {
        el.setSelectionRange(pos + 1, pos + 1);
      });
    }
  });
};
const updateValue = (e: any) => {
  model.value.value = e.target.value;
}
</script>
<template>
  <div class="complex-input-wrapper w-full">
    <div class="complex-input w-full">
      <Mentionable
        :keys="['{']"
        :items="variableItems"
        offset="6"
        @apply="onVariableSelect"
      >
          <div class="w-full" ref="inputRef">
            <slot :value="model.original" :change="updateValue"></slot>
          </div>
          <template #item="{ item }">
            <div class="complex-input-item">
              {{ item.value }} ({{ item.currentValue }})
            </div>
          </template>
      </Mentionable>
    </div>
    <div class="tip">
      Tip: format for variables is {variableName}.
    </div>
  </div>
</template>
<style>
.v-popper__popper {
  z-index: 10000000000 !important;
}

.complex-input-item {
  padding: 5px 10px;
  cursor: pointer;
}

.complex-input-item:hover {
  background-color: #efefef;
}

.mention-selected {
  background-color: #f0f0f0;
}

.complex-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.complex-input-wrapper .tip {
  font-size: 12px;
  color: #666;
}
</style>
