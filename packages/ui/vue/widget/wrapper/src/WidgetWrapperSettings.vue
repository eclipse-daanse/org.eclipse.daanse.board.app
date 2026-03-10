<!--
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
-->
<script lang="ts" setup>
import { ref, computed, inject } from 'vue'
import type { i18n } from "org.eclipse.daanse.board.app.lib.i18next"
import { WrapperSettings } from './gen/WrapperSettings'
import { VariableInput } from 'org.eclipse.daanse.board.app.ui.vue.variable.components'


const wrapperSettings = defineModel<WrapperSettings>({ required: true });
const i118n: i18n | undefined = inject('i18n');
const t = (i118n)
  ? (key: string) => i118n.t('wrapper:' + key)
  : (s: string) => s;

const opened = ref(false);
const isDarkTheme = ref(false);

const fontColor = computed(() => {
  return isDarkTheme.value ? "#ffffff" : "";
});

const onValueChange = (changeFn: (val: any) => void, val: any) => {
  console.log('onValueChange', val);
  changeFn({
    target: {
      value: val
    }
  });
};

</script>

<template>
  <va-collapse v-model="opened" header="Widget wrapper settings" icon="style">
    <div class="settings-container">
      <VaDivider class="pad_bottom" orientation="center">
        <span class="px-2">{{ t("WidgetWrapper.title") }}</span>
      </VaDivider>
      <VariableInput v-model="wrapperSettings.title" :label="t('WidgetWrapper.label')">
        <template #default="{ value, change }">
          <va-input :model-value="value" @input="change" :label="t('WidgetWrapper.label')" />
        </template>
      </VariableInput>
      <VariableInput v-model="wrapperSettings.titleFontSize" :label="t('WidgetWrapper.fontSize')">
        <template #default="{ value, change }">
          <va-input :model-value="value" @input="change" :label="t('WidgetWrapper.fontSize')" />
        </template>
      </VariableInput>
      <VariableInput v-model="wrapperSettings.titleColor" :label="t('WidgetWrapper.fontColor')">
        <template #default="{ value, change }">
          <va-color-input :model-value="value" @input="change" :label="t('WidgetWrapper.fontColor')" />
        </template>
      </VariableInput>
      <VaDivider class="pad_bottom" orientation="center">
        <span class="px-2">{{ t("WidgetWrapper.padding") }}</span>
      </VaDivider>
      <VariableInput v-model="wrapperSettings.padding" :label="t('WidgetWrapper.padding')">
        <template #default="{ value, change }">
          <VaSlider :labelColor="fontColor" stateful :model-value="value" @change="onValueChange(change, $event)"
            :label="t('WidgetWrapper.padding')" :min="0" :max="20">
            <template #append>
              <VaCounter :model-value="value" @update:modelValue="onValueChange(change, $event)" :min="0" :max="20"
                class="w-[110px]" />
            </template>
          </VaSlider>
        </template>
      </VariableInput>

      <VaDivider class="pad_bottom" orientation="center">
        <span class="px-2">{{ t("WidgetWrapper.background") }}</span>
      </VaDivider>

      <VariableInput v-model="wrapperSettings.backgroundColor" :label="t('WidgetWrapper.backgroundColor')">
        <template #default="{ value, change }">
          <va-color-input autofocus :label="t('WidgetWrapper.backgroundColor')" class="color-fill" :model-value="value"
            @input="change" />
        </template>
      </VariableInput>
      <VariableInput v-model="wrapperSettings.backgroundColorTransparence"
        :label="t('WidgetWrapper.backgroundColorTransparence')">
        <template #default="{ value, change }">
          <VaSlider :model-value="value" stateful @change="onValueChange(change, $event)"
            :label="t('WidgetWrapper.backgroundColorTrancparency')" :labelColor="fontColor" :min="0" :max="255">
            <template #append>
              <VaCounter :model-value="value" @update:modelValue="onValueChange(change, $event)" :min="0" :max="256"
                class="w-[110px]" />
            </template>
          </VaSlider>
        </template>
      </VariableInput>
      <VariableInput v-model="wrapperSettings.blur" :label="t('WidgetWrapper.blur')">
        <template #default="{ value, change }">
          <VaSlider :model-value="value" stateful @change="onValueChange(change, $event)"
            :label="t('WidgetWrapper.blur')" :labelColor="fontColor" :min="0" :max="10">
            <template #append>
              <VaCounter :model-value="value" @update:modelValue="onValueChange(change, $event)" :min="0" :max="10"
                class="w-[110px]" />
            </template>
          </VaSlider>
        </template>
      </VariableInput>
      <VaDivider class="pad_bottom" orientation="center">
        <span class="px-2">{{ t("WidgetWrapper.border") }}</span>
      </VaDivider>
      <VariableInput v-model="wrapperSettings.borderSize" :label="t('WidgetWrapper.borderSize')">
        <template #default="{ value, change }">
          <va-input :model-value="value" @input="change" :label="t('WidgetWrapper.borderSize')" />
        </template>
      </VariableInput>
      <VariableInput v-model="wrapperSettings.borderColor" :label="t('WidgetWrapper.borderColor')">
        <template #default="{ value, change }">
          <va-color-input autofocus :label="t('WidgetWrapper.borderColor')" class="color-fill" :model-value="value"
            @input="change" />
        </template>
      </VariableInput>
      <VariableInput v-model="wrapperSettings.borderRadius" :label="t('WidgetWrapper.borderRadius')">
        <template #default="{ value, change }">
          <va-input :model-value="value" @input="change" :label="t('WidgetWrapper.borderRadius')" />
        </template>
      </VariableInput>

      <VaDivider class="pad_bottom" orientation="center">
        <span class="px-2">{{ t("WidgetWrapper.shadow") }}</span>
      </VaDivider>
      <VariableInput v-model="wrapperSettings.shadowX" :label="t('WidgetWrapper.shadowX')">
        <template #default="{ value, change }">
          <va-input :model-value="value" @input="change" :label="t('WidgetWrapper.shadowX')" />
        </template>
      </VariableInput>
      <VariableInput v-model="wrapperSettings.shadowY" :label="t('WidgetWrapper.shadowY')">
        <template #default="{ value, change }">
          <va-input :model-value="value" @input="change" :label="t('WidgetWrapper.shadowY')" />
        </template>
      </VariableInput>
      <VariableInput v-model="wrapperSettings.shadowBlur" :label="t('WidgetWrapper.shadowBlur')">
        <template #default="{ value, change }">
          <va-input :model-value="value" @input="change" :label="t('WidgetWrapper.shadowBlur')" />
        </template>
      </VariableInput>
      <VariableInput v-model="wrapperSettings.shadowColor" :label="t('WidgetWrapper.shadowColor')">
        <template #default="{ value, change }">
          <va-color-input autofocus :label="t('WidgetWrapper.shadowColor')" class="color-fill" :model-value="value"
            @input="change" />
        </template>
      </VariableInput>
      <VariableInput v-model="wrapperSettings.shadowTransparence" :label="t('WidgetWrapper.shadowTransparence')">
        <template #default="{ value, change }">
          <VaSlider :labelColor="fontColor" stateful :model-value="value" @change="onValueChange(change, $event)"
            :label="t('WidgetWrapper.shadowTransparence')" :min="0" :max="255">
            <template #append>
              <VaCounter :model-value="value" @update:modelValue="onValueChange(change, $event)" :min="0" :max="255"
                class="w-[110px]" />
            </template>
          </VaSlider>
        </template>
      </VariableInput>
      <VaDivider class="pad_bottom" orientation="center">
        <span class="px-2">{{ t("WidgetWrapper.transparence") }}</span>
      </VaDivider>
      <VariableInput v-model="wrapperSettings.transparency" :label="t('WidgetWrapper.transparency')">
        <template #default="{ value, change }">
          <VaSlider :labelColor="fontColor" stateful :model-value="value" @change="onValueChange(change, $event)"
            :label="t('WidgetWrapper.transparency')" :min="0" :max="255" :step="1">
            <template #append>
              <VaCounter :model-value="value" @update:modelValue="onValueChange(change, $event)" :min="0" :step="1"
                :max="255" class="w-[110px]" />
            </template>
          </VaSlider>
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

.pad_bottom {
  padding-top: 30px;
  padding-bottom: 10px;
}
</style>
