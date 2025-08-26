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
import { RepeatableSVGSettings } from "./gen/RepeatableSVGSettings";
import { onMounted, computed, ref, watch } from "vue";
// import { useDatasourceRepository } from "../composables/datasourceRepository";

const props = defineProps<{ datasourceId: string }>();
const config = defineModel<RepeatableSVGSettings>('configv', { required: true });
const svgSource = ref("");
// const { data } = useDatasourceRepository(datasourceId, "object");

const defaultConfig = new RepeatableSVGSettings();

const loadSvg = async (src: string | undefined) => {
    if (src) {
        try {
            const req = await fetch(src);
            const svgObject = await req.text();
            svgSource.value = svgObject;
        } catch (error) {
            console.error('Failed to load SVG:', error);
            svgSource.value = "";
        }
    } else {
        svgSource.value = "";
    }
};

onMounted(async () => {
    if (config.value) {
        Object.assign(config.value, { ...defaultConfig, ...config.value });
        await loadSvg(config.value.src);
    }
});

// Watch for src changes
watch(
    () => config.value?.src,
    (newSrc) => {
        loadSvg(newSrc);
    }
);

const createParsedData = (prop: string) => {
    return computed(() => {
        let processedString = String(prop);
        return processedString;
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
};

const repeationsToNumber = computed(() => {
    const repetitions = config.value?.repetitions ?? '1';
    return !isNaN(parseFloat(repetitions))
        ? Math.floor(Number(repetitions))
        : 1;
});

const progressToNumber = computed(() => {
    const progress = config.value?.progress ?? '0';
    const parsedProgress = createParsedData(progress).value;
    return !isNaN(parseFloat(parsedProgress))
        ? Number(parsedProgress)
        : 0;
});
</script>

<template>
    <div class="repeatable-svg-container">
        <svg
            fill="#000000"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            :viewBox="`0 0 ${100 * repeationsToNumber} 100`"
            enable-background="new 0 0 100 100"
            xml:space="preserve"
        >
            <defs>
                <mask id="bubbleKenseo">
                    <rect
                        x="0"
                        y="0"
                        style="fill: #adadad" :width="100 * repeationsToNumber * progressToNumber"
                        height="100"
                    />
                </mask>
            </defs>
            <g
                :fill="config?.defaultItemStyles?.fill"
                :stroke="config?.defaultItemStyles?.stroke"
            >
                <g
                    v-html="svgSource"
                    v-for="index in repeationsToNumber"
                    :transform="`translate(${100 * (index - 1)}, 0)`"
                    :key="index"
                >
                </g>
            </g>
            <g
                mask="url(#bubbleKenseo)"
                :fill="config?.activeItemStyles?.fill"
                :stroke="config?.activeItemStyles?.stroke"
            >
                <g
                    v-html="svgSource"
                    v-for="index in repeationsToNumber"
                    :transform="`translate(${100 * (index - 1)}, 0)`"
                    :key="index">
                </g>
            </g>
        </svg>
    </div>
</template>

<style scoped>
.repeatable-svg-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    object-fit: contain;
}
</style>
