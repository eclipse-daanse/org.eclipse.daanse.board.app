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
import { inject, ref, watch } from 'vue'
import type { Config} from "./index";
import type {i18n} from "org.eclipse.daanse.board.app.lib.i18next"
import { SvgSettings } from './gen/SvgSettings'

const i18n:i18n|undefined = inject('i18n');
const t = (key:string)=>(i18n)?i18n.t(key):key;

const widgetSettings = defineModel<SvgSettings>({ required: true });

const opened = ref({
    widgetSection: false,
    storeSection: false,
});

const fields = ref([
    {
        className: "primary",
        fill: "#ff5733",
        stroke: "#1e8449",
        strokeWidth: "5",
    },
]);

const addItems = () => {
    fields.value.push({
        className: "",
        fill: "",
        stroke: "",
        strokeWidth: "",
    });
};

watch(
    fields,
    () => {
        const config: Config = {};
        fields.value.forEach(({ className, fill, stroke, strokeWidth }) => {
            if (!config[className]) {
                config[className] = { fill, stroke, strokeWidth };
            }
        }, {});
        // Convert object config to array of SvgClassConfigMapEntry
        widgetSettings.value.classesConfig = Object.entries(config).map(([key, value]) => ({
            key,
            value: {
                fill: value.fill,
                stroke: value.stroke,
                strokeWidth: value.strokeWidth,
                className: key
            }
        }));
    },
    { deep: true },
);
</script>

<template>
    <va-collapse v-model="opened.widgetSection" icon="settings" :header="t('svgBase:SvgWidget.title')">
        <div class="settings-container">
            <va-input v-model="widgetSettings.src" :label="t('svgBase:SvgWidget.svgSrc')" />
            <va-button class="add-button" @click="addItems">
                {{ t("svgBase:SvgWidget.addButton") }}
            </va-button>
            <va-data-table
                class="table-config"
                :items="fields"
                :columns="[
                    { key: 'className' },
                    { key: 'fill' },
                    { key: 'stroke' },
                    { key: 'strokeWidth' },
                ]"
            >
                <template #cell(className)="{ rowIndex }">
                    <va-input class="input-class-name" v-model="fields[rowIndex].className" />
                </template>
                <template #cell(fill)="{ rowIndex }">
                    <va-color-input class="color-fill" v-model="fields[rowIndex].fill" />
                </template>
                <template #cell(stroke)="{ rowIndex }">
                    <va-color-input class="color-stroke" v-model="fields[rowIndex].stroke" />
                </template>
                <template #cell(strokeWidth)="{ rowIndex }">
                    <va-input class="input-stroke-width" v-model="fields[rowIndex].strokeWidth" />
                </template>
            </va-data-table>
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

.input-class-name {
    width: 100px;
}

.color-fill {
    width: 100px;
}

.color-stroke {
    width: 100px;
}

.input-stroke-width {
    width: 50px;
}

.add-button {
    width: 33%;
}

.loading {
    height: 100%;
    padding: 50px;
    border-radius: 4px;
    margin-bottom: 1rem;
    background-color: var(--app-response-background);
}
</style>
