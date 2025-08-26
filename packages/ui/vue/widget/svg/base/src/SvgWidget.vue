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
import { SvgSettings } from "./gen/SvgSettings";
import {
    computed,
    getCurrentInstance,
    onMounted,
    ref,
    watch,
} from "vue";
// import { useDatasourceRepository } from "../composables/datasourceRepository";

const props = defineProps<{ datasourceId: string }>();
const config = defineModel<SvgSettings>('configv', { required: true });

// const { data } = useDatasourceRepository(datasourceId, "object");

const svgSource = ref("");
const inst = getCurrentInstance();
const scope = (inst?.type as any).__scopeId;

const defaultConfig = new SvgSettings();

const loadSvg = async (src: string | undefined) => {
    if (src) {
        console.log('Loading SVG from:', src);
        try {
            const req = await fetch(src);
            const svgObject = await req.text();
            svgSource.value = svgObject;
            console.log('SVG loaded successfully, length:', svgObject.length);
        } catch (error) {
            console.error('Failed to load SVG:', error);
            svgSource.value = "";
        }
    } else {
        console.warn('No SVG src provided');
        svgSource.value = "";
    }
};

onMounted(async () => {
    if (config.value) {
        Object.assign(config.value, { ...defaultConfig, ...config.value });
        console.log('SVG config:', config.value);
        console.log('SVG config.value.src:', config.value.src);
        console.log('SVG config.value (as any).settings:', (config.value as any).settings);
        // Check if src is in the settings object (legacy structure)
        if (!config.value.src && (config.value as any).settings?.src) {
            console.log('Using legacy settings structure');
            config.value.src = (config.value as any).settings.src;
            if ((config.value as any).settings.classesConfig) {
                config.value.classesConfig = (config.value as any).settings.classesConfig;
            }
        }
        // Initial load
        await loadSvg(config.value.src);
    }
});

// Watch for src changes
watch(
    () => config.value?.src,
    (newSrc) => {
        console.log('SVG src changed to:', newSrc);
        loadSvg(newSrc);
    }
);

const styles = computed(() => {
    let string: string = "";

    if (config.value?.classesConfig && config.value.classesConfig.length > 0) {
        string += "<style>";
        config.value.classesConfig.forEach(classConfig => {
            if (classConfig.value?.className) {
                string +=
                    `[${scope || ''}] .${classConfig.value.className} {
                    stroke: ${classConfig.value.stroke || ''};
                    fill: ${classConfig.value.fill || ''};
                    stroke-width: ${classConfig.value.strokeWidth || ''};
                }`;
            }
        });
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
    <div v-if="!svgSourceParced && !config?.src" class="fallback">
        No SVG configured
    </div>
</template>

<style scoped>
.svg {
    width: 100%;
    height: 100%;
}

.fallback {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-style: italic;
}
</style>
