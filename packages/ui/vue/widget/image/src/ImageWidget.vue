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
import { onMounted, ref, watch, type Ref, computed, toRefs } from "vue";
import type { IImageSettings } from "./index";

const props = defineProps<{ datasourceId: string, config: IImageSettings }>();
const { config } = toRefs(props);

const defaultConfig: IImageSettings = {
    imagesSettings: {
        fit: "None",
        diashowInterval: 0,
    },
    images: [],
};

onMounted(() => {
    if (config.value) {
        Object.assign(config.value, { ...defaultConfig, ...config.value });
    };
});

const imageFit = computed(() => {
    return config.value.imagesSettings?.fit;
});

let interval = null as any;
const currentImage: Ref<number> = ref(0);

const toNext = () => {
    if (currentImage.value < config.value.images.length - 1) {
        currentImage.value++;
    }
};

const toPrev = () => {
    if (currentImage.value > 0) {
        currentImage.value--;
    }
};

const initInterval = () => {
    if (interval) {
        clearInterval(interval);
    }
    if (config.value.imagesSettings.diashowInterval > 0) {
        interval = setInterval(() => {
            if (currentImage.value === config.value.images.length - 1) {
                currentImage.value = 0;
                return;
            }
            toNext();
        }, config.value.imagesSettings.diashowInterval * 1000);
    }
};

onMounted(() => {
    initInterval();
});

watch(() => config.value.imagesSettings?.diashowInterval, initInterval);

const parsedUrl = (url: string): string => {
    // const regex = /{(.*?)}/g;
    // const parts = url?.match(regex);

    // if (!parts) {
        return url;
    // }

    // let parsedUrl = url;

    // parts.forEach((element: string) => {
    //     const trimmedString = element.replace("{", "").replace("}", "");
    //     const dataField = trimmedString.split(".");
    //     let res = data.value;

    //     for (const field of dataField) {
    //         if (res) res = res[field];
    //     }
    //     parsedUrl = parsedUrl.replace(element, String(res));
    // });
    // return parsedUrl;
};

watch(
    () => config.value.images?.length,
    (newLength, oldLength) => {
        if (oldLength > newLength) {
            if (currentImage.value >= newLength) {
                currentImage.value = newLength - 1;
            }
        }
    },
);

const lastImageIndex = computed(() => {
    return config.value.images?.length > 0
        ? config.value.images.length - 1
        : 0;
});

watch(lastImageIndex, () => {
    currentImage.value = lastImageIndex.value;
});
</script>

<template>
    <template v-if="config.images?.length <= 1">
        <img class="image" :src="parsedUrl(config.images[0]?.url)" />
    </template>
    <template v-else>
        <div class="galery-container">
            <div class="button-prev">
                <va-button @click="toPrev()"
                    icon="chevron_left"
                    preset="plain"
                    text-color="#ffffff"
                    :disabled="currentImage === 0"
                >
                </va-button>
            </div>
            <div class="galery-viewport" :style="`transform: translateX(-${100 * currentImage}%)`">
                <div
                    v-for="(image, i) in config.images"
                    :key="image.id"
                    class="galery-image"
                    :style="`transform: translateX(${100 * i}%)`"
                >
                    <!-- {{ image.url }} -->
                    <img class="image" :src="parsedUrl(image.url)" />
                </div>
            </div>

            <div class="button-next">
                <va-button
                    @click="toNext()"
                    icon="chevron_right"
                    text-color="#ffffff"
                    :disabled="currentImage === config.images?.length - 1"
                    preset="plain"
                >
                </va-button>
            </div>
        </div>
    </template>
</template>

<style scoped>
.image {
    width: 100%;
    height: 100%;
    object-fit: v-bind(imageFit);
}

.galery-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
}

.galery-container .galery-viewport {
    width: 100%;
    height: 100%;
    overflow: visible;
    position: relative;
    transition: transform 0.3s ease-in-out;
}

.galery-container .galery-image {
    width: 100%;
    height: 100%;
    position: absolute;
}

.button-prev {
    left: 10px;
}

.button-next,
.button-prev {
    position: absolute;
    top: 50%;
    width: 2rem;
    height: 2rem;
    transform: translateY(-50%);
    z-index: 1;
    background-color: #000000a0;
    border-radius: 10000px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.button-next {
    right: 10px;
}
</style>
