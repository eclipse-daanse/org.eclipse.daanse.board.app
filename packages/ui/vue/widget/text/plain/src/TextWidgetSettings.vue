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
import { inject, ref } from 'vue'
import type { i18n } from "org.eclipse.daanse.board.app.lib.i18next"
import { useVariableRepository, VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { identifier, VariableRepository } from 'org.eclipse.daanse.board.app.lib.repository.variable'

const previews = ref({
} as Record<string, boolean>)

const opened = ref({
  widgetSection: false,
  storeSection: false,
})
const timestamp = ref(null);

const widgetSettings = defineModel<ITextSettings>({ required: true })
console.log(widgetSettings)
const variableRepository = container.get<VariableRepository>(identifier)

/*const {
  text,
  fontSize,
  fontColor,
  horizontalAlign,
  fontWeight,
  fontStyle,
  textDecoration
} = wrapParameters({
  text: computed(() => widgetSettings.value.text),
  fontSize: computed(() => widgetSettings.value.fontSize),
  fontColor: computed(() => widgetSettings.value.fontColor),
  horizontalAlign: computed(() => widgetSettings.value.horizontalAlign),
  fontWeight: computed(() => widgetSettings.value.fontWeight),
  fontStyle: computed(() => widgetSettings.value.fontStyle),
  textDecoration: computed(() => widgetSettings.value.textDecoration),
});*/

const i18n: i18n | undefined = inject('i18n');
const t = (key: string) => (i18n) ? i18n.t(key) : key;

const addVariable =() =>{
  const var_test = variableRepository.getVariable('test');
  console.log(var_test);
  console.log(var_test.value);

}
const addVariable2 =() =>{
  const var_test2 = variableRepository.getVariable('color');
  console.log(var_test2);
  console.log(var_test2.value);
  (widgetSettings.value.fontColor as VariableWrapper<string>).setTo(var_test2)
  window.setTimeout(() => {
    var_test2.value = '#999'
  },15000)
}
</script>

<template>
  <va-collapse v-model="opened.widgetSection" icon="settings" :header="t('textBase:TextWidget.title')">
    <div class="settings-container">
      <div class="settings-block">
        <div style="flex-grow: 1;">
          <va-input class="text-title" :label="t('textBase:TextWidget.label')" v-model="widgetSettings.text.original">
            <template #append>
              <VaIcon name="visibility" style="margin-left: 4px;" color="secondary"
                @click="addVariable" />
            </template>
          </va-input>

        </div>
        <div style="width: 100px;">
          <va-input class="text-size" :label="t('textBase:TextWidget.fontSize')" v-model="widgetSettings.fontSize.value">
            <template #append>
              <VaIcon name="visibility" style="margin-left: 4px;" color="secondary"
                @click="previews['font-size'] = !previews['font-size']" />
            </template>
          </va-input>
          <div v-if="previews['font-size']">{{ widgetSettings.fontSize.value }}</div>
        </div>
      </div>
      <div class="settings-block">
        <va-color-input class="text-color" :label="t('textBase:TextWidget.fontColor')"
          v-model="widgetSettings.fontColor.value" />
        <VaIcon name="visibility" style="margin-left: 4px;" color="secondary"
                @click="addVariable2" />
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
                : (widgetSettings.textDecoration.value= 'underline')
              " />
        </div>
      </div>
      <div class="settings-block">
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
          <div class="align-vertical-buttons ml-2">
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
}

.text-title {
  width: 100%;
}

.text-size {
  width: 100%;
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
