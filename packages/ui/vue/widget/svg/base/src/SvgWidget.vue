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
import type { ISvgSettings } from "./index";
import {
    computed,
    getCurrentInstance,
    onMounted,
    ref,
    toRefs,
} from "vue";
// import { useDatasourceRepository } from "../composables/datasourceRepository";

const props = defineProps<{ datasourceId: string, config: ISvgSettings }>();
const { datasourceId, config } = toRefs(props);

// const { data } = useDatasourceRepository(datasourceId, "object");

const svgSource = ref("");
const inst = getCurrentInstance();
const scope = (inst?.type as any).__scopeId;

const defaultConfig: ISvgSettings = {
    src: "/demo/test.svg",
    classesConfig : {
        primary: {
            fill: "#ff5733",
            stroke: "#1e8449",
            strokeWidth: "5px",
        }
    }
}

onMounted(async () => {
    if (config.value) {
        Object.assign(config.value, { ...defaultConfig, ...config.value });
        const req = await fetch(config.value.src);
        const svgObject = await req.text();
        svgSource.value = svgObject;
    };
});

const styles = computed(() => {
    let string: string = "";

    if (config.value.classesConfig) {
        string += "<style>";
        for (const [key, value] of Object.entries(
            config.value.classesConfig,
        )) {
            string +=
                `[${scope}] .${key} {
                stroke: ${value.stroke};
                fill: ${value.fill};
                stroke-width: ${value.strokeWidth};
            }`;
        }
        string += "</style>";
    }

    return string;
});

const svgSourceParced = computed(() => {
    let processedString = svgSource.value;
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
</script>

<template>
    <div v-html="styles"></div>
    <div v-bind="$attrs" class="svg" v-html="svgSourceParced"></div>
</template>

<style scoped>
.svg {
    width: 100%;
    height: 100%;
}
</style>
