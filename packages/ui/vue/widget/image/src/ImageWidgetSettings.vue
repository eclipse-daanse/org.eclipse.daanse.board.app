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
import { v4 } from "uuid";
import { ref } from "vue";
import type { IImageSettings } from "./index";

// const { t } = useI18n();

const t = (key:string) => key;

const opened = ref({
    widgetSection: false,
    storeSection: false,
});

const widgetSettings = defineModel<IImageSettings>({ required: true });

const addNew = () => {
    if (!widgetSettings.value.images) {
        widgetSettings.value.images = [];
    }
    const newImage = {
        id: v4(),
        url: "Test",
    };
    widgetSettings.value.images?.splice(widgetSettings.value.images.length, 0, newImage);
};
</script>

<template>
    <va-collapse v-model="opened.widgetSection" header="Image widget settings">
        <div class="settings-container">
            <va-button @click="addNew">
                {{ t("ImageWidget.addButton") }}
            </va-button>
            <div class="image-list-container">
                <div
                    v-for="(image, index) in widgetSettings.images"
                    :key="image.id"
                    class="image-settings-container"
                >
                    <va-input
                        v-model="image.url"
                        :label="t('ImageWidget.imageUrl')"
                        class="image-settings-remove-input"
                    />
                    <va-button
                        @click="() => widgetSettings.images.splice(index, 1)"
                        icon="clear"
                        class="image-settings-remove-button"
                    />
                    <!-- {{ image.url }} -->
                </div>
            </div>
            <va-select
                v-model="widgetSettings.imagesSettings.fit"
                :label="t('ImageWidget.imageFit')"
                :options="['Cover', 'Contain', 'Stretch', 'Fill', 'None']"
                teleport=".settings-container"
            >
            </va-select>
            <va-input
                v-model="widgetSettings.imagesSettings.diashowInterval"
                :label="t('ImageWidget.imageDiashowInterval')"
            >
            </va-input>
        </div>
    </va-collapse>
</template>
<style scoped>
.image-settings-container {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 1rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
}

.image-settings-remove-button {
    margin-bottom: 0.25rem;
}

.image-settings-remove-input {
    flex-grow: 1;
}

.settings-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.image-list-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    height: 500px;
    overflow: auto;
    padding: 0.5rem;
    border-radius: 0.5rem;
}

.loading {
    height: 100%;
    padding: 50px;
    border-radius: 4px;
    margin-bottom: 1rem;
    background-color: var(--app-response-background);
}
</style>
