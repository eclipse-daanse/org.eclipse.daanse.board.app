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
import { inject, ref } from 'vue'
import type { IVideoSettings } from "./index";
import type {i18n} from "org.eclipse.daanse.board.app.lib.i18next"
import { VideoSettings } from './gen/VideoSettings'

const i18n:i18n|undefined = inject('i18n');
const t = (key:string)=>(i18n)?i18n.t(key):key;

const widgetSettings = defineModel<VideoSettings>({ required: true });

const opened = ref({
    widgetSection: false,
    storeSection: false,
});
</script>

<template>
    <va-collapse v-model="opened.widgetSection" icon="settings" :header="t('video:VideoWidget.title')">
        <div class="settings-container">
            <va-input
                v-model="widgetSettings.videoUrl"
                :label="t('video:VideoWidget.videoUrl')"
            />
            <va-select
                class="mt-2"
                v-model="widgetSettings.videoFitSettings.fit"
                :label="t('video:VideoWidget.videoFit')"
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
