<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script lang="ts" setup>
import { ref, watch, markRaw } from 'vue'
import { VariableInput } from 'org.eclipse.daanse.board.app.ui.vue.variable.components'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'

interface IDataTableSettings {
  headerBackground: string | VariableWrapper<string>
}

const widgetSettings = defineModel<IDataTableSettings>({ required: true });

const opened = ref(false)

watch(() => widgetSettings.value, (newVal) => {
    if (newVal) {
        if (!(newVal.headerBackground instanceof VariableWrapper)) {
            newVal.headerBackground = markRaw(new VariableWrapper<string>(newVal.headerBackground || ''));
        }
    }
}, { immediate: true, deep: true });
</script>

<template>
  <va-collapse v-model="opened" header="Data Table Settings" icon="settings">
    <div class="settings-container">
      <VariableInput v-model="(widgetSettings.headerBackground as unknown as VariableWrapper<string>)" label="Header Color">
        <template #default="{ value, change }">
          <va-color-input
            class="text-color"
            label="Header Color"
            :model-value="value"
            @input="change"
          />
        </template>
      </VariableInput>
    </div>
  </va-collapse>
</template>
<style scoped>
  .settings-container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
</style>
