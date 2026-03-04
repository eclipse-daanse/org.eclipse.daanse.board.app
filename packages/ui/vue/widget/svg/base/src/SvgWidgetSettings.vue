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
// import { useI18n } from "vue-i18n";
import { inject, ref, watch, markRaw } from 'vue'
import type { Config} from "./index";
import type {i18n} from "org.eclipse.daanse.board.app.lib.i18next"
import { SvgSettings } from './gen/SvgSettings'
import { SvgClassConfigMapEntry } from './gen/SvgClassConfigMapEntry'
import { SvgConfigItem } from './gen/SvgConfigItem'
import { VariableInput } from 'org.eclipse.daanse.board.app.ui.vue.variable.components'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'

const i18n:i18n|undefined = inject('i18n');
const t = (key:string)=>(i18n)?i18n.t(key):key;

const widgetSettings = defineModel<SvgSettings>({ required: true });

const opened = ref({
    widgetSection: false,
    storeSection: false,
});

// We need to manage fields locally while reacting to changes
// Initial population based on classesConfig if it exists
const initializeFields = () => {
    if (widgetSettings.value && widgetSettings.value.classesConfig) {
        return widgetSettings.value.classesConfig.map(entry => {
            return {
                className: entry.key || "",
                fill: markRaw(entry.value?.fill instanceof VariableWrapper ? entry.value.fill : new VariableWrapper(entry.value?.fill || "")),
                stroke: markRaw(entry.value?.stroke instanceof VariableWrapper ? entry.value.stroke : new VariableWrapper(entry.value?.stroke || "")),
                strokeWidth: markRaw(entry.value?.strokeWidth instanceof VariableWrapper ? entry.value.strokeWidth : new VariableWrapper(entry.value?.strokeWidth || "")),
            }
        });
    }
    return [
        {
            className: "primary",
            fill: markRaw(new VariableWrapper("#ff5733")),
            stroke: markRaw(new VariableWrapper("#1e8449")),
            strokeWidth: markRaw(new VariableWrapper("5")),
        },
    ];
};

const fields = ref(initializeFields());

const addItems = () => {
    fields.value.push({
        className: "",
        fill: markRaw(new VariableWrapper("")),
        stroke: markRaw(new VariableWrapper("")),
        strokeWidth: markRaw(new VariableWrapper("")),
    });
};

const removeItem = (index: number) => {
    fields.value.splice(index, 1);
};

watch(
    fields,
    () => {
        // Convert fields array back to SvgClassConfigMapEntry
        widgetSettings.value.classesConfig = fields.value.filter(f => f.className).map(f => {
            const entry = new SvgClassConfigMapEntry();
            entry.key = f.className;
            entry.value = new SvgConfigItem();
            entry.value.fill = f.fill as unknown as VariableWrapper<string>;
            entry.value.stroke = f.stroke as unknown as VariableWrapper<string>;
            entry.value.strokeWidth = f.strokeWidth as unknown as VariableWrapper<string>;
            entry.value.className = f.className;
            return entry;
        });
    },
    { deep: true },
);
</script>

<template>
    <va-collapse v-model="opened.widgetSection" icon="settings" :header="t('svgBase:SvgWidget.title')">
        <div class="settings-container">
            <VariableInput v-model="widgetSettings.src" :label="t('svgBase:SvgWidget.svgSrc')">
                <template #default="{ value, change }">
                    <va-input :model-value="value" @input="change" :label="t('svgBase:SvgWidget.svgSrc')" />
                </template>
            </VariableInput>

            <div class="class-config-header">
                <h3>Classes Configuration</h3>
                <va-button class="add-button" @click="addItems" size="small">
                    {{ t("svgBase:SvgWidget.addButton") }}
                </va-button>
            </div>

            <div class="class-list">
                <div v-for="(field, index) in fields" :key="index" class="class-item">
                    <div class="class-item-header">
                        <va-input class="input-class-name" v-model="field.className" label="Class Name" />
                        <va-button preset="plain" icon="delete" color="danger" @click="removeItem(index)" size="small" />
                    </div>

                    <div class="class-item-properties">
                        <VariableInput v-model="field.fill" label="Fill Color">
                            <template #default="{ value, change }">
                                <va-color-input
                                    :model-value="value"
                                    :label="t('svgBase:SvgWidget.fillColor')"
                                    @input="change"
                                    class="width-100"
                                />
                            </template>
                        </VariableInput>

                        <VariableInput v-model="field.stroke" label="Stroke Color">
                            <template #default="{ value, change }">
                                <va-color-input
                                    :model-value="value"
                                    :label="t('svgBase:SvgWidget.strokeColor')"
                                    @input="change"
                                    class="width-100"
                                />
                            </template>
                        </VariableInput>

                        <VariableInput v-model="field.strokeWidth" label="Stroke Width">
                            <template #default="{ value, change }">
                                <va-input :model-value="value" @input="change" :label="t('svgBase:SvgWidget.strokeWidth')" />
                            </template>
                        </VariableInput>
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
    gap: 1.5rem;
}

.class-config-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.class-config-header h3 {
    margin: 0;
    font-size: 1rem;
    color: var(--va-text-primary);
}

.class-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.class-item {
    border: 1px solid var(--va-background-element);
    border-radius: 8px;
    padding: 1rem;
    background-color: var(--va-background-primary);
}

.class-item-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    gap: 1rem;
}

.input-class-name {
    flex-grow: 1;
}

.class-item-properties {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding-left: 0.5rem;
    border-left: 2px solid var(--va-primary);
}

.width-100 {
    width: 100%;
}
</style>
