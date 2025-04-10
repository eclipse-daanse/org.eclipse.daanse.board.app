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
import type { IVideoSettings } from "./index";


// const { t } = useI18n();
const t = (key:string) => key;

const widgetSettings = defineModel<IVideoSettings>({ required: true });

const opened = ref({
    widgetSection: false,
    storeSection: false,
});
</script>

<template>
    <va-collapse v-model="opened.widgetSection" :header="t('VideoWidget.title')">
        <div class="settings-container">
            <va-input
                v-model="widgetSettings.videoUrl"
                :label="t('VideoWidget.videoUrl')"
            />
            <va-select
                class="mt-2"
                v-model="widgetSettings.videoSettings.fit"
                :label="t('VideoWidget.videoFit')"
                :options="['Cover', 'Contain', 'Stretch', 'Fill', 'None']"
                teleport=".settings-container">
            </va-select>
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
</style>
