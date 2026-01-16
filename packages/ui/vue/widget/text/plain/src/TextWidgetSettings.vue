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
import { inject, ref } from 'vue'
import type { i18n } from "org.eclipse.daanse.board.app.lib.i18next"
import { useVariableRepository, VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { identifier, VariableRepository } from 'org.eclipse.daanse.board.app.lib.repository.variable'
import { TextSettings } from './gen/TextSettings'
import { VariableInput, ComplexTextInput } from 'org.eclipse.daanse.board.app.ui.vue.variable.components'

const previews = ref({
} as Record<string, boolean>)

const opened = ref({
  widgetSection: false,
  storeSection: false,
})

const widgetSettings = defineModel<TextSettings>({ required: true })
console.log(widgetSettings)
const variableRepository = container.get<VariableRepository>(identifier)

const i18n: i18n | undefined = inject('i18n');
const t = (key: string) => (i18n) ? i18n.t(key) : key;

</script>

<template>
  <va-collapse v-model="opened.widgetSection" icon="settings" :header="t('textBase:TextWidget.title')">
    <div class="settings-container">
      <div class="settings-block">
        <ComplexTextInput v-model="widgetSettings.text">
          <template #default="{ value, change }">
            <VaInput
              :modelValue="value"
              @input="change"
              :label="t('textBase:TextWidget.label')"
              placeholder="Enter text with variables..."
              class="w-full"
            />
          </template>
        </ComplexTextInput>
      </div>
      <div class="settings-block">
        <VariableInput v-model="widgetSettings.fontSize" :label="t('textBase:TextWidget.fontSize')">
          <template #default="{ value, change }">
            <va-input :label="t('textBase:TextWidget.fontSize')" :model-value="value" class="w-full" @input="change">
            </va-input>
          </template>
        </VariableInput>
      </div>
      <div class="settings-block">
        <VariableInput v-model="widgetSettings.fontColor" :label="t('textBase:TextWidget.fontColor')">
          <template #default="{ value, change }">
            <va-color-input class="text-color w-full" :label="t('textBase:TextWidget.fontColor')"
              :model-value="value" @input="change" />
          </template>
        </VariableInput>
      </div>
      <div class="settings-block">
        <div class="align-buttons-group align-buttons-group__format">
          <VaButton class="align-button" icon="format_bold" size="small" icon-color="#000000" :color="widgetSettings.fontWeight.value === 'bold' ? '#606060' : '#fafafa'
            " @click="
              widgetSettings.fontWeight.value === 'bold'
                ? (widgetSettings.fontWeight.value = 'normal')
                : (widgetSettings.fontWeight.value = 'bold')
              " />
          <VaButton class="align-button" icon="format_italic" size="small" icon-color="#000000" :color="widgetSettings.fontStyle.value === 'italic' ? '#606060' : '#fafafa'
            " @click="
              widgetSettings.fontStyle.value === 'italic'
                ? (widgetSettings.fontStyle.value = 'normal')
                : (widgetSettings.fontStyle.value = 'italic')
              " />
          <VaButton class="align-button" icon="format_underline" size="small" icon-color="#000000" :color="widgetSettings.textDecoration.value === 'underline'
            ? '#606060'
            : '#fafafa'
            " @click="
              widgetSettings.textDecoration.value === 'underline'
                ? (widgetSettings.textDecoration.value = 'None')
                : (widgetSettings.textDecoration.value = 'underline')
              " />
        </div>
        <div class="align-buttons-group">
          <div class="align-horizontal-buttons">
            <VaButton class="align-button" icon="align_horizontal_left" size="small" icon-color="#000000" :color="widgetSettings.horizontalAlign.value === 'Left'
              ? '#606060'
              : '#fafafa'
              " @click="widgetSettings.horizontalAlign.value = 'Left'" />
            <VaButton class="align-button" icon="align_horizontal_center" size="small" icon-color="#000000" :color="widgetSettings.horizontalAlign.value === 'Center'
              ? '#606060'
              : '#fafafa'
              " @click="widgetSettings.horizontalAlign.value = 'Center'" />
            <VaButton class="align-button" icon="align_horizontal_right" size="small" icon-color="#000000" :color="widgetSettings.horizontalAlign.value === 'Right'
              ? '#606060'
              : '#fafafa'
              " @click="widgetSettings.horizontalAlign.value = 'Right'" />
          </div>
        </div>
        <div class="align-buttons-group">
          <div class="align-vertical-buttons">
            <VaButton class="align-button" icon="align_vertical_top" size="small" icon-color="#000000" :color="widgetSettings.verticalAlign.value === 'Top' ? '#606060' : '#fafafa'
              " @click="widgetSettings.verticalAlign.value = 'Top'" />
            <VaButton class="align-button" icon="align_vertical_center" size="small" icon-color="#000000" :color="widgetSettings.verticalAlign.value === 'Center'
              ? '#606060'
              : '#fafafa'
              " @click="widgetSettings.verticalAlign.value = 'Center'" />
            <VaButton class="align-button" icon="align_vertical_bottom" size="small" icon-color="#000000" :color="widgetSettings.verticalAlign.value === 'Bottom'
              ? '#606060'
              : '#fafafa'
              " @click="widgetSettings.verticalAlign.value = 'Bottom'" />
          </div>
        </div>
      </div>
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

.settings-block {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.text-title {
  width: 100%;
}

.text-size {
  width: 100%;
  margin-left: 12px;
}

.text-weight {
  width: 100px;
}

.loading {
  height: 100%;
  padding: 50px;
  border-radius: 4px;
  margin-bottom: 1rem;
  background-color: var(--app-response-background);
}

.align-buttons-group .align-button:hover {
  --va-background-color: #a2b5da !important;
}

.align-buttons-group {
  display: flex;
  align-self: flex-end;
  border: 2px solid #cdcfdb;
  border-radius: 4px;
}

.align-buttons-group__format {
  width: 100%;
}

.align-buttons-group .align-vertical-buttons,
.align-buttons-group .align-horizontal-buttons {
  display: flex;
}

.align-buttons-group .align-button {
  width: 100%;
  height: 32px;
  padding: 0 7.5px;
}
</style>
