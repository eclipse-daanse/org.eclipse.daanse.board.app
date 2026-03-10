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
import type { IRepeatableSVGSettings } from "./index"
import type {i18n} from "org.eclipse.daanse.board.app.lib.i18next"
import { RepeatableSVGSettings } from './gen/RepeatableSVGSettings'
import { VariableInput } from 'org.eclipse.daanse.board.app.ui.vue.variable.components'

const i18n:i18n|undefined = inject('i18n');
const t = (key:string)=>(i18n)?i18n.t(key):key;

const widgetSettings = defineModel<RepeatableSVGSettings>({ required: true });

const opened = ref({
    widgetSection: false,
    storeSection: false,
});
</script>

<template>
    <va-collapse v-model="opened.widgetSection" icon="settings" :header="t('svgRepeat:RepeatableSvgWidget.title')">
        <div class="settings-container">
            <VariableInput v-model="widgetSettings.src" :label="t('svgRepeat:RepeatableSvgWidget.svgSrc')">
                <template #default="{ value, change }">
                    <va-input :model-value="value" @input="change" :label="t('svgRepeat:RepeatableSvgWidget.svgSrc')" />
                </template>
            </VariableInput>
            <VariableInput v-model="widgetSettings.repetitions" :label="t('svgRepeat:RepeatableSvgWidget.repeations')">
                <template #default="{ value, change }">
                    <va-input :model-value="value" @input="change" :label="t('svgRepeat:RepeatableSvgWidget.repeations')" />
                </template>
            </VariableInput>
            <VariableInput v-model="widgetSettings.progress" :label="t('svgRepeat:RepeatableSvgWidget.progress')">
                <template #default="{ value, change }">
                    <va-input :model-value="value" @input="change" :label="t('svgRepeat:RepeatableSvgWidget.progress')" />
                </template>
            </VariableInput>
                <VariableInput v-model="widgetSettings.activeItemStyles.fill" :label="t('svgRepeat:RepeatableSvgWidget.activeItemFill')" class="color-input">
                    <template #default="{ value, change }">
                        <va-color-input
                            :model-value="value"
                            @input="change"
                            class="width-100"
                            :label="t('svgRepeat:RepeatableSvgWidget.activeItemFill')"
                        />
                    </template>
                </VariableInput>
                <VariableInput v-model="widgetSettings.activeItemStyles.stroke" :label="t('svgRepeat:RepeatableSvgWidget.activeItemStroke')" class="color-input">
                    <template #default="{ value, change }">
                        <va-color-input
                            :model-value="value"
                            @input="change"
                            class="width-100"
                            :label="t('svgRepeat:RepeatableSvgWidget.activeItemStroke')"
                        />
                    </template>
                </VariableInput>
                <VariableInput v-model="widgetSettings.defaultItemStyles.fill" :label="t('svgRepeat:RepeatableSvgWidget.defaultItemFill')" class="color-input">
                    <template #default="{ value, change }">
                        <va-color-input
                            :model-value="value"
                            @input="change"
                            class="width-100"
                            :label="t('svgRepeat:RepeatableSvgWidget.defaultItemFill')"
                        />
                    </template>
                </VariableInput>
                <VariableInput v-model="widgetSettings.defaultItemStyles.stroke" :label="t('svgRepeat:RepeatableSvgWidget.defaultItemStroke')" class="color-input">
                    <template #default="{ value, change }">
                        <va-color-input
                            :model-value="value"
                            @input="change"
                            class="width-100"
                            :label="t('svgRepeat:RepeatableSvgWidget.defaultItemStroke')"
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

.colors {
    display: flex;
    justify-content: space-between;
}

.color-input {
    width: 49%;
}

.loading {
    height: 100%;
    padding: 50px;
    border-radius: 4px;
    margin-bottom: 1rem;
    background-color: var(--app-response-background);
}
</style>
