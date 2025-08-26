<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script lang="ts" setup>
import { ref, computed, inject } from 'vue'
import type {i18n} from "org.eclipse.daanse.board.app.lib.i18next"
import { WrapperSettings } from './gen/WrapperSettings'



const wrapperSettings = defineModel<WrapperSettings>({ required: true});
const i118n:i18n|undefined = inject('i18n');
const  t  = (i118n)?(key:string)=>i118n.t('wrapper:'+key):(s:string)=>{};

const opened = ref(false);
const isDarkTheme = ref(false);

const fontColor = computed(() => {
    return isDarkTheme.value ? "#ffffff" : "";
});
</script>

<template>
    <va-collapse v-model="opened" header="Widget wrapper settings" icon="style">
        <div class="settings-container">
            <VaDivider class="pad_bottom" orientation="center">
                <span class="px-2">{{ t("WidgetWrapper.title") }}</span>
            </VaDivider>
            <va-input
                v-model="wrapperSettings.title"
                :label="t('WidgetWrapper.label')"
            />
            <va-input
                v-model="wrapperSettings.titleFontSize"
                :label="t('WidgetWrapper.fontSize')"
            />
            <va-color-input
                v-model="wrapperSettings.titleColor"
                :label="t('WidgetWrapper.fontColor')"
            />
          <VaDivider class="pad_bottom" orientation="center">
          <span class="px-2">{{ t("WidgetWrapper.padding") }}</span>
          </VaDivider>
          <VaSlider
            :labelColor="fontColor"
            v-model="wrapperSettings.padding"
            :label="t('WidgetWrapper.padding')"
            :min="0"
            :max="20"
          >
            <template #append>
              <VaCounter
                v-model="wrapperSettings.padding"
                :min="0"
                :max="20"
                class="w-[110px]"
              />
            </template>
          </VaSlider>

            <VaDivider class="pad_bottom" orientation="center">
                <span class="px-2">{{ t("WidgetWrapper.background") }}</span>
            </VaDivider>

            <va-color-input
                autofocus
                :label="t('WidgetWrapper.backgroundColor')"
                class="color-fill"
                v-model="wrapperSettings.backgroundColor"
            />
            <VaSlider
                v-model="wrapperSettings.backgroundColorTransparence"
                :label="t('WidgetWrapper.backgroundColorTrancparency')"
                :labelColor="fontColor"
                :min="0"
                :max="255"
            >
                <template #append>
                    <VaCounter
                        v-model="wrapperSettings.backgroundColorTransparence"
                        :min="0"
                        :max="256"
                        class="w-[110px]"
                    />
                </template>
            </VaSlider>
          <VaSlider
            v-model="wrapperSettings.blur"
            :label="t('WidgetWrapper.blur')"
            :labelColor="fontColor"
            :min="0"
            :max="10"
          >
            <template #append>
              <VaCounter
                v-model="wrapperSettings.blur"
                :min="0"
                :max="10"
                class="w-[110px]"
              />
            </template>
          </VaSlider>
            <VaDivider class="pad_bottom" orientation="center">
                <span class="px-2">{{ t("WidgetWrapper.border") }}</span>
            </VaDivider>
            <va-input
                v-model="wrapperSettings.borderSize"
                :label="t('WidgetWrapper.borderSize')"
            />
            <va-color-input
                autofocus
                :label="t('WidgetWrapper.borderColor')"
                class="color-fill"
                v-model="wrapperSettings.borderColor"
            />
            <va-input
                v-model="wrapperSettings.borderRadius"
                :label="t('WidgetWrapper.borderRadius')"
            />

            <VaDivider class="pad_bottom" orientation="center">
                <span class="px-2">{{ t("WidgetWrapper.shadow") }}</span>
            </VaDivider>
            <va-input
                v-model="wrapperSettings.shadowX"
                :label="t('WidgetWrapper.shadowX')"
            />
            <va-input
                v-model="wrapperSettings.shadowY"
                :label="t('WidgetWrapper.shadowY')"
            />
            <va-input
                v-model="wrapperSettings.shadowBlur"
                :label="t('WidgetWrapper.shadowBlur')"
            />
            <va-color-input
                autofocus
                :label="t('WidgetWrapper.shadowColor')"
                class="color-fill"
                v-model="wrapperSettings.shadowColor"
            />
            <VaSlider
                :labelColor="fontColor"
                v-model="wrapperSettings.shadowTransparence"
                :label="t('WidgetWrapper.shadowTransparence')"
                :min="0"
                :max="255"
            >
                <template #append>
                    <VaCounter
                        v-model="wrapperSettings.shadowTransparence"
                        :min="0"
                        :max="255"
                        class="w-[110px]"
                    />
                </template>
            </VaSlider>
            <VaDivider class="pad_bottom" orientation="center">
                <span class="px-2">{{ t("WidgetWrapper.transparence") }}</span>
            </VaDivider>
            <VaSlider
                :labelColor="fontColor"
                v-model="wrapperSettings.transparency"
                :label="t('WidgetWrapper.transparency')"
                :min="0"
                :max="255"
                :step="1"
            >
                <template #append>
                    <VaCounter
                        v-model="wrapperSettings.transparency"
                        :min="0"
                        :step="1"
                        :max="255"
                        class="w-[110px]"
                    />
                </template>
            </VaSlider>
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
