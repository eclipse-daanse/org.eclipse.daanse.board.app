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
      <div class="toolbar">
        <!-- Font Size & Color -->
        <div class="toolbar-group toolbar-group--inputs">
          <VariableInput v-model="widgetSettings.fontSize" :label="t('textBase:TextWidget.fontSize')">
            <template #default="{ value, change }">
              <va-input :model-value="value" @input="change" placeholder="Size" class="toolbar-input" />
            </template>
          </VariableInput>
          <VariableInput v-model="widgetSettings.fontColor" :label="t('textBase:TextWidget.fontColor')">
            <template #default="{ value, change }">
              <va-color-input :model-value="value" @input="change" class="toolbar-input" />
            </template>
          </VariableInput>
        </div>
        <!-- Text Format -->
        <div class="toolbar-group">
          <VaButton class="toolbar-btn" size="small" preset="secondary"
            icon="format_bold"
            :class="{ 'is-active': widgetSettings.fontWeight.value === 'bold' }"
            @click="widgetSettings.fontWeight.value = widgetSettings.fontWeight.value === 'bold' ? 'normal' : 'bold'"
            title="Bold"
          />
          <VaButton class="toolbar-btn" size="small" preset="secondary"
            icon="format_italic"
            :class="{ 'is-active': widgetSettings.fontStyle.value === 'italic' }"
            @click="widgetSettings.fontStyle.value = widgetSettings.fontStyle.value === 'italic' ? 'normal' : 'italic'"
            title="Italic"
          />
          <VaButton class="toolbar-btn" size="small" preset="secondary"
            icon="format_underlined"
            :class="{ 'is-active': widgetSettings.textDecoration.value === 'underline' }"
            @click="widgetSettings.textDecoration.value = widgetSettings.textDecoration.value === 'underline' ? 'None' : 'underline'"
            title="Underline"
          />
        </div>
        <!-- Horizontal Align -->
        <div class="toolbar-group">
          <VaButton class="toolbar-btn" size="small" preset="secondary"
            icon="format_align_left"
            :class="{ 'is-active': widgetSettings.horizontalAlign.value === 'Left' }"
            @click="widgetSettings.horizontalAlign.value = 'Left'"
            title="Left"
          />
          <VaButton class="toolbar-btn" size="small" preset="secondary"
            icon="format_align_center"
            :class="{ 'is-active': widgetSettings.horizontalAlign.value === 'Center' }"
            @click="widgetSettings.horizontalAlign.value = 'Center'"
            title="Center"
          />
          <VaButton class="toolbar-btn" size="small" preset="secondary"
            icon="format_align_right"
            :class="{ 'is-active': widgetSettings.horizontalAlign.value === 'Right' }"
            @click="widgetSettings.horizontalAlign.value = 'Right'"
            title="Right"
          />
        </div>
        <!-- Vertical Align -->
        <div class="toolbar-group">
          <VaButton class="toolbar-btn" size="small" preset="secondary"
            icon="vertical_align_top"
            :class="{ 'is-active': widgetSettings.verticalAlign.value === 'Top' }"
            @click="widgetSettings.verticalAlign.value = 'Top'"
            title="Top"
          />
          <VaButton class="toolbar-btn" size="small" preset="secondary"
            icon="vertical_align_center"
            :class="{ 'is-active': widgetSettings.verticalAlign.value === 'Center' }"
            @click="widgetSettings.verticalAlign.value = 'Center'"
            title="Center"
          />
          <VaButton class="toolbar-btn" size="small" preset="secondary"
            icon="vertical_align_bottom"
            :class="{ 'is-active': widgetSettings.verticalAlign.value === 'Bottom' }"
            @click="widgetSettings.verticalAlign.value = 'Bottom'"
            title="Bottom"
          />
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

.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  padding: 0.5rem;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
}

.toolbar-group {
  display: flex;
  gap: 2px;
  padding-right: 0.5rem;
  margin-right: 0.25rem;
  border-right: 1px solid #e5e7eb;
}

.toolbar-group:last-child {
  border-right: none;
  padding-right: 0;
  margin-right: 0;
}

.toolbar-btn {
  min-width: 28px !important;
  height: 28px !important;
  padding: 0 4px !important;
  border: 1px solid transparent !important;
  border-radius: 0.25rem !important;
}

.toolbar-btn:hover {
  background-color: #e5e7eb !important;
}

.is-active {
  background-color: #fff3e0 !important;
  border-color: rgb(236, 156, 29) !important;
  color: #c45e00 !important;
}

.toolbar-group--inputs {
  align-items: center;
  gap: 0.25rem;
}

.toolbar-input {
  max-width: 70px;
}
</style>
