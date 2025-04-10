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
import { ref } from "vue";
import type { IRepeatableSVGSettings } from "./index";

// const { t } = useI18n();
const t = (key:string) => key;

const widgetSettings = defineModel<IRepeatableSVGSettings>({ required: true });

const opened = ref({
    widgetSection: false,
    storeSection: false,
});
</script>

<template>
    <va-collapse v-model="opened.widgetSection" :header="t('RepeatableSvgWidget.title')">
        <div class="settings-container">
            <va-input v-model="widgetSettings.src" :label="t('RepeatableSvgWidget.svgSrc')" />
            <va-input v-model="widgetSettings.repeations" :label="t('RepeatableSvgWidget.repeations')" />
            <va-input v-model="widgetSettings.progress" :label="t('RepeatableSvgWidget.progress')" />
            <div class="colors">
                <va-color-input
                    class="color-input"
                    v-model="widgetSettings.activeItemStyles.fill"
                    :label="t('RepeatableSvgWidget.activeItemFill')"
                />
                <va-color-input
                    class="color-input"
                    v-model="widgetSettings.activeItemStyles.stroke"
                    :label="t('RepeatableSvgWidget.activeItemStroke')"
                />
            </div>
            <div class="colors">
                <va-color-input
                    class="color-input"
                    v-model="widgetSettings.defaultItemStyles.fill"
                    :label="t('RepeatableSvgWidget.defaultItemFill')"
                />
                <va-color-input
                    class="color-input"
                    v-model="widgetSettings.defaultItemStyles.stroke"
                    :label="t('RepeatableSvgWidget.defaultItemStroke')"
                />
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
