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
import { SVGItemStyles } from "./gen/SVGItemStyles";
import { onMounted, computed, ref, watch } from "vue";
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
// import { useDatasourceRepository } from "../composables/datasourceRepository";

const props = defineProps<{ datasourceId: string, id?: string }>();
import { toRefs } from 'vue';
const { id: widgetId } = toRefs(props);
const config = defineModel<RepeatableSVGSettings>('configv', { required: true });

import { container as coreContainer, identifiers } from 'org.eclipse.daanse.board.app.lib.core';
import type { TinyEmitter } from 'tiny-emitter';
const eventBus = coreContainer.get<TinyEmitter>(identifiers.TINY_EMITTER);

const emitClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:RepeatableSVGWidget:click', {
        type: 'widget:RepeatableSVGWidget:click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

const emitRightClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:RepeatableSVGWidget:right_click', {
        type: 'widget:RepeatableSVGWidget:right_click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};
const svgSource = ref("");
// const { data } = useDatasourceRepository(datasourceId, "object");

const defaultConfig = new RepeatableSVGSettings();

const loadSvg = async (srcWrapper: any) => {
    const src = srcWrapper?.value || srcWrapper;
    if (src && typeof src === 'string') {
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

const ensureStyles = (styles: SVGItemStyles | undefined) => {
    if (!styles) return;
    ensureWrapper(styles, 'fill', '#000000');
    ensureWrapper(styles, 'stroke', 'none');
}

onMounted(async () => {
    if (!config.value) {
        config.value = new RepeatableSVGSettings();
    }

    // Ensure wrappers for top level
    ensureWrapper(config.value, 'src', '');
    ensureWrapper(config.value, 'repetitions', '1');
    ensureWrapper(config.value, 'progress', '0');

    // Ensure children exist and are wrapped
    if (!config.value.activeItemStyles) config.value.activeItemStyles = new SVGItemStyles();
    ensureStyles(config.value.activeItemStyles);

    if (!config.value.defaultItemStyles) config.value.defaultItemStyles = new SVGItemStyles();
    ensureStyles(config.value.defaultItemStyles);

    await loadSvg(config.value.src);
});

// Watch for src changes
watch(
    () => (config.value?.src as any)?.value,
    (newSrc) => {
        loadSvg(newSrc);
    }
);

const repeationsToNumber = computed(() => {
    const repetitions = (config.value?.repetitions as any)?.value ?? '1';
    return !isNaN(parseFloat(repetitions))
        ? Math.floor(Number(repetitions))
        : 1;
});

const progressToNumber = computed(() => {
    const progress = (config.value?.progress as any)?.value ?? '0';

    return !isNaN(parseFloat(progress))
        ? Number(progress)
        : 0;
});

const activeFill = computed(() => (config.value?.activeItemStyles?.fill as any)?.value);
const activeStroke = computed(() => (config.value?.activeItemStyles?.stroke as any)?.value);
const defaultFill = computed(() => (config.value?.defaultItemStyles?.fill as any)?.value);
const defaultStroke = computed(() => (config.value?.defaultItemStyles?.stroke as any)?.value);

</script>

<template>
    <div class="repeatable-svg-container" @click="emitClick" @contextmenu.prevent="emitRightClick">
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
                :fill="defaultFill"
                :stroke="defaultStroke"
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
                :fill="activeFill"
                :stroke="activeStroke"
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
