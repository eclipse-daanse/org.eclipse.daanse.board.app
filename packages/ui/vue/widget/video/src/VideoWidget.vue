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


import type { IVideoSettings } from "./index";
import { computed, onMounted, toRefs } from "vue";
// import { useDatasourceRepository } from "../composables/datasourceRepository";


const props = defineProps<{ datasourceId: string, config: IVideoSettings }>();
const { datasourceId, config } = toRefs(props);

// const { data } = useDatasourceRepository(datasourceId, "object");

const defaultConfig: IVideoSettings = {
    videoSettings: {
        fit: "Cover",
    },
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
};

onMounted(() => {
    if (config.value) {
        Object.assign(config.value, { ...defaultConfig, ...config.value });
    };
});

const videoFit = computed(() => {
    return config.value.videoSettings?.fit;
});

const videoUrlParced = computed(() => {
    let processedString = config.value.videoUrl;
    return processedString;
    // if (!processedString) return;
    // const regex = /{(.*?)}/g;
    // const parts = processedString.match(regex);

    // if (!parts || !data.value) {
    //     return processedString;
    // }

    // parts.forEach((element: string) => {
    //     const trimmedString = element.replace("{", "").replace("}", "");
    //     const dataField = trimmedString.split(".");

    //     const res = dataField.reduce((acc: any, field) => {
    //         return acc[field];
    //     }, data.value);

    //     processedString = processedString.replace(element, res);
    // });
    // return processedString;
});
</script>

<template>
    <div class="container">
        <video controls :src="videoUrlParced">
            Your browser does not support embedded videos.
        </video>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container video {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    object-fit: v-bind(videoFit);
}
</style>
