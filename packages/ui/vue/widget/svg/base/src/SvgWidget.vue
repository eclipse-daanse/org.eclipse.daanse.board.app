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
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
// import { useDatasourceRepository } from "../composables/datasourceRepository";

const props = defineProps<{ datasourceId: string, id?: string }>();
import { toRefs } from 'vue';
const { id: widgetId } = toRefs(props);
const config = defineModel<SvgSettings>('configv', { required: true });

import { container as coreContainer, identifiers } from 'org.eclipse.daanse.board.app.lib.core';
import type { TinyEmitter } from 'tiny-emitter';
const eventBus = coreContainer.get<TinyEmitter>(identifiers.TINY_EMITTER);

const emitClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:SVGWidget:click', {
        type: 'widget:SVGWidget:click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

const emitRightClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:SVGWidget:right_click', {
        type: 'widget:SVGWidget:right_click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

// const { data } = useDatasourceRepository(datasourceId, "object");

const svgSource = ref("");
const inst = getCurrentInstance();
const scope = (inst?.type as any).__scopeId;

const defaultConfig = new SvgSettings();

const loadSvg = async (srcWrapper: any) => {
    const src = srcWrapper?.value || srcWrapper;
    if (src && typeof src === 'string') {
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

const ensureWrapper = (obj: any, key: string, defaultVal: any) => {
    const current = obj[key];
    if (current === undefined || current === null) {
        obj[key] = new VariableWrapper(defaultVal);
    } else if (current instanceof VariableWrapper) {
        // already good
    } else if (typeof current === 'object' && 'value' in current) {
        const v = new VariableWrapper(current.value);
        if ('variable' in current) v.variable = current.variable;
        obj[key] = v;
    } else {
        obj[key] = new VariableWrapper(current);
    }
}

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

        ensureWrapper(config.value, 'src', '');

        if (config.value.classesConfig) {
            config.value.classesConfig.forEach(entry => {
                if (entry.value) {
                    ensureWrapper(entry.value, 'fill', '');
                    ensureWrapper(entry.value, 'stroke', '');
                    ensureWrapper(entry.value, 'strokeWidth', '');
                }
            });
        }

        // Initial load
        await loadSvg(config.value.src);
    }
});

// Watch for src changes
watch(
    () => (config.value?.src as any)?.value,
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
                const fill = (classConfig.value.fill as any)?.value || '';
                const stroke = (classConfig.value.stroke as any)?.value || '';
                const strokeWidth = (classConfig.value.strokeWidth as any)?.value || '';

                string +=
                    `[${scope || ''}] .${classConfig.value.className} {
                    stroke: ${stroke};
                    fill: ${fill};
                    stroke-width: ${strokeWidth};
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
    <div v-bind="$attrs" class="svg" v-html="svgSourceParced" @click="emitClick" @contextmenu.prevent="emitRightClick"></div>
    <div v-if="!svgSourceParced && !((config?.src as any)?.value)" class="fallback" @click="emitClick" @contextmenu.prevent="emitRightClick">
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
