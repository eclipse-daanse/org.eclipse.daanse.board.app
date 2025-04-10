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
import type { ITextSettings } from './index'
import { ref } from 'vue'
// import { useI18n } from "vue-i18n";

const opened = ref({
  widgetSection: false,
  storeSection: false,
})

const widgetSettings = defineModel<ITextSettings>({ required: true })

// const { t } = useI18n();
const t = (key: string) => key
</script>

<template>
  <va-collapse v-model="opened.widgetSection" :header="t('TextWidget.title')">
    <div class="settings-container">
      <div class="settings-block">
        <va-input
          class="text-title"
          :label="t('TextWidget.label')"
          v-model="widgetSettings.text"
        />
        <va-input
          class="text-size"
          :label="t('TextWidget.fontSize')"
          v-model="widgetSettings.fontSize"
        />
      </div>
      <div class="settings-block">
        <va-color-input
          class="text-color"
          :label="t('TextWidget.fontColor')"
          v-model="widgetSettings.fontColor"
        />
        <div class="align-buttons-group align-buttons-group__format">
          <VaButton
            class="align-button"
            icon="format_bold"
            size="small"
            icon-color="#000000"
            :color="
              widgetSettings.fontWeight === 'bold' ? '#5983d4' : '#fafafa'
            "
            @click="
              widgetSettings.fontWeight === 'bold'
                ? (widgetSettings.fontWeight = 'normal')
                : (widgetSettings.fontWeight = 'bold')
            "
          />
          <VaButton
            class="align-button"
            icon="format_italic"
            size="small"
            icon-color="#000000"
            :color="
              widgetSettings.fontStyle === 'italic' ? '#5983d4' : '#fafafa'
            "
            @click="
              widgetSettings.fontStyle === 'italic'
                ? (widgetSettings.fontStyle = 'normal')
                : (widgetSettings.fontStyle = 'italic')
            "
          />
          <VaButton
            class="align-button"
            icon="format_underline"
            size="small"
            icon-color="#000000"
            :color="
              widgetSettings.textDecoration === 'underline'
                ? '#5983d4'
                : '#fafafa'
            "
            @click="
              widgetSettings.textDecoration === 'underline'
                ? (widgetSettings.textDecoration = 'None')
                : (widgetSettings.textDecoration = 'underline')
            "
          />
        </div>
      </div>
      <div class="settings-block">
        <div class="align-buttons-group">
          <div class="align-horizontal-buttons">
            <VaButton
              class="align-button"
              icon="align_horizontal_left"
              size="small"
              icon-color="#000000"
              :color="
                widgetSettings.horizontalAlign === 'Left'
                  ? '#5983d4'
                  : '#fafafa'
              "
              @click="widgetSettings.horizontalAlign = 'Left'"
            />
            <VaButton
              class="align-button"
              icon="align_horizontal_center"
              size="small"
              icon-color="#000000"
              :color="
                widgetSettings.horizontalAlign === 'Center'
                  ? '#5983d4'
                  : '#fafafa'
              "
              @click="widgetSettings.horizontalAlign = 'Center'"
            />
            <VaButton
              class="align-button"
              icon="align_horizontal_right"
              size="small"
              icon-color="#000000"
              :color="
                widgetSettings.horizontalAlign === 'Right'
                  ? '#5983d4'
                  : '#fafafa'
              "
              @click="widgetSettings.horizontalAlign = 'Right'"
            />
          </div>
          <div class="align-vertical-buttons ml-2">
            <VaButton
              class="align-button"
              icon="align_vertical_top"
              size="small"
              icon-color="#000000"
              :color="
                widgetSettings.verticalAlign === 'Top' ? '#5983d4' : '#fafafa'
              "
              @click="widgetSettings.verticalAlign = 'Top'"
            />
            <VaButton
              class="align-button"
              icon="align_vertical_center"
              size="small"
              icon-color="#000000"
              :color="
                widgetSettings.verticalAlign === 'Center'
                  ? '#5983d4'
                  : '#fafafa'
              "
              @click="widgetSettings.verticalAlign = 'Center'"
            />
            <VaButton
              class="align-button"
              icon="align_vertical_bottom"
              size="small"
              icon-color="#000000"
              :color="
                widgetSettings.verticalAlign === 'Bottom'
                  ? '#5983d4'
                  : '#fafafa'
              "
              @click="widgetSettings.verticalAlign = 'Bottom'"
            />
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
  justify-content: space-between;
}

.text-title {
  width: 100%;
}

.text-size {
  width: 63px;
  margin-left: 12px;
}

.text-color {
  width: 156px;
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
  margin-left: 12px;
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
